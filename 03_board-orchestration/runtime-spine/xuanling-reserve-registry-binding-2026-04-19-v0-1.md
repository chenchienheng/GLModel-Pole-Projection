# XuanLing Reserve Registry Binding｜2026-04-19 v0.1

一句核心：
這一輪不再只寫 promotion 原則，而是把 Reserve 候選項正式綁入 registry；目的不是立即啟用，而是先讓每個候選項有 source_ref、current_state、target_path、promotion_gate 與 writeback path，避免 Reserve 成為無邊界暫置區。

## 0. Mode
- mode: reserve-registry-binding
- basis:
  - Root Manifest confirmed
  - Minimal Folder Baseline confirmed
  - Dependency Crosswalk written
  - Packet Lifecycle Matrix written
  - Reserve to Active Promotion Contract written
- return_to_00: true

## 1. Registry Rule
```yaml
registry_rule:
  reserve_registry_is_required: true
  no_unregistered_reserve_candidate: true
  registry_minimum_fields:
    - reserve_id
    - source_ref
    - current_state
    - target_path
    - promotion_gate
    - writeback_path
    - blocker_or_gap
    - next_single_action
```

## 2. Reserve Registry
```yaml
reserve_registry:

  - reserve_id: R-01-WEB-SHELL
    source_ref:
      - docs/xuanling/index.html
      - web shell drafts
      - visual portal assets
    current_state: active_limited_candidate
    target_path: docs/xuanling/
    promotion_gate:
      - spine_truth_bound
      - route_readability_confirmed
      - no_canonical_claim_without_runtime_basis
    writeback_path:
      - docs/xuanling/
      - 03_board-orchestration/runtime-spine/
    blocker_or_gap:
      - multi-page split not yet bound to packet feed
      - projection still partially manual
    next_single_action:
      - bind page blocks to packet/state sections

  - reserve_id: R-02-GAMMA-PORTAL
    source_ref:
      - gamma v9 world entry / subpage architecture
      - gamma v8 drive intake
      - gamma v7 merged cleanup
    current_state: reserve_verified
    target_path: 05_XLEN_Reserve_Unenabled/01_Web_UI
    promotion_gate:
      - gamma content re-readable and not archived-only
      - structure aligned to CoreTri/LingLuo/XuanLing roles
      - export or route correspondence defined
    writeback_path:
      - 05_XLEN_Reserve_Unenabled/01_Web_UI
      - docs/xuanling/ (derived only)
    blocker_or_gap:
      - current Gamma read path unstable / archived variant encountered
      - Gamma is projection-first, not canonical runtime carrier
    next_single_action:
      - bind Gamma pages to web shell role map instead of treating Gamma as sovereign

  - reserve_id: R-03-GMAIL-BRIDGE
    source_ref:
      - 05_XLEN_Reserve_Unenabled/02_Gmail_Bridge
      - Gmail intake packets
      - exception scan patterns
    current_state: reserve
    target_path: 05_XLEN_Reserve_Unenabled/02_Gmail_Bridge
    promotion_gate:
      - intake path defined
      - exception handling path defined
      - writeback target defined
      - contamination gate defined
    writeback_path:
      - 03_board-orchestration/routing-logs/
      - 05_XLEN_Reserve_Unenabled/02_Gmail_Bridge
    blocker_or_gap:
      - bridge packet not yet separated from direct inbox ops
      - contamination and safe-lift thresholds not yet explicit
    next_single_action:
      - write gmail-bridge intake gate contract

  - reserve_id: R-04-VALUE-COMPUTE-RETURN
    source_ref:
      - 05_XLEN_Reserve_Unenabled/03_Value_Compute_Return
      - value-return candidates
      - compute/return logic notes
    current_state: reserve
    target_path: 05_XLEN_Reserve_Unenabled/03_Value_Compute_Return
    promotion_gate:
      - compute role explicit
      - return packet explicit
      - audit fallback exists
      - result-classification rule exists
    writeback_path:
      - 03_board-orchestration/runtime-spine/
      - 05_XLEN_Reserve_Unenabled/03_Value_Compute_Return
    blocker_or_gap:
      - no dedicated return packet contract yet
      - no pass/fail/recycle rule bound to registry
    next_single_action:
      - write value-compute-return contract

  - reserve_id: R-05-HIGH-RISK-INTERFACES
    source_ref:
      - 05_XLEN_Reserve_Unenabled/04_High_Risk_Interfaces
      - future external connectors
      - partial automation candidates
    current_state: reserve
    target_path: 05_XLEN_Reserve_Unenabled/04_High_Risk_Interfaces
    promotion_gate:
      - risk reviewed
      - rollback path exists
      - actor_ref exists
      - audit log path exists
    writeback_path:
      - 03_board-orchestration/routing-logs/
      - 05_XLEN_Reserve_Unenabled/04_High_Risk_Interfaces
    blocker_or_gap:
      - no interface-specific risk matrix yet
      - no actor_ref normalization yet
    next_single_action:
      - write high-risk interface risk matrix

  - reserve_id: R-06-UNCLASSIFIED-SOURCE-NODES
    source_ref:
      - Drive source documents not yet role-mapped
      - legacy nuclei
      - rebirth nodes pending classification
    current_state: reserve
    target_path: 01_XLEN_StemCell_Vault
    promotion_gate:
      - source_ref fixed
      - role_ref fixed
      - text_type fixed
      - writeback target fixed
    writeback_path:
      - 00_mother-law/source-checks/
      - 01_XLEN_StemCell_Vault
    blocker_or_gap:
      - file-level mapping incomplete
      - some nodes still source-only without chain role
    next_single_action:
      - continue source-check + role-binding on selected nuclei only
```

## 3. Promotion Order Recommendation
```yaml
promotion_order_recommendation:
  phase_1:
    - R-01-WEB-SHELL
    - R-06-UNCLASSIFIED-SOURCE-NODES
  phase_2:
    - R-03-GMAIL-BRIDGE
    - R-02-GAMMA-PORTAL
  phase_3:
    - R-04-VALUE-COMPUTE-RETURN
    - R-05-HIGH-RISK-INTERFACES

reason:
  - web shell and source node binding are lowest-risk and highest-yield
  - gmail bridge can follow after intake gate is written
  - Gamma should remain projection-derived until route map is stable
  - high-risk interfaces remain latest by default
```

## 4. Effective Status
```yaml
actual_result:
  - reserve candidates are now bound into a six-item registry
  - each item now has current_state, target_path, promotion_gate, and writeback_path
  - reserve is no longer treated as a generic holding bucket
  - next work can proceed item-by-item without reopening the whole system
```

## 5. Mismatch or Gap
```yaml
mismatch_or_gap:
  - registry exists, but per-item packet templates are not yet separated
  - actor_ref normalization remains unfinished
  - Gamma-to-web role map not yet written as dedicated correspondence table
  - Gmail bridge contamination gate not yet formalized
```

## 6. Next Single Action
```yaml
next_single_action:
  target: gmail_bridge_intake_gate_contract
  reason: reserve registry is now bound; the next low-risk, high-value item is to formalize safe intake / contamination control / exception routing for Gmail bridge candidates before any broader lift
```

## 7. Return to 00
return_to_00: true
