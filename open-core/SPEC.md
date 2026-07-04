# SPEC｜Open XuanLing Core

Status: Candidate / Specification / Not Approved / No Runtime

## Purpose

Open XuanLing Core defines a semantic governance chain for tasks, tools, proposals, and AI-assisted actions.

The chain is:

```text
Source → Carrier → Authority → Gate → Action → Return → Rebuild
```

## Core Concepts

### Source

Where the task, proposal, material, or signal comes from.

### Carrier

Where the material currently lives: chat, document, repository, email, calendar, drive, issue, PR, or other surface.

### Authority

Who is allowed to decide the next state.

### Gate

The review point that decides Go, Conditional Go, Park, Stop, or Needs Human Approval.

### Action

The proposed or allowed change in the world.

### Return

Where the result must come back for review.

### Rebuild

How to revise, rollback, archive, supersede, or re-run the chain.

## Minimum Unit

The minimum usable unit is Gate Decision, not runtime.

```yaml
Gate_Decision:
  decision: "Go | Conditional_Go | Park | Stop | Needs_Human_Approval"
  reason: []
  required_conditions: []
  return_packet_required: true
```

## Not To Claim

- This spec is not Approved doctrine.
- This spec is not software runtime.
- This spec does not connect to external systems.
- This spec does not authorize action without human approval.