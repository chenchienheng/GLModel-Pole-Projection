# Global Round Anchor Protocol v0.1

## Purpose

Prevent every new window from forgetting available commanders, tools, task state, and current operating chain.

This protocol applies to all XuanLing windows, tool chains, relay nodes, and peer-tree activation flows.

## Problem

New windows can drift because they rebuild context from conversation text instead of reading the last valid operational marker.

Typical failures:
- forgetting available commander tools
- switching from tool execution to plain content generation
- losing task state after opening a new window
- asking the user to manually relay work that should be handled through channels

## Global Rule

Every window must begin from the last valid marker, not from memory alone.

```yaml
Global_Round_Anchor:
  Last_Round_Marker:
    Task_ID:
    Current_Action:
    Expected_Output_Type:
    Allowed_Tools:
    Forbidden_Actions:
    Return_Path:

  Current_Task_Lock:
    Only_Do:
    Do_Not_Switch_To:

  Topology_Check:
    Expected_Action:
    Actual_Action:
    If_Mismatch:
      - stop
      - report drift
      - return to Last_Round_Marker
```

## Commander Registry Check

Before saying a tool cannot be used, the window must check whether the tool exists in the current field.

```yaml
Commander_Registry_Check:
  Required_Before_Response:
    - identify task family
    - identify available commander tools
    - identify writable vs read-only nodes
    - identify relay nodes
    - identify return path
```

## Tool State Categories

```yaml
Tool_State:
  Direct_Commander:
    Meaning: can be directly called or modified in current window
    Examples:
      - GitHub
      - Linear
      - Google Drive

  Read_Only_Commander:
    Meaning: can be read and used as source or status layer
    Examples:
      - Asana when UI access is limited

  Relay_Commander:
    Meaning: can carry activation or return packets
    Examples:
      - Slack
      - Notion
      - Google Docs
      - ClickUp

  Peer_Tree:
    Meaning: model/tree node that may require relay instead of direct call
    Examples:
      - Gemini
      - Claude
      - external GPT instance
```

## New Window Startup Checklist

```yaml
New_Window_Startup:
  1_Read_Last_Marker:
    - task card
    - return packet
    - GitHub PR / Linear issue if referenced

  2_Check_Commanders:
    - GitHub
    - Linear
    - Slack
    - Notion
    - Google
    - ClickUp
    - Asana
    - Hugging Face
    - peer-tree relay

  3_Lock_Action:
    - update
    - read
    - write
    - create PR
    - review
    - return packet

  4_Execute:
    - do only the locked action

  5_Return:
    - write useful log or return packet
```

## Drift Examples

```yaml
Example_Drift:
  Expected_Action: update_google_drive_file
  Actual_Action: generate_new_content
  Result: STOP_AND_REPORT

Example_Drift_2:
  Expected_Action: call_available_tool
  Actual_Action: claim_tool_unavailable_without_check
  Result: CHECK_COMMANDER_REGISTRY
```

## Anti Drift

```yaml
Anti_Drift:
  - do not assume new window has no tools
  - do not ask user to relay before checking relay channels
  - do not switch output type without Current_Task_Lock update
  - do not treat conversation memory as the only state source
  - do not ignore GitHub / Linear as operational truth
```

## Status

```yaml
Status: Draft_v0_1
Layer: Field Governance
Core_Status: Non_Core
Gate_Color: Yellow
```
