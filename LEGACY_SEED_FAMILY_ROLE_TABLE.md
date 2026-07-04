# Legacy Seed Family Role Table

> Extraction artifact for `xuanling-seed-v0-1`.
> This table provides a family-level role classification extract
> for the legacy seed branch, extending the structural map.

---

## 0. Status

- source_branch: `xuanling-seed-v0-1`
- base_branch: `main`
- table_version: v0.1
- scope: legacy seed branch family-level roles
- return_to_00: true

---

## 1. Role Classification Rules

Families are classified into these core structural roles:

- **Upper-Order / Sovereignty-Oriented**: Mother architecture and core laws.
- **Structural Bone**: Central runtime, continuity, and writeback stabilization.
- **Carrying Mesh / Operational Field**: Orchestration, boards, execution.
- **Interaction Surface**: External node binding and web surfaces.
- **Transitional / Stage Note**: Temporary checks, audits, and stage syncs.
- **Writeback Artifact**: Historical execution residue.

---

## 2. Legacy Seed Family Classification Table

| Family | Initial Role | Status / Priority |
| --- | --- | --- |
| `00_meta/` | Upper-Order | P1 (Anchor) |
| `00_mother-law/` | Upper-Order | P0-P1 (Reservoir) |
| `00_mother-law/source-checks/` | Transitional / Stage Note | Audit |
| `01_native_board/` | Carrying Mesh | P1-P2 (Public field) |
| `01_runtime-spine/` | Structural Bone | P0-P1 (Runtime rules) |
| `02_runtime_ops/` | Transitional / Stage Note | Preserve locally |
| `02_translation-layer/` | Interaction Surface | P2 (Interface) |
| `03_board-orchestration/` | Carrying Mesh | P1 (Orchestration) |
| `04_adapter-layer/` | Interaction Surface | P2 (External binding) |
| `05_topology/` | Upper-Order / Bone | P0-P1 (Topology) |
| `08_log-board/` | Writeback Artifact | Preserve as audit |
| `docs/xuanling/` | Interaction Surface | P2 (Web surface) |
| `AGENTS.md` | Transitional / Stage Note | Special artifact |

---

## 3. Drift Candidates (Unclassified)

These families are not given permanent structural roles because they are
naming drift artifacts. They are marked for normalization.

| Drift Family | Action | Target Canonical Family |
| --- | --- | --- |
| `01_runtime_spine/` | Isolate & Normalize | `01_runtime-spine/` |
| `03_board_orchestration/` | Isolate & Normalize | `03_board-orchestration/` |
| `04_adapter_layer/` | Isolate & Normalize | `04_adapter-layer/` |

---

## 4. Status

- legacy_seed_family_roles_mapped: true
- drift_families_separated: true
- return_to_00: true
