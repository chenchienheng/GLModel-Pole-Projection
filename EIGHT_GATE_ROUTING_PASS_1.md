# Eight-Gate Routing Pass 1｜八門歸位初篩

> Purpose: classify current active cleanup fronts C-012 through C-026 by primary gate, secondary gate, current state, and next action.

---

## 0. Status

- pass_version: v0.1
- status: Candidate / Routing Pass Draft
- source_spec: `EIGHT_GATE_ROTATION_AXIS_CONSOLIDATION.md`
- related_pr: `#270`
- closeout: false
- return_to_00: true

---

## 1. One-Line Reading

This pass turns the eight-gate model into a working routing table: every active cleanup front must have a primary gate, secondary gate, current status, and next action.

---

## 2. Gate Legend

| Gate | Name | Short Role |
|---|---|---|
| G1 | Source Anchor Gate | human origin, direction, review |
| G2 | Intake & Source Gate | source, evidence, temporal intake |
| G3 | Naming & Boundary Gate | namespace, layer, exposure, status |
| G4 | Authority & Dispatch Gate | permission, XAFD, review, red gate |
| G5 | Habitat & Carrier Gate | local/cloud/repo/tool/runtime carrier |
| G6 | Production & Route Gate | artifact route, output path, use case |
| G7 | Return & Recycle Gate | LOR, token capital, skill recycle |
| G8 | Atlas & Closeout Gate | XLA, register, archive, closeout boundary |

---

## 3. Routing Table｜C-012 through C-026

| ID | Human-Readable Name | Primary Gate | Secondary Gate | Current State | Next Action |
|---|---|---|---|---|---|
| C-012 | Whole-Corpus Filtering | G8 Atlas & Closeout | G3 Naming & Boundary | active | assign each current file keep/update/merge/archive/retire |
| C-013 | Register Reconciliation | G8 Atlas & Closeout | G2 Intake & Source | active | align corpus index, role table, and artifact register |
| C-014 | Status Terminology Normalization | G3 Naming & Boundary | G8 Atlas & Closeout | active | enforce Candidate/Approved/Runtime/Closeout distinction |
| C-015 | Runtime Wording Clarification | G4 Authority & Dispatch | G5 Habitat & Carrier | active | keep semantic-runtime distinct from deployed executable runtime |
| C-016 | Non-Linear Topology Correction | G3 Naming & Boundary | G8 Atlas & Closeout | active | prevent 1/12/64 from becoming linear ladder |
| C-017 | Ecosystem Topology Sphere Alignment | G5 Habitat & Carrier | G3 Naming & Boundary | active | bind ecosystem nodes by role, dependency, authority, return |
| C-018 | Persistent Agent Habitat | G5 Habitat & Carrier | G4 Authority & Dispatch | active | connect habitat grammar to adapter/security/runtime boundaries |
| C-019 | Namespace Pollution Extraction | G3 Naming & Boundary | G4 Authority & Dispatch | active | integrate registry, pollution rules, public/private boundary |
| C-019-P0 | Human Origin Source Anchor | G1 Source Anchor | G8 Atlas & Closeout | added / needs cross-linking | link Human Origin to namespace registry and pollution rules |
| C-020 | Active Task Readability | G8 Atlas & Closeout | G3 Naming & Boundary | active | keep human-readable task names beside governance codes |
| C-021 | Governance Security Spine | G4 Authority & Dispatch | G5 Habitat & Carrier | active | cross-link security layer to adapters, runtime red gates, evidence rules |
| C-022 | Temporal State Sequence | G2 Intake & Source | G8 Atlas & Closeout | active | link temporal event schema to artifact records and return packets |
| C-023 | Token Capital / Private Learning Loop | G7 Return & Recycle | G8 Atlas & Closeout | active candidate | connect token capital to cost/model-routing and XLA learning loop |
| C-024 | Codex Presentation Skill Loop | G6 Production & Route | G5 Habitat & Carrier | active candidate | connect local project habitat workflow to skill recycle and artifact safety |
| C-025 | Architecture Window v0.9 | G8 Atlas & Closeout | G1 Source Anchor | active consolidation window | cross-link to active modules and PR #270 return packet |
| C-026 | Eight-Gate Consolidation | G8 Atlas & Closeout | G3 Naming & Boundary | active P0 consolidation axis | use this pass to prepare whole-corpus filtering |

---

## 4. Findings

### 4.1 G8 is overloaded

Many current tasks route into G8 because the branch is in consolidation mode.

Implication:

```text
Atlas / Closeout is currently the busiest gate, but this does not mean those items are closeout-ready.
```

Required control:

```text
Return Packet ≠ Closeout.
```

### 4.2 G3 and G4 are the main anti-pollution pair

Naming and authority are repeatedly coupled:

- wrong name can create wrong authority
- wrong authority can promote wrong name
- public/private boundary depends on both

### 4.3 G5 is the carrier-risk gate

Agent habitat, external nodes, adapters, and Codex local folder workflows all converge on G5.

This means habitat, carrier, credential, and rollback boundaries must stay explicit.

### 4.4 G7 is underdeveloped but strategic

Token capital and skill recycle belong to G7.

This gate should be expanded later because it determines whether usage becomes capability or remains cost.

---

## 5. Immediate Next Actions

```yaml
Immediate_Next_Actions:
  first:
    id: C-012
    action: run whole-corpus filtering pass using eight-gate primary/secondary gate assignment
  second:
    id: C-013
    action: reconcile registers after C-012 classifications exist
  third:
    id: C-025
    action: keep architecture window v0.9 as current readable mainline
  hold:
    id: Jules_daily_cleanup
    reason: do not start daily cleanup until gate routing is stable
```

---

## 6. Non-Promotion Rules

Do not promote:

| From | To |
|---|---|
| gate assignment | approval |
| primary gate | ownership |
| active candidate | closeout |
| cross-linking | completion |
| routing pass | merge readiness |
| overloaded gate | priority proof |

---

## 7. Judgment

```yaml
Routing_Pass_1:
  status: Go
  coverage: C-012_through_C-026
  strongest_gates: G8_G3_G4_G5
  weakest_current_gate: G7_needs_later_expansion
  ready_for_C012: true
  closeout: false
```

---

## 8. Closing Sentence

The eight gates are now usable as routing infrastructure: current tasks can be assigned, filtered, and returned by gate instead of remaining as an expanding list.
