# Source / View Gate v0.1

> Status: Candidate / usable baseline
> Placement: `03_field-governance/`
> Related issues: #211
> Related Linear: QIN-118, QIN-119, QIN-130, QIN-144, QIN-162, QIN-163
> Upstream: `03_field-governance/BASE_FIELD_CORE_v0_1.md`
> Purpose: define the source/view separation rule so reports, dashboards, QIN/View surfaces, consultant packs, and export packets do not overwrite or pollute their sources.

---

## 0. Core

A source may generate many views. A view must not overwrite the source.

A view may filter, summarize, interpret, visualize, or package source-backed material within a declared boundary. A view must not mutate the source only because the output needs a cleaner story.

```text
Source = original evidence or recorded input.
View = role-specific projection of a source-backed record.
Gate = review condition that controls movement between source, view, export, and return.
Return = writeback path for decisions, corrections, and changes.
```

Source / View Gate prevents a work system from mistaking a useful report, dashboard, or QIN surface for the underlying evidence base.

---

## 1. Source / View Separation Rule

```text
A source may generate many views.
A view must not overwrite the source.
A view may be corrected when the source is corrected.
A source must not be changed only because a view needs a cleaner story.
```

Minimum conditions:

```yaml
Minimum_Conditions:
  - source identity remains stable
  - view identity is separate from source identity
  - evidence level remains visible
  - view boundary states what the view can and cannot support
  - view output has a return path
```

If any of these are missing, the output remains a draft or local work surface, not a reusable governed view.

---

## 2. Source Classes

```yaml
Source_Classes:
  Official_Source:
    meaning: government, regulator, exchange, court, public authority, or statutory source
    default_evidence_level: A_Official
  Company_Source:
    meaning: company website, disclosure, filing, official presentation, or company-published material
    default_evidence_level: A_or_B_depending_on_context
  Government_Source:
    meaning: policy, procurement, budget, statistics, regulation, or agency record
    default_evidence_level: A_Official
  Public_Database:
    meaning: structured public dataset or searchable registry
    default_evidence_level: A_or_B_depending_on_governance
  Media_or_Signal:
    meaning: news, commentary, market article, industry report, or observed signal
    default_evidence_level: C_Media_or_Signal
  Internal_Record:
    meaning: internal note, task record, review result, meeting note, or working decision
    default_evidence_level: Internal_Controlled
  Human_Verified_Input:
    meaning: manual verification from responsible person or verification node
    default_evidence_level: Human_Verification_required
  Tool_Output:
    meaning: generated, transformed, searched, extracted, summarized, or automated output
    default_evidence_level: Derived_or_Candidate
  Import_Staging_Record:
    meaning: imported external/user-collected item before review and normalization
    default_evidence_level: Pending_Verification
```

Rule: source class does not automatically determine final use. Final use depends on evidence level, boundary, gate, and return path.

---

## 3. View Classes

```yaml
View_Classes:
  Strategy_View:
    purpose: decision framing, point-cloud map, policy/market trend, risk/opportunity view
  Market_View:
    purpose: market signal, sector map, entity/project map, commercial landscape view
  Governance_View:
    purpose: gate, QA, change log, closure, return, or control dashboard
  Task_View:
    purpose: QIN task routing, owner/action tracking, next action, blocker visibility
  Dashboard_View:
    purpose: chart, trend, KPI, matrix, map, and status visualization
  Consultant_View:
    purpose: consultant-facing package or filtered delivery surface
  Public_Interface_View:
    purpose: public or external communication with private/source limits removed
  Export_Packet_View:
    purpose: portable packet carrying evidence, boundary, state, non-approval disclaimer, and return path
```

Rule: a view may support decisions only within its declared boundary. A view cannot upgrade evidence by presentation quality.

---

## 4. Forbidden Mutations

```yaml
Forbidden_Mutations:
  View_Overwrites_Source:
    result: source pollution
  Report_Edits_Source_Claim_To_Fit_Narrative:
    result: evidence drift
  Dashboard_State_Becomes_Source_Fact:
    result: metric/view confusion
  Pending_Evidence_Becomes_Confirmed_Fact:
    result: false certainty
  Capability_Becomes_Cooperation_Willingness:
    result: relationship overclaim
  Investment_Becomes_Project_Opportunity:
    result: opportunity overclaim
  Media_Signal_Becomes_Official_Fact:
    result: evidence-level collapse
  Tool_Output_Becomes_Source_Of_Truth:
    result: automation hallucination risk
```

Forbidden mutation is not a wording issue. It is a structural source/view failure.

---

## 5. Allowed Transformations

```yaml
Allowed_Transformations:
  Source_Summarization:
    condition: citation or pointer remains available
  Role_Filtering:
    condition: view boundary states what is hidden or excluded
  Evidence_Preserving_Aggregation:
    condition: evidence level and source class remain traceable
  Trend_Or_Dashboard_Visualization:
    condition: chart reads governed view or fact table, not raw unverified staging
  Export_Packet_Generation:
    condition: packet carries evidence index, boundary statement, non-approval disclaimer, and return path
  View_Correction_After_Source_Correction:
    condition: change log and return path are recorded
```

Allowed transformation does not mean approval. It only means the view can be generated without polluting the source.

---

## 6. Evidence Boundary

```yaml
Evidence_Boundary:
  A_Official:
    can_support: factual source statement within source scope
    cannot_support: intent, willingness, opportunity, or strategy unless separately evidenced
  B_Reliable_Secondary:
    can_support: contextual support or secondary confirmation
    cannot_support: official fact when primary source is required
  C_Media_or_Signal:
    can_support: signal, hypothesis, lead, trend candidate
    cannot_support: confirmed fact or approved decision
  D_Unverified:
    can_support: pending item or investigation target
    cannot_support: decision, claim, export, or strategy conclusion
  Internal_Controlled:
    can_support: internal workflow, task, gate, or decision trace
    cannot_support: external/public claim unless separately cleared
```

Evidence level must travel with the view. If evidence level is hidden, the view is not decision-safe.

---

## 7. QIN/View Surface Rule

QIN/View surfaces are allowed to make BASE readable. They are not allowed to become BASE.

```yaml
QIN_View_Surface_Rule:
  QIN_Can:
    - read governed views
    - trigger tasks
    - route questions
    - show charts, trend views, and decision surfaces
    - collect user input into Import_Staging
    - export packets with boundaries
    - return decisions and corrections
  QIN_Cannot:
    - read raw unverified staging as fact
    - overwrite source records
    - convert view state into source state
    - treat model inference as evidence
    - bypass Source / View Gate
    - bypass QIN × BASE six-question gate
```

Every QIN feature must still answer:

```yaml
QIN_BASE_Six_Questions:
  1_Read_BASE: Which BASE does it read?
  2_Stable_ID: Which stable ID does it use?
  3_Evidence_Level: What is the evidence level?
  4_View_Only: Which fields are only View?
  5_Gates: Which Gates does it pass through?
  6_Writeback: Where is the result written back?
```

---

## 8. Import / Staging Interaction

Imported data must not enter production BASE directly.

```yaml
Import_Staging_Rule:
  Landing_Table: Import_Staging
  Required_Fields:
    - Import_Batch_ID
    - Source_Origin
    - Submitted_By
    - Raw_File_or_URL
    - Intake_Date
    - Proposed_Source_ID
    - Proposed_Entity_ID
    - Evidence_Level
    - Review_Status
  Gate:
    - source identity review
    - evidence level review
    - duplicate / alias check
    - stable ID match or create
    - source/view boundary assignment
```

Staging may feed an import review view. It must not feed strategy, market, or public output views until review passes.

---

## 9. Dashboard and Report Rule

Dashboards and reports are views. They can guide attention, not replace source review.

```yaml
Dashboard_Report_Rule:
  Must_Display_Or_Carry:
    - source class
    - evidence level
    - data period or publication date when relevant
    - boundary statement
    - pending / confirmed / rejected state
    - return path
  Must_Not:
    - hide pending state
    - upgrade evidence level through visual design
    - merge unrelated sources without relation bridge
    - turn a signal into a fact
    - turn an analysis view into source of truth
```

Charts, trends, and matrices must read governed views or fact tables. They must not read raw unverified staging.

---

## 10. Export Packet Rule

Export packets are portable views. They must carry their own boundary.

```yaml
Export_Packet_Rule:
  Required_Fields:
    - Export_Packet_ID
    - Evidence_Index
    - Source_Class_Map
    - Boundary_Statement
    - Non_Approval_Disclaimer
    - Packet_State
    - Return_Packet_ID
  Required_Disclaimer:
    - Exportable does not mean approved.
    - Market signal does not mean market validation.
    - Capability does not mean cooperation willingness.
    - Investment does not mean project opportunity.
    - View does not overwrite source.
```

Export packets may support review or communication. They do not approve strategy or doctrine by themselves.

---

## 11. Examples

### 11.1 Official policy source -> Strategy trend view

```yaml
Input: official government policy or statistics source
Source_Class: Official_Source / Government_Source
View: Policy_Trend_View / Strategy_PointCloud_View
Allowed: summarize, cite, chart, map into trend
Forbidden: treat as company intent or project opportunity
Gate: Evidence_Boundary + Source_View_Gate
Return: Decision_Log / Return_Packet_Index
```

### 11.2 Company capability -> BD candidate view

```yaml
Input: company capability statement or project record
Source_Class: Company_Source
View: Capability_Ledger_View / BD_Candidate_View
Allowed: record capability candidate
Forbidden: treat capability as cooperation willingness
Gate: Relationship_Boundary + Evidence_Boundary
Return: Evidence_Index / Decision_Log
```

### 11.3 Imported spreadsheet -> Import review view

```yaml
Input: spreadsheet collected by user or team
Source_Class: Import_Staging_Record
View: Import_Review_View
Allowed: map proposed IDs and review evidence level
Forbidden: feed strategy dashboard before review
Gate: Import_Staging_Rule + Source_View_Gate
Return: QA_Gate / Change_Log
```

### 11.4 Dashboard metric -> Decision view

```yaml
Input: governed fact table or metric time series
Source_Class: Public_Database / Internal_Record / Official_Source
View: Dashboard_View / Strategy_View
Allowed: trend chart and risk flag
Forbidden: treat dashboard state as source fact
Gate: Metric_Source_Boundary + Return_Gate
Return: Decision_Log / Return_Packet_Index
```

### 11.5 QIN task trigger -> Task view

```yaml
Input: user task or QIN trigger
Source_Class: Internal_Record
View: Task_View
Allowed: route task and ask BASE six questions
Forbidden: treat task prompt as source of truth
Gate: QIN_BASE_Six_Question_Gate
Return: Change_Log / Return_Packet_Index
```

### 11.6 Public interface output -> Export packet view

```yaml
Input: internal method or source-backed summary
Source_Class: Internal_Record / Evidence_Index
View: Public_Interface_View / Export_Packet_View
Allowed: translate and package within boundary
Forbidden: expose private material or full dependency chain
Gate: Export_Packet_Rule + Non_Approval_Boundary
Return: public_content_review / MotherTree_if_structural_change_appears
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
  - do not include company-sensitive or private data
  - do not treat reports or dashboards as sources
  - do not turn Pending into Fact
  - do not turn capability into cooperation willingness
  - do not turn investment into project opportunity
  - do not turn media signal into official fact
  - do not let QIN/View surfaces bypass BASE
```

---

## 13. Current Decision

```yaml
Decision: Conditional_Go
Status: Candidate_Usable_Baseline
Reason:
  - Source / View Gate is required after BASE_FIELD_CORE.
  - It prevents dashboards, reports, QIN surfaces, and export packets from polluting source records.
  - It preserves the QIN x BASE dual-scale balance.
  - It gives future import, analysis, export, and dashboard work a reusable boundary.
What_This_Does_Not_Do:
  - does not approve doctrine
  - does not merge itself
  - does not mutate Drive or Sheets
  - does not approve ERP product scope
  - does not create production database
  - does not implement UI wireframes
Next_Action:
  - review PR manually
  - confirm candidate wording remains visible
  - decide whether Import_Staging_and_Stable_ID_Rule should become the next split-out file
Return_Path: Issue #211 -> PR -> MotherTree review -> later Import_Staging_and_Stable_ID_Rule split-out
```
