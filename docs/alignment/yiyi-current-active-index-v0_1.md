# Yiyi Current Active Index v0.1

Status: Candidate / Current Active Index / Cleanup Branch / No Runtime / No External Writeback
Use As: current active map for Xiaoshiguang field projection reading, privacy review, and cleanup planning
Do Not Use As: production app scope, release approval, booking system, sensitive-data store, or closeout

## Core

This index lists the currently active Yiyi field projection files. It does not authorize production app work, real customer data, payment handling, platform integration, or storage of original private conversations.

XL20 is a private sanitized Field Proof carrier. Private visibility is an access boundary, not permission to store any private source.

## Active Current

```yaml
Yiyi_Current_Active:
  alignment:
    - "docs/alignment/yiyi-internal-alignment-map-v0_1.md"
    - "docs/alignment/yiyi-current-active-index-v0_1.md"
    - "docs/alignment/xl20-field-proof-boundary-v0_1.md"
  field:
    - "docs/field/xiaoshiguang-gift-field-projection-intake-v0_1.md"
  ocf:
    - "docs/ocf/xiaoshiguang-ocf-cell-registry-v0_1-candidate.md"
    - "docs/ocf/cell-flow-v0_1.md"
  ui:
    - "docs/ui/cui-gui-state-boundary-schema-v0_1.md"
    - "docs/ui/ring-notes-v0_1.md"
  return:
    - "docs/return/problem-return-form-v0_1.md"
  experiments:
    - "docs/experiments/xiaoshiguang-cui-gui-experiment-context-pack-v0_1.md"
```

## Current Repository Boundary

```yaml
Current_State: ALIGNED_PARTIAL
Current_Role:
  - sanitized bounded field proof
  - OCF and CUI/GUI boundary patterns
  - state, reply-draft, and problem-return card candidates
Not_Current_Role:
  - production runtime
  - customer or booking database
  - credential or payment store
  - private conversation archive
  - general game-artifact repository
Pending_Verification:
  - complete repository tree
  - recent commit paths
  - file-level sensitive-data scan
```

Read `docs/alignment/xl20-field-proof-boundary-v0_1.md` before admitting a new artifact.

## First Field Proof Focus

```yaml
First_Field_Proof:
  cards:
    - "State Card"
    - "Reply Draft Card"
    - "Problem Return Card"
  do_not:
    - "no full app"
    - "no OTA"
    - "no payment"
    - "no real customer data"
    - "no automatic promise"
    - "no runtime claim"
```

Lightkeep / 微光守塔 is a separate playable-artifact object. A reusable generic pattern may be selected later, but the full game artifact and private design source do not enter XL20 automatically.

## Superseded / Reference Pending

Earlier app-first drafts, production-like claims, overly broad field materials, and unrelated private artifacts must be reviewed later and marked `REFERENCE / SUPERSEDED / MOVE_CANDIDATE / ARCHIVE_CANDIDATE`.

## Red Doors

- Field Gift != Product
- CUI Reply != Booking Confirmation
- GUI Button != Owner Approval
- PaymentCell Candidate != Financial System
- Field Proof != Runtime
- Private Context != Repo Content
- Private Repo != Unlimited Sensitive Storage
- Active Index != Complete Privacy Audit

## Final Rule

QHA should read this index before expanding Yiyi details. The first proof remains three cards and OCF field safety, not full app production. XL20 preserves small, inspectable, de-identified field proofs; it is not a catch-all private warehouse.

## R1-05 Legacy Reader Shield

Shield state: `READER_SHIELD_NATIVE_APPLIED_PR_BRANCH`  
Scope: `cleanup/r1-current-role-index-20260714` only. The default branch is unchanged. This section grants no merge, Current, Canon, runtime, release, deletion, identity, or authority promotion.

| Reader question | Branch-scoped answer |
|---|---|
| 1. Which generation is this? | `STATUS.md` and `current_files.txt` belong to the shared pre-role-differentiation snapshot generation. This repository's target role is **Field Proof / Evidence Projection candidate**. |
| 2. Is it Current now? | **No.** Legacy bodies are historical evidence. This role index is still a candidate on an unmerged cleanup branch. |
| 3. What was its historical function? | A shared architecture, coordination, registry, runtime-spine, and manifest baseline before repository-native role differentiation. |
| 4. Which meaning remains valid? | Historical provenance, the material names recorded at that revision, and bounded relation evidence remain readable. |
| 5. Which assumptions are no longer valid? | Completeness, one shared Current role, live runtime/control authority, same identity, Git ancestry, Canon, and deletion readiness. |
| 6. Where is the successor? | Reader-routing successor: this role index plus the field-proof boundary file for branch reading; no identity successor is asserted. This is not an identity-successor claim. |
| 7. What should a reader read first? | this role index, then `docs/alignment/xl20-field-proof-boundary-v0_1.md`. For exact inventory, inspect the selected branch/commit tree rather than `current_files.txt`. |
| 8. What must it not be treated as? | A current control plane, complete current manifest, runtime truth, authority registry, Canon, or permission to merge, retire, or delete. |

### Snapshot lineage ceiling

Bounded prior evidence records the initial 179-file generation as an exact full-content snapshot of the XL00 source revision. `FULL_CONTENT_SNAPSHOT_OF` does not mean same identity or Git ancestry; native lineage confirmation remains bounded to the cited evidence.

### Stale manifest disposition

Bounded R1-02/R1-04 evidence found 25 repository-native additions and `current_files.txt` coverage of `0/25`; this round did not recreate a local XL20 checkout. Proposed native disposition on this branch: `HISTORICAL_MANIFEST / READER_ROUTING_SUPERSEDED_CANDIDATE`; regenerate, replace, or retire remains an OCF/W7 owner decision.

The legacy file is retained unchanged in this branch. Its historical content is not retired, and physical deletion remains prohibited.

### Return and re-entry boundary

A new reader can recover the repository role, claim ceiling, first-read pointer, and write boundary from this index plus the shield at `STATUS.md`. Re-entry remains `PARTIAL` until the role PR is independently reviewed and merged or otherwise dispositioned by the native owner; `current_files.txt` direct-path shielding and complete native-addition disposition remain open.
