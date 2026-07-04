# Eight-Gate / Eight-Rotation-Axis Consolidation｜八門八轉軸收斂

> Purpose: condense the current XuanLing restructuring branch into eight governable main lines so scattered tasks can be routed, reviewed, and returned without losing boundary.

---

## 0. Status

- spec_version: v0.1
- status: Candidate / P0 Consolidation Draft
- related_pr: `#270`
- closeout: false
- runtime_status: no_runtime
- action_status: no_external_action
- return_to_00: true

---

## 1. One-Line Reading

The eight gates are not a ranking system. They are eight rotation axes that let XuanLing decide where an input belongs, how it transforms, what boundary it must respect, and how it returns as next-round capability.

---

## 2. Why This Exists

The current branch already contains many valid modules:

- ecosystem topology sphere
- persistent agent habitat
- namespace pollution extraction
- human origin layer
- governance security spine
- temporal state sequence
- token capital learning loop
- Codex local skill loop
- architecture window v0.9

Without a higher condensation layer, these modules can become another pile.

This file reduces them into eight routing gates.

---

## 3. The Eight Gates

| Gate | Name | Core Question | Rotation Axis | Main Risk Prevented |
|---|---|---|---|---|
| G1 | Source Anchor Gate | Who gives direction and review? | Human Origin / sovereignty axis | User becomes node or managed resource |
| G2 | Intake & Source Gate | What entered, from where, and with what evidence? | Source / evidence axis | input becomes fact too early |
| G3 | Naming & Boundary Gate | What is this thing called and what layer is it in? | namespace / ontology axis | names steal each other's roles |
| G4 | Authority & Dispatch Gate | Who may route it, approve it, or downgrade it? | XAFD / permission axis | text becomes command or permission |
| G5 | Habitat & Carrier Gate | Where can it work safely? | local / runtime / carrier axis | agent or tool runs without habitat |
| G6 | Production & Route Gate | What output path fits the use case? | artifact / route-choice axis | output is generated before anchor or route fit |
| G7 | Return & Recycle Gate | How does the result come back as capability? | LOR / token-capital axis | effort remains cost instead of capital |
| G8 | Atlas & Closeout Gate | What becomes long-term atlas state, and what remains candidate? | XLA / closeout axis | return packet becomes closeout |

---

## 4. Gate Details

### G1｜Source Anchor Gate

Core:

```text
User ≠ Node.
```

Checks:

- Is the human origin / source anchor visible?
- Is the direction given by the user, or inferred by a tool?
- Is review authority preserved?
- Is the user being reduced to a data source or node?

Related files:

- `HUMAN_ORIGIN_LAYER.md`
- `NAMING_POLLUTION_RULES_HUMAN_ORIGIN_ADDENDUM.md`

### G2｜Intake & Source Gate

Core:

```text
Input is not fact until source, view, evidence, and status are separated.
```

Checks:

- What entered?
- Where did it come from?
- Is it source, view, evidence, model output, or social signal?
- Is its status verified, reported, pending, or candidate?

Related files:

- `SECURITY_FINDINGS_REGISTER.md`
- `TEMPORAL_STATE_SEQUENCE_SPEC.md`
- `CANONICAL_STATUS_GLOSSARY.md`

### G3｜Naming & Boundary Gate

Core:

```text
Every name must have layer, purpose, forbidden misuse, and status.
```

Checks:

- Is it body, interface, protocol, process, document, case, valence, person, or historical shell?
- Can it be public?
- Does it imply runtime or approval?
- Does it expose private boundary?

Related files:

- `NAMESPACE_REGISTRY.md`
- `NAMING_POLLUTION_RULES.md`
- `C019_NAMESPACE_POLLUTION_STATUS.md`

### G4｜Authority & Dispatch Gate

Core:

```text
Routing is not approval.
```

Checks:

- Who may route this?
- Does the task need Go, Conditional Pass, Return, Downgrade, or No-Go?
- Is XAFD being mistaken for API or external writeback?
- Is a PR, issue, or comment being treated as instruction authority?

Related files:

- `AGENT_INSTRUCTION_INTEGRITY_SPEC.md`
- `SECURITY_THREAT_MODEL.md`
- `GATE_64_BINDING_NOTE.md`

### G5｜Habitat & Carrier Gate

Core:

```text
Agent work needs habitat.
```

Checks:

- Is the work local, cloud, repo, folder, adapter, or runtime-bound?
- Is the carrier safe for the task?
- Are credentials, network, tools, and rollback bounded?
- Is the tool being treated as a sovereign center?

Related files:

- `MODULE_14_PERSISTENT_AGENT_HABITAT.md`
- `ADAPTER_SECURITY_BASELINE.md`
- `EXTERNAL_NODE_ONCHAIN_SPEC.md`

### G6｜Production & Route Gate

Core:

```text
Output route follows use case, not visual impulse.
```

Checks:

- Is the task conversation, document, deck, code, artifact, public release, or internal review?
- Does it need editable output or final visual output?
- Has outline been confirmed before production?
- Is one successful run being promoted into a permanent skill?

Related files:

- `MODULE_16_CODEX_PRESENTATION_SKILL_LOOP.md`
- `C024_CODEX_PRESENTATION_SKILL_LOOP_STATUS.md`

### G7｜Return & Recycle Gate

Core:

```text
Work that does not return remains cost.
```

Checks:

- What did the task produce?
- Does it become memory, judgment, workflow, case, rule, or next-round ability?
- Is token use being capitalized or merely consumed?
- Does LOR close the loop: Local, Own, Recycle?

Related files:

- `MODULE_15_TOKEN_CAPITAL_PRIVATE_LEARNING_LOOP.md`
- `C023_TOKEN_CAPITAL_STATUS.md`
- `TEMPORAL_STATE_SEQUENCE_SPEC.md`

### G8｜Atlas & Closeout Gate

Core:

```text
Return Packet ≠ Closeout.
```

Checks:

- What enters XLA as long-term atlas state?
- What remains candidate?
- What needs archive, review, or split PR?
- Has human review accepted the result?
- Is closeout being claimed too early?

Related files:

- `XUANLING_ARCHITECTURE_WINDOW_v0_9.md`
- `ACTIVE_RESTRUCTURING_TASK_MAP.md`
- `C025_ARCHITECTURE_WINDOW_V0_9_STATUS.md`

---

## 5. Eight-Gate Routing Record

Every major task can be reduced into this structure:

```yaml
Eight_Gate_Routing_Record:
  task_name:
  source_anchor:
  G1_source_anchor:
  G2_intake_source:
  G3_naming_boundary:
  G4_authority_dispatch:
  G5_habitat_carrier:
  G6_production_route:
  G7_return_recycle:
  G8_atlas_closeout:
  current_status:
  next_action:
  return_target:
```

---

## 6. Condensing 200+ Tasks

A task should not remain in the queue as a loose item.

It should be assigned to one primary gate and one secondary gate:

```yaml
Task_Condensation:
  task_id:
  human_readable_name:
  primary_gate:
  secondary_gate:
  status:
  reason:
  next_action:
```

Example:

```yaml
Task_Condensation:
  task_id: C-024
  human_readable_name: Codex Presentation Skill Loop
  primary_gate: G6_Production_Route
  secondary_gate: G5_Habitat_Carrier
  status: active_candidate
  reason: local artifact production requires folder habitat, outline confirmation, route choice, and skill recycle
  next_action: cross-link to LOA and future skill card registry
```

---

## 7. Current Module Mapping

| Current Item | Primary Gate | Secondary Gate |
|---|---|---|
| Human Origin Layer | G1 | G8 |
| Namespace Registry / Pollution Rules | G3 | G4 |
| Governance Security Spine | G4 | G5 |
| Temporal State Sequence | G2 | G8 |
| Persistent Agent Habitat | G5 | G4 |
| Token Capital / Private Learning Loop | G7 | G8 |
| Codex Presentation Skill Loop | G6 | G5 |
| Architecture Window v0.9 | G8 | G1 |
| Ecosystem Topology Sphere | G5 | G3 |
| Whole-Corpus Filtering | G8 | G3 |

---

## 8. Non-Promotion Rules

Do not promote:

| From | To |
|---|---|
| gate routing | approval |
| source intake | fact |
| name assignment | doctrine |
| dispatch | execution permission |
| habitat candidate | active runtime |
| output | reviewed artifact |
| token use | token capital |
| return packet | closeout |
| architecture window | approved system |

---

## 9. Next Action

P0 next action:

```text
Use this eight-gate structure to classify current C-012 through C-025 and then run Whole-Corpus Filter Pass 1.
```

Do not start daily cleanup until the eight-gate routing map is stable.

---

## 10. Closing Sentence

The eight gates do not make XuanLing larger. They make it governable: every input must pass through source, boundary, authority, habitat, production, return, and atlas review before it can become long-term capability.
