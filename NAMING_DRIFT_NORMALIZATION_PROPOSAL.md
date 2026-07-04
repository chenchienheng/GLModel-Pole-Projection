# Naming Drift Normalization Proposal (underscore → hyphen)

> Proposal artifact for legacy seed normalization.
> This proposal addresses the structural naming drift found in `xuanling-seed-v0-1`.
> **No full migration has been executed yet.**

---

## 0. Proposal Status

- source_branch: `xuanling-seed-v0-1`
- target_branch: `main`
- scope: `01_runtime_spine/`, `03_board_orchestration/`, `04_adapter_layer/`
- execution_status: proposal only
- return_to_00: true

---

## 1. Objectives

Identify files existing only in underscore paths, map them to corresponding
hyphenated families, and propose a rebind plan (move/merge/isolate).

---

## 2. Mapping Table & Unique File List

The following files were identified exclusively in the underscore directories
within the legacy seed branch.

### 2.1 Runtime Spine Drift

- **Underscore Path:** `01_runtime_spine/`
- **Hyphenated Target:** `01_runtime-spine/`

| File | Status | Proposed Action |
| --- | --- | --- |
| `github_delta_driven_pulse_rule.md` | Unique | Move |
| `legacy_writeback_block_rule.md` | Unique | Move |
| `window_alignment_read_order.md` | Unique | Move |
| `window_linking_logic_01_07.md` | Unique | Move |

### 2.2 Board Orchestration Drift

- **Underscore Path:** `03_board_orchestration/`
- **Hyphenated Target:** `03_board-orchestration/`

| File | Status | Proposed Action |
| --- | --- | --- |
| `window_binding_registry_01_07.md` | Unique | Move |
| `window_delta_mapping_template.md` | Unique | Move |

### 2.3 Adapter Layer Drift

- **Underscore Path:** `04_adapter_layer/`
- **Hyphenated Target:** `04_adapter-layer/`

| File | Status | Proposed Action |
| --- | --- | --- |
| `activation_order.md` | Unique | Move |
| `gamma_entry_spec.md` | Unique | Move |
| `replit_relay_spec.md` | Unique | Move |
| `source_map.md` | Unique | Move |
| `writeback_gate_spec.md` | Unique | Move |
| `writeback_packet_contract.md` | Unique | Move |

---

## 3. Duplication Detection

- **Result:** No direct 1:1 file name duplicates were found between the
  underscore directories and the hyphenated directories in `main`.
- **Analysis:** All identified files represent unique seed content that must
  be preserved. The drift is purely directory-level.

---

## 4. Mismatch or Gap

- **File Naming Convention:** The files inside the underscore directories use
  underscores (e.g., `gamma_entry_spec.md`), whereas files in the hyphenated
  directories typically use hyphens (e.g., `asana-adapter.md`).
- **Gap:** When files are moved to the canonical hyphenated directories, their
  internal naming convention (underscores) will contrast with the hyphenated
  standard of the directory.

---

## 5. Unresolved Risks

- **Internal Cross-References:** Moving these files might break internal links
  within the legacy seed branch that still point to `01_runtime_spine/` or
  other underscore directories. A sweeping cross-reference check (Cross-link
  Repair) will be required after migration.
- **File Naming Inconsistency:** Resolving directory drift does not resolve
  file naming drift.

---

## 6. Next Recommended Action

1. Execute the proposed moves from the underscore directories to the
   hyphenated directories.
2. Standardize the filenames inside the newly migrated files (changing
   underscores to hyphens) to maintain internal consistency within the
   canonical families.
3. Update any broken internal markdown cross-references pointing to the
   old paths.

---

## 7. Status

- duplicate_families_mapped: true
- unique_files_identified: true
- rebind_plan_proposed: true
- full_migration_executed: false
- return_to_00: true
