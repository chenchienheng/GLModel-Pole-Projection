# XuanLing Packet Lifecycle Matrix｜2026-04-18 v0.1

一句核心：
在依存對照已補上的前提下，下一步先固定封包生命週期；目標不是再擴新功能，而是讓 intake / packet / return / log / snap / audit / consolidation / return_to_00 有一致狀態流轉，避免各窗口各自前進但主骨不同步。

## 0. Mode
- mode: meridian-batch / packet-lifecycle matrix
- basis:
  - Google Drive runtime reading spec
  - Google Drive working cards
  - Google Drive strategy bridge packet
- purpose: stabilize state transitions across windows
- return_to_00: true

## 1. Lifecycle Matrix
```yaml
packet_lifecycle_matrix:

  stage_0_intake:
    role:
      - event entry
      - source capture
      - window identification
    primary_sources:
      - Gmail
      - Calendar
      - Contacts
      - Drive source documents
      - local/web draft triggers
    required_fields:
      - source_ref
      - window_ref
      - time_ref
      - preliminary_role_ref
    next_state:
      - stage_1_classification
    failure_if:
      - no source_ref
      - no window identity

  stage_1_classification:
    role:
      - determine case position
      - determine group / department / window / text type
      - decide whether event is active, reserve, or frozen
    required_keys:
      - Case ID
      - Group
      - Department
      - Window
      - Text Type
    output:
      - packet_candidate
      - hold_candidate
      - reserve_candidate
    next_state:
      - stage_2_packet
    failure_if:
      - cannot assign text type
      - cannot assign role_ref

  stage_2_packet:
    role:
      - formalize the local unit of work
      - state what is being handled this round
    must_write:
      - PACKET
    required_fields:
      - source_ref
      - role_ref
      - state_ref
      - packet_focus
      - version_ref
    next_state:
      - stage_3_return
    failure_if:
      - packet has no focus
      - version not declared

  stage_3_return:
    role:
      - compress round result into route-readable sentence
      - surface unresolved dependencies and required decision if any
    must_write:
      - RETURN
    required_fields:
      - actual_result
      - dependency_gap
      - decision_need
      - next_single_action
    next_state:
      - stage_4_log
    failure_if:
      - no unresolved dependency field
      - no next action

  stage_4_log:
    role:
      - leave event/update/decision/test trace
      - preserve execution chronology
    must_write:
      - LOG
    log_types:
      - EVENT LOG
      - UPDATE LOG
      - DECISION LOG
      - TEST-RESULT
      - AUDIT LOG
    required_fields:
      - log_type
      - time_ref
      - actor_ref
      - path_ref
    next_state:
      - stage_5_validation
    failure_if:
      - no timestamp
      - no actor_ref
      - no write path

  stage_5_validation:
    role:
      - determine whether round is stable enough for snapshot, audit, reserve, or rollback
    branches:
      snap:
        when:
          - dependency sufficiently resolved
          - decision or version freeze exists
      audit:
        when:
          - mismatch, wrong attach, missing fields, drift, or rollback check exists
      reserve:
        when:
          - high risk or not yet promotable
      rollback:
        when:
          - promoted state is invalidated
    next_state:
      - stage_6_consolidation

  stage_6_consolidation:
    role:
      - gather effective items only
      - mark no-action windows
      - surface blocked items and exceptions
    must_write:
      - consolidation packet
    required_fields:
      - effective_items
      - mapped_windows
      - no_action_windows
      - blocked_items
      - exceptions
      - highest_priority_next_action
    next_state:
      - stage_7_return_to_00
    failure_if:
      - item has no source_ref
      - windows not classified

  stage_7_return_to_00:
    role:
      - close the current round
      - restore mainbone visibility
      - prepare next push
    must_write:
      - return_to_00
    required_fields:
      - final_state_ref
      - next_single_action
      - route_back_ref
    success_condition:
      - current round no longer drifts outside mainbone
```

## 2. State Set
```yaml
state_set:
  active:
    meaning: currently in motion and promotable
  in_progress:
    meaning: packet/return/log is being built
  pending_decision:
    meaning: needs strategy or mainbone decision
  hold:
    meaning: waiting without promotion
  reserve:
    meaning: staged but not yet active
  frozen:
    meaning: historical or locked snapshot state
  blocked:
    meaning: cannot continue because dependency or writeback target is missing
  audit_required:
    meaning: mismatch or drift detected
  closed_loop:
    meaning: round has returned to 00 and can serve as next-round base
```

## 3. Minimal Transition Rule
```yaml
minimal_transition_rule:
  - no PACKET without source_ref
  - no RETURN without next_single_action
  - no LOG without time_ref and actor_ref
  - no SNAP without prior decision or resolved dependency threshold
  - no consolidation item without source_ref
  - no promotion from reserve without explicit reclassification
  - every valid round must end in return_to_00 or explicit blocked state
```

## 4. Window Mapping Guidance
```yaml
window_mapping_guidance:
  gmail:
    default_entry: stage_0_intake
    typical_outputs:
      - packet_candidate
      - exception_candidate
  calendar:
    default_entry: stage_0_intake
    typical_outputs:
      - time packet
      - conflict check
  contacts:
    default_entry: stage_1_classification
    typical_outputs:
      - identity/relationship correction
  drive:
    default_entry: stage_1_classification
    typical_outputs:
      - source packet
      - source check
  github:
    default_entry: stage_4_log
    typical_outputs:
      - canonical log
      - source check
      - heartbeat
      - consolidation
  web:
    default_entry: stage_6_consolidation
    typical_outputs:
      - projection block
      - route-readable surface
```

## 5. Actual Result
```yaml
actual_result:
  - packet lifecycle is now compressed into 8 stages
  - each stage has failure conditions and next-state rule
  - main drift-prevention rule is now explicit: no source_ref, no promotion
  - current system can continue one batch at a time without mixing all layers in a single run
```

## 6. Mismatch or Gap
```yaml
mismatch_or_gap:
  - matrix is defined at lifecycle level, not yet bound to every existing file path
  - actor_ref normalization across tools is not yet fixed
  - reserve-to-active reclassification packet is not yet written as a dedicated contract
  - web projection still consumes confirmed state manually, not yet from automatic packet feed
```

## 7. Next Single Action
```yaml
next_single_action:
  target: reserve_to_active_promotion_contract
  reason: dependency crosswalk and lifecycle matrix now exist; the next stability gap is explicit promotion logic for items staged in Reserve before they are allowed into active chain or projection layers
```

## 8. Return to 00
return_to_00: true
