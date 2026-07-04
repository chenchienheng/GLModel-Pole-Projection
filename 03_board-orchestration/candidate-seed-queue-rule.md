# Candidate Seed Queue Rule

一句核心：
未被選為主切面的內容不得丟失，應掛為候選種子並排入可回讀、可續接的隊列。

## 目的
- 保留高密度輸入中的旁支價值
- 避免一次展開造成主鏈負載過高
- 讓未處理內容仍有後續入口

## 最小欄位
- Seed ID
- Source Input Ref
- Slice Type
- Priority
- Window
- Suggested Board
- Suggested Tool
- Status

## 規則
- 主切面以外內容一律先掛種
- 候選種子需可被回讀與續接
- 已失效或過窗種子需標記失效原因
- 轉為正式切面時需留下 handoff 記錄

## 狀態
Seed v0.1
