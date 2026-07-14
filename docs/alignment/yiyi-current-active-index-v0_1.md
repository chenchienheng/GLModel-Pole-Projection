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