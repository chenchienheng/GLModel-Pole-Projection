# XuanLing Gmail Bridge Intake Gate Contract｜2026-04-19 v0.1

一句核心：
Gmail Bridge 不應被視為直接收件箱操作，而應被視為首個可複用的 intake 母閘；其任務是先判定是否可入鏈、是否需隔離、是否需例外路由，再決定是否進入 packet / exception / reserve / no-action 流。

## 0. Mode
- mode: intake-gate-contract
- target: Gmail Bridge as first reusable intake gate
- basis:
  - Reserve Registry Binding written
  - Packet Lifecycle Matrix written
  - Cross-window exception pattern already tested
- return_to_00: true

## 1. Core Rule
```yaml
core_rule:
  gmail_is_not_direct_runtime_truth: true
  gmail_is_intake_surface_only: true
  no_direct_promotion_from_inbox: true
  all_valid_items_must_pass_gate: true
  same_gate_pattern_should_be_reusable_for:
    - calendar intake
    - contacts identity intake
    - web-form intake
    - external bridge intake
```

## 2. Intake Categories
```yaml
intake_categories:
  actionable_signal:
    meaning: needs packet or follow-up action
  exception_signal:
    meaning: security / finance / receipt / scheduling / stale execution risk
  low_priority_automated:
    meaning: can be labeled, archived, or ignored after rule check
  identity_signal:
    meaning: sender/recipient/relationship mismatch or drift
  no_action_signal:
    meaning: informational, redundant, or already closed-loop
  contamination_risk:
    meaning: noisy, unclear, suspicious, unverifiable, or route-breaking input
```

## 3. Entry Gate
```yaml
entry_gate:
  required_refs:
    - source_ref
    - time_ref
    - actor_ref
    - message_scope
  message_scope_must_identify:
    - personal
    - automated
    - finance
    - security
    - receipt
    - scheduling
    - unknown
  fail_if:
    - no source_ref
    - no time_ref
    - sender/scope cannot be classified at all
```

## 4. Safe Intake Decision Tree
```yaml
safe_intake_decision_tree:
  step_1_source_check:
    question: is message source identifiable enough for routing?
    if_no:
      - route_to: contamination_hold
      - state: blocked

  step_2_scope_check:
    question: does message belong to finance/security/receipt/scheduling/execution/identity scope?
    if_yes:
      - continue_to: risk_or_action_check
    if_no:
      - continue_to: low_priority_or_no_action_check

  step_3_risk_or_action_check:
    finance_or_security:
      - route_to: exception_candidate
    receipt_or_etc:
      - route_to: actionable_or_archive_check
    scheduling:
      - route_to: time_window_check
    execution_or_control:
      - route_to: stale_or_overdue_check
    identity:
      - route_to: identity_drift_check

  step_4_low_priority_or_no_action_check:
    if_low_priority_automated:
      - route_to: label_archive_candidate
    if_redundant_or_closed_loop:
      - route_to: no_action

  step_5_contamination_screen:
    if_unverifiable_or_noise_heavy_or_route_breaking:
      - route_to: reserve_or_blocked
      - state: contamination_risk
```

## 5. Contamination Gate
```yaml
contamination_gate:
  purpose:
    - prevent inbox noise from entering active chain as false signal
    - prevent suspicious or low-clarity items from biasing packet logic
  triggers:
    - sender trust unclear
    - message intent unclear
    - too many automated fragments without scoped importance
    - attachment or content cannot be safely classified
    - message appears promotional but mimics finance/security urgency
  allowed_outputs:
    - blocked
    - reserve
    - manual_review_candidate
    - no_action
  forbidden:
    - direct active promotion
    - direct canonical writeback
```

## 6. Routing Outputs
```yaml
routing_outputs:
  packet_candidate:
    when:
      - clear action exists
      - source_ref stable
      - route target exists
    writeback_path:
      - 03_board-orchestration/routing-logs/

  exception_candidate:
    when:
      - finance alert
      - security alert
      - overdue or stale execution item
      - scheduling conflict
      - identity drift
    writeback_path:
      - 03_board-orchestration/routing-logs/cross-window-exceptions/

  label_archive_candidate:
    when:
      - low-priority automated
      - no high-risk content
      - no unresolved action
    writeback_path:
      - Gmail labels/archive state
      - optional routing log if batch rule updated

  no_action:
    when:
      - informational only
      - already resolved
      - duplicate closed-loop event
    writeback_path:
      - optional 00 consolidation only

  reserve_or_blocked:
    when:
      - contamination risk
      - writeback target missing
      - route undefined
    writeback_path:
      - 05_XLEN_Reserve_Unenabled/02_Gmail_Bridge
      - blocker packet if needed
```

## 7. Cross-Window Sync Hooks
```yaml
cross_window_sync_hooks:
  gmail_to_calendar:
    trigger:
      - invitation
      - reschedule
      - time conflict hint
    route_to:
      - 05_time_window_check

  gmail_to_contacts:
    trigger:
      - sender identity ambiguity
      - relationship or contact drift
    route_to:
      - identity_drift_check

  gmail_to_control_plane:
    trigger:
      - execution status
      - overdue response
      - blocked writeback
    route_to:
      - control/task plane packet

  gmail_to_consolidation:
    trigger:
      - packet or exception finalized
    route_to:
      - 00_consolidation
```

## 8. Minimal State Set
```yaml
state_set:
  intake_pending:
    meaning: message captured but not yet classified
  scoped:
    meaning: category assigned
  safe_for_packet:
    meaning: actionable and routeable
  safe_for_archive:
    meaning: low-priority and non-risky
  contamination_risk:
    meaning: cannot safely promote
  exception_ready:
    meaning: should surface as exception
  blocked:
    meaning: missing route or writeback target
  closed_loop:
    meaning: processed and returned to 00
```

## 9. Required Writeback Fields
```yaml
required_writeback_fields:
  - source_ref
  - actual_result
  - current_state
  - route_output
  - mismatch_or_gap
  - next_single_action
  - return_to_00
```

## 10. Reusable Mother-Gate Principle
```yaml
reusable_mother_gate_principle:
  this_contract_is_not_gmail_only:
    - source check first
    - scope classification second
    - contamination screen third
    - output routing fourth
    - writeback only after route clarity
  meaning:
    - future intakes should reuse this logic
    - only source-type-specific adapters should differ
```

## 11. Actual Result
```yaml
actual_result:
  - Gmail bridge now has an explicit intake gate
  - contamination control is separated from ordinary low-priority handling
  - cross-window sync hooks are defined
  - Gmail is now treated as first reusable mother-gate instead of isolated inbox logic
  - contacts identity adapter handles sender trust scoring and identity normalization
```

## 12. Mismatch or Gap
```yaml
mismatch_or_gap:
  - label/archive rule templates are not yet separated by category
  - identity drift packet template is not yet dedicated
  - calendar adapter is written but needs watch queue separation
```

## 13. Next Single Action
```yaml
next_single_action:
  target: identity_drift_packet_template
  reason: Identity normalization adapter exists; next step is to define the packet template for handling explicit identity drift scenarios.
```

## 14. Return to 00
return_to_00: true
