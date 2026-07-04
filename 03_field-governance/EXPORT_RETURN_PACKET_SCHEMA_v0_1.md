# Export Return Packet Schema v0.1

> Status: Candidate / usable baseline
> Placement: `03_field-governance/`
> Related issues: #217
> Related Linear: QIN-118, QIN-119, QIN-130, QIN-139, QIN-140, QIN-144, QIN-155, QIN-156, QIN-162, QIN-163, QIN-164, QIN-165, QIN-167
> Upstream: `BASE_FIELD_CORE_v0_1.md`, `SOURCE_VIEW_GATE_v0_1.md`, `IMPORT_STAGING_AND_STABLE_ID_RULE_v0_1.md`, `ANALYSIS_VIEW_MAP_v0_1.md`
> Purpose: define how exported reports, dashboard exports, consultant packs, strategy packets, and QIN-generated delivery packets must carry Evidence, Boundary, Non-Approval, Packet State, and Return Path.

---

## 0. Core

Exportable does not mean approved. Readable does not mean validated.

A report, dashboard export, consultant pack, strategy packet, or QIN-generated delivery packet must carry evidence, boundary, non-approval statement, packet state, and return path.

An exported packet without return path is not reusable system progress.

```text
Export Packet = portable view produced from governed sources, views, analysis, or decision-support surfaces.
Return Packet = writeback path for review, correction, closure, re-open, or next action.
Non-Approval Boundary = explicit statement that export does not equal approval.
Packet State = declared state of the exported packet.
```

---

## 1. Export Packet Rule

```yaml
Export_Packet_Rule:
  Must_Carry:
    - source/view references
    - evidence index references
    - boundary statement
    - non-approval disclaimer
    - packet state
    - return path
  Must_Not:
    - imply approval because it is exportable
    - hide evidence level
    - flatten pending / confirmed / rejected states
    - expose private or full dependency-chain material when output is public-facing
```

Export packets may support communication, review, or delivery. They do not approve doctrine, market strategy, partner claims, opportunities, or decisions by themselves.

---

## 2. Return Packet Rule

```yaml
Return_Packet_Rule:
  Required_Return_Targets:
    - Decision_Log
    - Change_Log
    - QA_Gate
    - Return_Packet_Index
    - GitHub_Issue_or_PR_when_structural
    - Linear_Task_when_actionable
  Required_Return_Fields:
    - Return_Packet_ID
    - Return_Path
    - Return_Reason
    - Changed_State
    - Pending_Decision
    - Next_Action
```

A packet without return path becomes static output. Static output is not reusable system progress.

---

## 3. Required Packet Fields

```yaml
Export_Return_Packet_Record:
  mandatory_fields:
    - Export_Packet_ID
    - Packet_Title
    - Packet_Type
    - Source_View_Refs
    - Evidence_Index_Refs
    - Boundary_Statement
    - Non_Approval_Disclaimer
    - Packet_State
    - Created_By
    - Created_At
    - Return_Packet_ID
    - Return_Path
  conditional_fields:
    - Decision_Log_ID
    - QA_Gate_ID
    - Change_Log_ID
    - Reviewer
    - Review_Status
    - Expiry_or_Review_By
```

Mandatory fields are required for reusable packets. Conditional fields become mandatory when the packet is used in review, decision, QA, change, or time-sensitive contexts.

---

## 4. Evidence-Carry Requirements

```yaml
Evidence_Carry:
  Required:
    - Evidence_Index_Refs
    - Source_Class_Map
    - Evidence_Level_Map
    - Can_Support
    - Cannot_Support
    - Date_Basis_when_relevant
    - Data_Period_when_relevant
  Must_Not:
    - remove cannot-support statements
    - average evidence levels into unexplained confidence
    - cite view output as source when source evidence exists
    - allow unverified staging to appear as fact
```

Evidence must travel with the export. If evidence is detached, the packet is not decision-safe.

---

## 5. Boundary Statement Requirements

```yaml
Boundary_Statement:
  Must_State:
    - what the packet can support
    - what the packet cannot support
    - which source/view layer it reads
    - which gates were passed
    - what remains pending or excluded
    - where correction or review returns
```

A boundary is not decorative text. It is the packet's use-control layer.

---

## 6. Non-Approval Disclaimer Requirements

```yaml
Non_Approval_Disclaimer:
  Required_Distinctions:
    - Exportable is not approved
    - Readable is not validated
    - Market signal is not market validation
    - Capability is not cooperation willingness
    - Investment is not project opportunity
    - Matrix score is not approved recommendation
    - Dashboard state is not source of truth
    - Consultant pack is not doctrine
    - Public-facing output is not full dependency-chain disclosure
```

If a packet can be reused outside its original context, the non-approval disclaimer must remain visible.

---

## 7. Packet State Vocabulary

```yaml
Packet_State:
  - Draft
  - Candidate
  - Internal_Review
  - External_Review
  - Exported_Candidate
  - Returned_For_Revision
  - Superseded
  - Rejected
  - Archived
  - Approved_Only_If_Separately_Authorized
```

`Approved_Only_If_Separately_Authorized` is a reserved state. It must not be used as automatic promotion from export or review.

---

## 8. Exportable vs Approved Distinction

```yaml
Exportable_vs_Approved:
  Exportable:
    meaning: packet can be shared, reviewed, or delivered within boundary
    cannot_support:
      - doctrine approval
      - market validation
      - partner approval
      - opportunity pipeline approval
      - production database implementation
  Approved:
    meaning: separately authorized by explicit decision authority
    requires:
      - decision record
      - authority
      - scope
      - date
      - evidence boundary
      - return path
```

Export is a movement state. Approval is a decision state.

---

## 9. Dashboard / Report / Consultant Pack / QIN Export Examples

### 9.1 Dashboard export

```yaml
Packet_Type: Dashboard_Export
Reads:
  - Governed_View
  - Fact_Table
  - Evidence_Index
Required:
  - evidence level carry
  - dashboard state boundary
  - return path
Forbidden:
  - treating dashboard state as source truth
```

### 9.2 Strategy report packet

```yaml
Packet_Type: Strategy_Report
Reads:
  - Strategy_PointCloud_View
  - Policy_Trend_View
  - Market_Signal_View
Required:
  - can_support / cannot_support
  - non-approval disclaimer
  - decision log reference if used in decision meeting
Forbidden:
  - turning signal map into approved strategy
```

### 9.3 Consultant pack

```yaml
Packet_Type: Consultant_Pack
Reads:
  - Export_Packet_View
  - Evidence_Index
Required:
  - scope boundary
  - private/source limitation
  - return route for comments or revisions
Forbidden:
  - treating consultant-facing package as doctrine
```

### 9.4 QIN-generated delivery packet

```yaml
Packet_Type: QIN_Delivery_Packet
Reads:
  - QIN/View surface
  - governed view
  - evidence index
Required:
  - QIN_BASE_Six_Question trace
  - non-approval disclaimer
  - Return_Packet_ID
Forbidden:
  - letting QIN output bypass source/view, import/staging, or analysis-view gates
```

---

## 10. Return Path and Closure Interaction

```yaml
Return_Closure_Interaction:
  Returned_For_Revision:
    action: update packet state and create Change_Log entry
  Superseded:
    action: link replacement packet and preserve old packet index
  Archived:
    action: keep packet accessible but not active
  Rejected:
    action: record reason and prevent reuse as active candidate
  Approved_Only_If_Separately_Authorized:
    action: require explicit decision authority, scope, date, and Decision_Log_ID
```

Closure of a packet is not doctrine closure. Packet closure only confirms packet state within its declared scope.

---

## 11. Failure Modes

```yaml
Failure_Modes:
  Export_As_Approval:
    risk: packet movement is mistaken for decision authority
  Pretty_Report_No_Evidence:
    risk: presentation hides weak evidence
  Dashboard_As_Source:
    risk: view state overwrites source truth
  Consultant_Pack_As_Doctrine:
    risk: delivery surface becomes false governance rule
  Missing_Return_Path:
    risk: exported output cannot be corrected, revised, or audited
  Non_Approval_Disclaimer_Removed:
    risk: downstream overclaim
  Public_Output_Leaks_Dependency_Chain:
    risk: private or internal structure exposure
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
  - do not treat export as approval
  - do not turn consultant pack into doctrine
  - do not turn dashboard export into source of truth
  - do not turn Pending into Fact
  - do not remove non-approval disclaimer when packet leaves its origin context
  - do not let QIN export bypass BASE gates
```

---

## 13. Current Decision

```yaml
Decision: Conditional_Go
Status: Candidate_Usable_Baseline
Reason:
  - Export / return packet schema is required after analysis-view boundaries.
  - It prevents reports, dashboards, consultant packs, and QIN exports from being mistaken as approvals.
  - It preserves evidence carry, boundary statements, packet states, non-approval disclaimers, and return paths.
  - It links field governance back to CSF-017A/B evidence-carry and non-approval export boundary logic.
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
  - decide whether Minimal_Router_Launcher / QIN View read-write gate should become the next split-out file
Return_Path: Issue #217 -> PR -> MotherTree review -> later Minimal_Router_Launcher / QIN View read-write gate
```
