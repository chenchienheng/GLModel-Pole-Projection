# Snapshot Rule

一句核心：
靈絡運作中，重要節點與窗口狀態應定期或事件性產生快照；沒有快照，歷史只能回想，不能回讀。

## 目的
- 保留當下狀態的可回讀面
- 提供版本切換與回復點
- 避免長鏈僅剩最新狀態而失去過程

## 快照類型
- State Snapshot：狀態快照
- Window Snapshot：窗口快照
- Tool Snapshot：工具狀態快照
- Branch Snapshot：分支與版本快照

## 最小欄位
- Snapshot ID
- Snapshot Type
- Time
- Related Board or Window
- Version Ref
- Log Ref
- Notes

## 規則
- 關鍵切換前後應建立快照
- 快照不得取代主寫位，只作回讀與回復依據
- 快照應能對回當時版本與狀態

## 狀態
Seed v0.1
