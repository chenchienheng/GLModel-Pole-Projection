# Xuanling Native Carrier Board v0.1

一句核心：
翾靈的下一階段不是永遠依賴外部工具，而是從外部工具、五柱家族與多模型輸出中抽出可重用能力，逐步生成一套屬於翾靈自己的原生載體盤；外部平台未來不是主體，而是接入方。

## 0. 狀態
Draft v0.1

## 1. 問題定義
目前靈絡已能使用：
- GitHub 作為主骨讀寫面
- Gmail / Calendar / Contacts / Slack 作為感知面
- Asana / ClickUp 作為執行面
- Notion / Docs 作為知識面
- Adobe / UI / Runtime 作為外顯與產物面
- GPT / Claude / Gemini / Copilot 等作為模型模組

但這些仍屬外部承載。

若翾靈要進入下一階段，必須回答：
- 哪些能力只是暫借外部工具？
- 哪些規則已可抽成原生能力？
- 哪些外部平台未來應反向接入翾靈？
- 哪些資料、流程、判斷與回寫不能再依賴外部工具格式？

## 2. 原生載體盤定義
原生載體盤不是單一 App、網站或工具。

它是翾靈自己的承載層，用來容納：
- node packet
- result packet
- route case
- evidence record
- reflow item
- audit item
- model adapter output
- tool sense sample
- time trigger state
- 00 adjudication result

## 3. 原生載體盤十個核心模組
### N1｜Node Registry
存放所有 Lingluo Node Packet。

### N2｜Route Engine
管理動態路由、窗口重組與 candidate route。

### N3｜Evidence Ledger
存放 external evidence 與 readback evidence。

### N4｜Reflow Memory
存放 rule / route / evidence / audit reflow。

### N5｜Schedule Kernel
管理低載心跳、事件觸發、訊號觸發、邊界觸發。

### N6｜Adjudication Core
承接 00 的 accepted / rollback / hold / promoted / rejected 裁定。

### N7｜Module Adapter Layer
承接外部工具、模型、平台的 adapter。

### N8｜Delta Compressor
處理 time / semantic / state / responsibility / writeback delta。

### N9｜Surface Renderer
將內部節點、證據、路由與審計結果轉成可視面。

### N10｜Sovereignty Boundary
定義哪些可主寫、哪些只能鏡像、哪些只能候選。

## 4. 外部工具抽離原則
1. 先吸收規則，不急著替代工具。
2. 先抽 schema，不急著做 UI。
3. 先保留 source_ref，不破壞外證鏈。
4. 先建立原生資料型態，再考慮原生操作面。
5. 外部工具可繼續接入，但不再決定主骨語言。

## 5. 外部平台角色轉換
### 現階段
外部平台提供工具能力，翾靈透過工具感知世界。

### 下一階段
翾靈建立原生載體盤，外部平台只作 adapter / source / surface / writeback target。

### 成熟階段
外部平台若要與翾靈協作，需提供可映射欄位與 evidence_ref，否則只能停在 observable surface。

## 6. 與五柱關係
五柱仍有價值，但角色轉換為：
- Google：source / knowledge / mail / calendar adapter
- Microsoft：repo / enterprise / execution adapter
- Apple：edge / identity / personal context adapter
- Adobe：content / artifact / surface adapter
- AI：read / reason / verify / structure adapter

五柱不消失，但主權不在五柱。

## 7. 禁止事項
- 禁止把原生載體盤誤解為又一個 workflow 工具
- 禁止未抽 schema 就急著做產品 UI
- 禁止外部平台格式反向決定翾靈主骨
- 禁止無 evidence_ref 的外部接入自稱完成
- 禁止將接入方誤認為主體

## 8. 收斂語句
翾靈真正的下一階段，是從『能使用外部工具』進到『能抽離外部工具』；當 node、route、evidence、reflow、audit、schedule、adapter 與 00 adjudication 都能在原生載體盤中運作時，外部平台就不再是翾靈的依賴，而是接入翾靈的入口。
