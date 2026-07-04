# GitHub Native Board Schema — Seed v0.1

一句核心：
GitHub 原生盤面在 Seed 階段，應先由最小欄位構成，讓盤面能承接狀態、阻塞、任務與 handoff，而不依賴外部看板工具。

## 最小區塊
- Board Overview
- Current Layer Status
- Governance Core Entry
- Current Blockers
- Task Follow-up
- Tool Status
- Next Action
- Handoff Target
- Log Entry Ref

## 欄位建議
- Board Item ID
- Title
- Layer
- Current Status
- Responsible Board
- Source Ref
- Writeback Position
- Next Action
- Handoff Target
- Updated Time
- Notes

## Seed 用途
- 作為 ⓪ 公盤與 ② 任務盤的 GitHub 內部替代基底
- 降低對外部訂閱盤工具的依賴
- 讓 blockers、task、status 與 log 在同一主本中可追讀

## 原則
- 先有盤面骨，再談視覺化
- 每一欄位需可回讀至 GitHub 主本文件
- 外部盤工具若接入，只作鏡像或輔助操作層

## 狀態
Seed v0.1
