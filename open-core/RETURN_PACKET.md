# RETURN PACKET｜Open XuanLing Core

Status: Candidate / Return Packet / Not Approved / No Runtime

## Core

A Return Packet records what happened, what changed, what did not change, what evidence remains, and what decision is still needed.

## Template

```yaml
Return_Packet:
  item_id:
  gate_decision:
  action_taken:
  carrier:
  files_or_surfaces_read:
  files_or_surfaces_changed:
  what_changed:
  what_did_not_change:
  evidence:
  risks:
  rollback_or_rebuild_path:
  needs_human_decision:
  next_action:
  returned_to:
  returned_at:
```

## Required Claims

- State what changed.
- State what did not change.
- State what remains unverified.
- State whether human decision is needed.
- State where the item returns.

## Not To Claim

A Return Packet is not closeout, approval, merge, release, or runtime proof. It is a structured return for review.