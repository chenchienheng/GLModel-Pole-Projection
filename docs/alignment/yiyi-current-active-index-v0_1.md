# Yiyi Current Active Index v0.1

Status: Candidate / Current Active Index / No Runtime / No External Writeback
Use As: current active map for Xiaoshiguang field projection reading and cleanup planning
Do Not Use As: production app scope, release approval, booking system, or closeout

## Core

This index lists the currently active Yiyi field projection files. It does not authorize production app work, real customer data, payment handling, or platform integration.

## Active Current

```yaml
Yiyi_Current_Active:
  alignment:
    - "docs/alignment/yiyi-internal-alignment-map-v0_1.md"
    - "docs/alignment/yiyi-current-active-index-v0_1.md"
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

## Superseded / Reference Pending

Earlier app-first drafts, production-like claims, and overly broad field materials must be reviewed later and marked Reference / Superseded / Archive.

## Red Doors

- Field Gift != Product.
- CUI Reply != Booking Confirmation.
- GUI Button != Owner Approval.
- PaymentCell Candidate != Financial System.
- Field Proof != Runtime.
- Private Context != Repo Content.

## Final Rule

QHA should read this index before expanding Yiyi details. The first proof remains three cards and OCF field safety, not full app production.