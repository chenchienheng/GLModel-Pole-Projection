# GATE REVIEW｜Open XuanLing Core

Status: Candidate / Gate Review / Not Approved / No Runtime

## Core

Gate Review determines whether a task, proposal, source, tool request, or workflow may proceed.

## Decisions

```yaml
Gate_Decision_Values:
  Go: "may proceed as scoped"
  Conditional_Go: "may proceed only if listed conditions are met"
  Park: "valuable but inactive"
  Stop: "must not proceed"
  Needs_Human_Approval: "requires human decision"
```

## Review Template

```yaml
Gate_Review:
  item_id:
  source_card:
  proposal:
  carrier:
  authority:
  requested_action:
  evidence:
  risks:
  red_doors:
  decision:
  conditions:
  return_packet_required: true
  reviewer:
  reviewed_at:
```

## Review Checks

- Is the source clear?
- Is the carrier allowed?
- Who has authority?
- What action is requested?
- What evidence supports the request?
- Are any Red Doors triggered?
- Where must the result return?

## Not To Claim

Gate Review is not action. It only decides whether action may proceed under defined conditions.