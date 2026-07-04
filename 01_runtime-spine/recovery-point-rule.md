# Recovery Point Rule

一句核心：
靈絡在關鍵操作、版本切換與工具失敗前後，應保留可回復的節點；沒有回復點，續鏈就只能重推，不能穩定復位。

## 適用情境
- 版本切換前後
- 主寫位切換前後
- 高負載工具執行前後
- 關鍵窗口關閉前
- 工具失敗與恢復之間

## 最小欄位
- Recovery Point ID
- Time
- Related Window
- Related Board
- Version Ref
- Snapshot Ref
- Trigger
- Restore Method
- Notes

## 原則
- 回復點應能對回快照、版本與主寫位
- 無回復點的高風險操作不得視為完整
- 恢復後需留下 Restored 記錄

## 狀態
Seed v0.1
