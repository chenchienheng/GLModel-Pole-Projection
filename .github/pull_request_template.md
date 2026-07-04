# Open XuanLing PR Gate

Status: Candidate PR Template / Not Approval / No Runtime

## 1. Gate Level

- [ ] `gate:green` — docs / schema / examples / templates only; no workflow, secrets, deploy, billing, protected-branch, or external writeback risk
- [ ] `gate:yellow` — code / config / dependency / domain-pack change; requires reviewer and Return Packet
- [ ] `gate:red` — secrets, billing, deploy, workflows/actions, permissions, branch rules, cloud resources, identity/persona core, company data, runtime, or external writeback

## 2. Scope

- [ ] `scope:docs`
- [ ] `scope:schema`
- [ ] `scope:examples`
- [ ] `scope:templates`
- [ ] `scope:domain-pack`
- [ ] `scope:code`
- [ ] `scope:workflow`
- [ ] `scope:security`
- [ ] `scope:runtime`

## 3. Open XuanLing Chain

```yaml
Source:
Carrier:
Authority:
Gate:
Requested_Action:
Return_Path:
Rebuild_or_Rollback:
```

## 4. State Claim

- [ ] Draft
- [ ] Candidate
- [ ] Review_Support
- [ ] Conditional_Pass
- [ ] Approved
- [ ] BuildReady
- [ ] Runtime
- [ ] Park
- [ ] Supersede
- [ ] Red_Gate
- [ ] Needs_Human_Approval

## 5. Safety Check

- [ ] Does not touch secrets or environment variables
- [ ] Does not modify GitHub Actions / workflows
- [ ] Does not trigger deployment or paid runtime
- [ ] Does not change branch rules, app permissions, or billing settings
- [ ] Does not use company raw data
- [ ] Does not expose private origin material
- [ ] Does not imply public launch
- [ ] Does not claim runtime
- [ ] If any above is false, mark as `gate:red`

## 6. Return Packet

```yaml
Return_Packet:
  Item_ID:
  Gate_Decision:
  What_Changed:
  What_Did_Not_Change:
  Evidence:
  Risk:
  Pending:
  Next_Action:
  Return_Path:
```

## 7. Rollback / Rebuild Path

```text
Rollback_or_Rebuild:
```

## 8. Human Approval

- [ ] No human approval needed before draft creation
- [ ] Reviewer approval required before merge
- [ ] Explicit Vitas approval required before merge / release / runtime / external writeback

## 9. Not To Claim

- [ ] This PR does not claim Approved doctrine
- [ ] This PR does not claim runtime
- [ ] This PR does not claim external writeback
- [ ] This PR does not claim company policy
- [ ] This PR does not claim public launch
