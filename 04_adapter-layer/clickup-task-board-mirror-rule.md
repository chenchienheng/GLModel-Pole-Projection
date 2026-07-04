# ClickUp Task Board Mirror Rule

一句核心：
若 ClickUp 作為 ② 任務盤首輪候選，其角色應限定為任務承接、next action 追蹤與 handoff 可見層，不得反向搶占 GitHub 主寫位。

## 角色
- Task Tracking View
- Responsibility Visibility Layer
- Handoff Follow-up Layer

## 可承接內容
- BR-02 follow-up
- BR-03 current test items
- Writeback follow-up tasks
- Responsible Board / Ref tracking
- Next Action queue

## 不承接內容
- Rule 主寫
- Version 主寫
- Governance Core 主寫
- Freeze / Release 主寫

## 原則
- ClickUp 只作任務盤承接，不改寫 GitHub
- 每個任務項需保留 Source Ref
- 任務更新若影響正式骨架，優先更新 GitHub 後再同步任務盤
- 首輪通過後，才可討論是否升為任務盤主工具

## 狀態
Seed v0.1
