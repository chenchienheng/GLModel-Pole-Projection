# Governance Proposal Consolidation Report

> **Purpose**: Consolidate current proposal-level governance work around
> Snapshot Mechanism, Merge Law, and Replay Readiness, identifying overlaps,
> gaps, and providing recommendations for runtime activation.

## 1. Inventory of Existing Artifacts

- **`SNAPSHOT_MECHANISM_PROPOSAL.md`**: Proposes a minimal verifiable
  snapshot structure (Timestamp, Active State, Changed Field, Risk Field, Next
  Pulse) and a verification rule based on `main` bone and tracking registers.
- **`MERGE_LAW_PROPOSAL.md`**: Defines enforceable conditions for repository
  convergence via PR classes (Class A: Mergeable, Class B: Review-Required,
  Class C: Blocked).
- **`REPLAY_READINESS_REPORT.md`**: Evaluates gaps in repository state
  reconstructability, identifying issues with PR Grain (lack of unified summary
  format), Registry Lag, and Audit Trail.

## 2. Overlap and Gap Summary

- **Overlap**: Both `SNAPSHOT_MECHANISM_PROPOSAL.md` (via "Active State" and
  "Risk Field") and `MERGE_LAW_PROPOSAL.md` (via PR classes and rule
  consistency) focus on tracking the active operational state of PRs. Tracking
  registers are cited in both the Snapshot verification rule and the Replay
  Readiness report (as a source of "Registry Lag").
- **Gap**: There is no explicit link defining how `MERGE_LAW_PROPOSAL.md`'s
  Class A/B/C PRs translate into `SNAPSHOT_MECHANISM_PROPOSAL.md`'s
  "Changed Field" or "Risk Field".
- **Inconsistent Wording**: The Replay Readiness report refers to "unified
  summary format" for PRs, while Merge Law simply states "Zero out-of-scope
  edits" and Snapshot Mechanism refers to "Current active branches and PRs".
  The term "tracking registers" vs. "registries" is slightly inconsistent
  across files.

## 3. Mismatch or Gap

- **Mismatch_or_gap**: The current Merge Law does not mandate that a PR must
  explicitly state its impact on the next Snapshot, nor does it address the
  "Registry Lag" identified in the Replay Readiness Report. Snapshot
  verification depends on tracking registers, but Replay Readiness states that
  manual register updates cause inconsistency.

## 4. Unresolved Risks

- **Registry Contamination/Lag**: Because Snapshots rely on registers that are
  currently manually updated (and thus suffer from "Registry Lag"), a Snapshot
  might be considered valid against an outdated register.
- **PR Grain vs Merge Law**: Early PRs lack the unified format needed to
  accurately enforce Class A/B/C distinctions retrospectively, making full
  "Replay" difficult.

## 5. Governance Readiness & Recommendations

### Approval Order

1. **Merge Law**: Should be approved and formalized first, as it dictates the
   immediate PR flow and helps standardize the "PR Grain" gap moving forward.
2. **Snapshot Mechanism**: Approve second, once Merge Law enforces cleaner PR
   summaries, allowing Snapshots to rely on better data.
3. **Replay Readiness**: This is an ongoing audit report rather than a rule.
   It should be transformed into an ongoing operational checklist.

### Proposal-Only vs. Runtime Activation

- **Proposal-Only**: `REPLAY_READINESS_REPORT.md` should remain a report or
  analysis.
- **Blocks Runtime Activation**: `MERGE_LAW_PROPOSAL.md` must be active to
  ensure no further contamination enters the chain before the
  `SNAPSHOT_MECHANISM_PROPOSAL.md` is strictly enforced.

## 6. Next Single Recommended Action

- Formalize `MERGE_LAW_PROPOSAL.md` into an active doctrine (e.g.,
  `MERGE_LAW.md`) by integrating a strict PR summary template requirement to
  address the "PR Grain" gap.
