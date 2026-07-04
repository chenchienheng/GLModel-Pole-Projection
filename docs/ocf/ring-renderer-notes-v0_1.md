# Ring Renderer Notes v0.1

Status: Candidate / UI Notes / No Runtime

## Core

Ring rendering means showing the right state and action to the right role. It is not permission enforcement by itself.

## Rings

```yaml
Rings:
  Owner:
    sees:
      - "all candidate states"
      - "decision points"
      - "return notes"
    may_decide:
      - "approve"
      - "reject"
      - "return for rebuild"
  Operator:
    sees:
      - "daily work cards"
      - "gate status"
      - "draft outputs"
    may_do:
      - "record"
      - "request review"
      - "return issue"
  Maintainer:
    sees:
      - "abstract problem return"
      - "UI or rule change request"
    may_do:
      - "propose patch"
      - "repair pattern"
```

## UI Rule

Each card should show:

- current cell
- state
- blocked reason
- allowed action
- human check needed
- return hook

## Red Doors

- Visible does not mean editable.
- Editable does not mean final authority.
- UI card is not runtime proof.
