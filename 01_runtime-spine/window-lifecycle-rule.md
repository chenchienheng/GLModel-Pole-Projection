# Window Lifecycle Rule

一句核心：
每個窗口都有生命週期；未經開窗、續窗、關窗與封存判定者，不得視為穩定運行中的正式窗口。

## 生命週期
- Open：開窗，建立用途、主切面、責代與時間窗
- Active：運行中，允許更新狀態與回寫
- Hold：暫停，保留入口但不持續展開
- Close：關窗，主切面完成或終止
- Archive：封存，僅供回讀與歷史追讀

## 最小欄位
- Window ID
- Purpose
- Primary Slice
- Responsible Board
- Time Window
- Status
- Log Ref

## 規則
- 未開窗者，不得直接進入 Active
- 關窗前需標示完成、終止或待續原因
- 封存後不得作為主寫位重新覆寫歷史
- 重新啟用需建立新窗口並引用原窗口

## 狀態
Seed v0.1
