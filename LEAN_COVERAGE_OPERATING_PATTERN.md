# Lean Coverage Operating Pattern｜低耗高覆蓋運行模式

> Purpose: define a XuanLing operating pattern that reduces token, tool, and agent cost while preserving coverage, feasibility, flexibility, and stability.

---

## 0. Status

- pattern_version: v0.1
- status: Candidate / Lean Governance Pattern
- related_pr: `#270`
- primary_gate: G7 Return & Recycle
- secondary_gate: G8 Atlas & Closeout
- support_gates: G2 Intake & Source, G3 Naming & Boundary, G4 Authority & Dispatch, G5 Habitat & Carrier
- runtime_status: no_runtime
- action_status: no_external_action
- closeout: false
- return_to_00: true

---

## 1. One-Line Reading

Efficiency does not come from doing less. It comes from routing before reading, reading deltas before full context, using registers before raw recall, and recycling every useful output into next-round capability.

---

## 2. Why This Is Different

Common AI expansion pattern:

```text
more model power
→ more context
→ more agents
→ more tools
→ more retries
→ more cost
```

Lean coverage pattern:

```text
gate first
→ index first
→ delta first
→ source on demand
→ bounded tool use
→ human review at escalation
→ artifact recycle
→ next round costs less
```

The goal is not maximum autonomy.
The goal is maximum governed coverage per unit of context, tool call, and human review.

---

## 3. Core Principles

### P1｜Route Before Read

Do not read everything first.

First classify by gate:

- G1 source anchor
- G2 intake/source
- G3 naming/boundary
- G4 authority/dispatch
- G5 habitat/carrier
- G6 production/route
- G7 return/recycle
- G8 atlas/closeout

Then read only the files needed for the gate.

### P2｜Index Before Context

Use registers before raw context.

Preferred order:

```text
current_files.txt
→ UNIFIED_ARTIFACT_REGISTER.md
→ REPOSITORY_CORPUS_INDEX.md
→ ROLE_CLASSIFICATION_TABLE.md
→ target file
```

### P3｜Delta Before Full Reload

Prefer changed-state reading over full rereads.

Use:

- current inventory
- compare result
- status note
- pass file
- artifact register row

before re-reading whole families.

### P4｜Status Before Action

Every task should expose:

```yaml
Task_State:
  status:
  gate:
  handling_decision:
  next_action:
  no_go_condition:
  return_target:
```

No task should jump from idea to execution without status.

### P5｜Small Scope Before Agent Expansion

Do not use group expansion when a bounded human-guided pass can solve the routing problem.

Use multi-agent only after:

- token budget
- retry limit
- tool allowlist
- context recycle
- human review gate
- cost audit
- controlled small-scope test

### P6｜Recycle Or It Was Burn

A result must return into at least one reusable surface:

- register
- status note
- architecture window
- skill card
- SOP
- case module
- atlas entry
- risk note
- finding

If it does not return, it remains cost.

---

## 4. Operating Loop

```text
1. Receive input
2. Assign primary / secondary gate
3. Check current register state
4. Read only needed evidence
5. Decide handling: keep / update / merge / split / rebind / archive / hold_candidate
6. Produce minimum useful artifact
7. Update register / status / return path
8. Stop before uncontrolled expansion
```

---

## 5. Efficiency Mechanisms

| Mechanism | What It Saves | What It Preserves |
|---|---|---|
| Gate routing | unnecessary context | correct boundary |
| Inventory refresh | repeated discovery | coverage |
| Artifact register | raw memory search | continuity |
| Delta reading | full rereads | freshness |
| Status glossary | semantic drift | decision quality |
| No-Go risk gate | runaway agents | cost stability |
| Skill recycle | repeated prompting | future speed |
| Archive not delete | confusion | historical trace |

---

## 6. Flexibility / Stability Pairing

| Flexibility Need | Stability Control |
|---|---|
| new external article | G2 intake + source boundary |
| new tool / platform | G5 habitat + carrier gate |
| new name / metaphor | G3 namespace boundary |
| new workflow | G6 route choice + human confirm |
| high token use | G7 token capital + C-027 No-Go gate |
| new architecture insight | G8 atlas + not-closeout state |
| private/living context | G1 source anchor + public boundary |

Flexibility without stability becomes drift.
Stability without flexibility becomes dead doctrine.

---

## 7. Coverage Without Swarm

The system can cover more without spawning agents by using:

- current inventory
- gate routing
- artifact register
- status notes
- pass files
- addenda instead of full rewrites
- small cross-links
- stop conditions

This is why XuanLing can become broader without immediately becoming heavier.

---

## 8. Relation To Current C-012 through C-028

| Current Front | Lean Coverage Role |
|---|---|
| C-012 Whole-Corpus Filter | classify before rewriting |
| C-013 Register Reconciliation | register before recall |
| C-014 Status Propagation | status before action |
| C-019 Namespace Pollution | names before authority |
| C-021 Security Spine | authority before execution |
| C-022 Temporal Sequence | time before same-state claims |
| C-023 Token Capital | recycle before burn |
| C-024 Codex Skill Loop | route before artifact |
| C-025 Architecture Window | mainline before expansion |
| C-026 Eight-Gate Routing | gate before task spread |
| C-027 Token / Agent Risk | No-Go before swarm |
| C-028 LingLuo Rebinding | historical mesh without new center |

---

## 9. Non-Promotion Rules

Do not promote:

| From | To |
|---|---|
| low-cost pattern | reduced review need |
| gate routing | automatic execution |
| register | approved doctrine |
| coverage | certainty |
| efficiency | shortcut around evidence |
| no-go gate | permanent prohibition |
| archive | deletion |
| flexibility | unbounded scope |
| stability | frozen doctrine |

---

## 10. Closing Sentence

The efficient path is not smaller intelligence; it is lower-waste intelligence: route first, read less, decide clearer, recycle harder, and stop before expansion becomes burn.
