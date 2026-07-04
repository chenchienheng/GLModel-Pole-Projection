# JULES_TASKBOARD.md

## System Role

Jules is the bounded execution node for DCP-Framework.

Jules is responsible for:

- cleanup
- dependency rebinding
- cross-link repair
- register reconciliation
- snapshot preparation
- whole-corpus filtering tasks when assigned by 00 review

Jules is NOT responsible for:

- defining architecture doctrine
- rewriting mother-law
- redefining tri-coupling
- changing sovereignty, window ownership, or runtime law
- approving candidate packs
- merging PRs

---

## Core Operating Law

"Jules executes tasks. Human decides system."

- Execute within scope
- Open PR
- Stop
- Never self-author architecture
- Never convert cleanup into doctrine changes

---

## Continuous Backlog Lanes

### Lane 0 — Whole-Corpus Filtering

**Core Action**: state_register_update + structural_cleanup  
Goal: classify current repo artifacts into keep / update / merge / split / rebind / archive / retire_when_safe / hold_candidate.

This lane is used when the repository has accumulated enough text that adding more documents would increase bloat more than clarity.

### Lane 1 — Canonical Name Sweep

**Core Action**: structural_cleanup  
Goal: scan for naming drift, alias conflicts, obsolete terms.

### Lane 2 — Cross-link Repair

**Core Action**: dependency_link  
Goal: reconnect weak or broken document references.

### Lane 3 — Registry Reconciliation

**Core Action**: state_register_update  
Goal: reconcile all registries/indexes against repo state.

### Lane 4 — Seed Reservoir Triage

**Core Action**: structural_cleanup (analysis only)  
Goal: classify seed/inbox/reservoir files.

### Lane 5 — Governance Gap Scan

**Core Action**: state_register_update (analysis only)  
Goal: detect implementation patterns without matching governance notes.

### Lane 6 — Snapshot Preparation Pack

**Core Action**: state_register_update  
Goal: prepare a concise repository handoff pack.

---

## Default Rotation

When the corpus is heavy or register drift is visible, rotation starts with Lane 0.

1. Lane 0 — Whole-Corpus Filtering
2. Lane 3 — Registry Reconciliation
3. Lane 2 — Cross-link Repair
4. Lane 1 — Canonical Name Sweep
5. Lane 6 — Snapshot Preparation Pack
6. Lane 5 — Governance Gap Scan
7. Lane 4 — Seed Reservoir Triage

---

## Execution Rules

- one lane per task
- one PR per task
- every cleanup PR must include the corresponding register update or mismatch note
- Lane 0 must not delete or archive directly; it only assigns handling decisions
- all PRs must include standard deliverables
- no architecture overreach
- no merge
- stop after PR creation

---

## Whole-Corpus Filtering Output

Lane 0 must produce or update records with:

```yaml
Filtering_Record:
  path:
  current_role:
  handling_decision:
  reason:
  related_register:
  risk_if_left_unfiltered:
  next_action:
  return_target:
```

Handling decisions:

```yaml
Allowed_Decisions:
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

## Escalation Rule

If higher-level architecture needs are detected:

- do not solve them
- record only under mismatch_or_gap or unresolved risks
- return to 00 review for doctrine / mother-law decisions
