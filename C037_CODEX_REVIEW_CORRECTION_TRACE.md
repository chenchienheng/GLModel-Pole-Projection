# C037｜Codex Review Correction Trace

> Trace-only review of Codex PR #270 comments after C014 required patches. This file does not resolve GitHub threads, approve PR #270, declare runtime, or close the review queue.

---

## 0. Status

```yaml
Document_Status: Candidate
Review_Status: Codex_Review_Correction_Trace
Related_PR: 270
Gate: Green
Cost_Gate: Green
Runtime_State: No_Runtime
Approval_State: Not_Approved
Closeout_State: Not_Closeout
External_Writeback_State: No_External_Writeback
Source:
  - GitHub PR270 review threads
  - PR270 branch files
  - C014_STATUS_PROPAGATION_PASS_FINDINGS.md
  - C014_REQUIRED_PATCHES_RESULT.md
Evidence_Level:
  - Direct_PR_Review_Threads
  - Direct_Repo_File_Inspection
  - Architecture_Window_Classification
```

---

## 1. One-Line Result

Codex review comments are valid as review signals, not doctrine. After C014, the schema/glossary P0 issue is repaired enough to continue, but the largest unresolved cluster is now inventory/register propagation: many active addenda and support artifacts are still visible to humans while missing from the authoritative inventory/register path.

---

## 2. Trace Summary

```yaml
Codex_Review_Trace_Summary:
  Overall: Partial
  Fixed_By_C014:
    - Artifact schema status values now align with canonical glossary
    - branch_origin is now present in artifact schema
    - C037 status card no longer mixes review status, document state, and closeout state
  Still_Unresolved:
    - inventory/register omissions for C030-C039 and several support artifacts
    - active architecture-axis / valence promotion concerns
    - No_Runtime casing inconsistency
    - C037 acceptance levels use undeclared Needs Review
    - Cleanup queue requires return_target but table has no return-target column
    - Qinyi submap version mismatch
    - YAML repeated key issue in Lingluo note
  Next_Mode: trace_then_patch
```

---

## 3. Fixed / Addressed Table

| Codex Comment Cluster | Current Handling | Evidence | Trace Status |
|---|---|---|---|
| Keep schema statuses in canonical glossary | `ARTIFACT_RECORD_SCHEMA.md` now uses only canonical `current_status` values and explicitly says to use `pending`, not `pending_review`, and `superseded`/`archived`, not `deprecated` | `ARTIFACT_RECORD_SCHEMA.md` status values section | Fixed for P0 |
| Preserve branch origin | `ARTIFACT_RECORD_SCHEMA.md` now includes `branch_origin` and explains it as lineage metadata | `ARTIFACT_RECORD_SCHEMA.md` required fields + branch origin section | Fixed |
| Split mixed C037 status card metadata | `C037_PR270_VERIFICATION_ACCEPTANCE_STATUS.md` now separates `Review_Status`, `Document_Status`, `Matrix_State`, and `Closeout_State` | C037 status card | Fixed |
| Define Build-Ready as non-status readiness mode | `CANONICAL_STATUS_GLOSSARY.md` now defines Build-Ready as artifact/readiness mode, not implemented/deployed/approved/runtime | Canonical glossary non-status terms | Fixed |
| Activity / dashboard overpromotion | Codex activity rollup note now states activity dashboard is not Cost Gate, token meter, billing proof, or Native Loop proof | Codex activity rollup note | Addressed as evidence boundary |

---

## 4. Partial / Unresolved Table

| Cluster | Representative Comment | Current Finding | Trace Status | Required Correction |
|---|---|---|---|---|
| Inventory / register propagation | Add C030-C039 and support artifacts to inventory/register path | `current_files.txt` still lacks many new addenda and later C-front support files; active map and support files can diverge from reconciliation source | Unresolved / P0-P1 | Create inventory/register refresh pass, or mark later addenda as non-authoritative support until registered |
| Review queue registration | Register `PR270_REVIEW_QUEUE.md` | Review queue exists and is operating, but is not in `current_files.txt` | Unresolved / P1 | Add to inventory/register path or explicitly mark as external queue control note |
| C037 matrix acceptance levels | Matrix defines Pass / Conditional Pass / Needs Repair / No-Go / Not Reviewed, but rows use Needs Review | `Needs Review` remains outside declared levels | Unresolved / P1 | Replace Needs Review with Not Reviewed or add Needs Review as declared level |
| Depth Governance axis | Depth Governance added as axis, but matrix still has no scored column | Coverage matrix has section 1.6 but active matrix still has five score columns | Unresolved / P1 | Add score column or defer Depth Governance from scored axis |
| New axis / valence promotion | Feasible-domain axes, security valences, livingness valence, namespace valence, C035/C036/C038/C039 promotion concerns | Several files introduce or activate new axis-like language inside PR270 freeze | Unresolved / P1 | Keep as candidate support, move to addenda, or record explicit user/00 approval |
| No_Runtime casing | `No_Runtime` vs `no_runtime` | Canonical glossary uses `No_Runtime`; some PR files still use lowercase `no_runtime` | Unresolved / P1 | Normalize or define casing rule |
| Cleanup queue return target | Queue requires return_target but table lacks return target column | Review comment remains valid until table is patched | Unresolved / P1 | Add Return Target column or defer requirement |
| Qinyi submap version | filename v0.1, content says v0.2 | Versioned path mismatch remains a review risk | Unresolved / P1 | Align embedded version with filename or create v0.2 path and update references |
| Lingluo YAML repeated key | repeated `not_equal_to` keys collapse in YAML | Machine-readable reuse risk remains unless patched | Unresolved / P2 | Convert repeated keys to list |
| Knowledge Forge output schema | output contract lacks explicit status/gate field | Status drift risk remains | Unresolved / P2 | Add status/gate field to output schema |
| Agent instruction hierarchy | user task vs repo governance ordering | Codex flags possible conflict where repo docs appear above active user authorization | Unresolved / P1 | Clarify that explicit scoped user authorization can override repo guidance within policy/safety limits |

---

## 5. Observability vs Evidence Table

| Signal | Can Support | Cannot Support | Classification |
|---|---|---|---|
| Codex activity card / token rollup | high-activity observability, cost-risk modeling | billing proof, real-time meter, Native Loop, safe-to-run signal | Observability Signal |
| Codex PR review comments | review risks, correction candidates | doctrine, final authority, automatic merge-readiness | Review Signal |
| C014 patch files | repaired status schema/glossary mismatch | global closeout, full register correctness | Evidence Support |
| Human-controlled virtual lab evidence | governance density under human relay | autonomous runtime, security proof, agent connection proof | Candidate Evidence |
| Model-provider surface addendum | provider-switch governance surface | official provider availability, secrets handling approval | Candidate XLA Input |

---

## 6. Overpromotion Risk List

Do not promote:

- Codex review comment to doctrine
- resolved GitHub thread to global closeout
- candidate addendum to approved architecture axis
- active task map row to authoritative register entry before inventory/register alignment
- high token usage to safety proof
- activity dashboard to Cost Gate
- human relay to Native Loop
- provider surface candidate to official provider support
- build-ready pack to implemented Flow
- evidence support to verified proof

---

## 7. Required Corrections

```yaml
Required_Corrections:
  P0:
    - Refresh current_files / register path for all active PR270 support files, or explicitly mark unregistered addenda as non-authoritative support.
  P1:
    - Normalize No_Runtime casing.
    - Align C037 matrix acceptance levels.
    - Add or defer Depth Governance score column.
    - Split candidate axis/valence materials from active doctrine surfaces or record explicit approval.
    - Add return-target column to cleanup queue if return_target remains required.
    - Align Qinyi submap file/content version.
  P2:
    - Convert Lingluo repeated YAML keys to list.
    - Add status/gate field to Knowledge Forge output schema.
```

---

## 8. Next Queue Item

```yaml
Next_Queue_Item:
  Name: Schema / Glossary / Inventory Check
  Reason: The dominant unresolved Codex review cluster is inventory/register propagation after many candidate support files were added.
  Gate: Green
  Cost_Gate: Green
  Required_Output:
    - Inventory_Gap_Table
    - Register_Path_Gap_Table
    - Active_vs_Candidate_Surface_Table
    - Minimal_Patch_List
```

---

## 9. Resume Card

```yaml
Resume_Card:
  Park_State: Codex review correction trace completed as candidate evidence
  Resume_When: "Continue PR270 Review Queue with Schema / Glossary / Inventory Check."
  Current_Blocker: "Inventory/register path does not yet consistently include active and support artifacts added after early C014/C037 work."
```

---

## 10. Final Judgment

```yaml
Codex_Review_Correction_Trace: Complete_For_Trace
Review_Comments_As_Doctrine: No-Go
C014_P0_Status_Mismatch: Fixed
Inventory_Register_Propagation: Unresolved
New_Axis_Promotion_Risk: Unresolved
Next: Schema_Glossary_Inventory_Check
```
