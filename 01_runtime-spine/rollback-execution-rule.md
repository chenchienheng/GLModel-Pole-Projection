# Rollback Execution Rule

一句核心：
當釋出、升階、工具切換或主寫位變更後出現失配時，應依回滾規則復位；沒有回滾規則，回退只能靠臨場猜測。

## 適用情境
- Release 後失配
- Stable Promotion 後失配
- Main Merge 後失配
- Tool Switch 後失配
- Primary Write Change 後失配

## 最小欄位
- Rollback ID
- Trigger
- Failed Ref
- Target Recovery Point
- Related Snapshot
- Responsible Ref
- Time
- Result
- Notes

## 執行順序
1. 停止進一步覆寫
2. 標記當前失配狀態
3. 指向對應 Recovery Point
4. 執行回滾或局部回退
5. 留下 Rollback Result 與後續處理路徑

## 原則
- 回滾不得抹除失配痕跡
- 回滾後需保留舊版與新版引用
- 無 Recovery Point 者，不得宣稱可安全回退
- 回滾完成後仍需補足 writeback 與 audit trail

## 狀態
Seed v0.1
