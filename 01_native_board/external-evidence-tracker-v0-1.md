# External Evidence Tracker v0.1

一句核心：
任何窗口、工具、模型或流程若宣稱已外部完成，必須提供可追蹤 evidence_ref；沒有外部痕跡，只能停在 internal run、candidate 或 partial，不得自稱完成。

## 0. 狀態
Draft v0.1

## 1. 目的
本追蹤板用於記錄靈絡中所有外部可見痕跡，避免：
- 工具呼叫被誤當完成
- 內部回報被誤當外證
- 第三方未改動卻宣稱同步
- GitHub 主骨與外部平台狀態分裂

## 2. Evidence 類型
- E1｜GitHub Evidence：commit / file / branch / issue / PR
- E2｜Mail Evidence：label / message / draft / archive / filter
- E3｜Calendar Evidence：event / status / time change
- E4｜Task Evidence：Asana / ClickUp task / assignee / due / status
- E5｜Slack Evidence：channel / thread / message / event ref
- E6｜Knowledge Evidence：Notion / Google Docs / version ref
- E7｜Model Evidence：adapter / output / verification ref
- E8｜UI Runtime Evidence：surface / runtime / deploy / interaction log

## 3. Evidence 等級
- EE0｜No Evidence：無外部痕跡
- EE1｜Claimed Evidence：窗口自述有，但未提供 ref
- EE2｜Readable Evidence：有 ref，可讀回
- EE3｜Changed Evidence：外部狀態可見變動
- EE4｜Verified Evidence：變動已被第二窗或 00 驗證
- EE5｜Reflowed Evidence：已回流成規則、路由、樣本或審計項

## 4. 登錄格式
```yaml
evidence_id:
source_window:
evidence_type:
evidence_ref:
external_system:
observed_change:
readback_status:
verified_by:
linked_node_packet:
linked_reflow_id:
ee_grade:
next_single_action:
return_to_00:
```

## 5. 初始登錄
| evidence_id | source_window | evidence_type | evidence_ref | external_system | observed_change | ee_grade | next_single_action |
|---|---|---|---|---|---|---|---|
| EE-GH-001 | 00 | E1 GitHub | `a00d5bf06e63136ee1af77aac281e92f139171cf` | GitHub | 00 heartbeat log created | EE2 | fetch heartbeat log and verify readback |
| EE-GH-002 | 00 | E1 GitHub | `3ae6cbd98e2d0282f80d05abb4e09e8683c69dda` | GitHub | schedule registry created | EE1 | fetch schedule registry and verify readability |
| EE-GH-003 | 00 | E1 GitHub | `323e263dd15d91b801a9793a1c279a154011d5cf` | GitHub | node packet schema created | EE2 | link to field axiom and reflow rule |
| EE-GH-004 | 00 | E1 GitHub | `0871e050f1937580f419599e5e2b8053299b7d0d` | GitHub | chain ecosystem reflow rule created | EE2 | create first reflow sample |

## 6. 窗口升級規則
- 無 EE2，不得宣稱可讀外證。
- 無 EE3，不得宣稱外部已改動。
- 無 EE4，不得宣稱外部已驗證。
- 無 EE5，不得宣稱進入鏈生態回流。

## 7. 禁止事項
- 禁止只有口頭聲稱外部完成
- 禁止用 internal packet 代替 external evidence
- 禁止無 evidence_ref 卻升為 G4 / CV4
- 禁止單一窗口自證自稱 verified evidence

## 8. 收斂語句
External Evidence Tracker 的目的，是把靈絡從『內部可運行』推向『外部可證』；任何外部完成都必須能被讀回、驗證、回流，否則只能算候選或局部運行。
