# General Window Import Decision Rules v0.1 Candidate

Status: Candidate / Local-only / Not Approved / No Runtime / No External Writeback
Owner: W1 和澄

## Core Rule
一般窗採礦 → W1 判位 → W1 decides Import / Park / Archive / Reject / Return_to_Vitas.

## Decision Ladder

### Import
Use only when source, carrier, authority, gate, action, return, and rebuild are clear; evidence level is adequate for candidate support; and no red-gate condition is present.

### Park
Use when the item may be useful but evidence, scope, authorization, or intended use remains unclear.

### Archive
Use when the item is low-priority, historical, or useful only as context without current action.

### Reject
Use when the item conflicts with boundary rules, promotes runtime/approval claims, or cannot be safely cleaned.

### Return_to_Vitas
Use when the item needs human authority, policy judgment, external-system permission, company-data handling, or approval to dispatch another W-line.

## Dependency Check
- Source: What is the source and is full Chinese body available?
- Carrier: Is this canonical candidate material or mining material?
- Authority: Who can approve this?
- Gate: Does it touch company data, GitHub, M365, API, OAuth, secrets, or deployment?
- Action: Is the action only local candidate documentation?
- Return: Where does the result return?
- Rebuild: How can it be rolled back, parked, or archived?

If any answer is unclear, Park rather than force an import.
