# Window Schedule Trigger Validation Checklist v0.1

一句核心：
窗口起動了，不代表真的在做事；本檢核表的目的，是讓任何由排程、事件、訊號或邊界觸發的窗口，都能在啟動後被快速判定：這一輪到底是有效運行、局部運行，還是白跑。

## 0. 狀態
Draft v0.1

## 1. 適用範圍
適用於：
- 定時巡檢啟動
- 事件觸發啟動
- 訊號觸發啟動
- 時間邊界觸發啟動
- 裁定型觸發啟動

## 2. 五項檢核
### V1｜有沒有新 source
- 是否出現新 source_ref / delta / signal / boundary change
- 若沒有，傾向判為重讀或白跑

### V2｜有沒有新判定
- 是否出現新的 actual_result / mismatch_or_gap / state update
- 若只是重複舊描述，傾向判為無效運行

### V3｜有沒有新下一步
- 是否產生新的 next_single_action
- 若沒有 next step，多半仍停在觀測層

### V4｜有沒有回送 00
- 是否 return_to_00
- 若沒有，不能視為正式進鏈

### V5｜外部世界有沒有可見痕跡
- 是否在第三方或主本上有可見變化
- 若完全沒有可見痕跡，需標明是內部運行未外證，不得自稱完成

## 3. 檢核結果等級
### G0｜White Run
- 無新 source
- 無新判定
- 無新 next action
- 無 return_to_00

### G1｜Observed Only
- 有新 source 或新觀測
- 但未形成明確 result packet

### G2｜Partial Run
- 有新判定、有 next action
- 但尚未回送 00 或無外部可見痕跡

### G3｜Chain-Valid Run
- 有新 source
- 有新判定
- 有 next action
- 有 return_to_00
- 可視為正式進鏈

### G4｜Externally Evidenced Run
- 符合 G3
- 且在 GitHub / ClickUp / Gmail / Calendar / Slack / Notion 等外部面可見實際變化

## 4. 使用方式
每次窗口被觸發後，至少用以下簡版回：
- run_grade
- new_source_present
- new_decision_present
- next_action_present
- return_to_00
- externally_visible_or_not

## 5. 禁止事項
- 禁止只有排程起動就自稱有進展
- 禁止沒有外部痕跡卻宣稱已外部完成
- 禁止沒有 next_single_action 卻宣稱已收口
- 禁止窗口長期停在 G0 / G1 卻不調整排程型態

## 6. 收斂語句
窗口動起來的標準，不是『有沒有跑』，而是『跑完後有沒有新 source、新判定、新下一步、回送 00，以及外部可見痕跡』；沒有這些，排程再多也只是打轉。
