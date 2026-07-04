# XuanLing Contacts Identity Adapter Contract｜2026-04-19 v0.1

一句核心：
Contacts/Identity Adapter 作為 intake 的共用基礎設施；其任務是正規化寄件人、參與者和聯絡人的信任評分與關係狀態，防止身分漂移滲漏到路由、時間窗及例外邏輯中，並沿用 mother-gate 規則。

## 0. Mode
- mode: identity-adapter-contract
- target: identity normalization adapter over reusable mother-gate
- basis:
  - Gmail Bridge Intake Gate Contract written
  - Calendar Time-Window Adapter Contract written
  - Cross-window exception pattern already tested
- return_to_00: true

## 1. Core Rule
```yaml
core_rule:
  identity_is_not_static_truth: true
  identity_is_relational_surface: true
  no_direct_routing_without_trust_score: true
  all_external_entities_must_pass_adapter: true
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
  trusted_core:
    meaning: verified internal or core-aligned entity
  known_external:
    meaning: previously validated external entity with stable history
  ambiguous_drift:
    meaning: known entity but relationship, role, or context has drifted
  new_unverified:
    meaning: first-time contact requiring trust scoring
  contamination_source:
    meaning: known spam, phishing, or persistently unstable entity
```

## 3. Trust Scoring Basis
```yaml
trust_scoring_basis:
  factors:
    - prior successful closed-loop interactions
    - domain and authentication verification (e.g., DKIM/SPF)
    - alignment with expected relationship context
    - cross-window consistency (e.g., matches both Gmail and Calendar)
  levels:
    high_trust:
      meaning: automatic route promotion allowed
    conditional_trust:
      meaning: route allowed but requires scope matching
    low_trust:
      meaning: route blocked or requires manual review
```

## 4. Entry Gate
```yaml
entry_gate:
  required_refs:
    - entity_id
    - source_ref (e.g., email address, phone, identifier)
    - interaction_context
  interaction_context_must_identify:
    - sender_of_message
    - attendee_of_event
    - mentioned_entity
    - unknown
  fail_if:
    - no source_ref
    - no entity_id mapping possible
```

## 5. Identity Decision Flow
```yaml
identity_decision_flow:
  step_1_source_check:
    question: is entity identifier resolvable?
    if_no:
      - route_to: contamination_hold
      - state: blocked

  step_2_trust_scoring:
    question: what is the trust level of this entity?
    outputs:
      - high_trust
      - conditional_trust
      - low_trust

  step_3_drift_check:
    questions:
      - has the relationship changed?
      - is the current interaction context mismatched with past data?
    if_yes:
      - route_to: identity_drift_candidate
    if_no:
      - continue_to: routing_check

  step_4_contamination_screen:
    if_low_trust_or_malicious:
      - route_to: reserve_or_blocked
      - state: contamination_risk
```

## 6. Routing Outputs
```yaml
routing_outputs:
  identity_normalized:
    when:
      - high_trust or verified conditional_trust
      - no drift detected
    writeback_path:
      - caller_service (e.g., Gmail Bridge, Calendar Adapter)

  identity_drift_candidate:
    when:
      - known entity with role/context mismatch
      - relationship change detected
    writeback_path:
      - 03_board-orchestration/routing-logs/cross-window-exceptions/
      - 03_board-orchestration/routing-logs/00-consolidation/

  reserve_or_blocked:
    when:
      - low_trust
      - contamination risk
    writeback_path:
      - 05_XLEN_Reserve_Unenabled/03_Identity_Adapter
```

## 7. Cross-Window Sync Hooks
```yaml
cross_window_sync_hooks:
  identity_to_gmail:
    trigger:
      - sender trust verified
      - spam/phishing classification
    route_to:
      - gmail intake gate

  identity_to_calendar:
    trigger:
      - attendee trust verified
      - attendee identity drift resolved
    route_to:
      - calendar time-window adapter

  identity_to_consolidation:
    trigger:
      - identity drift finalized
      - new entity verified
    route_to:
      - 00_consolidation
```

## 8. Minimal State Set
```yaml
state_set:
  intake_pending:
    meaning: entity data received but not scored
  scored:
    meaning: trust level assigned
  drift_detected:
    meaning: relationship mismatch requires resolution
  normalized:
    meaning: entity is safe for routing
  contamination_risk:
    meaning: entity cannot be safely promoted
  blocked:
    meaning: writeback target missing or entity rejected
```

## 9. Required Writeback Fields
```yaml
required_writeback_fields:
  - entity_id
  - trust_score
  - current_state
  - drift_status
  - route_output
  - mismatch_or_gap
  - next_single_action
  - return_to_00
```

## 10. Actual Result
```yaml
actual_result:
  - contacts identity adapter is created as a child contract
  - attendee trust and sender trust scoring are normalized
  - identity drift logic is separated from event/message routing
  - cross-window sync hooks for identity validation are defined
```

## 11. Mismatch or Gap
```yaml
mismatch_or_gap:
  - trust scoring integration with external providers is pending
```

## 12. Next Single Action
```yaml
next_single_action:
  target: trust_scoring_integration_spec
  reason: internal trust scoring logic is defined; next step is external provider integration.
```

## 13. Return to 00
return_to_00: true
