# DCP 語義核心｜人類讀取面

這裡不是另一份 DCP 契約，而是把現有 DCP 裡適合機器判讀的部分抽成可驗證結構。

## 先怎麼讀

`index.json` → `instances/active-state.json` → `instances/return-ledger.json` → 本頁／圖表 → affected surface。  
歷史、Superseded、Invalidated、Retired 內容預設不進 Current；只有具名 provenance、audit、failure learning、regression 或 rebuild 目的才重新進場。

## 現在可以直接回答什麼

- 哪些變更只是搬資料夾或改名稱，DCP 應忽略。
- 哪些變更真正改到 Stable Identity、Native Home、Authority、State、Return、Re-entry 或 Rebuild。
- 一條 Requirement 是否已綁到合法 Intent、Stable Object、Acceptance、Evidence 與 Return；缺證時應停在哪個 Gate。
- 資料「能讀」是否同時具有 Copy、Learn、Retain、Write-back、Delete 或 Export 權利。
- Return 是否只是送達，還是已真正 Reconciled。
- User Learning 是否已經形成 Core Learning Candidate、是否通過 Admission。
- 若系統失效，應從哪個 Native Source／Last-valid Checkpoint 與哪些 Accepted Delta 重建。

## 七個核心面

1. Dependency Families：Identity／Relation、State、Requirement Thread、Authority、Return、Rebuild、Representation 的 affected families。
2. State Envelope：把不同狀態拆開，不用一個 Current 標籤包辦全部。
3. Requirement Thread：Intent／Requirement → Object／Function → Constraint／Evidence → Admission／State → Operation／Return；不複製 Ideas Meaning Body 或 GLModel Engineering Body。
4. Return Closure：區分 Action Receipt、Evidence、Learning、Write-back、ACK 與 Reconciliation。
5. Authority Gate：各權利獨立判定，Carrier 不等於 Authority。
6. Growth Memory：能力成熟與 Failure Memory 以 Evidence 判定，文件數量不算成長。
7. Rebuild／Re-entry：保存可重建來源、順序、Hold／Invalidation 與 Successor 關係。

## 本輪受影響狀態

WP-A State Orthogonality 與 WP-C Return Closure 已有結構化候選面。  
WP-B Requirement Thread 目前是 `TRACE_PARTIAL`：母親套房窗尚缺合法 Requirement pointer、精確 Mother Space 與 Window／Host／Opening evidence，因此不得宣稱 requirement satisfied 或 engineering accepted。

## 邊界

這個 private repository 是 internal projection／build surface，不是 Native Source Root，也不是第二 Current。繁中頁是 Human Projection；machine JSON 是 Canonical Computational Projection；任何外部英文面仍須 Release Gate。

## 目前成熟度

`CANDIDATE / PASS_BOUNDED`

這代表核心 primitive 與一致性檢查已能執行，但不代表 Runtime、Canon、WP-B PASS 或跨全生態完整遷移已完成。
