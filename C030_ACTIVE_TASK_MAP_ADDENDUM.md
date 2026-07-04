# C-030 Active Task Map Addendum｜知識鍛造任務補遺

> Purpose: add C-030 to the human-readable active task layer without rewriting the full active map.

---

## 0. Status

- task_id: C-030
- task_name: 翾靈知識鍛造
- status: Conditional Pass / Controlled Knowledge Forge / Not closeout
- paired_directive: `XUANLING_KNOWLEDGE_FORGE_DIRECTIVE.md`
- paired_status: `C030_KNOWLEDGE_FORGE_STATUS.md`
- inventory_cross_link: Pending
- return_to_00: true

---

## 1. One-Line Reading

不是讓代理去學會世界，而是讓代理學會如何把世界帶回翾靈。

---

## 2. Active Task Row

| Task Name | Internal ID / File | What It Means | Status |
|---|---|---|---|
| 翾靈知識鍛造 | C-030 / `XUANLING_KNOWLEDGE_FORGE_DIRECTIVE.md`, `C030_KNOWLEDGE_FORGE_STATUS.md` | turn allowed external knowledge into reviewable, downgradeable, reusable XuanLing capability modules | Conditional Pass |

---

## 3. Required Flow

Source → Extract → Translate → Forge → Gate → Recycle

---

## 4. Boundary

This task does not approve external action, runtime activation, public release, or core promotion.

Forge output remains candidate until reviewed.

---

## 5. Next Cross-Link

```yaml
Next:
  C030_A: link to C027 token risk
  C030_B: link to C029 lean coverage
  C030_C: link to future skill library
  C030_D: retry inventory cross-link in smaller patch if safe
```
