# Yiyi Superseded / Reference Index v0.1

Status: Candidate / Superseded Reference Index / No Runtime / No External Writeback / No Deletion
Repo: chenchienheng/Yiyi_Xiao-shi-guang-CUI-App

## Core

This index is the first pass for classifying older or duplicate Yiyi field projection files. It does not delete, move, or invalidate any file.

## Classification Rows

```yaml
Yiyi_Superseded_Reference:
  Reference_Pending:
    meaning: "useful lineage, not current field-proof reading layer"
    examples:
      - "older app-first drafts"
      - "early field experiment context notes"
      - "long Xiaoshiguang handoff reports"

  Superseded_Pending:
    meaning: "likely replaced by active field proof files"
    examples:
      - "production-like app claims replaced by field gift boundary"
      - "old UI scope replaced by three-card field proof"
      - "old payment wording replaced by PaymentCell red doors"

  Archive_Pending:
    meaning: "historical material to keep out of current field proof"
    examples:
      - "full handoff packets after essence extraction"
      - "duplicate sanitized context packs"

  Keep_Active:
    meaning: "listed in Yiyi Current Active Index"
    pointer: "docs/alignment/yiyi-current-active-index-v0_1.md"
```

## Review Needed

QHA should later compare actual files against current-active-index and propose path-level classifications.

## Red Doors

- Superseded Pending != Superseded Confirmed.
- Reference != Current Truth.
- Archive Pending != Deletion.
- Field Gift != Product.
- App Draft != Runtime.
- Private Context != Repo Content.

## Final Rule

Yiyi cleanup should protect the current no-runtime field proof from older app-first or production-like drift.