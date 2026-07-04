# Window Binding Registry 01-07

Department: Board Orchestration
Agent Block: Window Binding Registry
Node ID: BOR-002
Window: 00
Platform Writer: ChatGPT
Version: v0.1
Status: active

## Core
This registry declares how windows 01-07 bind to GitHub-driven deltas, which target paths they may write to, and which states they may enter.

## Registry
| Window | Role | Bind Trigger | Allowed State Max | Allowed Target Path | Legacy Path Allowed | Notes |
|---|---|---|---|---|---|---|
| 01 | not_established_or_specialized | explicit repo binding only | S3 | to be assigned | no | do not force activation |
| 02 | task_collab_spec_sync | task / spec / issue / process delta | S5 | 02_runtime_ops/ , 03_board_orchestration/ | no | primary operational sync window |
| 03 | role_mapped_only | mapped delta only | S4 | to be assigned | no | write only after target path exists |
| 04 | role_mapped_only | mapped delta only | S4 | to be assigned | no | write only after target path exists |
| 05 | role_mapped_only | mapped delta only | S4 | to be assigned | no | write only after target path exists |
| 06 | role_mapped_only | mapped delta only | S4 | to be assigned | no | write only after target path exists |
| 07 | role_mapped_only | mapped delta only | S4 | to be assigned | no | write only after target path exists |

## Rules
- Every active binding must preserve source_ref and tri-key.
- Any missing target path keeps the window below S4.
- Legacy path writeback is blocked unless relay mode is explicitly declared.
