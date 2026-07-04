# Yiyi Xiao-shi-guang CUI App

Status: Private / Sanitized App Carrier / Candidate / No Runtime

## Core

This repository is the private carrier for a small-operator availability guard app pattern.

Its purpose is to reduce availability misreads, duplicate commitments, unreviewed message replies, and maintenance black boxes for a small lodging or similar operator.

It must not contain customer data, private messages, credentials, API keys, booking records, payment information, or unapproved social materials.

## Role

```yaml
Repo_Role:
  name: "Yiyi_Xiao-shi-guang-CUI-App"
  layer: "small-operator guard app carrier"
  use_as:
    - "availability guard app pattern"
    - "GUI / PWA candidate"
    - "permission and maintenance boundary"
    - "anti-error rules"
    - "problem return template"
    - "sanitized schema candidate"
  do_not_use_as:
    - "production runtime"
    - "customer data storage"
    - "credential storage"
    - "payment system"
    - "public booking platform"
    - "automatic messaging authority"
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

## Allowed Candidate Work

- sanitized GUI flow
- anti-error gate rules
- permission model candidate
- non-technical operation cards
- maintenance boundary notes
- synthetic schema examples
- problem-return format

## Final Rule

This repository is for sanitized guard-app construction, not private operational data. AI may draft; humans decide and send. Maintainers may support the system; they do not become data owners.
