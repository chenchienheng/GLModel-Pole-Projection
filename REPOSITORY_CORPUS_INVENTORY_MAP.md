# REPOSITORY_CORPUS_INVENTORY_MAP.md

> **PROPOSAL ONLY — NON-BINDING**
> This document provides a comprehensive inventory and classification map of the repository corpus.
> It separates approved governance from candidates, audits, and legacy artifacts to guide future consolidation.
> **Status: Inventory only; no cleanup or deletion authorized.**

---

## 0. Do_Not

- do not delete files
- do not rename files
- do not move files
- do not merge files
- do not update core governance rules
- do not treat this inventory as final doctrine
- do not touch workflows/actions, secrets, variables, billing, branch rules, or permissions

---

## 1. Inventory Map (Summary)

| Path | Family | Status | Source | Action | Risk |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **00_meta/** | 00_meta | approved | human | keep | Low |
| **00_mother-law/** | 00_mother-law | approved | human | keep | Low |
| **01_runtime-spine/** | 01_runtime-spine | approved | human | keep | Low |
| **01_native-board/** | 01_native-board | approved | human | keep | Low |
| **02_runtime-ops/** | 02_runtime-ops | approved | human | keep | Low |
| **02_translation-layer/** | 02_translation-layer | approved | human | keep | Low |
| **03_board-orchestration/** | 03_board-orchestration | approved | human | keep | Low |
| **03_field-governance/** | 03_field-governance | candidate | human | watch | Medium |
| **04_adapter-layer/** | 04_adapter-layer | approved | human | keep | Low |
| **04_interface-layer/** | 04_interface-layer | candidate | human | watch | Medium |
| **05_topology/** | 05_topology | approved | human | keep | Low |
| **root governance** | root-level governance | approved | human | keep | Low |
| **root audits** | root-level audit | audit_artifact | human/Jules | watch | Low |
| **PR/Issue/Tasks** | taskboard artifacts | audit_artifact | human/Jules | watch | Low |
| **Docs/** | documentation | candidate | human | watch | Low |
| **Legacy/Seed** | legacy docs | legacy | human | deprecate_candidate | Low |
| **Fallback/Unclassified** | unclassified | unknown | human/Jules/Codex | watch | Medium |

---

## 2. Formal Inventory (Codex Schema)

### 2.1 Family: 00_meta
Repository_Corpus_Inventory:
  - path: 00_meta/FULL_LIFECYCLE_ASSET_MATRIX.md
    family: 00_meta
    status: approved
    source: human
    action: keep
    risk: Low
  - path: THREE_COUPLING_RUNTIME_MAP.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low
  - path: WINDOW_12_MASTER_TABLE.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low
  - path: SPACE_CHAIN_MASTER_LAYER.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low
  - path: TIME_CHAIN_MASTER_LAYER.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low
  - path: REVIEW_CHAIN_MASTER_LAYER.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low
    notes: Asset lifecycle and schema alignment rules.
  - path: 00_meta/user_identity_anchor.md
    family: 00_meta
    status: approved
    source: human
    action: keep
    risk: Low
  - path: *_REPORT.md (All root-level reports)
    family: root-level audit
    status: audit_artifact
    source: human/Jules
    action: watch
    risk: Low
  - path: *_BATCH_*.md / *_RUN_*.md
    family: root-level audit
    status: audit_artifact
    source: human/Jules
    action: watch
    risk: Low
  - path: *_MATRIX.md / *_SCORECARD.md
    family: root-level audit
    status: audit_artifact
    source: human/Jules
    action: watch
    risk: Low
    notes: Primary identity alignment anchor.

### 2.2 Family: 00_mother-law
Repository_Corpus_Inventory:
  - path: 00_mother-law/README.md
    family: 00_mother-law
    status: approved
    source: human
    action: keep
    risk: Low
  - path: 00_mother-law/existence-chain-master-layer.md
    family: 00_mother-law
    status: approved
    source: human
    action: keep
    risk: Low
  - path: 00_mother-law/existence-consistency-rule.md
    family: 00_mother-law
    status: approved
    source: human
    action: keep
    risk: Low
  - path: 00_mother-law/mother-architecture-registry-v0-1.md
    family: 00_mother-law
    status: approved
    source: human
    action: keep
    risk: Low

### 2.3 Family: 01_runtime-spine
Repository_Corpus_Inventory:
  - path: 01_runtime-spine/README.md
    family: 01_runtime-spine
    status: approved
    source: human
    action: keep
    risk: Low
  - path: 01_runtime-spine/github_delta_driven_pulse_rule.md
    family: 01_runtime-spine
    status: approved
    source: human
    action: keep
    risk: Low
  - path: 01_runtime-spine/legacy_writeback_block_rule.md
    family: 01_runtime-spine
    status: approved
    source: human
    action: keep
    risk: Low
  - path: 01_runtime-spine/window_alignment_read_order.md
    family: 01_runtime-spine
    status: approved
    source: human
    action: keep
    risk: Low
  - path: 01_runtime-spine/window_linking_logic_01_07.md
    family: 01_runtime-spine
    status: approved
    source: human
    action: keep
    risk: Low

### 2.4 Family: 01_native-board
Repository_Corpus_Inventory:
  - path: 01_native-board/blockers.md
    family: 01_native-board
    status: approved
    source: human
    action: keep
    risk: Low
  - path: 01_native-board/board_index.md
    family: 01_native-board
    status: approved
    source: human
    action: keep
    risk: Low
  - path: 01_native-board/permissions/claude-google-calendar-controlled-permission-2026-04-16-v0-1.md
    family: 01_native-board
    status: approved
    source: human
    action: keep
    risk: Low
  - path: 01_native-board/pulse_rollup.md
    family: 01_native-board
    status: approved
    source: human
    action: keep
    risk: Low

### 2.5 Family: 02_runtime-ops
Repository_Corpus_Inventory:
  - path: 02_runtime-ops/task_follow_up.md
    family: 02_runtime-ops
    status: approved
    source: human
    action: keep
    risk: Low

### 2.6 Family: 02_translation-layer
Repository_Corpus_Inventory:
  - path: 02_translation-layer/README.md
    family: 02_translation-layer
    status: approved
    source: human
    action: keep
    risk: Low
  - path: 02_translation-layer/BRIDGE_DRILL_TEMPLATE_v0_1.md
    family: 02_translation-layer
    status: approved
    source: human
    action: keep
    risk: Low
  - path: 02_translation-layer/CLOUD_OVER_CLOUD_CONTROL_CENTER_SPEC.md
    family: 02_translation-layer
    status: approved
    source: human
    action: keep
    risk: Low

### 2.7 Family: 03_board-orchestration
Repository_Corpus_Inventory:
  - path: 03_board-orchestration/README.md
    family: 03_board-orchestration
    status: approved
    source: human
    action: keep
    risk: Low
  - path: 03_board-orchestration/window_binding_registry_01_07.md
    family: 03_board-orchestration
    status: approved
    source: human
    action: keep
    risk: Low
  - path: 03_board-orchestration/window_delta_mapping_template.md
    family: 03_board-orchestration
    status: approved
    source: human
    action: keep
    risk: Low
  - path: 03_board-orchestration/runtime-spine/xuanling-calendar-time-window-adapter-contract-2026-04-19-v0-1.md
    family: 03_board-orchestration
    status: approved
    source: human
    action: keep
    risk: Low
  - path: 03_board-orchestration/runtime-spine/xuanling-gmail-bridge-intake-gate-contract-2026-04-19-v0-1.md
    family: 03_board-orchestration
    status: approved
    source: human
    action: keep
    risk: Low

### 2.8 Family: 03_field-governance
Repository_Corpus_Inventory:
  - path: 03_field-governance/ (All files)
    family: 03_field-governance
    status: candidate
    source: human
    action: watch
    risk: Medium
    notes: Field-specific structural initiatives; pending trunk merge.

### 2.9 Family: 04_adapter-layer
Repository_Corpus_Inventory:
  - path: 04_adapter-layer/ (All files)
    family: 04_adapter-layer
    status: approved
    source: human
    action: keep
    risk: Low
    notes: Canonical adapters and node specifications.

### 2.10 Family: 04_interface-layer
Repository_Corpus_Inventory:
  - path: 04_interface-layer/QINYI_PUBLIC_CORE_VALUE_v0_1.md
    family: 04_interface-layer
    status: candidate
    source: human
    action: watch
    risk: Medium
    notes: Qinyi-specific interface values; pending trunk merge.

### 2.11 Family: 05_topology
Repository_Corpus_Inventory:
  - path: 05_topology/ (All files)
    family: 05_topology
    status: approved
    source: human
    action: keep
    risk: Low
    notes: Triad and consistency principles.

### 2.12 Family: root-level governance docs
Repository_Corpus_Inventory:
  - path: README.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low
  - path: AGENTS.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low
  - path: REPOSITORY_CORPUS_INDEX.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low
  - path: UNIFIED_ARTIFACT_REGISTER.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low
  - path: MULTI_CHAIN_DISPATCH_GOVERNANCE.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low
  - path: WORLD_CHAIN_MASTER_AXIS.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low
  - path: TRI_COUPLING_STATE_SPEC.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low
  - path: XUANLING_LINGLUO_MASTER_MAP.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low
  - path: XUANLING_OPERATIONAL_MODEL_CORE.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low
  - path: XUANLING_VS_DIGITAL_TWIN_SPEC.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low
  - path: CLOUDTOP_RELAY_CHANNEL_SPEC.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low
  - path: WORK_OS_CHAIN_INTEGRATION_SPEC.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low
  - path: TASK_ORCHESTRATION_BRIDGE_SPEC.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low
  - path: PHYSICAL_SIGNAL_BOUNDARY_SPEC.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low
  - path: INTERNAL_RELATIONAL_MESH_SPEC.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low
  - path: REDUNDANT_LOAD_REDUCTION_SPEC.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low
  - path: CLOUDTOP_PROTOCOL_HARDENING_NOTE.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low
  - path: CHATGPT_GITHUB_BOOTSTRAP.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low
  - path: GITHUB_CHAIN_MASTER_MAP.md
    family: root-level governance docs
    status: approved
    source: human
    action: keep
    risk: Low

### 2.13 Family: root-level audit / cleanup / legacy docs
Repository_Corpus_Inventory:
  - path: BRANCH_TOPOLOGY_AND_CLEANUP_REGISTER.md
    family: root-level audit
    status: audit_artifact
    source: human
    action: keep
    risk: Low
  - path: CLEANUP_QUEUE_REGISTER.md
    family: root-level audit
    status: audit_artifact
    source: human
    action: keep
    risk: Low
  - path: CLUSTER_COVERAGE_MATRIX.md
    family: root-level audit
    status: audit_artifact
    source: human
    action: keep
    risk: Low
  - path: CONTAMINATION_AND_PRIORITY_POLICY.md
    family: root-level audit
    status: audit_artifact
    source: human
    action: keep
    risk: Low
  - path: DISCONTINUITY_REGISTER.md
    family: root-level audit
    status: audit_artifact
    source: human
    action: keep
    risk: Low
  - path: FULL_REPOSITORY_TOPOLOGY_ALIGNMENT.md
    family: root-level audit
    status: audit_artifact
    source: human
    action: keep
    risk: Low
  - path: NAMING_DRIFT_RESOLUTION_REGISTER.md
    family: root-level audit
    status: audit_artifact
    source: human
    action: keep
    risk: Low
  - path: REPOSITORY_HYGIENE_RECONCILIATION.md
    family: root-level audit
    status: audit_artifact
    source: human
    action: keep
    risk: Low
  - path: current_files.txt
    family: root-level audit
    status: audit_artifact
    source: human
    action: watch
    risk: Low
  - path: LABEL_TOPOLOGY_MAP.md
    family: root-level audit
    status: audit_artifact
    source: human
    action: keep
    risk: Low
  - path: STATUS.md
    family: root-level audit
    status: audit_artifact
    source: human
    action: keep
    risk: Low
  - path: LEGACY_SEED_* (All matching files)
    family: legacy docs
    status: legacy
    source: human
    action: deprecate_candidate
    risk: Low
    notes: Candidates for isolation or archival.

### 2.14 Family: Docs / Documentation
Repository_Corpus_Inventory:
  - path: docs/qinyi/
    family: documentation
    status: approved
    source: human
    action: keep
    risk: Low
  - path: docs/xuanling/
    family: documentation
    status: candidate
    source: human
    action: watch
    risk: Low

### 2.15 Family: PR / issue / taskboard artifacts
Repository_Corpus_Inventory:
  - path: .github/ (All templates)
    family: taskboard artifacts
    status: approved
    source: human
    action: keep
    risk: Low
  - path: JULES_TASKBOARD.md
    family: taskboard artifacts
    status: audit_artifact
    source: Jules
    action: watch
    risk: Low
  - path: CORE_ACTIONS.md
    family: taskboard artifacts
    status: audit_artifact
    source: human
    action: watch
    risk: Low
  - path: MAIN_BRANCH_TASKBOARD_RECONCILIATION.md
    family: taskboard artifacts
    status: audit_artifact
    source: Jules
    action: watch
    risk: Low
  - path: STAGE_SYNC_SNAPSHOT_2026-04-21.md
    family: taskboard artifacts
    status: audit_artifact
    source: human
    action: watch
    risk: Low
  - path: snapshots/SNAPSHOT_2026_04_21_V1.md
    family: taskboard artifacts
    status: audit_artifact
    source: human
    action: watch
    risk: Low
  - path: REPLAY_READINESS_REPORT.md
    family: taskboard artifacts
    status: audit_artifact
    source: human
    action: watch
    risk: Low
  - path: SEMANTIC_COMPRESSION_REPORT.md
    family: taskboard artifacts
    status: audit_artifact
    source: human
    action: watch
    risk: Low

### 2.16 Family: Fallback / Unclassified Assets
Repository_Corpus_Inventory:
  - path: MERGE_LAW_PROPOSAL.md
    family: unknown_root_markdown
    status: candidate
    source: human
    action: watch
    risk: Medium
  - path: MODEL_INVOCATION_CONTRACT.md
    family: unknown_root_markdown
    status: candidate
    source: human
    action: watch
    risk: Medium
  - path: SNAPSHOT_MECHANISM_PROPOSAL.md
    family: unknown_root_markdown
    status: candidate
    source: human
    action: watch
    risk: Medium
  - path: (Remaining root-level *.md files)
    family: unknown_root_markdown
    status: candidate
    source: human/Jules
    action: watch
    risk: Medium
    notes: Includes specialized specs (*_SPEC.md), notes (*_NOTE.md), and proposals.

  - path: (Remaining tracked non-Markdown root assets, including *.pdf)
    family: binary_or_pdf_assets
    status: unknown
    source: human/Jules/Codex
    action: watch
    risk: Medium

  - path: (Remaining tracked non-root unclassified paths)
    family: unknown_non_root_paths
    status: unknown
    source: human/Jules/Codex
    action: watch
    risk: Medium

  - path: Freeze/readme
    family: unknown_non_markdown_assets
    status: unknown
    source: human/Jules/Codex
    action: watch
    risk: Medium

  - path: 05_XLEN_Reserve_Unenabled/...
    family: reserve_or_unenabled_paths
    status: unknown
    source: human/Jules/Codex
    action: watch
    risk: Medium

---

## 3. Consolidation Candidates

- **Audit Consolidation**: Merge multiple naming drift, cleanup registers, and reconciliation reports into a unified `HYGIENE_CONSOLIDATED_LEDGER.md`.
- **Legacy Archival**: Move all `LEGACY_SEED_*` files into a dedicated `archive/legacy_seeds/` directory.
- **Candidate Hardening**: Review all root-level `*_PROPOSAL.md` and `*_SPEC.md` files; those approved should be moved into their respective family directories (00-05).
- **Test Artifact Cleanup**: Consolidate validation batches and dry-run reports into a `logs/validation/` hierarchy.

---

## 4. Status

- inventory_status: PROPOSAL
- file_count_analyzed: ~150
- generated_at: 2026-05-06
