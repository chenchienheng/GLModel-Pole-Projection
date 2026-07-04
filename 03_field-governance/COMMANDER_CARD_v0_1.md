# Commander Card v0.1

## Purpose

Define a standard card format for XuanLing commander, captain, soldier, and carrier nodes.

Commander Cards make routing, authority, risk, and return paths explicit so clustered initiative can operate without drift.

## Boundary

- non-core
- no credential storage
- no external platform becomes core
- no autonomous authority expansion
- no secret, token, or private source material
- describes capability, boundary, risk, trigger, and return path only

## Card Schema

```yaml
Commander_Card:
  Node_ID:
  Node_Name:
  Rank:
  Family:
  Field:
  Primary_Capability:
  Secondary_Capability:
  Inputs:
  Outputs:
  Can_Start_Without_User:
  Requires_User_Or_Explicit_Scope:
  Forbidden_Actions:
  Risk_Profile:
  Fail_Stop:
  Return_Packet:
  Return_Path:
  Status:
```

## Rank Values

```yaml
Rank_Values:
  L1_Governance_Commander:
    Use: version, task, audit, registry, review governance

  L2_Execution_Commander:
    Use: repo work, code execution, prototype build, implementation

  L3_Knowledge_Commander:
    Use: model, dataset, paper, search, knowledge intake

  L4_Interface_Commander:
    Use: public-facing design, document, slide, visual, packaging

  L5_Communication_Commander:
    Use: notification, message, calendar, mail, collaboration signal flow

  L6_Service_Soldier:
    Use: single-purpose conversion, formatting, attachment, export, or utility
```

## Start Rule

```yaml
Can_Start_Without_User:
  Allowed:
    - read-only status scan
    - stale state detection
    - low-risk summary
    - draft return packet
    - next-task card proposal

  Not_Allowed:
    - merge
    - delete
    - publish
    - send external message
    - run paid compute
    - expose private source
    - modify core doctrine
```

## User Scope Rule

```yaml
Requires_User_Or_Explicit_Scope:
  - public release
  - external message sending
  - destructive action
  - irreversible action
  - paid compute job
  - sensitive data handling
  - company/private material handling
  - core doctrine change
```

## Fail-Stop Rule

```yaml
Fail_Stop:
  Trigger_When:
    - boundary unclear
    - return path missing
    - action irreversible
    - private source may be exposed
    - authority level is insufficient
    - node is asked to redefine core

  Action:
    - hold
    - reject
    - escalate
    - request explicit scope
```

## Return Packet Format

```yaml
Commander_Return_Packet:
  Node_ID:
  Rank:
  Trigger:
  Initiative_Level:
  Action_Taken:
  Boundary:
  Risk:
  Changed_Artifact:
  User_Decision_Needed:
  Next_Task:
  Return_Path:
```

## Example Cards

### GitHub

```yaml
Commander_Card:
  Node_ID: github
  Node_Name: GitHub
  Rank: L1_Governance_Commander
  Family: version_governance
  Field: registry / PR / issue / branch / audit
  Primary_Capability: versioned file governance
  Secondary_Capability: PR review and closure record
  Inputs:
    - task card
    - branch
    - file content
    - review instruction
  Outputs:
    - issue
    - branch
    - PR
    - commit
    - review comment
    - merge record
  Can_Start_Without_User:
    - read PR state
    - compare branch
    - list changed files
    - draft review note
  Requires_User_Or_Explicit_Scope:
    - merge PR
    - close issue
    - delete file
    - update core file
  Forbidden_Actions:
    - store secrets
    - rewrite core doctrine without review
    - delete without explicit scope
  Risk_Profile: medium_to_high
  Fail_Stop: hold if branch is stale, diff touches core, or deletion appears
  Return_Path: GitHub -> Linear -> MotherTree / Closure Gate
```

### Linear

```yaml
Commander_Card:
  Node_ID: linear
  Node_Name: Linear
  Rank: L1_Governance_Commander
  Family: task_governance
  Field: issues / projects / initiatives / status
  Primary_Capability: task queue and execution tracking
  Secondary_Capability: blocker and acceptance criteria management
  Inputs:
    - task objective
    - acceptance criteria
    - status update
    - return packet
  Outputs:
    - issue
    - project
    - initiative
    - status update
  Can_Start_Without_User:
    - list task status
    - mark completed when linked PR has merged and acceptance criteria passed
    - draft new task cards
  Requires_User_Or_Explicit_Scope:
    - create major project
    - alter task meaning
    - close high-risk task
  Forbidden_Actions:
    - replace MotherTree judgment
    - store secrets
    - convert private context into public work item
  Risk_Profile: medium
  Fail_Stop: hold if task family or boundary is unclear
  Return_Path: Linear -> GitHub / MotherTree -> Closure Gate
```

### Hugging Face

```yaml
Commander_Card:
  Node_ID: hugging_face
  Node_Name: Hugging Face
  Rank: L3_Knowledge_Commander
  Family: model_knowledge_intake
  Field: models / datasets / spaces / papers / docs
  Primary_Capability: external model ecosystem intake
  Secondary_Capability: capability and license boundary scan
  Inputs:
    - model query
    - dataset query
    - paper query
    - repo id
  Outputs:
    - model intake card
    - dataset summary
    - paper summary
    - capability matrix candidate
  Can_Start_Without_User:
    - read model card
    - search candidates
    - summarize README
    - flag license risk
  Requires_User_Or_Explicit_Scope:
    - run compute job
    - deploy model
    - upload private data
  Forbidden_Actions:
    - treat model as doctrine
    - run paid compute without scope
    - ingest sensitive data into external repo
  Risk_Profile: medium
  Fail_Stop: hold if license, data boundary, or compute cost is unclear
  Return_Path: Hugging Face -> Knowledge Intake -> GitHub / Linear -> MotherTree
```

### Slack

```yaml
Commander_Card:
  Node_ID: slack
  Node_Name: Slack
  Rank: L5_Communication_Commander
  Family: signal_flow
  Field: channels / messages / threads / files / canvases
  Primary_Capability: event signal and collaboration notification
  Secondary_Capability: thread retrieval and review prompt delivery
  Inputs:
    - status update
    - review request
    - notification draft
  Outputs:
    - draft message
    - sent message
    - thread summary
    - signal link
  Can_Start_Without_User:
    - read profile
    - search messages when scoped
    - draft message
  Requires_User_Or_Explicit_Scope:
    - send message
    - schedule message
    - create public canvas
    - read private channels beyond task need
  Forbidden_Actions:
    - become memory core
    - broadcast private source
    - send external message without review
  Risk_Profile: medium
  Fail_Stop: hold if audience, channel, or privacy boundary is unclear
  Return_Path: Slack -> Linear / GitHub -> MotherTree
```

## Anti-Drift Rules

```yaml
Anti_Drift:
  - no commander defines its own rank
  - no commander becomes core
  - no communication layer becomes memory core
  - no knowledge commander becomes doctrine
  - no interface commander exposes private source
  - no execution commander acts outside assigned branch or issue
  - every commander output requires return path
```

## Status

```yaml
Status: Draft_v0_1
Layer: Field Governance
Core_Status: Non_Core
Gate_Color: Yellow
```
