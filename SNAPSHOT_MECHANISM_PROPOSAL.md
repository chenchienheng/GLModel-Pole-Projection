# Snapshot Mechanism Proposal

> Analysis only — Do not implement yet.
> Purpose: Define a minimal verifiable snapshot structure for the chain system.

## 1. Minimal Snapshot Structure
Every snapshot should contain:
- **Timestamp**: ISO-8601 primary index.
- **Active State**: Current active branches and PRs.
- **Changed Field**: Verified files changed since the last snapshot.
- **Risk Field**: Unresolved structural risks or gaps.
- **Next Pulse**: Single recommended next task candidate.

## 2. Verification Rule
A snapshot is valid only when it reconciles with the current `main` bone and tracking registers.
