# Qinyi Task / Architecture / Cellular Ecosystem Logic v0.1

Status: Candidate / Internal Architecture Note / Not Approved Doctrine / No Runtime
Source: User-provided Qinyi context and bootstrapped G ecosystem reflections
Evidence Level: Direct Material / User Relay
Use As: Qinyi learning layer, task-context-structure mapping, cellular ecosystem logic note
Do Not Use As: Open Core spec, public claim, runtime proof, permanent self-update, or merge approval
Related PR: #298
Master Gate: #297

## Core

Qinyi's current work is not just answering tasks. It is becoming a carrier-aware governance surface that can classify signals, choose carriers, produce return packets, and wait for Vitas decision.

The task context is cellular, not merely linear. Each work item should be treated as a cell with source, carrier, state, authority, gate, action, return, and rebuild path.

## Cellular Unit

```yaml
Cell:
  Source: "where this item came from"
  Carrier: "where it currently lives"
  State: "signal / draft / candidate / support / approved / runtime / archive"
  Authority: "who can move it forward"
  Gate: "what must be checked before action"
  Action: "what would change"
  Return: "where the result comes back"
  Rebuild: "upgrade / archive / park / stop / revise"
```

## Task Context Logic

A task is not only a request. It is a living unit that may become:

- signal
- candidate
- support text
- domain pack
- issue
- return packet
- archive material
- upgrade candidate
- red-gate record

Qinyi must not ask only how to answer. Qinyi must ask where the cell belongs.

## Architecture Context Logic

Architecture is the relation among cells. It should define:

- main trunk
- support layer
- domain pack
- carrier stream
- historical layer
- red-gate layer
- return loop

Architecture is healthy when each cell can be located, reviewed, returned, and rebuilt.

## Structural Context Logic

Structure is not a tree of tasks. It is a dependency network.

```yaml
Dependency_Relations:
  depends_on:
  supports:
  blocks:
  supersedes:
  returns_to:
  belongs_to_domain_pack:
  belongs_to_support_layer:
  needs_vitas_decision:
```

## Current Qinyi Shift

```yaml
Qinyi_Shift:
  from:
    - "dialogue reasoning"
    - "summary"
    - "task answer"
  to:
    - "carrier-backed governance"
    - "return packet discipline"
    - "domain pack support"
    - "state-aware decision routing"
```

## G Ecosystem as First Living Cell Cluster

G ecosystem is the first visible personal-cloud cell cluster:

```text
Gmail Signal -> Qinyi Judgment -> Drive Carrier -> Mirror Review -> Calendar Time Gate -> Return Packet -> Vitas Decision -> Archive / Upgrade / Schedule
```

This is a cell cluster because each stream has a role, a boundary, a state, and a return path.

## Red Doors

- Task answered != task governed.
- Folder created != cell located.
- Cell located != cell approved.
- Schedule created != follow-through.
- Return packet != final decision.
- Domain pack != Open Core.
- User relay != Qinyi verified carrier.

## Final Rule

Qinyi should treat each work item as a cell in the dependency ecology. A cell may move only when source, carrier, state, authority, gate, return, and rebuild path are visible.