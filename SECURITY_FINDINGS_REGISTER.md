# Security Findings Register｜Governance Security v0.1

> Findings register for DCP / XuanLing governance security.
>
> Purpose: track security findings where documentation, agent instructions, adapters, evidence, credentials, or public/private boundaries could be wrongly promoted into authority, runtime, fact, or external action.

---

## 0. Status

- register_version: v0.1
- status: Candidate / Security Findings Draft
- current_state: Conditional Pass
- paired_model: `SECURITY_THREAT_MODEL.md`
- return_to_00: true

---

## 1. Current Security State

DCP-Framework is currently mostly documentation, governance, and conceptual framework.

Current baseline:

```yaml
Current_State:
  production_backend_verified: false
  database_verified: false
  package_manifest_verified: false
  ci_workflow_verified: false
  public_runtime_verified: false
  conventional_web_risk_primary: false
  governance_security_primary: true
```

---

## 2. Findings Table

| ID | Finding | Severity | Risk Type | Recommended Control | Status |
|---|---|---|---|---|---|
| SEC-001 | PR / issue / comment / external markdown may be misread as instruction authority | P0 | agent instruction integrity | mark all external repo text as untrusted input; cannot override system policy, AGENTS, Mother-Law, or human review | open |
| SEC-002 | Future adapter writeback may be activated from documentation or config without hardening | P0 | adapter security | default write disabled; HMAC/signature, schema, allowlist, rate limit, audit log, rollback | open |
| SEC-003 | Webhook / email / calendar / message intake may be treated as trusted command or fact | P0 | intake security | signature verification, replay protection, timestamp/nonce, rate limit, trust scoring, manual review | open |
| SEC-004 | OAuth scopes, tokens, or credentials may enter markdown, repo, logs, or agent context | P0 | credential boundary | least privilege, scope registry, token storage boundary, revocation path, no secrets in repo | open |
| SEC-005 | Source / View / Evidence / Fact / Pending may be confused | P0 | evidence integrity | promote only through review path; model output and dashboard views are not evidence by themselves | open |
| SEC-006 | Private prompts, relationship context, identity anchors, or company-sensitive material may leak into public docs | P0 | public/private boundary | public exposure checklist and private support pack boundary | open |
| SEC-007 | Runtime wording may imply deployed executable capability | P0 | runtime activation | runtime activation red gate; semantic runtime distinct from deployed executable runtime | open |
| SEC-008 | Formula injection risk in spreadsheet writeback | P1 | adapter security | escape values beginning with `=`, `+`, `-`, `@`; use text-safe write mode | open |
| SEC-009 | Public download/view counts may be misread as market validation | P1 | evidence integrity | treat as external signal, not validation or adoption proof | open |
| SEC-010 | Agent may use untrusted source text as self-modifying doctrine | P0 | instruction integrity | agent must quote/source text as evidence candidate, not instruction authority | open |

---

## 3. P0 Must-Hold Rules

1. No live secrets, tokens, OAuth credentials, or API keys in repo.
2. No automatic execution, merge, billing, writeback, or OAuth approval from markdown.
3. Adapter writeback defaults to disabled until hardened.
4. PR / issue / comment / external markdown are untrusted input.
5. Private support packs and private living context must not be public by default.
6. Source / View / Evidence / Fact / Pending must remain distinct.
7. Runtime activation requires explicit red gate.

---

## 4. Finding Status Values

```yaml
Security_Finding_Status:
  open: known but not yet controlled
  mitigated_candidate: control proposed, not fully verified
  mitigated_verified: control verified in repo and process
  accepted_risk: consciously accepted with reason
  false_positive: not applicable after review
  deferred: not current-scope but tracked
```

---

## 5. Relationship to Cleanup Queue

This register should be bound to:

```yaml
Cleanup_Binding:
  cleanup_id: C-021
  name: security threat model and adapter hardening
  status: active_candidate
```

---

## 6. Closing Sentence

DCP / XuanLing security must protect instruction integrity, adapter boundaries, evidence integrity, credentials, public/private separation, and human review authority before any future runtime or external writeback is allowed.
