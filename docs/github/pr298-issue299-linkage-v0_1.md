# PR298 / Issue299 Linkage v0.1

Status: Candidate / Linkage Map / No Runtime

## Core

PR298 and Issue299 are complementary carriers.

## Roles

```yaml
PR298:
  role: "current repo document cleanup and construction site"
  status: "Umbrella Draft / Cleanup Started / Do Not Merge Yet"
  handles:
    - "Open Core first build set"
    - "settings governance"
    - "signals"
    - "domain packs"
    - "templates"
    - "review matrix"

Issue299:
  role: "historical issue-chain intake anchor"
  status: "read-only issue dependency mapping"
  handles:
    - "historical issues"
    - "dependency net"
    - "keep / supersede / park / red-gate classification"
    - "return path back to mainline"
```

## Separation Rule

- PR298 changes files.
- Issue299 maps issue history.
- PR298 should not become the issue archive.
- Issue299 should not become a patch queue.

## Flow

```text
Historical issues -> Issue299 -> issue matrix -> decision queue -> selected future work
```

```text
Current PR review -> PR298 -> review matrix -> patch sets -> return packet -> decision
```

## Red Doors

- PR cleanup is not issue history cleanup.
- Issue inventory is not file patch.
- Read-only issue map is not close or merge authority.
- Umbrella draft is not merge-ready.
- Historical trace is not active lane.
