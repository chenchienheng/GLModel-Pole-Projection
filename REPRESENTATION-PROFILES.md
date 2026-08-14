# Representation Profiles and Semantic Alignment
# 表徵層級與語義對準規範

**Classification / 分類：Internal**  
**Status / 狀態：Working Specification**

## 1. Purpose / 目的

This specification defines how one governed artifact is represented for three distinct consumers without creating multiple sources of truth.

本規範定義同一受治理物件如何面向三類讀取者形成不同表徵，同時維持單一語義身分，不產生平行真實來源。

A governed artifact SHALL retain one stable semantic identity and may expose three synchronized representation profiles:

1. **Human Profile / 人類閱讀層** — Traditional Chinese, optimized for decision-making, review, and operational comprehension.
2. **External Profile / 外部交換層** — English, optimized for publication, interoperability, external review, and cross-organizational exchange.
3. **Canonical Machine Profile / 機器規範層** — stable identifiers, typed states, enums, hashes, pointers, and machine-consumable fields.

These profiles are representations of the same governed object. They are not independent records of authority, state, or truth.

三個表徵層均指向同一受治理物件，不得各自形成獨立的 Authority、State 或 Current。

## 2. Semantic Invariants / 語義不變量

The following properties MUST remain semantically equivalent across all active profiles:

- Stable Identity / 穩定身分
- Lifecycle State / 生命週期狀態
- Authority Ceiling / 權限上限
- Evidence and Claim Ceiling / 證據與聲明上限
- Successor or Supersession Relation / 承接與取代關係
- Return and Re-entry Relation / 回流與重入關係
- Release Classification / 發布分類

Differences in wording, presentation depth, or serialization are permitted. Differences in governed meaning are not.

文字、詳略與序列化格式可以不同；受治理語義不得不同。

## 3. Disclosure Classification / 揭露分級

Every projection SHALL be assigned a disclosure class before external propagation:

- `INTERNAL` — internal operational or analytical use only.
- `PUBLIC_CANDIDATE` — sanitized and structurally suitable for external release, but not yet release-authorized.
- `PUBLIC_APPROVED` — explicitly authorized for external publication.
- `WITHHELD` — external representation intentionally unavailable because rights, sensitivity, evidence, or authority conditions are not satisfied.

A private carrier does not expand rights. Repository visibility SHALL NOT be interpreted as permission to copy, learn from, retain, publish, or redistribute source material beyond the governing authority.

私有載體不會擴張資料權利；倉庫可見性不得被解讀為超越原權限的複製、學習、保留、發布或再散布授權。

## 4. External Release Gate / 外部發布門

An External Profile may be released only when the following conditions are resolved for the intended audience and purpose:

- lawful source and rights basis;
- audience and purpose;
- sensitivity and privacy classification;
- evidence sufficiency and claim ceiling;
- retention and redistribution constraints;
- release authority.

If any required condition is unresolved, the External Profile remains `PUBLIC_CANDIDATE` or `WITHHELD`.

## 5. Canonical Machine Profile / 機器規範層

Machine-facing fields SHALL use stable canonical English identifiers. Human translations are mappings, not alternate schema names.

```yaml
artifact_id: <stable-id>
source_pointer: <lawful-pointer>
source_revision: <revision-or-hash>
state: <typed-state>
authority_ceiling: <typed-authority>
claim_ceiling: <typed-claim>
disclosure_class: INTERNAL|PUBLIC_CANDIDATE|PUBLIC_APPROVED|WITHHELD
human_profile: zh-TW
external_profile: en
return_pointer: <pointer-or-null>
successor_pointer: <pointer-or-null>
reentry_trigger: <material-condition>
```

The machine profile SHALL contain only the fields necessary for reliable identity, state, provenance, routing, and reconciliation. Sensitive source bodies or privileged routing details are not implied by machine readability.

## 6. Alignment Control / 對準控制

A material contradiction between active profiles is classified as `SURFACE_DRIFT`.

Examples include inconsistent state, authority, claim ceiling, successor relation, or release classification for the same stable artifact.

When `SURFACE_DRIFT` is detected:

1. external propagation is suspended for the affected artifact;
2. the authoritative source and latest valid evidence are re-resolved;
3. only the affected representation cone is reconciled;
4. unaffected profiles and artifacts are not rebuilt.

## 7. Source Boundary / 來源邊界

Representation does not transfer source ownership. Native bodies remain in their lawful native domains unless an explicit, scoped authority permits another placement.

表徵不構成來源所有權移轉。除非有明確且受限的授權，Native Body 仍留在其合法原生權域。
