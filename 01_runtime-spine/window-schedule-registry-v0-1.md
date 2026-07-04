# Window Schedule Registry v0.1

一句核心：
窗口排程必須從『有沒有排』升級為『排程型態是否正確、是否啟用、是否重疊、是否回 00』；否則時間鏈會從低載流動變成重複空轉。

## 0. 狀態
Draft v0.1

## 1. 排程型態
- S1｜Patrol Scheduled：定時巡檢型
- S2｜Event Triggered：事件觸發型
- S3｜Signal Triggered：訊號觸發型
- S4｜Boundary Triggered：邊界觸發型
- S5｜Adjudication Triggered：裁定觸發型
- S6｜Low-load Heartbeat：低載心跳型

## 2. 當前窗口排程建議
| Window | Role | Correct Schedule Type | Suggested Cadence | Current Action |
|---|---|---|---|---|
| 00 | 主骨 / 母架 / 公盤 | S5 + S6 | 每日 00:05 低載心跳；收到結果包時裁定 | 已補 00 heartbeat，需納入總盤 |
| 01 | Google 生態 / 主本對位 | S1 | 每日或多時段輕巡檢 | 保留，但需避免與 09 重疊 |
| 02 | Asana / ClickUp 執行子盤 | S1 | 每日 09:00 或控制面巡檢 | 保留，需與 10 切清 |
| 03 | Slack 事件子盤 | S2 | 有事件即觸發；每日 21:30 收口 | 不宜一般輪詢 |
| 04 | Contacts 身份驗證盤 | S3 | 有新身份訊號即觸發；每日 11:30 弱對帳 | 不宜全量盲掃 |
| 05 | Calendar 時權盤 | S4 | 00:05 / 08:30 / 21:30 或 weekly review | 已有 05 類排程，需去重 |
| 06 | Mail 入口盤 | S1 | 每日 09:00 / 18:00 或入口高頻巡檢 | 已有 Gmail 類排程 |
| 07 | Notion / Knowledge readback | S1 | 每日輕巡檢或隨主骨 readback | 需雙層回報與 run_grade |
| 08 | Agent Runtime | S5 candidate | 只在 00 指派或 runtime path 成立後觸發 | 暫不常駐 |
| 09 | UI / Surface | S5 candidate | 只在 surface/readback 對位需要時觸發 | 暫不常駐 |
| 10 | Model Family Integration | S5 candidate | model adapter 實測時觸發 | 暫不常駐 |
| 11 | Lingluo Autonomous Network | S5 candidate | structure candidate review 時觸發 | 暫不常駐 |
| 12 | Cluster Neural Open Runtime | S5 candidate | feasible domain review 時觸發 | 暫不常駐 |

## 3. 目前已知問題
1. 09:00 時段過度集中，可能造成治理巡檢、控制面巡檢與 Gmail intake 重疊。
2. 00 heartbeat 與 general governance review 需切分：00 heartbeat 只做低載狀態包，governance review 做日巡檢。
3. 05 daily 與 weekly 合理，但需要明定 daily / weekly 分工。
4. 03 / 04 不應硬補高頻定時排程，應用事件／訊號觸發。
5. 08–12 未達 CV3 前，不應常駐。

## 4. 統一回包要求
每次排程都必須回：
- run_grade
- source_ref
- actual_result
- mismatch_or_gap
- next_single_action
- return_to_00
- externally_visible_or_not

## 5. 收斂語句
窗口排程不是越多越好，而是要讓每一種時間觸發都對應正確主責；00 要有低載心跳，01/02/06/07 可巡檢，03/04/05 要用事件、訊號與邊界觸發，08–12 在未成熟前不得常駐。這樣時間鏈才是流動，不是噪音。
