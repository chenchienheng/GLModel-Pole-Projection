import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { assess, githubRepository, workflowMajor } from './check-environment.mjs';

// Synthetic observations test decisions, not a real Node 22 session.
const expected = { repository: 'chenchienheng/GLModel-Pole-Projection', head: 'a'.repeat(40) };
const base = { repository: expected.repository, head: expected.head, node_major: 22, pinned_node_major: 22, workflow_node_major: 22, agents_sha256: 'b'.repeat(64), dirty: false };

test('exact synthetic observation passes without claiming session adoption', () => {
  const result = assess(base, expected);
  assert.equal(result.status, 'CHECKED');
  assert.match(result.limits.agents, /does not prove/);
});
test('Node 20 and Node 24 cannot masquerade as the Node 22 policy', () => {
  for (const node_major of [20, 24]) assert.ok(assess({ ...base, node_major }, expected).issues.includes('NODE_RUNTIME_MISMATCH'));
});
test('a changed pin cannot hide disagreement with CI', () => {
  assert.ok(assess({ ...base, pinned_node_major: 24, node_major: 24 }, expected).issues.includes('NODE_PIN_WORKFLOW_MISMATCH'));
});
test('wrong HEAD, wrong repository and unresolved origin are distinguished', () => {
  assert.ok(assess({ ...base, head: 'c'.repeat(40) }, expected).issues.includes('HEAD_MISMATCH'));
  assert.ok(assess({ ...base, repository: 'someone/another-repo' }, expected).issues.includes('REPOSITORY_MISMATCH'));
  assert.ok(assess({ ...base, repository: null }, expected).issues.includes('ORIGIN_IDENTITY_UNVERIFIED'));
});
test('missing selected ref is reported rather than recreated', () => {
  assert.ok(assess({ ...base, selected_ref_head: null }, { ...expected, ref: 'old/missing' }).issues.includes('SELECTED_REF_MISSING_OR_DIFFERENT'));
});
test('dirty work is reported without rejecting independent authorized edits', () => {
  const result = assess({ ...base, dirty: true }, expected);
  assert.equal(result.status, 'CHECKED');
  assert.equal(result.observed.dirty, true);
});
test('origin normalization does not expose credentials or trust another host', () => {
  for (const url of ['https://github.com/Owner/Repo.git', 'git@github.com:Owner/Repo.git', 'https://user:fixture-secret@github.com/Owner/Repo.git']) assert.equal(githubRepository(url), 'Owner/Repo');
  for (const url of ['https://github.com.example/Owner/Repo', '/local/mirror', 'file:///repo', 'https://github.com/Owner/Repo/extra']) assert.equal(githubRepository(url), null);
});
test('only one literal workflow major is accepted', () => {
  assert.equal(workflowMajor("  node-version: '22'\n"), 22);
  for (const text of ['node-version: ${{ matrix.node }}', "node-version: '22'\nnode-version: '24'", "node-version: '22.1.0'", 'node-version-file: .nvmrc', "node-version: '22", 'node-version: 22"']) assert.equal(workflowMajor(text), null);
});
test('real subprocess checks an isolated fixture without mutating its source', () => {
  const root = mkdtempSync(join(tmpdir(), 'quint-env-check-'));
  const git = args => execFileSync('git', ['-C', root, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
  const cli = fileURLToPath(new URL('./check-environment.mjs', import.meta.url));
  try {
    git(['init', '-b', 'main']);
    git(['config', 'user.name', 'Local Synthetic Test']);
    git(['config', 'user.email', 'synthetic@example.invalid']);
    git(['remote', 'add', 'origin', 'https://github.com/chenchienheng/GLModel-Pole-Projection.git']);
    mkdirSync(join(root, '.github/workflows'), { recursive: true });
    writeFileSync(join(root, '.nvmrc'), '22\n');
    writeFileSync(join(root, 'AGENTS.md'), 'Synthetic fixture, not repository instructions.\n');
    writeFileSync(join(root, '.github/workflows/semantic-core-verify.yml'), "node-version: '22'\n");
    git(['add', '.']);
    git(['commit', '-m', 'synthetic fixture']);
    const head = git(['rev-parse', 'HEAD']);
    const args = ['--expected-repo', expected.repository, '--expected-head', head];
    const run = spawnSync(process.execPath, [cli, ...args], { cwd: root, encoding: 'utf8', timeout: 20000 });
    const report = JSON.parse(run.stdout);
    assert.equal(report.observed.head, head);
    assert.equal(report.observed.node_version, process.version);
    assert.equal(report.observed.dirty, false);
    const matches = Number(process.versions.node.split('.')[0]) === 22;
    assert.equal(run.status, matches ? 0 : 2);
    assert.equal(report.issues.includes('NODE_RUNTIME_MISMATCH'), !matches);
    const missing = spawnSync(process.execPath, [cli, ...args, '--expected-ref', 'does-not-exist'], { cwd: root, encoding: 'utf8', timeout: 20000 });
    assert.equal(missing.status, 2);
    assert.ok(JSON.parse(missing.stdout).issues.includes('SELECTED_REF_MISSING_OR_DIFFERENT'));
    assert.equal(git(['status', '--porcelain']), '');
    assert.equal(git(['rev-parse', 'HEAD']), head);
    const invalid = spawnSync(process.execPath, [cli, '--expected-head', head], { cwd: root, encoding: 'utf8', timeout: 20000 });
    assert.equal(invalid.status, 2);
    assert.match(invalid.stderr, /EXPLICIT_SOURCE_IDENTITY_REQUIRED/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});
