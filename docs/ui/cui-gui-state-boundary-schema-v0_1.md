# CUI / GUI State Boundary Schema v0.1

Status: Candidate / State Boundary Schema / No Runtime / No External Writeback
Use As: field-safe state boundary for CUI intent capture and GUI state display
Do Not Use As: production app state machine, live database schema, booking system, or public document

## Core

CUI collects intent. GUI displays state. Human authority decides. OCF returns feedback.

## State Set

```yaml
State_Set:
  Inquiry:
    meaning: "incoming intent, no commitment"
  Candidate_Request:
    meaning: "structured candidate request, pending review"
  Pending_Owner_Review:
    meaning: "human authority must review"
  Approved_Candidate:
    meaning: "approved candidate state, still no external automation"
  Preparation_Needed:
    meaning: "task card needed before service"
  Service_Window:
    meaning: "operation window with human visibility"
  Feedback_Returned:
    meaning: "issue or lesson returned"
  Archived:
    meaning: "closed for active flow, still available as learning record"
```

## Boundary Rules

```yaml
Boundary_Rules:
  CUI_reply: "draft / intent capture only"
  GUI_card: "state visibility only"
  button_click: "candidate action only"
  owner_review: "human gate"
  return_note: "feedback input"
```

## Red Doors

- CUI reply is not confirmation.
- GUI card is not final authority.
- Button click is not owner approval.
- Pending is not approved.
- Feedback is not closeout.
- Archive is not learning completion.

## Final Rule

The schema protects state meaning before any app screen is treated as operational.