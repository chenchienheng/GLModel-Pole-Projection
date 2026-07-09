# Problem Return Card Template v0.1

Status: Candidate / Field Card Template / No Runtime / No External Writeback
Use As: no-runtime return card for uncertainty, error, blocked state, or missing authority in Xiaoshiguang field proof
Do Not Use As: blame note, closeout, owner approval, production issue tracker, or customer-data record

## Core

A Problem Return Card turns uncertainty or failure into return material. It does not blame a person and does not close the issue.

## Template

```yaml
Problem_Return_Card:
  card_id:
  source_cell:
  issue_type: "missing_information / authority_unclear / state_conflict / wording_risk / data_boundary / other"
  observed_problem:
  affected_state:
  gate_triggered:
  temporary_safe_action:
  suggested_rule_patch:
  suggested_ui_patch:
  authority_patch_needed:
  next_reader:
  return_to:
  not_to_claim: []
```

## Human Readable Surface

```text
問題：
卡在哪一關：
目前安全做法：
要誰確認：
下次怎麼避免：
```

## Red Doors

- Problem Return != Blame.
- Feedback != Closeout.
- Issue Found != Owner Approval.
- Temporary Fix != Rule Patch Approved.
- Problem Card != Production Incident System.

## Final Rule

If a field state cannot safely advance, it must return as a Problem Return Card instead of being forced through the flow.