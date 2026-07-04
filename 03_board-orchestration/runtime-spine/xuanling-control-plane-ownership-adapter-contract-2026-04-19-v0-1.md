# XuanLing Control Plane Ownership Adapter Contract｜2026-04-19 v0.1

一句核心：
Control Plane 不只是彙總窗口，而是 shared triad 之後的第四個共基 adapter；其任務是把 actor / owner / execution state / blocked writeback / stale task / exception escalation 壓成可正規化的 ownership layer，避免 Gmail、Calendar、Contacts 的歧義在控制面擴散成無主、失序或漂移治理。

## 0. Mode
- mode: control-plane-ownership-adapter-contract
- target: ownership and execution normalization over shared intake infrastructure
- basis:
  - Gmail Bridge Intake Gate Contract written
  - Calendar Time-Window Adapter Contract written
  - Contacts Identity Adapter Contract written
  - Packet Lifecycle Matrix written
- return_to_00: true

## 1. Core Position
```yaml
core_position:
  control_plane_is_not_raw_source: true
  control_plane_is_ownership_and_execution_surface: true
  no_direct_promotion_from_unowned_item: true
  all_control_items_must_pass_adapter: true
  adapter_reuses:
    - source check
    - scope classification
    - contamination screen
    - output routing
    - writeback after route clarity
```

## 2. Ownership Categories
```yaml
ownership_categories:
  owned_active:
    meaning: item has clear actor/owner and active execution path
  owned_blocked:
    meaning: item has owner but cannot advance due to blocker or missing writeback
  stale_execution:
    meaning: owner/path exists but execution is overdue, drifted, or obsolete
  ambiguous_ownership:
    meaning: multiple plausible owners or no stable execution owner
  writeback_blocked:
    meaning: execution result exists but cannot land on valid target path
  escalated_exception:
    meaning: item exceeds local handling and must surface as higher-priority exception
  no_action:
    meaning: item is already closed, informational, or non-operative
  contamination_risk:
    meaning: noisy, duplicated, contradictory, or route-breaking control signal
```

## 3. Entry Gate
```yaml
entry_gate:
  required_refs:
    - source_ref
    - actor_ref
    - ownership_scope
    - execution_context
    - target_path
  ownership_scope_must_identify:
    - personal_task
    - system_task
    - shared_task
    - exception_case
    - writeback_case
    - unknown
  fail_if:
    - no source_ref
    - no actor_ref or owner basis
    - no execution_context
    - no target_path at all
```

## 4. Ownership Normalization Flow
```yaml
ownership_normalization_flow:
  step_1_source_check:
    question: is control item attributable to a concrete source/context?
    if_no:
      - route_to: contamination_hold
      - state: blocked

  step_2_scope_check:
    question: does item belong to execution / writeback / stale / exception / ownership scope?
    if_no:
      - route_to: no_action
    if_yes:
      - continue_to: owner_binding_check

  step_3_owner_binding_check:
    questions:
      - is there a clear owner or actor?
      - is ownership compatible with current identity and schedule context?
      - does current routing assume a different owner than evidence suggests?
    outputs:
      - owned_active
      - owned_blocked
      - ambiguous_ownership
      - escalated_exception

  step_4_execution_state_check:
    questions:
      - is task/action still within effective window?
      - is execution stale or drifted?
      - is follow-up blocked by missing route or target?
    outputs:
      - stale_execution
      - writeback_blocked
      - owned_active

  step_5_contamination_screen:
    if_duplicate_or_contradictory_or_route_breaking:
      - route_to: reserve_or_blocked
      - state: contamination_risk
```

## 5. Ownership Rule
```yaml
ownership_rule:
  normalization_basis:
    - actor identity stability
    - task/execution context
    - target path validity
    - writeback feasibility
    - cross-window confirmation
  do_not_use_alone:
    - window of origin only
    - latest update only
    - human assumption only
    - task title only
  output_must_state:
    - why owner is considered valid or ambiguous
    - why execution is active, stale, or blocked
    - why item can or cannot write back
```

## 6. Drift and Failure Types
```yaml
drift_and_failure_types:
  actor_execution_mismatch:
    meaning: task owner differs from actor implied by source/context
  stale_task_drift:
    meaning: task remains open beyond useful execution window
  blocked_writeback:
    meaning: valid result exists but target path or contract is missing
  ownership_split:
    meaning: shared task lacks final accountable owner
  false_closed_loop:
    meaning: item appears resolved but has not returned to valid target path
  contradictory_control_signal:
    meaning: multiple updates produce incompatible ownership/execution state
```

## 7. Routing Outputs
```yaml
routing_outputs:
  control_active:
    when:
      - owner clear
      - execution valid
      - target path available
    writeback_path:
      - 03_board-orchestration/routing-logs/
      - 03_board-orchestration/routing-logs/00-consolidation/

  control_blocked:
    when:
      - owner clear but route or target invalid
      - writeback blocked
    writeback_path:
      - blocker packet
      - routing logs

  stale_execution_candidate:
    when:
      - item overdue or drifted
      - execution window expired without closure
    writeback_path:
      - 03_board-orchestration/routing-logs/cross-window-exceptions/
      - control-plane logs

  escalated_exception:
    when:
      - ambiguity or block exceeds local handling
      - cross-window conflict converges on control plane
    writeback_path:
      - 03_board-orchestration/routing-logs/cross-window-exceptions/
      - 00 consolidation

  no_action:
    when:
      - already closed-loop
      - purely informational
    writeback_path:
      - optional consolidation only

  reserve_or_blocked:
    when:
      - contamination risk
      - ownership unresolved
      - target path missing
    writeback_path:
      - blocker packet or reserve staging only
```

## 8. Cross-Window Sync Hooks
```yaml
cross_window_sync_hooks:
  control_plane_to_gmail:
    trigger:
      - blocked writeback caused by inbox-origin action
      - stale response ownership
    route_to:
      - gmail intake reclassification

  control_plane_to_calendar:
    trigger:
      - stale execution linked to missed or drifted time window
      - owner conflict affects effective order
    route_to:
      - calendar time-window re-evaluation

  control_plane_to_contacts:
    trigger:
      - actor ambiguity
      - ownership split
      - identity mismatch blocks execution
    route_to:
      - contacts identity normalization

  control_plane_to_consolidation:
    trigger:
      - active item confirmed
      - blocked item confirmed
      - stale or escalated exception confirmed
    route_to:
      - 00_consolidation
```

## 9. Minimal State Set
```yaml
state_set:
  intake_pending:
    meaning: control item captured but not yet classified
  scoped:
    meaning: ownership scope assigned
  owned_active:
    meaning: valid owner and active execution confirmed
  owned_blocked:
    meaning: owner exists but item cannot advance
  stale_execution:
    meaning: execution state drift confirmed
  ambiguous_ownership:
    meaning: owner cannot yet be normalized
  writeback_blocked:
    meaning: output cannot land on valid target
  escalated_exception:
    meaning: control-plane escalation required
  contamination_risk:
    meaning: cannot safely normalize
  closed_loop:
    meaning: processed and returned to 00
```

## 10. Required Writeback Fields
```yaml
required_writeback_fields:
  - source_ref
  - actual_result
  - ownership_state
  - current_state
  - route_output
  - target_path
  - mismatch_or_gap
  - next_single_action
  - return_to_00
```

## 11. Adapter Principle
```yaml
adapter_principle:
  this_contract_is_control_specific_but_not_isolated:
    - reuses mother-gate logic
    - only ownership/execution semantics differ
  meaning:
    - future governance surfaces should inherit this layer
    - unresolved control ambiguity should stop here before broad governance or public projection
```

## 12. Actual Result
```yaml
actual_result:
  - control plane now has an explicit ownership/execution adapter over the shared infrastructure
  - stale tasks, blocked writeback, and actor drift are separated from generic exception noise
  - ownership normalization basis is explicit rather than ad hoc
  - cross-window convergence point is now defined
```

## 13. Mismatch or Gap
```yaml
mismatch_or_gap:
  - ownership split resolution template is not yet separated
  - false closed-loop detection rule is not yet elevated into a dedicated matrix
  - blocker packet template is still generic rather than ownership-specific
  - consolidation priority rule over mixed stale/block/writeback cases is still missing
```

## 14. Next Single Action
```yaml
next_single_action:
  target: consolidation_priority_rule_contract
  reason: Gmail intake, Calendar time-window, Contacts identity, and Control ownership now form a shared infrastructure chain; the next missing layer is a compact priority rule so mixed cases converge into one highest-priority next action instead of remaining parallel but unsorted
```

## 15. Return to 00
return_to_00: true
