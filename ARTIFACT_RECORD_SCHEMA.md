# Artifact Record Schema

> Canonical record schema for turning the repository corpus from static text storage into a dynamic, queryable, and return-aware artifact field.

---

## 0. Status

- schema_version: v0.1
- status: candidate_control_schema
- purpose: support registry reconciliation, cleanup, routing, and return tracking
- return_to_00: true

---

## 1. Core Reading

The repository should not grow only by adding more documents. Each artifact should become classifiable, routable, and returnable.

A document is architecture-ready only when its record can show source, role, boundary, state, and return path.

---

## 2. Required Record Fields

```yaml
Artifact_Record:
  artifact_id:
  path:
  title:
  current_status:
  structural_family:
  network_role:
  chain_face:
  window_binding:
  authority_level:
  source_role:
  carrier_role:
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

Use the canonical glossary for status values. Do not invent new maturity terms when an existing value is sufficient.

Recommended minimum set:

```yaml
current_status:
  - active
  - candidate
  - trace
  - superseded
  - deprecated
  - residue
  - pending_review
  - archived
```

---

## 4. Handling Modes

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

## 5. Anti-Bloat Rule

A new document should not be added if the same function can be handled by updating an existing active register.

New documents are justified only when they:

1. define a missing control schema,
2. consolidate repeated material,
3. record a user-approved decision,
4. or enable dynamic corpus operation.

---

## 6. Next Action

Use this schema to regenerate `UNIFIED_ARTIFACT_REGISTER.md` from `current_files.txt`.
