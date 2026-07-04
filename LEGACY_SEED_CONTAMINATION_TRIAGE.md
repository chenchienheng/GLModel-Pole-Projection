# Legacy Seed Contamination Triage

> Third extraction artifact for `xuanling-seed-v0-1`.
> This note performs a family-level contamination triage on the legacy seed reservoir.
> It does not assume that older material is dirty by default.
> It separates:
>
> - clean seed value
> - construction residue
> - contamination risk
> - unverified mixed families

---

## 0. Triage Status

- source_branch: `xuanling-seed-v0-1`
- base_branch: `main`
- triage_version: v0.1
- scope: family-level contamination reading
- file-level contamination audit: pending
- return_to_00: true

---

## 1. Core Rule

Older materials are not polluted because they are old.
They are only treated as contamination when they distort:
- role orientation
- hierarchy
- time-chain reading
- continuity
- writeback
- naming consistency
- family boundary

Therefore the default rule is:
- classify first
- detect distortion second
- choose handling mode third

---

## 2. Contamination Status Classes

### clean_seed
High seed value with no strong visible structural distortion at current reading.

### construction_residue
Not harmful by default.
Represents unfinished, provisional, temporary, or partially redundant material produced during system construction.

### contaminated
Contains visible structural distortion likely to damage repository weave if imported without correction.

### mixed_unverified
Likely contains both seed value and residue or contamination, but not yet resolved at file level.

---

## 3. Family-Level Triage Table

| Family | Triage Status | Why | Suggested Handling |
|---|---|---|---|
| `00_meta/` | clean_seed | anchor-like meta family; low visible distortion so far | preserve |
| `00_mother-law/` | mixed_unverified | likely high-value mother-law reservoir, but large enough to mix upper-order seed and construction-stage overlays | preserve + file-level triage |
| `00_mother-law/runtime-spine/` | mixed_unverified | valuable runtime charter family, but must be checked against newer runtime notes already written to main | reclassify + compare |
| `00_mother-law/source-checks/` | construction_residue | check/validation artifacts likely useful, but often contextual and time-specific | isolate + preserve for audit |
| `01_native_board/` | mixed_unverified | likely high operational value but includes diagnostics, heartbeat, permissions, dashboards, and may contain time-bound residue | isolate + classify |
| `01_runtime-spine/` | clean_seed_candidate | central runtime family with likely major seed value | preserve + selective rebind |
| `01_runtime_spine/` | contaminated | strong naming-drift signal against hyphenated family | isolate + normalize |
| `02_runtime_ops/` | construction_residue | local runtime followthrough family; useful but not central sovereignty layer | preserve locally |
| `02_translation-layer/` | clean_seed_candidate | translation/interface family likely to remain useful across rewrites | preserve + reclassify if needed |
| `03_board-orchestration/` | mixed_unverified | dense operational family with clear value but also likely mixed stage-level and provisional orchestration drafts | isolate + selective extraction |
| `03_board_orchestration/` | contaminated | duplicate-family naming drift against hyphenated form | isolate + normalize |
| `04_adapter-layer/` | clean_seed_candidate | adapter family likely important for external node strategy | preserve + later bind |
| `04_adapter_layer/` | contaminated | duplicate-family naming drift against hyphenated form | isolate + normalize |
| `05_topology/` | clean_seed_candidate | high-value topology, triad, recursion, sovereignty family | preserve + selective promotion |
| `08_log-board/` | construction_residue | log residue may have audit and historical value, but not all should be promoted into structural core | isolate + keep as audit reservoir |
| `docs/xuanling/` | mixed_unverified | visible interface artifact; may be useful but must not overtake runtime sovereignty reading | isolate + compare to runtime notes |
| `AGENTS.md` | mixed_unverified | special operational root artifact with potential utility and potential context-locking residue | preserve + compare |

---

## 4. Clear Contamination Signals Detected Now

### 4.1 Duplicate Family Naming Drift
Confirmed visible signals:
- `01_runtime-spine/` vs `01_runtime_spine/`
- `03_board-orchestration/` vs `03_board_orchestration/`
- `04_adapter-layer/` vs `04_adapter_layer/`

This is already strong enough to mark the underscore families as contamination candidates or normalization targets.

### 4.2 Stage/Core Mixing Risk
Families such as:
- `00_mother-law/`
- `03_board-orchestration/`
- `01_native_board/`
likely mix:
- durable law/seed material
- time-bound stage notes
- temporary diagnostics

This is not automatic contamination, but it is a strong mixed-family risk.

### 4.3 Surface Sovereignty Risk
Families like:
- `docs/xuanling/`
- parts of orchestration/public-board files
must not be allowed to override time-chain or mother-architecture readings.

---

## 5. Handling Rule by Status

### clean_seed / clean_seed_candidate
- preserve
- compare with current `main` writeback layer
- selectively promote or rebind

### construction_residue
- isolate
- keep audit value
- do not flatten into main unless explicitly needed

### contaminated
- isolate first
- normalize naming / role / placement
- only promote after correction

### mixed_unverified
- do file-level triage before merge decision
- split clean seed from residue and contamination

---

## 6. Immediate Priority Order

### P0-P1 Families for next extraction
- `00_mother-law/`
- `01_runtime-spine/`
- `05_topology/`
- `03_board-orchestration/`

### Immediate cleanup candidates
- `01_runtime_spine/`
- `03_board_orchestration/`
- `04_adapter_layer/`

### Preserve-as-reservoir candidates
- `08_log-board/`
- `00_mother-law/source-checks/`

---

## 7. Next Extraction Targets

1. `LEGACY_SEED_MERGE_CANDIDATE_SHORTLIST.md`
2. `LEGACY_SEED_NAMING_NORMALIZATION_PLAN.md`
3. `WINDOW_12_MASTER_TABLE.md`
4. `THIRD_RUNTIME_ENVIRONMENT_NOTE.md`

---

## 8. Status

- family_level_contamination_triage_created: true
- duplicate_family_drift_promoted_to_cleanup_signal: true
- file_level_triage_pending: true
- return_to_00: true
