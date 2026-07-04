# Ring Notes v0.1

Status: Candidate / UI Notes / No Runtime

## Core

A ring note shows visibility, editability, and decision need before an action moves forward.

## Fields

```yaml
Cell_Card:
  cell_type:
  current_state:
  visible_to: []
  editable_by: []
  decision_needed_from:
  allowed_actions: []
  blocked_actions: []
  return_to:
```

## Red Doors

- Visible is not editable.
- Editable is not final authority.
- Decision need cannot be hidden.
- UI card is not live operation.
