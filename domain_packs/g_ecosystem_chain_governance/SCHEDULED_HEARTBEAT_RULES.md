# Scheduled Heartbeat Rules

Status: Candidate / Domain Pack Support / Not Approved / No Runtime
Related: domain_packs/g_ecosystem_chain_governance/BOOTSTRAPPED_STATE.md
Related PR: #298

## Core

A scheduled check is a time gate, not task completion. It must define what is checked, who reviews, what return is expected, and what happens if stale.

## Required Fields

```yaml
Scheduled_Heartbeat:
  heartbeat_id:
  check_target:
  source_carrier:
  expected_return:
  reviewer:
  cadence:
  stop_condition:
  stale_action:
  return_to:
```

## Allowed Use

- return check
- stale candidate review
- upgrade candidate review
- archive candidate review
- manual decision reminder

## Not Allowed To Claim

- Schedule created means task completed.
- Reminder means responsibility accepted.
- Heartbeat means governance completed.
- Calendar event means execution occurred.

## Red Doors

- Scheduled Follow-up != Completion.
- Heartbeat != Gate Review.
- Calendar Event != Execution.
- Reminder != Responsibility.

## Final Rule

A heartbeat must return a packet or close itself with a stop reason. Otherwise it becomes noise.