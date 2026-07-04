# Naming Drift Resolution Register

> Durable execution register for resolving known family-level naming drift.
> Purpose: move naming normalization from policy-only status into actionable cleanup work.

---

## 0. Core Reading

Naming drift is not cosmetic noise only.
In the current repository weave it causes:
- family duplication
- indexing instability
- extraction ambiguity
- merge uncertainty
- cleanup debt

Therefore each detected drift pair should have a canonical target and an execution path.

---

## 1. Resolution Schema

Each drift pair should be tracked with:
- `resolution_id`
- `legacy_family`
- `canonical_family`
- `contamination_status`
- `priority_level`
- `execution_mode`
- `required_actions`
- `promotion_rule`
- `retirement_rule`
- `status`

---

## 2. Current Resolution Register

| ID | Legacy Family | Canonical Family | Status | Priority | Execution Mode | Required Actions |
|---|---|---|---|---|---|---|
| N-001 | `01_runtime_spine/` | `01_runtime-spine/` | resolved | P1 | isolate + compare + rebind | compare files, preserve unique runtime seed, retire duplicate residue |
| N-002 | `03_board_orchestration/` | `03_board-orchestration/` | resolved | P1 | isolate + compare + rebind | compare routing/registry artifacts, preserve unique orchestration seed, retire duplicate residue |
| N-003 | `04_adapter_layer/` | `04_adapter-layer/` | resolved | P1 | isolate + compare + rebind | compare source map/spec/writeback files, preserve unique adapter seed, retire duplicate residue |

---

## 3. Canonical Rule

The canonical family form for the current repository weave is:
- hyphenated family form

This means all new main-branch architecture artifacts should prefer:
- `01_runtime-spine/`
- `03_board-orchestration/`
- `04_adapter-layer/`

The underscore families should be treated as legacy residue families until resolved.

---

## 4. Execution Order

### Step A — Pair-Level Inventory
For each legacy family:
1. list visible files
2. identify duplicates vs unique files
3. detect possible contamination or stage-only residue

### Step B — Controlled Rebind
For each unique file:
1. decide preserve / rewrite_rebind / isolate
2. rehome into canonical family or convert into new canonical artifact

### Step C — Residue Retirement
For each pure duplicate or low-value residue:
1. preserve history if needed
2. retire when safe

---

## 5. Promotion Rule

A file from a legacy family may be promoted only when:
- role is clear
- canonical destination is clear
- no unresolved contradiction remains
- writeback target is defined

---

## 6. Retirement Rule

A legacy-family item may be retired when:
- it is duplicate or low-value residue
- no unique seed value remains
- no audit requirement blocks retirement

---

## 7. Relation to Cleanup Queue

This register operationalizes:
- C-001
- C-002
- C-003

from `CLEANUP_QUEUE_REGISTER.md`.

---

## 8. Suggested Next Artifact

- `NAMING_DRIFT_FILE_LEVEL_DIFFS.md`
- future machine-readable family normalization queue

---

## 9. Status

- naming_drift_resolution_register_created: true
- c001_c003_operationalized: true
- file_level_execution_pending: true
- return_to_00: true
