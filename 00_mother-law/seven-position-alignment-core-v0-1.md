# Seven-Position Alignment Core v0.1

一句核心：
七位對齊不是分類表，而是靈絡正式進鏈前的七個核對位；缺一，可視化可存在，正式成立不得成立。

## 作用
- 將母法、主寫、運行、入口、承接、鏡像、回寫強行對位於同一條時間主權鏈
- 使多雲、多模型、多工具只作承載與映射，不反向主導主骨
- 作為後續九映分權共構盤與十遞歸閉環全時鏈的最小審查核心

## 七位對齊

### 1. 母本｜Mother-Book
**定義**
- GitHub 主寫與版本源
- 作為 Primary Source / Primary Write 的主骨承載

**對位**
- repository root
- main / seed / stable 版本線
- commits / issues / pull requests / spec files / architecture files / process files

**成立條件**
- 必須可回對 source ref
- 必須具版本與時間窗
- 不得被 mirror 反向覆寫

**失配判定**
- 無 source ref：不得列為正式母本項
- 無版本線：只列候選，不得視為穩定成立

---

### 2. 母框｜Mother-Frame
**定義**
- 母法與成立邊界
- 決定何者可成立、何者只能暫態、何者不得進鏈

**對位**
- `00_mother-law/`
- `coretri-cn-definition.md`
- `existence-consistency-rule.md`
- `governance-index-seed-v0-1.md`

**成立條件**
- 必須對回《存・在・續》一致性
- 必須定義成立／暫態／待補件的判定邊界
- 必須優先於工具盤位與呈現形式

**失配判定**
- 無一致性邊界：不得進正式審查
- 工具先於母法：視為倒掛，不得升階

---

### 3. 母架｜Mother-Structure
**定義**
- runtime spine 與運行脊椎
- 將母法落成可運作、可回讀、可續接的骨架

**對位**
- `01_runtime-spine/`
- window lifecycle / snapshot / recovery point / writeback / dependency / audit trail

**成立條件**
- 必須有 window lifecycle
- 必須有 recovery / snapshot / audit 能力
- 必須支撐 single-slice execution 與 writeback contract

**失配判定**
- 無運行脊椎：僅能討論，不能進正式運作
- 無回復點：不得視為可重建骨架

---

### 4. 公盤｜Public Board
**定義**
- 入口整合與全局讀面
- 承接 rollup、status、blockers、handoff target 與 source ref 的外顯整合面

**對位**
- `01_native_board/`
- `03_board-orchestration/` 中與 public board / intake / handoff / arbitration 相關規則

**成立條件**
- 只承接入口與整合，不承接主寫覆寫
- 每個項目皆可對回 GitHub 主本分支
- 必須可 handoff、可讀、可追來源

**失配判定**
- 無 source ref：不得列入正式公盤
- 公盤反向主導主寫：視為越權

---

### 5. 子盤｜Sub-Board
**定義**
- 任務承接與責代追蹤面
- 將 next action、responsible ref、handoff source 與 writeback position 落成可運作追蹤位

**對位**
- `02_runtime_ops/`
- `03_board-orchestration/` 中與 task board / candidate queue / execution checklist 相關規則

**成立條件**
- 必須有責代承接
- 必須有 next action
- 必須可對回公盤或 GitHub 來源

**失配判定**
- 無責代：只列暫態，不得視為穩定節點
- 無 next action：不得進執行鏈

---

### 6. 鏡像｜Mirror
**定義**
- 外部承載／投影／回讀面
- 供多雲、多工具、多家族作共享、展示、備援、交互之用

**對位**
- `04_adapter-layer/`
- `90_MIRROR`
- 外部雲端承載與多工具操作面

**成立條件**
- 必須保留 ref link 或回寫來源
- 必須可回讀
- 不得反向覆寫 Primary Write

**失配判定**
- 無 ref link：僅視為暫存或展示層
- mirror 主導成立條件：不得進正式鏈

---

### 7. 回寫｜Writeback
**定義**
- packet contract + log append 的正式回勾鏈
- 不是單純同步，而是可驗證、可追責、可審計的回勾封包

**對位**
- `04_adapter_layer/writeback_packet_contract.md`
- `01_runtime-spine/writeback-contract.md`
- `08_log-board/`

**成立條件**
- 必須具 source_object / source_path / target_path / version / log_ref / timestamp / action / payload
- 成功回寫後，必須 append log
- 必須受時間主權與版本有效窗約束

**失配判定**
- 無 packet：不得視為正式回寫
- 無 log append：證據鏈不完整，不得視為閉環成立

## 全鏈審查規則
- 無時間窗，不成立
- 無母本，不正式
- 無母框，不可判
- 無母架，不可運作
- 無公盤，不可整合
- 無子盤，不可承接
- 無鏡像，不可擴散回讀
- 無回寫，不可閉環

## 七位審查結果
- 七位齊備：可視為正式進鏈候選
- 七位齊備且回寫完成：可視為閉環成立
- 任一缺位：退回對應窗補件

## 狀態
Draft v0.1
