# 三態對準契約 / Three-Surface Alignment Contract

**Visibility / 可見性：PRIVATE**

## 一句核心 / Core
同一 Stable Object／Rule／Return 只存在一份語義本體，但可以有三個對準表面：

1. **Owner／Human Surface（繁體中文）**：給 Vitas 與協作者直接理解，不要求自行翻譯。
2. **External／Public Surface（英文）**：只公開經 Audience／Rights／Sensitivity／Claim Ceiling Gate 後的外部可見投影。
3. **Machine Surface（canonical technical form）**：給模型、工具、API、索引與自動化穩定讀取；保持 canonical key／ID／enum／hash／pointer，不因雙語破壞機器一致性。

The same Stable Object/Rule/Return has one semantic identity with three aligned surfaces: Owner/Human Chinese, External/Public English, and canonical Machine form.

## 固定關係 / Fixed relationship

`One Stable Identity → Human zh-TW Projection + External en Projection + Machine Canonical Projection`

不是：

`Chinese Truth + English Truth + Machine Truth`

三個表面不得各自演化成不同 Current／Authority／State。

The three surfaces must not diverge into independent Current, Authority, or State.

## Audience Gate／受眾門

Machine-readable 不代表 Public-readable；Bilingual 不代表 Full Disclosure。

`Internal-readable ≠ Public-safe ≠ Public-approved`

只有 External／Public Surface 通過 Purpose、Audience、Rights、Privacy、Sensitivity、Evidence、Claim Ceiling、Release Authority 後，才可離開 private/internal boundary。

## 私有倉角色 / Private repository role

XL20 可承載：
- internal machine mapping／內部機器映射
- private bounded evidence／私有限定證據
- public projection 的來源指標與 release receipt
- negative tests／failure memory／validation artifacts
- receiver-specific return projection

XL20 不自動取得：
- Native Source Ownership
- unlimited Copy/Learn/Retain rights
- company/customer/private-data authority
- Canon／Runtime／Production authority

Native Body 必須留在合法 Native Domain；本倉只保存合法 bounded projection／pointer／evidence。

## Machine minimum

```yaml
stable_id: <canonical-id>
native_pointer: <lawful-source-pointer>
native_revision: <revision-or-hash>
human_surface: zh-TW
external_surface: en
machine_surface: canonical
audience: internal|public-candidate|public-approved
state: <typed-state>
authority_ceiling: <typed-authority>
evidence_ceiling: <typed-claim>
return_pointer: <pointer-or-null>
reentry_trigger: <material-trigger>
```

Schema key stays canonical English. Human mappings may be bilingual but must not rename stable machine fields.

## Return rule

任何三態不同步：`SURFACE_DRIFT`。

若中文、英文或 machine projection 對同一 Stable Object 的 State／Authority／Claim／Successor 出現矛盾，停止 public propagation，回 Native Owner／DCP affected cone reconciliation。

Any contradiction across the three surfaces is `SURFACE_DRIFT`; public propagation stops until the affected cone is reconciled.
