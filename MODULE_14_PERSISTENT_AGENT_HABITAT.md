# Module 14｜Persistent Agent Habitat

> 持久代理棲地模組
>
> This module records the architectural lesson from OpenAI's planned acquisition of Ona and aligns it with the XuanLing / XLEN runtime direction.

---

## 0. Status

- module_id: M14
- module_name: Persistent Agent Habitat
- status: candidate_architecture_module
- fact_status: OpenAI/Ona line externally verified; NVIDIA Hermes / NemoClaw related line remains related-candidate unless separately sourced
- return_to_00: true

---

## 1. One-Line Reading

Agent 的下一階段不是更會回答，而是有自己的安全工作棲地，能在受控環境裡長時間執行、保存狀態、回報證據，並接受人類審核。

---

## 2. Verified External Signal｜OpenAI × Ona

Current verifiable signal:

- OpenAI announced on 2026-06-11 that it will acquire Ona.
- OpenAI says Ona brings secure cloud execution and orchestration technology into the Codex ecosystem.
- OpenAI describes Codex work as increasingly unfolding over hours or days rather than minutes.
- OpenAI states Ona provides secure, persistent environments where agents can access tools, systems, and context over time.
- The transaction remains subject to customary closing conditions and required regulatory approvals.
- Until closing, OpenAI and Ona remain separate and independent companies.

Primary sources:

- OpenAI: `OpenAI to acquire Ona`, 2026-06-11.
- Ona: `Ona is joining OpenAI`, 2026-06-11.

---

## 3. Core Extraction

The key extraction is not simply:

```text
Codex becomes stronger.
```

The structural extraction is:

```text
Long-running agents need a habitat.
```

A coding assistant can answer inside a conversation.
A working agent needs a place to live while doing work.

That place must support:

- tools
- permissions
- credentials
- context
- state
- tests
- logs
- review
- continuation across time

---

## 4. Habitat Stack

```yaml
Persistent_Agent_Habitat_Stack:
  model:
    role: reasoning / planning / generation
  tools:
    role: operation surfaces
  permissions:
    role: bounded access
  context:
    role: task memory and local situation
  state:
    role: persistent task progress
  test:
    role: validation and failure discovery
  long_running_workflow:
    role: multi-hour or multi-day execution
  review:
    role: human return and approval gate
```

Agent evolution path:

```text
chat assistant → task assistant → bounded agent → persistent habitat agent → review-return work unit
```

---

## 5. XuanLing Valence Additions

### 5.1 Habitat Valence｜棲地價鍵

Question:

```text
Where does the agent work?
```

Possible carriers:

- local machine
- cloud environment
- container
- sandbox
- VM
- enterprise cloud
- repository-bound execution environment

### 5.2 Persistence Valence｜持久價鍵

Question:

```text
Can the agent continue across hours, days, or sessions?
```

It must define:

- session survival
- interruption recovery
- resumable task state
- handoff packet

### 5.3 Context Continuity｜脈絡連續價鍵

Question:

```text
How is context preserved when the conversation or environment changes?
```

It must define:

- task state storage
- test result retention
- error history
- diff history
- next-round reconstruction

### 5.4 Review Return｜審核回流價鍵

Question:

```text
How does completed work return to human review?
```

It must return:

- logs
- tests
- diffs
- decision trace
- mismatch / gap
- next action
- rollback path

---

## 6. Relation to NVIDIA Hermes / NemoClaw Line

Related candidate line:

```text
sandbox + credential broker + policy-as-code + trace + snapshot / restore
```

This line is directionally related to Persistent Agent Habitat because both point to the same landing layer:

```text
Agent cannot run naked.
Agent needs a controllable place to work.
```

Claim boundary:

- This module does not independently verify the NVIDIA Hermes / NemoClaw article.
- It only records that the conceptual line is compatible with Module 14.
- Separate fact checking is required before promoting that line to verified external evidence.

---

## 7. XuanLing Implementation Reading

For XuanLing, Persistent Agent Habitat means:

```text
Do not require the human designer to learn every deployment detail first.
Instead, absorb external runtime, cloud habitat, skill, policy, trace, and review patterns into XuanLing's own controllable habitat grammar.
```

The habitat grammar must include:

- source boundary
- tool boundary
- permission boundary
- state boundary
- evidence boundary
- review boundary
- rollback boundary

---

## 8. Non-Promotion Rules

Do not promote the following:

- planned acquisition → completed acquisition
- persistent environment → autonomous sovereignty
- long-running agent → unchecked execution
- tool access → permission to act
- finished task → approved result
- logs / tests / diffs → human decision
- public article → verified implementation inside XuanLing

---

## 9. Integration Targets

This module should be linked with:

- `EXTERNAL_NODE_ONCHAIN_SPEC.md`
- `ECOSYSTEM_TOPOLOGY_SPHERE_ALIGNMENT_ADDENDUM.md`
- `MODEL_INVOCATION_CONTRACT.md`
- `ARTIFACT_RECORD_SCHEMA.md`
- `CANONICAL_STATUS_GLOSSARY.md`
- `CLEANUP_QUEUE_REGISTER.md`
- `JULES_TASKBOARD.md`

---

## 10. Go / Conditional Pass

```yaml
Module_14_Judgment:
  OpenAI_Ona_Mainline: Go
  Social_Post_Details: Conditional_Pass
  NVIDIA_Hermes_NemoClaw_Line: Related_Candidate
  XuanLing_Valence_Addition: Go
  Runtime_Claim: Pending
```

---

## 11. Closing Sentence

Persistent Agent Habitat is the landing layer where models, tools, permissions, context, state, tests, long-running workflows, and human review become one controllable work unit.
