# Pricing Maturity and AI Boundary｜Example Note

Status: Candidate / Example Note / Not Approved / No Runtime
Related Domain Pack: domain_packs/mep_bid_governance/
Related PR: #298

## Core

This example shows how a deadline-driven pricing task should be converted into a governance review.

The key chain is:

```text
Evidence → Maturity → Authorization → Risk Acceptance → Submission Strategy
```

## Use Case

A bid or submission deadline exists, but vendor pricing and execution backing may be incomplete. AI is asked to help draft a response.

## Governance Shift

Do not ask only:

```text
Can we submit something by the deadline?
```

Ask instead:

```text
What is the pricing maturity, what evidence supports it, who can authorize it, who accepts the risk, and what submission state is allowed?
```

## AI Boundary

External AI may help structure the decision and draft sanitized language. Internal systems may fill evidence if authorized. Human authority must decide any actual submission or commercial position.

## Red Doors

- Internal Estimate != Vendor-backed Price.
- Management-Reviewed != Management-Approved.
- Owner-Facing Draft != External Submission.
- AI Draft != Submission Strategy.
- Pricing Maturity != Execution Backing.
- Competitive Pressure != Authorization.

## Placement

This is an example / domain support note. It is not Open Core itself and not company policy.