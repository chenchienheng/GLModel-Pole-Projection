# C-029 Active Task Map Addendum｜低耗高覆蓋任務補遺

> Purpose: add C-029 to the human-readable active task layer without rewriting the full active map.

---

## 0. Status

- task_id: C-029
- task_name: 低耗高覆蓋運行模式
- status: Added as lean coverage candidate / Not closeout
- paired_pattern: `LEAN_COVERAGE_OPERATING_PATTERN.md`
- paired_status: `C029_LEAN_COVERAGE_OPERATING_PATTERN_STATUS.md`
- return_to_00: true

---

## 1. One-Line Reading

Low-cost high coverage is not achieved by doing less. It is achieved by routing before reading, reading deltas before full context, using registers before raw recall, and recycling useful output into next-round capability.

---

## 2. Active Task Row

| Task Name | Internal ID / File | What It Means | Status |
|---|---|---|---|
| 低耗高覆蓋運行模式 | C-029 / `LEAN_COVERAGE_OPERATING_PATTERN.md`, `C029_LEAN_COVERAGE_OPERATING_PATTERN_STATUS.md` | reduce token/tool/agent waste while preserving coverage, feasibility, flexibility, and stability | Added as lean coverage candidate |

---

## 3. Boundary

```yaml
Boundary:
  Low_Cost_Pattern: Go
  More_Agents_As_Default: No-Go
  More_Context_As_Default: No-Go
  Register_First_Workflow: Go
  Delta_First_Workflow: Go
  Human_Review_Before_Escalation: Go
```

---

## 4. Next Cross-Link

```yaml
Next:
  C029_A: link to UNIFIED_ARTIFACT_REGISTER.md
  C029_B: link to TOKEN_AGENT_EXPANSION_RISK_NOTE.md
  C029_C: link to C014-A Status Propagation Pass
  C029_D: update ACTIVE_RESTRUCTURING_TASK_MAP.md in smaller patch if safe
```
