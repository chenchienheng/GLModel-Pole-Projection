# Board State Transition Rule

一句核心：
盤位不是靜態容器；每個盤都應有可追讀的狀態流轉，否則無法判斷當前是承接、處理、暫停還是已結束。

## 狀態
- Intake：進件
- Assigned：已指派責代
- Active：處理中
- Hold：暫停
- Waiting Writeback：待回寫
- Closed：已結束
- Archived：封存

## 規則
- 任何盤位事件進場先為 Intake
- 未指派責代不得進入 Active
- 未完成回寫不得直接 Closed
- Closed 後如需再開，應建立新流轉並引用舊記錄

## 最小欄位
- Board ID
- Event ID
- From State
- To State
- Time
- Trigger
- Responsible Ref
- Log Ref

## 狀態
Seed v0.1
