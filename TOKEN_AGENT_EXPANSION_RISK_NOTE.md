# Token / Agent Expansion Risk Note

> Group Expansion Module Paused
>
> Purpose: record why group expansion, multi-agent routing, and persistent agent habitat escalation should remain disabled until token, cost, retry, tool, context, and human-review gates are stable.

---

## 0. Status

- note_version: v0.1
- status: Advisory Governance Record / No-Go for group expansion
- related_gates: G7 Return & Recycle, G5 Habitat & Carrier, G4 Authority & Dispatch
- runtime_status: no_runtime
- monitoring_status: no_external_monitoring
- billing_control_status: no_external_billing_control
- closeout: false
- return_to_00: true

---

## 1. One-Line Reading

群組擴充模組暫停維持停用。原因是同步與多節點擴張可能造成 token 異常峰值提升；在 Token Budget、Retry Limit、Tool Allowlist、Context Recycle、Human Review Gate 尚未穩定前，不應啟動類 OpenClaw 多代理或持久 agent 棲地。

---

## 2. Current Observation

Observed user-side peak, stated by user:

```text
約 3671.6 萬 tokens / day
```

If that peak repeated for 30 days:

```text
約 11.01 億 tokens / month
```

Boundary:

```text
This is an advisory token-equivalence risk estimate, not an actual billing statement.
```

Current interpretation:

```text
high consumption, but human-controlled and strongly recycled into reusable structure.
```

---

## 3. Risk Amplification

If multi-agent systems, container / sandbox sessions, or persistent agent habitat are enabled without gates, token and tool cost may expand through:

1. automatic retry
   - agent reads, fails, searches, reruns, revises, reads logs, and retries again
2. tool output re-entering context
   - repo, logs, traces, docs, search results, and file contents become repeated token input
3. multi-agent task splitting
   - a single task becomes several specialist tasks plus an integration task
4. persistent runtime surfaces
   - session, runtime, storage, search, file, and environment costs may appear beyond text tokens
5. memory / skill / snapshot / trace accumulation
   - the work process itself becomes a readable, writable, replayable cost source

---

## 4. Estimated Risk Level

Current mode:

```text
High consumption, but with recycling.
```

Ungoverned agent mode may become:

```text
High consumption, high dissipation, high cost risk.
```

Rough qualitative levels:

| Mode | Risk Reading |
|---|---|
| Human-controlled peak | small-team-scale token flow |
| Light agent mode | team / lab-scale experiment risk |
| Medium-high multi-agent mode | enterprise-grade burn-risk pattern |
| OpenClaw-like multi-agent expansion | extreme scenario may approach very high API / tool-cost exposure |

Boundary:

```text
These are API / agent-equivalent risk estimates, not current charges.
```

---

## 5. Required Gates Before Re-Enabling

Group expansion or multi-agent habitat must remain disabled until the following exist:

- daily token ceiling
- per-task token budget
- retry limit
- tool allowlist
- no web by default
- no writeback by default
- container session limit
- context recycle
- snapshot filter
- human review before escalation
- stop condition
- cost / token audit log
- Skill / Atlas / Finding recycle requirement

---

## 6. Structural Interpretation

The current high-use pattern demonstrates a key XuanLing distinction:

```text
XuanLing is not special because it uses fewer tokens.
It is special when high token flow is converted into reusable structural assets.
```

Current recycling supports:

1. Human Origin / Source Anchor
   - user gives direction, interrupts, re-anchors, reviews, and stops uncontrolled branching
2. Qinyi / XAFD / Gate
   - Qinyi helps classify, decompose, downgrade, structure, and return the work
3. LOR / XLA / Living Atlas
   - tasks return as documents, rules, naming windows, security scans, architecture windows, case modules, and candidate patches

---

## 7. Decision

```yaml
Decision:
  group_expansion_module: No-Go
  multi_agent_expansion: No-Go
  persistent_agent_habitat_escalation: No-Go
  reason: token/cost/security/retry/tool/context gates are not yet stable
```

Resume condition:

```yaml
Resume_Only_After:
  - token_budget_defined
  - retry_limit_defined
  - tool_allowlist_defined
  - context_recycle_defined
  - human_review_gate_defined
  - cost_audit_log_defined
  - controlled_small_scope_task_tested
```

---

## 8. Boundary Statement

This note is an advisory governance record, not an external execution log.

Qinyi does not currently operate external monitoring, billing control, runtime control, or autonomous shutdown unless explicitly connected to authorized tools with logs and return path.

---

## 9. Non-Promotion Rules

Do not promote:

| From | To |
|---|---|
| token peak estimate | actual bill |
| advisory risk note | runtime control |
| group expansion idea | enabled agent swarm |
| persistent habitat concept | deployed persistent runtime |
| cost-risk estimate | verified invoice |
| No-Go note | external shutdown mechanism |
| high usage | token capital |
| recycling claim | approved governance maturity |

---

## 10. Closing Sentence

High token flow without 回收 is burn.
High token flow with 源錨、價鍵、Gate and 回流 becomes structure.
