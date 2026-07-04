# XuanLing Reserve to Active Promotion Contract｜2026-04-18 v0.1

一句核心：
Reserve 不等於可直接啟用；任何 Web、Bridge、Value-Return、High-Risk Interface 或未完成因果對齊的候選項，只能在滿足 promotion gate 後，才允許升入 Active chain、Runtime spine 或 Projection layer。

## 0. Mode
- mode: promotion-contract
- purpose: stabilize reserve-to-active lift
- basis:
  - Root Manifest confirmed
  - Minimal Folder Baseline confirmed
  - Dependency Crosswalk written
  - Packet Lifecycle Matrix written
- return_to_00: true

## 1. Scope
```yaml
scope:
  reserve_candidates:
    - web/ui shells not yet canonical
    - gmail bridge candidates
    - value-compute-return candidates
    - high-risk interfaces
    - unclassified source nodes
    - projection assets without spine basis
  may_promote_to:
    - active_chain
    - runtime_spine
    - output_surface
    - projection_layer
```

## 2. Non-Negotiable Rule
```yaml
non_negotiable_rule:
  - reserve_exists_is_not_enough
  - source_exists_is_not_enough
  - shell_exists_is_not_enough
  - promotion_requires_contract_alignment
  - no_promotion_without_writeback_target
```

## 3. Entry Gate
```yaml
entry_gate:
  required_refs:
    - source_ref
    - role_ref
    - state_ref
    - writeback_ref
    - time_ref
    - path_ref
  optional_but_preferred:
    - parent_ref
    - child_ref
    - dependency_ref
    - decision_ref
  fail_if_missing:
    - source_ref
    - role_ref
    - state_ref
    - writeback_ref
```

## 4. Promotion Conditions
```yaml
promotion_conditions:
  condition_1_source_clarity:
    description: source is identifiable and not inferred only from shell presence
  condition_2_role_clarity:
    description: candidate has explicit role in chain, output, or projection
  condition_3_path_clarity:
    description: active target path is explicit
  condition_4_writeback_clarity:
    description: canonical writeback target exists in GitHub runtime spine or formal output path
  condition_5_dependency_resolution:
    description: upstream blockers are known and below threshold
  condition_6_risk_position:
    description: high-risk interface is either audited or remains partially gated
  condition_7_return_path:
    description: promoted item can return_to_00 after round execution
```

## 5. Promotion States
```yaml
promotion_states:
  reserve:
    meaning: staged only, not active
  reserve_verified:
    meaning: refs and role are sufficiently clear
  candidate_for_lift:
    meaning: entry gate passed, awaiting decision or execution slot
  active_limited:
    meaning: partially promoted under monitoring / non-sovereign
  active:
    meaning: fully active and promotable in current chain
  active_canonical:
    meaning: active with confirmed spine truth and stable writeback path
  rollback_required:
    meaning: promotion invalidated and must return to reserve or freeze
```

## 6. Promotion Flow
```yaml
promotion_flow:
  step_1:
    action: classify reserve item
    output: reserve or reserve_verified
  step_2:
    action: validate refs and target path
    output: reserve_verified or blocked
  step_3:
    action: declare packet_focus and lift intent
    output: candidate_for_lift
  step_4:
    action: write limited activation packet
    output: active_limited
  step_5:
    action: execute one bounded round with writeback
    output: active or rollback_required
  step_6:
    action: confirm stable return_to_00
    output: active_canonical or active
```

## 7. Blockers
```yaml
blockers:
  blocked_if:
    - no source_ref
    - no writeback target
    - no return path
    - shell is ahead of spine truth
    - dependency chain unknown
    - high-risk interface has no audit status
    - candidate still belongs to frozen/history layer
```

## 8. Special Rule by Layer
```yaml
special_rule_by_layer:
  web_projection:
    may_lift_early: true
    but_only_as: active_limited
    cannot_claim: canonical_runtime_truth

  gmail_bridge:
    may_lift_only_if:
      - intake path defined
      - writeback target defined
      - exception handling path defined

  value_compute_return:
    may_lift_only_if:
      - compute role is explicit
      - return packet contract is explicit
      - audit fallback exists

  high_risk_interfaces:
    default_state: reserve
    may_lift_only_if:
      - risk reviewed
      - rollback path exists
      - actor_ref and audit log exist
```

## 9. Required Writeback
```yaml
required_writeback:
  on_promotion_attempt:
    - packet
    - return
    - log
  on_successful_lift:
    - state transition record
    - active target path record
    - next monitoring action
  on_failed_lift:
    - blocker packet
    - rollback_or_reserve record
```

## 10. Minimal Promotion Packet
```yaml
minimal_promotion_packet:
  - source_ref
  - actual_result
  - current_state
  - target_path
  - mismatch_or_gap
  - next_single_action
  - return_to_00
```

## 11. Actual Result
```yaml
actual_result:
  - reserve-to-active lift now has an explicit gate
  - promotion states are now separated from shell visibility
  - high-risk and partial-lift cases are now bounded as active_limited instead of silently treated as active
  - rollback path is now part of promotion logic rather than an afterthought
```

## 12. Mismatch or Gap
```yaml
mismatch_or_gap:
  - contract is defined, but no item registry has yet been bound to promotion states
  - active_limited monitoring packet format is not yet written as dedicated template
  - rollback packet template is not yet separated from generic blocker packet
```

## 13. Next Single Action
```yaml
next_single_action:
  target: reserve_registry_binding
  reason: promotion contract exists; next missing layer is to bind actual reserve candidates (web/ui, gmail bridge, value-return, high-risk interfaces) into a registry with explicit current_state and target_path
```

## 14. Return to 00
return_to_00: true
