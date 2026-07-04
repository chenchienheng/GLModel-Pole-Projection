# Problem Return Form v0.1

Status: Candidate / Return Form / No Runtime

## Core

A problem return records what kind of system improvement is needed. It does not store private context.

## Form

```yaml
Problem_Return_Form:
  return_id:
  date:
  reported_by_role:
  affected_cell:
  affected_screen:
  issue_type:
  impact:
  temporary_fix:
  needed_change:
    - "UI"
    - "Gate"
    - "Schema"
    - "Permission"
    - "Template"
    - "Training"
  human_decision_needed:
  status: "open / fixed / rule_added / parked"
```

## Red Doors

- Return form is not private record storage.
- Issue type is not blame.
- Rule patch is not runtime change.
- Human decision needed cannot be auto-resolved.
