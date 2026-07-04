# Import Staging and Stable ID Rule v0.1

> Status: Candidate / usable baseline
> Placement: `03_field-governance/`
> Related issues: #213
> Related Linear: QIN-118, QIN-119, QIN-130, QIN-144, QIN-162, QIN-163, QIN-164
> Upstream: `BASE_FIELD_CORE_v0_1.md`, `SOURCE_VIEW_GATE_v0_1.md`
> Purpose: define how imported or user-collected data enters staging, receives or matches stable IDs, passes review gates, and only then feeds governed BASE views.

---

## 0. Core

Imported data enters staging first. Staging is not production BASE. Proposed IDs are not confirmed stable IDs. Only reviewed, matched, and gate-passed records may feed governed views.

This rule prevents user spreadsheets, tool extracts, model summaries, and collected notes from being treated as source-of-truth records before review.

```text
Import = received external, internal, user-collected, or tool-generated material.
Staging = safe landing zone before production BASE exposure.
Stable ID = durable identifier after review, matching, or creation.
Governed BASE = reviewed source-to-decision foundation available to views.
```

---

## 1. Import Staging Rule

```yaml
Import_Staging_Rule:
  Landing_Table: Import_Staging
  Rule:
    - all imported data enters staging first
    - staging records may be reviewed, matched, rejected, or promoted
    - staging records must not feed production strategy, market, governance, public, or export views before review
```

Minimum staging record:

```yaml
Import_Staging_Record:
  mandatory_fields:
    - Import_Batch_ID
    - Import_Row_ID
    - Source_Origin
    - Submitted_By
    - Raw_File_or_URL
    - Intake_Date
    - Proposed_Source_ID
    - Proposed_Entity_ID
    - Evidence_Level
    - Review_Status
    - Return_Path
  conditional_fields:
    - Proposed_Project_ID
    - Proposed_Evidence_ID
    - Proposed_Relation_ID
    - Proposed_Capability_ID
    - Proposed_Constraint_ID
    - Proposed_Opportunity_ID
  output_fields_after_review:
    - Confirmed_Source_ID
    - Confirmed_Entity_ID
    - Confirmed_Project_ID
    - Confirmed_Evidence_ID
    - Confirmed_Relation_ID
    - Review_Decision
    - QA_Gate_ID
    - Change_Log_ID
```

---

## 2. Stable ID Rule

Stable IDs are durable identifiers used by BASE, Views, QIN surfaces, exports, and return packets.

```yaml
Stable_ID_Families:
  Source_ID: source identity
  Entity_ID: organization / agency / company / person / tool / region identity
  Project_ID: project, case, asset, packet, or event identity
  Evidence_ID: source-backed evidence object
  Relation_ID: relation bridge between source, entity, project, capability, or event
  Capability_ID: verified or candidate capability
  Constraint_ID: legal, tax, trade, certification, internal control, or responsibility boundary
  Opportunity_ID: opportunity candidate after evidence and gate review
  Return_Packet_ID: return/closure/version-traceable packet identity
```

Rule:

```text
A proposed ID is only a proposed anchor.
A confirmed ID requires review, matching, creation, or explicit acceptance.
```

---

## 3. Proposed ID vs Confirmed ID

```yaml
ID_State_Model:
  Proposed_ID:
    meaning: suggested by import, model extraction, user input, or preliminary mapping
    can_support:
      - staging review
      - duplicate search
      - alias check
      - candidate mapping
    cannot_support:
      - production view
      - export packet
      - decision claim
      - approved opportunity
  Confirmed_ID:
    meaning: stable identifier accepted after review
    can_support:
      - governed view
      - relation bridge
      - evidence index
      - dashboard aggregation
      - export packet when boundary is included
```

Do not rename a Proposed_ID into a Confirmed_ID without a review decision.

---

## 4. Duplicate / Alias / Conflict Handling

```yaml
Duplicate_Alias_Conflict_Rule:
  Duplicate_Candidate:
    condition: imported record appears to match an existing confirmed record
    action: hold promotion until duplicate check completes
  Alias_Candidate:
    condition: imported name differs but likely points to existing entity/source/project
    action: create alias bridge only after review
  Conflict:
    condition: imported record contradicts existing BASE record
    action: mark Hold or Needs_Human_Verification
  Rejected_Noise:
    condition: record is irrelevant, untraceable, or not source-safe
    action: retain reject reason without production exposure
```

Conflict does not mean the new record is false. It means production exposure is blocked until review resolves the conflict.

---

## 5. Evidence Level Assignment

```yaml
Evidence_Level:
  A_Official:
    examples: official government source, regulator, statutory filing, official company source when used within scope
  B_Reliable_Secondary:
    examples: reputable database, established industry report, verified secondary material
  C_Media_or_Signal:
    examples: article, market signal, commentary, unverified market mention
  D_Unverified:
    examples: raw import, unsourced note, unreviewed tool extraction
  Internal_Controlled:
    examples: internal task, review note, decision log, verification result
```

Evidence level assigned in staging is provisional until reviewed.

---

## 6. Review Status Vocabulary

```yaml
Review_Status:
  - Draft
  - Submitted
  - Needs_Clarification
  - Pending_Source_Attachment
  - Pending_ID_Match
  - Duplicate_Candidate
  - Alias_Candidate
  - Conflict
  - Accepted
  - Rejected
  - Hold

Review_Decision:
  - Confirmed_New_Record
  - Matched_Existing_Record
  - Alias_Merged
  - Duplicate_Rejected
  - Conflict_Hold
  - Rejected_Noise
  - Needs_Human_Verification
```

Review status describes the staging state. Review decision describes what happened after review.

---

## 7. Promotion from Staging to Governed BASE

```yaml
Promotion_Requirements:
  - Review_Status must be Accepted or explicitly mapped to a terminal decision
  - Proposed IDs must be matched, created, or rejected
  - Confirmed stable IDs must be assigned where required
  - Evidence level must be reviewed
  - Source/View boundary must be declared
  - QA_Gate_ID must be recorded when gate status changes
  - Change_Log_ID must be recorded for production BASE mutation
  - Return_Path must be available
```

Promotion target examples:

```yaml
Promotion_Targets:
  Source_Ledger: Confirmed_Source_ID
  Entity_Master: Confirmed_Entity_ID
  Project_Asset_Master: Confirmed_Project_ID
  Evidence_Index: Confirmed_Evidence_ID
  Relation_Bridge: Confirmed_Relation_ID
  Capability_Ledger: Capability_ID
  Constraint_Gate: Constraint_ID
  Return_Packet_Index: Return_Packet_ID
```

---

## 8. QIN/View Intake Rule

QIN and View surfaces can collect input, but collected input must enter staging first.

```yaml
QIN_View_Intake_Rule:
  QIN_Can:
    - collect user-submitted rows
    - accept uploaded spreadsheets or notes
    - route unclear items to review
    - show import status
    - ask for missing source/evidence
    - return review results
  QIN_Cannot:
    - write imported data directly into production BASE
    - treat user input as verified evidence
    - convert Proposed_ID to Confirmed_ID automatically
    - expose unreviewed staging rows to strategy dashboards
    - let generated summaries overwrite source fields
```

QIN improves usability. It does not bypass staging.

---

## 9. Failure Modes

```yaml
Failure_Modes:
  Direct_To_BASE_Import:
    risk: source pollution and unrecoverable identity drift
  Proposed_ID_Treated_As_Confirmed:
    risk: false joins, duplicate entities, bad dashboards
  Spreadsheet_Treated_As_Source_Of_Truth:
    risk: user collection becomes unsupported fact
  Model_Extraction_Treated_As_Human_Verified:
    risk: automation output becomes false evidence
  Duplicate_Unresolved_But_Exposed:
    risk: double counting and false trend analysis
  Conflict_Forced_Into_View:
    risk: dashboard hides uncertainty
  No_Return_Path:
    risk: imported data cannot be corrected or audited
```

---

## 10. Examples

### 10.1 Public database import

```yaml
Input: downloaded public dataset
Staging: Import_Staging
Proposed_ID: Proposed_Source_ID + Proposed_Entity_ID
Gate: source identity review + duplicate check
Promotion: Source_Ledger / Entity_Master after review
Return: Change_Log + QA_Gate
```

### 10.2 User-collected company list

```yaml
Input: spreadsheet of company names and notes
Staging: Import_Staging
Proposed_ID: Proposed_Entity_ID
Gate: alias / duplicate / evidence-level review
Promotion: Entity_Master only after match or new-record decision
Forbidden: treating company list as market base without review
Return: Decision_Log / Return_Packet_Index
```

### 10.3 Tool extraction from PDF

```yaml
Input: extracted table from PDF
Staging: Import_Staging
Proposed_ID: Proposed_Source_ID + Proposed_Evidence_ID
Gate: source attachment + extraction verification
Promotion: Evidence_Index after review
Forbidden: treating extraction as original source
Return: QA_Gate / Change_Log
```

### 10.4 QIN intake form

```yaml
Input: user submits candidate source or row through QIN
Staging: Import_Staging
View: Import_Review_View
Gate: QIN_BASE_Six_Question_Gate + Source_View_Gate
Promotion: governed BASE only after review decision
Return: QIN task result + Return_Packet_Index
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
  - do not treat imported spreadsheets as governed BASE
  - do not turn Proposed_ID into Confirmed_ID without review
  - do not turn Pending into Fact
  - do not let QIN/View intake bypass staging
  - do not let generated summaries overwrite source records
```

---

## 12. Current Decision

```yaml
Decision: Conditional_Go
Status: Candidate_Usable_Baseline
Reason:
  - Import staging and stable ID rules are required after BASE_FIELD_CORE and SOURCE_VIEW_GATE.
  - The rule prevents unreviewed imports from entering production BASE or governed views.
  - It preserves proposed/confirmed ID separation.
  - It supports QIN/View intake without bypassing BASE review.
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
  - decide whether Analysis_View_Map should become the next split-out file
Return_Path: Issue #213 -> PR -> MotherTree review -> later Analysis_View_Map split-out
```
