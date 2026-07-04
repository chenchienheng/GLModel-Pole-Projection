# OCF Cell Registry v0.1

Status: Candidate / Field App Registry / No Runtime

## Core

This registry describes field-safe cells for a small operator guard app. A cell is not a database row. A cell has source, local context, authority, state, gates, allowed actions, return hooks, and next cells.

## Cell Shape

```yaml
OCF_Cell:
  cell_type:
  source:
  local:
  authority:
  current_state:
  visible_rings: []
  editable_rings: []
  dependencies: []
  blockers: []
  allowed_actions: []
  forbidden_actions: []
  generated_outputs: []
  return_hooks: []
  next_cells: []
  audit_note:
```

## Initial Cell Types

```yaml
Cell_Types:
  InquiryCell:
    role: "captures an incoming request without making a promise"
    next: ["AvailabilityCell", "ReturnCell"]
  AvailabilityCell:
    role: "checks whether an option can be considered"
    next: ["QuoteCell", "ReturnCell"]
  QuoteCell:
    role: "creates a candidate response or estimate"
    next: ["HoldCell", "ReturnCell"]
  HoldCell:
    role: "temporary hold candidate with human review"
    next: ["BookingCell", "ReturnCell"]
  BookingCell:
    role: "confirmed by authorized human action only"
    next: ["PreTaskCell", "ReturnCell"]
  PreTaskCell:
    role: "pre-arrival or preparation task"
    next: ["ServiceCell", "ReturnCell"]
  ServiceCell:
    role: "operation or housekeeping task"
    next: ["CheckoutReturnCell", "ReturnCell"]
  CheckoutReturnCell:
    role: "post-service return and learning"
    next: ["ReturnCell"]
  ReturnCell:
    role: "feedback, correction, rule patch, or rebuild trigger"
    next: []
```

## Red Doors

- Cell is not a raw data row.
- Candidate response is not final action.
- Generated output is not sent output.
- Human-base context stays outside repo content.
- App registry is not runtime.

## Next

Build transition matrix, ring renderer spec, and return audit spec as separate small files.