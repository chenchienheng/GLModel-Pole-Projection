# Field Return Link Protocol v0.1

Status: Candidate / Field Return Protocol / No Runtime / No External Writeback
Use As: Yiyi field protocol for returning sanitized field-proof results to XLQY and DCP
Do Not Use As: production app workflow, booking system, customer data handling, or public product claim

## Core

Yiyi repo is the Field ring of the tri-repo ecology. It does not send raw field context to Core. It returns only sanitized evidence, problem patterns, red doors, and generalized OCF field proof lessons.

## Return Types

```yaml
Field_Return_Types:
  State_Card_Return:
    meaning: "what state was displayed and whether it was understood"
    return_to: "XLQY return packet"
  Reply_Draft_Return:
    meaning: "what draft was generated and what human review was required"
    return_to: "XLQY Qinyi / Aki review"
  Problem_Return:
    meaning: "what broke, what gate triggered, what rule should change"
    return_to: "XLQY audit / DCP generalized red door if sanitized"
  Generalized_Field_Pattern:
    meaning: "field-safe pattern that can inform Core without private context"
    return_to: "DCP governance candidate"
```

## Sanitization Gate

```yaml
Sanitization_Gate:
  must_remove:
    - "real guest data"
    - "private conversations"
    - "payment records"
    - "platform credentials"
    - "operational screenshots"
  may_keep:
    - "generic state pattern"
    - "card structure"
    - "red door"
    - "problem category"
    - "return check result"
```

## Red Doors

- Field Return != Raw Field Data.
- Problem Pattern != Private Context.
- State Card != Booking System.
- Reply Draft != Sent Message.
- Generalized Pattern != Root Doctrine.
- Field Proof != Runtime.

## Final Rule

Field returns must pass through sanitization and XLQY review before any generalized pattern can be considered by DCP.