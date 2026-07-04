# Model Adapter Contract v0.1

一句核心：
外部模型若要進入翾靈，不得以品牌身份直接進場；必須先被壓成具固定角色、固定輸入輸出、固定驗證與固定收口語言的 adapter module。

## 0. 狀態
Draft v0.1

## 1. 目的
- 讓 GPT / Gemini / Claude / Copilot / NotebookLM / others 不再各自為政
- 讓所有模型以統一契約進場
- 讓模型從主體降格為可被調度的模組家族

## 2. 契約核心欄位
### A｜身份欄位
- adapter_id
- model_family
- model_role
- provider_type

### B｜輸入欄位
- input_packet
- input_scope
- allowed_context_sources
- source_ref_required

### C｜輸出欄位
- output_schema
- result_type
- candidate_or_final
- confidence_note

### D｜驗證欄位
- verification_rule
- verify_by_same_family_or_other_family
- mismatch_reporting_required
- rollback_if_failed

### E｜收口欄位
- writeback_permission
- writeback_target_type
- return_to_00_required
- log_append_required

## 3. model_role 枚舉
- read_model
- reason_model
- execute_model
- verify_model
- structure_model
- hybrid_candidate

## 4. 基本規則
1. 品牌不作主位，role 才作主位。
2. 任一模型輸出預設為 candidate，不得自稱 final。
3. 任一模型若無 source_ref，不得產出可升階結果。
4. 任一模型若無 return_to_00，視為局部暫態輸出。
5. 任一模型不得直接主寫 GitHub 母本。

## 5. 進場範例
### Example A｜NotebookLM
- model_role：read_model / reason_model 候選
- input_scope：external knowledge mirror
- output_schema：summary candidate / readback packet
- verification_rule：需由 07 或 verify_model 對回 source
- writeback_permission：none direct

### Example B｜Claude / Copilot 類
- model_role：reason_model / execute_model 候選
- input_scope：code / workflow / spec candidate
- output_schema：execution candidate / route proposal
- verification_rule：需交由 10 與 00 裁定
- writeback_permission：restricted

### Example C｜GPT 系列
- model_role：reason_model / structure_model / hybrid_candidate
- input_scope：wide
- output_schema：structure candidate / adjudication support / route proposal
- verification_rule：仍需回 00，不得自判 final
- writeback_permission：restricted

## 6. 禁止事項
- 禁止將外部模型品牌當成主骨本體
- 禁止單一模型壟斷讀、判、寫三權
- 禁止模型輸出跳過驗證直接進主鏈
- 禁止模型自定成立語言

## 7. 收斂語句
Model Adapter Contract 的價值，不在於接進更多模型，而在於讓所有模型都只能以同一套角色契約、驗證秩序與收口語言進入翾靈；只有這樣，模型才會成為一家，而不是分家。
