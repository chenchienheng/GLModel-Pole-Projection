# Upgrade Candidate Rules

Status: Candidate / Domain Pack Support / Not Approved / No Runtime
Related: domain_packs/g_ecosystem_chain_governance/README.md

## Core

Upgrade Candidate is a state, not approval. It marks a signal or record that may deserve promotion into a rule, support text, domain pack, GitHub issue, or decision packet.

## Upgrade Criteria

A signal may become an Upgrade Candidate when it is:

- repeated
- high risk
- useful to multiple contexts
- convertible into a rule
- convertible into support text
- convertible into a domain pack
- convertible into a GitHub issue
- requiring Vitas decision

## Required Gate

```yaml
Upgrade_Candidate_Gate:
  source:
  current_carrier:
  reason_for_upgrade:
  target_form:
    - "rule"
    - "support_text"
    - "domain_pack"
    - "github_issue"
    - "decision_packet"
  risks:
  required_vitas_decision:
```

## Red Doors

- Upgrade Candidate != Approved Contract.
- Repeated Signal != Rule.
- Useful Pattern != Public Doctrine.
- GitHub Issue != Runtime.

## Final Rule

Upgrade requires decision. Do not let an organized folder become silent approval.