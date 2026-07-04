# AI Usage Boundary and Submission State｜Company M365 Manual Build Pack

Status: Candidate / Domain Pack Support / Not Approved / No Runtime / No Company Authorization
Related: domain_packs/mep_bid_governance/README.md
Master Gate: #297
Related PR: #298

## Core

This note defines the role split between internal M365 evidence work and external sanitized advisory.

M365 may be an internal evidence carrier candidate. External Qinyi may provide sanitized analysis and governance framing. Neither side can become company approval by itself.

## Internal M365 Role

```yaml
M365_Internal_Side:
  can:
    - "organize internal evidence"
    - "support internal document drafting"
    - "prepare templates for RFQ / vendor response / authorization records if available inside approved surfaces"
    - "produce internal candidate versions"
  cannot_be_assumed:
    - "can see all company records"
    - "generated file equals official archive"
    - "evidence fill equals approval"
    - "Copilot output equals company conclusion"
```

## External Qinyi Role

```yaml
External_Qinyi:
  can:
    - "sanitized analysis"
    - "governance framework"
    - "risk classification"
    - "submission strategy skeleton"
    - "owner-facing wording candidate"
    - "second-opinion challenge"
  cannot:
    - "handle non-sanitized internal evidence"
    - "access internal records"
    - "decide company position"
    - "replace management approval"
```

## Submission State Flow

```text
External-Sanitized-Candidate
→ Internal-Evidence-Filled
→ Management-Reviewed
→ Approved Submission Strategy
→ Owner-Facing Draft
→ External Submission
→ Return / Revision Record
```

## Red Doors

- External-Sanitized-Candidate != Internal Evidence.
- Internal-Evidence-Filled != Management Approval.
- Management-Reviewed != Authorized Submission.
- Owner-Facing Draft != External Submission.
- AI Draft != Company Position.
- M365 Visible != Company Authorized.
- Generated File != Official Archive.

## Human Decision Required

Any movement toward real submission requires an authorized human or management decision. AI can prepare structure; it cannot carry commercial or contractual responsibility.

## Not To Claim

- Do not claim this is company AI policy.
- Do not claim this authorizes M365 access.
- Do not claim this authorizes external AI use with internal evidence.
- Do not claim this creates a pricing basis.
- Do not claim this approves submission.