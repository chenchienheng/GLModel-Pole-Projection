# Reply Draft Card Template v0.1

Status: Candidate / Field Card Template / No Runtime / No External Writeback
Use As: no-runtime human-reviewed reply draft card for Xiaoshiguang field proof
Do Not Use As: sent message, booking confirmation, owner approval, automatic reply, or customer-data record

## Core

A Reply Draft Card prepares wording for human review. It does not send, promise, approve, reserve, or confirm.

## Template

```yaml
Reply_Draft_Card:
  card_id:
  source_cell:
  draft_purpose:
  draft_text:
  source_facts: []
  assumptions: []
  missing_checks: []
  required_human_check:
  do_not_send_until: []
  related_state_card:
  next_reader:
  return_required:
  not_to_claim: []
```

## Human Readable Surface

```text
草稿用途：
建議回覆：
依據：
假設：
送出前要確認：
不能承諾：
```

## Red Doors

- Draft != Sent Message.
- AI Reply != Booking Confirmation.
- Suggested Wording != Owner Decision.
- Message Draft != External Commitment.
- Human Review Missing != Ready To Send.

## Final Rule

Every reply draft must name what must be checked before sending. If it cannot name that check, it must not be used.