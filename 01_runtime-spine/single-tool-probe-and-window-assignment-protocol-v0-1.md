# Single Tool Probe and Window Assignment Protocol v0.1

一句核心：
每個外部工具都必須以單點輪調方式測試，先判定 source / action / evidence / writeback 能力，再分配到對應窗口與鏈邏輯條；禁止同時開多工具造成迴圈、重複或假同步。

## 0. 狀態
Draft v0.1

## 1. 問題定義
多工具同時啟動時，容易形成：
- 工具結果互相覆蓋
- source_ref 混亂
- 重複掃描
- 00 無法判定責任位
- 窗口錯接
- 工具被誤認為主體

因此工具測試必須改為 single-tool probe。

## 2. 單工具測試流程
每次只測一個工具，固定順序：

1. identify_tool：確認工具名稱與可用能力
2. probe_source：測 source 是否可讀
3. probe_action：測是否能執行最小動作
4. probe_evidence：測是否產生 evidence_ref
5. probe_writeback：測是否具 writeback target
6. assign_window：映射到 00–12 對應窗口
7. assign_chain_line：分配鏈邏輯條
8. result_packet：產生結果包
9. return_to_00：回 00 裁定

## 3. 工具結果包格式
```yaml
tool_probe_id:
tool_name:
source_ref:
readback_status:
minimal_action:
actual_result:
evidence_ref:
writeback_target:
assigned_window:
assigned_chain_line:
mismatch_or_gap:
run_grade:
cv_grade:
next_single_action:
return_to_00:
```

## 4. 窗口分配規則
| Tool Type | Candidate Window | Rule |
|---|---|---|
| Repo / code / commit | 00 / 01 / Codex | 有 commit/readback 才升 |
| Mail / notification | 06 | 只處理入口與例外 |
| Calendar / time | 05 | 只處理 time window / stale / conflict |
| Contacts / identity | 04 | 只做身份與角色訊號 |
| Task / issue | 02 | 需 task_id / status / due / owner |
| Chat / discussion | 03 | 需 event_ref / thread_ref |
| Docs / knowledge | 07 | 需 source/version/readback |
| UI / artifact | 09 | 需 artifact_ref / surface_url |
| Runtime / agent | 08 | 預設 HOLD |
| Model output | 10 | 需 model_packet / output_ref |
| Structure generation | 11 | 只能候選，不主寫 |
| Worldfield / open layer | 12 | 預設 HOLD |

## 5. 鏈邏輯條定義
### CL-Source
來源讀取鏈。

### CL-Intake
入口訊號鏈。

### CL-Time
時間約束鏈。

### CL-Identity
身份責任鏈。

### CL-Task
任務執行鏈。

### CL-Knowledge
知識回讀鏈。

### CL-Surface
外顯產物鏈。

### CL-Model
模型候選鏈。

### CL-Evidence
外證驗證鏈。

### CL-Reflow
規則回流鏈。

## 6. 升級條件
工具若要從候選升級，必須具備：
- source_ref
- actual_result
- evidence_ref 或 repo evidence
- assigned_window
- mismatch_or_gap
- next_single_action
- return_to_00

## 7. 禁止事項
- 禁止同時測多工具
- 禁止無 source_ref 直接分窗
- 禁止無 evidence_ref 卻宣稱外部完成
- 禁止工具自判主位
- 禁止將工具使用次數視為能力成熟度

## 8. 收斂語句
工具不是越多越強；只有當每個工具都能被單點測試、分窗、分鏈、留證、回 00 時，工具才會從外部功能變成靈絡內的可治理節點。
