# Cleanup Queue Register

> Durable cleanup queue for current known contamination, residue, normalization, and whole-corpus filtering targets.
> Purpose: prevent pollution from remaining diffuse and unnamed.
>
> This queue does not assume every queued item should be deleted.
> It records what must be cleaned, normalized, isolated, merged, archived, or rewritten.

---

## 0. Core Reading

Cleanup is not equal to destruction.
Cleanup means:

- remove ambiguity
- reduce contamination
- normalize naming
- isolate residue
- preserve seed value where possible
- merge overlapping active records
- retire inactive residue after trace is preserved

Therefore each item in the queue should receive:

- a contamination reading
- a priority level
- a handling mode
- a target state
- a return path

---

## 1. Queue Fields

Each cleanup item should eventually include:

- `cleanup_id`
- `scope`
- `source_branch_or_path`
- `contamination_status`
- `priority_level`
- `handling_mode`
- `target_state`
- `reason`
- `dependency`
- `status`
- `return_target`

---

## 2. Current Cleanup Queue

| ID | Scope | Source | Contamination Status | Priority | Handling Mode | Target State | Reason | Status |
|---|---|---|---|---|---|---|---|---|
| C-001 | family naming drift | `01_runtime_spine/` | contaminated | P1 | isolate + normalize | rebind into `01_runtime-spine/` or retire residue | underscore family conflicts with canonical runtime spine family | resolved |
| C-002 | family naming drift | `03_board_orchestration/` | contaminated | P1 | isolate + normalize | rebind into `03_board-orchestration/` or retire residue | duplicate-family naming drift in orchestration layer | resolved |
| C-003 | family naming drift | `04_adapter_layer/` | contaminated | P1 | isolate + normalize | rebind into `04_adapter-layer/` or retire residue | duplicate-family naming drift in adapter layer | resolved |
| C-004 | branch residue | `xuanling-write-test-20260405-d` | contaminated_candidate | P1 | isolate + retire_when_safe | remove branch residue after confirming no audit value remains | test-only branch adds clutter and ambiguity | queued |
| C-005 | file residue | `00_mother-law/WRITE_TEST.md` | construction_residue | P2 | isolate + retire_when_safe | archive or remove after branch decision | visible write-test artifact with low structural value | queued |
| C-006 | mixed family concentration | `00_mother-law/` | mixed_unverified | P1 | triage + selective rebind | split clean seed / residue / contamination | very high value family but likely mixed layers | queued |
| C-007 | mixed family concentration | `03_board-orchestration/` | mixed_unverified | P1 | triage + selective rebind | stable orchestration core separated from stage residue | dense operational family with likely mixed material | queued |
| C-008 | mixed family concentration | `01_native_board/` | mixed_unverified | P2 | isolate + classify | preserve stable board logic, isolate temporal residue | diagnostics, heartbeat, and board logic are mixed | resolved |
| C-009 | schedule design drift | scheduling artifacts without effect proof | construction_residue + runtime_risk | P1 | bind to effect register | every schedule linked to owner/output/proof | named schedule without runtime effect risks static pollution | queued |
| C-010 | static corpus accumulation | large text corpus without unified dynamic registry | contamination_risk | P0-P1 | rebind into dynamic register | turn static corpus into dynamic artifact database | static pile risks becoming residue mass | active |
| C-011 | github issue state | `main` | state_desync | P1 | close stale issues | close #1, #2, #6, #9, #15, #16, #17, #18, #20, #37 | superseded/merged tasks cluttering board | queued |
| C-012 | whole-corpus filtering | `current_files.txt` + root registers | state_desync + bloat_risk | P0 | classify + keep/update/merge/archive/retire | every current file assigned one handling decision | current work must shift from additive writing to whole-corpus filtering | active |
| C-013 | register overlap | `REPOSITORY_CORPUS_INDEX.md` / `ROLE_CLASSIFICATION_TABLE.md` / `UNIFIED_ARTIFACT_REGISTER.md` | duplicate_active_registers | P0 | reconcile + merge roles | one source-of-truth register path with linked support registers | overlapping registers cause status and scope drift | active |
| C-014 | status terminology drift | status fields across registers | maturity_inflation_risk | P0 | normalize via glossary | use `CANONICAL_STATUS_GLOSSARY.md` for status terms | pending/addressed/resolved/verified/completed are not used consistently | active |
| C-015 | runtime wording ambiguity | runtime notes and status files | claim_inflation_risk | P0 | clarify + bind to glossary | semantic-runtime and executable-runtime remain distinct | runtime language can be mistaken for deployed platform capability | active |
| C-016 | non-linear topology misread | 1 / 12 / 64 runtime maps | ladder_misread_risk | P1 | update adjacent topology notes | one-chain, windows, and gates read as authority-ring topology | avoids flattening權圈 into linear staircase | active |
| C-017 | whole-ecosystem topology sphere alignment | `EXTERNAL_NODE_ONCHAIN_SPEC.md` + `ECOSYSTEM_TOPOLOGY_SPHERE_ALIGNMENT_ADDENDUM.md` | flat_tool_cluster_risk | P0-P1 | bind families to topology-sphere roles | external nodes classified by dependency, authority, coupling, return, replacement, and tri-coupled status | prevents GitHub-only reading and ordinary tool-cluster flattening | active |
| C-018 | persistent agent habitat module | `MODULE_14_PERSISTENT_AGENT_HABITAT.md` | long_running_agent_runtime_gap | P0-P1 | bind to habitat valence + review return | define habitat, persistence, context continuity, and review return as XuanLing runtime landing grammar | OpenAI/Ona shows long-running agents need secure persistent work habitats, not only models | active |
| C-019 | namespace pollution extraction | `NAMESPACE_REGISTRY.md` + `NAMING_POLLUTION_RULES.md` | namespace_layer_collapse_risk | P0 | classify + boundary + public exposure control | every name receives layer, purpose, forbidden misuse, exposure boundary, and candidate status | prevents Qinyi/XuanLing/XLA/XLEN/XAFD/CoreTri/private names/cases/valences from contaminating one another | active |
| C-020 | active restructuring task readability | `ACTIVE_RESTRUCTURING_TASK_MAP.md` | governance_code_opacity | P1 | restore human-readable task names | each cleanup front has both visible task name and internal code | prevents internal governance codes from hiding task purpose from the human reviewer | active |
| C-021 | security threat model and adapter hardening | `SECURITY_THREAT_MODEL.md` + `SECURITY_FINDINGS_REGISTER.md` + `AGENT_INSTRUCTION_INTEGRITY_SPEC.md` + `ADAPTER_SECURITY_BASELINE.md` | governance_security_risk | P0 | build security layer baseline | protect instruction integrity, adapter red gates, evidence boundary, credentials, public/private boundary, and runtime activation | DCP/XuanLing security risk is governance text being wrongly promoted into instruction, permission, fact, runtime, or external writeback | active |
| C-022 | temporal state sequence and state singularity | `TEMPORAL_STATE_SEQUENCE_SPEC.md` | false_sameness_risk | P0-P1 | bind logs/rules/settings/functions to time-bound state events | every operational object must carry time, record, impact, extension, feedback, and review path | prevents logs, rules, settings, functions, PRs, and agent actions from collapsing into false same-state records | active |

---

## 3. Current Highest-Priority Cleanup Fronts

### Front A — Whole-Corpus Filtering

Items:

- C-010
- C-012
- C-013
- C-014
- C-015

Reason:

- the repository is past the stage where adding more prose is the main value
- the next value comes from classification, status discipline, and dynamic registry conversion

### Front B — Naming Normalization

Items:

- C-001
- C-002
- C-003

Reason:

- duplicate-family naming drift directly damages indexing, classification, extraction, and future merge safety

### Front C — Seed Family Triage

Items:

- C-006
- C-007
- C-008

Reason:

- high-value families already identified, but still mixed with residue or contamination

### Front D — Scheduling Effect Cleanup

Items:

- C-009

Reason:

- schedule drift creates structural-operational mismatch and silent runtime weakness

### Front E — Topology Misread Cleanup

Items:

- C-016

Reason:

- 1 / 12 / 64 must be read as authority-ring topology rather than linear ladder

### Front F — Whole-Ecosystem Topology Sphere Alignment

Items:

- C-017

Reason:

- XuanLing must not collapse into GitHub-only reading or ordinary tool cluster grouping
- ecosystem families must be read by dependency, authority, coupling face, carrier shell, return path, replacement safety, depth governance, and tri-coupled status

### Front G — Persistent Agent Habitat

Items:

- C-018

Reason:

- long-running agents need controlled habitat, persistence, context continuity, and review return
- XuanLing should absorb this as runtime landing grammar without prematurely claiming deployed runtime

### Front H — Namespace Pollution Extraction

Items:

- C-019

Reason:

- names collapse when they lack layer, purpose, boundary, exposure status, and candidate state
- Qinyi / XuanLing / XLA / XLEN / XAFD / CoreTri / private names / case modules / valences must remain distinct

### Front I — Security Threat Model and Adapter Hardening

Items:

- C-021

Reason:

- DCP / XuanLing is not currently a conventional production web app; security risk concentrates in instruction integrity, adapter writeback, credentials, evidence integrity, public/private boundary, and runtime activation
- markdown must not become authority, and future adapters must not become external writeback without red gates

### Front J — Temporal State Sequence and State Singularity

Items:

- C-022

Reason:

- logs, rules, settings, functions, PRs, and agent actions are time-bound state events
- no original event can occur twice at the same time, place, and state
- time, record, impact, extension, and feedback must remain visible for auditability

---

## 4. Cleanup Rule

Default cleanup order:

1. filter the current corpus into keep / update / merge / archive / retire decisions
2. reconcile active registers against `current_files.txt`
3. normalize status terms through `CANONICAL_STATUS_GLOSSARY.md`
4. normalize naming drift
5. triage mixed families
6. isolate obvious residue
7. bind schedule to effect proof
8. convert static text field into dynamic registry-backed corpus
9. bind ecosystem families into topology-sphere roles
10. bind persistent agent habitat modules into runtime landing grammar
11. extract namespace pollution into name registry and naming rules
12. bind security threat model and adapter hardening into XLA / LOA
13. bind temporal-state events into audit and return sequence

---

## 5. Filtering Rule

Every current file should receive one handling decision:

```yaml
Handling_Decision:
  - keep
  - update
  - merge
  - split
  - rebind
  - archive
  - retire_when_safe
  - hold_candidate
```

Default decision:

```text
update existing active register before creating a new concept document.
```

---

## 6. Anti-Pollution Rule

A text or branch becomes pollution not only by being wrong,
but by remaining:

- unnamed
- unclassified
- unowned
- unreturned
- unnormalized
- duplicated across active registers
- status-ambiguous
- tool-clustered without authority and return
- runtime-ambitious without habitat, evidence, and review boundaries
- namespace-ambiguous or public-unsafe
- security-ambiguous where text, adapters, credentials, evidence, or intake can be promoted without review
- temporal-ambiguous where records, copies, settings, or logs collapse into false same-state claims

This cleanup queue exists to prevent that drift.

---

## 7. Related Artifacts

Read together with:

- `CONTAMINATION_AND_PRIORITY_POLICY.md`
- `LEGACY_SEED_CONTAMINATION_TRIAGE.md`
- `LEGACY_SEED_NAMING_NORMALIZATION_PLAN.md`
- `BRANCH_TOPOLOGY_AND_CLEANUP_REGISTER.md`
- `DYNAMIC_CORPUS_DATABASE_NOTE.md`
- `SCHEDULING_EFFECTIVENESS_GAP_NOTE.md`
- `ARTIFACT_RECORD_SCHEMA.md`
- `CANONICAL_STATUS_GLOSSARY.md`
- `EXTERNAL_NODE_ONCHAIN_SPEC.md`
- `ECOSYSTEM_TOPOLOGY_SPHERE_ALIGNMENT_ADDENDUM.md`
- `MODULE_14_PERSISTENT_AGENT_HABITAT.md`
- `NAMESPACE_REGISTRY.md`
- `NAMING_POLLUTION_RULES.md`
- `ACTIVE_RESTRUCTURING_TASK_MAP.md`
- `SECURITY_THREAT_MODEL.md`
- `SECURITY_FINDINGS_REGISTER.md`
- `AGENT_INSTRUCTION_INTEGRITY_SPEC.md`
- `ADAPTER_SECURITY_BASELINE.md`
- `TEMPORAL_STATE_SEQUENCE_SPEC.md`

---

## 8. Suggested Next Artifacts or Updates

1. regenerate `UNIFIED_ARTIFACT_REGISTER.md` from `current_files.txt`
2. update `ROLE_CLASSIFICATION_TABLE.md` against the current file inventory
3. compress overlapping cleanup language into this queue
4. reflect ecosystem topology-sphere alignment in `ECOSYSTEM_FAMILY_ONBOARDING_ROADMAP.md`
5. connect Module 14 to `MODEL_INVOCATION_CONTRACT.md` and `JULES_TASKBOARD.md`
6. link namespace registry to future public release / Zenodo packaging rules
7. link Security Layer to future adapter / webhook / OAuth / evidence specs
8. link Temporal State Sequence to artifact record schema and future machine-readable event log
9. future machine-readable cleanup queue layer

---

## 9. Status

- cleanup_queue_created: true
- known_contamination_items_named: true
- whole_corpus_filtering_added: true
- ecosystem_topology_sphere_alignment_added: true
- persistent_agent_habitat_added: true
- namespace_pollution_extraction_added: true
- security_threat_model_added: true
- temporal_state_sequence_added: true
- highest_priority_fronts_defined: true
- dynamic_registry_conversion_active: true
- return_to_00: true
