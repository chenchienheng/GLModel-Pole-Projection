# GitHub Delta Driven Pulse Rule

Department: Runtime Spine
Agent Block: Pulse Routing
Node ID: RSP-001
Window: W0
Platform Writer: ChatGPT
Version: v0.1
Status: active

## Core
GitHub is the primary live update backbone. Windows 00-07 do not wait for self-generated states; they react only to GitHub deltas that have been extracted into routing keys.

## Source of Truth
- commits
- issues
- pull requests
- spec files
- architecture files
- process files
- README changes

## Pulse Logic
1. scan GitHub delta
2. extract tri-key
3. map delta to target windows
4. assign writeback target
5. return rollup to window 00

## Tri-Key
- Project Key
- Node Key
- Writeback Key

## Window Behavior
- A window updates only when GitHub delta maps to it.
- A window with no mapped delta stays unchanged.
- No window should fabricate state when no GitHub trigger exists.

## Rollup Output
- valid delta items
- mapped windows
- windows with no action
- writeback-required items

## Rules
- GitHub delta is scanned before any window pulse review.
- Window self-reporting is secondary, not primary.
- Missing tri-key means routing incomplete.
- Missing writeback target means writeback pending.
