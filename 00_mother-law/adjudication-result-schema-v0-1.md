# Adjudication Result Schema v0.1

一句核心：
若 00 已升為中樞裁定核，則其輸出不能只停在『有收到了』；本 schema 的目的，是讓 00 對任何窗口、節點、工具鏈或世界場候選項，都能以同一種裁定語言回覆。

## 0. 狀態
Draft v0.1

## 1. 適用範圍
適用於：
- 單窗結果包裁定
- 多窗互補結果裁定
- 節點接入裁定
- toolchain 執行後裁定
- 結構生成項裁定
- 世界場候選項裁定

## 2. 核心輸出欄位
### A｜識別欄位
- adjudication_id
- source_ref
- source_window
- timestamp_window

### B｜裁定欄位
- adjudication_result
- accept_or_rollback
- current_level
- promoted_or_not

### C｜缺口欄位
- confirmed_items
- unresolved_items
- mismatch_type
- required_reviews

### D｜推進欄位
- tuning_required
- packet_required
- log_required
- rollup_status
- reentry_assignment
- next_single_action

### E｜白話欄位
- why_this_result
- what_is_missing
- what_happens_next

## 3. adjudication_result 枚舉
- accepted
- accepted_with_conditions
- partial
- rollback_required
- blocked
- archived
- candidate_for_main_readable
- candidate_for_main_ready

## 4. accept_or_rollback 規則
### accepted
- 已符合當前進鏈或進階條件
- 可進下一步或進 rollup

### accepted_with_conditions
- 核心成立，但需補 packet / log / review / readback

### partial
- 局部成立，需補件後再審

### rollback_required
- 必須退回指定窗或指定層補件

### blocked
- 缺核心證據鏈，不得前進

### archived
- 當前不再推進，但保留可回讀價值

## 5. promoted_or_not 規則
適用於：
- 新骨升階
- main-readable 候選
- main-ready 候選
- 世界場候選升格

輸出值：
- yes
- no
- not_applicable

## 6. rollback 指定規則
若需 rollback，至少要指定：
- rollback_target_window
- rollback_target_layer
- rollback_reason
- recovery_start_point

## 7. 白話要求
每一份裁定輸出，都必須附最少三句：
1. 這次為什麼這樣裁定
2. 還缺什麼
3. 接下來會怎麼走

## 8. 禁止事項
- 禁止 00 只回『已收』不給裁定結果
- 禁止 00 只給欄位、不給白話理由
- 禁止 00 接收無 source_ref 項卻直接 accepted
- 禁止 00 不指定 rollback 目標卻要求退回

## 9. 收斂語句
00 的成熟，不在於看見所有窗口，而在於能對所有輸入輸出同一套裁定語言；有了 adjudication result schema，靈絡才不只是收件系統，而是真正的中樞裁定核。
