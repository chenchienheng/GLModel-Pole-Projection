# Window 03-05 Trigger Scenarios v0.1

一句核心：
03、04、05 要真正動起來，不只要有正確排程型態，還要有可辨識的觸發場景；本文件的目的，是把事件觸發、訊號觸發、時間邊界觸發壓成可判讀的案例表，避免空跑與誤啟動。

## 0. 狀態
Draft v0.1

## 1. 使用方式
每一窗的觸發場景固定記錄：
1. 觸發來源
2. 起動條件
3. 預期輸出
4. 不該起動的情況

## 2. 03｜Event / Stream / Anomaly Trigger Scenarios
### E-01｜新 Slack 討論流出現
- 觸發來源：Slack channel / thread 有新訊息
- 起動條件：具 source_ref 或至少有 channel/thread context
- 預期輸出：event intake pack
- 不該起動：只是舊訊息重讀、沒有新事件增量

### E-02｜控制面出現異常或待確認項
- 觸發來源：GitHub / task board / monitoring note 出現 anomaly hint
- 起動條件：可對回至少一個 issue / delta / anomaly ref
- 預期輸出：event result pack + 是否送 02 / 05 / 06 建議
- 不該起動：只有情緒描述，沒有具體事件候選

### E-03｜06 入口盤回送新來源，但未決定去向
- 觸發來源：06 result packet
- 起動條件：新來源已被 intake，但尚未分流
- 預期輸出：event classification note
- 不該起動：06 只回無差異重複資訊

### E-04｜日收口事件整理
- 觸發來源：每日 21:30 輕收口
- 起動條件：當日有事件增量或 anomaly hint
- 預期輸出：intake pack / result pack 回送 00
- 不該起動：整日完全無新事件、無新 source

## 3. 04｜Identity / Relation / Contact Trigger Scenarios
### I-01｜新 Mail sender / recipient 出現且身份未明
- 觸發來源：06 Mail result
- 起動條件：有新聯絡對象但無穩定 identity_ref
- 預期輸出：identity candidate packet
- 不該起動：sender 已有明確 verified relation

### I-02｜Calendar event 出現未知參與者
- 觸發來源：05 Calendar readback
- 起動條件：event 有 participant，但無對回 relation / role
- 預期輸出：cross-signal candidate
- 不該起動：參與者已是既有 verified relation

### I-03｜Contacts 與 Gmail / Calendar 訊號不一致
- 觸發來源：Contacts / Gmail / Calendar cross-check
- 起動條件：顯示名、主體名、角色出現不一致
- 預期輸出：relation mismatch note
- 不該起動：三方訊號一致且無新變動

### I-04｜每日弱對帳
- 觸發來源：每日 11:30 reconcile
- 起動條件：近 24 小時內至少有新 mail / event / contact 變化
- 預期輸出：cross-signal reconcile packet
- 不該起動：近 24 小時完全沒有新 identity signal

## 4. 05｜Time Sovereignty Trigger Scenarios
### T-01｜日切觸發
- 觸發來源：00:05 rollover
- 起動條件：跨日
- 預期輸出：stale / rollover / next-day precheck note
- 不該起動：同日內重複判定且無新時間邊界

### T-02｜晨啟巡檢
- 觸發來源：08:30 daily check
- 起動條件：新的一天開始進入 active/pending 判位
- 預期輸出：today priority ordering note
- 不該起動：當日無任何需時權判定項

### T-03｜晚收口
- 觸發來源：17:30 或 21:00 close check
- 起動條件：存在 active / pending item 需確認是否 stale
- 預期輸出：stale transition packet
- 不該起動：當前所有時間項已結束且無留存例外

### T-04｜事件或任務出現時序衝突
- 觸發來源：03 / 02 result packet
- 起動條件：兩項或以上候選在有效序上衝突
- 預期輸出：effective order adjudication candidate
- 不該起動：只是一般排程展示，未涉及時序衝突

## 5. 共同不該起動條件
03 / 04 / 05 若出現以下狀況，應避免起動：
- 無新 source_ref
- 無新 delta / signal / boundary change
- 只是重讀舊結果
- 只會重複同一句話

## 6. 收斂語句
03、04、05 的價值，不在於排了幾次，而在於能否只在真正值得動的時候動；有了觸發場景表，這三窗才會從『可能該跑』變成『知道何時該跑、何時不該跑』。
