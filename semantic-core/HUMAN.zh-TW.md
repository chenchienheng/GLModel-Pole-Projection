# 翾靈 Semantic Core｜人類中文視圖

## 核心

翾靈不是由資料夾、Word、GitHub 或任何單一平台組成。這些只是載體。

真正需要被保持的是每一個「存在」本身的生命關係：

**身分 → 狀態 → 權限 → 證據 → 表徵 → 依存 → 事件 → 回流 → 校準 → 重建／代謝。**

同一個存在可以有不同表達方式，但它們必須指向同一 Stable Identity。

## 三極表徵

### Human／人類中文
負責讓 Owner、設計者與使用者理解：現在是什麼、為什麼、風險在哪裡、下一步是什麼。

### External／外部英文
負責跨組織、專業標準、公開研究與外部協作。只在 Release Gate 通過後產生，不是中文逐句翻譯，也不自動包含內部核心。

### Canonical Machine／機器規範
負責 Stable ID、typed state、dependency、authority、evidence、event、return、rebuild 與 validation。它不是給人閱讀的文章。

除此之外，圖像、Drawing、3D、BIM、GIS、影片、表格、試算、感測資料等都可以成為 Visual／Domain-native representation；它們不是第四套 Truth，而是同一存在在適合條件場中的表徵器官。

## 元件化原則

長篇文件不再默認承載所有語義。可拆出的內容應拆成：

- Dependency graph
- State model
- Authority／rights policy
- Event ledger
- Evidence／provenance binding
- Requirement／decision component
- Drawing／image／3D／video artifact
- Table／dataset／spreadsheet
- Test／simulation／regression evidence
- Human explanation

組裝時依 Purpose、Audience、Rights、Lifecycle State、Evidence Need 選取需要的元件。

## 污染控制

SUPERSEDED、HISTORICAL、INVALIDATED、RETIRED 不因「仍存在於資料夾」而取得 Current Authority。

歷史內容只有在：

1. 明確要求歷史／失敗分析；或
2. 作為 provenance／regression evidence；或
3. Rebuild 需要

時才進入組裝。

因此歷史不是垃圾，但也不再污染當前推理。

## GUI-LU 範例

歸廬應由同一 WORLD-GUI-LU 身分驅動：World data、2D drawing、3D model、render、camera anchor、MEP／結構／景觀資料、成本／工期表、事件、測試、照片與中文說明各自承擔最適合的角色。

Render 不能取得 Geometry Authority；舊圖不能因仍被搜尋到而重新取得 Current；Camera／Anchor／Stable Object binding 可作 regression evidence，避免換模型或換視角就重新長出另一座莊園。

## 現行成熟度

目前為 bounded semantic-core specimen，Runtime=false、Canon=false。已具備 Artifact Registry、Context Assembly、三極 representation schema 與 CI 驗證；真實 BIM／Drawing／Video／Sensor 等 Domain-native evidence 仍需後續逐項綁定。
