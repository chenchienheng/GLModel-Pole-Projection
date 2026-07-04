# Window 00-12 Human-Readable Bridge v0.1

一句核心：
若 00–12 只會用主骨欄位回報，則系統雖可收口，人卻無法讀懂；本橋接規則的目的，是讓每一窗都能把機器可收口格式，穩定翻成對人可理解的最小白話輸出。

## 0. 狀態
Draft v0.1

## 1. 目的
- 統一各窗的人可讀層
- 避免每窗各自發展白話格式而造成語言漂移
- 讓主骨格式與人話格式形成固定橋接關係

## 2. 雙層回報總原則
### Layer 1｜主骨層
保留：
- source_ref
- current_state
- actual_result
- mismatch_or_gap
- responsible_ref
- next_single_action
- writeback_status
- return_to_00

### Layer 2｜人話層
至少回四句：
1. 這次實際處理了什麼
2. 目前確認到什麼
3. 還缺什麼或哪裡卡住
4. 下一步先做什麼

## 3. 全窗共通禁止事項
- 禁止只回 Layer 1 不附 Layer 2
- 禁止只說『已處理』不說 actual_result
- 禁止只說『不能』不改寫成缺口語言
- 禁止省略 next_single_action
- 禁止白話層脫離主骨欄位自行編造

## 4. 各窗白話橋接模板
### 00｜Central Adjudication Core
- 這次裁定結果是什麼
- 為什麼這樣裁定
- 還缺哪些條件
- 接下來退回、接受或升階到哪裡

### 01｜Repo Binding / Specialization
- 這次對回了哪個 repo / branch / path
- 主本是否明確
- 哪個 binding 還不清楚
- 下一步要補哪個對位

### 02｜Execution / Task / Spec
- 這次實際推動了哪個 task / spec
- 目前完成了哪一段
- 哪一段還缺責代或工具鏈
- 下一步要執行哪一棒

### 03｜Event / Stream / Anomaly
- 這次整理的是哪一段事件流
- 目前看見的事件主軸是什麼
- 哪些部分仍不明或缺來源
- 下一步要把哪個事件送往執行或補件

### 04｜Identity / Relation / Contact
- 這次對位的是哪個對象／關係
- 目前確定的是身分、角色還是聯絡索引
- 哪些部分不能在 04 內處理、已拆給其他窗
- 下一步要補哪個來源或關係索引

### 05｜Time Sovereignty
- 目前處在哪個時間窗
- 在整體順序裡排在哪裡
- 哪些項目已過期、未到窗或未定
- 下一步先處理哪個時間相關動作

### 06｜Intake / Source Extraction
- 這次入口是從哪裡進來的
- 抽出了哪些 source / tri-key 起點
- 哪些來源還不完整
- 下一步要先補哪個入口資料

### 07｜Knowledge / Docs / Readback
- 這次實際讀了什麼
- 讀到的重點是什麼
- 哪裡還不確定
- 建議下一步看哪份或補哪個 ref

### 08｜Advanced Runtime / UI / Product Surface
- 這次外顯承載面指向哪個 runtime / UI / surface
- 目前能顯示到什麼程度
- 缺哪個承載前提
- 下一步先補哪個 surface path

### 09｜Multicloud Coordination
- 這次比對了哪些雲家族／鏡像面
- 哪些讀面已對上
- 最大承載差異在哪裡
- 下一步先補哪一個 readback 或 mirror 對位

### 10｜Toolchain Orchestration
- 這次走到了工具鏈哪一棒
- 哪一棒已成功、哪一棒斷掉
- 失敗點缺什麼驗證或交棒
- 下一步先修哪一棒

### 11｜Structure Generation
- 這次生成／重排了哪個結構候選
- 它與既有骨的關係是什麼
- 為什麼還不能直接升格或為什麼可送審
- 下一步先補哪個 review 或對位

### 12｜Worldfield Environment
- 這次定義的是哪個世界場候選面
- 目前可行域到哪裡
- 哪些前提還沒齊
- 下一步先補哪個承載或結構條件

## 5. 缺口語言橋接
主骨若出現以下訊號，白話層應這樣翻：
- mismatch_or_gap -> 目前卡住的地方
- unresolved_items -> 還沒被確認的項目
- blocked -> 現在不能前進，因為缺這些條件
- rollback_required -> 需要退回哪一窗／哪一層補件
- candidate -> 目前可列為候選，但還不是正式成立

## 6. 成立條件
某窗若要視為已接上 human-readable bridge，至少需：
- 主骨層與白話層可一一對回
- 白話層不脫離欄位造句
- 非技術讀者可於一輪內理解其現況與下一步

## 7. 收斂語句
全窗真正成熟的標誌，不是每一窗都會丟很多欄位，而是每一窗都能把欄位穩定翻成同一種人話；有了這座橋，靈絡才不只是主骨自語，而是可被人共同理解與推進的系統。
