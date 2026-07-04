# RED DOORS｜Open XuanLing Core

Status: Candidate / Red Door Rules / Not Approved / No Runtime

## Core

Red Doors are stop conditions. If any red door is triggered, the item must not proceed to action until human review resolves it.

## Red Doors

```yaml
Red_Doors:
  authority_missing:
    rule: "no authority, no action"
  company_raw_data:
    rule: "do not move protected or company material into an unapproved carrier"
  private_origin_material:
    rule: "do not publish private origin material"
  runtime_claim:
    rule: "do not claim runtime without actual runtime evidence and approval"
  external_writeback:
    rule: "do not write to external systems without explicit approval"
  identity_pollution:
    rule: "do not confuse persona, model, agent, or assistant with a human identity"
  platform_dependency:
    rule: "do not make the core depend on a specific model, vendor, or platform"
  evidence_gap:
    rule: "do not promote unverified material into approved record"
```

## Required Output When Triggered

```yaml
Red_Gate_Return:
  triggered_red_door:
  reason:
  evidence:
  blocked_action:
  required_human_decision:
  safe_next_step:
```

## Not To Claim

Red Doors are governance stops. They do not prove safety; they force review.