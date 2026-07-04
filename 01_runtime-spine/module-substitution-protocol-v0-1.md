# Module Substitution Protocol v0.1

一句核心：
工具、模型與第三方平台都不應成為不可替代依賴；本協定的目的，是讓任一外部模組失效時，系統可依角色、輸入輸出與驗證規則替換模組，而不使主骨斷鏈。

## 0. 狀態
Draft v0.1

## 1. 基本原則
1. 替換的是模組，不是主骨。
2. 替換依據是 role，不是 brand。
3. 替換前必須確認 input_packet / output_schema 相容。
4. 替換後必須回 00 裁定，不得自行宣稱等價。

## 2. 模組類型
### T｜Tool Module
例如 Gmail / Calendar / Contacts / Slack / Notion / Asana / ClickUp / GitHub。

替換依據：
- tool_module_role
- source_type
- output_schema
- writeback_permission

### M｜Model Module
例如 GPT / Claude / Gemini / Copilot / NotebookLM。

替換依據：
- model_role
- reasoning_scope
- verification_rule
- output_schema

### S｜Surface Module
例如 UI builder / Replit / runtime surface / Docs surface。

替換依據：
- surface_role
- visibility_scope
- interaction_type
- writeback_or_readonly

## 3. 替換流程
1. Detect Failure：偵測模組失效或不適配
2. Classify Role：確認原模組責能角色
3. Find Candidate：找出候選替代模組
4. Schema Check：檢查 input / output / verification 是否相容
5. Trial Run：跑一輪低風險測試
6. Compare Result：比對原模組與替代模組輸出差異
7. Return to 00：交由 00 裁定是否接受替換
8. Log Substitution：記錄替換原因與生效範圍

## 4. 替換結果等級
- MS0｜No Substitute：無替代模組
- MS1｜Candidate Substitute：有候選，但未測試
- MS2｜Partial Substitute：可替部分功能
- MS3｜Operational Substitute：可承接主要流程
- MS4｜Verified Substitute：經 00 裁定可替換
- MS5｜Preferred Substitute：新模組優於原模組，可建議升格

## 5. 當前候選替換觀察
| original_role | current_module | possible_substitute | current_grade | note |
|---|---|---|---|---|
| intake | Gmail | Docs / manual intake / other mail source | MS1 | 需 source schema 對位 |
| time boundary | Calendar | task due dates / manual time log | MS1 | 只能部分替代 |
| identity signal | Contacts | Gmail participants / Calendar attendees | MS2 | 可交叉，但不可完全替代 |
| event stream | Slack | Gmail threads / GitHub issues / task comments | MS1-MS2 | 需事件 schema |
| execution routing | Asana / ClickUp | GitHub issues / local task board | MS2 | GitHub issues 可承接部分 |
| readback | Notion | GitHub docs / Google Docs | MS2 | 可替代知識回讀面 |
| model reasoning | GPT | Claude / Gemini / Copilot | MS1 | 需 adapter contract 實測 |

## 6. 禁止事項
- 禁止因品牌強而直接替換
- 禁止未經 schema check 就視為等價
- 禁止替換後不留 substitution log
- 禁止把 partial substitute 說成 full substitute

## 7. 收斂語句
靈絡要可持續，就不能讓任一工具、模型、平台成為單點命門；Module Substitution Protocol 讓每個外部依賴都變成可測、可換、可回退的模組，而不是主骨本身。
