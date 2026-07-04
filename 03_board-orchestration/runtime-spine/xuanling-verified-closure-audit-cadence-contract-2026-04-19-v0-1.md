# XuanLing Verified Closure Audit Cadence Contract｜2026-04-19 v0.1

一句核心：
真閉環不應被視為永久閉環；任何已驗證 closure 都應依風險、時間、依存密度與跨窗影響進入重審節律，避免系統把「當下為真」誤當成「永遠為真」。

## 0. Mode
- mode: verified-closure-audit-cadence-contract
- target: re-audit cadence for verified closures
- basis:
  - False Closed-Loop Detection Matrix written
  - Consolidation Priority Rule Contract written
  - Gmail / Calendar / Contacts / Control Plane shared infrastructure chain written
- return_to_00: true

## 1. Core Position
```yaml
core_position:
  verified_closure_is_not_permanent_truth: true
  closure_must_be_reauditable: true
  no_verified_closure_should_escape_time_based_or_trigger_based_recheck: true
  cadence_applies_to:
    - high-risk closed items
    - cross-window closures
    - ownership-sensitive closures
    - writeback-dependent closures
    - projection/runtime linked closures
```

## 2. Audit Dimensions
```yaml
audit_dimensions:
  time_decay:
    meaning: truth may weaken as time passes
  dependency_drift:
    meaning: linked upstream/downstream items may change after closure
  ownership_shift:
    meaning: owner/actor may drift after closure
  writeback_decay:
    meaning: valid landing path may later prove incomplete or noncanonical
  projection_drift:
    meaning: visible completion may drift away from runtime truth
  trigger_relevance:
    meaning: new signals may invalidate previous closure confidence
```

## 3. Cadence Classes
```yaml
cadence_classes:
  c0_immediate_reaudit:
    meaning: closure must be rechecked on next round or next relevant trigger
    typical_for:
      - security/finance closures
      - blocked-writeback recovery
      - ownership split recovery
      - false-closure reopen cases

  c1_short_cycle:
    meaning: closure should be rechecked soon under light delay
    typical_for:
      - cross-window exception closures
      - time-window conflict resolutions
      - identity drift normalizations

  c2_medium_cycle:
    meaning: closure can remain stable unless mild drift appears
    typical_for:
      - routine control-plane closures
      - low-risk packet completions
      - normal writeback-confirmed items

  c3_trigger_only:
    meaning: no periodic review needed; only re-audit when a relevant signal appears
    typical_for:
      - low-impact no-action confirmations
      - well-contained informational closures
      - isolated reserve decisions
```

## 4. Entry Gate
```yaml
entry_gate:
  required_fields:
    - source_ref
    - actual_result
    - closure_class
    - severity_class_or_equivalent
    - target_path
    - return_to_00
  fail_if:
    - no source_ref
    - no closure basis
    - no target_path when writeback-dependent closure is claimed
```

## 5. Cadence Assignment Rule
```yaml
cadence_assignment_rule:
  assign_c0_if:
    - closure involves security or finance remediation
    - closure follows reopen_required
    - closure follows blocked_writeback recovery
    - closure affects owner/accountability correctness

  assign_c1_if:
    - closure resolves time conflict or stale execution
    - closure normalizes identity with cross-window effect
    - closure depends on multiple adapters staying aligned

  assign_c2_if:
    - closure has canonical writeback
    - closure has low drift risk and stable owner/path
    - closure affects only one active window with low spread

  assign_c3_if:
    - closure is low-impact
    - closure is non-blocking and well isolated
    - future invalidation would be low-cost and low-risk
```

## 6. Trigger-Based Reaudit Rule
```yaml
trigger_based_reaudit_rule:
  triggers:
    - new message reopens prior assumption
    - calendar reschedule or overlap appears
    - contact/owner mapping changes
    - writeback target changes or becomes invalid
    - projection claims completion without runtime support
    - dependency child reopens or fails
  effect:
    - prior cadence may be escalated
    - verified closure may move to closure_pending or reopened
```

## 7. Reaudit Outputs
```yaml
reaudit_outputs:
  closure_reconfirmed:
    when:
      - prior verified closure still passes matrix
    writeback_path:
      - optional audit log only

  cadence_escalated:
    when:
      - closure still valid but drift risk increased
    writeback_path:
      - audit log
      - optional consolidation

  closure_pending:
    when:
      - evidence insufficient for reconfirmation
    writeback_path:
      - control-plane log
      - monitoring queue

  reopen_required:
    when:
      - closure no longer valid
    writeback_path:
      - original active path
      - exception or blocker path as needed

  reserve_revert:
    when:
      - item cannot safely stay active after re-audit
    writeback_path:
      - reserve path
```

## 8. Cross-Window Reaudit Hooks
```yaml
cross_window_reaudit_hooks:
  gmail:
    may_trigger:
      - new reply invalidates prior closure
      - archived item resurfaces as unresolved

  calendar:
    may_trigger:
      - reschedule reopens closed time path
      - stale slot was falsely treated as closed

  contacts:
    may_trigger:
      - owner/contact drift breaks prior closure validity
      - duplicate identity changes accountability mapping

  control_plane:
    may_trigger:
      - blocked writeback reappears
      - closed task loses valid target path

  projection_web:
    may_trigger:
      - visible completion drifts from runtime truth
```

## 9. Intent Rule
```yaml
intent_rule:
  audit_must_test_intent_completion_not_symbol_only: true
  meaning:
    - re-audit asks whether the intended route remains fulfilled
    - not whether the old closure marker still exists
```

## 10. Minimal State Set
```yaml
state_set:
  closure_verified:
    meaning: passed current audit and remains valid
  cadence_assigned:
    meaning: closure has explicit review rhythm
  closure_pending:
    meaning: awaiting re-audit evidence
  cadence_escalated:
    meaning: review frequency increased
  reopened:
    meaning: prior closure invalidated and active again
  reserve_reverted:
    meaning: prior closure moved back to reserve
  closed_loop:
    meaning: verified and stable for current round
```

## 11. Required Writeback Fields
```yaml
required_writeback_fields:
  - source_ref
  - actual_result
  - closure_class
  - cadence_class
  - current_state
  - target_path
  - mismatch_or_gap
  - next_single_action
  - return_to_00
```

## 12. Contract Principle
```yaml
contract_principle:
  closure_truth_requires_time_discipline:
    - truth is maintained, not merely declared
    - closure without cadence becomes decay-prone
  meaning:
    - the network learns to distrust static completion
    - time becomes part of governance, not just sequencing
```

## 13. Actual Result
```yaml
actual_result:
  - verified closure now has explicit re-audit cadence classes
  - trigger-based reopening is separated from periodic recheck
  - closure truth is bound to time and drift rather than one-time declaration
  - the system gains a maintenance rhythm for truthfulness
```

## 14. Mismatch or Gap
```yaml
mismatch_or_gap:
  - cadence intervals are class-based, not yet numerically parameterized
  - monitoring queue template is not yet separated
  - cadence escalation scoring is not yet matrix-backed
  - re-audit logs do not yet have a dedicated packet template
```

## 15. Next Single Action
```yaml
next_single_action:
  target: shared_monitoring_queue_contract
  reason: cadence now exists; the next missing layer is a compact shared queue so closure_pending, watch_future, cadence_assigned, and reserve-bound monitoring do not remain scattered across adapters
```

## 16. Return to 00
return_to_00: true
