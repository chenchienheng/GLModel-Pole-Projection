# Seed Cleanup Rule

一句核心：
Seed 層不是永久堆放區；候選種子、暫態輸出與過窗窗口，應依清理規則定期整理，避免主鏈與索引被雜質淤積。

## 清理對象
- Expired Candidate Seed
- Stale Hold Item
- Overdue Window
- Unused Mirror Output
- Draft without Writeback

## 處理結果
- Promote to Main Slice Candidate
- Keep with New Window
- Archive
- Return for Rewrite
- Discard with Log

## 判定依據
- 是否仍在時間窗內
- 是否仍與主案相關
- 是否已有 Responsible Board
- 是否已有可續接路徑
- 是否已被 superseded

## 原則
- 清理不得直接刪除已成立內容
- Discard 需保留最小 log 與原因
- 被清理內容若需再用，應重走 intake 或 retrieval
- 清理結果需更新候選種子隊列或治理索引

## 狀態
Seed v0.1
