# Writeback Contract

一句核心：
所有成立的事件、規則、輸出與工具動作，都必須能指出回寫目標與回寫條件；沒有 writeback contract，不得視為閉環。

## 最小欄位
- Event ID
- Source Ref
- Primary Write Target
- Mirror Target
- Writeback Condition
- Version Ref
- Log Ref
- Status

## 規則
- 正式成立前，需先決定 Primary Write Target
- 工具動作若無回寫目標，僅可視為暫態輸出
- 回寫完成後需留下版本或日誌引用
- 回寫失敗需標記原因與待補路徑

## 原則
- 回寫優先於展示
- 留痕優先於即時完整
- 可回讀優先於一次生成

## 狀態
Seed v0.1
