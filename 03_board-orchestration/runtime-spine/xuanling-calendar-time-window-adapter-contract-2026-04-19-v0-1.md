# XuanLing Calendar Time-Window Adapter Contract｜2026-04-19 v0.1

一句核心：
Calendar 不只是排程檢視面，而是第二個 intake surface；其任務是把事件壓成 time-window 可判定物，做 active / stale / future-bound 分類、effective_order 判定、衝突識別、例外路由與 consolidation 回流，並沿用 mother-gate 規則而不是獨立造輪。

## 0. Mode
- mode: calendar-adapter-contract
- target: time-window adapter over reusable mother-gate
- basis:
  - Gmail Bridge Intake Gate Contract written
  - Packet Lifecycle Matrix written
  - 05 time-window check already exercised
- return_to_00: true

## 1. Core Position
```yaml
core_position:
  calendar_is_not_runtime_truth: true
  calendar_is_time_window_surface: true
  no_direct_promotion_from_event_listing: true
  all_effective_time_items_must_pass_adapter: true
  adapter_reuses:
    - source check
    - scope classification
    - contamination screen
    - output routing
    - writeback after route clarity
```

## 2. Time Categories
```yaml
time_categories:
  active:
    meaning: currently effective or imminent enough to affect order
  stale:
    meaning: past-due, unresolved, or obsolete relative to current round
  future_bound:
    meaning: upcoming but not yet actionable beyond watch/sequence placement
  no_action:
    meaning: already closed, irrelevant, or informational only
  contamination_risk:
    meaning: ambiguous, duplicated, unscoped, or route-breaking calendar signal
```

## 3. Entry Gate
```yaml
entry_gate:
  required_refs:
    - source_ref
    - time_ref
    - event_scope
    - current_window_ref
  event_scope_must_identify:
    - execution
    - scheduling
    - reminder
    - status_only
    - unknown
  fail_if:
    - no source_ref
    - no start/end time basis
    - event cannot be assigned any scope
```

## 4. Time-Window Decision Flow
```yaml
time_window_decision_flow:
  step_1_source_check:
    question: is event identifiable and time-bounded enough for routing?
    if_no:
      - route_to: contamination_hold
      - state: blocked

  step_2_temporal_classification:
    questions:
      - is event currently active?
      - is event stale?
      - is event future_bound?
      - is event already closed?
    outputs:
      - active
      - stale
      - future_bound
      - no_action

  step_3_effective_order_check:
    questions:
      - does this event affect current execution order?
      - does it outrank existing active items?
      - is it sequence-sensitive?
    if_yes:
      - route_to: effective_item_candidate
    if_no:
      - continue_to: conflict_or_watch_check

  step_4_conflict_check:
    questions:
      - time overlap?
      - duplicate commitment?
      - unresolved reschedule?
      - blocked follow-up due to schedule drift?
    if_yes:
      - route_to: exception_candidate
    if_no:
      - continue_to: stale_or_watch_check

  step_5_stale_or_watch_check:
    stale:
      - route_to: stale_execution_candidate
    future_bound:
      - route_to: watch_only_or_sequence_queue
    no_action:
      - route_to: no_action

  step_6_contamination_screen:
    if_ambiguous_or_duplicate_or_non-operative:
      - route_to: reserve_or_blocked
      - state: contamination_risk
```

## 5. Effective Order Rule
```yaml
effective_order_rule:
  order_basis:
    - time proximity
    - execution dependency
    - blocking impact
    - reschedule urgency
    - conflict density
  do_not_use_alone:
    - display order only
    - calendar creation time only
    - title salience only
  output_must_state:
    - why item is effective now
    - why item outranks or does not outrank others
```

## 6. Conflict Types
```yaml
conflict_types:
  hard_overlap:
    meaning: two effective items occupy incompatible time ranges
  drifted_commitment:
    meaning: prior scheduled item no longer matches actual execution path
  stale_hold:
    meaning: event remained unresolved past useful window
  reschedule_gap:
    meaning: update exists but no stable next slot is bound
  identity_time_mismatch:
    meaning: attendee/contact relation implies a different routing than current event assumption
```

## 7. Routing Outputs
```yaml
routing_outputs:
  effective_item_candidate:
    when:
      - active or imminent
      - sequence relevant
      - source/time basis stable
    writeback_path:
      - 03_board-orchestration/routing-logs/05-time-window/
      - 03_board-orchestration/routing-logs/00-consolidation/

  exception_candidate:
    when:
      - hard overlap
      - drifted commitment
      - stale hold
      - reschedule gap
      - identity_time_mismatch
    writeback_path:
      - 03_board-orchestration/routing-logs/cross-window-exceptions/
      - 03_board-orchestration/routing-logs/05-time-window/

  watch_only_or_sequence_queue:
    when:
      - future_bound without present conflict
      - should be observed but not yet surfaced as blocker
    writeback_path:
      - 03_board-orchestration/routing-logs/05-time-window/

  no_action:
    when:
      - already closed
      - low-impact reminder only
      - duplicate informational entry
    writeback_path:
      - optional 00 consolidation only

  reserve_or_blocked:
    when:
      - contamination risk
      - route unclear
      - writeback target missing
    writeback_path:
      - blocker packet or reserve staging only
```

## 8. Cross-Window Sync Hooks
```yaml
cross_window_sync_hooks:
  calendar_to_gmail:
    trigger:
      - reschedule mail
      - invite update
      - overdue reply affecting event state
    route_to:
      - gmail intake gate

  calendar_to_contacts:
    trigger:
      - attendee identity mismatch
      - relationship ambiguity
    route_to:
      - identity adapter

  calendar_to_control_plane:
    trigger:
      - overdue execution item
      - blocked follow-up
      - stale operational slot
    route_to:
      - control/task plane packet

  calendar_to_consolidation:
    trigger:
      - effective item confirmed
      - exception finalized
      - no-action window confirmed
    route_to:
      - 00_consolidation
```

## 9. Minimal State Set
```yaml
state_set:
  intake_pending:
    meaning: event captured but not yet classified
  scoped:
    meaning: event category assigned
  effective_now:
    meaning: affects current order
  watch_future:
    meaning: future-bound and queued for observation
  stale:
    meaning: no longer valid without decision
  exception_ready:
    meaning: should surface as conflict or stale item
  contamination_risk:
    meaning: event cannot be safely promoted
  blocked:
    meaning: route or writeback unresolved
  closed_loop:
    meaning: processed and returned to 00
```

## 10. Required Writeback Fields
```yaml
required_writeback_fields:
  - source_ref
  - actual_result
  - effective_order
  - current_state
  - route_output
  - mismatch_or_gap
  - next_single_action
  - return_to_00
```

## 11. Adapter Principle
```yaml
adapter_principle:
  this_contract_is_calendar_specific_but_not_isolated:
    - reuses mother-gate logic
    - only time semantics differ
  meaning:
    - future intake surfaces should be adapters, not disconnected mini-systems
```

## 12. Actual Result
```yaml
actual_result:
  - calendar now has an explicit time-window adapter over the mother-gate
  - effective_order is promoted to a required output rather than ad hoc judgement
  - conflict and stale classes are explicitly separated
  - cross-window sync with Gmail/Contacts/control plane is defined
```

## 13. Mismatch or Gap
```yaml
mismatch_or_gap:
  - attendee trust/identity normalization is not yet fixed
  - future-bound watch queue template is not yet separated
  - stale execution packet template is not yet dedicated
  - contacts identity adapter is still missing as a child contract
```

## 14. Next Single Action
```yaml
next_single_action:
  target: contacts_identity_adapter_contract
  reason: Gmail mother-gate and Calendar adapter now exist; the next shared infrastructure layer is identity normalization so sender/attendee/contact drift stops leaking ambiguity into routing, time-window, and exception logic
```

## 15. Return to 00
return_to_00: true
