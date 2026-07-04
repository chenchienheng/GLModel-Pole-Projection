# Legacy Seed Isolate-Only Shortlist

> Extraction artifact for `xuanling-seed-v0-1`.
> This shortlist identifies families that must be isolated and preserved
> as reservoirs, or normalized before any potential merge.
> It prevents contamination and naming drift from entering `main`.

---

## 0. Shortlist Status

- source_branch: `xuanling-seed-v0-1`
- base_branch: `main`
- shortlist_version: v0.1
- scope: family-level isolate-only targets
- flatten_merge: disallowed
- return_to_00: true

---

## 1. Core Rule

A family is placed on the isolate-only shortlist when it contains:

- duplicate-family naming drift (e.g. underscore instead of hyphen)
- historical audit residue rather than active structural bone
- stage-specific checks or notes
- projection or surface artifacts that must not override runtime notes

These families must not be flattened into `main`. They should be preserved
locally or normalized carefully.

---

## 2. Isolate and Normalize Candidates

These families exhibit naming drift. They must be isolated and normalized
to their canonical hyphenated counterparts before any rebind.

### `01_runtime_spine/`

- Issue: Naming drift against `01_runtime-spine/`.
- Action: Isolate. Normalize by moving unique seed value to the hyphenated
canonical family, and retiring duplicates.

### `03_board_orchestration/`

- Issue: Naming drift against `03_board-orchestration/`.
- Action: Isolate. Rebind unique routing, binding, and registry artifacts
into the hyphenated canonical family.

### `04_adapter_layer/`

- Issue: Naming drift against `04_adapter-layer/`.
- Action: Isolate. Relocate activation specs, source maps, and relay specs
to the canonical hyphenated family.

---

## 3. Isolate as Reservoir Candidates

These families have audit or context value but are not suitable as the
main operational spine.

### `08_log-board/`

- Issue: Contains historical execution logs and preparation notes.
- Action: Isolate. Keep as an audit and historical reservoir. Do not
promote as structural core.

### `00_mother-law/source-checks/`

- Issue: Contains source verification and stage-specific checks.
- Action: Isolate. Preserve for audit purposes. Do not make these central
runtime rules.

### `docs/xuanling/`

- Issue: Interface artifacts and web display logic.
- Action: Isolate. Must not overtake or override mother-architecture or
runtime sovereignty readings.

---

## 4. Next Actions

- Implement `LEGACY_SEED_NAMING_NORMALIZATION_PLAN.md` for drift candidates.
- Maintain isolation boundaries for reservoir candidates.

---

## 5. Status

- isolate_only_shortlist_created: true
- naming_drift_families_isolated: true
- reservoir_families_identified: true
- return_to_00: true
