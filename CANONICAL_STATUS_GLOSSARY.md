# Canonical Status Glossary

> Canonical maturity and status terms for DCP-Framework repository governance.

---

## 0. Status

- glossary_version: v0.1
- status: candidate_control_glossary
- purpose: prevent maturity inflation, runtime ambiguity, and register desynchronization
- return_to_00: true

---

## 1. Core Rule

Status terms must distinguish concept, candidate, review, implementation, evidence, and deployment.

Do not promote a text state into an execution state.

---

## 2. Canonical Status Terms

| Term | Meaning | Cannot Mean |
|---|---|---|
| `candidate` | proposed or draft structure that needs review | approved, deployed, or active runtime |
| `active` | currently used as an operating reference | final or immutable |
| `verified` | checked against available source evidence | externally validated in all contexts |
| `addressed` | a named issue has a treatment path or artifact | fully closed in every downstream register |
| `resolved` | current register considers the item settled | no future review ever needed |
| `completed` | specified task scope is complete | global system closeout |
| `pending` | not yet checked or not yet finished | failure |
| `trace` | preserved for lineage or history | active policy |
| `superseded` | replaced by newer artifact | safe to delete without review |
| `residue` | low-value or noisy leftover | automatically deletable without audit |
| `archived` | retained but inactive | current operating rule |

---

## 3. Runtime Terms

| Term | Meaning | Rule |
|---|---|---|
| `semantic_runtime` | conceptual or operational reading of state flow | may appear in architecture notes |
| `repo_runtime_spine` | repository-internal continuity and writeback rules | not equal to external software runtime |
| `executable_runtime` | actually running software, service, API, or automation | requires tool evidence, logs, or deployment proof |
| `No_Runtime` | no verified executable runtime | does not invalidate conceptual runtime mapping |

---

## 4. Non-Promotion Rules

```yaml
Non_Promotion:
  Candidate: not Approved
  Summary: not Decision
  Record: not Execution
  Review_Packet: not Approval
  Return_Packet: not Closeout
  PR: not Deployed
  Semantic_Runtime: not Executable_Runtime
  Repository_Whitepaper_Candidate: not Market_Validation
```

---

## 5. Register Synchronization Rule

When one register changes an item from pending to addressed, related registers should be checked for the same item.

Minimum related registers:

- `DISCONTINUITY_REGISTER.md`
- `CLEANUP_QUEUE_REGISTER.md`
- `NAMING_DRIFT_RESOLUTION_REGISTER.md`
- `UNIFIED_ARTIFACT_REGISTER.md`
- `REPOSITORY_CORPUS_INDEX.md`
- `ROLE_CLASSIFICATION_TABLE.md`

---

## 6. Next Action

Apply this glossary to `STATUS.md`, `DISCONTINUITY_REGISTER.md`, `DYNAMIC_CORPUS_DATABASE_NOTE.md`, and `CLUSTER_COVERAGE_NOTE.md`.
