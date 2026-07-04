# Window Scheduling Governance v0.1

一句核心：
窗口排程不應由『能不能定時跑』決定，而應由其主責型態決定；本治理規則的目的，是將全窗排程分為巡檢型、事件型、訊號型、邊界型與裁定型，避免空轉、重掃與錯誤放大。

## 0. 狀態
Draft v0.1

## 1. 排程五類
### S1｜Patrol Scheduled
適用：01 / 02 / 06 / 07

特徵：
- 需定時巡檢
- 定期回收狀態
- 適合高頻入口、主本對位、知識整理、任務盤點

### S2｜Event Triggered
適用：03

特徵：
- 有新事件才優先起動
- 重點在 intake 速度與事件收口
- 不適合全量盲掃

### S3｜Signal Triggered
適用：04

特徵：
- 有新身份／關係／聯絡訊號才啟動
- 平時只做弱對帳
- 不適合全域連續比對

### S4｜Boundary Triggered
適用：05

特徵：
- 依時間邊界、日切、stale / future-bound 切換啟動
- 不以一般輪詢為主

### S5｜Adjudication Triggered
適用：00，及未來 08–12 的高位裁定點

特徵：
- 依結果包回送而起動
- 不是固定輪詢，而是被全窗輸入觸發

## 2. 當前建議分配
- 00：S5 adjudication-triggered
- 01：S1 patrol scheduled
- 02：S1 patrol scheduled
- 03：S2 event-triggered
- 04：S3 signal-triggered
- 05：S4 boundary-triggered
- 06：S1 patrol scheduled
- 07：S1 patrol scheduled
- 08：暫不常駐，待最小 surface path 成立後再定
- 09：暫以 readback result 驅動，後續可混合 S1 + S5
- 10：暫以 toolchain result 驅動，後續可混合 S1 + S5
- 11：暫以 structure candidate 驅動
- 12：暫以 feasible domain candidate 驅動

## 3. 全窗共同原則
1. 排程存在，不等於窗口成熟。
2. 沒有 result packet，排程只算空跑。
3. 沒有 next_single_action，排程只算觀測。
4. 沒有 return_to_00，排程不算正式進鏈。
5. 任何排程都不得取代 00 裁定。

## 4. 排程失配的典型症狀
- 跑很多輪，但結果沒有變化
- 回報很多欄位，但沒有新 source_ref
- 覺得有在工作，但第三方沒有任何可見痕跡
- 窗口開始重複說同一句話

若出現以上症狀，應優先檢查：
- 排程型態是否選錯
- 是否應改用事件／訊號／邊界觸發
- 是否缺 result packet / writeback / return_to_00

## 5. 收斂語句
窗口要真正動起來，不是排越多越好，而是排對型態；主責決定排程，結果包決定是否算做事，00 決定是否真的成立。沒有這三層，排程只是在打轉。
