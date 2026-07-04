# Blocker Shift to GitHub Native Board Rule

一句核心：
若 GitHub 原生盤已足以承接入口、阻塞、任務與 log 入口，則部分原先依賴外部盤工具的阻塞項，應轉為 GitHub-native-first，而非持續綁在外部盤訂閱條件上。

## 適用阻塞
- BR-02：⓪ 公盤首輪接入
- BR-03：② 任務盤首輪接入

## 轉換邏輯
- 若 GitHub Native Board 通過最小驗收，BR-02 可改列為 optional mirror enhancement
- 若 GitHub Native Board 已具備 Task Follow-up 區塊，BR-03 可先以 native task flow 起步，再決定是否接外部任務盤
- 外部盤工具改列為 optional mirror / optional task surface，不再作唯一前置條件

## 原則
- 轉換阻塞不等於取消外部工具，只是改變依賴層級
- GitHub-native-first 不改變 GitHub 主本策略，反而強化它
- 若後續接入外部盤，仍需回寫 blockers、routing seed 與 status map
- 轉換結果需保留 supersedes 或 replacement reference

## 狀態
Seed v0.1
