# Release Note Template

一句核心：
每次釋出、升階、凍結或併幹前，都應附上最小釋出說明；沒有 release note，後續追讀只會看到結果，看不到理由。

## 最小欄位
- Release ID
- Version
- Scope
- Summary
- Included Changes
- Excluded Changes
- Related Board
- Snapshot Ref
- Recovery Point Ref
- Known Risks
- Rollback Hint
- Date

## 用途
- 說明本次變更範圍
- 提供後續追讀與回退依據
- 區分已納入與未納入之內容
- 對齊 gate 與版本說明

## 原則
- 釋出前應先有 release note
- 未說明 scope 者，不得宣稱完整釋出
- Release Note 需能對回版本、快照與風險說明

## 狀態
Seed v0.1
