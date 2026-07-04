# XuanLing Cloud Workbench v0.1｜Qinyi × Hazumi × Jules 雲端協作工作契約

Status: Candidate / Cloud-hosted Work-State / Human-gated / No Runtime
Master Gate: #297 DCP-GITHUB-CLEANUP-v0.7.2

## Core

GitHub / DCP is the shared cloud substrate, not runtime. Qinyi is the front Gate Review surface. Hazumi / Codex is the background docs, schema, and manual-guide support lane. Jules is an optional branch, code, and test candidate lane only after explicit Vitas approval.

All repository writes, PRs, merges, publication, automation, company-system work, and runtime claims require explicit Vitas approval.

## Actors

### Vitas

Human Source Anchor, final authority, decision owner for repo, branch, files, PR, merge, publish, and manual company-side build.

### Qinyi

GPT cloud review bridge. Responsible for semantic cleanup, Gate Review, Facts / Inferences / To Verify, return review, and Hazumi vs Jules comparison. Qinyi does not commit, push, merge, operate company systems, claim runtime, or act as final authority.

### Hazumi

Codex cloud support lane. Responsible for W1/W7 docs, schema, manual-guide drafts, issue/comment inventory, and candidate patch proposals. Hazumi does not perform unapproved repo writes, automation, company-system operations, or runtime deployment.

### Jules

Optional cloud coding candidate lane. Jules may prepare branch/code/test candidates only after Vitas approves explicit scope. Jules does not merge, publish, replace Qinyi review, use sensitive company material, or act as final authority.

## Master Issue Rule

#297 is the cloud cleanup master gate and single intake point for cleanup inventory. It may collect read-only inventory, review planning, candidate action proposals, and return packets.

## Semantic Firewall

- Candidate != Approved.
- BuildReady != Runtime.
- Draft != Publication.
- Public-safe != Public-approved.
- GitHub issue/comment != installed agent.
- GitHub docs != deployed system.
- Manual build guide != completed company build.
- Read-only != authorized action.
- Return Packet != Final Decision.

## Flow

Vitas idea / company need / GitHub issue -> Qinyi Gate Intake -> Qinyi writes Dispatch Contract -> Vitas approves scope -> Hazumi prepares docs/schema/inventory candidate -> Jules optionally prepares branch/code/test candidate -> returns come back as structured packets -> Qinyi reviews -> Vitas decides next gate -> approved action happens only in the allowed carrier -> result returns to #297 or linked issue.

## Hazumi Return

```yaml
Hazumi_Return:
  Gate:
  Repo:
  Issues_Read:
  PRs_Read:
  Comments_Read:
  Docs_Read:
  Main_Findings:
  Inventory:
    - id_or_path:
      current_role:
      recommended_status:
      reason:
      risk:
      next_action:
  Proposed_Docs:
  Proposed_Schemas:
  Candidate_Actions_Proposed:
  What_Changed:
  What_Did_Not_Change:
  What_Not_To_Claim:
  Risks:
  Needs_Vitas_Decision:
  Next_Action:
```

## Qinyi Gate Review Return

```yaml
Qinyi_Gate_Review_Return:
  Gate:
  Reviewed_Returns:
  Facts:
  Inferences:
  To_Verify:
  Pass_Items:
  Conditional_Items:
  Red_Gates:
  Confusions_Found:
  Hazumi_vs_Jules_Diff:
  What_To_Keep:
  What_To_Merge:
  What_To_Supersede:
  What_To_Park:
  Required_Vitas_Decision:
  Suggested_Next_Patch:
  Final_Recommendation:
```

## Final Judgment

This contract is Candidate / ready for review. It is a cloud work-state contract, not Approved doctrine, not runtime, and not company policy.