# XLA / Codex Cost Risk Note｜API-Equivalent Token Chain Reaction Model v0.1 Candidate

> Candidate API-equivalent cost risk model for XLA / Codex governance. This is not billing proof, not runtime proof, not Native Loop proof, and not external writeback evidence.

---

## 0. Status

```yaml
Document_Status: Candidate
Use_As:
  - Agent Mode Cost Gate support
  - Token Capital risk model
  - XLA / Living Atlas input
  - C037 evidence support
Billing_Proof: No
Native_Loop_Proof: No
Runtime_Proof: No
External_Writeback: No
Approval_State: Not_Approved
Deployment_State: Not_Deployed
Evidence_Level:
  - User_Observed_Activity_Card
  - Official_API_Pricing_Check
  - API_Equivalent_Model_Inference
```

---

## 1. One-Line Reading

The high token usage shown in the activity card can only be treated as an Activity Observability Signal, not billing proof. But if equivalent density moved into API, autonomous agent, tool loop, or container runtime, cost could shift from subscription-contained high-density use into usage-based token, tool, container, and retry-loop multiplication risk.

---

## 2. Official Boundary

OpenAI API pricing and ChatGPT subscription billing are separate. Therefore, current ChatGPT / Codex activity-card tokens cannot be directly converted into the user's actual bill.

This model estimates API-equivalent risk only.

Official pricing source checked:

```yaml
Pricing_Source:
  Provider: OpenAI
  Page: API Pricing
  Checked_For:
    - GPT-5.5 input / output token pricing
    - Web search tool pricing
    - Container pricing display
  Status: Source_Checked
```

---

## 3. Observed Activity

| Metric | Value |
|---|---:|
| Cumulative tokens | 約 1.7 億 |
| Peak day | 約 6991.6 萬 |
| Current streak | 3 days |
| Longest streak | 14 days |

Evidence level:

- Direct Material: user-provided screenshot / pasted stats
- Model Inference: API-equivalent cost modeling
- Not billing proof
- Not runtime proof

---

## 4. API-Equivalent Token Cost Estimate

GPT-5.5 standard API pricing checked:

```yaml
GPT_5_5_API_Pricing:
  Input: "$5.00 / 1M tokens"
  Cached_Input: "$0.50 / 1M tokens"
  Output: "$30.00 / 1M tokens"
```

This estimate ignores cached input, batching, data residency adjustments, discounts, and tool/runtime costs unless separately modeled.

### 4.1 If 1.7 億 tokens became API usage

| Input / Output assumption | Blended price / 1M | Estimated cost |
|---|---:|---:|
| 90% input / 10% output | $7.50 | 約 $1,275 |
| 80% input / 20% output | $10.00 | 約 $1,700 |
| 50% input / 50% output | $17.50 | 約 $2,975 |

### 4.2 If peak day 6991.6 萬 tokens/day ran for 30 days

Monthly tokens: 約 20.97 億

| Input / Output assumption | Estimated monthly cost |
|---|---:|
| 90% input / 10% output | 約 $15,731 |
| 80% input / 20% output | 約 $20,975 |
| 50% input / 50% output | 約 $36,706 |

---

## 5. Tool / Runtime Amplifiers

Token cost is only one layer. Agent runtime can add:

| Amplifier | Risk |
|---|---|
| Web search | tool-call cost plus retrieved-context handling |
| Containers | per-container or per-session container cost |
| File search | storage, retrieval, and context expansion cost |
| Multiple agents | token and tool costs multiply |
| Retry loops | failure cost compounds |
| Long context replay | every retry can reburn context |
| Background continuation | cost may continue outside immediate attention |
| Cross-model review | each model can add another token plane |

Official OpenAI pricing page currently exposes web search pricing and a container pricing display. It shows 1GB and 64GB container price points. Do not present 4GB, 8GB, or 16GB container tiers as official unless separately verified.

---

## 6. Why The Current Mode Is Safer

Current mode:

```text
Human Relay + Tool Boundary
```

This means:

- no API runtime by default
- no MCP / OAuth scope expansion
- no automatic external writeback
- no background agent loop
- Human Origin remains between Source / Permission / Authority
- Codex receives LOR / Gate / Cost Gate before work
- results return through Return Packet / Resume Card

This is slower than direct automation, but safer because capability is downgraded into Candidate action before becoming real execution.

---

## 7. Core Governance Rule

```text
Activity Dashboard != Cost Gate
Visible Token Count != Real-Time Meter
Subscription Access != API Billing
Quota Available != Task Approved
Reset Window != Permission Window
Tool Available != Authority
Agent Can Continue != Agent Should Continue
```

---

## 8. Agent-Mode Cost Gate Required

Before any API / agent-runtime / tool-loop expansion:

```yaml
Cost_Gate:
  Mode: Required
  Per_Task_Budget:
  Daily_Ceiling:
  Retry_Limit:
  Tool_Allowlist:
  Web: No by default
  Container: No by default
  Writeback: No by default
  Background_Run: No by default
  Multi_Agent: No without explicit LOR
  Multi_Branch: No without explicit LOR
  Stop_Condition:
  Human_Review_Before_Escalation: true
  Return_Packet_Required: true
  Resume_Card_When_Parked: true
```

---

## 9. Architecture Interpretation

This case supports:

- Human-Controlled Virtual Agent Lab
- Token Capital concept
- Cost Gate necessity
- Human Relay + Tool Boundary as safety layer
- Codex as workspace support-cell
- Six-Face Round Check
- Evidence_Level discipline

This case does not support:

- billing proof
- runtime proof
- Native Loop proof
- API / MCP / OAuth deployment proof
- external writeback proof
- autonomous agent approval
- safe-to-run signal

---

## 10. Final Judgment

```yaml
API_Equivalent_Cost_Risk: Candidate_Go
Actual_Billing_Proof: No-Go
Subscription_To_API_Cost_Conversion: No-Go
GPT_5_5_Pricing_Checked: Yes
Tool_Runtime_Amplifier_Risk: Go
Cost_Gate_Required: Go
Unbounded_Agent_Mode: No-Go
Token_Capital: Candidate_Only
```

---

## 11. Final Sentence

If equivalent density moved into API / agent runtime / tool loop, costs could move from thousands of dollars into tens of thousands of dollars, and multi-agent retry behavior could trigger token chain reaction. The current Human Relay + Tool Boundary mode is slower, but it keeps Source, Permission, Authority, Cost Gate, Stop Condition, and Return Packet between model capability and real execution.
