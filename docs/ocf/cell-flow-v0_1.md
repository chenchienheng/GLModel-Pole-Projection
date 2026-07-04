# OCF Cell Flow v0.1

Status: Candidate / Field App Flow / No Runtime

## Core

This file defines the first safe flow between OCF cells. It is not runtime logic and not a live system rule.

## Flow

```text
InquiryCell
-> AvailabilityCell
-> QuoteCell
-> HoldCell
-> BookingCell
-> PreTaskCell
-> ServiceCell
-> CheckoutReturnCell
-> ReturnCell
```

## Transition Shape

```yaml
Cell_Transition:
  from_cell:
  to_cell:
  required_gate:
  human_check: true
  output:
  return_hook:
```

## Initial Transitions

```yaml
Transitions:
  - from: "InquiryCell"
    to: "AvailabilityCell"
    gate: "enough context to check"
    output: "check request"
  - from: "AvailabilityCell"
    to: "QuoteCell"
    gate: "candidate option can be considered"
    output: "draft response candidate"
  - from: "QuoteCell"
    to: "HoldCell"
    gate: "human review"
    output: "hold candidate"
  - from: "HoldCell"
    to: "BookingCell"
    gate: "owner confirmation"
    output: "confirmed state candidate"
  - from: "Any"
    to: "ReturnCell"
    gate: "uncertainty, error, or blocked action"
    output: "return note"
```

## Red Doors

- Cell flow is not runtime.
- Candidate output is not sent output.
- Human check cannot be skipped.
- ReturnCell is rebuild input, not blame.
