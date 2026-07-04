# Adapter Security Baseline

> 外部橋接安全基準
>
> Purpose: define minimum controls before any future adapter, bridge, webhook, sheet bridge, workflow bridge, or external writeback path may be treated as active.

---

## 0. Status

- baseline_version: v0.1
- status: Candidate / Security Layer Draft
- paired_threat_model: `SECURITY_THREAT_MODEL.md`
- paired_findings: `SECURITY_FINDINGS_REGISTER.md`
- return_to_00: true

---

## 1. One-Line Reading

An adapter is not safe because it exists. It becomes safe only when input, identity, authority, schema, writeback, logging, rollback, and review are bounded.

---

## 2. Default Rule

```yaml
Adapter_Default:
  authorized_write: false
  external_writeback: disabled_by_default
  runtime_activation: requires_red_gate
  human_review: required_for_first_activation
```

No adapter may move from spec to active writeback by documentation alone.

---

## 3. Minimum Controls

Every adapter must define:

```yaml
Adapter_Security_Record:
  adapter_name:
  owner_window:
  input_source:
  output_target:
  writeback_surface:
  authorization_mode:
  signature_verification:
  schema_validation:
  payload_limit:
  source_allowlist:
  rate_limit:
  replay_protection:
  audit_log:
  rollback_path:
  review_required:
  failure_mode:
```

---

## 4. Writeback Red Gate

External writeback is forbidden unless all of the following are true:

- writeback is explicitly authorized
- input source is verified
- payload schema is strict
- payload size is limited
- credential scope is least-privilege
- replay protection exists
- audit log exists
- rollback or recovery path exists
- human review path exists

If any control is missing, writeback remains disabled.

---

## 5. Signature / Identity Controls

Inbound adapter signals should use at least one trusted verification method:

- HMAC or signature verification
- timestamp and nonce
- source allowlist
- OAuth identity with bounded scope
- service-account boundary
- manual review for unknown senders

Unverified inbound data is candidate input only.

---

## 6. Schema and Payload Controls

Every adapter input should be validated by strict schema.

Required checks:

- required fields only
- type validation
- enum validation where applicable
- maximum length
- maximum payload size
- no hidden instruction fields
- no direct command execution field unless separately authorized

---

## 7. Spreadsheet / Sheet Bridge Controls

If an adapter writes to spreadsheet-like systems, it must defend against formula injection.

Escape or neutralize values beginning with:

```text
=
+
-
@
```

Recommended controls:

- force text-safe write mode where possible
- prepend apostrophe or equivalent neutralization when needed
- log original and sanitized value
- reject formulas unless explicitly reviewed

---

## 8. Credential Boundary

Adapters must not store secrets in:

- markdown
- repository files
- issue comments
- PR comments
- public logs
- generated summaries
- model context without a credential boundary

Credential controls:

- least privilege
- scope registry
- revocation path
- rotation path
- broker pattern for future runtime
- no static secrets in repo

---

## 9. Audit and Rollback

Every active adapter must return:

- request id
- source identity
- timestamp
- payload hash or summary
- action taken
- target surface
- result
- error state
- rollback path
- reviewer / approver when applicable

---

## 10. Non-Promotion Rules

Do not promote:

| From | To |
|---|---|
| adapter idea | active integration |
| adapter spec | permission to write |
| inbound webhook | trusted command |
| sheet row | verified fact |
| payload schema | authorization |
| OAuth capability | permission to act |
| successful test | approval to run unattended |

---

## 11. Closing Sentence

Adapter security is the red gate between language and external action.

If the adapter cannot prove identity, scope, schema, audit, rollback, and review, it must remain candidate-only.
