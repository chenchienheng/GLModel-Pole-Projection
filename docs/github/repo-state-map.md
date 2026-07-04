# Repo State Map｜GitHub Cleanup Candidate

Status: Candidate / GitHub Cleanup / No Runtime
Master Gate: #297

## Core

GitHub cleanup should first classify state. It should not rush toward merge. Issues, PRs, docs, schemas, return packets, and patch candidates should be mapped before action.

## State Values

- Keep: retain as active reference.
- Merge: may be merged only after explicit Vitas approval.
- Supersede: replaced by a newer trunk; keep as record.
- Park: valuable but not active lane.
- Red Gate: blocked; retain reason.
- Needs Vitas Decision: requires human decision.

## Current Anchors

- #297: Cloud Workbench Master Gate.
- #293: Dependency relation hub.
- #294: GitHub-only migration boundary.
- #292: Boundary node.
- #296: W1 preflight candidate support; not merge-ready until alignment issues are resolved.
- #290 / #291: PR queue hygiene and decomposition route.

## First Review Focus

- Keep #297 as master gate.
- Route relation mapping back to #293.
- Preserve #294 as cloud-first boundary.
- Treat #296 as candidate support until wording and evidence-level alignment are fixed.
- Do not merge or close PRs by cleanup enthusiasm.

## Return Format

```yaml
Repo_State_Return:
  Gate:
  Issues_Read:
  PRs_Read:
  Comments_Read:
  Inventory:
    - id:
      title:
      current_role:
      recommended_status:
      reason:
      risk:
      next_action:
  Needs_Vitas_Decision:
  Suggested_Next_Patch:
```
