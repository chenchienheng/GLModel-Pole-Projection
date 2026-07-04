# Open XuanLing Core｜Canonical Gate v0.4

Status: Candidate / Role-Neutral Canonical Gate / Not Approved / No Runtime
Replaces: docs/open-core/open-xuanling-core-canonical-gate-v0_3.md

## Core

Open XuanLing Core is a small, brand-neutral governance core. Its gate must not depend on internal persona routing.

Minimum usable unit:

```text
Gate Decision -> Return Packet
```

## Gate Decision

```yaml
Canonical_Gate_Decision:
  decision: "Conditional Pass"
  approved_final: false
  runtime: false
  external_writeback: false
  public_release: false
  can_forward_to_builder_role: true
  can_forward_to_reviewer_role: true
  can_forward_to_contract_role: true
  can_forward_to_construction_role: "Only after builder draft, reviewer gate, and human decision"
```

Eligibility is determined by evidence boundary, authority gate, return path, and doctrine consistency. It is not determined by which internal role processed the file.

## Core Boundary

Core includes only:

- Source / Carrier / Authority / Gate / Action / Return / Rebuild
- State Model
- Red Doors
- Semantic Firewall
- Source Card
- Gate Review
- Return Packet
- Gate Decision Schema

Internal role mappings belong in domain packs or internal docs, not in Open Core.

## Not To Claim

- Not Approved.
- Not runtime.
- Not merge approval.
- Not company policy.
- Not a replacement for human review.
