# Minimal Router Launcher / QIN View Read-Write Gate v0.1

> Status: Candidate / usable baseline
> Placement: `03_field-governance/`
> Related issues: #220
> Related Linear: QIN-118, QIN-119, QIN-123, QIN-124, QIN-130, QIN-144, QIN-162, QIN-163, QIN-164, QIN-165, QIN-167, QIN-168
> Upstream: `BASE_FIELD_CORE_v0_1.md`, `SOURCE_VIEW_GATE_v0_1.md`, `IMPORT_STAGING_AND_STABLE_ID_RULE_v0_1.md`, `ANALYSIS_VIEW_MAP_v0_1.md`, `EXPORT_RETURN_PACKET_SCHEMA_v0_1.md`
> Purpose: define the minimum routing contract connecting BASE → governed View → QIN/View surface → Export / Return without implementing production UI, database, automation, or prompt changes.

---

## 0. Core

QIN may trigger, read, ask, route, export, and return.

QIN must not bypass BASE, Source/View Gate, Import/Staging review, Analysis View boundary, or Export/Return Packet requirements.

A minimal router is not production UI and not production automation. It is the contract for what a valid read/write route must carry.

```text
BASE -> Governed View -> QIN/View Surface -> Export / Return
```

The purpose of this file is to make the route executable as a rule, not to implement the runtime.

---

## 1. Minimal Router Rule

```yaml
Minimal_Router_Rule:
  QIN_Can:
    - trigger route requests
    - read governed views
    - ask clarification questions
    - route unresolved items to gates
    - export governed packets
    - return decisions, corrections, and next actions
  QIN_Cannot:
    - read raw staging as fact
    - overwrite source records
    - bypass Source_View_Gate
    - bypass Import_Staging_and_Stable_ID_Rule
    - bypass Analysis_View_Map
    - bypass Export_Return_Packet_Schema
    - treat route success as approval
```

A successful route means the path is valid. It does not mean the content is approved.

---

## 2. Read Path

```yaml
Read_Path:
  Allowed_Targets:
    - Governed_View
    - Fact_Table
    - Evidence_Index
    - Entity_Master
    - Project_Asset_Master
    - Relation_Bridge
    - Capability_Ledger
    - Constraint_Gate
    - Decision_Log
    - Return_Packet_Index
  Blocked_Targets_As_Fact:
    - raw Import_Staging
    - unresolved Proposed_ID rows
    - unverified tool extraction
    - draft reports without evidence refs
    - dashboard state without source/view boundary
```

Read path must preserve evidence level, source/view boundary, and return path.

---

## 3. Write Path

```yaml
Write_Path:
  Allowed_Targets:
    - Import_Staging
    - Decision_Log
    - Change_Log
    - QA_Gate
    - Return_Packet_Index
    - Export_Packet_Index
    - GitHub_Issue_or_PR_when_structural
    - Linear_Task_when_actionable
  Blocked_Targets:
    - Source_Ledger overwrite
    - Entity_Master overwrite
    - Evidence_Index overwrite
    - governed fact table direct overwrite
    - doctrine file mutation
    - assistant prompt mutation
    - production database mutation
```

QIN may collect and return. QIN must not silently overwrite source-of-truth records.

---

## 4. Gate Sequence

```yaml
Gate_Sequence:
  1_Source_View_Gate:
    asks: Is this a source, a view, or a view of a source?
  2_Import_Staging_and_Stable_ID_Rule:
    asks: If imported, did it land in staging and receive proposed/confirmed ID review?
  3_Analysis_View_Map:
    asks: If analyzed, does it read governed views or fact tables instead of raw staging?
  4_Export_Return_Packet_Schema:
    asks: If exported, does it carry evidence, boundary, non-approval, state, and return path?
  5_QIN_BASE_Six_Questions:
    asks:
      - Which BASE does it read?
      - Which stable ID does it use?
      - What is the evidence level?
      - Which fields are only View?
      - Which Gates does it pass through?
      - Where is the result written back?
```

A route cannot skip a gate simply because the user interface is smooth.

---

## 5. QIN Input / Output Boundaries

```yaml
QIN_Input_Boundary:
  Input_Can_Be:
    - user question
    - task request
    - uploaded file pointer
    - imported spreadsheet pointer
    - candidate source URL
    - dashboard request
    - export request
    - correction or return instruction
  Input_Must_Not_Be_Treated_As:
    - verified evidence
    - confirmed stable ID
    - approved decision
    - production BASE mutation

QIN_Output_Boundary:
  Output_Can_Be:
    - route decision
    - clarification request
    - import staging instruction
    - analysis view request
    - export packet request
    - return packet update
    - next action card
  Output_Must_Not_Be_Treated_As:
    - doctrine approval
    - source-of-truth overwrite
    - ERP product approval
    - production UI implementation
```

---

## 6. Route Request Record

```yaml
Minimal_Route_Request:
  mandatory_fields:
    - Route_Request_ID
    - User_or_Window_Request
    - Requested_Action
    - Read_BASE_Target
    - Stable_ID_Refs
    - Evidence_Level
    - View_Target
    - Gate_Checks
    - Writeback_Target
    - Return_Path
  conditional_fields:
    - Import_Batch_ID
    - Export_Packet_ID
    - Decision_Log_ID
    - QA_Gate_ID
    - Change_Log_ID
    - Return_Packet_ID
  status_fields:
    - Route_Decision
    - Route_Blocker
    - Next_Action
```

---

## 7. Route Decision Vocabulary

```yaml
Route_Decision:
  - Route_Allowed
  - Route_Allowed_With_Boundary
  - Needs_Import_Staging
  - Needs_Stable_ID_Review
  - Needs_Source_View_Gate
  - Needs_Analysis_View_Gate
  - Needs_Export_Return_Packet
  - Blocked_Raw_Staging_As_Fact
  - Blocked_Source_Overwrite
  - Blocked_Missing_Return_Path
  - Blocked_Missing_Evidence_Level
  - Hold_For_Human_Review
```

Route decision is a routing state, not approval state.

---

## 8. Allowed Route Examples

### 8.1 Governed analysis request

```yaml
Request: show policy trend chart
Read_BASE_Target: Policy_Trend_View / Metric_TimeSeries_Fact
Gate_Checks:
  - Source_View_Gate
  - Analysis_View_Map
Writeback_Target: Decision_Log or Return_Packet_Index if used
Decision: Route_Allowed_With_Boundary
```

### 8.2 User import request

```yaml
Request: import company list spreadsheet
Read_BASE_Target: none at intake
Writeback_Target: Import_Staging
Gate_Checks:
  - Import_Staging_and_Stable_ID_Rule
Decision: Needs_Import_Staging
```

### 8.3 Export packet request

```yaml
Request: export strategy packet
Read_BASE_Target: Strategy_PointCloud_View + Evidence_Index
Gate_Checks:
  - Analysis_View_Map
  - Export_Return_Packet_Schema
Writeback_Target: Export_Packet_Index + Return_Packet_Index
Decision: Route_Allowed_With_Boundary
```

---

## 9. Blocked Route Examples

### 9.1 Raw staging dashboard

```yaml
Request: make executive dashboard from imported spreadsheet before review
Blocker: raw staging cannot feed executive dashboard as fact
Decision: Blocked_Raw_Staging_As_Fact
Next_Action: run import staging and stable ID review first
```

### 9.2 Source overwrite

```yaml
Request: update source record because report wording is cleaner
Blocker: view must not overwrite source
Decision: Blocked_Source_Overwrite
Next_Action: correct source only with source-side evidence and change log
```

### 9.3 Export without return path

```yaml
Request: export consultant pack without return route
Blocker: exported packet without return path is not reusable system progress
Decision: Blocked_Missing_Return_Path
Next_Action: assign Return_Packet_ID and Return_Path
```

---

## 10. Dry-Run Test Cases

```yaml
Dry_Run_Tests:
  Test_1_Import:
    input: user uploads spreadsheet
    expected: route to Import_Staging, not production BASE
  Test_2_Analysis:
    input: user asks for trend chart
    expected: read governed view or fact table; show evidence level
  Test_3_Export:
    input: user asks for report packet
    expected: create/export only with evidence, boundary, non-approval, packet state, return path
  Test_4_Return:
    input: reviewer requests correction
    expected: update Change_Log / Return_Packet_Index, not overwrite source without source evidence
  Test_5_Block:
    input: raw staging row used as executive fact
    expected: blocked and routed to review
```

---

## 11. Failure Modes

```yaml
Failure_Modes:
  Smooth_UI_Bypasses_Gates:
    risk: workflow ease hides evidence weakness
  QIN_Reads_Raw_Staging_As_Fact:
    risk: unreviewed data becomes false dashboard or report
  QIN_Writes_To_Source:
    risk: source pollution and irreversible drift
  Route_Success_As_Approval:
    risk: valid path mistaken as decision authority
  Missing_Return_Path:
    risk: output cannot be audited, corrected, or reused
  Dry_Run_Skipped:
    risk: routing contract looks correct but fails in execution
```

---

## 12. Do Not

```yaml
Do_Not:
  - do not approve doctrine
  - do not mutate Drive or Sheets
  - do not approve ERP product scope
  - do not create production database
  - do not implement UI wireframes
  - do not implement automation
  - do not change assistant prompt
  - do not include company-sensitive or private data
  - do not let QIN write directly into source records
  - do not let QIN read raw staging as fact
  - do not turn routing contract into production system claim
  - do not treat route success as approval
```

---

## 13. Current Decision

```yaml
Decision: Conditional_Go
Status: Candidate_Usable_Baseline
Reason:
  - Minimal router is required after BASE, Source/View, Import/Staging, Analysis, and Export/Return boundaries.
  - It makes the QIN × BASE dual-scale usable as a route contract.
  - It separates read and write paths.
  - It defines gate order and dry-run cases.
What_This_Does_Not_Do:
  - does not approve doctrine
  - does not merge itself
  - does not mutate Drive or Sheets
  - does not approve ERP product scope
  - does not create production database
  - does not implement UI wireframes
  - does not implement automation
  - does not change assistant prompt
Next_Action:
  - review PR manually
  - confirm candidate wording remains visible
  - create separate dry-run test task after merge if approved
Return_Path: Issue #220 -> PR -> MotherTree review -> later dry-run test task
```
