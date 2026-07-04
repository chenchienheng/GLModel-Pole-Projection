# Readback Alignment Result Schema v0.1

一句核心：
若 01 與 09 要完成 seed / main / cloud 的 readback 對位，則其輸出不能只停在『有看到 / 沒看到』；本 schema 的目的，是讓三讀面差異能被同一套結果語言描述、分類與收口。

## 0. 狀態
Draft v0.1

## 1. 適用範圍
適用於：
- 01 / 09 聯合對位結果
- seed-main-cloud 三讀面比對
- shadow board / pointer / mirror 差異判定
- readback mismatch 收口

## 2. 核心欄位
### A｜識別欄位
- packet_id
- source_ref
- repo_ref
- branch_ref
- timestamp_window

### B｜讀面欄位
- seed_read_face_status
- main_read_face_status
- cloud_read_face_status
- shadow_board_status
- main_pointer_status

### C｜一致性欄位
- source_path_consistency
- version_consistency
- primary_write_consistency
- mirror_usage_type

### D｜差異欄位
- alignment_result
- mismatch_type
- primary_gap
- unresolved_items
- recommended_fix

### E｜推進欄位
- responsible_ref
- next_single_action
- writeback_status
- return_to_00

### F｜白話欄位
- what_is_aligned
- what_is_missing
- what_should_be_checked_next

## 3. alignment_result 枚舉
- all_aligned
- seed_only
- main_only
- cloud_only
- seed_main_aligned_but_cloud_missing
- seed_cloud_aligned_but_main_missing
- main_cloud_aligned_but_seed_missing
- all_present_but_version_mismatch
- all_present_but_path_mismatch
- undetermined

## 4. mismatch_type 參考
- missing_seed_ref
- missing_main_pointer
- missing_shadow_board
- missing_cloud_mirror
- version_mismatch
- source_path_mismatch
- primary_write_mismatch
- mirror_misclassified
- readback_surface_unclear

## 5. 白話要求
每一份 readback 對位結果都至少要附三句：
1. 哪些讀面已對上
2. 目前最大的缺口是什麼
3. 下一步應先補哪一面

## 6. 禁止事項
- 禁止只說『看到了』不指出是哪一讀面
- 禁止只說『不一致』不指出是 path / version / primary write 哪種不一致
- 禁止有 mismatch 卻不給 recommended_fix
- 禁止沒有 return_to_00 卻自稱 readback 已完成

## 7. 收斂語句
readback 對位的成熟，不在於三個面都存在，而在於三個面是否能被同一套結果語言回讀、比較、分類與修補；沒有這份 schema，01 與 09 就只能各自看到局部，不能共同對回主骨。
