# Writeback Packet Contract

Department: Adapter Layer
Agent Block: Packet Contract
Node ID: ADP-006
Window: W0
Platform Writer: ChatGPT
Version: v0.1
Status: active

## Core
Every external writeback must use one packet shape.

## Required Fields
- department
- agent_block
- node_id
- window
- platform_writer
- source_object
- source_path
- target_path
- version
- log_ref
- timestamp
- action
- payload

## Action Types
- create
- update
- append_log
- sync_status

## Minimal Packet Example
```yaml
department: Adapter Layer
agent_block: Replit Relay
node_id: ADP-006
window: W0
platform_writer: ChatGPT
source_object: task_follow_up
source_path: 02_runtime-ops/task_follow_up.md
target_path: 02_runtime-ops/task_follow_up.md
version: v0.1
log_ref: LOG-0001
timestamp: 2026-04-09T00:00:00+08:00
action: update
payload:
  title: follow-up item
  status: open
  owner: runtime
```

## Validation Rule
Reject packet if any required field is missing.

## Return Rule
Successful writeback must append one log entry after write completes.
