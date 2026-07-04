# Base Field Core v0.1

> Status: Candidate / usable baseline
> Placement: `03_field-governance/`
> Related issues: #135, #167, #185, #196
> Related Linear: QIN-118, QIN-119, QIN-127, QIN-130, QIN-133, QIN-144, QIN-162
> Purpose: define the minimum Base Field that lets sources, nodes, dependency chains, views, gates, returns, QIN interaction surfaces, and BASE evidence structures remain separated but connected.

---

## 0. Core

Base Field is not a table, a tool, a single repository file, or a backend-only warehouse.

Base Field is the minimum work foundation that keeps source, node, dependency chain, view, gate, return, QIN interaction surface, and BASE evidence structure separated but connected.

```text
Base Field
= Source
x Node
x Dependency Chain
x View
x Gate
x Return
x QIN/View Surface
```

The first goal is not completeness. The first goal is non-collapse.

A base may be incomplete, but it must be traceable, rebuildable, readable, and able to return.

---

## 1. QIN x BASE Dual-Scale Rule

QIN and BASE are coupled dual-scale, not a frontend/backend hierarchy.

QIN is not merely a visible UI above BASE. BASE is not merely a hidden table below QIN. They are paired weights in the same Source-to-Decision system.

```yaml
QIN_BASE_Dual_Scale:
  QIN:
    role:
      - task entry
      - user interaction
      - trigger surface
      - orchestration and routing
      - collaboration interface
      - operational readability
  BASE:
    role:
      - source foundation
      - stable IDs
      - evidence ledger
      - entity / project / relation graph
      - decision-bearing structure
      - import / export / return memory
  Required_Balance:
    - every QIN function must have BASE linkage
    - every BASE structure must have a readable QIN/View surface
    - import, normalization, analysis, export, and return must be designed as one loop
```

Failure modes:

```yaml
Failure_Mode:
  QIN_Too_Heavy:
    - smooth UI / workflow over a thin evidence base
    - task flow improves but source support weakens
    - model inference fills gaps that BASE should carry
  BASE_Too_Heavy:
    - data warehouse exists but no usable interaction surface
    - strategy users cannot read demand clearly
    - internal teams cannot import, act, or return decisions efficiently
```

QIN and BASE must therefore grow together.

---

## 2. Non-Collapse Rule

```text
Incomplete is acceptable.
Untraceable is not.
Editable is acceptable.
Source pollution is not.
Partial is acceptable.
No return path is not.
Smooth QIN flow is acceptable.
QIN without BASE linkage is not.
Thick BASE is acceptable.
BASE without readable QIN/View surface is not.
```

Minimum condition:

```text
Every item must know:
where it came from,
what it depends on,
what it supports,
which view may read it,
which gate controls it,
which QIN/View surface can use it,
and where it returns.
```

---

## 3. Six-Layer Base Field

### 3.1 Source

Source is the original input or evidence layer.

It may be a document, official source, chat note, issue, file, tool output, spreadsheet, report, or human-verified input.

Rule:

```text
Source may generate many views.
View must not overwrite Source.
```

### 3.2 Node

Node is a locatable object inside the field.

```yaml
Node:
  - company
  - government_agency
  - policy
  - project
  - asset
  - task
  - document
  - issue
  - pull_request
  - tool
  - adapter
  - public_interface
  - executive_view
```

A node is not valid only because it has a name. It becomes valid when its source, dependency, view, gate, QIN/View surface, and return path are traceable.

### 3.3 Dependency Chain

Dependency chain is not a simple line. It is the judgment layer behind linkage, continuity, dependency, coupling, loop, topology, matrix, overlay, and cluster.

```text
linkage is not yet a chain
continuity makes the chain observable
dependency makes the chain structurally valid
coupling makes chains become a field
return calibration prevents drift
```

Before assigning category, table, tool, or UI feature, ask:

```text
What does this node depend on?
What does this node support?
What continuity does it preserve?
What coupling does it create?
What loop does it return through?
Which field-view should represent it without polluting the source?
Which QIN/View surface makes it usable without flattening BASE?
```

### 3.4 View

View is the role-specific projection of source and node data.

```yaml
View:
  examples:
    - Strategy_PointCloud_View
    - Policy_Trend_View
    - Market_Signal_View
    - Entity_Project_Map
    - Capability_Ledger_View
    - Governance_Dashboard
    - GM_View
    - Consultant_View
    - MotherTree_View
    - Public_Interface_View
    - Task_View
    - QA_View
  rule:
    - views can filter
    - views can summarize
    - views can visualize
    - views can interpret within boundary
    - views cannot overwrite source
```

### 3.5 Gate

Gate controls whether an item may move, publish, harden, close, reopen, export, or return.

```yaml
Gate:
  checks:
    - Source_View_Gate
    - Evidence_Boundary
    - Permission_Gate
    - Legal_Regulatory_Gate
    - Internal_Control_Gate
    - Responsibility_Boundary_Gate
    - Risk_Gate
    - QA_Gate
    - Return_Gate
    - Closure_Gate
    - Reopen_Gate
```

A trigger is not permission. A route is not access. A draft is not a sealed baseline. A view is not a source. Exportable does not mean approved.

### 3.6 Return

Return keeps the base alive. An output must be able to return to a register, issue, file, task, review point, decision log, or next-round card.

```yaml
Return:
  possible_targets:
    - MotherTree
    - Registry_Log
    - GitHub_Issue
    - GitHub_PR
    - Drive_Source_File
    - Task_System
    - Decision_Log
    - Change_Log
    - QA_Gate
    - Return_Packet_Index
    - Next_Round_Card
  required_fields:
    - return_target
    - return_reason
    - changed_state
    - pending_decision
    - next_action
```

---

## 4. Source / View Gate

```text
A source may generate many views.
A view must not overwrite the source.
A view may be corrected when the source is corrected.
A source must not be changed only because a view needs a cleaner story.
```

External reports, executive summaries, public posts, consultant packages, dashboards, and task boards are views. They can be useful, but they are not the source itself.

---

## 5. Source-to-Decision UI Foundation

The Source-to-Decision UI is not a prettier report table. It is the readable QIN/View surface of BASE.

It must support import, normalization, analysis, export, and return.

```yaml
Source_To_Decision_UI_Foundation:
  Import:
    rule: external or user-collected data enters Import_Staging first, not production BASE
    required:
      - Import_Batch_ID
      - Source_Origin
      - Submitted_By
      - Raw_File_or_URL
      - Intake_Date
      - Proposed_Source_ID
      - Proposed_Entity_ID
      - Evidence_Level
      - Review_Status
  Normalize:
    rule: create or match stable IDs before View exposure
    required_stable_ids:
      - Source_ID
      - Entity_ID
      - Project_ID
      - Evidence_ID
      - Relation_ID
      - Capability_ID
      - Constraint_ID
      - Opportunity_ID
      - Return_Packet_ID
  Analyze:
    rule: charts, trends, maps, and dashboards read from governed Views, not raw unverified staging
    required_views:
      - Strategy_PointCloud_View
      - Policy_Trend_View
      - Market_Signal_View
      - Entity_Project_Map
      - Capability_Ledger_View
      - Governance_Dashboard
  Export:
    rule: export packets must carry evidence, gates, state boundary, non-approval boundary, and return path
    required:
      - Export_Packet_ID
      - Evidence_Index
      - Boundary_Statement
      - Non_Approval_Disclaimer
      - Return_Packet_ID
  Return:
    rule: every decision or output returns to logs and packet index
    required:
      - Decision_Log_ID
      - Change_Log_ID
      - QA_Gate_ID
      - Return_Packet_ID
```

---

## 6. Import / Normalize / Analyze / Export / Return Loop

```yaml
Continuous_Optimization_Loop:
  1_Import:
    purpose: receive human, tool, public, company, or official data
    rule: land in Import_Staging first
  2_Normalize:
    purpose: assign or match stable IDs
    rule: unresolved identity stays Pending
  3_Analyze:
    purpose: produce charts, trends, maps, risk views, and decision views
    rule: analysis reads governed Views, not polluted Source
  4_Export:
    purpose: produce packets, reports, dashboards, or briefings
    rule: export must carry evidence and non-approval boundary
  5_Return:
    purpose: write back decisions, changes, QA results, and next actions
    rule: output without return path is not reusable system progress
```

---

## 7. BASE_FIELD_CORE Implementation Tables

These are implementation-facing tables or logical records. They are not sealed doctrine and not company-sensitive data.

```yaml
Implementation_Tables:
  Source_Ledger:
    key: Source_ID
    purpose: source origin, evidence grade, jurisdiction, usage boundary
  Entity_Master:
    key: Entity_ID
    purpose: organization / agency / company / project / region / material / tool identity
  Project_Asset_Master:
    key: Project_ID_or_Asset_ID
    purpose: project, case, asset, packet identity
  Evidence_Index:
    key: Evidence_ID
    purpose: source-backed evidence object and pointer resolution
  Relation_Bridge:
    key: Relation_ID
    purpose: one-to-many and many-to-many relation mapping
  Capability_Ledger:
    key: Capability_ID
    purpose: verified or candidate capability
  Constraint_Gate:
    key: Constraint_ID
    purpose: legal / tax / trade / certification / internal control / responsibility boundary
  Market_Signal_Fact:
    key: Market_Signal_ID
    purpose: market observation and trend signal
  Policy_Event_Fact:
    key: Policy_Event_ID
    purpose: government / regulation / national policy event timeline
  Metric_TimeSeries_Fact:
    key: Metric_ID + Date
    purpose: chartable trend and KPI facts
  Decision_Log:
    key: Decision_Log_ID
    purpose: decision-bearing record and interpretation lineage
  Change_Log:
    key: Change_Log_ID
    purpose: mutation and audit trail
  Import_Staging:
    key: Import_Batch_ID
    purpose: safe landing zone for collected or imported data
  Export_Packet_Index:
    key: Export_Packet_ID
    purpose: exportable packet registry and evidence-carry boundary
  Return_Packet_Index:
    key: Return_Packet_ID
    purpose: closure, version traceability, and return loop memory
```

---

## 8. QIN x BASE Six-Question Gate

Every new QIN feature must answer:

```yaml
QIN_BASE_Six_Questions:
  1_Read_BASE: Which BASE does it read?
  2_Stable_ID: Which stable ID does it use?
  3_Evidence_Level: What is the evidence level?
  4_View_Only: Which fields are only View?
  5_Gates: Which Gates does it pass through?
  6_Writeback: Where is the result written back?
```

If these questions cannot be answered, the QIN feature remains a UI/workflow candidate, not Source-to-Decision system progress.

---

## 9. Internal-to-External Language Map

Internal language can stay precise inside MotherTree, Registry, and working windows. External language must be readable by normal business users.

| Internal term | External wording | Plain meaning |
|---|---|---|
| XuanLing | cross-platform work governance architecture | method for connecting data, tasks, documents, and tools |
| spherical topology | layered work map / ecosystem map | where tools and tasks sit in the overall work map |
| invariant core | core principle / core decision rule | what cannot drift when the context changes |
| multi-chain field | multi-source and multi-task work environment | many sources, tools, documents, and tasks handled together |
| return calibration | feedback and correction mechanism | work returns for review, correction, and update |
| dependency chain | task dependency path / relationship path | how one item depends on or supports another |
| coupling | integration / connection | two systems or tasks start working together |
| loop | feedback loop | work can be checked and corrected after output |
| MotherTree | master governance register | main record of rules, versions, and decisions |
| return-chain | writeback to master record | important changes return to the main register or issue |
| Source | data source | where the original information comes from |
| View | user-facing view | version shown to a specific role or audience |
| Gate | review checkpoint | condition checked before moving forward |
| Return | feedback path | where an output returns for update or calibration |
| Source / View Gate | source-view separation rule | reports must not overwrite the original source |
| CloudTop | company knowledge base / operating data base | company capability, source, task, and knowledge base |
| Base Field | work foundation layer | base structure for sources, tasks, tools, views, and return paths |
| QIN Interface | user-facing interaction / task trigger / view surface | user and task entry layer for operating the base |
| BASE | source-to-decision data foundation | evidence, IDs, relations, logs, and decision memory |
| Closure | baseline confirmation | version can be referenced, but not necessarily frozen forever |
| Reopen | review again | reopen when new data, risk, or error appears |
| drift | deviation from target | meaning, role, evidence, or task has moved off target |

External output rule:

```text
Do not expose internal architecture terms directly in business, public,
consultant, or company-facing outputs unless the audience has already been onboarded.
```

Use ordinary work language:

```text
work architecture
data foundation
governance process
decision view
feedback mechanism
review checkpoint
source separation
```

---

## 10. Base Routing Examples

### 10.1 Government Source -> Strategy Trend View

```yaml
Input: national policy or statistics source
BASE_Table: Source_Ledger / Policy_Event_Fact / Metric_TimeSeries_Fact
Stable_ID: Source_ID + Policy_Event_ID or Metric_ID
View: Policy_Trend_View / Strategy_PointCloud_View
Gate:
  - cannot become company intent
  - cannot become project opportunity without hardening
Return: Decision_Log / Return_Packet_Index
```

### 10.2 Company Capability -> BD Candidate View

```yaml
Input: company capability, office, project record, or support signal
BASE_Table: Entity_Master / Capability_Ledger / Relation_Bridge
Stable_ID: Entity_ID + Capability_ID + Relation_ID
View: Capability_Ledger_View / BD_Candidate_View
Gate:
  - capability is not cooperation willingness
  - support signal is not confirmed resource
Return: Evidence_Index / Decision_Log
```

### 10.3 Imported Spreadsheet -> Import Staging -> Evidence Review

```yaml
Input: spreadsheet collected by a user or team
BASE_Table: Import_Staging
Stable_ID: Import_Batch_ID + Proposed_Source_ID
View: Import_Review_View
Gate:
  - staging is not production BASE
  - proposed IDs require review before exposure
Return: QA_Gate / Change_Log
```

### 10.4 GitHub Registry Note -> Governance Record

```yaml
Input: issue comment, PR, rule candidate, registry log
BASE_Table: Change_Log / Decision_Log / Return_Packet_Index
Stable_ID: Change_Log_ID + Return_Packet_ID
View: MotherTree_View / Governance_Dashboard
Gate:
  - not company data
  - not public-facing output by default
Return: MotherTree / Registry_Log
```

### 10.5 QIN Task Feature -> Six-Question BASE Gate

```yaml
Input: new QIN feature or user-facing task trigger
BASE_Table: Decision_Log / QIN_BASE_Alignment_Record
Stable_ID: QIN_Feature_ID + Return_Packet_ID
View: QIN_Task_View
Gate:
  - must answer Read_BASE / Stable_ID / Evidence_Level / View_Only / Gates / Writeback
Return: QIN-162 alignment gate / Return_Packet_Index
```

### 10.6 Public Interface Output -> Export Packet with Non-Approval Boundary

```yaml
Input: public-facing summary, dashboard, or consultant packet
BASE_Table: Export_Packet_Index / Evidence_Index / Return_Packet_Index
Stable_ID: Export_Packet_ID + Evidence_ID + Return_Packet_ID
View: Public_Interface_View / Consultant_View
Gate:
  - translate internal language
  - remove private material
  - preserve non-approval boundary
  - avoid exposing full dependency chain
Return: public_content_review / MotherTree_if_structural_change_appears
```

---

## 11. Build Order

Do not build a large table first. Build the base in this order:

```yaml
Build_Order:
  1: Base_Field_Core
  2: QIN_BASE_Dual_Scale_Rule
  3: Source_View_Gate
  4: Dependency_Chain_Reading_Rule
  5: Internal_External_Language_Map
  6: View_Layer_Map
  7: Import_Staging_and_Stable_ID_Rule
  8: Analysis_View_Map
  9: Export_Return_Packet_Schema
  10: Minimal_Router_Launcher
```

Each step must remain small enough to be reviewed and rebuilt.

---

## 12. Keep / Split / Do Not Do

```yaml
Keep:
  - source_node_view_gate_return_separation
  - QIN_BASE_dual_scale_balance
  - dependency_chain_reading
  - source_to_decision_UI_foundation
  - implementation_table_candidates
  - external_language_translation
  - return_path_requirement
  - rebuildable_baseline

Split_Out:
  - company_sensitive_source_data
  - full_market_point_cloud_data
  - public_facing_copywriting
  - detailed_private_identity_rules
  - tool_specific_implementation_steps
  - production database schema migration
  - UI wireframe implementation

Do_Not:
  - do not rewrite DCP
  - do not seal this as final doctrine
  - do not mix company data with registry governance
  - do not treat GitHub as system ontology
  - do not treat Drive as MotherTree
  - do not treat QIN as the full architecture
  - do not treat BASE as backend-only warehouse
  - do not turn Pending into Fact
  - do not turn capability into cooperation willingness
  - do not turn investment into project opportunity
  - do not include company-sensitive or private data
  - do not allow QIN UI optimization to bypass BASE six-question gate
```

---

## 13. Current Decision

```yaml
Decision: Conditional_Go
Status: Candidate_Usable_Baseline
Reason:
  - Base Field Core is usable as a minimum foundation.
  - It is intentionally incomplete but structurally rebuildable.
  - It now includes QIN x BASE dual-scale framing.
  - It includes Source-to-Decision UI foundation and implementation table candidates.
  - It avoids direct closure and avoids company/private data.
  - It provides a stable path for later Source, View, Gate, Return, and UI/View split files.
What_This_Does_Not_Do:
  - does not approve doctrine
  - does not merge itself
  - does not mutate Drive or Sheets
  - does not approve ERP product scope
  - does not create production database
  - does not implement UI wireframes
Next_Action:
  - review PR manually
  - confirm Candidate / usable baseline wording remains visible
  - decide whether Source_View_Gate should split into a separate file
  - decide whether Import_Staging_and_Stable_ID_Rule becomes a follow-up file
  - decide whether Analysis_View_Map and Export_Return_Packet_Schema should split into follow-up files
Return_Path: Issue #196 -> PR #197 -> MotherTree review -> Registry / hardening map
```
