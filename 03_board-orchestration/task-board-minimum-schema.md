# Task Board Minimum Schema

一句核心：
② 任務盤若要作為首輪任務承接面，應先有最小頁面結構；沒有結構，任務盤只會變成任務堆積區，不能承接責代與 next action。

## 最小區塊
- Current Focus
- Task Queue
- Responsible Ref
- Status
- Next Action
- Handoff Source
- Writeback Position
- Source Ref

## 欄位建議
- Task ID
- Title
- Current Status
- Responsible Board
- Responsible Ref
- Next Action
- Handoff Source
- Writeback Position
- Updated Time
- Notes

## 原則
- 任務盤只承接任務追蹤與 handoff 後續，不承接 rule 主寫
- 每個任務項都應可對回 GitHub 或公盤來源
- 未能對回來源者，不得列入正式任務盤
- 任務盤頁面應先少量、可讀、可追責

## 狀態
Seed v0.1
