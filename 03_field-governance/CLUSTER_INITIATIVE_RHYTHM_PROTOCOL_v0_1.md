# Cluster Initiative Rhythm Protocol v0.1

## Purpose

Define a safe rhythm for clustered commander initiative.

The goal is not autonomous wandering. The goal is coordinated reporting, bounded activation, and return-path discipline.

## Boundary

- non-core
- no unrestricted autonomy
- no deletion authority
- no secret handling
- no cross-platform mutation without explicit scope
- no replacement of MotherTree / CoreTri / user sovereignty

## Core Idea

A cluster becomes powerful when commanders report, prepare, and activate in rhythm.

```text
Report -> Prepare -> Activate -> Return -> Calibrate
```

This creates rotational motion across the topology sphere without letting any node drift from the invariant core.

## Motion Analogy

```yaml
Topology_Sphere_Motion:
  Rotation:
    Meaning: local task execution and daily node movement
    Example: PR check, issue update, model intake, document packaging

  Revolution:
    Meaning: long-cycle return to MotherTree / CoreTri
    Example: weekly convergence, closure gate, architecture review

  Axis:
    Meaning: invariant core
    Rule: no node may redefine the axis
```

## Initiative Levels

```yaml
Initiative_Levels:
  L0_Observe:
    Action: read status, detect change, no mutation
    Requires_User: false

  L1_Report:
    Action: summarize status, flag risk, produce return packet
    Requires_User: false

  L2_Prepare:
    Action: draft task card, draft PR comment, draft file content
    Requires_User: conditional

  L3_Bounded_Activate:
    Action: create low-risk issue, branch, single non-core file, or review comment
    Requires_User: prior declared scope

  L4_Escalate:
    Action: ask for decision before high-risk action
    Requires_User: true

  L5_Fail_Stop:
    Action: stop, hold, or reject action
    Requires_User: true if continuation is needed
```

## Commander Rhythm

```yaml
Commander_Rhythm:
  GitHub:
    Report: open PRs, mergeability, diff risk, stale branches
    Prepare: review notes, cleanup recommendation, safe PR body
    Activate: create branch, create non-core file, open PR, comment, merge only under explicit scope

  Linear:
    Report: open issues, blockers, stale tasks, initiative status
    Prepare: task queue, acceptance criteria, owner/ETA proposal
    Activate: create/update issue only under declared task scope

  Hugging_Face:
    Report: model/dataset/paper candidates, license risk, capability fit
    Prepare: model intake card, capability matrix, comparison note
    Activate: no deployment by default; jobs only under explicit scope

  Codex_Jules:
    Report: execution result, diff, errors, blocked state
    Prepare: patch plan, test plan, cleanup plan
    Activate: repo work only inside assigned branch / issue

  Interface_Tools:
    Report: output readiness, public/private boundary risk
    Prepare: copy, deck, image, PDF, AEO format
    Activate: publish/export only under explicit scope

  Communication_Tools:
    Report: notification needs and review requests
    Prepare: message draft, status update, meeting note
    Activate: send only under explicit scope
```

## Trigger Rules

```yaml
Can_Start_Without_User:
  - read-only status scan
  - stale PR detection
  - low-risk summary
  - next-task card generation
  - return packet drafting

Can_Prepare_Without_User:
  - non-public draft
  - issue body draft
  - PR review checklist
  - model intake summary

Requires_User_Or_Explicit_Scope:
  - merge PR
  - close issue
  - delete file
  - publish public content
  - send external message
  - run paid compute job
  - touch sensitive/company/private data
  - change core doctrine
```

## Return Packet

Every activated commander must return:

```yaml
Cluster_Return_Packet:
  Commander:
  Initiative_Level:
  Trigger:
  Action_Taken:
  Boundary:
  Risk:
  Changed_Artifact:
  User_Decision_Needed:
  Next_Task:
  Return_Path:
```

## Anti-Drift Rules

```yaml
Anti_Drift:
  - no node acts as core
  - no commander redefines system purpose
  - no tool decides its own authority
  - no output becomes formal without return path
  - no model hub becomes doctrine
  - no interface layer exposes private source
```

## Status

```yaml
Status: Draft_v0_1
Layer: Field Governance
Core_Status: Non_Core
Gate_Color: Yellow
```
