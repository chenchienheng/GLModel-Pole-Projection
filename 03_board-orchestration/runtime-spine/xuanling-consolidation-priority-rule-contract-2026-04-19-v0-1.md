# XuanLing Consolidation Priority Rule Contract｜2026-04-19 v0.1

一句核心：
Consolidation 不只是把各窗口結果彙總，而是 shared infrastructure chain 的收斂裁決層；其任務是把 Gmail intake、Calendar time-window、Contacts identity、Control ownership 的 mixed cases 壓成單一 highest-priority next action，避免多條有效鏈並行卻無最終主次。

## 0. Mode
- mode: consolidation-priority-rule-contract
- target: priority convergence over shared infrastructure chain
- basis:
  - Gmail Bridge Intake Gate Contract written
  - Calendar Time-Window Adapter Contract written
  - Contacts Identity Adapter Contract written
  - Control Plane Ownership Adapter Contract written
  - 00 consolidation packets already exercised
- return_to_00: true

## 1. Core Position
```yaml
core_position:
  consolidation_is_not_passive_summary: true
  consolidation_is_priority_convergence_surface: true
  no_mixed_case_should_exit_without_single_priority: true
  all_effective_items_must_carry_source_ref: true
  priority_rule_reuses:
    - source validity
    - scope classification
    - contamination screening
    - routing outcome
    - writeback feasibility
```

## 2. Priority Classes
```yaml
priority_classes:
  p0_security_finance:
    meaning: direct security or finance exposure requiring immediate attention
  p1_blocked_execution:
    meaning: owned item cannot proceed due to blocked writeback, missing path, or critical owner ambiguity
  p2_time_conflict_or_stale_execution:
    meaning: current order is affected by overlap, drift, overdue execution, or expired usefulness
  p3_identity_drift:
    meaning: sender/attendee/contact/owner mismatch changes routing assumptions but is not yet catastrophic
  p4_actionable_non_blocking:
    meaning: clear next action exists, but current chain is not blocked
  p5_watch_or_no_action:
    meaning: future-bound watch item, low-priority automated, informational only, or closed-loop
  contamination_hold:
    meaning: noisy or unverifiable items must not influence priority ranking
```

## 3. Entry Gate
```yaml
entry_gate:
  required_fields:
    - source_ref
    - current_state
    - route_output
    - mismatch_or_gap
    - next_single_action
  fail_if:
    - no source_ref
    - no current_state
    - no route_output
    - no next_single_action for effective items
```

## 4. Priority Determination Rule
```yaml
priority_determination_rule:
  rule_1_risk_precedes_convenience:
    meaning: security/finance alerts outrank all non-risk actions

  rule_2_block_precedes_progress:
    meaning: blocked execution outranks optional actionable work

  rule_3_current_window_precedes_future_watch:
    meaning: active conflicts and stale execution outrank future-bound observation

  rule_4_identity_precedes_surface_polish:
    meaning: identity drift that changes routing outranks projection or presentation work

  rule_5_contamination_has_no_positive_priority:
    meaning: contaminated input cannot win priority; it is isolated or held

  rule_6_single_highest_priority_required:
    meaning: consolidation must output one highest-priority next action even if multiple items remain effective
```

## 5. Tie-Break Logic
```yaml
tie_break_logic:
  if_same_priority_class:
    compare_in_order:
      - writeback_blocking_impact
      - cross_window_spread
      - effective_time_proximity
      - ownership_clarity
      - reversibility_cost
  if_still_tied:
    choose:
      - item with smaller action surface and higher unblock yield
```

## 6. Mixed-Case Resolution Patterns
```yaml
mixed_case_resolution_patterns:
  security_vs_stale_execution:
    winner: security
  finance_vs_identity_drift:
    winner: finance
  blocked_writeback_vs_time_conflict:
    winner: blocked_writeback
  time_conflict_vs_future_watch:
    winner: time_conflict
  identity_drift_vs_non_blocking_actionable:
    winner: identity_drift
  contamination_vs_any_valid_item:
    winner: valid_item
    note: contamination is isolated, not promoted
```

## 7. Routing Outputs
```yaml
routing_outputs:
  highest_priority_item:
    must_include:
      - source_ref
      - priority_class
      - actual_result
      - mismatch_or_gap
      - next_single_action

  supporting_effective_items:
    must_include:
      - source_ref
      - current_state
      - no_action_or_hold_reason_if_not_selected

  no_action_windows:
    must_include:
      - source_ref
      - reason

  blocked_items:
    must_include:
      - source_ref
      - blocker_type
      - target_path_if_known
```

## 8. Cross-Window Convergence Hooks
```yaml
cross_window_convergence_hooks:
  gmail:
    may_raise:
      - p0_security_finance
      - p4_actionable_non_blocking
      - contamination_hold
  calendar:
    may_raise:
      - p2_time_conflict_or_stale_execution
      - p5_watch_or_no_action
  contacts:
    may_raise:
      - p3_identity_drift
      - contamination_hold
  control_plane:
    may_raise:
      - p1_blocked_execution
      - p2_time_conflict_or_stale_execution
      - escalated mixed cases
```

## 9. Minimal State Set
```yaml
state_set:
  pending_convergence:
    meaning: item awaits consolidation ranking
  ranked_primary:
    meaning: item selected as highest-priority
  ranked_secondary:
    meaning: effective but not selected this round
  isolated_contamination:
    meaning: excluded from ranking influence
  no_action_confirmed:
    meaning: confirmed non-operative for this round
  closed_loop:
    meaning: consolidation completed and returned to 00
```

## 10. Required Writeback Fields
```yaml
required_writeback_fields:
  - source_ref
  - actual_result
  - priority_class
  - current_state
  - mismatch_or_gap
  - highest_priority_next_action
  - writeback_status
  - return_to_00
```

## 11. Contract Principle
```yaml
contract_principle:
  consolidation_priority_rule_is_the_first_shared_decision_spine:
    - it does not replace adapters
    - it resolves competition among valid outputs
  meaning:
    - the system begins to act like one network
    - not four adjacent subsystems
```

## 12. Actual Result
```yaml
actual_result:
  - a single priority convergence rule now exists over Gmail, Calendar, Contacts, and Control Plane
  - mixed cases can now be compressed into one highest-priority next action
  - contamination is explicitly prevented from winning priority
  - consolidation becomes an active decision surface rather than passive summary
```

## 13. Mismatch or Gap
```yaml
mismatch_or_gap:
  - priority scoring is still rule-based rather than numeric/matrix-backed
  - ownership split resolution remains a child template not yet separated
  - watch queue and no-action queue templates are still generic
  - false closed-loop detection is not yet bound into consolidation as an explicit gate
```

## 14. Next Single Action
```yaml
next_single_action:
  target: false_closed_loop_detection_matrix
  reason: adapters and convergence rule now exist; the next stability risk is items appearing resolved while not actually returning to valid path, state, or writeback target
```

## 15. Return to 00
return_to_00: true
