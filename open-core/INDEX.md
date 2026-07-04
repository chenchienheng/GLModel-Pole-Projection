# Open XuanLing Core｜First Build Set Index

Status: Candidate / Index / Not Approved / No Runtime
Related: docs/open-core/pre-construction-integration-report-v0_9.md

## Core

This index shows the current First Build Set and how each file should be reviewed.

## Read Order

1. README.md
2. SPEC.md
3. STATE_MODEL.md
4. RED_DOORS.md
5. SEMANTIC_FIREWALL.md
6. SOURCE_CARD.md
7. GATE_REVIEW.md
8. RETURN_PACKET.md
9. schemas/source_card.schema.json
10. schemas/gate_decision.schema.json
11. schemas/return_packet.schema.json
12. examples/ai_tool_request.yaml
13. examples/company_workflow_candidate.yaml

## File Roles

```yaml
First_Build_Set_Index:
  README.md:
    role: "external first screen"
    review_focus: "can a new reader understand this in three minutes?"
  SPEC.md:
    role: "core governance chain definition"
    review_focus: "Source / Carrier / Authority / Gate / Action / Return / Rebuild clarity"
  STATE_MODEL.md:
    role: "state vocabulary"
    review_focus: "Candidate / Approved / Runtime separation"
  RED_DOORS.md:
    role: "stop conditions"
    review_focus: "authority, data, identity, runtime, writeback risks"
  SEMANTIC_FIREWALL.md:
    role: "meaning-boundary rules"
    review_focus: "capability vs permission, access vs writeback, persona vs identity"
  SOURCE_CARD.md:
    role: "source evidence boundary"
    review_focus: "source type, carrier, evidence level"
  GATE_REVIEW.md:
    role: "decision gate"
    review_focus: "Go / Conditional Go / Park / Stop / Needs Human Approval"
  RETURN_PACKET.md:
    role: "post-action return structure"
    review_focus: "what changed, what did not change, evidence, rollback, next action"
  schemas:
    role: "testable data structures"
    review_focus: "schema validity and example compatibility"
  examples:
    role: "minimal demonstration"
    review_focus: "does the example demonstrate Gate Decision without implying runtime?"
```

## Review Checklist

- Is every file marked Candidate / Not Approved / No Runtime?
- Does every file avoid Qinyi / Hazumi as core-required personas?
- Does every file avoid runtime, adapter, platform connection, or company-data claims?
- Can a new reader understand the core without private context?
- Can the schemas validate the examples?
- Does the Gate Decision return path remain clear?

## Not To Claim

This index is not merge approval, publication approval, runtime proof, or public launch.