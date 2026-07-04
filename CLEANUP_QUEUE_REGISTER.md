# Cleanup Queue Register

> Durable cleanup queue for current known contamination, residue, and normalization targets.
> Purpose: prevent pollution from remaining diffuse and unnamed.
>
> This queue does not assume every queued item should be deleted.
> It records what must be cleaned, normalized, isolated, or rewritten.

---

## 0. Core Reading

Cleanup is not equal to destruction.
Cleanup means:
- remove ambiguity
- reduce contamination
- normalize naming
- isolate residue
- preserve seed value where possible

Therefore each item in the queue should receive:
- a contamination reading
- a priority level
- a handling mode
- a target state

---

## 1. Queue Fields

Each cleanup item should eventually include:
- `cleanup_id`
- `scope`
- `source_branch_or_path`
- `contamination_status`
- `priority_level`
- `handling_mode`
- `target_state`
- `reason`
- `dependency`
- `status`

---

## 2. Current Cleanup Queue

| ID | Scope | Source | Contamination Status | Priority | Handling Mode | Target State | Reason | Status |
|---|---|---|---|---|---|---|---|---|
| C-001 | family naming drift | `01_runtime_spine/` | contaminated | P1 | isolate + normalize | rebind into `01_runtime-spine/` or retire residue | underscore family conflicts with canonical runtime spine family | resolved |
| C-002 | family naming drift | `03_board_orchestration/` | contaminated | P1 | isolate + normalize | rebind into `03_board-orchestration/` or retire residue | duplicate-family naming drift in orchestration layer | resolved |
| C-003 | family naming drift | `04_adapter_layer/` | contaminated | P1 | isolate + normalize | rebind into `04_adapter-layer/` or retire residue | duplicate-family naming drift in adapter layer | resolved |
| C-004 | branch residue | `xuanling-write-test-20260405-d` | contaminated_candidate | P1 | isolate + retire_when_safe | remove branch residue after confirming no audit value remains | test-only branch adds clutter and ambiguity | queued |
| C-005 | file residue | `00_mother-law/WRITE_TEST.md` | construction_residue | P2 | isolate + retire_when_safe | archive or remove after branch decision | visible write-test artifact with low structural value | queued |
| C-006 | mixed family concentration | `00_mother-law/` | mixed_unverified | P1 | triage + selective rebind | split clean seed / residue / contamination | very high value family but likely mixed layers | queued |
| C-007 | mixed family concentration | `03_board-orchestration/` | mixed_unverified | P1 | triage + selective rebind | stable orchestration core separated from stage residue | dense operational family with likely mixed material | queued |
| C-008 | mixed family concentration | `01_native_board/` | mixed_unverified | P2 | isolate + classify | preserve stable board logic, isolate temporal residue | diagnostics, heartbeat, and board logic are mixed | resolved |
| C-009 | schedule design drift | scheduling artifacts without effect proof | construction_residue + runtime_risk | P1 | bind to effect register | every schedule linked to owner/output/proof | named schedule without runtime effect risks static pollution | queued |
| C-010 | static corpus accumulation | large text corpus without unified dynamic registry | contamination_risk | P0-P1 | rebind into dynamic register | turn static corpus into dynamic artifact database | static pile risks becoming residue mass | active |
| C-011 | github issue state | `main` | state_desync | P1 | close stale issues | close #1, #2, #6, #9, #15, #16, #17, #18, #20, #37 | superseded/merged tasks cluttering board | queued |
| C-012 | drill mock residue | `02_translation-layer/` | construction_residue | P3 | isolate + verify | handle mock assets from BRIDGE_DRILL_01 | mock artifacts require review before removal | active |

---

## 3. Current Highest-Priority Cleanup Fronts

### Front A — Naming Normalization
Items:
- C-001
- C-002
- C-003

Reason:
- duplicate-family naming drift directly damages indexing, classification, extraction, and future merge safety

### Front B — Seed Family Triage
Items:
- C-006
- C-007
- C-008

Reason:
- high-value families already identified, but still mixed with residue or contamination

### Front C — Scheduling Effect Cleanup
Items:
- C-009

Reason:
- schedule drift creates structural-operational mismatch and silent runtime weakness

### Front D — Dynamic Corpus Conversion
Items:
- C-010

Reason:
- this is the main anti-pollution move for the whole text field

---

## 4. Cleanup Rule

Default cleanup order:
1. normalize naming drift
2. triage mixed families
3. isolate obvious residue
4. bind schedule to effect proof
5. convert static text field into dynamic registry-backed corpus

---

## 5. Anti-Pollution Rule

A text or branch becomes pollution not only by being wrong,
but by remaining:
- unnamed
- unclassified
- unowned
- unreturned
- unnormalized

This cleanup queue exists to prevent that drift.

---

## 6. Related Artifacts

Read together with:
- `CONTAMINATION_AND_PRIORITY_POLICY.md`
- `LEGACY_SEED_CONTAMINATION_TRIAGE.md`
- `LEGACY_SEED_NAMING_NORMALIZATION_PLAN.md`
- `BRANCH_TOPOLOGY_AND_CLEANUP_REGISTER.md`
- `DYNAMIC_CORPUS_DATABASE_NOTE.md`
- `SCHEDULING_EFFECTIVENESS_GAP_NOTE.md`

---

## 7. Suggested Next Artifacts

1. `SCHEDULING_EFFECT_REGISTER.md`
2. `MODEL_TO_WINDOW_OWNERSHIP_MAP.md`
3. `CLUSTER_COVERAGE_MATRIX.md`
4. future machine-readable cleanup queue layer

---

## 8. Status

- cleanup_queue_created: true
- known_contamination_items_named: true
- highest_priority_fronts_defined: true
- return_to_00: true
