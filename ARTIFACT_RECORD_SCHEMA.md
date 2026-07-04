# Artifact Record Schema

> Canonical record schema for turning the repository corpus from static text storage into a dynamic, queryable, and return-aware artifact field.

---

## 0. Status

- schema_version: v0.1
- Document_Status: Candidate
- Control_Type: artifact_record_schema
- purpose: support registry reconciliation, cleanup, routing, and return tracking
- return_to_00: true

---

## 1. Core Reading

The repository should not grow only by adding more documents. Each artifact should become classifiable, routable, and returnable.

A document is architecture-ready only when its record can show source, role, boundary, state, carrier, lineage, and return path.

---

## 2. Required Record Fields

```yaml
Artifact_Record:
  artifact_id:
  path:
  title:
  current_status:
  artifact_mode:
  structural_family:
  network_role:
  chain_face:
  window_binding:
  authority_level:
  source_role:
  carrier_role:
  branch_origin:
  claim_ceiling:
  contamination_status:
  priority_level:
  handling_mode:
  related_artifacts:
  supersedes:
  superseded_by:
  writeback_state:
  last_verified_date:
  mismatch_or_gap:
  next_action:
  return_target:
```

---

## 3. Status Values

Use only canonical glossary terms for `current_status`. Do not invent new maturity terms when an existing value is sufficient.

Canonical set:

```yaml
current_status:
  - active
  - candidate
  - verified
  - addressed
  - resolved
  - completed
  - pending
  - trace
  - superseded
  - residue
  - archived
```

Status mapping notes:

- Use `pending`, not `pending_review`.
- Use `superseded` or `archived`, not `deprecated`, unless a later glossary revision explicitly adds `deprecated`.
- Use `artifact_mode` for readiness / package type terms such as `Review Pack`, `Per-Source Revised Pack`, or `Build-Ready Pack`.
- Do not use `current_status` to claim approval, deployment, or executable runtime.

---

## 4. Artifact Modes

```yaml
artifact_mode:
  - review_pack
  - per_source_revised_pack
  - build_ready_pack
  - editable_route
  - visual_route
  - qa_report
  - artifact_manifest
  - resume_card
  - not_applicable
```

Artifact mode is not approval state. `build_ready_pack` means a package can support build planning discussion; it does not mean an implemented Flow, deployment, runtime, or owner approval exists.

---

## 5. Handling Modes

```yaml
handling_mode:
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

## 6. Branch Origin

`branch_origin` records where the artifact entered the review surface.

Examples:

```yaml
branch_origin:
  pr: "#270"
  branch: "audit/lean-dynamic-sync-v0-1-clean"
  source_window:
  source_round:
```

Branch origin is lineage metadata. It does not imply approval, runtime, deployment, or source ownership.

---

## 7. Anti-Bloat Rule

A new document should not be added if the same function can be handled by updating an existing active register.

New documents are justified only when they:

1. define a missing control schema,
2. consolidate repeated material,
3. record a user-approved decision,
4. or enable dynamic corpus operation.

---

## 8. Next Action

Use this schema to regenerate `UNIFIED_ARTIFACT_REGISTER.md` from `current_files.txt` after C014 status patches are complete.
