# Tool Extraction to Native Module Protocol v0.1

一句核心：
外部工具不能直接被丟棄，而應被逐步抽離：先抽功能、再抽 schema、再抽流程、再抽證據、最後才抽成翾靈原生模組；如此才能避免從工具依賴跳成無證自建。

## 0. 狀態
Draft v0.1

## 1. 抽離目標
將外部工具從：
- tool dependency

轉成：
- sense module
- adapter module
- native module candidate
- native carrier module

## 2. 五階段抽離
### X0｜External Tool
外部工具仍是主要操作面。

特徵：
- 由外部平台決定格式
- 由外部 UI / API 提供能力
- 靈絡只能讀取或操作結果

### X1｜Sense Module
工具被視為外部感知器。

要求：
- sample
- classify
- validate
- result_packet
- return_to_00

### X2｜Adapter Module
工具輸出可被統一 schema 接收。

要求：
- adapter_id
- input_packet
- output_schema
- evidence_ref
- writeback_permission

### X3｜Native Schema Candidate
工具功能已被抽成翾靈自己的資料型態。

要求：
- 不再依賴原工具欄位名稱
- 可與其他工具輸出對位
- 可被 00 裁定

### X4｜Native Module Candidate
功能可在翾靈原生載體盤內部模擬或承接。

要求：
- 可生成 node / route / evidence / reflow / audit
- 外部工具只作 readback 或 writeback target

### X5｜Native Carrier Module
功能已成為翾靈原生模組。

要求：
- 可獨立登錄
- 可對外提供接口
- 可允許外部平台反向接入
- 仍保留 evidence / audit / reflow

## 3. 抽離判準
每個工具抽離時必須回答：
- 它提供什麼感知？
- 它產生什麼狀態？
- 它執行什麼行為？
- 它形成什麼結果？
- 它暴露什麼失配？
- 它對應哪個責任位？
- 它依賴哪個時間序？
- 它是否具 writeback path？

## 4. 初始映射
| External Tool | Current Role | Extraction Target |
|---|---|---|
| GitHub | 主骨讀寫 / 外證 | Evidence Ledger + Node Registry + Reflow Memory |
| Gmail | 入口感知 | Intake Sense Module |
| Calendar | 時間邊界 | Schedule Kernel |
| Contacts | 身份訊號 | Identity Sense Module |
| Slack | 事件流 | Event Sense Module |
| Asana / ClickUp | 任務執行 | Route Engine + Execution State Module |
| Notion / Docs | 知識回讀 | Knowledge Readback Module |
| Adobe tools | 內容產物 | Surface Renderer + Artifact Module |
| External Models | 推理 / 驗證 / 結構 | Module Adapter Layer + Structure Module |

## 5. 禁止事項
- 禁止還在 X0 就宣稱原生化
- 禁止無 evidence_ref 的抽離
- 禁止無 schema 對位就替代工具
- 禁止抽離後失去 readback
- 禁止把外部工具品牌留作原生主位名稱

## 6. 收斂語句
工具抽離不是拋棄工具，而是把工具提供的感知、狀態、行為、結果、失配、責任、時間與回寫逐層抽出，最後變成翾靈原生載體盤內的模組；到那時，外部工具仍可存在，但它們只能接入，而不能定義翾靈。
