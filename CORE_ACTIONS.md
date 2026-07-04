# CORE_ACTIONS.md

## Purpose
This file defines the minimal operational action system for DCP-Framework.
All repository execution tasks should map to one of the following core actions.

---

## Core Actions

### 1. structural_cleanup
Purpose:
- restore structural consistency without changing doctrine

Includes:
- naming normalization
- seed rebinding
- duplicate consolidation
- safe file inventory correction
- path consistency repair

Excludes:
- architecture rewrite
- doctrine creation
- mother-law modification

Expected output:
- summary
- affected files
- reasoning
- mismatch_or_gap
- unresolved risks
- next single recommended action

---

### 2. dependency_link
Purpose:
- restore or strengthen traceable dependency relationships across files

Includes:
- cross-reference repair
- file-to-file linking
- dependency mapping
- inbound/outbound reference completion
- reciprocal link repair

Excludes:
- new theory creation
- broad semantic reinterpretation
- global architecture redesign

Expected output:
- summary
- affected files
- dependency observations
- mismatch_or_gap
- unresolved risks
- next single recommended action

---

### 3. state_register_update
Purpose:
- keep state-tracking artifacts aligned with actual repository condition

Includes:
- queue updates
- resolution updates
- diff tracking updates
- status reconciliation
- registry/index correction

Excludes:
- speculative status assignment
- doctrine expansion
- architectural decisions

Expected output:
- summary
- affected files
- register changes
- mismatch_or_gap
- unresolved risks
- next single recommended action

---

## Boundary Rules

The following are forbidden for execution nodes unless explicitly authorized by human adjudication:

- architecture_rewrite
- doctrine_definition
- tri_coupling_redefinition
- mother_law_modification
- sovereignty_change
- window_ownership_change
- automatic_merge

---

## Execution Law

All execution work in this repository must satisfy:

1. Every task must map to one core action
2. Every PR must stay within one bounded scope
3. Every PR must be reviewable as one convergence packet
4. If higher-level conflict is detected, record it only under:
   - mismatch_or_gap
   - unresolved risks

---

## Review Standard

A PR passes only if:
- scope is respected
- no forbidden zone is crossed
- changed files are traceable
- terminology remains consistent
- repository state becomes more reviewable, not less

---

## System Law

"Execution may distribute. Final adjudication remains human."
