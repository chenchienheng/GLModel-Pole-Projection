# Full-Lifecycle Asset Matrix

> Purpose: Define the lifecycle stages, schema alignment, and tracking rules for
> all artifacts (assets) within the DCP-Framework corpus.

---

## 1. Asset Definition

An **Asset** is any durable artifact registered within the repository,
including markdown specifications, log entries, and bridge contracts. All assets
must be tracked through their full lifecycle from scouting to archival.

---

## 2. Lifecycle Stages

| Stage | Name | Description |
| :--- | :--- | :--- |
| **S1** | **Scout** | Raw discovery or external signal (unhardened). |
| **S2** | **Draft** | Initial structural formulation (internal war-room). |
| **S3** | **Review** | Formal evaluation against Mother-Law and Bone rules. |
| **S4** | **Active** | Merged into `main` and registered in the corpus index. |
| **S5** | **Archived** | Superseded or preserved as execution trace only. |

---

## 3. Schema Alignment Rules

To ensure cross-window consistency, every asset must declare:

- **Asset_ID:** `[FAMILY]-[TYPE]-[SEQUENCE]` (e.g., META-SPEC-001).
- **Location_Link:** Canonical path within the repository.
- **Return_Path:** Target path for future updates or corrections.
- **State_Layer:** `ACTIVE`, `STRUCTURE_ESTABLISHED`, or `SUPERSEDED`.

---

## 4. Cross-Window Handoff Contract

When an asset moves between windows (e.g., from a scout window to the bone
window), it must pass through a **Hardening Gate**:

- **Rule 1:** Verify semantic integrity (no unauthorized fact promotion).
- **Rule 2:** Ensure all required fields for the destination window are present.
- **Rule 3:** Update `Legion_Log` with the handoff trace.

---

## 5. Matrix View

| Asset Type | Primary Window | Review Node | Registry |
| :--- | :--- | :--- | :--- |
| **Bone (Core)** | W0 (Bone) | Mother-Law | REPOSITORY_CORPUS_INDEX |
| **Event (Pulse)** | W0 (Pulse) | Jules | GITHUB_CHAIN_MASTER_MAP |
| **Draft (War-room)** | Wx (Temporary) | ChatGPT | CLEANUP_QUEUE_REGISTER |
| **Adapter (Bridge)** | Wx (Adapter) | Codex | UNIFIED_ARTIFACT_REGISTER |

---

## 6. Status

- **ID:** META-SPEC-002
- **Status:** STRUCTURE_ESTABLISHED
- **Last_Reconciled:** 2026-04-21
