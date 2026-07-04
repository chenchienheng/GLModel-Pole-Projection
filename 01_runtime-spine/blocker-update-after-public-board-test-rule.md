# Blocker Update After Public Board Test Rule

一句核心：
⓪ 公盤首輪實測後，阻塞清單不得停留舊狀態；應依測試結果即時更新 BR-02 與相關依存阻塞。

## 更新對象
- Current Blockers — Seed v0.1
- Blocker Resolution Order — Seed v0.1
- Tool Family Status — Seed v0.1
- Board Tool Routing — Seed v0.1

## 更新邏輯
- Pass：BR-02 標記 resolved，並推進下一阻塞項
- Partial：BR-02 保留但附補件項與下一次測試條件
- Fail：BR-02 標記 failed-first-attempt，並指向替代候選工具

## 原則
- 阻塞狀態需與首測結果一致
- 工具狀態與 routing seed 應同步更新
- 若切換候選工具，需留下 supersedes 或替代引用
- 更新後需保留來源測試結果引用

## 狀態
Seed v0.1
