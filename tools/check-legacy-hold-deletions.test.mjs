import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { checkLegacyHoldDeletions } from './check-legacy-hold-deletions.mjs';

function fixture(t, change) {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'legacy-hold-fixture-'));
  t.after(() => fs.rmSync(cwd, { recursive: true, force: true }));
  const git = (...args) => execFileSync('git', args, {
    cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'],
  }).trim();
  const write = (name, body) => {
    fs.mkdirSync(path.dirname(path.join(cwd, name)), { recursive: true });
    fs.writeFileSync(path.join(cwd, name), body);
  };
  const commit = () => {
    git('add', '-A');
    git('-c', 'user.name=Fixture', '-c', 'user.email=fixture@example.invalid', 'commit', '-qm', 'fixture');
    return git('rev-parse', 'HEAD');
  };
  git('init', '-q');
  write('semantic-core/disposition/legacy-family-disposition.json', JSON.stringify({ families: [
    { path_family: 'held', reclaim_state: 'HOLD_FOR_EVIDENCE' },
    { path_family: 'reserved', reclaim_state: 'HOLD_FOR_TRIGGER' },
    { path_family: 'ordinary', reclaim_state: 'REFERENCE_ONLY' },
  ] }));
  for (const name of ['held/空 白.md', 'held/move.md', 'reserved/keep.md', 'held-extra/file.md', 'ordinary/file.md']) {
    write(name, name);
  }
  const base = commit();
  change({ cwd, write });
  const head = commit();
  return { cwd, base, head };
}

test('removals and renames preserve exact Unicode paths and intersect declared HOLDs', t => {
  const f = fixture(t, ({ cwd }) => {
    fs.rmSync(path.join(cwd, 'held/空 白.md'));
    fs.renameSync(path.join(cwd, 'held/move.md'), path.join(cwd, 'moved.md'));
    fs.rmSync(path.join(cwd, 'reserved/keep.md'));
  });
  const result = checkLegacyHoldDeletions(f);
  assert.equal(result.status, 'HOLD_DELETION_CONFLICT');
  assert.deepEqual(result.violations, [
    { path_family: 'held', reclaim_state: 'HOLD_FOR_EVIDENCE', deleted_paths: ['held/move.md', 'held/空 白.md'] },
    { path_family: 'reserved', reclaim_state: 'HOLD_FOR_TRIGGER', deleted_paths: ['reserved/keep.md'] },
  ]);
});

test('untouched HOLD families and similar prefixes do not produce false conflicts', t => {
  const f = fixture(t, ({ cwd }) => {
    fs.rmSync(path.join(cwd, 'held-extra/file.md'));
    fs.rmSync(path.join(cwd, 'ordinary/file.md'));
  });
  const result = checkLegacyHoldDeletions(f);
  assert.equal(result.status, 'CONSISTENT_WITH_DECLARED_HOLDS');
  assert.deepEqual(result.violations, []);
  assert.match(result.claim_ceiling, /not deletion approval/);
});

test('missing event baseline and incorrect checkout identity fail closed', t => {
  const f = fixture(t, ({ write }) => write('new.md', 'new'));
  const missing = checkLegacyHoldDeletions({ ...f, base: '0'.repeat(40) });
  assert.equal(missing.status, 'UNVERIFIED');
  assert.equal(missing.error, 'BASELINE_UNAVAILABLE');
  const wrongHead = checkLegacyHoldDeletions({ ...f, head: f.base });
  assert.equal(wrongHead.status, 'UNVERIFIED');
  assert.equal(wrongHead.error, 'CHECKOUT_HEAD_MISMATCH');
});

test('unreadable candidate disposition cannot produce a consistency result', t => {
  const f = fixture(t, ({ write }) => write('semantic-core/disposition/legacy-family-disposition.json', '{'));
  const result = checkLegacyHoldDeletions(f);
  assert.equal(result.status, 'UNVERIFIED');
  assert.equal(result.error, 'DISPOSITION_INVALID_JSON');
});
