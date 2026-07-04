# C037 Evidence｜Agent Mode Cost Expansion Risk

> To: Architecture Consolidation Window. Candidate architecture feedback for agent-mode cost and control logic. This is not a Codex execution request, not a settings update, not billing proof, and not Native Loop evidence.

---

## 0. Status

```yaml
Document_Status: Candidate
Use_As: XLA / Living Atlas input, C-037 evidence support
Runtime_State: No_Runtime
External_Writeback_State: No_External_Writeback
Approval_State: Not_Approved
Closeout_State: Not_Closeout
Source: Qinyi main window observation + Codex activity stats
```

---

## 1. One-Line Reading

目前 Codex 已在人控高密度模式下達到單日約 4249.3 萬 tokens、累計約 1.2 億 tokens；若轉成代理模式，token 消耗會從線性使用變成乘法擴張，因此 XuanLing 必須把 Agent Mode Cost Gate / Stop Condition / Retry Limit / Human Relay 納入跨模型治理底層。

---

## 2. Observation

```yaml
Observed_Activity:
  Cumulative_Tokens: "約 1.2 億"
  Peak_Day: "約 4249.3 萬"
  Current_Streak: "3 days"
  Longest_Streak: "14 days"
  Evidence_Type: "activity observability signal"
```

This is not precise billing proof, API-equivalent pricing proof, fixed refresh schedule proof, real-time token meter, or Native Loop evidence.

Can support:

- usage intensity observation
- token / cost valence reference
- agent-mode risk modeling
- high-activity workflow detection

---

## 3. Key Risk: Agent Mode Is Multiplicative

Human-controlled peak:

```text
4249.3 萬 tokens / day
```

If agent-like mode expands by 3x:

```text
約 1.27 億 tokens / day
```

If agent-like mode expands by 10x:

```text
約 4.25 億 tokens / day
```

Agent-mode expansion adds multiplicative factors:

```text
high context
× multi-step planning
× tool calls
× file search
× repo scanning
× artifact generation
× retry loops
× cross-model review
× trace / memory / snapshot replay
× background continuation
```

Human-controlled high-density use = virtual lab.
Unbounded agent-like mode = token chain reaction.

---

## 4. Architecture Learning

This supports C-031 Token Trial Recycling and XLA Workspace Agent Logic.

High token usage is acceptable only when it returns reusable structure:

- LOR templates
- Gate rules
- Return Packet schemas
- Artifact Verification criteria
- Cost Gate rules
- Stop Conditions
- Resume Cards
- Cross-Model Feedback Contract
- Codex workspace-agent calibration
- Local Habitat Health logic
- Company Pack vs Portable Core boundary

High token without structural return = burn.
High token with reusable governance output = Token Capital.

---

## 5. Candidate Addendum

Suggested candidate name:

```text
XLA_AGENT_MODE_COST_GATE_ADDENDUM_v0_1_CANDIDATE
```

Purpose:

Define how XuanLing handles token expansion risk when workspace agents, multi-model review, tool calls, repo tasks, M365 carriers, or long-running workflows become active.

---

## 6. Required Agent-Mode Controls

Minimum controls before agent-like expansion:

- daily token ceiling
- per-task token budget
- retry limit
- tool allowlist
- no web by default
- no writeback by default
- no external connector by default
- no long unattended run
- container / workspace session limit
- snapshot / memory filter
- artifact verification
- human review before escalation
- stop condition
- return packet
- resume card

Hard rule:

```text
No agent expansion without Cost Gate.
```

---

## 7. Relation To Current Mainline

Supports:

- C-031 Token Trial Recycling
- C-037 Verification / Acceptance Matrix
- XLA_WORKSPACE_AGENT_LOGIC_ADDENDUM_v0.1_CANDIDATE
- XUANLING_CROSS_MODEL_FEEDBACK_CONTRACT_v0.1_CANDIDATE
- C-025 Security / Runtime Boundary lineage
- C-019 Namespace Pollution Extraction

Suggested placement:

- C037-EVIDENCE｜Agent Mode Cost Expansion Risk
- XLA_INPUT｜Agent Mode Cost Gate Addendum Candidate

Do not open a new C-front unless later review requires independent tracking.

---

## 8. Cannot Use As

This feedback cannot be used as:

- billing proof
- pricing proof
- runtime proof
- Codex Native Loop proof
- multi-agent expansion approval
- permission to start background agents
- proof that token usage is safe
- proof that Codex is fully connected
- closeout claim

---

## 9. Final Judgment

```yaml
Agent_Mode_Token_Risk: Candidate_Go
Human_Controlled_Virtual_Lab: Go
Unbounded_Agent_Mode: No-Go
Cost_Gate_Required: Go
Native_Loop_Proof: No-Go
Runtime_Claim: No-Go
Billing_Proof: No-Go
```

---

## 10. Final Sentence

目前一天四千多萬 tokens 仍屬人控虛擬實驗室；一旦轉成代理模式，token 消耗會進入乘法擴張，因此 XuanLing 必須把 Cost Gate、Stop Condition、Retry Limit、Human Relay 與 Return Packet 作為 agent-mode 的硬底盤。
