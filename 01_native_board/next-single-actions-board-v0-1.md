# Next Single Actions Board v0.1

一句核心：
靈絡若只有狀態沒有推進，就會停在靜態自我描述；本板的目的，是將當前最重要的缺口壓成少數可立即執行的 next single actions。

## 0. 狀態
Draft v0.1

## 1. 使用原則
- 一次只保留少數高優先 action
- 每一項都需有 source ref、主責窗與預期輸出
- 完成後需回送 00 並更新 dashboard / alignment status

## 2. 當前優先動作
| Action ID | 主責窗 | Action | 預期輸出 | 收口位置 |
|---|---|---|---|---|
| NSA-001 | 07 | 建立雙層回報格式（欄位 + 白話） | human-readable knowledge packet | 00 / rollup |
| NSA-002 | 02 + 10 | 打通 filter-dispatch-execute-verify-writeback 接力 | validated toolchain packet | 00 / rollup |
| NSA-003 | 01 + 09 | 補強 seed-main-cloud readback 對位 | readback alignment result | 00 / rollup |
| NSA-004 | 00 | 統一 adjudication output 欄位 | adjudication result schema | 00 / dashboard |
| NSA-005 | 08 + 12 | 壓出外顯場與世界場的最小前提 | feasible worldfield surface note | 00 / dashboard |

## 3. 完成判定
任一 action 若要視為完成，至少需：
- 有 source_ref
- 有 actual_result
- 有 mismatch_or_gap 更新
- 有 next_action 更新
- 已回送 00

## 4. 收斂語句
靈絡的推進，不靠一次做完所有事，而靠每輪都把最重要的缺口壓成少數明確 action，持續回送 00，持續形成下一輪可續接骨。
