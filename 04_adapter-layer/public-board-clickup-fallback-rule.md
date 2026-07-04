# Public Board ClickUp Fallback Rule

一句核心：
若 Notion 未通過 ⓪ 公盤首輪驗收，應切換至 ClickUp 作替代候選，但仍維持 GitHub 主寫與公盤鏡像定位不變。

## Trigger
- Public Board First Test Result = Fail
- or Partial with unresolved handoff / source ref visibility issues

## Fallback Steps
1. Mark Notion first attempt as failed-first-attempt or partial
2. Update blockers and routing seed
3. Set ClickUp as next public board candidate
4. Reuse Public Board Minimum Schema and Acceptance Checklist
5. Keep GitHub as primary write and only test mirror-entry behavior

## Principles
- Fallback changes candidate tool, not repository strategy
- ClickUp fallback does not make ClickUp a primary write surface
- All retry attempts should preserve source refs and writeback order
- Fallback should leave supersedes or replacement references

## Status
Seed v0.1
