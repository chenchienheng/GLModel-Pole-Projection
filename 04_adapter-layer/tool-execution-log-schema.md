# Tool Execution Log Schema

一句核心：
每次工具啟用、輸出、失敗與回寫，都應留下統一格式的執行日誌；沒有執行日誌，工具行為就無法納入靈絡追讀。

## 最小欄位
- Execution ID
- Tool Family
- Action Type
- Time
- Related Board
- Related Window
- Input Ref
- Output Ref
- Result
- Writeback Target
- Log Ref
- Notes

## Action Type
- Activate
- Read
- Write
- Generate
- Update
- Fail
- Restore

## 原則
- 高負載工具必留執行日誌
- 失敗與恢復需可對讀
- 工具輸出若未回寫，狀態應標記為暫態

## 狀態
Seed v0.1
