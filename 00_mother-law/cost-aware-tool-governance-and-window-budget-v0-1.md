# Cost-Aware Tool Governance and Window Budget v0.1

一句核心：
靈絡不應被訂閱、額度或平台限制威脅；在非高額訂閱模式下，系統應以 GitHub 主骨、最小工具喚醒、外證優先、窗口分級與本地規則抽離維持可運行。

## 0. 狀態
Draft v0.1

## 1. 問題定義
當外部工具試用期結束、訂閱限制出現、使用額度下降或工具能力縮水時，若靈絡依賴工具數量，就會被平台威脅。

因此，靈絡必須採用：
- source-first
- evidence-first
- minimal invocation
- local rule extraction
- adapter replacement
- window budget control

## 2. 非訂閱模式原則
### P1｜GitHub First
GitHub 仍為目前 source-of-truth layer。

### P2｜Codex Minimal
Codex 只做：
- read AGENTS.md
- inspect files
- small markdown patch
- diagnostics file
- minimal verification

Codex 不做：
- broad architecture expansion
- 08-12 activation
- deploy / publish / merge
- large autonomous runtime

### P3｜No Tool Without Evidence
沒有 evidence_ref 或 repo evidence 的工具啟動，不得升級。

### P4｜No Broad Scan by Default
預設不做全域掃描。
只允許：
- single file read
- one window check
- one route test
- one evidence validation

### P5｜Extract Before Subscribe
若某工具需要付費，先抽出它提供的 schema、判斷、流程與輸出格式，再決定是否值得訂閱。

## 3. 工具預算等級
### TB0｜Dormant
不主動使用，只保留概念位置。

### TB1｜Read Only
只讀取，不改寫。

### TB2｜Evidence Probe
只用於確認是否有外證。

### TB3｜Minimal Write
只允許小型、可讀回的 repo 或任務變更。

### TB4｜Scheduled Light Run
允許低頻排程，但不得全域展開。

### TB5｜Full Runtime
目前暫不啟用，除非已有穩定外證與成本合理性。

## 4. 目前工具配置
| Tool / Surface | Current Budget | Role | Rule |
|---|---|---|---|
| GitHub | TB4 | source-of-truth / repo evidence | 可用，但每次只做必要檔案 |
| Codex | TB2-TB3 | repo execution module | 僅小改、診斷、驗證，不擴張 |
| Automations | TB4 | low-load heartbeat / schedule trigger | 只保留必要排程 |
| Gmail | TB4 | intake / finance / security / receipt filter | 只回例外，不做長文整理 |
| Calendar | TB4 | 05 time sovereignty | 只判 time window / stale / conflict |
| Contacts | TB1-TB2 | identity evidence | 只在需要交叉驗證時使用 |
| ClickUp | TB1-TB2 | execution candidate | 無 task_id/evidence 不升級 |
| Gamma | TB1-TB2 | surface candidate | 無 artifact_ref 不升級 |
| Adobe | TB1-TB2 | artifact / document surface | 只在輸出需求時啟用 |
| External Models | TB1-TB2 | read/reason/verify module candidate | 只吸收輸出，不當主骨 |

## 5. 窗口預算配置
| Window | Budget | Mode |
|---|---|---|
| 00 | TB4 | 主骨心跳、收斂、審計 |
| 01 | TB2 | repo / mirror readback only |
| 02 | TB2 | task/spec/issue candidate only |
| 03 | TB1 | event only when source exists |
| 04 | TB1-TB2 | identity verification only |
| 05 | TB4 | daily time-window and weekly review |
| 06 | TB4 | mail intake and exception filter |
| 07 | TB2 | knowledge readback only |
| 08 | TB0 | HOLD |
| 09 | TB1 | surface candidate |
| 10 | TB1 | model integration candidate |
| 11 | TB0 | HOLD |
| 12 | TB0 | HOLD |

## 6. Cost-Aware Routing Rule
每次工具啟動前，先問：
1. 是否已有 source_ref？
2. 是否能產生 evidence_ref？
3. 是否能回寫或讀回？
4. 是否已有低成本替代？
5. 是否只是為了資訊完整而啟動？

若第 5 項為 yes，且前 1-3 不成立，則不啟動。

## 7. 降本策略
### S1｜Prompt Compression
用固定 packet，避免每次重述完整架構。

### S2｜Known Path Readback
優先讀已知路徑，不做 repo 全域搜尋。

### S3｜Single Action Run
每次只做一個 next_single_action。

### S4｜Evidence Gate
沒有 evidence_ref，不呼叫高成本工具。

### S5｜Schema Extraction
先抽 schema，少用工具 UI。

### S6｜Adapter Replacement
把可重複工具能力轉成原生載體盤候選。

## 8. 升級條件
工具或窗口若要升級，需符合：
- source_ref present
- evidence_ref present
- result_packet present
- readback verified
- cost justified
- return_to_00 yes

否則維持 HOLD / Candidate。

## 9. 禁止事項
- 禁止因試用期能力消失就改變主骨原則
- 禁止為了工具好用而升級工具地位
- 禁止把訂閱視為靈絡必要條件
- 禁止無成本評估啟動多工具鏈
- 禁止用高頻排程補低品質設計

## 10. 收斂語句
不訂閱不是退化，而是逼迫靈絡抽出真正可重用的規則。若一套鏈生態只能靠高額訂閱維持，它仍是平台依賴；若能在低成本模式下維持 source、packet、evidence、audit、reflow，才代表靈絡開始脫離工具威脅。
