# State Boundary

Status: Candidate / Core Extract / No Runtime

## Core

State words must not collapse into each other.

## Candidate State Set

```yaml
State_Set:
  Chat_Text: "conversation material"
  Draft: "editable working material"
  Candidate: "reviewable material"
  Review_Needed: "requires review before next state"
  Evidence_Pending: "needs evidence check"
  Human_Gate_Required: "needs human decision"
  Approved: "explicitly accepted by the human owner"
  Runtime: "actual operating state"
  Park: "kept but inactive"
  Archive: "historical or closed material"
```

## Red Doors

- Candidate != Approved.
- Review_Needed != Approved.
- Approved != Runtime.
- Return Packet != Closeout.
- Archive Candidate != Deleted.
