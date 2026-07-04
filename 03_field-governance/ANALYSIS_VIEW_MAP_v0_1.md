# Analysis View Map v0.1

> Status: Candidate / usable baseline
> Placement: `03_field-governance/`
> Related issues: #215
> Related Linear: QIN-118, QIN-119, QIN-130, QIN-132, QIN-133, QIN-144, QIN-162, QIN-163, QIN-164, QIN-165
> Upstream: `BASE_FIELD_CORE_v0_1.md`, `SOURCE_VIEW_GATE_v0_1.md`, `IMPORT_STAGING_AND_STABLE_ID_RULE_v0_1.md`
> Purpose: define how charts, trends, matrices, dashboards, and strategy views may read governed views / fact tables without reading raw staging or upgrading evidence through presentation.

---

## 0. Core

Analysis views read governed views or fact tables. Analysis views must not read raw staging as fact. Charts, trends, matrices, and dashboards do not upgrade evidence level. A useful visualization is still only a view.

```text
Analysis View = role-specific interpretation or visualization surface.
Governed View = reviewed view with source, evidence level, gate, and return path.
Fact Table = structured record intended for aggregation, trend, metric, or dashboard use.
Raw Staging = imported or collected data before review and stable ID confirmation.
```

The purpose of analysis is to make BASE readable, not to replace BASE.

---

## 1. Analysis View Rule

```yaml
Analysis_View_Rule:
  Must_Read:
    - governed views
    - reviewed fact tables
    - source-backed evidence indexes
    - confirmed stable IDs
  Must_Not_Read_As_Fact:
    - raw import staging
    - unreviewed user spreadsheets
    - unresolved proposed IDs
    - unverified model extraction
    - media signals without evidence boundary
```

Analysis views can guide attention and support judgment. They cannot approve facts, opportunities, cooperation, doctrine, or strategy by presentation alone.

---

## 2. View Input Classes

```yaml
View_Input_Classes:
  Governed_View:
    meaning: reviewed projection with declared source/view boundary
    allowed_for: charts, dashboards, matrices, strategy views
  Fact_Table:
    meaning: structured, reviewable records designed for aggregation
    allowed_for: metrics, trends, comparisons, time series
  Evidence_Index:
    meaning: source-backed evidence object and pointer resolution
    allowed_for: evidence carry, citation, claim support
  Relation_Bridge:
    meaning: reviewed relation between source, entity, project, capability, constraint, or opportunity
    allowed_for: network maps, entity/project maps, relationship views
  Import_Staging:
    meaning: safe landing zone before review
    allowed_for: import review only
    not_allowed_for: production dashboards or executive strategy views
```

---

## 3. Fact Table / Governed View Sources

```yaml
Allowed_Analysis_Sources:
  Policy_Event_Fact:
    use: policy timeline, regulatory trend, national strategy signal
  Market_Signal_Fact:
    use: market observation and trend candidate
  Metric_TimeSeries_Fact:
    use: chartable metrics and KPI trends
  Entity_Master:
    use: entity dimension after stable ID confirmation
  Project_Asset_Master:
    use: project or asset dimension after stable ID confirmation
  Relation_Bridge:
    use: relationship and dependency maps
  Capability_Ledger:
    use: capability view, not cooperation willingness
  Constraint_Gate:
    use: legal, tax, trade, certification, internal-control boundary views
  Evidence_Index:
    use: evidence carry and claim support
  Decision_Log:
    use: decision lineage and interpretation history
  Return_Packet_Index:
    use: closure and version traceability
```

Allowed does not mean automatically approved. Each view still needs evidence level, gate, and boundary.

---

## 4. Forbidden Analysis Reads

```yaml
Forbidden_Analysis_Reads:
  Raw_Staging_To_Executive_Dashboard:
    reason: unreviewed import may contain duplicate, alias, conflict, or unsupported claims
  Proposed_ID_To_Entity_Map:
    reason: proposed IDs are not confirmed stable IDs
  Media_Signal_To_Confirmed_Trend:
    reason: signal is not validation
  Tool_Output_To_Fact_Table:
    reason: extraction or generation is not original evidence
  Matrix_Score_To_Approved_Recommendation:
    reason: scoring is interpretation, not approval
  Dashboard_State_To_Source_Fact:
    reason: dashboard is a view, not the source
```

---

## 5. Chart / Trend / Matrix / Dashboard Rule

```yaml
Visualization_Rule:
  Chart:
    must_carry: source class, evidence level, date basis, boundary
  Trend:
    must_carry: data period, source continuity, uncertainty state
  Matrix:
    must_carry: scoring criteria, evidence level, reviewer boundary
  Dashboard:
    must_carry: view state, data freshness, pending/confirmed/rejected counts, return path
```

A chart may be persuasive. It is not therefore authoritative.

A trend may be useful. It is not therefore market validation.

A matrix may rank candidates. It is not therefore an approved recommendation.

A dashboard may show state. It is not therefore the source of truth.

---

## 6. Evidence-Level Carry Rule

Evidence level must travel with analysis outputs.

```yaml
Evidence_Level_Carry:
  Required_On_Output:
    - Evidence_Level
    - Source_Class
    - Date_Basis
    - Data_Period
    - Boundary_Statement
    - Return_Path
  Must_Not:
    - hide Pending state
    - average evidence levels into one confidence score without explanation
    - upgrade weak evidence through visualization design
    - remove cannot-support statements from decision views
```

If evidence level cannot be carried into the view, the view is not decision-safe.

---

## 7. Strategy / Market / Governance / Development View Map

```yaml
Analysis_View_Map:
  Strategy_PointCloud_View:
    reads:
      - Policy_Event_Fact
      - Market_Signal_Fact
      - Metric_TimeSeries_Fact
      - Evidence_Index
    purpose: strategic landscape and signal distribution
    boundary: signal map, not approved strategy by itself
  Policy_Trend_View:
    reads:
      - Policy_Event_Fact
      - Official_Source records
      - Metric_TimeSeries_Fact
    purpose: policy and regulation timeline
    boundary: policy direction is not project opportunity
  Market_Signal_View:
    reads:
      - Market_Signal_Fact
      - Evidence_Index
      - Source_Ledger
    purpose: market signal tracking
    boundary: signal is not validation
  Entity_Project_Map:
    reads:
      - Entity_Master
      - Project_Asset_Master
      - Relation_Bridge
    purpose: entity/project relation mapping
    boundary: relation is not cooperation willingness
  Capability_Ledger_View:
    reads:
      - Capability_Ledger
      - Evidence_Index
      - Relation_Bridge
    purpose: capability visibility
    boundary: capability is not commitment
  Governance_Dashboard:
    reads:
      - QA_Gate
      - Change_Log
      - Decision_Log
      - Return_Packet_Index
    purpose: review, change, closure, and return tracking
    boundary: dashboard state is not source fact
  Development_Candidate_View:
    reads:
      - Entity_Master
      - Capability_Ledger
      - Constraint_Gate
      - Relation_Bridge
    purpose: candidate development surface
    boundary: candidate is not approved partner
  Risk_Opportunity_Map:
    reads:
      - Constraint_Gate
      - Market_Signal_Fact
      - Evidence_Index
      - Decision_Log
    purpose: risk/opportunity interpretation
    boundary: opportunity candidate is not opportunity pipeline
```

---

## 8. QIN/View Analysis Surface Rule

QIN/View surfaces make analysis usable. They do not make analysis authoritative.

```yaml
QIN_View_Analysis_Surface:
  QIN_Can:
    - show filtered dashboards
    - display charts and trends from governed views
    - ask follow-up questions about evidence level and boundary
    - route unclear signals to micro-check tasks
    - export analysis packets with disclaimers
    - write decision feedback to Decision_Log or Return_Packet_Index
  QIN_Cannot:
    - read raw staging as fact
    - hide evidence level
    - convert charts into approved decisions
    - turn trend signal into market validation
    - write dashboard state back as source fact
    - bypass Source_View_Gate or Import_Staging_and_Stable_ID_Rule
```

---

## 9. Failure Modes

```yaml
Failure_Modes:
  Pretty_Dashboard_Thin_BASE:
    risk: visuals look convincing but evidence support is weak
  Raw_Staging_In_Chart:
    risk: duplicate or unresolved records distort trends
  Matrix_As_Decision:
    risk: scoring becomes false approval
  Trend_As_Validation:
    risk: weak signal becomes strategic certainty
  Dashboard_As_Source:
    risk: view state overwrites source truth
  Evidence_Level_Dropped:
    risk: users cannot judge support strength
  No_Return_Path:
    risk: analysis cannot be corrected or audited
```

---

## 10. Examples

### 10.1 Policy trend chart

```yaml
Input: Policy_Event_Fact + Official_Source records
View: Policy_Trend_View
Allowed: chart timeline and signal concentration
Forbidden: claim confirmed project opportunity from policy alone
Gate: Evidence_Level_Carry + Source_View_Gate
Return: Decision_Log / Return_Packet_Index
```

### 10.2 Market signal matrix

```yaml
Input: Market_Signal_Fact + Evidence_Index
View: Market_Signal_View
Allowed: rank signals by evidence level and relevance
Forbidden: treat matrix score as approved recommendation
Gate: Evidence_Boundary + Analysis_View_Rule
Return: QA_Gate / Change_Log
```

### 10.3 Entity project relation map

```yaml
Input: Entity_Master + Project_Asset_Master + Relation_Bridge
View: Entity_Project_Map
Allowed: display reviewed relations
Forbidden: infer cooperation willingness without evidence
Gate: Relation_Bridge review + Source_View_Gate
Return: Decision_Log
```

### 10.4 Governance dashboard

```yaml
Input: QA_Gate + Change_Log + Return_Packet_Index
View: Governance_Dashboard
Allowed: show open/closed/pending status
Forbidden: treat dashboard state as original source
Gate: Return_Gate
Return: Change_Log / Return_Packet_Index
```

### 10.5 QIN analysis request

```yaml
Input: user asks QIN for market trend chart
View: QIN analysis surface
Allowed: read governed view and show evidence level
Forbidden: query raw staging and present it as fact
Gate: QIN_BASE_Six_Question_Gate + Analysis_View_Rule
Return: Decision_Log or micro-check task
```

---

## 11. Do Not

```yaml
Do_Not:
  - do not approve doctrine
  - do not mutate Drive or Sheets
  - do not approve ERP product scope
  - do not create production database
  - do not implement UI wireframes
  - do not include company-sensitive or private data
  - do not treat dashboards as source of truth
  - do not turn trend signal into confirmed fact
  - do not turn matrix score into approved recommendation
  - do not turn Pending into Fact
  - do not hide evidence level in analysis output
  - do not let QIN analysis bypass governed views
```

---

## 12. Current Decision

```yaml
Decision: Conditional_Go
Status: Candidate_Usable_Baseline
Reason:
  - Analysis View Map is required after import/staging and source/view boundaries.
  - It prevents charts, trends, dashboards, and matrices from upgrading evidence through presentation.
  - It defines which views may read which governed sources and fact tables.
  - It supports QIN analysis surfaces while preserving BASE boundaries.
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
  - decide whether Export_Return_Packet_Schema should become the next split-out file
Return_Path: Issue #215 -> PR -> MotherTree review -> later Export_Return_Packet_Schema split-out
```
