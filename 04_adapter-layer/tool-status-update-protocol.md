# Tool Status Update Protocol

一句核心：
工具家族的狀態不得憑印象描述；每次連接、測試、失敗、暫停與恢復，都應更新成可回讀的狀態記錄。

## 狀態事件
- Connected：已連接
- Tested：已完成基本測試
- Stable：可穩定承接既定用途
- Paused：暫停使用
- Failed：失敗或中斷
- Restored：恢復可用

## 最小欄位
- Tool Family
- Event Type
- Time
- Related Board
- Trigger
- Result
- Writeback Target
- Notes

## 規則
- 每次工具實測後需留下狀態事件
- Failed 與 Restored 必須成對可追讀
- 無時間與結果者，不得視為正式更新
- 狀態更新需回寫至工具家族狀態表或日誌盤

## 狀態
Seed v0.1
