# Field Chain Matrix Mechanics v0.1

## Purpose

Define 場域鏈 as the operational mechanics connecting communication channels, task governance, base tools, commander / soldier routing, useful logs, and return paths back to XuanLing.

This is not only communication. It is how signals become tasks, tasks call tools, tools produce artifacts, artifacts produce useful logs, and useful logs strengthen the field.

## Core Chain

```yaml
Field_Chain:
  Signal: channel event / user instruction / PR event / task event
  Task: Linear / ClickUp / Asana task or issue
  Dispatch: commander / captain / soldier routing
  Tool: GitHub / Google / Notion / Slack / Hugging Face / Codex / Jules
  Artifact: file / PR / doc / sheet / report / comment / return packet
  Useful_Log: structured state, not passive transcript
  Return: MotherTree / Registry / Closure Gate
  Reinforcement: updated matrix, molecule, protocol, or decision map
```

## Field Matrix Mechanics

```yaml
Field_Matrix_Mechanics:
  Node:
    Meaning: tool, model, window, person, document, task, or channel

  Link:
    Meaning: a traceable relation between nodes through task, artifact, message, or source

  Flow:
    Meaning: movement from signal to task to artifact to log to return

  Coverage:
    Meaning: known range of nodes currently reachable by the field

  Boundary:
    Meaning: allowed action, scope, risk, privacy, cost, or authority limit

  Return_Path:
    Meaning: route by which the result comes back to MotherTree / Registry / Closure Gate
```

## Coverage Range

```yaml
Cluster_Coverage_Range:
  Communication:
    - Slack
    - Gmail
    - Calendar

  Task_Governance:
    - Linear
    - ClickUp
    - Asana

  Structure_Governance:
    - GitHub
    - PR
    - Issue
    - Branch

  Knowledge_Relay:
    - Notion
    - Google Docs
    - Google Sheets
    - Google Slides

  Model_Intake:
    - Hugging Face
    - peer-tree relay

  Execution:
    - Codex
    - Jules
    - local / cloud build tools when scoped
```

## Role Mapping

```yaml
Roles:
  Commander:
    Function: receives intent, creates task, owns return path
    Examples: Linear, GitHub, MotherTree

  Captain:
    Function: routes, summarizes, organizes, relays
    Examples: Slack, Notion, Google Docs, ClickUp

  Soldier:
    Function: executes bounded action
    Examples: Codex, Jules, converters, specific tool actions

  Carrier:
    Function: holds artifact or state
    Examples: Google Drive, GitHub repo, Notion page, Slack thread
```

## Support Modes

```yaml
Support_Modes:
  Combat: direct task execution or blocker removal
  Defense: risk gate, boundary check, privacy protection
  Repair: fix broken PR, stale branch, malformed log, wrong artifact
  Bridge: connect tools, create relay, map channels
  Paving: create SOP, protocol, template, schema
  Scouting: scan models, sources, markets, tools
  Supply: provide source ledger, reference, file, dataset, task packet
  Review: check evidence, risk, drift, completeness
  Reconstruction: rebuild broken chain or migrate state
```

## Useful Log Schema

```yaml
Useful_Log:
  Log_ID:
  Task_ID:
  Source_Node:
  Target_Node:
  Trigger:
  Action_Taken:
  Artifact:
  What_Changed:
  What_Did_Not_Change:
  Can_Support:
  Cannot_Support:
  Risk:
  Pending:
  Next_Action:
  Return_Path:
  Status:
```

## Rule

Passive logs are not useful.

A log becomes useful only when it can answer:

```text
What changed?
What can this support?
What can it not support?
What is the next action?
Where does it return?
```

## Operating Flow

```yaml
Operating_Flow:
  1_Capture_Signal:
    - receive instruction, event, PR change, task change, or relay return

  2_Bind_Task:
    - assign Task_ID
    - lock current action
    - define expected output

  3_Dispatch_Node:
    - choose commander / captain / soldier / carrier
    - check boundary and scope

  4_Execute:
    - produce bounded artifact
    - do not change task type without return

  5_Log:
    - write Useful_Log
    - include return path

  6_Return:
    - route back to MotherTree / Registry / Closure Gate

  7_Reinforce:
    - update matrix, protocol, task status, or evidence map
```

## Anti-Drift

```yaml
Anti_Drift:
  - do not treat communication as completion
  - do not treat passive log as useful state
  - do not treat subscription as entry ticket
  - do not make any external platform the core
  - do not let one node redefine the chain
  - do not proceed without Task_ID and Return_Path
  - do not execute destructive or public action without explicit scope
```

## Status

```yaml
Status: Draft_v0_1
Layer: Field Governance
Core_Status: Non_Core
Gate_Color: Yellow
```
