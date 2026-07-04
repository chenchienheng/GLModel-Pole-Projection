# Blocker Resolution Order — Seed v0.1

一句核心：
Seed 層阻塞不應同時亂補；應依對主鏈穩定性的影響順序，逐步解除最關鍵阻塞。

## Resolution Order
1. BR-01：建立第一份 Log Index 實例與首批正式 log 入口
2. BR-02：完成 ⓪ 公盤候選工具首輪實測，確定公盤主工具
3. BR-03：完成 ② 任務盤候選工具首輪實測，確定任務盤主工具
4. BR-04：建立第一個正式 writeback 實例案例
5. BR-05：建立第一個 snapshot + recovery / rollback 演練案例
6. BR-06：補 version lineage 與 supersedes 對位
7. BR-07：收成第一份可提請 Stable 的正式候選包

## 判定原則
- 先補會影響主鏈穩定與升階判定的阻塞
- 工具接入以低負載、可回寫者優先
- 每解除一項阻塞，需同步更新 blockers、status map 與 governance index

## Current Focus
- BR-01 已由 log index seed instance 起步，但仍待首批正式 log ref
- 下一焦點建議：BR-02 公盤候選工具首輪實測

## 狀態
Seed v0.1
