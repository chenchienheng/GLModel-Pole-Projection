# XL20 Field-Proof Boundary v0.1

Status: Candidate / Cleanup Branch / Private Field Boundary / No Runtime / No Merge Approval
Use As: current repository-role and sensitive-data boundary for `XuanLing-20-FieldProof-Xiaoshiguang`
Do Not Use As: production scope, private-source store, customer database, or complete privacy audit

## One-line Core

XL20 remains a private, sanitized field-proof carrier. Private visibility reduces exposure but does not authorize storage of original private conversations, customer data, credentials, payment information, or unrelated product artifacts.

## Repository Role

```yaml
Repo_Role:
  repository: "XuanLing-20-FieldProof-Xiaoshiguang"
  visibility: private
  current_role:
    - "sanitized field proof"
    - "OCF and CUI/GUI boundary patterns"
    - "state, reply-draft, and problem-return card candidates"
    - "owner-review and anti-error rules"
  do_not_use_as:
    - "production runtime"
    - "customer or booking database"
    - "credential or payment store"
    - "private conversation archive"
    - "general game-artifact repository"
```

## Current Alignment

The README and current Active Index are aligned at the reviewed surface. Full repository-tree inspection, recent-commit review, and file-level sensitive-data scanning remain pending.

```yaml
Current_State: ALIGNED_PARTIAL
Verified_Surface:
  - README role
  - current active index
  - no visible open pull requests
Unknown:
  - complete repository tree
  - recent commit paths
  - file-level privacy scan
  - unrelated product or private-case material
```

## Field-Proof Admission Rules

A candidate may remain in XL20 only when all of the following are true:

1. The source has been de-identified or replaced by synthetic data.
2. No credential, payment, customer, booking, or private-message content is present.
3. The artifact demonstrates a bounded field pattern rather than a production claim.
4. Human authority, owner review, stop conditions, and return paths are explicit.
5. The artifact belongs to the current Field Proof object rather than an unrelated project.

## Explicit Separation

- Lightkeep / 微光守塔 is a separate playable-artifact object and is not automatically admitted to XL20.
- A reusable UI or return-card pattern may be selected later, but the full game artifact and private design source remain in their own carriers.
- Private repository visibility does not turn protected life source into repo-safe material.

## Cleanup Queue

1. Complete tree and recent-commit inventory.
2. Run file-level sensitive-data and credential-pattern review.
3. Mark files `ACTIVE / REFERENCE / SUPERSEDED / MOVE_CANDIDATE / ARCHIVE_CANDIDATE`.
4. Confirm that the three-card Field Proof remains the current bounded scope.
5. Do not move or delete files until independent readback and explicit approval.

## Red Doors

- Private Repo != Unlimited Sensitive Storage
- Sanitized != Public-approved
- Field Proof != Product
- UI Pattern != Production App
- Reply Draft != Human Commitment
- Cleanup Branch != Migration Approval
- No Open PR != Complete Alignment

## Final Rule

XL20 should preserve small, inspectable, de-identified field proofs. It must not become a catch-all private warehouse for every experiment or every private source.