# LABEL_TOPOLOGY_MAP.md

> **PROPOSAL ONLY — NON-BINDING**
> This document provides a mapping of existing repository labels to the MotherTree / 13-gate / closure architecture.
> It serves as a mapping layer to prevent the deletion of labels that may encode structural topology.

---

## 0. Schema Definition

| Field | Description |
| :--- | :--- |
| **label_name** | The existing GitHub label name. |
| **observed_family** | Structural grouping (MotherTree, closure, return-chain, tool-family, Qinyi, standard, unknown). |
| **mapped_gate** | Traffic Light Gate assignment (Green, Yellow, Red). |
| **mapped_scope** | The functional domain or boundary governed by the label. |
| **risk_level** | Categorization based on the impact of label-associated actions. |
| **keep_merge_deprecate** | Proposed hygiene action. |
| **notes** | Additional context or rationale. |

---

## 1. Traffic Light Gate Definitions

- **Green**: Low-risk. Drafts, documentation, analysis, or informational items. No direct execution.
- **Yellow**: Medium-risk. PRs, governance candidates, review required, or task orchestration.
- **Red**: High-risk. Secrets, billing, deployment, workflows, permissions, or core architecture updates.

---

## 2. Label Topology Map

| label_name | observed_family | mapped_gate | mapped_scope | risk_level | keep_merge_deprecate | notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| agent-native | tool-family | Yellow | Agent execution rules | Medium | Keep | |
| all-window | MotherTree | Yellow | Multi-window governance | Medium | Keep | |
| architecture-intake | MotherTree | Yellow | Architecture intake | Medium | Keep | |
| architecture-protocol | MotherTree | Red | Core protocol update | High | Keep | |
| architecture-upgrade | MotherTree | Red | Core architecture upgrade | High | Keep | |
| asset-lifecycle | MotherTree | Yellow | Asset lifecycle tracking | Medium | Keep | |
| auto-dispatch | tool-family | Yellow | Automatic dispatch logic | Medium | Keep | |
| automation | tool-family | Yellow | General automation | Medium | Keep | |
| automation-backbone | tool-family | Red | Automation core | High | Keep | |
| backup | standard | Green | Backup/Historical | Low | Keep | |
| bottom-up-feedback | return-chain | Green | Feedback loop | Low | Keep | |
| branch-growth | standard | Green | Branching analysis | Low | Keep | |
| bug | standard | Yellow | Issue tracking | Medium | Keep | |
| cleanup-queue | MotherTree | Green | Repo hygiene | Low | Keep | |
| closure-gate | closure | Yellow | Task/Issue closure | Medium | Keep | |
| cloud-over-cloud | tool-family | Yellow | Relay layer | Medium | Keep | |
| cloudtop | tool-family | Yellow | Relay layer | Medium | Keep | |
| co-chain-ecosystem | MotherTree | Yellow | Ecosystem governance | Medium | Keep | |
| codex | tool-family | Yellow | Codex node | Medium | Keep | |
| codex-review | closure | Yellow | Codex review hook | Medium | Keep | |
| commander-hardening | tool-family | Yellow | Commander node security | Medium | Keep | |
| commander-readiness | tool-family | Yellow | Commander node status | Medium | Keep | |
| commander-request | tool-family | Yellow | Commander dispatch | Medium | Keep | |
| commander-routing | tool-family | Yellow | Commander routing | Medium | Keep | |
| core-protection | MotherTree | Red | Core protection rules | High | Keep | |
| coretri | MotherTree | Yellow | CoreTri governance | Medium | Keep | |
| cross-window-feedback | return-chain | Green | Cross-window return | Low | Keep | |
| data-request | standard | Green | Information request | Low | Keep | |
| docs | standard | Green | Documentation | Low | Keep | |
| documentation | standard | Green | Documentation | Low | Merge_Candidate | Merge with 'docs' |
| duplicate | standard | Green | Issue hygiene | Low | Keep | |
| engineering-bridge | tool-family | Yellow | Technical bridge | Medium | Keep | |
| enhancement | standard | Green | Feature request | Low | Keep | |
| evidence-gate | closure | Yellow | Evidence verification | Medium | Keep | |
| expansion-layer | MotherTree | Yellow | Architecture expansion | Medium | Keep | |
| external-signal | tool-family | Green | External signal intake | Low | Keep | |
| feedback-intake | return-chain | Green | Feedback loop | Low | Keep | |
| feedback-integration | return-chain | Yellow | Feedback implementation | Medium | Keep | |
| field-generation | MotherTree | Yellow | Semantic field generation | Medium | Keep | |
| field-presence | MotherTree | Yellow | Semantic field tracking | Medium | Keep | |
| framework-first | MotherTree | Yellow | Framework priority | Medium | Keep | |
| gas | tool-family | Yellow | Google Apps Script bridge | Medium | Keep | |
| gemini | tool-family | Yellow | Gemini node | Medium | Keep | |
| gemma | tool-family | Yellow | Gemma node | Medium | Keep | |
| gm-layer | tool-family | Yellow | Gmail layer | Medium | Keep | |
| good first issue | standard | Green | Onboarding | Low | Keep | |
| help wanted | standard | Green | External assistance | Low | Keep | |
| idle-drill | standard | Green | Maintenance drill | Low | Keep | |
| invalid | standard | Green | Issue hygiene | Low | Keep | |
| json-delta | tool-family | Green | Data format | Low | Keep | |
| jules | tool-family | Yellow | Jules node | Medium | Keep | |
| jules-task | tool-family | Yellow | Jules execution | Medium | Keep | |
| learning-method | standard | Green | Methodology | Low | Keep | |
| legacy-pr-audit | closure | Yellow | Audit track | Medium | Keep | |
| legion-dispatch | tool-family | Yellow | Dispatch logic | Medium | Keep | |
| legion-log | return-chain | Green | Execution log | Low | Keep | |
| legion-readiness | tool-family | Yellow | Node status | Medium | Keep | |
| legion-training | tool-family | Yellow | Training/Tuning | Medium | Keep | |
| mainline-backfill | return-chain | Yellow | History reconciliation | Medium | Keep | |
| matrix-governance | MotherTree | Yellow | Matrix tracking | Medium | Keep | |
| maximo | tool-family | Yellow | Maximo bridge | Medium | Keep | |
| method-intake | MotherTree | Yellow | Process intake | Medium | Keep | |
| model-nutrient | tool-family | Green | Model input | Low | Keep | |
| mother-tree | MotherTree | Red | MotherTree core | High | Keep | |
| mothertree-review | closure | Red | MotherTree review gate | High | Keep | |
| nine-palace | MotherTree | Yellow | Structural mapping | Medium | Keep | |
| numeric-terrain | MotherTree | Yellow | Quantitative field | Medium | Keep | |
| output-chain | return-chain | Green | Result path | Low | Keep | |
| point-cloud | tool-family | Green | Data representation | Low | Keep | |
| pointcloud | tool-family | Green | Data representation | Low | Merge_Candidate | Merge with 'point-cloud' |
| pr-clearance | closure | Yellow | PR review status | Medium | Keep | |
| preflight-index | MotherTree | Green | Readiness check | Low | Keep | |
| program-master | MotherTree | Red | Master program rules | High | Keep | |
| protocol-hardening | MotherTree | Red | Protocol security | High | Keep | |
| qinyi | Qinyi | Red | Interface / Core | High | Keep | Red by default for deterministic filtering; interface-only content tasks may be downgraded to Yellow by MotherTree review. |
| question | standard | Green | Inquiry | Low | Keep | |
| r1-capture | closure | Green | Initial capture | Low | Keep | |
| radar | tool-family | Green | Signal detection | Low | Keep | |
| rapid-intake | return-chain | Yellow | Fast-track intake | Medium | Keep | |
| rebuild-packet | return-chain | Yellow | Packet reconstruction | Medium | Keep | |
| relay-layer | tool-family | Yellow | Relay infrastructure | Medium | Keep | |
| relay-mesh | tool-family | Yellow | Relay mesh | Medium | Keep | |
| repo-hygiene | standard | Green | Maintenance | Low | Keep | |
| responsibility-gate | closure | Yellow | Accountability gate | Medium | Keep | |
| return-handoff | return-chain | Yellow | Return path handoff | Medium | Keep | |
| return-relay | return-chain | Yellow | Return relay | Medium | Keep | |
| review-only | standard | Green | Pure review task | Low | Keep | |
| rq-01 | unknown | Green | Requirement 01 | Low | Keep | |
| rq-02 | unknown | Green | Requirement 02 | Low | Keep | |
| rq-03 | unknown | Green | Requirement 03 | Low | Keep | |
| rq-04 | unknown | Green | Requirement 04 | Low | Keep | |
| rq-05 | unknown | Green | Requirement 05 | Low | Keep | |
| rq-06 | unknown | Green | Requirement 06 | Low | Keep | |
| rq-07 | unknown | Green | Requirement 07 | Low | Keep | |
| rule-candidate | MotherTree | Yellow | Proposed rule | Medium | Keep | Yellow by default until approved |
| runtime-structure | MotherTree | Yellow | Runtime governance | Medium | Keep | |
| scout | tool-family | Green | Discovery node | Low | Keep | |
| scout-dispatch | tool-family | Yellow | Discovery dispatch | Medium | Keep | |
| sheets | tool-family | Yellow | Google Sheets bridge | Medium | Keep | |
| short-chain | return-chain | Green | Fast-track return | Low | Keep | |

---

## 3. Do_Not

- do not delete labels
- do not rename labels
- do not merge label families
- do not create traffic-light labels yet
- do not treat this file as approved doctrine

---

## 4. Mapping Boundary

- proposal / audit artifact only
- does not update the 13-gate structure
- does not replace closure-gate labels
- does not authorize label cleanup

---

## 5. Status

- mapping_status: PROPOSAL
- observed_count: 100
- complete_inventory: unknown
- generated_at: 2026-05-06
