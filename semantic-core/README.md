# Semantic Core / 語義核心

This surface contains machine-readable projections in a public repository. Public placement does not establish approval to publish additional source material. It is not the native source root and does not replace Drive, local, project, company, CDE, database, or other lawful source domains.

## 1. Representation model / 表徵模型

One stable semantic object may be rendered through several synchronized representations:

- `identity-graph` — stable object and relation topology
- `state-model` — orthogonal lifecycle, authority, evidence, return, and rebuild states
- `event-ledger` — ordered observations, actions, returns, reconciliations, invalidations, and re-entry events
- `policy-gates` — purpose-, scope-, audience-, rights-, retention-, and action-specific permissions
- `evidence-manifests` — source revision, claim ceiling, evidence pointer, accepted delta, hold, and rebuild inputs
- `visual-bindings` — stable object/view/camera/revision/evidence-role bindings for drawings, models, images, and renders

These representations share stable identity and semantic invariants. None becomes a second source of truth.

## 2. Human / External / Machine profiles

- Human Profile: Traditional Chinese first; explains meaning, state, risk, evidence, and next action.
- External Profile: English public-safe technical projection generated only after release classification.
- Machine Profile: stable IDs, typed relations, state, events, policy, hashes/revisions, and evidence pointers.

A mismatch in identity, state, authority, claim ceiling, successor, or rebuild relation is `SURFACE_DRIFT`.

## 3. Growth model / 成長模型

Growth is evidence-bound behavior change, not document accumulation.

`Observed -> Candidate -> Materiality Tested -> Experimented -> Evidence Bound -> Admitted Bounded -> Behavior Changed -> Reused -> Revalidated / Superseded / Retired`

Capability maturity is tracked separately from architecture maturity.

## 4. Carrier rule / 載體規則

GitHub is one carrier. Git commit and hash provide version/integrity evidence; they do not define semantic currentness, authority, ownership, or world identity.

## 5. Current build path / 現行建造路徑

Start with bounded specimens. A specimen is valid only when the same stable identity can be reconstructed across graph, state, event, evidence, and visual-binding projections without semantic drift.

## 6. 檢視器的開啟、判讀與恢復

日常取用以目前已採用的 main 為入口；驗證或恢復以完整固定 commit 為準。PR、截圖與已撤下的預覽保存各自版本的證據，不是另一個現在入口。GitHub 管理程式與版本，GitHub Pages 只是其中一種網站承載；檢視器本身的語義資料與畫面不等於 GitHub 管理介面。

畫面中的「目前」指同版已提交的 specimen／DCP 投影，不會自動同步 Living 或其他 Native。程式修復被採用，不會解除來源的 Hold／Pending Return，也不會把來源的 WORKING_CANDIDATE 或 PARTIALLY_PROVEN 改成完成。跨端使用前仍須核對具名來源。

[檢視器入口](viewer/index.html)讀取同一版本的歸廬 specimen 與 DCP 投影，用於閱讀來源中的關係、Hold、待回流及說明。它不是可編輯的 Living 世界，也沒有保存、匯出、採購、部署或語義驗證功能。Stable Identity 與未閉條件來自原資料；顯示成功不代表工程條件或 Return 已驗收。

在已獲授權的 HTTP(S) 預覽環境，保留整個 `semantic-core/` 相對目錄，開啟 `semantic-core/viewer/index.html`。GitHub 的檔案閱讀頁不是運行畫面；直接開啟本機 `file://` 也不能保證 fetch 可用。若沒有合法預覽入口，只保留瀏覽器驗收未完成，不以部署或變更存取限制補過。

|看到的結果|可以判定|接續操作|
|---|---|---|
|資料已載入；尚未執行語義驗證|兩視圖的載入與格式化完成|閱讀來源中的 Hold／Pending Return；需要語義判定時，使用同版本既有 semantic-core 驗證流程|
|此來源未列出 Hold／Conflict／Pending Return|該來源明確提供空陣列|不推論整個世界沒有未閉事項|
|LOAD ERROR 與具名路徑|至少一個視圖未完整載入|依路徑查 HTTP、JSON、文字或集合格式；另一成功視圖仍可讀|
|來源不存在、集合缺值或格式錯誤|無法支持該視圖的完整顯示|修復同版本來源或回到完整已知版本；不得把缺值改成空陣列掩蓋|

長識別碼可在卡片內換行；依存圖與矩陣原文保留預格式，過長時在個別面板內水平捲動，以免撐寬整頁。這是版面約束，不改來源文字或語義。

世界視圖與 DCP 視圖可用上方按鈕切換；錯誤訊息位於兩者外，切換不會把錯誤消掉。格式化失敗的視圖不應留下半套新內容。載入錯誤只列來源與失敗階段，不顯示完整回應本文；單一視圖內多個來源同時失敗時，目前只保證呈現該 loader 回報的失敗，不保證列出全部根因。

修復後重新整理頁面，會重新讀取來源；頁面沒有本地編輯或保存狀態可恢復。應使用完整、同一 commit 的 HTML、JS、CSS、specimen 與 DCP 檔案，避免混搭版本及快取。重新整理後仍須核對 Stable Identity、Hold／Pending Return 與狀態文字，不能只看畫面出現。

真瀏覽器驗收需在該合法預覽入口記錄 exact commit、瀏覽器、來源與結果：正常載入並切換兩視圖；讓其中一個讀取失敗後確認另一視圖仍可讀、錯誤跨分頁可見；恢復來源並重新整理後核對原身分與未閉條件。故障注入限本地驗收副本或已授權攔截，不修改正式來源。沒有完成這些觀測，就維持 browser/reload 未驗收。既有 `node --test semantic-core/viewer/app.test.mjs` 是合成 DOM/fetch 回歸，不能代替上述觀測。

驗收結果回到原修正 PR，綁定版本與未閉條件；不得由 CI 綠燈推定使用者接受。若要退回顯示修正，先保存失敗證據，由原 PR 選完整前身版本或另作最小修復；不改寫已接受的 main，不把舊版顯示成功當新驗收。
