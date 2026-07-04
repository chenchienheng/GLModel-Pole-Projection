# Full-Time Chain Coordinate Constraint Framework v0.1

一句核心：
全時鏈不是更高頻排程，而是用時間、空間、來源、窗口、工具、證據與責任形成座標約束，使每個事件、工具輸出與模型結果都能被定位、判位、回寫與回流。

## 0. 狀態
Draft v0.1

## 1. 問題定義
若只有排程，系統只會定時跑。
若只有工具，系統只會被動調用。
若只有模型，系統只會生成回答。

全時鏈要處理的是：
- 事件在何時發生
- 位於哪個數位空間
- 由哪個來源產生
- 應落在哪個窗口
- 應走哪條鏈
- 是否有外證
- 是否能回寫
- 是否能回流成規則

## 2. 全時鏈座標軸
### T｜Time Coordinate
時間座標：
- event_time
- observed_time
- effective_time
- stale_time
- next_trigger_time

### S｜Space Coordinate
空間座標：
- repo path
- Gmail thread
- Calendar event
- Drive / Docs path
- model output surface
- artifact URL
- task board
- GitHub commit

### W｜Window Coordinate
窗口座標：
- 00 mainbone
- 01 source / mirror
- 02 task / execution
- 03 event / discussion
- 04 identity / relation
- 05 time sovereignty
- 06 intake / mail
- 07 knowledge / readback
- 08 runtime HOLD
- 09 surface / artifact
- 10 model integration
- 11 structure candidate
- 12 worldfield HOLD

### C｜Chain Coordinate
鏈條座標：
- CL-Source
- CL-Intake
- CL-Time
- CL-Identity
- CL-Task
- CL-Knowledge
- CL-Surface
- CL-Model
- CL-Evidence
- CL-Reflow

### E｜Evidence Coordinate
證據座標：
- no evidence
- internal note
- repo evidence
- external evidence
- verified evidence
- reflowed evidence

### R｜Responsibility Coordinate
責任座標：
- responsible_window
- responsible_tool
- responsible_model
- responsible_human
- 00 adjudication

### P｜Permission Coordinate
權限座標：
- readable
- writable
- candidate only
- blocked
- hold
- forbidden

## 3. 坐標封包格式
```yaml
ft_chain_id:
time_coordinate:
space_coordinate:
window_coordinate:
chain_coordinate:
evidence_coordinate:
responsibility_coordinate:
permission_coordinate:
source_ref:
actual_result:
mismatch_or_gap:
next_single_action:
return_to_00:
```

## 4. 全時鏈不是全自動
全時鏈不代表：
- 背景無限制執行
- 高頻掃描所有資料
- 繞過平台或公司限制
- 每個工具都常駐

全時鏈代表：
- 任何被喚醒的節點都能定位
- 任何被測出的差異都能座標化
- 任何結果都能回 00
- 任何有效結果都能回流成規則

## 5. 空間約束規則
任一外部物件若無法給出 space_coordinate，只能停在 observation。

例：
- Gmail message -> space = message_id / thread
- Calendar event -> space = event_id / time window
- GitHub file -> space = repo / branch / path / commit
- Gemini output -> space = output surface / source doc
- Claude output -> space = output_ref / artifact_ref
- Gamma deck -> space = artifact URL / deck id

## 6. 時間約束規則
任一節點若無 time_coordinate，需標為：
- timeless_candidate
- current_time_unknown
- stale_risk

時間不是提醒；時間是 effective_order 的約束來源。

## 7. 與窗口調度關係
工具測試先形成 tool_probe_result。
再轉成 ft_chain_coordinate。
再由 00 判定：
- hold
- route
- writeback_ready
- active_sync
- reflow

## 8. 禁止事項
- 禁止把排程等同全時鏈
- 禁止把空間路徑不明的項目升級
- 禁止無時間座標判定 effective_order
- 禁止無證據座標宣稱完成
- 禁止無權限座標啟動寫回

## 9. 收斂語句
全時鏈的價值，是把時間與空間從背景條件變成可計算的座標約束；當每個工具、模型、事件、文件與任務都有 T/S/W/C/E/R/P 座標時，靈絡就能把數位世界從散亂表面收成可定位、可判位、可回寫、可回流的網絡拓樸。
