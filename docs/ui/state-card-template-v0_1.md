# State Card Template v0.1

Status: Candidate / Field Card Template / No Runtime / No External Writeback
Use As: no-runtime Xiaoshiguang field-proof card for showing state without creating commitment
Do Not Use As: booking confirmation, owner approval, payment status, production UI, or customer data system

## Core

A State Card makes the current candidate state visible. It does not approve, reserve, confirm, send, charge, or close anything.

## Template

```yaml
State_Card:
  card_id:
  source_cell:
  current_state: "Inquiry / Candidate_Request / Pending_Owner_Review / Approved / Blocked / Returned"
  request_summary:
  known_facts: []
  assumptions: []
  owner_review_needed: true
  blocked_actions: []
  next_allowed_action:
  next_reader:
  return_required:
  not_to_claim: []
```

## Human Readable Surface

```text
目前狀態：
目前知道：
還沒確認：
不能做：
下一步可以做：
需要誰確認：
```

## Red Doors

- Displayed State != Owner Approval.
- Pending != Approved.
- State Card != Booking System.
- Candidate Request != Reservation.
- Visible Card != Runtime Change.

## Final Rule

If the state cannot be shown without creating commitment, the card should return to Problem Return instead of advancing.