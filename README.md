# XuanLing-20 Internal Semantic Build Surface
# 私有語義建造與驗證面

**Repository class / 倉庫分類：** Private internal carrier  
**Operational status / 運作狀態：** Non-production  
**Authority model / 權限模型：** No implicit authority elevation

## Current reader entry / 現行讀取入口

Read in this order: `CURRENT-SURFACE-MANIFEST.json` → `semantic-core/index.json` → affected family index. Legacy root-layer directories are retained as Historical／Compatibility material unless explicitly re-admitted.

請依序讀取：`CURRENT-SURFACE-MANIFEST.json` → `semantic-core/index.json` → 受影響 family index。根目錄保留的早期 layer/runtime/orchestration 族群，在沒有具名 re-admission 前只作 Historical／Compatibility material，不因仍存在於倉內而取得 Current 推理權。

## Purpose / 目的

This private repository is the current build and verification surface for bounded internal semantic projections. It hosts machine-readable models, validation evidence, failure memory, visual bindings, rebuild material, and human-readable internal views that should not be exposed through public repositories.

本私有倉是目前有限內部語義投影的建造與驗證面，用於承載 machine-readable model、驗證證據、Failure Memory、Visual Binding、Rebuild material 與不適合直接公開的人類內部視圖。

It is not a Native Source Root, Canon, Runtime, or Promotion Authority.

它不是 Native Source Root、Canon、Runtime 或 Promotion Authority。

## Semantic core / 語義核心

`semantic-core/` separates reusable semantic components from long-form prose. Current families include Identity/Relation, State, Event, Policy/Gate, Return/Reconciliation, Capability/Failure Memory, Rebuild/Re-entry, Carrier abstraction, Projection binding, and bounded world specimens.

`semantic-core/` 將可重用語義零件從長篇文字拆出。目前包含 Identity／Relation、State、Event、Policy／Gate、Return／Reconciliation、Capability／Failure Memory、Rebuild／Re-entry、Carrier abstraction、Projection binding 與有限 World specimen。

## Representation model / 表徵模型

- **Human Profile / 人類層：** 繁體中文原生表達，用於理解、判斷、風險、狀態與下一步。
- **External Profile / 外部層：** 英文 public-safe projection；必須通過具名 Release Gate 才能產生或發布。
- **Canonical Machine Profile / 機器層：** Stable IDs、typed relations/states/events、authority、evidence pointer、revision/hash、rebuild relation。
- **Visual/Spatial Profile / 視覺空間層：** Drawing、Model View、Camera、Render、Photo、GIS、Diagram 等，以 Stable Identity 與 Evidence Role 綁定。

這些 Profile 描述同一個 governed object，但不是互相逐句翻譯。Identity、State、Authority、Claim Ceiling、Successor／Re-entry、Rebuild Relation 或 Release Classification 若不一致，即為 `SURFACE_DRIFT`。

## Verification / 驗證

GitHub Actions currently checks bounded semantic alignment, DCP invariants, carrier abstraction, projection freshness, visual-anchor consistency, and fail-closed public release behavior. Passing CI proves only the declared bounded checks; it does not establish Runtime or full-system maturity.

目前 CI 會檢查有限語義對準、DCP invariant、Carrier abstraction、projection freshness、Visual Anchor consistency 與 fail-closed public release。CI 通過只證明具名檢查成立，不等於 Runtime 或完整系統成熟。

## Security and source boundary / 安全與來源邊界

Private placement does not create unrestricted rights. Credentials, unauthorized source bodies, confidential material without a lawful placement basis, and data exceeding its rights/retention scope must not be copied here. Native ownership and authority remain with the lawful source domain.

私有倉不會自動產生無限制權利。憑證、未授權 Source Body、沒有合法 placement basis 的機密資料，以及超出 Rights／Retention 範圍的資料不得因私有狀態而搬入。本體所有權與 Authority 仍留在合法 Native Domain。

## Governing principle / 核心原則

The repository may carry deeper internal representations, but completeness comes from valid semantic relations, authority, evidence, reconciliation, and rebuild—not from possessing more files.

本倉可以承載較深的內部表徵，但完整性來自有效的 Semantic Relation、Authority、Evidence、Reconciliation 與 Rebuild，而不是「擁有更多檔案」。
