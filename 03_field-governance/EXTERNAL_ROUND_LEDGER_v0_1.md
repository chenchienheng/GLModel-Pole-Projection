# External Round Ledger v0.1

## Purpose

External Round Ledger is a lightweight memory anchor for cross-window continuity.

It records each working round as a small external note so a new window can align with the current chain before acting.

## Boundary

This file is not core doctrine.
It does not store secrets, credentials, private identity lists, or sensitive source material.
It does not replace MotherTree, CoreTri, or Closure Gate.

## Problem

Long conversations and model updates can cause context drift.

A window may remember the current topic but miss the chain state, last decision, or next action.

The ledger solves this by making each round return a compact state record.

## Round Record

```yaml
Round_Record:
  Round_ID:
  Window:
  Date:
  Current_Node:
  Decision:
  Changed_Artifacts:
  Open_Risks:
  Next_Task:
  Return_Path:
```

## Continuation Rule

A new window should not start by expanding ideas.
It should first align with the latest round record.

```text
Read latest round record -> identify current node -> continue only the next task.
```

## Time Rule

Time order constrains spatial expansion.

New outputs must preserve:

- last decision;
- current artifact state;
- open risk;
- next task;
- return path.

## Storage Surfaces

Allowed surfaces:

- GitHub issue or PR comment
- GitHub markdown file
- cloud document summary
- task card system

Forbidden content:

- passwords
- tokens
- private human lists
- company-sensitive payloads
- unreviewed private calibration text

## Return Packet

```yaml
Round_Return_Packet:
  Round_ID:
  What_Changed:
  What_Did_Not_Change:
  Decision:
  Needs_User_Decision: true | false
  Next_Round_Start_Prompt:
  Return_Path:
```

## Status

```yaml
Status: Draft_v0_1
Layer: Field Governance
Core_Status: Non_Core
Gate_Color: Yellow
```
