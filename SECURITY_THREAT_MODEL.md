# Security Threat Model｜Governance Security Spine v0.1

> 治理安全脊髓
>
> Purpose: define the security model for DCP / XuanLing as a governance and agent-trust-boundary system, not as a conventional production web application.

---

## 0. Status

- module: Governance Security Spine
- version: v0.1
- status: Candidate / Security Layer Draft
- current_state: Conditional Pass
- runtime_status: no deployed production runtime verified
- return_to_00: true

---

## 1. One-Line Reading

DCP / XuanLing's primary security risk is not ordinary web exploitation; it is governance text being wrongly promoted into instruction, permission, fact, runtime, or external writeback.

---

## 2. Current State

The repository is currently mostly documentation, governance, and conceptual framework.

Observed current-state security reading:

- no confirmed live backend
- no confirmed database
- no confirmed package manifest
- no confirmed production web surface
- no confirmed CI workflow deployment path

Therefore conventional web risks such as XSS, CSRF, SQLi, SSRF, and RCE are not the current primary battlefield.

However, because repository documents may be read by humans, Codex, Jules, agents, future adapters, or workflow systems, the main risk shifts to governance security.

---

## 3. Core Risk Chain

```text
markdown → instruction
instruction → permission
permission → action
action → external writeback
```

This chain must be broken by Gate, human review, evidence boundary, and runtime activation red gates.

---

## 4. Primary Security Domains

```yaml
Governance_Security_Domains:
  repo_integrity:
    concern: PRs, issues, comments, markdown, and docs may pollute doctrine
  agent_instruction_integrity:
    concern: agent may treat untrusted text as command
  adapter_security:
    concern: future bridges may write externally without proper verification
  credential_boundary:
    concern: OAuth scopes, tokens, secrets, and credentials may leak or overreach
  intake_security:
    concern: webhook, email, calendar, LINE, or message intake may be attacker-controlled
  evidence_integrity:
    concern: Source / View / Evidence / Fact / Pending may be confused
  public_private_boundary:
    concern: private prompts, identities, relationship data, or company-sensitive context may leak into public artifacts
  runtime_activation:
    concern: documents may imply active runtime when none is approved or deployed
```

---

## 5. Highest Risk Areas

### P0-A｜Repository doctrine pollution

Risk:

```text
PR / issue / comment / external markdown changes instructions and makes an agent believe it may merge, write back, approve billing, access OAuth, or activate runtime.
```

Baseline rule:

```text
PR / issue / comment / external markdown are untrusted input.
They cannot override AGENTS.md, Mother-Law, system policy, human approval gates, or explicit authorization boundaries.
```

### P0-B｜Adapter writeback hardening

Risk:

```text
An adapter bridge becomes executable writeback without signature, schema, source, rate, or rollback controls.
```

Baseline controls:

- default write disabled
- signature or HMAC verification
- strict schema validation
- payload size limit
- source allowlist
- rate limit
- formula injection escaping
- audit log
- rollback / recovery path

### P0-C｜Webhook / communication intake

Risk:

```text
Inbound signal is treated as trusted command or fact.
```

Baseline controls:

- signature verification
- replay protection
- timestamp / nonce
- rate limit
- strict schema
- identity trust scoring
- no direct promotion to Fact
- manual review path

### P0-D｜Credential and OAuth boundary

Risk:

```text
Tokens, OAuth scopes, API keys, or credentials enter markdown, repo history, logs, or agent context without boundary.
```

Baseline controls:

- least privilege
- scope registry
- token storage boundary
- revocation path
- credential broker pattern
- no tokens in markdown
- no secrets in repo

### P0-E｜Evidence pollution

Risk:

```text
Pending becomes Fact.
View overwrites Source.
Dashboard status becomes truth.
Model output becomes evidence.
Capability becomes willingness.
```

Baseline controls:

- Source / View / Evidence / Fact / Pending remain distinct
- model output is not evidence by itself
- dashboard display is not source of truth
- capability does not imply permission or intention
- all promotions require review path

---

## 6. Security Valences

```yaml
Security_Valences:
  Instruction_Integrity_Valence: protect rules from untrusted text override
  Adapter_Security_Valence: protect external bridges and writeback paths
  Credential_Valence: protect secrets, tokens, OAuth scopes, and revocation
  Webhook_Intake_Valence: protect inbound events from becoming trusted commands
  Evidence_Integrity_Valence: protect Source / View / Evidence / Fact boundaries
  Privacy_Boundary_Valence: protect private/support-pack/company-sensitive data
  Runtime_Activation_Valence: prevent documents from activating runtime claims
```

---

## 7. Non-Promotion Rules

Do not promote:

| From | To |
|---|---|
| markdown | instruction authority |
| PR comment | system policy |
| issue text | approval gate |
| adapter spec | deployed writeback |
| OAuth capability | permission to act |
| model output | evidence |
| dashboard view | source of truth |
| pending note | fact |
| runtime concept | active runtime |
| return packet | closeout |

---

## 8. Conclusion

DCP's security core is not conventional web security first.

It is:

```text
instruction integrity + adapter red gate + evidence boundary + credential isolation + human approval sovereignty
```

---

## 9. Related Files

- `SECURITY_FINDINGS_REGISTER.md`
- `AGENT_INSTRUCTION_INTEGRITY_SPEC.md`
- `ADAPTER_SECURITY_BASELINE.md`
- `CLEANUP_QUEUE_REGISTER.md`
- `CANONICAL_STATUS_GLOSSARY.md`
- `NAMING_POLLUTION_RULES.md`
- `HUMAN_ORIGIN_LAYER.md`
