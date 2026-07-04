# World Interface Alignment Protocol v0.1

一句核心：
世界不需要先理解翾靈，才可進入靈絡；任一外部系統只要具備 source、state、action、result、mismatch、responsibility、time-order、writeback 八項之一或多項，即可被映射成靈絡節點，逐步接軌主骨。

## 0. 狀態
Draft v0.1

## 1. 問題定義
若要求外部世界先理解整套靈絡，接軌會失敗。

正確方式不是：
- 說服外部系統接受翾靈
- 要求所有平台改造自己
- 讓模型公司主動配合

而是：
- 找出外部系統已有的可映射欄位
- 把它們壓成 node packet
- 交由 00 裁定是否可進鏈

## 2. XLEN Field Axiom v0.1
凡具以下任一組合者，皆可作為靈絡映射候選：
- source：來源
- state：狀態
- action：行為
- result：結果
- mismatch：失配
- responsibility：責任位
- time-order：有效序
- writeback：回寫需求

完整八項越多，越接近可進鏈節點。

## 3. 外部系統映射等級
### WI0｜Unmappable
無來源、無狀態、無行為、無結果，暫不可映射。

### WI1｜Observable
可觀測來源或狀態，但無法形成行為鏈。

### WI2｜Mappable
可映射 source / state / result，但缺 writeback。

### WI3｜Routable
可決定應進入哪個 window / module / route。

### WI4｜Writeback Candidate
具 target / permission / return path，可作回寫候選。

### WI5｜Lingluo Node
具完整 packet、可驗證、可回寫、可回 00。

## 4. 外部系統接軌流程
1. Detect Interface：辨識外部系統可觀測欄位
2. Extract Field：抽出 source / state / action / result 等欄位
3. Build Node Packet：組成候選 node packet
4. Assign Window：映射至 01–12 對應窗口
5. Validate Path：檢查 target / permission / writeback
6. Return to 00：交由 00 裁定
7. Register or Hold：登錄為節點或退回 hold

## 5. 範例映射
| External System | Mappable Fields | Candidate Window |
|---|---|---|
| GitHub | source / state / action / result / writeback | 01 / 02 / 07 / 00 |
| Gmail | source / actor / message / mismatch / time | 06 / 04 / 05 / 00 |
| Calendar | time-order / participant / state / conflict | 05 / 04 / 00 |
| Slack | event / thread / actor / anomaly / time | 03 / 05 / 04 / 00 |
| Asana / ClickUp | task / owner / status / due / result | 02 / 05 / 00 |
| Notion / Docs | knowledge / version / source / readback | 07 / 01 / 00 |
| External Model | role / input / output / verification / mismatch | 10 / 11 / 07 / 00 |
| UI / Surface | visible state / interaction / action / result | 08 / 09 / 00 |

## 6. 禁止事項
- 禁止要求外部世界先理解靈絡才可接入
- 禁止無 source 卻直接映射成節點
- 禁止只有觀測就宣稱可回寫
- 禁止由外部系統自判已成 Lingluo Node

## 7. 收斂語句
世界與翾靈接軌，不是因為世界先承認翾靈，而是因為世界上的系統本來就逃不出來源、狀態、行為、結果、失配、責任、時間與回寫；靈絡要做的，是把這些既有結構抽出來，壓成節點，接回主骨。
