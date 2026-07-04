# JULES_TASKBOARD.md

## System Role
Jules is the bounded execution node for DCP-Framework.

Jules is responsible for:
- cleanup
- dependency rebinding
- cross-link repair
- register reconciliation
- snapshot preparation

Jules is NOT responsible for:
- defining architecture doctrine
- rewriting mother-law
- redefining tri-coupling
- changing sovereignty, window ownership, or runtime law
- merging PRs

---

## Core Operating Law
"Jules executes tasks. Human decides system."

- Execute within scope
- Open PR
- Stop
- Never self-author architecture

---

## Continuous Backlog Lanes

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
1. Lane 3 — Registry Reconciliation
2. Lane 6 — Snapshot Preparation Pack
3. Lane 2 — Cross-link Repair
4. Lane 1 — Canonical Name Sweep
5. Lane 5 — Governance Gap Scan
6. Lane 4 — Seed Reservoir Triage

---

## Execution Rules
- one lane per task
- one PR per task
- all PRs must include standard deliverables.
- no architecture overreach.
- no merge.
- stop after PR creation.

---

## Escalation Rule
If higher-level architecture needs are detected:
- do not solve them
- record only under mismatch_or_gap or unresolved risks.
