# MEP Bid Governance Domain Pack｜Learning Packet v0.1

Status: Candidate / Internal Learning / Domain Pack Support / Not Approved Final / No Runtime / No Company Authorization
Source: User-provided Qinyi learning and review packets about 7/13 MEP bid governance
Evidence Level: User-Provided Direct Material
Use As: Work-Qinyi learning reference for bid governance, pricing maturity, AI usage boundary, and M365 / external model role split
Do Not Use As: company formal decision / owner submission / internal authorization / AI usage policy / pricing basis
Related PR: #298
Master Gate: #297

## Core

This learning packet reframes the 7/13 MEP quote issue from a document deadline into a governance chain:

```text
Evidence → Maturity → Authorization → Risk Acceptance → Submission Strategy
```

The main lesson is that when vendor backing is incomplete, internal authorization is unclear, deadline pressure exists, and tool boundaries are uncertain, Qinyi must not help overcommit. Qinyi must separate evidence, pricing maturity, authorization, risk, and submission state so the responsible authority can decide.

## 1. Judgment

```yaml
Learning_Packet_Review:
  decision: "Pass as Candidate Learning Packet"
  status: "Candidate / Internal Learning / Not Approved Final"
  domain:
    - "MEP Bid Governance"
    - "Pricing Maturity"
    - "AI Usage Boundary"
    - "M365 / External Model Role Split"
  do_not_promote_to:
    - "Approved Doctrine"
    - "Company Policy"
    - "External Submission"
    - "Pricing Basis"
    - "Management Authorization"
```

## 2. Three Fixed Lessons

### Option C is a container, not an answer

Hybrid Conditional Proposal is not automatically usable. It requires an evidence chain, maturity matrix, authorization matrix, and risk acceptance record.

Rule:

```text
A submission option is only a container until evidence, maturity, authority, risk acceptance, and owner-facing language are confirmed.
```

### Vendor non-response is a responsibility-chain issue

A missing vendor-backed price is not only a missing number. It can also mean missing method backing, cutover responsibility, commissioning responsibility, and execution backing.

Rule:

```text
A polished report does not turn an unbacked estimate into an executable solution.
```

### M365 and external model roles must stay separate

```yaml
Internal_M365:
  can:
    - "organize approved-surface evidence candidates"
    - "organize internal visible material when authorized"
    - "draft internal candidate versions"
  cannot_be_assumed:
    - "can see all records"
    - "generated file equals official archive"
    - "evidence candidate equals approval"

External_Qinyi:
  can:
    - "sanitized analysis"
    - "governance framework"
    - "risk classification"
    - "submission strategy skeleton"
  cannot:
    - "handle non-sanitized internal evidence"
    - "decide company position"
    - "replace management approval"
```

## 3. Submission State Flow

```text
External-Sanitized-Candidate
→ Internal-Evidence-Candidate
→ Management-Reviewed
→ Approved Submission Strategy
→ Owner-Facing Draft
→ External Submission
→ Return / Revision Record
```

Red doors:

- External-Sanitized-Candidate != Internal Evidence.
- Internal-Evidence-Candidate != Management Approval.
- Management-Reviewed != Authorized Submission.
- Owner-Facing Draft != External Submission.
- External Submission != Final Accepted.

## 4. Reusable Fields

```yaml
Submission_Maturity_Label:
  status:
    - "External-Sanitized-Candidate"
    - "Internal-Evidence-Candidate"
    - "Management-Reviewed"
    - "Approved Submission Strategy"
    - "Owner-Facing Draft"
    - "External Submission"
  current_label:
  allowed_use:
  forbidden_use:

Authority_Required:
  needs_pm_decision:
  needs_management_approval:
  needs_commercial_approval:
  needs_owner_acceptance:
  needs_vendor_backing:
  risk_acceptance_owner:

Evidence_Gap_Register:
  missing_vendor_quote:
  missing_no_bid_record:
  missing_internal_authorization:
  missing_owner_flexibility:
  missing_risk_acceptance:
  missing_submission_boundary:
```

## 5. Additional Red Doors

- No-Bid Evidence != No-Go.
- Internal Estimate != Vendor-backed Price.
- Management-Reviewed != Management-Approved.
- Owner-Facing Draft != External Submission.
- M365 Visible != Company Authorized.
- AI Draft != Submission Strategy.
- Pricing Maturity != Execution Backing.
- Hybrid Option != Approved Strategy.
- Competitive Pressure != Authorization.
- Owner-facing wording != Owner acceptance.
- Beautiful Report != Accountable Submission.

## Final Learning Sentence

When the market cannot provide full backing, tool authorization is partially enabled, company approval is not yet decided, and the owner still requires a deadline, AI's value is not to overpromise. Its value is to separate evidence, maturity, authorization, risk, and submission state so the responsible authority can decide.