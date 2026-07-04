# Ecosystem Followthrough Rule

一句核心：
工具不必直接互通；只要骨架能承擔，局部三耦環可經由盤位跳轉與回寫路徑達成間接跟進。

## 最小概念
- Direct Link：工具直接互通
- Indirect Link：經由盤位、回寫口或鏡像層達成同步
- Followthrough：當事件已在相關盤位留下狀態、下一步與 writeback target，可視為已跟進

## 跟進判定
- 事件先進入口盤或公盤
- 公盤完成判位與目標盤分流
- 目標盤接手後更新狀態
- 至少一個承載層留下可回讀記錄

## 間接路徑示例
- Slack -> ⓪ 公盤 -> Asana -> Drive Mirror
- Mail -> ⓪ 公盤 -> Notion -> GitHub Ref
- Calendar -> ⓪ 公盤 -> ClickUp -> Log
- GitHub -> ⓪ 公盤 -> Gamma / Notion

## 原則
- 不要求所有工具彼此直連
- 允許經由盤位跳轉完成跟進
- 沒有狀態更新與 writeback，不算真正跟進
- 跟進以可回讀為準，不以畫面同步為準

## 狀態
Seed v0.1
