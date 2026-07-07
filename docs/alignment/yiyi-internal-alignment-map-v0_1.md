# Yiyi Internal Alignment Map v0.1

Status: Candidate / Yiyi Alignment Map / No Runtime / No External Writeback
Repo: chenchienheng/Yiyi_Xiao-shi-guang-CUI-App

## Core Role

Yiyi_Xiao-shi-guang-CUI-App is the field projection carrier for the Xiaoshiguang gift framework and small-operator guard app experiment. It should hold OCF cell registry, CUI/GUI state boundary, field cards, problem return, owner review gate, and no-runtime field proof materials.

It must not store real customer data, payment records, official platform credentials, private conversations, or production app claims.

## Active Areas

```yaml
Yiyi_Active_Areas:
  ocf:
    - "OCF Cell Registry"
    - "Cell Flow"
    - "state and transition candidates"
  ui:
    - "CUI / GUI State Boundary"
    - "Ring Notes"
    - "State Card / Reply Draft Card / Problem Return Card candidates"
  return:
    - "Problem Return Form"
  experiments:
    - "CUI / GUI Experiment Context Pack"
  field:
    - "Gift Field Projection Intake"
```

## Must Not Store

- real guest data
- booking records
- payment records
- official platform secrets
- private conversations
- credentials / tokens
- production runtime claims
- public product claims

## QHA Read Priority

```yaml
QHA_Yiyi_Read_Order:
  1: "docs/alignment/"
  2: "docs/field/"
  3: "docs/ocf/"
  4: "docs/ui/"
  5: "docs/return/"
  6: "docs/experiments/"
```

## Red Doors

- Field Gift != Product.
- CUI Reply != Booking Confirmation.
- GUI Button != Owner Approval.
- PaymentCell Candidate != Financial System.
- Private Context != Repo Content.
- Field Proof != Runtime.

## Final Rule

Yiyi repo should prove field-safe OCF patterns with sanitized examples only. Real operations remain outside repo.