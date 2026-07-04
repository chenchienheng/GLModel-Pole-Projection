# Promotion Gate Template

Status: Candidate / Template / No Runtime

## Core

A document or issue should not move to a higher state until promotion requirements are visible.

```yaml
Promotion_Gate:
  item_id:
  current_status: "Candidate"
  requested_next_status:
  source:
  carrier:
  authority:
  evidence_refs: []
  red_door_scan: []
  reviewer:
  needs_human_decision: true
  cannot_promote_if:
    - "runtime claim exists"
    - "authority unclear"
    - "carrier unclear"
    - "domain pack mixed into core"
    - "internal role routing mixed into canonical gate"
  decision: "Review_Needed / Promote / Park / Reject"
```

## Red Doors

- Context Accepted != Core Approved.
- Build Index Ready != Construction Approved.
- Review Needed != Approved.
- Promotion Gate != Human Decision.
