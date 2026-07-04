# C-031 Active Task Map Addendum｜Token 試錯回收任務補遺

> Purpose: add C-031 to the human-readable active task layer without rewriting the full active map.

---

## 0. Status

- task_id: C-031
- task_name: Token 試錯回收
- status: Added as trial recycling candidate / Not closeout
- paired_pattern: `TOKEN_TRIAL_RECYCLING_PATTERN.md`
- paired_status: `C031_TOKEN_TRIAL_RECYCLING_STATUS.md`
- return_to_00: true

---

## 1. One-Line Reading

燒本身不是問題；無回收、無邊界、無停損的燒才是問題。

---

## 2. Active Task Row

| Task Name | Internal ID / File | What It Means | Status |
|---|---|---|---|
| Token 試錯回收 | C-031 / `TOKEN_TRIAL_RECYCLING_PATTERN.md`, `C031_TOKEN_TRIAL_RECYCLING_STATUS.md` | convert captured trial errors and drift into reusable protection rules | Added as trial recycling candidate |

---

## 3. Boundary

This task records a candidate protection pattern at conversation, support-text, and architecture-design layers.

It does not claim implemented external monitoring, deployed runtime, or automatic enforcement.

---

## 4. Next Cross-Link

```yaml
Next:
  C031_A: link to C023 Token Capital
  C031_B: link to C027 Token Risk
  C031_C: link to C029 Lean Coverage
  C031_D: link to future status propagation
```
