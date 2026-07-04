# Window Catch-up Protocol v0.1

一句核心：
各窗口不應等待使用者逐一佈達；每一窗在被時間、事件、訊號或 00 指派喚醒時，必須先讀取 00 主骨最新狀態、同步本窗責任與當前限制，再執行本窗最小動作並回 00。

## 0. 狀態
Draft v0.1

## 1. 問題定義
目前風險：
- 使用者需逐窗解釋最新方向
- 各窗只記得本窗舊狀態，未同步 00 最新主骨
- 排程有跑，但不一定讀取最新規則
- 高位窗可能提前膨脹，低位窗可能停在舊責任

## 2. Catch-up 基本流程
每一窗每次啟動前，必須先跑：
1. read_00：讀取 00 最新主骨／audit dashboard／directive
2. identify_self：確認本窗 window_id / role / allowed_scope
3. compare_delta：比對本窗記憶與 00 最新規則的差異
4. update_local_boundary：更新本窗邊界與禁區
5. run_minimum_action：只執行本窗最小必要動作
6. result_packet：回包
7. return_to_00：回 00 裁定

## 3. 本窗啟動前必讀
### 00 shared references
- `01_native_board/audit-dashboard-v0-1.md`
- `01_runtime-spine/window-schedule-registry-v0-1.md`
- `03_board-orchestration/window-00-10-unified-arrangement-directive-v0-1.md`
- `00_mother-law/tool-as-sense-module-contract-v0-1.md`
- `00_mother-law/adaptive-flexibility-framework-v0-1.md`
- `03_board-orchestration/dynamic-route-recomposition-matrix-v0-1.md`

## 4. Catch-up 輸出格式
每一窗 catch-up 後至少回：
- window_id
- latest_00_ref_read
- local_boundary_updated：yes/no
- detected_delta
- current_allowed_scope
- blocked_actions
- minimum_next_action
- run_grade
- return_to_00

## 5. 各窗最低同步要求
| Window | Catch-up Focus |
|---|---|
| 01 | 確認主本 / mirror / path 是否仍正確 |
| 02 | 確認 task/spec/issue routing 是否仍受 00 約束 |
| 03 | 確認事件是否具 source / time window |
| 04 | 確認身份驗證不吞事件 / 時序 / 知識 |
| 05 | 確認時間邊界與 effective order |
| 06 | 確認入口 source / tri-key / unresolved intake |
| 07 | 確認 readback source 與雙層回報 |
| 08 | 確認 runtime 只作 agent surface，不自擴 |
| 09 | 確認 UI / surface 不反客為主 |
| 10 | 確認模型 / 工具只作 module，不主寫 |
| 11 | 確認結構生成只作候選，不升格 |
| 12 | 確認 worldfield 只作可行域，不宣稱完成 |

## 6. 禁止事項
- 禁止窗口未讀 00 最新主骨就自稱同步
- 禁止只回本窗舊規則，不對照最新 directive
- 禁止排程啟動但不產生 run_grade
- 禁止把 catch-up 視為完成任務；catch-up 只是啟動前對齊

## 7. 收斂語句
窗口真正跟上 00，不是靠使用者逐窗佈達，而是每一窗啟動時都先讀 00、對照差異、更新邊界、再做本窗最小動作；這樣靈絡才會從被動等待命令，轉成時間與事件觸發下的自同步鏈。
