# Audit Trail Rule

一句核心：
靈絡中的關鍵判定、狀態切換、工具動作與 gate 結果，都應留下可追讀的稽核軌跡；沒有 audit trail，成立只能被宣稱，不能被驗證。

## 稽核對象
- 主切面判定
- 盤位狀態流轉
- 工具啟用與輸出
- Writeback 結果
- Gate 判定與 freeze / release 記錄
- 衝突解決結果

## 最小欄位
- Audit ID
- Time
- Event Type
- Related Board or Window
- Trigger
- Result
- Responsible Ref
- Source Ref
- Log Ref
- Notes

## 原則
- 關鍵操作需有稽核記錄
- 稽核記錄不得取代主寫位，只作驗證與追讀依據
- 稽核記錄需能對回版本、快照或回寫結果

## 狀態
Seed v0.1
