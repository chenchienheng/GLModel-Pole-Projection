# Task Follow-Up

Department: Runtime Ops
Agent Block: Task Follow-Up
Node ID: RTO-001
Window: W0
Platform Writer: ChatGPT
Version: v0.1
Status: active

## Core
This file tracks current follow-up tasks required to move seed runtime from rule-heavy state to observable closed-loop state.

## Current Tasks
| Task ID | Task | Layer | Status | Dependency | Next Action |
|---|---|---|---|---|---|
| TSK-001 | Verify native board read path from source_map | Adapter Layer | ready | ADP-005 | fetch board_index and blockers through adapter route |
| TSK-002 | Observe scheduled external windows for first cycle output | External Windows | observing | BLK-001 | wait for first observable return window |
| TSK-003 | Define quiet Google family route | Integration | ready | BLK-003 | rebind contracts complete; next: activate report flow |
| TSK-004 | Prepare first visual mirror source for Gamma | Adapter Layer | ready | NBD-001 | use board index and blockers as entry payload |
| TSK-005 | Prepare first interaction relay source for Replit | Adapter Layer | ready | NBD-001, ADP-006 | use board index, blockers, follow-up as initial payload |

## Rules
- A task may move to active only if its dependency is readable.
- Completed tasks must leave a log reference.
- Do not open more than one new external activation task at a time.
