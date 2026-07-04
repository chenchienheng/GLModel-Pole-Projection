# Semantic Compression Preflight Report

> Initial scan and mapping of operational terminology toward tri-coupling core action families.
> Purpose: prepare for future semantic compression by identifying redundancy and overlap.

---

## 1. Terminology Mapping Table

| Operational Term | Current Source(s) | Functional Group | Likely Core Action Family |
|---|---|---|---|
| naming normalization | CLEANUP_QUEUE_REGISTER | structural alignment | structural_cleanup |
| naming drift | NAMING_DRIFT_RESOLUTION_REGISTER | structural alignment | structural_cleanup |
| seed rebinding | LEGACY_SEED_NAMING_NORMALIZATION_PLAN | extraction / rebind | structural_cleanup |
| hyphenated family form | LEGACY_SEED_NAMING_NORMALIZATION_PLAN | structural policy | structural_cleanup |
| directory structure repair | JULES_TASKBOARD | structural alignment | structural_cleanup |
| cross-link repair | JULES_TASKBOARD | dependency | dependency_link |
| cross-reference repair | JULES_TASKBOARD | dependency | dependency_link |
| file-to-file linking | JULES_TASKBOARD | dependency | dependency_link |
| binding to existing notes | THREE_COUPLING_RUNTIME_MAP | dependency | dependency_link |
| registry reconciliation | JULES_TASKBOARD | state update | state_register_update |
| queue updates | JULES_TASKBOARD | state update | state_register_update |
| resolution updates | JULES_TASKBOARD | state update | state_register_update |
| status reconciliation | JULES_TASKBOARD | state update | state_register_update |
| registry / index correction | JULES_TASKBOARD | state update | state_register_update |

---

## 2. Redundancy Report

- **Structural Redundancy:** "naming normalization" and "naming drift resolution" are functionally identical in the current cleanup context.
- **Link Redundancy:** "cross-link repair," "cross-reference repair," and "file-to-file linking" all describe the same dependency management action.
- **Update Redundancy:** "registry reconciliation," "status reconciliation," and "index correction" overlap significantly as they all involve ensuring tracking files match the repository state.

---

## 3. Overlap / Conflict Report

- **Rebind vs. Cleanup:** "Seed rebinding" is sometimes treated as a sub-task of "structural cleanup" and other times as a distinct "extraction" task. This causes slight ambiguity in lane assignment.
- **Registry vs. Policy:** Some documents (like `THREE_COUPLING_RUNTIME_MAP`) function as both architectural policy and a registry of coupling faces, creating potential overlap between `dependency_link` and `state_register_update`.

---

## 4. Proposed Compression Map

### 4.1 Family: `structural_cleanup`
- Canonical term: **Structural Normalization**
- Absorbs: naming normalization, naming drift, hyphenated form enforcement, seed rebinding, path repair.

### 4.2 Family: `dependency_link`
- Canonical term: **Cross-link Alignment**
- Absorbs: cross-link repair, reference repair, reciprocal linking, binding notes.

### 4.3 Family: `state_register_update`
- Canonical term: **Registry Reconciliation**
- Absorbs: queue updates, resolution status updates, status reconciliation, index correction.

---

## 5. Mismatch or Gap Analysis

- **Taskboard Sync:** The `JULES_TASKBOARD.md` lanes (Lane 1-6) do not yet explicitly map 1-to-1 with the three "Core Action Families" defined in the execution contract.
- **Status Terminology:** "Resolved," "Completed," "Active," and "Verified" are used across different registers with slightly different implied maturity levels.

---

## 6. Unresolved Risks

- **Mass-replacement Risk:** Automated replacement of these terms across the whole corpus before human adjudication could break conceptual nuances.
- **Mapping Drift:** New operational terms introduced during "Ecosystem Expansion" may not fit neatly into the current three families.

---

## 7. Next Recommended Action

- **Taskboard Alignment:** Explicitly map the six continuous lanes in `JULES_TASKBOARD.md` to the three core action families (`structural_cleanup`, `dependency_link`, `state_register_update`) to ensure execution consistency.
