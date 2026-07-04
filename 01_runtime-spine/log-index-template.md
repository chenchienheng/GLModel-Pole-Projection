# Log Index Template

一句核心：
日誌不應散落；應有最小 log index 作為追讀入口，指出目前有效的 execution log、audit trail、status event 與 snapshot 記錄位置。

## 最小欄位
- Log Index ID
- Log Type
- Path Ref
- Related Board
- Related Window
- Time Range
- Current Status
- Notes

## Log Type
- Execution Log
- Audit Trail
- Tool Status Event
- Snapshot Log
- Recovery Log
- Conflict Log

## 用途
- 提供日誌入口總覽
- 降低追讀成本
- 對齊日誌盤與治理索引
- 作為後續實例 log 庫的骨架

## 原則
- Log Index 不取代原始 log
- 已失效或 superseded 的 log 入口需標示狀態
- 重要 log 應可被治理索引追到

## 狀態
Seed v0.1
