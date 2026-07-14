# Yiyi Current Active Index v0.1

**Repository:** `XuanLing-20-FieldProof-Xiaoshiguang`  
**Visibility:** Private  
**Status:** Candidate / Current Active Index / Sanitized field-proof carrier / No Runtime / No External Writeback

## 一句核心

XL20 只承載去識別化、可驗證、有限範圍的 Field Proof 與可重用卡片／Schema；Private repository 不等於可存放私人原文、真實營運資料或所有實驗 Artifact。

## Core

This index lists the currently active Yiyi field-projection files. It does not authorize production app work, real customer data, payment handling, platform integration, automatic messaging, or unrestricted private-source storage.

```yaml
Repo_Role:
  use_as:
    - sanitized field-proof patterns
    - OCF cell and flow candidates
    - CUI / GUI state boundaries
    - State / Reply Draft / Problem Return cards
    - owner-review and anti-error rules
  do_not_use_as:
    - production runtime
    - private message archive
    - customer or booking database
    - credential or payment carrier
    - unrestricted asset repository
    - automatic commitment authority
```

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

## 2026-07-14 Role Alignment Delta

```yaml
Repository_State:
  classification: ALIGNED_PARTIAL
  evidence:
    - README and current index align with sanitized field-proof role
    - no visible open pull request in the bounded inventory
  still_unknown:
    - complete repository tree
    - recent main commits and changed paths
    - file-level privacy scan
    - private-case leakage
    - template / UI / field-proof separation
```

## Artifact Boundary

- Lightkeep／微光守塔 is a separate playable artifact and is not automatically part of XL20.
- A field-proof template may be shared without copying its original private case.
- Images, screenshots and logs require explicit de-identification and purpose review.
- Private repository visibility does not grant authority to store credentials, personal conversations, customer records or unredacted operational evidence.

## Superseded / Reference Pending

Earlier app-first drafts, production-like claims, overly broad field materials and any content outside the three-card／OCF safety scope must be reviewed and marked Reference / Superseded / Park / Move Candidate.

## Next Bounded Action

1. Complete file-tree and recent-commit inventory.
2. Run a file-level sensitive-content and role-boundary review.
3. Confirm which artifacts remain active Field Proof and which are templates, references or move candidates.
4. Do not merge this alignment branch before independent readback.

## Red Doors

- Field Gift != Product
- CUI Reply != Booking Confirmation
- GUI Button != Owner Approval
- PaymentCell Candidate != Financial System
- Field Proof != Runtime
- Private Context != Repo Content
- Private Repo != Unlimited Sensitive Storage
- Classification != Migration

## Final Rule

QHA should read this index before expanding XL20 details. The first proof remains three cards and OCF field safety, not a full application, operational database or private-life archive.