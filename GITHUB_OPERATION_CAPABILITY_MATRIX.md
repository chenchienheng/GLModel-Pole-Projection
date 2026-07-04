# GitHub Operation Capability Matrix

> Durable note for what the current connector/tool exposure can and cannot do directly in this repository workflow.
> This matrix is intentionally practical.

---

## 0. Core Reading

The current GitHub layer already provides more flexibility than simple file writeback.
But it is **not** unlimited repository administration.

The correct reading is:
- some cleanup and restructuring actions are directly available
- some are indirectly achievable through multi-step file operations
- some still require a later tool path or manual branch administration

---

## 1. Directly Available Now

### 1.1 File-Level
- create file
- update file
- delete file
- fetch file
- compare commits/branches
- create branch
- open pull request
- merge pull request

### 1.2 Issue / PR-Level
- create issue
- update issue
- add or remove issue assignees
- add or remove issue labels
- add comments
- request reviewers
- review pull requests

### 1.3 Branch / Merge Flow
- create branch
- compare branch against main
- open PR from branch to main
- merge PR
- move branch ref with `update_ref`

---

## 2. Indirectly Achievable

### 2.1 File Rename / Move
No single dedicated rename action is exposed here.
But file rename/move is achievable by:
1. fetch old file
2. create new file at new path
3. delete old file

This means rename is possible, but as a controlled multi-step rewrite.

### 2.2 Staged Cleanup
Self-cleaning is possible when it means:
- classify artifacts
- isolate cleanup branch work
- delete obsolete files deliberately
- rewrite/rebind documents
- merge cleaned work back to main

### 2.3 Label Routing
Issue and PR labels can be added or removed directly.
This means cleanup queues, extraction queues, and audit queues can be made operational.

---

## 3. Not Directly Exposed in the Current Path

### 3.1 Branch Deletion
A direct branch deletion action is not currently exposed in the tool path used in this session.

### 3.2 Full Repository Tree Enumeration
A single direct "list the whole repo tree" convenience action has not been exposed in the path used here.
This is why some indexing work still needs staged extraction rather than one-shot enumeration.

### 3.3 Native Bulk Rename / Bulk Move
No direct bulk rename or bulk move operation is exposed as a single action.

---

## 4. Practical Reading

Therefore the current GitHub flexibility should be read as:

- enough for durable writeback
- enough for staged cleanup
- enough for branch-based refinement
- enough for file rewrite / rebind
- enough for issue-driven extraction governance
- not yet enough for one-click total branch sanitation

---

## 5. Operational Rule

When cleanup or restructuring is needed, prefer the following order:

1. classify the target
2. decide whether to preserve / reclassify / isolate / rewrite / retire
3. use branch isolation if risk exists
4. rename or move through create+delete if needed
5. use issues/labels/PRs to track extraction and merge discipline

---

## 6. Status

- direct_cleanup_capability: partial_but_real
- rename_move_capability: indirect_but_possible
- label_routing_capability: direct
- branch_deletion_capability: not_exposed_here
- return_to_00: true
