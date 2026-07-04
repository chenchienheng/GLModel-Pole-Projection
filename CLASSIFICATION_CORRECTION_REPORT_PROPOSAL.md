# Classification Correction Report Proposal

> Post-Corpus Indexing Semantic Calibration Proposal
> Lane: dependency_link
> Objective: Refine role and chain-face mapping to resolve D-011 and D-012

---

## 1. Identified Misclassifications & Default Duplication (D-011)

The previous automated indexing script heavily favored assigning files to the `Writeback Artifact` role and the `Writeback Chain` face. While many registers and indexes correctly belong there, several files serve structural, transitional, or interaction functions but were grouped by default.

**Key areas of over-assignment:**
- Files with "note", "roadmap", or "actions" in their name were sometimes lumped into Writeback or simply left as generic Writeback Chain, ignoring their functional bridge or event coupling characteristics.
- Upper-order and core structural notes (e.g., `00_mother-law/README.md`) were given a default `Writeback Chain` rather than properly identifying their sovereignty/bone coupling origin.

---

## 2. Chain-Face Wording Drift (D-012)

The mapping between structural roles and the Three Coupling Faces was slightly skewed:
- **Bone Coupling (Bone Chain)** should encompass Upper-Order / Sovereignty-Oriented documents, as well as Structural Bone documents (e.g., rules, specs, hierarchies).
- **Bridge Coupling (Bridge Chain)** should encompass Carrying Mesh and Transitional / Stage Notes, as these are meant to bridge states, transit semantic text, or handle cross-surface linkage.
- **Event Coupling (Event Chain)** should map strongly to Interaction Surfaces, tool invocation notes, and active workflow orchestration.
- **Writeback Coupling (Writeback Chain)** should be strictly for Writeback Artifacts (logs, registers, indexes).

---

## 3. Refined Classification Proposal (Sampling)

The following corrections are proposed to resolve the identified misclassifications (No mass rewrite will be executed in this task, this is a proposal for the subsequent phase):

| Artifact | Current Mapping | Proposed Corrected Mapping | Reason |
|---|---|---|---|
| `00_mother-law/README.md` | Upper-Order / Writeback Chain | Upper-Order / Bone Chain | Core framing belongs to the primary structural continuity axis. |
| `README.md` | Upper-Order / Writeback Chain | Upper-Order / Bone Chain | Entry point establishes conceptual structure, not just a writeback node. |
| `CORE_ACTIONS.md` | Writeback Artifact / Writeback Chain | Interaction Surface / Event Chain | Defines active execution, matching event coupling and tool routing. |
| `ECOSYSTEM_FAMILY_ONBOARDING_ROADMAP.md` | Interaction Surface / Writeback Chain | Interaction Surface / Event Chain | Relates to external nodes and workflow bridging. |
| `CHATGPT_GITHUB_BOOTSTRAP.md` | Transitional / Writeback Chain | Transitional / Bridge Chain | Serves as a bridge/re-anchor note. |
| `GATE_64_BINDING_NOTE.md` | Transitional / Writeback Chain | Transitional / Bridge Chain | Connects structural framing to transitions. |
| `EXTERNAL_NODE_ONCHAIN_SPEC.md` | Structural Bone / Writeback Chain | Structural Bone / Bone Chain | Governs structural definitions of nodes, belonging to Bone Coupling. |

---

## 4. Mismatch or Gap Observations

- **Mismatch:** The automated script grouped based on simplistic string matching (`if 'register' in fname...`), which failed to account for the architectural intent of the documents as outlined in `THREE_COUPLING_RUNTIME_MAP.md`.
- **Gap:** The concept of `Bridge Chain` vs `Event Chain` is sometimes functionally overlapping in the naming convention (e.g., `03_board-orchestration` has elements of both Event and Bridge). A clearer delineation in a future glossary update may be required.

---

## 5. Unresolved Risks

- **Role Drift Persistence:** If we manually correct the table but future scripts or agents use the same naive string-matching, the drift will return. We need to persist the semantic evaluation rules (as outlined in section 2) into an active prompt guardrail or python evaluation script.

---

## 6. Next Recommended Action

**Action:** Execute the proposed mapping corrections on `ROLE_CLASSIFICATION_TABLE.md` and formalize the semantic evaluation rules (Bone=Structural/Upper, Bridge=Transitional/Mesh, Event=Interaction, Writeback=Registers) in `01_runtime-spine/role_mapping_rules.md` to prevent future script-based overwrites.
