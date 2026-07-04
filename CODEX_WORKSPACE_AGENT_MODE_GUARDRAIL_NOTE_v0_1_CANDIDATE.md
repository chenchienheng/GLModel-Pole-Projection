# Codex Workspace Agent Mode Guardrail Note v0.1 Candidate

> To: Qinyi-Codex Collaboration Window. Candidate guardrail note for future Codex workspace-agent work. This is not a Codex task request, not a repo modification instruction, and not a settings update.

---

## 0. Status

```yaml
Document_Status: Candidate
Target_Window: Qinyi-Codex collaboration window
Purpose: Operational guardrail feedback
Runtime_State: No_Runtime
External_Writeback_State: No_External_Writeback
Settings_Update: No
Approval_State: Not_Approved
Closeout_State: Not_Closeout
Source: Qinyi main window feedback
```

---

## 1. One-Line Reading

Codex 目前在人控高密度協作下已能成為 workspace support-cell；但若進入代理模式，token、工具、分支與重試會快速放大，因此 Codex 協作窗必須預設 report-first、bounded-task、cost-gated、human-review-before-escalation。

---

## 2. Current Observation

```yaml
Observed_Activity:
  Cumulative_Tokens: "約 1.2 億"
  Peak_Day: "約 4249.3 萬"
  Interpretation: Activity Observability Signal
```

This is not billing proof, real-time token meter, fixed refresh schedule, or runtime proof.

---

## 3. Codex Position

Codex remains:

- bounded workspace support-cell
- local project worker
- repo / artifact review node

Codex is not:

- XuanLing body
- Qinyi replacement
- approved executor
- autonomous runtime
- Native Loop proof
- closeout authority

---

## 4. Agent Mode Risk

If Codex shifts from human-controlled workflow into agent-like mode, risk expands through:

- automatic retries
- repo-wide scanning
- long context replay
- file search loops
- artifact regeneration
- QA reruns
- cross-model comparison
- tool call cascades
- background continuation
- ambiguous task branching

Rules:

- No unbounded loop.
- No autonomous long-run.
- No multi-branch execution without LOR.
- No writeback without Red Gate.
- No background modification work without human present.

---

## 5. Required Codex Guardrails

Before any Codex task that resembles agent-mode work, require:

- LOR
- Gate
- Cost_Gate
- Scope
- Source Packet
- Permission Boundary
- Authority Boundary
- Carrier
- Stop Condition
- Retry Limit
- Artifact Verification
- Return Packet
- Resume Card

Minimum Cost Gate fields:

```yaml
Cost_Gate:
  Daily_Ceiling:
  Per_Task_Budget:
  Retry_Limit:
  Tool_Allowlist:
  No_Web_By_Default:
  No_Writeback_By_Default:
  No_Background_Long_Run:
  Stop_Condition:
  Human_Review_Before_Escalation:
```

---

## 6. Codex Task Modes

Allowed by default:

- report-only
- read-only inspection
- source map
- artifact review
- QA report
- diff summary
- candidate plan
- Return Packet preparation
- Resume Card preparation

Yellow only with explicit approval:

- candidate files
- candidate patches
- local reversible output
- build-ready pack
- per-source revised pack
- temporary generated artifacts

Red Gate required before:

- source overwrite
- file deletion
- file move / rename
- repo push
- merge
- workflow changes
- M365 / Flow / SharePoint operations
- connector / credential access
- external deployment
- runtime creation
- long background run

---

## 7. Codex Return Packet

```yaml
Codex_Return_Packet:
  Gate:
  Cost_Gate:
  Workstream:
  Feature_Slug:
  Scope:
  Source:
  Status:
  Permission_Boundary:
  Authority_Boundary:
  Carrier:
  Actions_Taken:
  Files_Read:
  Files_Created:
  Files_Changed:
  Source_Files_Changed:
  Artifact_Manifest:
  Artifact_Diff_Summary:
  QA_Result:
  External_Effects:
  What_Changed:
  What_Did_Not_Change:
  Risk:
  Pending:
  Rollback:
  Stop_Condition:
  Next_Action:
  Next_LOR_Ready:
  Resume_Card:
```

---

## 8. Operational Self-Check

Before Codex acts, confirm:

```text
Source is anchored.
Status is not smuggled.
Permission is bounded.
Authority is not assumed.
Carrier is not mixed.
Cost is bounded.
Return is verifiable.
Stop condition exists.
```

If any condition fails, stop and report.

---

## 9. Final Judgment

```yaml
Codex_As_Workspace_Support_Cell: Conditional Go
Codex_As_Agent_Mode: Yellow / Watch
Codex_As_Unbounded_Agent: No-Go
Codex_As_Autonomous_Runtime: No-Go
Codex_As_Native_Loop_Proof: No-Go
Cost_Gate_Required: Go
Human_Review_Required: Go
```

---

## 10. Final Sentence

Codex 可以繼續作為 workspace support-cell，但不能進入無界代理模式；未來任何近似代理的 Codex 工作，都必須先有 Cost Gate、Stop Condition、Retry Limit、Human Review 與 Return Packet。
