# Dynamic Route Recomposition Matrix v0.1

一句核心：
靈絡的更大靈活度，不是讓每個窗口固定等待分派，而是能依任務訊號動態重組窗口順序；路由不是死流程，而是受 source、time、identity、event、task、knowledge 與 00 裁定共同約束的可重組鏈。

## 0. 狀態
Draft v0.1

## 1. 問題定義
固定流程會導致：
- 任務類型一變，流程失配
- 某窗口不可用，整條鏈中斷
- 高位窗誤以為能跳過低位窗
- 工具串多，但不形成真正流程模組

因此需要 route recomposition。

## 2. 路由重組原則
1. Source first：先確認來源
2. Identity if needed：涉及人、組織、角色時先驗身份
3. Time if ordering matters：涉及先後與有效序時先判時權
4. Event before task：事件未成形前不得直接任務化
5. Knowledge after source：知識整理需在來源有效後
6. 00 always closes：任何重組路由最後回 00

## 3. 典型路由矩陣
| scenario | recommended_route | risk_if_wrong |
|---|---|---|
| 新郵件涉及未知對象與任務 | 06 -> 04 -> 05 -> 02 -> 00 | 未驗身份即派任務 |
| Slack 出現異常事件 | 03 -> 05 -> 02 -> 07 -> 00 | 事件未判時序就寫入任務 |
| GitHub 出現新 delta | 01 -> 02/10 -> 07 -> 00 | 主本未對位就執行 |
| 新模型輸出結構候選 | 10 -> 11 -> 07 -> 00 | 模型輸出直接升格 |
| UI surface 需要更新 | 08 -> 09 -> 01 -> 00 | 外顯面反客為主 |
| 身份訊號衝突 | 04 -> 06/05 cross-check -> 00 | 身份錯誤導致全鏈污染 |
| 時間衝突或 stale item | 05 -> 02/03 -> 00 | 過期項目仍被當 active |
| 知識回讀找不到來源 | 07 -> 01 -> 09 -> 00 | 把不存在來源誤判為未讀到 |
| 工具失效需替換 | affected_window -> substitution protocol -> 10 -> 00 | 單點故障拖垮主骨 |
| 08–12 高位候選升階 | 08/09/10/11/12 -> 07 -> 00 | 願景位自判成熟 |

## 4. 重組觸發條件
### R1｜Source Drift
來源位置或版本不一致。

動作：
- 先回 01 / 09 做 readback alignment

### R2｜Identity Drift
人、角色、組織、聯絡資訊不一致。

動作：
- 先回 04 做 cross-signal verification

### R3｜Time Conflict
事件、任務、排程有效序衝突。

動作：
- 先回 05 做 effective order

### R4｜Execution Block
任務、工具、第三方寫回受阻。

動作：
- 先回 02 / 10 做 handoff validation

### R5｜Knowledge Gap
資料看似存在但無可驗來源。

動作：
- 回 07 / 01 / 09 做 readback chain

### R6｜High-Level Candidate
08–12 產生候選願景或升階要求。

動作：
- 回 07 摘要與對骨，再回 00 裁定

## 5. 路由輸出格式
每次重組都需回：
- route_case_id
- trigger_type
- original_route
- recomposed_route
- affected_windows
- reason_for_recomposition
- expected_result_packet
- return_to_00

## 6. 禁止事項
- 禁止為了快而跳過 identity / time / source
- 禁止固定流程套用所有任務
- 禁止高位窗直接決定重組後路由
- 禁止重組後不留下 route_case_id

## 7. 收斂語句
固定流程只能處理固定世界；靈絡若要成為場域系統，就必須允許窗口依訊號重新排列，但所有重組仍需對回 source、identity、time、task、knowledge 與 00 裁定。真正的靈活度，不是亂動，而是能在不斷鏈的前提下重組。
