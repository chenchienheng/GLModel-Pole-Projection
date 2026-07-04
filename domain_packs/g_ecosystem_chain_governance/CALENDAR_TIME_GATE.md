# Calendar Time Gate

Status: Candidate / Domain Pack Support / Not Approved / No Runtime
Related: domain_packs/g_ecosystem_chain_governance/README.md

## Core

Calendar is a time gate. It is not a task database and not evidence that a task was completed.

## Use For

- deadline
- renewal check
- scheduled review
- pickup or visit reminder
- return check
- heartbeat only when tied to a review target

## Required Fields

```yaml
Calendar_Time_Gate:
  event_title:
  check_target:
  expected_return:
  reviewer:
  stop_condition:
  stale_action:
```

## Red Doors

- Calendar Event != Execution.
- Scheduled Follow-up != Completion.
- Reminder != Responsibility.
- Heartbeat != Gate Review.

## Final Rule

A time gate must identify what is being checked, who reviews it, what return is expected, and what happens if it becomes stale.