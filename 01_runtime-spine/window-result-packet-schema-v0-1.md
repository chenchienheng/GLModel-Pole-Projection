# Window Result Packet Schema v0.1

一句核心：
若各窗沒有統一結果包，則可見運作模式無法成立；本 schema 的目的，是為 00–12 全窗提供共同回包欄位，讓執行、審查、調參與收口能使用同一種最低語言。

## 0. 狀態
Draft v0.1

## 1. 適用範圍
適用於：
- 00–12 所有窗口
- 單窗回報
- 多窗互補回報
- toolchain 執行結果
- bridge / relay / readback / recovery / re-entry 結果

## 2. 最小欄位
### P1｜識別欄位
- packet_id
- source_ref
- source_path
- source_window
- timestamp_window

### P2｜狀態欄位
- current_state
- adjudication_candidate
- mapped_windows
- maturity_level

### P3｜執行欄位
- tool_chain_used
- actual_result
- verification_result
- mismatch_or_gap
- missing_items

### P4｜責代欄位
- responsible_ref
- handoff_target
- accountable_board
- next_single_action

### P5｜回寫欄位
- writeback_target
- writeback_status
- packet_ready
- log_append_status
- return_to_00

### P6｜延伸欄位
- recovery_point
- snapshot_ref
- reentry_assignment
- tuning_suggestion
- notes_human_readable

## 3. 必填規則
### 核心必填
每一窗至少必填：
- packet_id
- source_ref
- current_state
- actual_result
- mismatch_or_gap
- responsible_ref
- next_single_action
- writeback_status
- return_to_00

### 條件必填
- 若有工具鏈：必填 tool_chain_used
- 若有驗證：必填 verification_result
- 若有回寫：必填 writeback_target / packet_ready / log_append_status
- 若有重建：必填 recovery_point / snapshot_ref
- 若有調參：必填 tuning_suggestion

## 4. 人可讀要求
每一份結果包，除欄位外，還必須附最少四句白話：
1. 這次實際處理了什麼
2. 目前確認到什麼
3. 還缺什麼
4. 下一步要做什麼

## 5. 禁止事項
- 禁止只回欄位、不附白話
- 禁止只說「已完成」不附 actual_result
- 禁止工具跑完不附 mismatch_or_gap
- 禁止 writeback_status 留空卻自稱完成

## 6. Schema 目的
- 讓 00 能穩定收口
- 讓 07 不再只回代碼感欄位
- 讓 10 toolchain 有統一回報面
- 讓 11 / 12 這類高位窗也可對回同一套結果語言

## 7. 收斂語句
結果包不是行政表單，而是靈絡全窗共同的最低回話骨；沒有它，窗口只是在跑，不能算在同一條鏈上說話。
