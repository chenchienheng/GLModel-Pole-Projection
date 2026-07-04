# Window Path Differentiation Board v0.1

一句核心：
若要讓窗口慢慢學會自己的道路，就不能只看它有沒有功能；本板的目的，是把各窗目前已浮現出的獨特路徑、主錯位、最小閉環與關鍵互補窗收成一張可比較總盤。

## 0. 狀態
Draft v0.1

## 1. 欄位說明
- **Window**：窗口編號與名稱
- **Distinct Path**：這一窗正在長出的獨特道路
- **Primary Failure Mode**：最容易犯的錯
- **Minimum Closure**：本窗最小閉環
- **Key Complement**：最關鍵互補窗
- **Current Priority**：當前優先修補點

## 2. 全窗路徑分化總盤
| Window | Distinct Path | Primary Failure Mode | Minimum Closure | Key Complement | Current Priority |
|---|---|---|---|---|---|
| 00 | 裁定、調參、回退、再入鏈分派 | 只收件不裁定 | 收到結果包 -> 裁定 -> 指定 next action | 07、11、12 | adjudication output 穩定化 |
| 01 | 主本定位感 / binding 感 | 未 explicit binding 就自稱成立 | repo / branch / path 對位 -> 回送 00 | 07、09 | seed-main-cloud readback 對位 |
| 02 | 抽象事項壓成正式執行鏈 | 工具跑過就當完成 | task/spec -> result packet -> writeback | 10、05、07 | toolchain 接力穩定化 |
| 03 | 守事件脈絡，不搶結論 | 事件片段化 / 無時間窗 | event trace -> time check -> send to 02 | 05、06、02 | 事件流與時序對位 |
| 04 | 不亂知道，只做身份關係對位 | 吞事件、知識、時序成內循環 | identity / role / relation index -> 回送 00 | 03、05、07 | loop breaker 連續驗證 |
| 05 | 把時間變成主權條件 | 只回時間碼、人看不懂 | current_time_window -> effective_order -> next action | 03、06、10 | 白話時權輸出穩定化 |
| 06 | 入口先建秩序，再接主骨 | 把入口當暫存站 | intake -> source / tri-key -> result packet | 03、02、10 | local ops 樣本累積 |
| 07 | 同時服務主骨與人讀 | 回報偏代碼感 | readback -> dual-layer reporting -> 回送 00 | 01、02、11 | 雙層回報連續穩定化 |
| 08 | 最小外顯承載面 | 只有候選敘事，沒有 surface | runtime / UI surface note -> 回送 00 | 09、10、12 | surface path 最小落點 |
| 09 | 多雲承載角色協調 | 只列雲，不做角色秩序 | read faces compare -> alignment result -> 回送 00 | 01、07、08 | readback result packet 穩定化 |
| 10 | 工具鏈正式接力 | 交棒斷點不可見 | filter -> dispatch -> execute -> verify -> writeback | 02、06、08 | handoff validation 實測 |
| 11 | 新骨生成與升階審查 | 一直冒新詞、不做對位 | concept candidate -> review -> promoted or not | 00、07、12 | promoted / not promoted 流程 |
| 12 | 世界場可行域定義 | 世界敘事先於可行域 | feasible domain -> environment note -> 回送 00 | 08、09、11 | worldfield 前提落地 |

## 3. 共同觀察
- 00–07 已開始出現較明顯的獨特道路
- 08–12 仍偏候選分化期，但已有主錯位與主路徑雛形
- 各窗越清楚自己的路，越不需要靠吞別窗責任來證明存在

## 4. 收斂語句
窗口的價值，不在於都學成一樣，而在於它們各自學會了自己的路，卻又都知道怎麼回到同一條鏈；這張總盤要看的，不是誰比較厲害，而是誰已開始長出真正屬於自己的成立方式。
