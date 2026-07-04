# Toolchain Handoff Validation Protocol v0.1

一句核心：
02 與 10 若只做到工具接力，仍不足以形成正式執行鏈；本協定的目的，是確保 filter、dispatch、execute、verify、writeback 之間的每次交棒都可驗證、可回報、可退回補件。

## 0. 狀態
Draft v0.1

## 1. 問題定義
目前常見失配：
- 有第三方接第三方，但沒有驗證交棒是否成功
- 工具調用了，但 actual_result 與 verification_result 沒被拆開
- handoff 發生了，但不知道在哪一棒斷掉
- 執行鏈看似動了，實際仍無 writeback / rollup

## 2. 最小接力鏈
正式 toolchain 至少經過：
1. filter
2. dispatch
3. execute
4. verify
5. writeback
6. return_to_00

## 3. 每一棒必填欄位
### H1｜當前棒次
- handoff_stage
- source_ref
- current_state

### H2｜輸入輸出
- stage_input
- stage_output
- actual_result
- mismatch_or_gap

### H3｜交棒欄位
- handoff_target
- handoff_status
- verification_needed
- rollback_if_failed

### H4｜收口欄位
- writeback_target
- writeback_status
- return_to_00
- next_single_action

## 4. 驗證規則
### filter -> dispatch
需驗證：
- 是否選到正確工具鏈候選
- 是否保留 source_ref 與 task_type

### dispatch -> execute
需驗證：
- 是否成功把 target 與 input 交給指定工具
- 是否沒有脫離主骨路由

### execute -> verify
需驗證：
- 是否產生 actual_result
- 是否可判定結果完整或缺口

### verify -> writeback
需驗證：
- 是否有 verification_result
- 是否可正式寫回 target path

### writeback -> 00
需驗證：
- 是否有 packet_ready
- 是否有 log append
- 是否可回送 00

## 5. 失敗處理
任一棒若失敗，必須回：
- failed_stage
- mismatch_type
- rollback_target
- recovery_start_point
- next_single_action

## 6. 禁止事項
- 禁止只說「工具跑完」視為 handoff 成功
- 禁止沒有 verification_result 就進 writeback
- 禁止 handoff 失敗卻不指定 rollback_target
- 禁止 writeback_status 留空卻自稱 toolchain 完成

## 7. 成立條件
02 / 10 若要視為穩定 toolchain 執行鏈，至少需：
- 每一棒都可回報
- 失敗時可指出斷棒位置
- 成功時可完成 writeback + return_to_00
- 連續兩輪以上穩定輸出 handoff validation result

## 8. 收斂語句
工具鏈的成熟，不在於串了多少第三方，而在於每一次交棒都可驗證、可回報、可補件；只有這樣，02 與 10 才不是工具清單，而是真正的正式執行鏈。
