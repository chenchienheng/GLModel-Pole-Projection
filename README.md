# XuanLing-20 FieldProof / Xiaoshiguang
# 私有驗證與內部投影載體

**Repository class / 倉庫分類：** Private internal carrier  
**Operational status / 運作狀態：** Non-production  
**Authority model / 權限模型：** No implicit authority elevation

## Overview / 概述

XuanLing-20 is a private repository for bounded internal projections, validation evidence, failure analysis, release-support artifacts, and machine-readable semantic mappings that should not be exposed through public repositories.

XuanLing-20 是私有的內部載體，用於承接有限的內部投影、驗證證據、失敗分析、發布支援資料，以及不適合直接出現在公開倉的機器可讀語義映射。

It is not a native source root. Source ownership, privacy, retention, learning, publication, and mutation rights remain governed by the lawful source and its authority chain.

本倉不是 Native Source Root。資料所有權、隱私、保留、學習、發布與修改權仍由合法來源及其權限鏈決定。

## Internal semantic core / 內部語義核心

The `semantic-core/` directory is the current internal build surface for model-centric, multi-representation architecture. It separates semantic state from prose and allows one stable object to be represented consistently as graph, state, event, policy, evidence, rebuild, visual, and human-readable projections.

`semantic-core/` 是目前用來建造「模型中心、多表徵」架構的內部工作面。它把語義狀態從長篇文字中拆出，讓同一 Stable Object 可以一致投影成關係圖、狀態、事件、權限、證據、重建、視覺與人類可讀介面。

Current internal schemas include:

- `semantic-object.schema.json` — identity, native home, state, authority, relations, evidence, rebuild
- `event.schema.json` — ordered observation/action/return/reconciliation/failure events
- `policy-gate.schema.json` — purpose-, audience-, and rights-specific action gates
- `capability.schema.json` — capability maturity and failure memory
- `rebuild-manifest.schema.json` — checkpoint, accepted deltas, holds, invalidations, evidence
- `visual-binding.schema.json` — stable object/view/revision/evidence-role binding

The first bounded world specimen is under `semantic-core/specimens/gui-lu/`. It is a semantic identity and regression specimen, not a declaration of final geometry, BuildReady state, or Owner acceptance.

第一個 bounded world specimen 位於 `semantic-core/specimens/gui-lu/`。它用來驗證世界身分、主要關係與視覺回歸綁定，不代表最終幾何、BuildReady 或 Owner 最終接受。

## Representation model / 表徵模型

Each governed artifact may be expressed through aligned representation profiles:

- **Human Profile / 人類閱讀層** — Traditional Chinese first for review, reasoning, state, risk, evidence, and next action.
- **External Profile / 外部交換層** — English public-safe technical projection produced only after a release gate.
- **Canonical Machine Profile / 機器規範層** — stable identifiers, typed relations/states/events, revisions/hashes, evidence pointers, and machine-consumable constraints.
- **Visual/Spatial Profile / 視覺空間層** — drawings, model views, cameras, renders, photos, GIS or details that are explicitly bound to stable identity and evidence roles.

All profiles share one semantic identity. A material inconsistency in identity, state, authority, claim ceiling, successor/re-entry, rebuild relation, or release classification is `SURFACE_DRIFT` and must be reconciled before further propagation.

所有表徵共用同一語義身分。Identity、State、Authority、Claim Ceiling、Successor／Re-entry、Rebuild Relation 或 Release Classification 若出現實質不一致，視為 `SURFACE_DRIFT`，需先完成 bounded reconciliation 才能繼續外傳或重建。

## Appropriate contents / 適合內容

- bounded internal evidence / 私有限定證據
- validation and negative-test artifacts / 驗證與負向測試資料
- failure-memory and capability projections / 失敗記憶與能力投影
- machine mappings required for internal continuity / 內部連續性所需機器映射
- source pointers and release receipts supporting public projections / 支撐公開投影的來源指標與發布回執
- receiver-specific internal returns / 接收者限定內部回包
- model-centric semantic specimens / 模型中心語義 specimen

## Exclusions / 排除內容

This repository must not contain credentials, unrestricted secrets, or source bodies whose placement is not authorized. Repository privacy does not create permission to copy, learn from, retain, publish, or redistribute data beyond its governing rights.

本倉不得存放憑證、無限制秘密資料，或未取得放置授權的 Source Body。私有倉屬性不會自動產生超出原權限的複製、學習、保留、發布或再散布權。

## Relationship to public repositories / 與公開倉的關係

Public repositories carry release-appropriate research, documentation, coordination patterns, schemas/examples selected for release, and approved evidence. XuanLing-20 may retain the richer internal projection required to support those public surfaces, but only through bounded references to lawful native sources.

公開倉承載適合發布的研究、文件、協調模式、經選擇可發布的 schema／example 與核准證據；XuanLing-20 可承接支撐公開面的較完整內部投影，但仍只能透過對合法 Native Source 的有限引用維持。

## Machine metadata / 機器中繼資料

```yaml
repository_class: private_internal_carrier
runtime: false
authority_elevation: none
semantic_core: semantic-core/
native_source_root: external_to_repository
external_release: gated
```

## Governing principle / 核心原則

A private carrier may hold deeper internal representations, but it does not become the system's source of truth. Identity, authority, evidence, lifecycle state, and rebuild validity remain anchored to lawful native sources and explicit relations.

私有載體可以承載較深的內部表徵，但不因此成為系統唯一真實來源；Identity、Authority、Evidence、Lifecycle State 與 Rebuild Validity 仍由合法 Native Source 與明確關係維持。
