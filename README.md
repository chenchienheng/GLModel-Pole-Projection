# Yiyi Xiao-shi-guang CUI App

Status: Private / Sanitized Field Projection Carrier / Candidate / No Runtime / No Public Product Approval

## One-line Description

Private sanitized CUI guard field for availability, permission, maintenance, anti-error rules, and field-proof interaction patterns.

## Core

This repository is the private field projection carrier for the Xiaoshiguang gift framework and small-operator guard app experiment.

It explores OCF cells, CUI/GUI state boundaries, state cards, reply draft cards, problem return cards, owner-review gates, and maintenance boundaries for a small lodging or similar operator.

It must not contain real guest data, private messages, credentials, API keys, booking records, payment information, official platform secrets, or unapproved social materials.

## Role

```yaml
Repo_Role:
  name: "Yiyi_Xiao-shi-guang-CUI-App"
  layer: "Field / Xiaoshiguang CUI Guard / OCF field proof"
  use_as:
    - "OCF Cell Registry"
    - "CUI / GUI State Boundary"
    - "State Card candidate"
    - "Reply Draft Card candidate"
    - "Problem Return Card candidate"
    - "Owner Review gate"
    - "anti-error rules"
    - "sanitized schema examples"
  do_not_use_as:
    - "production runtime"
    - "customer data storage"
    - "credential storage"
    - "payment system"
    - "public booking platform"
    - "automatic messaging authority"
    - "public product claim"
```

## First Field Proof

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

## Core Gates

- Availability Gate: do not answer available before checking availability.
- Unit Gate: do not confirm before a specific room/unit is identified.
- Message Gate: generated replies are drafts only and require human review.
- Duplicate Commitment Gate: do not double-hold or double-confirm the same unit and date.
- Data Permission Gate: maintenance access is not customer-data access.
- Material Truth Gate: display material must be official or authorized.
- Social Content Gate: social content requires account-owner authorization before formal use.

## Not To Store

- guest names
- phone numbers
- LINE IDs
- private message screenshots
- booking details
- payment records
- passwords
- API keys
- tokens
- Supabase URLs or keys
- GitHub tokens
- unredacted operational screenshots
- unauthorized social content

## Current Active Reading Layer

Start with:

```yaml
QHA_Read_Order:
  1: "docs/alignment/yiyi-current-active-index-v0_1.md"
  2: "docs/field/xiaoshiguang-gift-field-projection-intake-v0_1.md"
  3: "docs/ocf/xiaoshiguang-ocf-cell-registry-v0_1-candidate.md"
  4: "docs/ui/field-card-spec-v0_1.md"
  5: "docs/return/problem-return-form-v0_1.md"
```

## Final Rule

This repository is for sanitized no-runtime field proof, not private operational data. AI may draft; humans decide and send. Maintainers may support the system; they do not become data owners.