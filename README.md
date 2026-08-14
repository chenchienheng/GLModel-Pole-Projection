# XuanLing-20 FieldProof / Xiaoshiguang
# 私有驗證與內部投影載體

**Repository class / 倉庫分類：** Private internal carrier  
**Operational status / 運作狀態：** Non-production  
**Authority model / 權限模型：** No implicit authority elevation

## Overview / 概述

XuanLing-20 is a private repository for bounded internal projections, validation evidence, failure analysis, release-support artifacts, and machine-oriented mappings that should not be exposed through public repositories.

XuanLing-20 是私有的內部載體，用於承接有限的內部投影、驗證證據、失敗分析、發布支援資料與不適合出現在公開倉的機器映射。

It is not a native source root. Source ownership, privacy, retention, learning, publication, and mutation rights remain governed by the lawful source and its authority chain.

本倉不是 Native Source Root。資料所有權、隱私、保留、學習、發布與修改權仍由合法來源及其權限鏈決定。

## Representation model / 表徵模型

Each governed artifact is represented through aligned profiles defined in `REPRESENTATION-PROFILES.md`:

每一個受治理物件依 `REPRESENTATION-PROFILES.md` 維持對準的表徵層級：

- **Human Profile / 人類閱讀層** — Traditional Chinese for review and operational comprehension.
- **External Profile / 外部交換層** — English for approved publication or external exchange.
- **Canonical Machine Profile / 機器規範層** — stable identifiers, typed states, hashes, pointers, and machine-consumable fields.

The three profiles share one semantic identity. A material inconsistency in state, authority, claim ceiling, successor relation, or release classification is treated as `SURFACE_DRIFT` and requires bounded reconciliation before external propagation resumes.

三個表徵層共用同一語義身分。若 State、Authority、Claim Ceiling、Successor 或 Release Classification 出現實質不一致，視為 `SURFACE_DRIFT`，須完成受影響範圍的調和後才能恢復外傳。

## Appropriate contents / 適合內容

- bounded internal evidence / 私有限定證據
- validation and negative-test artifacts / 驗證與負向測試資料
- failure-memory projections / 失敗記憶投影
- machine mappings required for internal continuity / 內部連續性所需機器映射
- source pointers and release receipts supporting public projections / 公開投影的來源指標與發布回執
- receiver-specific internal returns / 接收者限定內部回包

## Exclusions / 排除內容

This repository must not contain credentials, unrestricted secrets, or source bodies whose placement is not authorized. Repository privacy does not create permission to copy, learn from, retain, publish, or redistribute data beyond its governing rights.

本倉不得存放憑證、無限制秘密資料，或未取得放置授權的 Source Body。私有倉屬性不會自動產生超出原權限的複製、學習、保留、發布或再散布權。

## Relationship to public repositories / 與公開倉的關係

Public repositories carry release-appropriate research, documentation, coordination patterns, and approved evidence. XuanLing-20 may retain the richer internal projection required to support those public surfaces, but only through bounded references to lawful native sources.

公開倉承載適合發布的研究、文件、協調模式與核准證據；XuanLing-20 可承接支撐公開面的較完整內部投影，但仍僅能透過對合法 Native Source 的有限引用維持。

## Machine metadata / 機器中繼資料

```yaml
repository_class: private_internal_carrier
runtime: false
authority_elevation: none
representation_spec: REPRESENTATION-PROFILES.md
native_source_root: external_to_repository
external_release: gated
```

## Governing principle / 核心原則

A private carrier may hold deeper internal representations, but it does not become the system's source of truth. Identity, authority, evidence, and lifecycle state remain anchored to their lawful sources and explicit governance relations.

私有載體可以承載較深的內部表徵，但不因此成為系統唯一真實來源；Identity、Authority、Evidence 與 Lifecycle State 仍由合法來源與明確治理關係維持。
