# Window Delta Mapping Template

Department: Board Orchestration
Agent Block: Delta Mapping
Node ID: BOR-001
Window: W0
Platform Writer: ChatGPT
Version: v0.1
Status: active

## Core
Each GitHub delta must be compressed into tri-key and then mapped to one or more windows.

## Template
| Delta ID | Source Type | Source Ref | Project Key | Node Key | Writeback Key | Target Window | Action Type | Writeback Target | Status |
|---|---|---|---|---|---|---|---|---|---|
| DEL-0001 | commit / issue / pr / spec | repo ref | `PK-<id>` | `NK-<id>` | `WBK-<id>` | 00-07 | update / relay / hold | path or window | open |

*Note: `<id>` denotes a template placeholder meant to be replaced with the actual identifier.*

## Mapping Rules
- 00: master map / project routing / rollup
- 01: not established unless current GitHub delta explicitly binds to it
- 02: task / collaboration / spec sync
- 03-07: update only when delta content maps to their role

## Failure Marks
- Not Established
- Tri-Key Missing
- Writeback Missing
- No Action Required

## Rules
- do not map by guess
- do not force all windows to update
- preserve source ref for every mapped delta
- route unresolved deltas to window 00 for hold
