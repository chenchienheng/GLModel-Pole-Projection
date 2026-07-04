# C-013｜Register Reconciliation Pass 1

> Purpose: reconcile `REPOSITORY_CORPUS_INDEX.md`, `ROLE_CLASSIFICATION_TABLE.md`, and `UNIFIED_ARTIFACT_REGISTER.md` after C-012 Whole-Corpus Filter Pass 1.

---

## 0. Status

- cleanup_id: C-013
- pass_version: v0.1
- status: Candidate / Register Reconciliation Draft
- source_register: `UNIFIED_ARTIFACT_REGISTER.md`
- source_filter: `WHOLE_CORPUS_FILTER_PASS_1.md`
- inventory: `current_files.txt`
- related_pr: `#270`
- closeout: false
- return_to_00: true

---

## 1. One-Line Reading

The repo no longer needs several parallel registers claiming verified truth. It needs one active artifact register, one corpus index, and one role table that all agree on gates, handling decisions, and candidate boundaries.

---

## 2. Current Register State

| Register | Current Problem | Required Action |
|---|---|---|
| `UNIFIED_ARTIFACT_REGISTER.md` | updated to v0.2 but still marked partial | keep as current source-of-truth candidate |
| `REPOSITORY_CORPUS_INDEX.md` | still says fully reconciled (00-05), but misses new PR artifacts | downgrade to gate-aware v0.4, point to unified register |
| `ROLE_CLASSIFICATION_TABLE.md` | old role classes, no eight-gate column, includes historical/absent files as verified | add gate supplement or update to v0.3 after review |
| `current_files.txt` | refreshed to include PR #270 artifacts | now usable as current inventory basis |

---

## 3. Source of Truth Decision

For the current branch:

```yaml
Source_Of_Truth:
  active_artifact_register: UNIFIED_ARTIFACT_REGISTER.md
  current_inventory: current_files.txt
  filtering_decisions: WHOLE_CORPUS_FILTER_PASS_1.md
  routing_table: EIGHT_GATE_ROUTING_PASS_1.md
  readable_mainline: XUANLING_ARCHITECTURE_WINDOW_v0_9.md
```

This does not make any file approved doctrine.
It only defines current reconciliation order.

---

## 4. Reconciliation Rules

```yaml
Reconciliation_Rules:
  R1: current_files.txt defines current inventory scope
  R2: UNIFIED_ARTIFACT_REGISTER.md carries handling decisions
  R3: REPOSITORY_CORPUS_INDEX.md should summarize, not duplicate every judgment
  R4: ROLE_CLASSIFICATION_TABLE.md should classify by role and gate, not claim final verification
  R5: historical files may remain referenced, but should not be marked active unless present in current inventory
  R6: keep/update/merge/archive/hold_candidate are review states, not final actions
```

---

## 5. Mismatch Findings

### 5.1 Corpus index mismatch

`REPOSITORY_CORPUS_INDEX.md` still claims `fully reconciled (00-05)`, but the branch has moved beyond 00-05 family-only indexing.

It now needs to acknowledge:

- source-anchor files
- namespace governance
- security spine
- temporal sequence
- token capital
- Codex skill loop
- architecture window v0.9
- eight-gate routing
- whole-corpus filter pass

### 5.2 Role table mismatch

`ROLE_CLASSIFICATION_TABLE.md` still uses older classes:

- Upper-Order / Sovereignty-Oriented
- Structural Bone
- Carrying Mesh
- Interaction Surface
- Transitional / Stage Note
- Writeback Artifact

These remain useful, but they need eight-gate overlay.

### 5.3 Verified wording risk

Many rows say `verified`.

In the current branch, this should be downgraded or qualified because:

```text
verified in old role table ≠ approved doctrine ≠ current gate-ready status
```

---

## 6. Pass 1 Reconciliation Actions

```yaml
Pass_1_Actions:
  C013_A:
    target: REPOSITORY_CORPUS_INDEX.md
    action: update to gate-aware v0.4 and point to UNIFIED_ARTIFACT_REGISTER.md
  C013_B:
    target: ROLE_CLASSIFICATION_TABLE.md
    action: create or update eight-gate overlay before replacing old classes
  C013_C:
    target: UNIFIED_ARTIFACT_REGISTER.md
    action: keep as current artifact source-of-truth candidate
```

---

## 7. Non-Promotion Rules

Do not promote:

| From | To |
|---|---|
| register reconciliation | closeout |
| current source-of-truth candidate | approved doctrine |
| old verified label | current approval |
| current_files inventory | final ontology |
| role classification | execution permission |
| gate overlay | ownership |

---

## 8. Judgment

```yaml
C013_Judgment:
  Register_Reconciliation_Pass_1: Go
  Unified_Artifact_Register_As_Current_Candidate_Source: Go
  Repository_Corpus_Index_Update: Ready
  Role_Table_Gate_Overlay: Ready
  Closeout: false
```
