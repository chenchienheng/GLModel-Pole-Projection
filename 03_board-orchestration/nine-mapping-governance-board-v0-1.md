# Nine-Mapping Governance Board v0.1

一句核心：
九映分權共構盤，不是九個工具名，而是九個不可缺席的盤位作用；工具可替換，盤位責能不得消失。

## 0. 目的
- 將九映從命名層壓成盤位治理層
- 確立每個盤位的最小作用、成立條件與失配判定
- 供後續外部工具接入時，不以品牌定義盤位，而以責能對位盤位

## 1. 九映總表
| 盤位 | 工作名稱 | 最小作用 | 主對位 | 成立條件 | 失配判定 |
|---|---|---|---|---|---|
| ⓪ | 公盤 | 入口整合 / 全局讀面 / rollup | native board / public board | 可 handoff、可對回 source ref | 無 source ref 不得列正式公盤 |
| ❶ | 承載總盤 | 雲端承載 / 分流 / 凍結 / 鏡像路徑 | Cloud / folder layout | 具承載路徑與 mirror / freeze 邏輯 | 亂放資料則視為承載失配 |
| ❷ | 執行盤 | 任務承接 / next action / 責代 | runtime ops / task board | 有責代、有 next action | 無責代不得進執行鏈 |
| ❸ | 事件盤 | 事件聚合 / 異常 / 討論流 | event stream / conversation trace | 事件可對回時間窗與來源 | 無時間窗只列暫態 |
| ❹ | 身分驗證盤 | 角色 / 身分 / 關聯驗證 | identity / contacts | 有 identity ref / role ref | 無 ref 不得視為正式身份節點 |
| ❺ | 時權盤 | 時間主權 / 排程 / 有效窗 | calendar / time routing | 具時間窗與有效序 | 無時間窗不成立 |
| ❻ | 入口盤 | 外來輸入 / intake / mail entry | mail / intake | 有 intake source 與 tri-key 提取起點 | 無 intake ref 不得視為正式入口 |
| ❼ | 知識盤 | 可回讀知識 / 文檔化 / 對位知識 | notion / knowledge view | 可對回母本與版本 | 無版本或 ref 僅作展示層 |
| ⑧ | 進階承載候選位 | 自生平台 / UI / runtime / product surface | advanced runtime candidate | 對回母本、時間窗、責代、回寫位 | 無主寫與回寫控制仍為候選位 |

## 2. 盤位規則
### ⓪ 公盤
- 只承接入口與整合，不主寫覆寫
- 必須顯示 source ref / next action / handoff target
- 對回 native board 與 board orchestration

### ❶ 承載總盤
- 新資料先進 INBOX，再判位分流
- mirror 不作主編輯區
- freeze 不承擔新版主寫

### ❷ 執行盤
- 只承接可行域內、具責代的任務項
- 任務項需具 next action 與 writeback position
- 執行結束須回寫並留 log

### ❸ 事件盤
- 事件盤可承接異常、討論、變更、通知
- 事件必須附時間窗與來源
- 未能對回來源者，不得升為正式事件節點

### ❹ 身分驗證盤
- 身分、角色、聯絡關係均需具 ref
- 身分節點無 ref，只能作暫態辨識
- 身分驗證盤不產生主寫，只承接驗證與關聯

### ❺ 時權盤
- 時間主權優先於工具狀態
- 排程只是表面；有效窗與先後次序才是核心
- 任何正式節點皆需附著於時間窗

### ❻ 入口盤
- 入口盤承接外來輸入，不主導判定成立
- 入口項須轉入 tri-key 提取與對位流程
- 無 source object / intake ref 者不得直入主鏈

### ❼ 知識盤
- 承接可回讀、可共享、可對位的知識面
- 不得取代母本主寫
- 可作對外閱讀與對內對齊面

### ⑧ 進階承載候選位
- 不綁死工具名
- 工作定義為：自生平台 / UI / runtime / product surface
- 候選工具僅作外顯承載，不等於 ⑧ 本體
- ⑧ 升格條件：
  - 具主骨對位能力
  - 具時間窗與責代
  - 具正式回寫位置與 packet contract
  - 可作為外顯操作面而不反向主導母本

## 3. 盤位共構原則
- 分權不是切裂，而是責能分配
- 共構不是混寫，而是對位進鏈
- 每盤皆需對回：
  - 母本
  - 時間窗
  - 責代
  - 回寫位

## 4. 升階規則
- 盤位有名稱，不等於已成立
- 盤位成立需有：
  - 可行域
  - 責代
  - 時間窗
  - source ref
  - writeback position
- 具以上條件者，可視為穩定盤位
- 缺任一項者，退回候選盤位或暫態盤位

## 5. 狀態
Draft v0.1
