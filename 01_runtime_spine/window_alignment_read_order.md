# Window Alignment Read Order

Department: Runtime Spine
Agent Block: Alignment Read Order
Node ID: RSP-004
Window: 00->01-07
Platform Writer: ChatGPT
Version: v0.1
Status: active

## Core
Before interpreting new GitHub deltas, windows 01-07 should first read the stable user alignment anchors, then runtime routing rules, then current delta mappings.

## Read Order
1. 00_meta/user_identity_anchor.md
2. 01_runtime_spine/github_delta_driven_pulse_rule.md
3. 01_runtime_spine/window_linking_logic_01_07.md
4. 03_board_orchestration/window_binding_registry_01_07.md
5. 03_board_orchestration/window_delta_mapping_template.md
6. 01_native_board/pulse_rollup.md
7. current GitHub delta items

## Purpose
- reduce drift across windows
- avoid self-fabricated state
- align identity before routing
- align routing before writeback

## Rules
- do not start from legacy folders
- do not start from window-local assumptions
- do not overwrite stable identity anchors with runtime deltas
- unresolved conflicts return to window 00 hold state
