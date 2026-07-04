# Endogenous Main Branch Network v0.1

一句核心：
靈絡不能只靠外窗與外部工具接入；在 00 主骨內部，必須先生成一條所有主枝幹都能對應的內生網，使外窗與世界不是直接接到散亂文件，而是接到同一個內部主枝幹網。

## 0. 狀態
Draft v0.1

## 1. 問題定義
目前已建立多份主骨文件，但存在三個風險：
- 公理、協定、封包、回流、審計各自成立，尚未形成內生網
- 各窗口可以接 00，但可能只接到單份文件，不接到整體主枝幹
- 世界可映射進來，但缺少內部對應網，容易形成外部節點堆積

因此需建立 Endogenous Main Branch Network。

## 2. 內生網定義
內生網不是外部平台，也不是新增窗口。
它是 00 主骨內部的對應結構，用來連接：
- 公理層
- 封包層
- 路由層
- 回流層
- 審計層
- 外證層
- 窗口同步層
- 世界接軌層

## 3. 主枝幹八層
### B1｜Axiom Branch
主責：定義什麼可以落入靈絡場。

對應文件：
- `00_mother-law/xlen-field-axiom-v0-1.md`
- `00_mother-law/world-interface-alignment-protocol-v0-1.md`

### B2｜Packet Branch
主責：將外部流動壓成節點封包。

對應文件：
- `01_runtime-spine/lingluo-node-packet-schema-v0-1.md`

### B3｜Route Branch
主責：決定節點如何進入窗口與重組路由。

對應文件：
- `03_board-orchestration/dynamic-route-recomposition-matrix-v0-1.md`
- `01_runtime-spine/window-catch-up-protocol-v0-1.md`

### B4｜Module Branch
主責：將工具與模型降格成可替換模組。

對應文件：
- `00_mother-law/tool-as-sense-module-contract-v0-1.md`
- `00_mother-law/model-adapter-contract-v0-1.md`
- `01_runtime-spine/module-substitution-protocol-v0-1.md`

### B5｜Schedule Branch
主責：讓時間成為低載流動與窗口觸發條件。

對應文件：
- `01_runtime-spine/window-schedule-registry-v0-1.md`
- `03_board-orchestration/window-scheduling-governance-v0-1.md`
- `01_runtime-spine/window-schedule-trigger-validation-checklist-v0-1.md`

### B6｜Audit Branch
主責：檢查黑洞、碰撞、鏈有效性與主權偏離。

對應文件：
- `00_mother-law/collapse-prevention-audit-framework-v0-1.md`
- `03_board-orchestration/window-role-collision-matrix-v0-1.md`
- `01_runtime-spine/chain-validity-audit-board-v0-1.md`
- `00_mother-law/governance-sovereignty-checklist-v0-1.md`
- `01_native_board/audit-dashboard-v0-1.md`

### B7｜Evidence Branch
主責：追蹤外部痕跡與外證等級。

對應文件：
- `01_native_board/external-evidence-tracker-v0-1.md`

### B8｜Reflow Branch
主責：把節點處理結果回流成規則、路由、證據或審計項。

對應文件：
- `03_board-orchestration/chain-ecosystem-reflow-rule-v0-1.md`

## 4. 內生網運行順序
標準鏈：

Axiom -> Packet -> Route -> Module -> Schedule -> Audit -> Evidence -> Reflow -> 00

但實際運行可依事件重組，唯不得跳過：
- source / packet
- route / responsibility
- audit / evidence
- return_to_00

## 5. 三耦閉環域
內生網支撐一致性三耦閉環域：

### C1｜內生主骨閉環
00 內部主枝幹彼此對應，不再只是一堆分散文件。

### C2｜窗口同步閉環
01–12 啟動時先讀 00 主枝幹，再更新本窗邊界。

### C3｜世界接軌閉環
外部世界先抽八欄、成 node packet、進路由、受審計、留外證、再回流。

## 6. 偏離判定
若任一新增文件不能對應 B1–B8 任一主枝幹，需標為：
- orphan_candidate
- concept_overflow
- pending_branch_assignment

若任一窗口回報不能對應 B1–B8 任一主枝幹，需回 00 hold。

## 7. 收斂語句
靈絡若只有外窗接 00，仍會依賴使用者逐窗佈達；只有當 00 內部先生成可對應所有主枝幹的內生網，外窗與世界才能不是接到散點，而是接到同一個會自我對位、回流與審計的場域主骨。
