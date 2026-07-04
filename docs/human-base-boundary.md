# Human-Base Boundary

Status: Candidate / Human-Gated Boundary / No Runtime

## Core

Some operational details should stay outside the repository and remain human-based.

This repository stores patterns, gates, UI logic, and maintenance boundaries. It does not store restricted operational material.

## Human-Base Rule

When a task needs real operational context, the repository should only keep:

- the abstract issue type
- the gate that failed
- the needed UI or rule change
- the role that must decide
- the return status

The human owner keeps the actual sensitive context outside the repo.

## Allowed Repository Form

```yaml
Human_Base_Return:
  issue_type:
  affected_screen:
  gate:
  needed_change:
  human_decision_needed:
  status: "open / fixed / rule_added"
```

## Red Doors

- Human context is not repo content.
- Operational details are not construction material.
- Maintainer support is not owner authority.
- Pattern storage is not data storage.
- Candidate fix is not runtime change.

## Final Rule

Use the repository to improve the system pattern. Use the human base to hold real-world context and final judgment.
