import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const WORKFLOW = '.github/workflows/semantic-core-verify.yml';
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const fail = code => { throw new Error(code); };

// Return repository identity only, never credentials from an origin URL.
export function githubRepository(origin) {
  let path;
  const ssh = /^git@github\.com:([^\s]+)$/.exec(origin);
  if (ssh) path = ssh[1];
  else {
    let url;
    try { url = new URL(origin); } catch { return null; }
    if (url.hostname !== 'github.com' || !['https:', 'ssh:'].includes(url.protocol)) return null;
    path = url.pathname.replace(/^\//, '');
  }
  path = path.replace(/\.git$/, '');
  return /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(path) ? path : null;
}

export function workflowMajor(text) {
  const keys = text.match(/^\s*node-version\s*:/gm) ?? [];
  const matches = [...text.matchAll(/^\s*node-version:\s*(?:'(\d+)'|"(\d+)"|(\d+))\s*(?:#.*)?$/gm)];
  // This repository has one literal major, not a general-purpose YAML parser.
  return keys.length === 1 && matches.length === 1 ? Number(matches[0][1] ?? matches[0][2] ?? matches[0][3]) : null;
}

export function assess(observed, expected) {
  const mismatches = [];
  const unverified = [];
  const validHead = value => /^[0-9a-f]{40}$/i.test(value ?? '');
  const validRepo = value => /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(value ?? '');
  const validMajor = value => Number.isInteger(value) && value > 0;
  if (!validHead(expected.head)) unverified.push('EXPECTED_HEAD_REQUIRED');
  if (!validRepo(expected.repository)) unverified.push('EXPECTED_REPOSITORY_REQUIRED');
  if (!validHead(observed.head)) unverified.push('HEAD_UNVERIFIED');
  else if (validHead(expected.head) && observed.head.toLowerCase() !== expected.head.toLowerCase()) mismatches.push('HEAD_MISMATCH');
  if (!validRepo(observed.repository)) unverified.push('ORIGIN_IDENTITY_UNVERIFIED');
  else if (validRepo(expected.repository) && observed.repository.toLowerCase() !== expected.repository.toLowerCase()) mismatches.push('REPOSITORY_MISMATCH');
  if (!validMajor(observed.pinned_node_major)) unverified.push('NODE_PIN_INVALID');
  if (!validMajor(observed.workflow_node_major)) unverified.push('WORKFLOW_NODE_POLICY_UNVERIFIED');
  else if (validMajor(observed.pinned_node_major) && observed.workflow_node_major !== observed.pinned_node_major) mismatches.push('NODE_PIN_WORKFLOW_MISMATCH');
  if (!validMajor(observed.node_major)) unverified.push('NODE_RUNTIME_UNVERIFIED');
  else if (validMajor(observed.pinned_node_major) && observed.node_major !== observed.pinned_node_major) mismatches.push('NODE_RUNTIME_MISMATCH');
  if (!/^[0-9a-f]{64}$/.test(observed.agents_sha256 ?? '')) unverified.push('AGENTS_HASH_MISSING');
  if (expected.ref) {
    if (!validHead(observed.selected_ref_head)) unverified.push('SELECTED_REF_UNRESOLVED');
    else if (validHead(observed.head) && observed.selected_ref_head.toLowerCase() !== observed.head.toLowerCase()) mismatches.push('SELECTED_REF_MISMATCH');
  }
  return {
    schema: 'repository-environment-check/v2',
    // A proven mismatch and an unresolved check can coexist; retain both.
    status: mismatches.length ? 'MISMATCH' : unverified.length ? 'UNVERIFIED' : 'CHECKED',
    issues: [...mismatches, ...unverified],
    mismatches,
    unverified,
    expected: { repository: expected.repository, head: expected.head, ref: expected.ref ?? null },
    observed,
    limits: {
      dirty_worktree: 'Reported, not automatically discarded or treated as permission to clean.',
      agents: 'Bytes read and hashed; this does not prove an agent session loaded or followed them.',
      runtime: 'Local repository and Node checks only; not CI, application, browser, deployment or receiver acceptance.',
      authority: 'No fetch, install, branch recreation, config write, merge, deployment or approval is performed.',
      diagnostics: 'Unresolved ref does not prove absence. Origin identifies configured GitHub syntax only, not network reachability. Exit 2 is not a global work blocker.',
    },
  };
}

export function collect(cwd, expected, runGit = execFileSync) {
  const git = args => {
    try {
      const value = runGit('git', ['-C', cwd, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 10000, env: { ...process.env, GIT_OPTIONAL_LOCKS: '0' } }).trim();
      return { state: 'READ', value, exit_code: 0 };
    } catch (error) {
      // Do not serialize raw command errors, stderr or origin credentials.
      return { state: 'UNAVAILABLE', value: null, exit_code: Number.isInteger(error.status) ? error.status : null };
    }
  };
  const rootRead = git(['rev-parse', '--show-toplevel']);
  if (rootRead.state !== 'READ' || !rootRead.value) fail('GIT_READ_UNAVAILABLE');
  const root = rootRead.value;
  const read = path => {
    try { return readFileSync(join(root, path)); }
    catch { fail(`REQUIRED_FILE_UNREADABLE:${path}`); }
  };
  const pin = read('.nvmrc').toString('utf8').trim();
  const agents = read('AGENTS.md');
  const workflow = read(WORKFLOW);
  const origin = git(['config', '--get', 'remote.origin.url']);
  const repository = githubRepository(origin.value ?? '');
  const originState = origin.state === 'READ'
    ? origin.value === '' ? 'EMPTY' : repository ? 'IDENTIFIED' : 'UNSUPPORTED'
    : origin.exit_code === 1 ? 'MISSING' : 'UNAVAILABLE';
  const head = git(['rev-parse', '--verify', 'HEAD']);
  const selectedRef = expected.ref
    ? git(['rev-parse', '--verify', '--end-of-options', `${expected.ref}^{commit}`])
    : { state: 'NOT_REQUESTED', value: null, exit_code: null };
  const status = git(['status', '--porcelain=v1', '-z']);
  if (status.state !== 'READ') fail('GIT_STATUS_UNAVAILABLE');
  return {
    repository,
    head: head.value,
    branch: git(['symbolic-ref', '--quiet', '--short', 'HEAD']).value,
    selected_ref_head: selectedRef.value,
    git_reads: {
      origin: { state: originState, exit_code: origin.exit_code },
      head: { state: head.state, exit_code: head.exit_code },
      selected_ref: { state: expected.ref ? selectedRef.state === 'READ' ? 'RESOLVED' : 'UNRESOLVED' : 'NOT_REQUESTED', exit_code: selectedRef.exit_code },
    },
    dirty: Boolean(status.value),
    node_version: process.version,
    node_major: Number(process.versions.node.split('.')[0]),
    pinned_node_major: /^\d+$/.test(pin) ? Number(pin) : null,
    workflow_node_major: workflowMajor(workflow.toString('utf8')),
    workflow_sha256: sha256(workflow),
    agents_sha256: sha256(agents),
  };
}

export function main(args) {
  if (args.length === 1 && args[0] === '--help') {
    console.log('node tools/check-environment.mjs --expected-repo OWNER/REPO --expected-head FULL_SHA [--expected-ref REF]');
    console.log('Resolve expected identity from the intended repository/task first; do not copy the local HEAD merely to make this check pass. Run from the selected worktree.');
    return 0;
  }
  const expected = {};
  const options = { '--expected-repo': 'repository', '--expected-head': 'head', '--expected-ref': 'ref' };
  for (let i = 0; i < args.length; i += 2) {
    const key = options[args[i]];
    if (!key || expected[key] !== undefined || !args[i + 1] || args[i + 1].startsWith('-')) fail('INVALID_ARGUMENTS');
    expected[key] = args[i + 1];
  }
  if (!/^[0-9a-f]{40}$/i.test(expected.head ?? '') || !/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(expected.repository ?? '')) fail('EXPLICIT_SOURCE_IDENTITY_REQUIRED');
  expected.head = expected.head.toLowerCase();
  const receipt = { observed_at: new Date().toISOString(), ...assess(collect(process.cwd(), expected), expected) };
  console.log(JSON.stringify(receipt, null, 2));
  return receipt.status === 'CHECKED' ? 0 : 2;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { process.exitCode = main(process.argv.slice(2)); }
  catch (error) {
    console.error(JSON.stringify({ status: 'CHECK_UNAVAILABLE', code: error.message }));
    process.exitCode = 2;
  }
}
