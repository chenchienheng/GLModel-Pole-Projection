# Field Card Spec v0.1

Status: Candidate / Field Card Spec / No Runtime / No External Writeback
Use As: first Xiaoshiguang no-runtime field proof card specification
Do Not Use As: production app UI, booking system, payment flow, external platform integration, or customer data system

## Core

The first field proof is not a full app. It is three cards that make state, draft, and return visible without creating automatic commitment.

## Cards

```yaml
State_Card:
  purpose: "show current state without creating commitment"
  fields:
    - state
    - request_summary
    - owner_review_needed
    - blocked_actions
    - next_allowed_action
  red_doors:
    - "Displayed State != Owner Approval"
    - "Pending != Approved"

Reply_Draft_Card:
  purpose: "prepare human-reviewed message draft"
  fields:
    - draft_text
    - source_cell
    - assumptions
    - required_human_check
    - do_not_send_until
  red_doors:
    - "Draft != Sent Message"
    - "AI Reply != Booking Confirmation"

Problem_Return_Card:
  purpose: "return errors or uncertainty as system improvement material"
  fields:
    - issue_type
    - affected_cell
    - gate_triggered
    - temporary_fix
    - suggested_rule_patch
    - next_reader
  red_doors:
    - "Problem Return != Blame"
    - "Feedback != Closeout"
```

## First Phase Boundary

```yaml
First_Phase:
  do:
    - "state visibility"
    - "draft wording"
    - "owner review reminder"
    - "problem return"
  do_not:
    - "no automatic booking"
    - "no payment"
    - "no platform integration"
    - "no real customer data"
    - "no runtime claim"
```

## Final Rule

If the three cards cannot protect state, draft, and return, a full app should not be built yet.