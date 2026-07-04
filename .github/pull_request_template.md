# MotherTree PR Gate

## 1. Gate Level

- [ ] `gate:green` — docs / analysis / candidate only; no workflow, secrets, deploy, billing, or protected-branch risk
- [ ] `gate:yellow` — code / schema / config / dependency change; requires reviewer and MotherTree return packet
- [ ] `gate:red` — secrets, billing, deploy, workflows/actions, permissions, branch rules, cloud resources, Qinyi or MotherTree core

## 2. Scope

- [ ] `scope:docs`
- [ ] `scope:code`
- [ ] `scope:workflow`
- [ ] `scope:security`
- [ ] `scope:billing`
- [ ] `scope:qinyi`
- [ ] `scope:mothertree`

## 3. Safety Check

- [ ] Does not touch secrets or environment variables
- [ ] Does not modify GitHub Actions / workflows
- [ ] Does not trigger deployment or paid runtime
- [ ] Does not change branch rules, app permissions, or billing settings
- [ ] If any above is false, mark as `gate:red`

## 4. MotherTree Return Packet

```yaml
Window:
Task_ID:
What_Changed:
What_Did_Not_Change:
Risk:
Pending:
Next_Action:
Return_Path:
```

## 5. Rollback Path

Describe how to revert this change:

```text
Rollback:
```

## 6. Human Approval

- [ ] No human approval needed before draft creation
- [ ] Reviewer approval required before merge
- [ ] Explicit user/admin approval required before execution
