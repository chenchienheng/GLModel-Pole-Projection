# C-012｜Whole-Corpus Filter Pass 1 Status

> Status note for `WHOLE_CORPUS_FILTER_PASS_1.md` and its initial handling-decision layer.

---

## 0. Status

- cleanup_id: C-012
- status: Go / Whole-corpus filter pass 1 / Not closeout
- paired_pass: `WHOLE_CORPUS_FILTER_PASS_1.md`
- source_inventory: `current_files.txt`
- routing_source: `EIGHT_GATE_ROUTING_PASS_1.md`
- related_pr: `#270`
- return_to_00: true

---

## 1. One-Line Reading

The corpus is not useless. It is mixed. Pass 1 separates active bones, upgrade targets, merge candidates, archival residue, and candidate extensions.

---

## 2. Pass Coverage

```yaml
Pass_Coverage:
  Inventory_A:
    source: current_files.txt
    paths: 74
    status: classified
  Inventory_B:
    source: PR_270_added_files
    paths: 24
    status: classified_for_inventory_refresh
```

---

## 3. Handling Decisions Used

```yaml
Handling_Decisions:
  - keep
  - update
  - merge
  - split
  - rebind
  - archive
  - retire_when_safe
  - hold_candidate
```

---

## 4. Main Findings

```yaml
Findings:
  corpus_value: high_but_mixed
  dominant_decision: update
  main_risks:
    - naming_boundary_drift
    - authority_or_runtime_overclaim
    - carrier_or_adapter_overreach
    - closeout_inflation
  archive_candidates_are_historical_not_useless: true
  merge_candidates_need_absorption_not_erasure: true
```

---

## 5. Immediate Next Actions

```yaml
Immediate_Next_Actions:
  first:
    id: C012_A
    action: update UNIFIED_ARTIFACT_REGISTER with Pass 1 handling decisions
  second:
    id: C012_B
    action: add PR #270 new files into refreshed corpus inventory
  third:
    id: C013_A
    action: reconcile REPOSITORY_CORPUS_INDEX and ROLE_CLASSIFICATION_TABLE after Pass 1
  hold:
    action: do not archive or retire files until user review
```

---

## 6. Non-Promotion Rules

Do not promote:

| From | To |
|---|---|
| Pass 1 decision | final deletion |
| archive candidate | useless file |
| merge candidate | erased value |
| update need | broken file |
| keep | approved doctrine |
| hold_candidate | active runtime |

---

## 7. Judgment

```yaml
C012_Judgment:
  Whole_Corpus_Filter_Pass_1: Go
  Inventory_A_Classified: true
  Inventory_B_Classified: true
  Ready_For_Artifact_Register_Update: true
  Closeout: false
```
