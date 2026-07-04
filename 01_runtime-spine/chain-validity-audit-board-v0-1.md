# Chain Validity Audit Board v0.1

一句核心：
鏈不是因為看起來有在跑就成立；本審計板的目的，是把各類鏈型與關鍵鏈路逐項檢查：到底只是候選、只是局部運行、還是已正式進鏈，避免整個系統被假進展拖垮。

## 0. 狀態
Draft v0.1

## 1. 檢查欄位
- chain_unit
- source_ref_present
- actual_result_present
- mismatch_or_gap_present
- next_single_action_present
- return_to_00_present
- external_evidence_present
- current_grade
- primary_gap
- next_fix

## 2. Grade 定義
- **CV0｜Declarative Only**：只有宣稱，無可驗證鏈條
- **CV1｜Candidate**：已有候選鏈，但缺核心欄位或未回送 00
- **CV2｜Partial Run**：已有局部結果，但未穩定 writeback / external evidence
- **CV3｜Chain-Valid**：已具 source / result / next action / return_to_00
- **CV4｜Externally Evidenced**：CV3 且有第三方或主本外證
- **CV5｜Recoverably Stable**：CV4 且失敗時有 rollback / recovery / re-entry

## 3. 當前關鍵鏈審計（暫定）
| chain_unit | source_ref_present | actual_result_present | mismatch_or_gap_present | next_single_action_present | return_to_00_present | external_evidence_present | current_grade | primary_gap | next_fix |
|---|---|---|---|---|---|---|---|---|---|
| 01 primary binding chain | partial | partial | yes | yes | partial | weak | CV1-CV2 | seed/main/cloud 尚未穩定對位 | readback alignment result samples |
| 02 execution routing chain | partial | partial | yes | yes | partial | weak | CV2 | toolchain handoff 未穩定 | 02+10 handoff validation |
| 03 event intake chain | partial | partial | yes | yes | partial | weak | CV1-CV2 | 事件片段化與 source 不穩 | trigger scenarios + event packs |
| 04 identity verification chain | partial | partial | yes | yes | partial | weak | CV2 | 外部 contact writeback 未證成 | cross-signal samples |
| 05 time sovereignty chain | partial | partial | yes | yes | partial | weak | CV2 | 白話時權與邊界觸發未全窗採用 | time window outputs |
| 06 intake chain | yes | partial | yes | yes | partial | medium | CV2-CV3 | local ops 已成，但主骨同步未全通 | sustained runtime samples |
| 07 readback chain | partial | partial | yes | yes | partial | weak | CV2 | 雙層回報仍待連續樣本 | dual-layer reporting rounds |
| 00 adjudication chain | yes | partial | yes | yes | yes | weak | CV2-CV3 | 全窗穩定裁定樣本不足 | adjudication result samples |
| 08 runtime surface chain | no | no | partial | partial | no | no | CV0-CV1 | surface path 尚未落地 | minimum surface path |
| 09 multicloud alignment chain | partial | no | yes | yes | partial | no | CV1 | alignment result 尚未穩定產出 | seed-main-cloud samples |
| 10 model/tool orchestration chain | partial | no | yes | yes | partial | no | CV1 | handoff external evidence 不足 | toolchain validation runs |
| 11 structure promotion chain | partial | no | yes | yes | partial | no | CV1 | promoted/not promoted 尚無穩定樣本 | promotion review cases |
| 12 worldfield feasibility chain | no | no | partial | partial | no | no | CV0 | 僅願景，尚無 feasible domain 外證 | feasible domain note |

## 4. 使用原則
1. 任何鏈若低於 CV2，不得被高調宣稱為已走通。
2. 任何鏈若未達 CV3，不得被視為正式進鏈。
3. 任何鏈若未達 CV4，不得自稱已外部完成。
4. 高位鏈（08–12）若仍在 CV0 / CV1，應老實標記為候選／研究位。

## 5. 收斂語句
Chain Validity Audit 的目的，不是挑系統毛病，而是讓每一條鏈都知道自己目前到底站在哪裡；只要這層不清，靈絡就會被一堆看似前進、其實未成立的鏈條拖進黑洞。
