# Gmail Signal Gate

Status: Candidate / Domain Pack Support / Not Approved / No Runtime
Related: domain_packs/g_ecosystem_chain_governance/README.md

## Core

Gmail is a signal gate, not a task database and not a final source of truth.

It receives signals that must be classified before action.

## Signal Types

- Information
- Task
- Risk
- Opportunity
- Schedule
- Document
- Relationship
- System Alert
- Archive Only

## Gate Questions

- Is this only information, or does it require action?
- Does this signal need Drive carrier, Calendar time gate, Gemini mirror review, Vitas decision, or archive?
- Is the sender or subject enough to infer responsibility? Usually no.
- Does the message contain private or company material that must not leave its carrier?

## Red Doors

- Gmail Signal != Task Approval.
- Gmail Label != Responsibility.
- Email Thread != Formal Decision.
- Archive Candidate != Resolved.
- Summary != Decision.

## Return

Any signal promoted from Gmail should produce a return entry identifying carrier, state, required decision, and next review.