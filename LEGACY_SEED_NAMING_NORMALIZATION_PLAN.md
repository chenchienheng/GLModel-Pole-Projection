# Legacy Seed Naming Normalization Plan

> Fifth extraction artifact for `xuanling-seed-v0-1`.
> This plan addresses the most visible family-level naming drift detected during the current branch extraction.
> It does not perform bulk rename automatically.
> It establishes the normalization rule so cleanup can proceed coherently.

---

## 0. Plan Status

- source_branch: `xuanling-seed-v0-1`
- base_branch: `main`
- plan_version: v0.1
- scope: family-level naming normalization
- bulk execution: pending
- return_to_00: true

---

## 1. Core Reading

Naming normalization is not cosmetic only.
In the current repository weave, naming drift is a structural issue because it affects:
- family recognition
- role classification
- extraction consistency
- merge safety
- future indexing quality

Therefore normalization should be handled as a cleanup-and-binding action, not mere wording polish.

---

## 2. Detected Drift Pairs

### Pair A
- `01_runtime-spine/`
- `01_runtime_spine/`

### Pair B
- `03_board-orchestration/`
- `03_board_orchestration/`

### Pair C
- `04_adapter-layer/`
- `04_adapter_layer/`

These are the clearest visible duplicate-family patterns detected through branch comparison.

---

## 3. Canonical Form Rule

At the current stage, the preferred canonical family form is:
- hyphenated family form

Therefore the canonical choices are:
- `01_runtime-spine/`
- `03_board-orchestration/`
- `04_adapter-layer/`

And the underscore families are treated as:
- naming-drift residue
- cleanup candidates
- extraction targets that need rebind or relocation

---

## 4. Why Hyphenated Form Is Chosen

### 4.1 Readability
Hyphenated form better preserves family readability at the repository level.

### 4.2 Consistency with Existing Visible Families
Other high-level families in the visible seed branch already use hyphenated structure, for example:
- `00_mother-law/`
- `02_translation-layer/`
- `03_board-orchestration/`
- `04_adapter-layer/`
- `08_log-board/`

### 4.3 Structural Family Signaling
Hyphenation makes multi-word family names read more clearly as one structural family rather than an implementation artifact.

---

## 5. Normalization Strategy

### 5.1 Do Not Bulk-rename Blindly
Do not rename everything at once without checking file contents and family role.

### 5.2 Normalize Through Controlled Extraction
Preferred path:
1. identify underscore-family files
2. compare against corresponding hyphen-family role
3. classify file as:
   - duplicate
   - unique seed value
   - residue
   - contamination
4. move/rewrite into canonical family if needed
5. retire residue after safe confirmation

### 5.3 Preserve Evidence Before Retiring
If underscore-family material has audit or transition value, preserve it as isolated history before retirement.

---

## 6. Pair-Specific Plans

### A. Runtime Spine Pair
Canonical:
- `01_runtime-spine/`

Underscore family treatment:
- treat `01_runtime_spine/` as cleanup family
- compare each file against canonical runtime-spine role
- preserve unique content by rebind
- retire pure duplicate residue later

### B. Board Orchestration Pair
Canonical:
- `03_board-orchestration/`

Underscore family treatment:
- treat `03_board_orchestration/` as cleanup family
- compare routing, binding, registry, and delta-mapping artifacts
- rehome unique seed material into canonical family

### C. Adapter Layer Pair
Canonical:
- `04_adapter-layer/`

Underscore family treatment:
- treat `04_adapter_layer/` as cleanup family
- compare activation, source map, writeback packet, and relay specs
- preserve useful specs through canonical relocation or rewrite

---

## 7. Operational Rule

Until normalization is completed:
- prefer canonical hyphen-family wording in all new main-branch artifacts
- treat underscore references as legacy seed branch residue
- avoid creating new underscore-form families

---

## 8. Immediate Next Actions

1. file-level comparison for the three drift pairs
2. generate duplicate/unique/residue classification per pair
3. prepare controlled relocation or rewrite plan
4. only then perform deletion or retirement actions

---

## 9. Related Artifacts

Read together with:
- `LEGACY_SEED_BRANCH_INVENTORY_SNAPSHOT.md`
- `LEGACY_SEED_FAMILY_ROLE_TABLE.md`
- `LEGACY_SEED_CONTAMINATION_TRIAGE.md`
- `LEGACY_SEED_MERGE_CANDIDATE_SHORTLIST.md`
- `BRANCH_TOPOLOGY_AND_CLEANUP_REGISTER.md`

---

## 10. Status

- family_level_naming_drift_plan_created: true
- canonical_hyphen_rule_selected: true
- file_level_execution_pending: true
- return_to_00: true
