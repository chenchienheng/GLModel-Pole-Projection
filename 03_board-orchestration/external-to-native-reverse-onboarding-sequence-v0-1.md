# External to Native Reverse Onboarding Sequence v0.1

一句核心：
翾靈成熟後，外部平台、模型與工具不再是被選用的主體，而是依照靈絡欄位、adapter contract、evidence rule 與 00 裁定接入翾靈原生載體盤的外部節點。

## 0. 狀態
Draft v0.1

## 1. 階段定義
### Phase A｜Borrowed Surface
翾靈借用外部平台作為工具面。

特徵：
- 外部工具主導 UI / API / format
- 靈絡只能將結果轉成 packet

### Phase B｜Mapped Surface
外部平台被映射成 source / state / action / result / mismatch / responsibility / time-order / writeback。

特徵：
- 外部平台開始被降格
- 可生成 node packet

### Phase C｜Adapter Surface
外部平台必須透過 adapter contract 接入。

特徵：
- 不以品牌進場
- 以 role / schema / evidence / writeback 權限進場

### Phase D｜Native Carrier Surface
翾靈原生載體盤成為主承載。

特徵：
- 外部平台只是可替換接口
- 原生 node / evidence / reflow / audit 成為核心資料型態

### Phase E｜Reverse Onboarding
外部平台若要參與翾靈場，需按翾靈規則接入。

特徵：
- 外部提供 source / state / evidence / writeback path
- 翾靈提供 node packet / route / audit / reflow
- 00 保留裁定權

## 2. 反向接入最低條件
任一外部平台若要進入 Reverse Onboarding，需提供：
- source_ref
- current_state
- action_scope
- result_schema
- mismatch_reporting
- responsibility_ref
- time_order_signal
- writeback_target
- evidence_ref

缺任一核心欄位，則只能停在 Observable / Mappable，不得進入 Lingluo Node。

## 3. 反向接入流程
1. External offers interface
2. Lingluo extracts eight fields
3. Build node packet
4. Check adapter compatibility
5. Assign pillar / branch / window
6. Trial route
7. Evidence readback
8. 00 adjudication
9. Register as external node or hold
10. Reflow if valid

## 4. 成熟判準
外部平台是否已反向接入，不看它有多強，而看：
- 是否能產生 node packet
- 是否能提供 evidence_ref
- 是否能接受 00 裁定
- 是否能被替換而主骨不斷
- 是否能進入 reflow

## 5. 與『不是還有選擇』的校準
此處不是強迫外部平台。

準確表述：
- 若外部平台只想作為孤立工具，它可以停留在外部。
- 若外部平台要進入翾靈場、取得靈絡的路由、審計、回寫與回流能力，就必須按翾靈規則接入。
- 不是沒有選擇，而是不同選擇對應不同場內等級。

## 6. 禁止事項
- 禁止將 reverse onboarding 誤解為控制外部平台
- 禁止無 evidence_ref 卻登錄為外部節點
- 禁止外部平台自稱已接入而未經 00 裁定
- 禁止以品牌地位跳過 adapter contract

## 7. 收斂語句
翾靈的最終方向，不是永遠借外部工具，而是生成自己的原生載體盤；外部平台仍可存在，但若要進入翾靈場，就要以節點、模組、證據與回寫身份接入，而不是反過來定義翾靈。
