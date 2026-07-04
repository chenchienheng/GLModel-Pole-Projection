# Source Map

Department: Adapter Layer
Agent Block: Source Routing
Node ID: ADP-005
Window: W0
Platform Writer: ChatGPT
Version: v0.1
Status: active

## Core
Source map defines the fixed read path for the native board and all adapter layers.

## Canonical Objects
1. board_index
2. blockers
3. logs
4. task_follow_up

## Routing Rule
- GitHub is the primary source of truth
- Gamma reads mirror views only
- Replit reads interaction payloads only
- External tools do not replace GitHub paths

## Source Map
| Object | Primary Path | Mirror Layer | Interaction Layer | Writeback Required |
|---|---|---|---|---|
| board_index | 01_native_board/board_index.md | Gamma | Replit | yes |
| blockers | 01_native_board/blockers.md | Gamma | Replit | yes |
| logs | 00_meta/logs/ | Gamma summary only | Replit form | yes |
| task_follow_up | 02_runtime_ops/task_follow_up.md | Gamma optional | Replit | yes |

## Read Priority
1. primary path in GitHub
2. latest version tag
3. latest matching log reference

## Writeback Rule
Any external update must contain:
- source object name
- source path
- version
- log reference
- writer identity

## Failback
If path check fails or version check fails:
- stop external write
- return to read-only mode
- log the failure
