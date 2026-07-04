# C-037 Active Task Map Addendum｜PR270 驗收矩陣任務補遺

> Purpose: add C-037 to the human-readable active task layer without rewriting the full active map.

---

## 0. Status

- task_id: C-037
- task_name: PR270 Verification / Acceptance Matrix
- status: Added as verification matrix candidate / Not closeout
- paired_matrix: `C037_PR270_VERIFICATION_ACCEPTANCE_MATRIX.md`
- paired_status: `C037_PR270_VERIFICATION_ACCEPTANCE_STATUS.md`
- paired_freeze: `PR270_CONSOLIDATION_FREEZE.md`
- return_to_00: true

---

## 1. One-Line Reading

C-036 已把 1–269 從舊任務群轉成源礦層；#270 不再只是 PR，而是目前翾靈生命化架構的主收斂地層。接下來該凍結擴張，轉入驗證矩陣。

---

## 2. Active Task Row

| Task Name | Internal ID / File | What It Means | Status |
|---|---|---|---|
| PR270 Verification / Acceptance Matrix | C-037 / `C037_PR270_VERIFICATION_ACCEPTANCE_MATRIX.md`, `C037_PR270_VERIFICATION_ACCEPTANCE_STATUS.md` | define review and acceptance questions for #270 after consolidation freeze | Added as verification matrix candidate |

---

## 3. Boundary

This task does not approve merge, closeout, runtime, or doctrine.

It moves #270 from expansion into reviewability.

---

## 4. Next Cross-Link

```yaml
Next:
  C037_A: run C014 status propagation pass
  C037_B: consolidate active-map addenda into a review index
  C037_C: create PR270 return packet draft
  C037_D: identify P0 repairs before merge consideration
```
