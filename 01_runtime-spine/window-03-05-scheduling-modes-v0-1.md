# Window 03-05 Scheduling Modes v0.1

一句核心：
03、04、05 不應複製 01、02、06、07 的定時巡檢模式；其正確排程應分別落在事件觸發、訊號觸發與時間邊界觸發，否則只會空轉與污染主鏈。

## 0. 狀態
Draft v0.1

## 1. 問題校準
目前可見現象：
- 01 / 02 / 06 / 07 已較適合定時巡檢
- 03 / 04 / 05 尚未穩定排程

這不是缺功能，而是排程型態不同。

## 2. 三窗的正確排程型態
### 03｜Event / Stream / Anomaly
主型態：**event-triggered + light patrol**

原因：
- 03 的主責是事件流與異常流
- 無新事件時，重掃只會重複既有片段
- 有新事件時，應優先快速 intake，不應等固定大輪巡檢

建議模式：
- E1｜事件觸發：有新 Slack 討論／異常訊號時立即起動
- E2｜輕巡檢：每 2 小時一次，只找新事件候選，不做重掃全域
- E3｜日收口：每日 21:30 將事件壓成 intake pack / result pack

### 04｜Identity / Relation / Contact
主型態：**signal-triggered + weak reconcile**

原因：
- 04 的主責是身份與關係驗證
- 若沒有新訊號，空跑只會重做同一份索引
- 真正值得啟動的是：新 mail、新 calendar、新 contact signal

建議模式：
- I1｜訊號觸發：有新 identity signal 時才進交叉驗證
- I2｜弱巡檢：每日 11:30 做一次 cross-signal reconcile
- I3｜禁止全量盲掃：除非 00 指派，不做無差別全域比對

### 05｜Time Sovereignty
主型態：**boundary-triggered + scheduled checkpoints**

原因：
- 05 的主責是時間窗、有效序、stale / future-bound 判定
- 它的核心不是新資料，而是邊界切換
- 最重要的是在時間切面發生時動，而不是隨機輪詢

建議模式：
- T1｜日切觸發：00:05，做 stale / rollover / next-day precheck
- T2｜晨啟巡檢：08:30，判今日 active / pending / blocked_by_time
- T3｜晚收口：17:30 或 21:00，判哪些仍 active、哪些已 stale
- T4｜例外觸發：遇到 event / mail / task 有明顯時序衝突時即插入判時

## 3. 為什麼不能照抄定時排程
若 03 / 04 / 05 全照抄定時巡檢，會導致：
- 03 重複掃描舊事件，誤以為有新進展
- 04 重做同一身份索引，回報大量無效重複
- 05 只回時間碼，不抓真正重要的邊界變化

## 4. 最小回包要求
不論使用哪種排程型態，03 / 04 / 05 每次啟動後仍需回：
- source_ref
- current_state
- actual_result
- mismatch_or_gap
- next_single_action
- return_to_00

## 5. 收斂語句
03、04、05 要動起來，不是補上一個『每小時跑一次』就好，而是要接上正確的排程語言：03 追事件、04 追訊號、05 追邊界；只有這樣，它們才不是空轉，而是真正開始運作。
