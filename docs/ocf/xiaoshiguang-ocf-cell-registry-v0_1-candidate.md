# Xiaoshiguang OCF Cell Registry v0.1 Candidate

Status: Candidate / Field App Cell Registry / No Runtime / No External Writeback
Use As: sanitized construction input for the small-operator guard app
Do Not Use As: live database, production spec, public document, or operational record

## Core

This registry defines the first field-safe OCF cells for the app. A Cell is not a SQL row. A Cell carries source, local context, sovereignty, current state, visible rings, editable rings, dependencies, blockers, allowed actions, forbidden actions, generated outputs, return hooks, next cells, and an audit note.

## Canonical Cell Shape

```yaml
OCF_Cell:
  cell_type:
  source:
  local:
  sovereignty:
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
InquiryCell:
  purpose: "capture an incoming request without creating commitment"
  visible_rings: ["operator", "owner"]
  editable_rings: ["operator"]
  allowed_actions:
    - "record request summary"
    - "move to availability check"
    - "return as unclear"
  forbidden_actions:
    - "promise availability"
    - "confirm arrangement"
  next_cells:
    - "AvailabilityCell"
    - "ReturnCell"

AvailabilityCell:
  purpose: "check whether an option can be considered"
  visible_rings: ["operator", "owner"]
  editable_rings: ["operator", "owner"]
  dependencies:
    - "date or period"
    - "unit or room candidate"
  blockers:
    - "missing date"
    - "state conflict"
  allowed_actions:
    - "mark candidate possible"
    - "mark unavailable"
    - "ask for owner check"
  forbidden_actions:
    - "confirm final arrangement"
  next_cells:
    - "QuoteCell"
    - "ReturnCell"

QuoteCell:
  purpose: "prepare a candidate response"
  visible_rings: ["operator", "owner"]
  editable_rings: ["operator", "owner"]
  allowed_actions:
    - "create draft response"
    - "ask owner review"
  forbidden_actions:
    - "auto-send message"
  generated_outputs:
    - "draft text"
  next_cells:
    - "HoldCell"
    - "ReturnCell"

HoldCell:
  purpose: "temporary hold candidate with human review"
  visible_rings: ["operator", "owner"]
  editable_rings: ["owner"]
  allowed_actions:
    - "approve hold"
    - "release hold"
  forbidden_actions:
    - "double-hold same unit and period"
  next_cells:
    - "BookingCell"
    - "ReturnCell"

BookingCell:
  purpose: "owner-authorized confirmed state"
  visible_rings: ["owner", "operator"]
  editable_rings: ["owner"]
  allowed_actions:
    - "create preparation task"
    - "move to return if changed"
  forbidden_actions:
    - "silent overwrite"
  next_cells:
    - "PaymentCell"
    - "PreTaskCell"
    - "ReturnCell"

PaymentCell:
  status: "Candidate / Sensitive / No Runtime"
  purpose: "track whether a settlement-related check is needed without storing financial detail"
  visible_rings: ["owner"]
  editable_rings: ["owner"]
  allowed_actions:
    - "mark check needed"
    - "mark owner-reviewed"
    - "move to return if unclear"
  forbidden_actions:
    - "store financial record in repo"
    - "process transaction"
    - "treat reminder as processing"
  next_cells:
    - "PreTaskCell"
    - "ReturnCell"

PreTaskCell:
  purpose: "pre-arrival or preparation task"
  visible_rings: ["operator", "owner"]
  editable_rings: ["operator", "owner"]
  allowed_actions:
    - "create task card"
    - "mark task ready"
  forbidden_actions:
    - "skip required check"
  next_cells:
    - "ServiceCell"
    - "ReturnCell"

ServiceCell:
  purpose: "operation task during service window"
  visible_rings: ["operator", "owner"]
  editable_rings: ["operator", "owner"]
  allowed_actions:
    - "record status"
    - "return issue"
  forbidden_actions:
    - "hide exception"
  next_cells:
    - "CheckoutReturnCell"
    - "ReturnCell"

CheckoutReturnCell:
  purpose: "post-service return and learning"
  visible_rings: ["operator", "owner", "maintainer_if_needed"]
  editable_rings: ["operator", "owner"]
  allowed_actions:
    - "record lesson"
    - "create rule patch candidate"
  forbidden_actions:
    - "store private operational context in repo"
  next_cells:
    - "ReturnCell"

ReturnCell:
  purpose: "feedback, correction, rule patch, or rebuild trigger"
  visible_rings: ["owner", "maintainer_if_needed"]
  editable_rings: ["owner"]
  allowed_actions:
    - "classify issue type"
    - "propose UI or rule change"
    - "send to human-base if sensitive context is needed"
  forbidden_actions:
    - "treat feedback as closeout"
  next_cells: []
```

## Global Red Doors

- Cell != SQL Row.
- Generated Output != Sent Message.
- Candidate Action != Confirmed Action.
- Operator Action != Owner Decision.
- App Note != Runtime Change.
- BuildReady Candidate != Runtime.
- Private Context != Repo Content.
- PaymentCell Candidate != Financial System.
- Payment Reminder != Payment Processing.

## Next Construction Targets

- Cell Flow / Transition Matrix v0.1.
- Ring Renderer Notes v0.1.
- Problem Return Form v0.1.
- Semantic Firewall Rules v0.1.
