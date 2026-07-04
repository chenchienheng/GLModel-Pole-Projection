# Repository Hygiene Reconciliation

## Purpose

Review current open issues, open PRs, and branches after Issue #49 / PR #50 to
reconcile execution states against actual repository structures. This report
aligns with Phase 2 (Legacy Seed Extraction and Rebind) without deleting
branches, automatically closing issues, rewriting doctrine, or expanding
runtime.

## 1. Open Issue Review

The following classification uses state layering based on `main` branch master
consolidation:

- **#1 Re-index existing repo corpus**: STRUCTURE_ESTABLISHED (Absorbed trace,
  must remain open as structural anchor)
- **#2 Extract xuanling-seed-v0-1**: STRUCTURE_ESTABLISHED (Absorbed trace,
  must remain open as structural anchor)
- **#6 Scheduler Topology Reconcile**: STRUCTURE_ESTABLISHED (Absorbed trace)
- **#9 First standardized task run**: STRUCTURE_ESTABLISHED (Absorbed trace)
- **#15 Governance Consolidation**: STRUCTURE_ESTABLISHED (Absorbed trace)
- **#43 Master Consolidation Review**: DUPLICATE (See Section 2)
- **#44 CoreTri Master Consolidation Review**: ACTIVE (Current consolidation
  surface)
- **#49 Physical Signal Boundary Definition**: STRUCTURE_ESTABLISHED (PR #50
  has now been merged, so the Physical Signal Boundary layer is structurally
  established)

*(Note: Legacy issues #3-5, #7-8, #10-11, #14, #25, #28-35, #38 are classified
as SUPERSEDED in the master review, and issues corresponding to merged PRs like
#12, #13, #21-24, #26-27 are TRACE_ONLY).*

## 2. Duplicate Issue Check

- **Issue #43 (Master Consolidation Review)**
- **Issue #44 (CoreTri Master Consolidation Review)**

**Decision**: Issue #44 is the canonical master consolidation issue. It reflects
the actual artifact `CORETRI_MASTER_CONSOLIDATION_REVIEW.md` currently
present on `main` branch. Issue #43 should be classified as DUPLICATE.

## 3. Open PR Review

Current active PRs must be resolved in the following structural dependency
order to avoid merge conflicts and ensure atomicity:

1. **PR #50 (Physical Signal Boundary Definition)**: PR #50 has already been
   merged; no merge action remains for PR #50.
2. **PR for Issue #44 (CoreTri Master Consolidation Review)**: Merges the
   global state reconciliation to baseline the taskboard.

*(Note: Other PRs found via `git branch -r` mapping to specific feature branches
should be evaluated against this baseline once #44 is sealed).*

## 4. Branch Review

Branches currently present in the repository, classified structurally:

- `main`: ACTIVE_BRANCH (Master state)
- `origin/xuanling-seed-v0-1`: PRESERVE_ARCHIVE_BRANCH (Legacy seed reservoir,
  do not merge)
- `origin/cleanup/refinement-v0-1`: UNKNOWN_REVIEW_REQUIRED
- `origin/feat/issue-44-coretri-consolidation-*`: ACTIVE_BRANCH
- `origin/issue-49-physical-signal-boundary-*`: MERGED_OR_STALE_BRANCH
  (Assuming PR #50 is merged or ready to merge)
- `origin/jules-*`: UNKNOWN_REVIEW_REQUIRED (Execution traces)
- `origin/reconcile-scheduler-topology-*`: MERGED_OR_STALE_BRANCH
- `origin/time-chain-master-layer-*`: MERGED_OR_STALE_BRANCH

## 5. Manual Cleanup Recommendations

The following actions should be performed manually by a human maintainer to
align the GitHub interface with the repository state:

1. **Close Issue #43**: Mark as closed due to duplication with #44.
2. **Review and Close Stale Branches**: Manually delete
   `reconcile-scheduler-topology-*` and `time-chain-master-layer-*` if their
   contents are confirmed merged into `main`.
3. **Queue PR #50 for Merge**: PR #50 has already been merged; no merge
   action remains for PR #50.
4. **Queue the PR associated with Issue #44 /**
   **CORETRI_MASTER_CONSOLIDATION_REVIEW.md for review.**: Finalize the
   master consolidation map.

## 6. mismatch_or_gap

- The proliferation of `jules-*` and `origin/jules/*` execution branches
  indicates that intermediate work states are not being consistently cleaned up
  after PR merges.
- Issue #43 and #44 represent redundant effort on the same consolidation task,
  pointing to a gap in pre-execution uniqueness verification.

## 7. unresolved_risks

- Accumulation of stale branches (`UNKNOWN_REVIEW_REQUIRED` and
  `MERGED_OR_STALE_BRANCH`) may lead to accidental re-merges or confusion in
  future Phase 2 seed extraction tasks.
- Leaving #43 open in parallel with #44 splits the "source of truth" for the
  consolidation state, risking divergent doctrine.

## 8. next_single_recommended_action

The human maintainer should manually close Issue #43 as DUPLICATE, then review
empty or stale PRs/branches such as old Jules execution branches.
