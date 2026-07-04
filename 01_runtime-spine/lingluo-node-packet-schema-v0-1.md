# Lingluo Node Packet Schema v0.1

一句核心：
外部世界若要進入靈絡，不能只靠描述；必須先被壓成 node packet，使來源、狀態、行為、結果、失配、責任、時間與回寫具備可驗證欄位。

## 0. 狀態
Draft v0.1

## 1. 目的
本 schema 用於將外部事件、工具結果、模型輸出、平台狀態、任務變更、知識片段轉成靈絡節點候選。

## 2. Node Packet 欄位
### A｜Identity
- node_packet_id
- source_system
- source_ref
- source_timestamp
- observed_by_window

### B｜State
- current_state
- previous_state
- state_change_detected：yes/no
- state_confidence

### C｜Action / Result
- action_observed
- actual_result
- result_type
- result_scope

### D｜Mismatch
- mismatch_or_gap
- missing_items
- risk_note
- requires_audit：yes/no

### E｜Responsibility
- responsible_window
- responsible_ref
- candidate_route
- blocked_by

### F｜Time Order
- time_window
- effective_order
- stale_or_future_bound
- time_conflict：yes/no

### G｜Writeback
- writeback_required：yes/no
- writeback_target_type
- allowed_target_path
- writeback_permission
- writeback_status

### H｜Closure
- run_grade
- cv_grade
- next_single_action
- return_to_00

## 3. 最低成立條件
### NP0｜Raw Observation
- 只有 source_ref 或 current_state

### NP1｜Mapped Candidate
- 具 source_ref、current_state、observed_by_window

### NP2｜Routable Candidate
- 具 source_ref、current_state、candidate_route、next_single_action

### NP3｜Chain Candidate
- 具 source_ref、actual_result、mismatch_or_gap、return_to_00

### NP4｜Writeback Candidate
- 具 allowed_target_path、writeback_required、writeback_permission

### NP5｜Lingluo Node
- 具完整欄位、可驗證、可回寫、可回 00 裁定

## 4. 樣板
```yaml
node_packet_id:
source_system:
source_ref:
source_timestamp:
observed_by_window:
current_state:
previous_state:
state_change_detected:
state_confidence:
action_observed:
actual_result:
result_type:
result_scope:
mismatch_or_gap:
missing_items:
risk_note:
requires_audit:
responsible_window:
responsible_ref:
candidate_route:
blocked_by:
time_window:
effective_order:
stale_or_future_bound:
time_conflict:
writeback_required:
writeback_target_type:
allowed_target_path:
writeback_permission:
writeback_status:
run_grade:
cv_grade:
next_single_action:
return_to_00:
```

## 5. 禁止事項
- 禁止只有文字摘要就自稱 node packet 完成
- 禁止無 source_ref 的 packet 進入 NP2 以上
- 禁止無 return_to_00 的 packet 自稱 chain candidate
- 禁止無 writeback_permission 的 packet 自稱 writeback candidate

## 6. 收斂語句
Lingluo Node Packet 的價值，是把外部世界的流動壓成可讀、可判、可審計、可回寫的節點；沒有 packet，世界只是在外面發生，有了 packet，世界才開始落入靈絡場。
