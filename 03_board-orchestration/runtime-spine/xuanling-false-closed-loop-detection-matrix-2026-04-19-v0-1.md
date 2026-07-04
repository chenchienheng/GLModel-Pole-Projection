# XuanLing False Closed-Loop Detection Matrix｜2026-04-19 v0.1

一句核心：
閉環不應以表面完成、回覆存在、或狀態標記為準，而必須以是否真正回到有效 target_path、有效 state、有效 owner、有效 writeback 與可續行主骨為準；此矩陣的任務，就是攔截所有「看似完成、其實未完成」的偽閉環。

## 0. Mode
- mode: false-closed-loop-detection-matrix
- target: detect false closure across shared infrastructure chain
- basis:
  - Gmail Bridge Intake Gate Contract written
  - Calendar Time-Window Adapter Contract written
  - Contacts Identity Adapter Contract written
  - Control Plane Ownership Adapter Contract written
  - Consolidation Priority Rule Contract written
- return_to_00: true

## 1. Core Position
```yaml
core_position:
  closure_is_not_surface_completion: true
  closure_requires_valid_return: true
  no_item_may_claim_closed_loop_without_path_state_owner_writeback_alignment: true
  false_closed_loop_is_systemic_risk: true
  detection_matrix_applies_to:
    - gmail-derived actions
    - calendar-derived execution items
    - identity normalization items
    - control-plane tasks
    - consolidation outputs
```

## 2. Closure Dimensions
```yaml
closure_dimensions:
  path_validity:
    meaning: item landed on a valid target_path
  state_validity:
    meaning: current_state matches actual_result
  owner_validity:
    meaning: accountable actor/owner remains aligned
  writeback_validity:
    meaning: result is written to a valid canonical or allowed path
  return_validity:
    meaning: item can re-enter 00 without drift
  dependency_validity:
    meaning: required upstream/downstream dependencies are not silently broken
```

## 3. False Closure Classes
```yaml
false_closure_classes:
  replied_but_unrouted:
    meaning: response exists, but no valid path or packet was updated
  archived_but_unresolved:
    meaning: item disappeared from active surface, but unresolved action still exists
  scheduled_but_unowned:
    meaning: time slot exists, but no stable owner/execution path exists
  labeled_but_unclassified:
    meaning: label applied, but routing/category remains unclear
  written_but_noncanonical:
    meaning: output exists, but not on valid writeback path
  resolved_but_dependency_broken:
    meaning: local item looks closed, but linked dependency remains broken
  returned_but_state_drifted:
    meaning: item claims return_to_00, but actual state is still blocked/ambiguous
  visually_done_but_runtime_empty:
    meaning: projection/shell suggests completion, but runtime spine lacks basis
```

## 4. Detection Entry Gate
```yaml
detection_entry_gate:
  required_fields:
    - source_ref
    - actual_result
    - current_state
    - target_path
    - next_single_action
    - return_to_00_claim_or_equivalent
  fail_if:
    - no source_ref
    - no current_state basis
    - no target_path basis when closure is claimed
```

## 5. Detection Matrix
```yaml
detection_matrix:

  path_check:
    ask:
      - did the item land on an allowed target_path?
      - is the path canonical, derived-valid, reserve-valid, or invalid?
    false_if:
      - no actual landing path
      - landing path contradicts declared target_path

  state_check:
    ask:
      - does current_state match actual_result?
      - is item still blocked/ambiguous/stale despite closure claim?
    false_if:
      - state says closed_loop but blocker remains
      - state says resolved but next_single_action still compensates missing closure

  owner_check:
    ask:
      - is accountable owner/actor still aligned?
      - did ownership split or drift after closure claim?
    false_if:
      - no stable owner
      - owner changed without normalization or writeback

  writeback_check:
    ask:
      - was result written to valid path?
      - is writeback canonical enough for the item class?
    false_if:
      - result exists only in local surface/chat memory
      - no GitHub/log/output/allowed path update where required

  return_check:
    ask:
      - can item return_to_00 without hidden drift?
      - is no further action truly required for closure?
    false_if:
      - 00 return claimed but unresolved dependency remains
      - item requires hidden monitoring but was marked fully closed

  dependency_check:
    ask:
      - are linked upstream/downstream items still valid?
      - does this closure create orphaned or contradictory children?
    false_if:
      - linked dependency still open in blocking class
      - local closure masks cross-window exception
```

## 6. Severity Classes
```yaml
severity_classes:
  s0_critical:
    meaning: false closure hides security, finance, or blocked execution risk
  s1_high:
    meaning: false closure breaks active path, owner, or writeback integrity
  s2_medium:
    meaning: false closure creates stale drift, orphan dependency, or misleading no-action state
  s3_low:
    meaning: false closure mainly affects presentation, watch queues, or secondary organization
```

## 7. Routing Outputs
```yaml
routing_outputs:
  valid_closed_loop:
    when:
      - all required dimensions pass
    writeback_path:
      - existing canonical path remains valid

  false_closed_loop_candidate:
    when:
      - any critical dimension fails
    writeback_path:
      - 03_board-orchestration/routing-logs/cross-window-exceptions/
      - control-plane logs
      - 00 consolidation if convergence affected

  reopen_required:
    when:
      - closure must be revoked and item reactivated
    writeback_path:
      - original active path
      - blocker/stale/exception path as needed

  reserve_revert:
    when:
      - item cannot safely remain active after false-closure detection
    writeback_path:
      - reserve staging path

  no_action_confirmed:
    when:
      - closure claim is accurate and no hidden drift exists
    writeback_path:
      - optional consolidation only
```

## 8. Cross-Window Triggers
```yaml
cross_window_triggers:
  gmail:
    trigger_examples:
      - replied_but_unrouted
      - archived_but_unresolved
      - labeled_but_unclassified

  calendar:
    trigger_examples:
      - scheduled_but_unowned
      - stale slot marked complete without execution closure

  contacts:
    trigger_examples:
      - owner/contact drift after closure claim
      - duplicate identity leaves unresolved actor mapping

  control_plane:
    trigger_examples:
      - blocked writeback masked as done
      - false closed-loop in task or exception handling

  projection_web:
    trigger_examples:
      - visually_done_but_runtime_empty
```

## 9. Intent-Constrained Rule
```yaml
intent_constrained_rule:
  do_not_constrain_domain_only: true
  constrain_behavioral_intent_instead: true
  meaning:
    - closure claims must be tested against intent fulfillment
    - actions are valid only if they actually complete the declared route
    - symbolic completion without operational fulfillment is invalid
```

## 10. Minimal State Set
```yaml
state_set:
  closure_pending:
    meaning: item appears near completion but not yet verified
  closure_verified:
    meaning: closed-loop claim passed matrix checks
  false_closure_detected:
    meaning: closure claim failed matrix
  reopened:
    meaning: item returned to active processing after false closure detection
  reserve_reverted:
    meaning: item moved back to reserve
  closed_loop:
    meaning: verified and returned to 00
```

## 11. Required Writeback Fields
```yaml
required_writeback_fields:
  - source_ref
  - actual_result
  - closure_class
  - severity_class
  - current_state
  - target_path
  - mismatch_or_gap
  - next_single_action
  - return_to_00
```

## 12. Matrix Principle
```yaml
matrix_principle:
  this_is_the_first_truthfulness_gate_for_closure:
    - it prevents symbolic completion from entering mainbone as fact
    - it binds closure to operational reality, not conversational appearance
  meaning:
    - the network protects itself from self-deception
    - behavior intent becomes more important than domain label
```

## 13. Actual Result
```yaml
actual_result:
  - false closed-loop is now explicitly modeled as a systemic risk
  - closure is bound to path/state/owner/writeback/dependency validity
  - behavior intent is elevated over surface completion
  - projection/runtime mismatch is now detectable as a formal false-closure class
```

## 14. Mismatch or Gap
```yaml
mismatch_or_gap:
  - numeric scoring over severity is not yet bound
  - reopen packet template is not yet separated
  - reserve revert template is not yet separated
  - verified closure audit cadence is not yet defined
```

## 15. Next Single Action
```yaml
next_single_action:
  target: verified_closure_audit_cadence_contract
  reason: detection matrix now exists; next missing layer is how often and under what trigger verified closures should be re-audited so the system does not drift from true closure into delayed false closure over time
```

## 16. Return to 00
return_to_00: true
