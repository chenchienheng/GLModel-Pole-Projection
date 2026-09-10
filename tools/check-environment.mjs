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
  const issues = [];
  if (!/^[0-9a-f]{40}$/i.test(expected.head ?? '')) issues.push('EXPECTED_HEAD_REQUIRED');
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(expected.repository ?? '')) issues.push('EXPECTED_REPOSITORY_REQUIRED');
  if (observed.head !== expected.head?.toLowerCase()) issues.push('HEAD_MISMATCH');
  if (!observed.repository) issues.push('ORIGIN_IDENTITY_UNVERIFIED');
  else if (observed.repository.toLowerCase() !== expected.repository?.toLowerCase()) issues.push('REPOSITORY_MISMATCH');
  if (!Number.isInteger(observed.pinned_node_major) || observed.pinned_node_major < 1) issues.push('NODE_PIN_INVALID');
  if (!Number.isInteger(observed.workflow_node_major)) issues.push('WORKFLOW_NODE_POLICY_UNVERIFIED');
  else if (observed.workflow_node_major !== observed.pinned_node_major) issues.push('NODE_PIN_WORKFLOW_MISMATCH');
  if (observed.node_major !== observed.pinned_node_major) issues.push('NODE_RUNTIME_MISMATCH');
  if (!/^[0-9a-f]{64}$/.test(observed.agents_sha256 ?? '')) issues.push('AGENTS_HASH_MISSING');
  if (expected.ref && observed.selected_ref_head !== observed.head) issues.push('SELECTED_REF_MISSING_OR_DIFFERENT');
  return {
    schema: 'repository-environment-check/v1',
    status: issues.length ? 'MISMATCH' : 'CHECKED',
    issues,
    expected: { repository: expected.repository, head: expected.head, ref: expected.ref ?? null },
    observed,
    limits: {
      dirty_worktree: 'Reported, not automatically discarded or treated as permission to clean.',
      agents: 'Bytes read and hashed; this does not prove an agent session loaded or followed them.',
      runtime: 'Local repository and Node checks only; not CI, application, browser, deployment or receiver acceptance.',
      authority: 'No fetch, install, branch recreation, config write, merge, deployment or approval is performed.',
    },
  };
}

export function collect(cwd, expected) {
  const git = (args, optional = false) => {
    try { return execFileSync('git', ['-C', cwd, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 10000 }).trim(); }
    catch { if (optional) return null; fail('GIT_READ_UNAVAILABLE'); }
  };
  const root = git(['rev-parse', '--show-toplevel']);
  const read = path => {
    try { return readFileSync(join(root, path)); }
    catch { fail(`REQUIRED_FILE_UNREADABLE:${path}`); }
  };
  const pin = read('.nvmrc').toString('utf8').trim();
  const agents = read('AGENTS.md');
  const workflow = read(WORKFLOW);
  return {
    repository: githubRepository(git(['config', '--get', 'remote.origin.url'], true) ?? ''),
    head: git(['rev-parse', '--verify', 'HEAD']),
    branch: git(['symbolic-ref', '--quiet', '--short', 'HEAD'], true),
    selected_ref_head: expected.ref ? git(['rev-parse', '--verify', '--end-of-options', `${expected.ref}^{commit}`], true) : null,
    dirty: Boolean(git(['status', '--porcelain=v1', '-z'])),
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
