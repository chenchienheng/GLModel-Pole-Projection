# Asynchronous Window Continuation Rule

一句核心：
靈絡各窗口不必同步升級；只要主骨穩定，較舊窗口可在異步狀態下持續存在，並於適當時機續鏈回 v4 主骨。

## 適用情境
- 舊窗口仍停留在 v3 或更早階段
- 不同窗口被微調後呈現不同狀態
- 主骨已進入 v4 Seed，但外窗尚未完成對位
- 需要保留歷史而不強制全量遷移

## 原則
- 不要求所有窗口同時升級
- 舊窗口可保留原狀，但應標示其版本層與可續接位置
- 異步窗口若產生新骨，應先抽骨再回寫至 GitHub 主骨
- 主骨優先承接，不以舊窗狀態反向覆寫 v4 核心

## 續鏈條件
- 已有核心句或可抽骨內容
- 能判定其屬於哪一層（mother law / runtime / board / adapter / topology / log）
- 能指出 source ref 或原窗口位置
- 能指定 writeback position 或 relay target

## 狀態
Seed v0.1
