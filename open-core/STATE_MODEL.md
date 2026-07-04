# STATE MODEL｜Open XuanLing Core

Status: Candidate / State Model / Not Approved / No Runtime

## Core

Every item must have a state. State prevents review, approval, runtime, and closeout from being confused.

## State Values

```yaml
State_Model:
  Draft:
    meaning: "rough material, not ready for gate review"
  Candidate:
    meaning: "ready for review, not approved"
  Review_Support:
    meaning: "supports review but is not a decision"
  Conditional_Pass:
    meaning: "can move forward only if listed conditions are met"
  Approved:
    meaning: "human-approved within explicit scope"
  BuildReady:
    meaning: "ready to build, not running"
  Runtime:
    meaning: "running or externally active"
  Park:
    meaning: "valuable but inactive"
  Supersede:
    meaning: "replaced by a newer trunk"
  Red_Gate:
    meaning: "blocked by safety, authority, evidence, or scope risk"
  Needs_Human_Approval:
    meaning: "cannot advance without human decision"
```

## State Rules

- Draft is not Candidate.
- Candidate is not Approved.
- Review is not Human Approval.
- BuildReady is not Runtime.
- Return Packet is not Closeout.
- Capability is not Permission.

## Not To Claim

Do not use a higher state word unless the required gate has been passed by the required authority.