# Xiaoshiguang CUI / GUI Experiment Context Pack v0.1

Status: Candidate / Field Experiment Context / No Runtime / No External Writeback
Use As: field-safe experiment context for CUI intent capture and GUI state display
Do Not Use As: production app spec, external platform integration, operational record, or public document

## Core

This experiment does not start from a full app screen. It starts from OCF cells, state boundaries, and human review.

```text
CUI -> Candidate Request
GUI -> Visible State Card
Owner Review -> Human Gate
Return -> OCF Feedback
```

## CUI Surface

CUI means conversational user interface. It can help collect and clarify user intent.

Allowed candidate functions:

- collect request intent
- clarify date or period
- clarify needs
- summarize candidate request
- prepare draft wording

Red doors:

- AI Reply != Booking Confirmation.
- Suggested Option != Reserved Option.
- Availability Mentioned != Actual Hold.
- Draft Summary != Owner Approval.

## GUI Surface

GUI means graphical user interface. It should show state, gates, and human review needs.

Candidate states:

- Inquiry
- Candidate Request
- Pending Owner Review
- Approved Candidate
- Preparation Needed
- Service Window
- Feedback Returned
- Archived

Red doors:

- Button Click != Owner Approval.
- Displayed State != Final Authority.
- Pending != Approved.
- Feedback Submitted != Issue Closed.

## OCF Connection

```yaml
OCF_Map:
  CUI_Input: "InquiryCell"
  GUI_State_Card: "visible cell state"
  Owner_Review: "sovereignty gate"
  Feedback_Return: "ReturnCell"
```

## First Phase

```yaml
First_Phase:
  do:
    - "CUI collects request intent"
    - "GUI displays candidate request card"
    - "Owner Review remains manual"
    - "return is recorded as OCF feedback"
  do_not:
    - "no automatic external action"
    - "no production runtime"
    - "no real field data import"
    - "no official platform settings"
```

## Final Rule

The experiment tests state clarity, human gate, and return loops before building a full app.
