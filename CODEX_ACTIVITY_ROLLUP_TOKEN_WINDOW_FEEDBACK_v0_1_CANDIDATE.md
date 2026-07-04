# Codex Activity Rollup Observability Note v0.1 Candidate

> Candidate observability feedback for the Qinyi-Codex Collaboration Window. This is not a Codex task request, not a settings update, not billing proof, not proof of a fixed official activity-card refresh rule, and not Native Loop evidence.

---

## 0. Status

```yaml
Document_Status: Candidate
Use_As:
  - Codex workspace-agent observability feedback
  - Cost Gate support material
  - Qinyi-Codex collaboration window guardrail note
Runtime_State: No_Runtime
External_Writeback_State: No_External_Writeback
Settings_Update: No
Billing_Proof: No
Native_Loop_Proof: No
Closeout_State: Not_Closeout
Evidence_Level:
  - User_Observed_Activity_Card
  - Official_Docs_Boundary_Check
  - Model_Inference_For_Rollup_Hypothesis
```

---

## 1. Core Sentence

Codex activity stats appear to roll up in visible jumps rather than smooth real-time increments. This may correlate with usage-window aggregation, but it is not official proof of a fixed activity-card refresh rule. Activity dashboard observability must not replace Cost Gate, Stop Condition, Retry Limit, Human Review, or Return Packet.

---

## 2. Observed Stats

```yaml
Observed_Stats:
  Evidence_Level: Direct_Material_from_user_screenshot_or_user_report
  Latest:
    Cumulative_Tokens: "約 1.7 億"
    Peak_Day: "約 6991.6 萬"
    Current_Streak: "3 days"
    Longest_Streak: "14 days"
  Previous:
    Cumulative_Tokens: "約 1.2 億"
    Peak_Day: "約 4249.3 萬"
    Current_Streak: "3 days"
    Longest_Streak: "14 days"
  Delta:
    Cumulative_Increase: "約 5000 萬 tokens"
    Peak_Day_Increase: "約 2742.3 萬 tokens"
```

Interpretation: this looks like delayed rollup / window aggregation, not pure real-time display.

---

## 3. Official Boundary

```yaml
Official_Boundary:
  Evidence_Level: Official_Docs_Check_Plus_Model_Interpretation
  Can_Say:
    - "OpenAI Codex docs expose usage limits and usage surfaces."
    - "OpenAI Codex changelog referenced a 5-hour usage limit in a model-switching suggestion context."
    - "OpenAI Help says larger codebases, long-running tasks, or extended sessions that hold more context use significantly more per message."
    - "OpenAI Help says usage limits vary by plan and users should check the Codex usage page or limit banner when nearing or reaching limits."
  Cannot_Say:
    - "Activity card officially refreshes every 5 hours."
    - "Activity card is a real-time token meter."
    - "Activity card is billing proof."
    - "Weekly reset and token heatmap share the same exact backend counter."
    - "Quota reset means task approval."
  Not_Verified_This_Pass:
    - "official recursive / fan-out wording for this exact dashboard behavior"
```

---

## 4. Candidate Hypothesis

```yaml
Candidate_Hypothesis:
  Evidence_Level: Model_Inference
  Hypothesis: >
    The visible activity card may be delayed or window-aggregated, causing large jumps after a rollup.
    This could coexist with short usage windows and weekly / plan-level usage limits,
    but the exact refresh logic is not confirmed.
```

---

## 5. Guardrail Update

Candidate rules:

```text
Activity Dashboard ≠ Cost Gate
Visible Token Count ≠ Real-time Meter
Reset Window ≠ Permission Window
Weekly Reset ≠ Safe-to-Run Signal
Quota Available ≠ Task Approved
Token Jump ≠ Billing Proof
High Activity ≠ Native Loop Proof
```

Meaning:

Even if quota appears to reset, Codex still needs LOR / Gate / Cost Gate before action.

---

## 6. Agent Mode Risk

```yaml
Agent_Mode_Risk:
  Evidence_Level: Direct_Material_Plus_Model_Inference
  Peak_Day_Current: "約 6991.6 萬 tokens"
  Multiplication_Risk:
    2x: "約 1.4 億 tokens/day"
    3x: "約 2.1 億 tokens/day"
    10x: "約 7 億 tokens/day"
  Judgment:
    Human_Controlled_High_Density: "Virtual Lab / Watch"
    Unbounded_Agent_Mode: "No-Go"
    Agent_Mode_Watch: "Yellow"
```

This supports the prior warning:

```text
Human-controlled high-density use = virtual lab.
Unbounded agent mode = token chain reaction.
```

---

## 7. Required Controls

- Per-task Cost Gate before work begins
- Retry Limit before work begins
- Stop Condition before work begins
- Tool Allowlist before work begins
- No web by default
- No writeback by default
- No background long-run without human present
- No multi-branch expansion without explicit LOR
- Human Review before escalation
- Return Packet after task ends
- Resume Card if source / cost / carrier becomes unclear

Minimum Cost Gate:

```yaml
Cost_Gate:
  Mode: Required
  Per_Task_Budget:
  Retry_Limit:
  Tool_Allowlist:
  Background_Run: "No by default"
  Multi_Branch: "No without explicit LOR"
  Stop_Condition:
  Human_Review_Before_Escalation: true
```

---

## 8. Final Judgment

```yaml
Codex_Activity_Rollup_Observation: Candidate_Go
Five_Hour_Reset_Correlation: Plausible_Observation_Not_Official_Proof
Billing_Proof: No-Go
Real_Time_Token_Meter: No-Go
Native_Loop_Proof: No-Go
Cost_Gate_Required: Go
Agent_Mode_Watch: Yellow
Unbounded_Agent_Mode: No-Go
```

---

## 9. Final Sentence

The observed jump may mean the activity dashboard is rolling up prior high-density work in blocks. The governance point is not the exact refresh timing; it is that visible quota or reset behavior must never replace LOR, Cost Gate, Stop Condition, Human Review, and Return Packet.
