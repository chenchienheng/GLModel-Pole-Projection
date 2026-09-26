import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const dispositionPath = 'semantic-core/disposition/legacy-family-disposition.json';
const claimCeiling = 'Declared HOLD consistency only; not deletion approval or satisfaction of all delete gates.';

// Workflow supplies the pull_request event base and checked-out merge commit.
// No fetch, configuration change, authority decision, or source mutation occurs here.
export function checkLegacyHoldDeletions({ base, head, cwd = process.cwd() }) {
  const result = {
    profile: 'PR_LEGACY_HOLD_DELETION_CHECK',
    base, head, status: 'UNVERIFIED', violations: [], claim_ceiling: claimCeiling,
  };
  const git = (args, failure) => {
    try {
      return execFileSync('git', args, {
        cwd, encoding: 'utf8', maxBuffer: 8 * 1024 * 1024,
        stdio: ['ignore', 'pipe', 'pipe'],
      });
    } catch {
      throw new Error(failure);
    }
  };
  try {
    if (!/^[0-9a-f]{40}$/i.test(base || '') || !/^[0-9a-f]{40}$/i.test(head || '')) {
      throw new Error('FULL_EVENT_COMMIT_SHAS_REQUIRED');
    }
    git(['cat-file', '-e', `${base}^{commit}`], 'BASELINE_UNAVAILABLE');
    git(['cat-file', '-e', `${head}^{commit}`], 'CANDIDATE_COMMIT_UNAVAILABLE');
    if (git(['rev-parse', '--verify', 'HEAD'], 'CHECKOUT_HEAD_UNAVAILABLE').trim() !== head) {
      throw new Error('CHECKOUT_HEAD_MISMATCH');
    }
    git(['merge-base', '--is-ancestor', base, head], 'BASELINE_NOT_REACHABLE_FROM_CHECKOUT');

    let disposition;
    try {
      disposition = JSON.parse(git(['show', `${head}:${dispositionPath}`], 'DISPOSITION_UNAVAILABLE'));
    } catch (error) {
      if (error.message === 'DISPOSITION_UNAVAILABLE') throw error;
      throw new Error('DISPOSITION_INVALID_JSON');
    }
    if (!Array.isArray(disposition.families)) throw new Error('DISPOSITION_FAMILIES_MISSING');
    for (const family of disposition.families) {
      if (typeof family.path_family !== 'string' || !family.path_family ||
          family.path_family.startsWith('/') || family.path_family.includes('\\') ||
          family.path_family.split('/').some(part => !part || part === '.' || part === '..') ||
          typeof family.reclaim_state !== 'string') {
        throw new Error('DISPOSITION_FAMILY_INVALID');
      }
    }

    // A rename out of a held family is still removal of its baseline path.
    const deleted = git([
      'diff', '--no-renames', '--diff-filter=D', '--name-only', '-z', base, head, '--',
    ], 'DELETION_DIFF_UNAVAILABLE').split('\0').filter(Boolean);
    result.deleted_path_count = deleted.length;
    for (const family of disposition.families.filter(f => f.reclaim_state.startsWith('HOLD'))) {
      const paths = deleted.filter(p => p === family.path_family || p.startsWith(`${family.path_family}/`));
      if (paths.length) result.violations.push({
        path_family: family.path_family, reclaim_state: family.reclaim_state, deleted_paths: paths,
      });
    }
    result.status = result.violations.length ? 'HOLD_DELETION_CONFLICT' : 'CONSISTENT_WITH_DECLARED_HOLDS';
  } catch (error) {
    result.error = error.message;
  }
  return result;
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  const args = process.argv.slice(2);
  const validArgs = args.length === 4 && args[0] === '--base' && args[2] === '--head';
  const result = checkLegacyHoldDeletions({ base: validArgs ? args[1] : '', head: validArgs ? args[3] : '' });
  console.log(JSON.stringify(result, null, 2));
  process.exitCode = result.status === 'UNVERIFIED' ? 2 : result.violations.length ? 1 : 0;
}
