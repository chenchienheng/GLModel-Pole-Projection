# XuanLing Contacts Identity Adapter Contract｜2026-04-19 v0.1

一句核心：
Contacts 不只是通訊錄，而是第三個 intake adapter；其任務是把 sender / attendee / contact / relationship / role 的漂移壓成可正規化的 identity layer，避免 Gmail、Calendar、control plane 與 exception routing 持續被身份歧義污染。

## 0. Mode
- mode: contacts-identity-adapter-contract
- target: identity normalization adapter over mother-gate infrastructure
- basis:
  - Gmail Bridge Intake Gate Contract written
  - Calendar Time-Window Adapter Contract written
  - Cross-window exception pattern already exercised
- return_to_00: true

## 1. Core Position
```yaml
core_position:
  contacts_is_not_runtime_truth: true
  contacts_is_identity_surface: true
  no_direct_promotion_from_contact_listing: true
  all_identity_effective_items_must_pass_adapter: true
  adapter_reuses:
    - source check
    - scope classification
    - contamination screen
    - output routing
    - writeback after route clarity
```

## 2. Identity Categories
```yaml
identity_categories:
  stable_identity:
    meaning: sender/attendee/contact relation is sufficiently aligned
  drifted_identity:
    meaning: name/email/role/relationship no longer matches expected routing
  ambiguous_identity:
    meaning: multiple plausible mappings exist
  external_unverified:
    meaning: identity exists but trust/role is not yet established
  stale_identity:
    meaning: contact data is outdated relative to current use
  no_action:
    meaning: identity is already normalized or irrelevant to current round
  contamination_risk:
    meaning: misleading, spoof-like, noisy, or route-breaking identity signal
```

## 3. Entry Gate
```yaml
entry_gate:
  required_refs:
    - source_ref
    - actor_ref
    - identity_scope
    - relation_context
  identity_scope_must_identify:
    - sender
    - recipient
    - attendee
    - known_contact
    - unknown_contact
    - system_identity
  fail_if:
    - no source_ref
    - no actor_ref basis
    - no relation_context at all
```

## 4. Identity Normalization Flow
```yaml
identity_normalization_flow:
  step_1_source_check:
    question: is identity signal attributable to a concrete source/context?
    if_no:
      - route_to: contamination_hold
      - state: blocked

  step_2_scope_check:
    question: is this sender/attendee/contact identity relevant to current routing?
    if_no:
      - route_to: no_action
    if_yes:
      - continue_to: mapping_check

  step_3_mapping_check:
    questions:
      - does actor map to an existing known contact?
      - does role match expected use context?
      - does relationship match prior route assumptions?
    outputs:
      - stable_identity
      - drifted_identity
      - ambiguous_identity
      - external_unverified

  step_4_staleness_check:
    questions:
      - is stored identity outdated?
      - does current event/mail imply changed role or contact path?
    if_yes:
      - route_to: stale_or_drift_candidate

  step_5_contamination_screen:
    if_spoof_like_or_noise_heavy_or_misleading:
      - route_to: reserve_or_blocked
      - state: contamination_risk
```

## 5. Normalization Rule
```yaml
normalization_rule:
  normalization_basis:
    - email address stability
    - sender/attendee recurrence
    - relationship context
    - role consistency
    - source cross-confirmation
  do_not_use_alone:
    - display name only
    - single occurrence only
    - title or signature only
  output_must_state:
    - why identity is considered stable or drifted
    - what routing assumption changes because of it
```

## 6. Drift Types
```yaml
drift_types:
  sender_contact_mismatch:
    meaning: email matches but role/contact assumption no longer does
  attendee_role_mismatch:
    meaning: event participant implies a different routing role
  relationship_drift:
    meaning: person exists but relationship context changed
  stale_profile:
    meaning: stored contact details lag behind current interaction reality
  duplicate_identity:
    meaning: multiple contacts compete for one actor mapping
  spoof_like_identity:
    meaning: identity signal imitates trust without sufficient basis
```

## 7. Routing Outputs
```yaml
routing_outputs:
  identity_stable:
    when:
      - mapping is sufficiently clear
      - no routing change needed
    writeback_path:
      - optional normalization log only

  identity_drift_candidate:
    when:
      - routing assumption changes
      - role or relationship no longer aligns
    writeback_path:
      - 03_board-orchestration/routing-logs/cross-window-exceptions/
      - identity normalization logs

  stale_or_drift_candidate:
    when:
      - contact data outdated
      - current interaction contradicts stored profile
    writeback_path:
      - identity normalization logs
      - optional cross-window exception path

  no_action:
    when:
      - already normalized
      - irrelevant to current round
    writeback_path:
      - optional 00 consolidation only

  reserve_or_blocked:
    when:
      - contamination risk
      - ambiguous mapping unresolved
      - no stable routing target exists
    writeback_path:
      - blocker packet or reserve staging only
```

## 8. Cross-Window Sync Hooks
```yaml
cross_window_sync_hooks:
  contacts_to_gmail:
    trigger:
      - sender mapping changed
      - trusted vs unverified contact status changed
    route_to:
      - gmail intake reclassification

  contacts_to_calendar:
    trigger:
      - attendee role mismatch
      - identity-time mismatch
    route_to:
      - calendar time-window re-evaluation

  contacts_to_control_plane:
    trigger:
      - identity drift affects execution ownership
      - actor mismatch blocks writeback or follow-up
    route_to:
      - control/task plane packet

  contacts_to_consolidation:
    trigger:
      - identity normalization finalized
      - drift exception finalized
    route_to:
      - 00_consolidation
```

## 9. Minimal State Set
```yaml
state_set:
  intake_pending:
    meaning: identity signal captured but not yet classified
  scoped:
    meaning: identity scope assigned
  normalized:
    meaning: stable mapping confirmed
  drifted:
    meaning: routing-relevant mismatch confirmed
  stale:
    meaning: stored identity no longer current enough
  ambiguous:
    meaning: multiple mappings still unresolved
  contamination_risk:
    meaning: cannot safely normalize
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
  - identity_state
  - route_output
  - mismatch_or_gap
  - next_single_action
  - return_to_00
```

## 11. Adapter Principle
```yaml
adapter_principle:
  this_contract_is_identity_specific_but_not_isolated:
    - reuses mother-gate logic
    - only identity semantics differ
  meaning:
    - future role/actor adapters should inherit this layer
    - identity ambiguity should stop here instead of leaking forward
```

## 12. Actual Result
```yaml
actual_result:
  - contacts now has an explicit identity adapter over shared intake infrastructure
  - sender/attendee/contact drift is separated from generic exception noise
  - normalization basis is explicit rather than ad hoc
  - cross-window sync with Gmail/Calendar/control plane is defined
```

## 13. Mismatch or Gap
```yaml
mismatch_or_gap:
  - trust scoring is still rule-based, not yet normalized into a dedicated matrix
  - duplicate identity resolution template is not yet separated
  - identity normalization logs do not yet have a dedicated packet template
  - control-plane ownership adapter is still missing as next child contract
```

## 14. Next Single Action
```yaml
next_single_action:
  target: control_plane_ownership_adapter_contract
  reason: Gmail intake, Calendar time-window, and Contacts identity now form a shared triad; the next missing infrastructure layer is ownership/execution normalization so stale tasks, blocked writeback, and actor drift can converge into one control-plane adapter instead of remaining scattered
```

## 15. Return to 00
return_to_00: true
