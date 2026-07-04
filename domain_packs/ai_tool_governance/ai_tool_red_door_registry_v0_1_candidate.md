# AI Tool Red Door Registry v0.1 Candidate

Status: Candidate / Domain Pack Support / Not Approved / No Runtime
Source: 2026-07-04 signal structure extraction report
Use As: AI model and tool governance registry candidate
Do Not Use As: tool adoption approval, procurement decision, production readiness, or runtime spec
Related PR: #298
Master Gate: #297

## Core

Model strength is not tool authorization. Lower cost, open weights, API access, or agentic ability may improve capability, but they do not clear data, authority, writeback, or production gates.

## Review Questions

Before using any model or AI tool, ask:

- Where does input data go?
- Is input retained?
- Who operates the service?
- Can the tool be audited?
- Is sensitive or company data involved?
- Does it have writeback capability?
- Can it be limited to non-sensitive benchmark use?
- Is access stable or policy-gated?

## Red Doors

- Model Capability != Tool Authorization.
- Cheap Inference != Safe Carrier.
- Open Weight != Approved Deployment.
- API Access != Data Boundary Clearance.
- Agentic Ability != Writeback Permission.
- Benchmark Result != Production Readiness.
- Model Released != Stable Access.
- Tool Connected != Authorized Action.

## Review Matrix

```yaml
AI_Tool_Review_Row:
  tool:
  provider:
  carrier:
  deployment_mode: "API / hosted / local / self-host / unknown"
  retention_known:
  sensitive_data_allowed: false
  writeback_capability:
  auditability:
  cost_gate:
  policy_gate:
  allowed_use:
    - "non-sensitive benchmark"
    - "public-safe rewrite"
    - "sanitized comparison"
  forbidden_use:
    - "sensitive data"
    - "secrets"
    - "unapproved writeback"
    - "production decision"
  status: "Candidate / Review Needed"
```

## Final Rule

AI tool evaluation starts from data boundary and authority, not leaderboard capability.