# Window Linking Logic 01-07

Department: Runtime Spine
Agent Block: Window Linking
Node ID: RSP-002
Window: W0
Platform Writer: ChatGPT
Version: v0.1
Status: active

## Core
Windows 01-07 do not self-evolve in isolation. They may enter advanced states only by linking to GitHub-backed deltas, mapped nodes, and allowed writeback targets.

## Linking Conditions
A window may link onto the main chain only if all required items exist:
- source_ref
- delta_id or repo_ref
- project_key
- node_key
- writeback_key
- allowed_target_path
- current_state

## State Ladder
- S0: dormant
- S1: observed
- S2: linked
- S3: mapped
- S4: writeback_ready
- S5: active_sync

## Upgrade Rules
- S0 -> S1 when a GitHub delta is detected but not yet mapped
- S1 -> S2 when tri-key is complete
- S2 -> S3 when target window and target path are assigned
- S3 -> S4 when writeback target is confirmed and not legacy-blocked
- S4 -> S5 when at least one successful writeback log exists

## Window Role Rule
- 01: may remain Not Established until explicit repo binding exists
- 02: task / collaboration / spec sync priority
- 03-07: link only when delta content maps to their role

## Rules
- no self-fabricated upgrade
- no upgrade without tri-key
- no writeback without allowed_target_path
- unresolved items return to window 00 hold state
