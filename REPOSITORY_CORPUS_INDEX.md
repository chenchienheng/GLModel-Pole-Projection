# Repository Corpus Index

> Gate-aware index for repository continuity.
>
> Purpose: summarize the current corpus under the eight-gate structure and point detailed artifact decisions to `UNIFIED_ARTIFACT_REGISTER.md`.

---

## 0. Index Status

- index_version: v0.6
- status: Partially reconciled after late PR270 Group I candidate/support registration
- source_inventory: `current_files.txt`
- detailed_register: `UNIFIED_ARTIFACT_REGISTER.md`
- reconciliation_pass: `C013_REGISTER_RECONCILIATION_PASS_1.md`
- related_pr: `#270`
- closeout: false

---

## 1. Reading Rule

This index is no longer the only place where every artifact decision lives.

Current source order:

```yaml
Source_Order:
  inventory: current_files.txt
  artifact_decisions: UNIFIED_ARTIFACT_REGISTER.md
  filter_pass: WHOLE_CORPUS_FILTER_PASS_1.md
  gate_routing: EIGHT_GATE_ROUTING_PASS_1.md
  readable_mainline: XUANLING_ARCHITECTURE_WINDOW_v0_9.md
```

This index summarizes corpus families and points to the active register.
It does not approve, archive, merge, or delete artifacts by itself.

---

## 2. Eight-Gate Corpus Families

### G1 — Source Anchor / Human Origin

Core artifacts:

- `00_meta/user_identity_anchor.md`
- `HUMAN_ORIGIN_LAYER.md`
- `NAMING_POLLUTION_RULES_HUMAN_ORIGIN_ADDENDUM.md`

Purpose:

```text
Keep the user/source anchor outside XLEN and preserve direction, review, and authorization boundary.
```

### G2 — Intake / Source / Temporal / Evidence

Core artifacts:

- `TEMPORAL_STATE_SEQUENCE_SPEC.md`
- `DISCONTINUITY_REGISTER.md`
- `MODEL_CONTRADICTION_REGISTER.md`
- `REPLAY_READINESS_REPORT.md`
- `SCHEDULING_EFFECT_REGISTER.md`
- `SCHEDULING_EFFECTIVENESS_GAP_NOTE.md`
- `04_adapter-layer/source_map.md`

Purpose:

```text
Separate source, view, evidence, status, replay, scheduling effect, and temporal-state sequence.
```

### G3 — Naming / Boundary / Status

Core artifacts:

- `NAMESPACE_REGISTRY.md`
- `NAMING_POLLUTION_RULES.md`
- `CANONICAL_STATUS_GLOSSARY.md`
- `C019_NAMESPACE_POLLUTION_STATUS.md`
- `CONTAMINATION_AND_PRIORITY_POLICY.md`
- `NAMING_DRIFT_RESOLUTION_REGISTER.md`
- `ROLE_CLASSIFICATION_TABLE.md`

Purpose:

```text
Prevent names, status labels, people, tools, modules, cases, and valences from stealing one another's role.
```

### G4 — Authority / Dispatch / Security

Core artifacts:

- `SECURITY_THREAT_MODEL.md`
- `SECURITY_FINDINGS_REGISTER.md`
- `AGENT_INSTRUCTION_INTEGRITY_SPEC.md`
- `01_runtime-spine/legacy_writeback_block_rule.md`
- `04_adapter-layer/writeback_gate_spec.md`
- `04_adapter-layer/writeback_packet_contract.md`
- `MODEL_INVOCATION_CONTRACT.md`
- `MODEL_TO_WINDOW_OWNERSHIP_MAP.md`
- `05_topology/feasible-domain-and-responsibility.md`
- `TOKEN_AGENT_EXPANSION_RISK_NOTE.md` secondary relation

Purpose:

```text
Keep routing, approval, model invocation, writeback, security boundaries, and escalation gates distinct.
```

### G5 — Habitat / Carrier / Ecosystem Nodes

Core artifacts:

- `MODULE_14_PERSISTENT_AGENT_HABITAT.md`
- `ADAPTER_SECURITY_BASELINE.md`
- `EXTERNAL_NODE_ONCHAIN_SPEC.md`
- `ECOSYSTEM_TOPOLOGY_SPHERE_ALIGNMENT_ADDENDUM.md`
- `ECOSYSTEM_FAMILY_ONBOARDING_ROADMAP.md`
- `MODEL_FAMILY_ONCHAIN_SPEC.md`
- `NETWORK_STRUCTURE_HIERARCHY_NOTE.md`
- `GITHUB_OPERATION_CAPABILITY_MATRIX.md`
- `AGENT_READINESS_CHECKLIST.md`
- `TOKEN_AGENT_EXPANSION_RISK_NOTE.md` secondary relation

Purpose:

```text
Classify tools, adapters, models, repos, local folders, group expansion, and agent surfaces as governed carriers, not sovereign centers.
```

### G6 — Production / Route / Skill Loop

Core artifacts:

- `MODULE_16_CODEX_PRESENTATION_SKILL_LOOP.md`
- `C024_CODEX_PRESENTATION_SKILL_LOOP_STATUS.md`
- `JULES_TASKBOARD.md`
- `CHATGPT_GITHUB_BOOTSTRAP.md`

Purpose:

```text
Keep output route, artifact production, review, and skill recycle under use-case boundary.
```

### G7 — Return / Recycle / Token Capital

Core artifacts:

- `MODULE_15_TOKEN_CAPITAL_PRIVATE_LEARNING_LOOP.md`
- `C023_TOKEN_CAPITAL_STATUS.md`
- `TOKEN_AGENT_EXPANSION_RISK_NOTE.md`
- `C027_TOKEN_AGENT_EXPANSION_RISK_STATUS.md`

Purpose:

```text
Convert useful AI usage into memory, judgment, workflow, case, rule, or next-round capability while preventing uncontrolled token and agent expansion.
```

### G8 — Atlas / Register / Architecture / Cleanup

Core artifacts:

- `XUANLING_ARCHITECTURE_WINDOW_v0_9.md`
- `C025_ARCHITECTURE_WINDOW_V0_9_STATUS.md`
- `EIGHT_GATE_ROTATION_AXIS_CONSOLIDATION.md`
- `EIGHT_GATE_ROUTING_PASS_1.md`
- `C026_EIGHT_GATE_ROTATION_AXIS_STATUS.md`
- `WHOLE_CORPUS_FILTER_PASS_1.md`
- `C012_WHOLE_CORPUS_FILTER_PASS_1_STATUS.md`
- `UNIFIED_ARTIFACT_REGISTER.md`
- `REPOSITORY_CORPUS_INDEX.md`
- `C013_REGISTER_RECONCILIATION_PASS_1.md`
- `CLEANUP_QUEUE_REGISTER.md`
- `ACTIVE_RESTRUCTURING_TASK_MAP.md`
- `DYNAMIC_CORPUS_DATABASE_NOTE.md`
- `THREE_COUPLING_RUNTIME_MAP.md`
- `WINDOW_12_MASTER_TABLE.md`

Purpose:

```text
Make corpus state, architecture mainline, cleanup decisions, and closeout boundary visible without confusing return packets with final closure.
```

---

## 3. Late PR270 Candidate / Evidence / Queue Support Family

Late PR270 artifacts added after the early C027/C014 surfaces are now visible in `current_files.txt` and registered in `UNIFIED_ARTIFACT_REGISTER.md` as Group I.

They should be read as candidate support, evidence support, hold-candidate, or review-control artifacts. They are not active doctrine unless a later row-by-row QA pass explicitly promotes their role.

Representative families:

```yaml
Late_PR270_Group_I:
  Task_Map_Addenda:
    - C028_ACTIVE_TASK_MAP_ADDENDUM.md
    - C029_ACTIVE_TASK_MAP_ADDENDUM.md
    - C030_ACTIVE_TASK_MAP_ADDENDUM.md
    - C031_ACTIVE_TASK_MAP_ADDENDUM.md
    - C032_ACTIVE_TASK_MAP_ADDENDUM.md
    - C033_ACTIVE_TASK_MAP_ADDENDUM.md
    - C033A_ACTIVE_TASK_MAP_ADDENDUM.md
    - C034_ACTIVE_TASK_MAP_ADDENDUM.md
    - C035_ACTIVE_TASK_MAP_ADDENDUM.md
    - C036_ACTIVE_TASK_MAP_ADDENDUM.md
    - C037_ACTIVE_TASK_MAP_ADDENDUM.md
    - C038_ACTIVE_TASK_MAP_ADDENDUM.md
    - C039_ACTIVE_TASK_MAP_ADDENDUM.md
  C037_Evidence_And_Review:
    - C037_CODEX_REVIEW_CORRECTION_TRACE.md
    - C037_EVIDENCE_AGENT_MODE_COST_EXPANSION_RISK.md
    - C037_EVIDENCE_CODEX_WORKSPACE_AGENT_CALIBRATION_FEEDBACK.md
    - C037_PR270_VERIFICATION_ACCEPTANCE_MATRIX.md
    - C037_PR270_VERIFICATION_ACCEPTANCE_STATUS.md
  XLA_Candidate_Inputs:
    - XLA_API_EQUIVALENT_TOKEN_CHAIN_REACTION_COST_RISK_v0_1_CANDIDATE.md
    - XLA_CHAIN_STATE_WORLD_ARCHITECTURE_v0_1_CANDIDATE.md
    - XLA_CODEX_ACTION_GRAMMAR_ALIGNMENT_TRACE_v0_1_CANDIDATE.md
    - XLA_HUMAN_CONTROLLED_VIRTUAL_AGENT_LAB_EVIDENCE_v0_1_CANDIDATE.md
    - XLA_HUMAN_RELAY_FEEDBACK_CYCLE_PROTOCOL_v0_1_CANDIDATE.md
    - XLA_MODEL_PROVIDER_SURFACE_ADDENDUM_v0_1_CANDIDATE.md
    - XLA_REDLINE_AS_GATE_CONDITION_LOGIC_v0_1_CANDIDATE.md
    - XLA_WORKSPACE_AGENT_LOGIC_ADDENDUM_v0_1_CANDIDATE.md
    - XLA_ZHENG_TRUST_FIELD_PROPOSITION_v0_1_CANDIDATE.md
  Productization_And_Integration_Criteria:
    - Gate Console MVP spec: chat-side criterion only unless explicitly added later
    - Execution Readiness: chat-side criterion only unless explicitly added later
    - Inertia Governance: chat-side criterion only unless explicitly added later
    - External Integration Readiness: source-pending candidate input until external anchors are supplied
    - Qinyi Translation Surface addendum: source-pending candidate input until consolidated
```

Non-promotion rule:

```text
Late candidate support exists in the corpus, but existence in inventory does not equal active doctrine, runtime proof, approval, or writeback authority.
```

---

## 4. Historical / Candidate / Merge-Aware References

The following may remain useful, but are not treated as current approved doctrine without review:

- `LEGACY_SEED_BRANCH_INVENTORY_SNAPSHOT.md`
- `LEGACY_SEED_CONTAMINATION_TRIAGE.md`
- `LEGACY_SEED_MERGE_CANDIDATE_SHORTLIST.md`
- `LEGACY_SEED_NAMING_NORMALIZATION_PLAN.md`
- `SEED_SHADOW_POINTER.md`
- `SEMANTIC_COMPRESSION_REPORT.md`
- `STAGE_SYNC_SNAPSHOT_2026-04-21.md`
- `MERGE_LAW_PROPOSAL.md`
- `SNAPSHOT_MECHANISM_PROPOSAL.md`
- `THIRD_RUNTIME_ENVIRONMENT_NOTE.md`
- `XUANLING_WORLD_READINESS_MILESTONES.md`

Handling decisions for these references live in `UNIFIED_ARTIFACT_REGISTER.md`.

---

## 5. Desync Notes

This index replaces the older `fully reconciled (00-05)` claim.

Why:

1. PR #270 added governance artifacts beyond 00-05 family indexing.
2. `current_files.txt` has been refreshed with late PR #270 artifacts.
3. `UNIFIED_ARTIFACT_REGISTER.md` now carries Pass 1 handling decisions and late Group I rows.
4. `ROLE_CLASSIFICATION_TABLE.md` still needs a Group I role-classification sync.
5. `ACTIVE_RESTRUCTURING_TASK_MAP.md` still needs a post-C027 candidate/support section.
6. C-027 and later additions introduce token / agent / provider / RedGate / trust-field / chain-state risk governance without runtime, deployment, or external writeback proof.

---

## 6. Status

- family_normalization_verified: legacy_only
- cross_family_link_consistency: needs_recheck_after_v0_6
- gate_aware_index_added: true
- artifact_register_source_order_added: true
- role_table_gate_overlay_added: true
- late_group_i_acknowledged: true
- c027_token_agent_risk_added: true
- closeout: false
