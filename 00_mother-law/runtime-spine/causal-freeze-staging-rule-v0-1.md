# Causal Freeze Staging Rule v0.1

一句核心：
在 runtime spine 完成前，Google Drive 是否已有資料夾不是主判準；任何母架、舊文本、藍圖、模型產物若尚未完成因果對齊，只能凍結暫置，不得直接升入主鏈。

## 0. Status
- status: draft v0.1
- scope: mother architecture / Drive sources / GitHub runtime spine
- mutation: rule creation only
- return_to_00: true

## 1. Principle
```yaml
principle:
  folder_exists_is_not_enough: true
  source_exists_is_not_enough: true
  causal_alignment_required: true
  freeze_before_promotion: true
  return_to_00_required: true
```

## 2. Why Drive Folder Is Secondary
```yaml
drive_folder_status:
  useful_for:
    - locating raw source
    - preserving drafts
    - finding historical material
    - mapping old naming
  not_enough_for:
    - canonical promotion
    - runtime activation
    - mother-law rewrite
    - 00 adjudication
```

## 3. Required Causal Alignment
```yaml
causal_alignment:
  required_fields:
    - origin_ref
    - source_ref
    - parent_ref
    - child_ref
    - time_ref
    - role_ref
    - state_ref
    - writeback_ref
    - return_to_00
  required_questions:
    - where did this text originate
    - what prior text does it depend on
    - what later text depends on it
    - what role does it carry now
    - is it mother source, runtime spine, projection, or candidate
    - what would break if it is promoted
```

## 4. Freeze Classes
```yaml
freeze_classes:
  F0_raw_source:
    meaning: original text exists but not yet mapped
    allowed_action: preserve / cite / inspect
    blocked_action: rewrite / promote

  F1_candidate_relation:
    meaning: relation is likely but not proven
    allowed_action: create source_check
    blocked_action: canonical naming

  F2_crosswalk_pending:
    meaning: old name and current role need mapping
    allowed_action: old_name -> current_role table
    blocked_action: merge into mainbone

  F3_runtime_pending:
    meaning: concept mapped but not operationally closed
    allowed_action: define missing source_ref / writeback_ref
    blocked_action: activate as runtime node
```

## 5. Promotion Rule
```yaml
promotion_rule:
  may_promote_only_if:
    - source_ref exists
    - parent_ref exists or explicitly none
    - current_role is assigned
    - mismatch_or_gap is documented
    - writeback target exists
    - return_to_00 is true
  otherwise: freeze_staging_only
```

## 6. Current Application
```yaml
current_application:
  DCP:
    status: stable mother model
    action: do not rewrite directly
  13_department_decomposition:
    status: confirmed source for 13 layer
    action: can cite as 13 canonical, not yet DXS canonical
  DXS:
    status: candidate / causal alignment pending
    action: freeze until crosswalk confirms naming
  XDDC:
    status: missing source_ref
    action: freeze until located
  v1_v3_texts:
    status: historical / experimental
    action: preserve before mapping
  Drive_folders:
    status: source reservoir
    action: do not treat folder structure as runtime truth
```

## 7. Next Single Action
```yaml
next_single_action:
  target: 00-01_XLEN_LingLuo_Field_Map
  reason: parent anchor of 13-00; needed to align causal relation before promoting DXS or runtime claims
```

## 8. Return to 00
return_to_00: true
