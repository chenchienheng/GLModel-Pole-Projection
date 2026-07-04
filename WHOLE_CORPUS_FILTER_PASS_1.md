# Whole-Corpus Filter Pass 1｜全庫篩選初篩

> Purpose: classify the current repository corpus and PR-added governance files into keep / update / merge / split / rebind / archive / retire_when_safe / hold_candidate decisions.

---

## 0. Status

- pass_version: v0.1
- cleanup_id: C-012
- status: Candidate / Whole-Corpus Filter Draft
- source_inventory: `current_files.txt`
- routing_source: `EIGHT_GATE_ROUTING_PASS_1.md`
- related_pr: `#270`
- closeout: false
- return_to_00: true

---

## 1. One-Line Reading

The corpus is useful but mixed. Pass 1 does not remove value; it separates active bones, upgrade targets, merge candidates, archival residue, and candidate extensions.

---

## 2. Handling Legend

| Decision | Meaning |
|---|---|
| keep | stable or still structurally useful |
| update | useful but needs terminology / boundary / status correction |
| merge | should be absorbed into a stronger active register or module |
| split | contains multiple layers that should be separated later |
| rebind | useful but attached to the wrong family / gate / role |
| archive | preserve as historical support, not active doctrine |
| retire_when_safe | likely low-value residue after trace is preserved |
| hold_candidate | new or promising but not yet approved |

---

## 3. Gate-Based Filtering Rules

```yaml
Filtering_Rules:
  G1_Source_Anchor:
    default: keep_or_update
    caution: never turn user/source anchor into node
  G2_Intake_Source:
    default: update
    caution: separate source, view, evidence, and status
  G3_Naming_Boundary:
    default: update_or_rebind
    caution: prevent name-role pollution
  G4_Authority_Dispatch:
    default: update
    caution: routing is not approval
  G5_Habitat_Carrier:
    default: update_or_hold_candidate
    caution: capability is not active runtime
  G6_Production_Route:
    default: hold_candidate
    caution: output route must match use case
  G7_Return_Recycle:
    default: hold_candidate_or_update
    caution: token use is not automatically capital
  G8_Atlas_Closeout:
    default: keep_update_or_merge
    caution: Return Packet is not Closeout
```

---

## 4. Current Files Pass｜Inventory A

Source: `current_files.txt`.

| File | Primary Gate | Decision | Reason / Next Action |
|---|---|---|---|
| `00_meta/user_identity_anchor.md` | G1 | keep | source-anchor bone; cross-link to Human Origin Layer |
| `00_mother-law/README.md` | G8 | keep | mother-law family index remains active |
| `00_mother-law/existence-consistency-rule.md` | G8 | keep | core consistency rule; later align terminology with canonical status |
| `00_mother-law/mother-architecture-registry-v0-1.md` | G8 | update | active registry seed; should cross-link to architecture window v0.9 |
| `01_native-board/blockers.md` | G8 | update | board blocker list likely needs status normalization |
| `01_native-board/board_index.md` | G8 | keep | board index remains useful for navigation |
| `01_native-board/pulse_rollup.md` | G2 | update | pulse material needs temporal-state alignment |
| `01_runtime-spine/README.md` | G5 | update | runtime spine should clarify semantic vs executable runtime |
| `01_runtime-spine/github_delta_driven_pulse_rule.md` | G2 | update | pulse rule should connect to temporal state sequence |
| `01_runtime-spine/legacy_writeback_block_rule.md` | G4 | keep | useful authority block; connect to adapter red gate |
| `01_runtime-spine/window_alignment_read_order.md` | G8 | keep | useful read-order bone |
| `01_runtime-spine/window_linking_logic_01_07.md` | G8 | update | preserve but align with eight-gate routing |
| `02_runtime-ops/task_follow_up.md` | G8 | update | task follow-up needs new gate fields |
| `02_translation-layer/README.md` | G1 | update | translate layer should cross-link to Qinyi / XLQY role |
| `03_board-orchestration/README.md` | G8 | keep | orchestration family index remains useful |
| `03_board-orchestration/window_binding_registry_01_07.md` | G8 | update | bind registry should align with C-025 and C-026 |
| `03_board-orchestration/window_delta_mapping_template.md` | G2 | update | delta mapping should align with temporal-state schema |
| `04_adapter-layer/README.md` | G5 | update | adapter family needs security baseline cross-link |
| `04_adapter-layer/activation_order.md` | G4 | update | activation order must clarify approval boundary |
| `04_adapter-layer/gamma_entry_spec.md` | G5 | hold_candidate | external tool entry spec; keep candidate until adapter security reviewed |
| `04_adapter-layer/replit_relay_spec.md` | G5 | hold_candidate | external relay spec; keep candidate until carrier/security reviewed |
| `04_adapter-layer/source_map.md` | G2 | update | source map should distinguish source/view/evidence |
| `04_adapter-layer/writeback_gate_spec.md` | G4 | keep | important red-gate artifact; cross-link to security spine |
| `04_adapter-layer/writeback_packet_contract.md` | G4 | update | useful contract; align with adapter baseline and temporal-state record |
| `05_topology/consistent-triad-principle.md` | G8 | keep | core topology principle |
| `05_topology/feasible-domain-and-responsibility.md` | G4 | keep | already being updated; central responsibility boundary |
| `05_topology/ten-ring-definition-v0-1.md` | G3 | update | ring language should align with non-linear topology correction |
| `05_topology/time-sovereignty.md` | G2 | keep | aligns with temporal-state sequence |
| `05_topology/triad-closed-loop-topology.md` | G8 | keep | core topology bone |
| `AGENT_READINESS_CHECKLIST.md` | G5 | update | connect to habitat and adapter security gates |
| `BRANCH_TOPOLOGY_AND_CLEANUP_REGISTER.md` | G8 | merge | likely should be absorbed into cleanup queue + architecture window index |
| `CHATGPT_GITHUB_BOOTSTRAP.md` | G6 | archive | useful historical bootstrap; not active doctrine |
| `CLEANUP_QUEUE_REGISTER.md` | G8 | keep | current active cleanup queue; needs C-023 to C-026 cross-link later |
| `CLUSTER_COVERAGE_MATRIX.md` | G8 | update | useful coverage table; should link to eight gates |
| `CLUSTER_COVERAGE_NOTE.md` | G8 | merge | likely note-level support; merge into coverage matrix or register |
| `CONTAMINATION_AND_PRIORITY_POLICY.md` | G3 | keep | active anti-pollution policy |
| `DISCONTINUITY_REGISTER.md` | G2 | update | discontinuity should adopt temporal-state fields |
| `DYNAMIC_CORPUS_DATABASE_NOTE.md` | G8 | keep | active future registry direction |
| `ECOSYSTEM_FAMILY_ONBOARDING_ROADMAP.md` | G5 | update | should absorb topology sphere and habitat routing |
| `EXTERNAL_API_VERSION_GOVERNANCE_NOTE.md` | G4 | update | authority/API wording must avoid XAFD/API pollution |
| `EXTERNAL_NODE_ONCHAIN_SPEC.md` | G5 | keep | active ecosystem node spec |
| `GITHUB_CHAIN_MASTER_MAP.md` | G8 | update | useful but should not make GitHub the system center |
| `GITHUB_NORMALIZATION_PHASE_PLAN.md` | G8 | merge | absorb into cleanup queue or future phase plan |
| `GITHUB_OPERATION_CAPABILITY_MATRIX.md` | G5 | update | capability matrix must distinguish ability from authorization |
| `JULES_TASKBOARD.md` | G6 | update | hold daily cleanup until gate routing stabilizes |
| `LEGACY_SEED_BRANCH_INVENTORY_SNAPSHOT.md` | G8 | archive | historical inventory snapshot |
| `LEGACY_SEED_CONTAMINATION_TRIAGE.md` | G3 | keep | still useful contamination reference |
| `LEGACY_SEED_MERGE_CANDIDATE_SHORTLIST.md` | G8 | update | merge candidates need gate-based routing |
| `LEGACY_SEED_NAMING_NORMALIZATION_PLAN.md` | G3 | keep | useful naming normalization plan |
| `MERGE_LAW_PROPOSAL.md` | G8 | hold_candidate | proposal remains candidate until merged into mother-law or policy |
| `MODEL_CONTRADICTION_REGISTER.md` | G2 | update | contradiction records need source/evidence/status fields |
| `MODEL_FAMILY_ONCHAIN_SPEC.md` | G5 | update | model family spec should align with ecosystem topology sphere |
| `MODEL_INVOCATION_CONTRACT.md` | G4 | update | invocation contract should align with authority and token routing |
| `MODEL_TO_WINDOW_OWNERSHIP_MAP.md` | G4 | update | ownership map should clarify routing is not approval |
| `NAMING_DRIFT_FILE_LEVEL_DIFFS.md` | G3 | merge | support material; merge into naming register when stable |
| `NAMING_DRIFT_RESOLUTION_REGISTER.md` | G3 | keep | active naming resolution register |
| `NETWORK_STRUCTURE_HIERARCHY_NOTE.md` | G5 | update | hierarchy note should align with topology sphere and habitat |
| `PRIMARY_BONE_STABILITY_SCORECARD.md` | G8 | keep | useful stability scorecard |
| `README.md` | G8 | update | should eventually reflect architecture window v0.9 without overclaiming |
| `REPLAY_READINESS_REPORT.md` | G2 | update | replay needs temporal-state and source/evidence separation |
| `REPOSITORY_CORPUS_INDEX.md` | G8 | keep | active corpus index; must reconcile with new PR artifacts |
| `ROLE_CLASSIFICATION_TABLE.md` | G3 | update | update role table with eight gates and new modules |
| `SCHEDULING_EFFECTIVENESS_GAP_NOTE.md` | G2 | update | scheduling proof should use temporal/effect record |
| `SCHEDULING_EFFECT_REGISTER.md` | G2 | keep | useful effect register; should align with temporal sequence |
| `SEED_SHADOW_POINTER.md` | G8 | archive | preserve as historical pointer |
| `SEMANTIC_COMPRESSION_REPORT.md` | G8 | archive | valuable historical report, not active control surface |
| `SNAPSHOT_MECHANISM_PROPOSAL.md` | G2 | hold_candidate | useful proposal; connect later to temporal-state and habitat snapshot |
| `STAGE_SYNC_SNAPSHOT_2026-04-21.md` | G8 | archive | dated snapshot; preserve but not active doctrine |
| `STATUS.md` | G8 | update | status should reflect latest candidate boundaries |
| `THIRD_RUNTIME_ENVIRONMENT_NOTE.md` | G5 | hold_candidate | runtime-environment note remains candidate until runtime boundary clarified |
| `THREE_COUPLING_RUNTIME_MAP.md` | G8 | keep | central topology map |
| `UNIFIED_ARTIFACT_REGISTER.md` | G8 | update | should absorb new PR artifacts and gate fields |
| `WINDOW_12_MASTER_TABLE.md` | G8 | keep | central window table; align with non-linear topology |
| `XUANLING_WORLD_READINESS_MILESTONES.md` | G8 | hold_candidate | useful milestone layer; avoid maturity inflation |

---

## 5. PR #270 Added Files｜Inventory B

These files are not yet reflected in `current_files.txt` and should be added to the next inventory refresh.

| File | Primary Gate | Decision | Reason / Next Action |
|---|---|---|---|
| `ACTIVE_RESTRUCTURING_TASK_MAP.md` | G8 | keep | current human-readable task map |
| `ADAPTER_SECURITY_BASELINE.md` | G5 | keep | active adapter safety baseline |
| `AGENT_INSTRUCTION_INTEGRITY_SPEC.md` | G4 | keep | active instruction-integrity spec |
| `ARTIFACT_RECORD_SCHEMA.md` | G2 | update | should add eight-gate fields later |
| `C019_NAMESPACE_POLLUTION_STATUS.md` | G3 | keep | active C-019 status note |
| `C023_TOKEN_CAPITAL_STATUS.md` | G7 | keep | active C-023 status note |
| `C024_CODEX_PRESENTATION_SKILL_LOOP_STATUS.md` | G6 | keep | active C-024 status note |
| `C025_ARCHITECTURE_WINDOW_V0_9_STATUS.md` | G8 | keep | active C-025 status note |
| `C026_EIGHT_GATE_ROTATION_AXIS_STATUS.md` | G8 | keep | active C-026 status note |
| `CANONICAL_STATUS_GLOSSARY.md` | G3 | keep | active status glossary |
| `ECOSYSTEM_TOPOLOGY_SPHERE_ALIGNMENT_ADDENDUM.md` | G5 | keep | active topology sphere addendum |
| `EIGHT_GATE_ROTATION_AXIS_CONSOLIDATION.md` | G8 | keep | active P0 consolidation spec |
| `EIGHT_GATE_ROUTING_PASS_1.md` | G8 | keep | active first routing table |
| `HUMAN_ORIGIN_LAYER.md` | G1 | keep | active source-anchor layer |
| `MODULE_14_PERSISTENT_AGENT_HABITAT.md` | G5 | keep | active habitat module |
| `MODULE_15_TOKEN_CAPITAL_PRIVATE_LEARNING_LOOP.md` | G7 | keep | active token capital module |
| `MODULE_16_CODEX_PRESENTATION_SKILL_LOOP.md` | G6 | keep | active Codex local skill loop module |
| `NAMESPACE_REGISTRY.md` | G3 | keep | active namespace registry |
| `NAMING_POLLUTION_RULES.md` | G3 | keep | active naming pollution rule set |
| `NAMING_POLLUTION_RULES_HUMAN_ORIGIN_ADDENDUM.md` | G1 | keep | active source-anchor naming addendum |
| `SECURITY_FINDINGS_REGISTER.md` | G4 | keep | active security findings register |
| `SECURITY_THREAT_MODEL.md` | G4 | keep | active governance security model |
| `TEMPORAL_STATE_SEQUENCE_SPEC.md` | G2 | keep | active temporal-state sequence spec |
| `XUANLING_ARCHITECTURE_WINDOW_v0_9.md` | G8 | keep | active architecture window |

---

## 6. Pass 1 Findings

### 6.1 The corpus is not useless; it is mixed

Most files contain useful seed value. The problem is not lack of value; it is mixed status, overlapping role, and unclear return path.

### 6.2 Highest-risk categories

```yaml
Highest_Risk_Categories:
  naming_boundary_drift: G3
  authority_or_runtime_overclaim: G4
  carrier_or_adapter_overreach: G5
  closeout_inflation: G8
```

### 6.3 Likely archive group

Archive candidates are mostly dated snapshots or historical bootstrap reports:

- `CHATGPT_GITHUB_BOOTSTRAP.md`
- `LEGACY_SEED_BRANCH_INVENTORY_SNAPSHOT.md`
- `SEED_SHADOW_POINTER.md`
- `SEMANTIC_COMPRESSION_REPORT.md`
- `STAGE_SYNC_SNAPSHOT_2026-04-21.md`

Archive means preserve as history, not erase.

### 6.4 Merge / absorption group

Merge candidates:

- `BRANCH_TOPOLOGY_AND_CLEANUP_REGISTER.md`
- `CLUSTER_COVERAGE_NOTE.md`
- `GITHUB_NORMALIZATION_PHASE_PLAN.md`
- `NAMING_DRIFT_FILE_LEVEL_DIFFS.md`

These should not remain parallel active registers if their contents can be absorbed into stronger maps.

### 6.5 Update group is the largest group

This is expected. Many files are structurally valuable but predate:

- canonical status glossary
- source / evidence separation
- namespace pollution rules
- security spine
- temporal-state event schema
- token capital loop
- eight-gate routing

---

## 7. Next Actions

```yaml
Next_Actions:
  C012_A:
    action: update UNIFIED_ARTIFACT_REGISTER with Pass 1 decisions
  C012_B:
    action: add PR #270 new files to corpus inventory
  C013_A:
    action: reconcile REPOSITORY_CORPUS_INDEX and ROLE_CLASSIFICATION_TABLE after Pass 1
  C014_A:
    action: propagate status terms into files marked update
  Hold:
    action: do not archive or retire files until user reviews this pass
```

---

## 8. Non-Promotion Rules

Do not promote:

| From | To |
|---|---|
| Pass 1 decision | final deletion |
| archive candidate | useless file |
| merge candidate | erased value |
| update need | broken file |
| keep | approved doctrine |
| hold_candidate | active runtime |

---

## 9. Judgment

```yaml
Whole_Corpus_Filter_Pass_1:
  status: Go
  scope_A_current_files: 74_paths_from_current_files_txt
  scope_B_pr270_added_files: 24_active_new_artifacts
  dominant_decision: update
  immediate_next: UNIFIED_ARTIFACT_REGISTER_update
  closeout: false
```

---

## 10. Closing Sentence

The corpus should not be flattened or discarded. It should be filtered: keep the bones, update the living files, merge overlapping registers, archive historical snapshots, and hold promising candidates until review.
