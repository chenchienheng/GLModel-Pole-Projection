# Task Board Asana Fallback Rule

一句核心：
若 ClickUp 未通過 ② 任務盤首輪驗收，應切換至 Asana 作替代候選，但仍維持 GitHub 主寫與任務盤承接定位不變。

## Trigger
- Task Board First Test Result = Fail
- or Partial with unresolved responsibility / handoff visibility issues

## Fallback Steps
1. Mark ClickUp first attempt as failed-first-attempt or partial
2. Update blockers and routing seed
3. Set Asana as next task board candidate
4. Reuse Task Board Minimum Schema and Test Result Template
5. Keep GitHub as primary write and only test task-tracking behavior

## Principles
- Fallback changes candidate tool, not repository strategy
- Asana fallback does not make Asana a primary write surface
- All retry attempts should preserve source refs and writeback order
- Fallback should leave supersedes or replacement references

## 狀態
Seed v0.1
