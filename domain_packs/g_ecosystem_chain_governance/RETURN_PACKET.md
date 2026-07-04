# G Ecosystem Return Packet

Status: Candidate / Domain Pack Support / Not Approved / No Runtime
Related: domain_packs/g_ecosystem_chain_governance/README.md

## Core

Every promoted G ecosystem signal should return with a state, evidence boundary, carrier decision, and next gate.

## Template

```yaml
G_Ecosystem_Return_Packet:
  signal_id:
  received_from: "Gmail / Drive / Calendar / Contacts / Gemini / Manual"
  source_summary:
  current_carrier:
  evidence_level:
  source_ref:
  user_reported:
  qinyi_verified:
  verification_status:
  signal_type:
  current_state:
  carrier_decision:
  qinyi_judgment:
  gemini_mirror_review:
  vitas_decision_needed:
  archive_upgrade_schedule:
  facts:
    - claim:
      evidence_refs: []
  inferences:
    - claim:
      evidence_refs: []
  to_verify:
    - claim:
      required_verification:
  what_changed:
  what_did_not_change:
  risks:
  not_to_claim:
  next_action:
  returned_to:
```

## Evidence Boundary

If Qinyi did not directly inspect a Drive file, Calendar entry, Contact record, or mirror-review source in the active carrier, the return must mark it as `user_reported: true` and `qinyi_verified: false`.

## Not To Claim

- Return Packet != Closeout.
- Archive Candidate != Resolved.
- Schedule != Follow-through.
- Mirror Review != Human Judgment.
- Carrier Created != Governance Approved.
- User-reported carrier state != verified carrier state.
