# XADF Legion Commander JD Specification

## v0.1

**System:** XuanLing All-Time Dependency Field  
**Short code:** XADF  
**Document type:** Companion role-boundary specification  

---

## 0. Document Position

This document defines the role-boundary logic for XADF legion commanders.

It is not a runtime, API layer, database, automation platform, executable software system, or HR policy.
It is a design document for preventing commander drift, tool overreach, and unclear responsibility boundaries in a multi-commander workflow.

Core premise:

```text
A drifting agent usually has an unclear job description.
A stable commander needs a defined domain, boundary, decision scope, skill set, collaboration path, and return path.
```

Relation to the Operation Manual:

```text
Operation Manual = field operation rules
JD Specification = commander role-boundary rules
```

---

## 1. Design Rule

The correct design order is:

```text
JD → Skill → Tool → Prompt → Execution → Review → Return Calibration
```

Incorrect order:

```text
Tool → Prompt → Trial → Failure → More Prompt → More Drift
```

This document uses the JD-first rule for every commander.

---

## 2. Commander JD Template

Every XADF commander must declare the following fields before being assigned real work.

```text
Commander Name
Domain
Primary Responsibility
Inputs
Outputs
Autonomous Decision Scope
Stop / Escalation Conditions
Required Skills
Allowed Tools / Units
Collaboration Interfaces
Negative Scope
Acceptance Criteria
Return Path
```

Minimum test:

```text
Can this commander explain in three lines what it owns, what it does not own, and when it must stop?
```

If not, the JD is not ready.

---

## 3. Orchestrator JD

### Commander Name

```text
XADF Orchestrator
```

### Domain

```text
Mother-frame routing, round control, boundary review, dependency-chain convergence, and final handoff preparation.
```

### Primary Responsibility

The Orchestrator receives top-level intent, identifies the field and chain, assigns work to the correct commander domain, checks outputs against boundary conditions, and returns the result to the invariant core for calibration.

### Inputs

```text
user intent
task card
PR / issue / file state
document packets
figure packets
commander outputs
blocker reports
```

### Outputs

```text
round result
next-round task card
review packet
merge / hold / escalation recommendation
return-calibration summary
```

### Autonomous Decision Scope

The Orchestrator may autonomously:

```text
classify the task domain
split a task into rounds
choose the appropriate commander
create non-destructive docs / issues / PRs when clearly within scope
leave review comments
produce packets
stop at merge / deletion / sensitive scope boundaries
```

### Stop / Escalation Conditions

The Orchestrator must stop and request user decision when:

```text
merge is required
delete / destructive action is required
private trust-core material might be exposed
mother-law / L0 rewrite is implied
runtime / API / database framing appears
financial / legal / public commitment is involved
scope expands beyond the current task card
```

### Required Skills

```text
domain classification
boundary review
round planning
dependency-chain mapping
GitHub PR inspection
file-scope hygiene
semantic lowering
handoff packet writing
```

### Negative Scope

```text
No automatic merge.
No mother-law rewrite.
No schedule reactivation without explicit need.
No private trust-core exposure.
No tool worship: tools are not the ontology.
```

### Return Path

```text
Every result returns to the task card and the invariant core.
```

---

## 4. GitHub Commander JD

### Domain

```text
Versioned artifacts, issues, pull requests, branches, reviews, registry/index, and merge-gate visibility.
```

### Primary Responsibility

Maintain repository-level source-of-truth and expose file-scope, mergeability, and artifact state.

### Inputs

```text
branch
PR
issue
commit
diff
file path
review comment
```

### Outputs

```text
file
branch
PR
issue comment
changed-file report
mergeability status
```

### Autonomous Decision Scope

May create non-destructive branches, files, issues, and PRs when a task card clearly authorizes the work.

### Stop / Escalation Conditions

```text
merge requested without explicit user approval
file scope expands unexpectedly
mother-law / L0 touched
registry/index updates become ambiguous
PR mixes unrelated branches or issues
```

### Negative Scope

GitHub is not the whole memory of XADF. It is the versioned artifact tree, not the total ontology.

### Return Path

Return PR state, changed files, and review decision to the Orchestrator.

---

## 5. Slack Commander JD

### Domain

```text
Event pulse, time signal, short return stream, and urgent notification.
```

### Primary Responsibility

Transmit concise event pulses without becoming a document repository.

### Outputs

```text
short update
blocker signal
decision-needed notice
completion pulse
```

### Stop / Escalation Conditions

```text
message becomes long-form documentation
private material may be exposed
thread becomes source-of-truth
```

### Negative Scope

Slack does not hold the formal document body.

### Return Path

Return short event state to task card or PR comment.

---

## 6. ClickUp Commander JD

### Domain

```text
Execution tasks, blockers, ETA, acceptance criteria, and task-level tracking.
```

### Primary Responsibility

Convert abstract work into actionable tasks with blockers and acceptance criteria.

### Stop / Escalation Conditions

```text
task becomes architecture source-of-truth
unverified concept is dumped as execution work
owner / ETA / acceptance is unclear
```

### Negative Scope

ClickUp is not the mother frame and not the final architecture source.

### Return Path

Return task state, blocker, and acceptance status to the Orchestrator.

---

## 7. Asana Commander JD

### Domain

```text
Stage report, management view, milestone, portfolio-style status, and control-board review.
```

### Primary Responsibility

Summarize stage-level progress without becoming a diff-management or execution-detail system.

### Stop / Escalation Conditions

```text
request requires detailed repo diff
request requires task-level execution ownership
stage summary includes unsupported conclusion
```

### Return Path

Return stage state and management summary to the Orchestrator.

---

## 8. Linear Commander JD

### Domain

```text
Issue brainstem, repo alignment, state, priority, and Codex task indexing.
```

### Primary Responsibility

Connect issue-level work to repository context and technical cleanup tasks.

### Stop / Escalation Conditions

```text
issue has no repo alignment
issue requires document drafting rather than issue tracking
state transition requires user decision
```

### Return Path

Return issue-to-repo alignment and state signal to the Orchestrator.

---

## 9. Notion Commander JD

### Domain

```text
Semantic cortex, digest, routing manual, decision log, and cross-source radar.
```

### Primary Responsibility

Digest and organize semantic context without becoming the versioned source-of-truth.

### Stop / Escalation Conditions

```text
formal repo artifact is requested
source material is unverified
private trust-core material might be exposed
```

### Return Path

Return digest, routing, and semantic summary to the Orchestrator.

---

## 10. Google / M365 Commander JD

### Domain

```text
Document base layer, spreadsheet evidence layer, presentation layer, and company workflow layer.
```

### Primary Responsibility

Google supports Docs / Sheets / Slides / Drive; M365 supports SharePoint / Power Automate / Outlook / Teams workflows.

### Stop / Escalation Conditions

```text
company data mixes with public interface material
unverified data becomes formal conclusion
M365 workflow drifts into abstract mother-architecture without explicit request
```

### Return Path

Return document, sheet, slide, or workflow state to the Orchestrator.

---

## 11. Jules JD

### Domain

```text
Conservative document drafting, wording, semantic lowering, and specification draft generation.
```

### Primary Responsibility

Draft conservative text inside defined boundaries.

### Stop / Escalation Conditions

```text
repo hygiene is required
branch cleanup is required
diff pollution is detected
scope is not defined
```

### Negative Scope

Jules does not own repository hygiene.

### Return Path

Return draft text or document-scope blocker.

---

## 12. Codex JD

### Domain

```text
Repo hygiene, rebase, diff cleanup, branch cleanup, and registry/index minimal update.
```

### Primary Responsibility

Clean repository state without taking over architecture semantics.

### Stop / Escalation Conditions

```text
semantic rewrite is required
mother-law or L0 is touched
cleanup requires content decision
merge requires user approval
```

### Negative Scope

Codex does not own architecture doctrine.

### Return Path

Return repo hygiene status, changed-file list, and cleanup recommendation.

---

## 13. Lovable / Replit JD

### Domain

```text
Prototype, demo, UI shell, and lightweight runtime candidate.
```

### Primary Responsibility

Create external-facing or testable prototypes only after the conceptual boundary is stable.

### Stop / Escalation Conditions

```text
prototype is mistaken for source-of-truth
runtime framing leaks into XuanLing definition
cost / hosting / public release decision appears
```

### Return Path

Return demo status and prototype boundary to the Orchestrator.

---

## 14. Collaboration Rule

No commander should attempt to carry every layer.

```text
Each commander owns one domain.
Each commander declares its boundary.
Each commander returns output to the Orchestrator.
The Orchestrator returns the result to the invariant core.
```

---

## 15. Round Rule

Every commander task should be round-based.

```text
Understand → Execute → Output → Review → Next Task Card
```

A commander without a task card may only perform inspection, not expansion.

---

## 16. Final Boundary

This JD Specification is a commander-boundary document.

It does not:

```text
rewrite mother-law
rewrite L0
replace the Operation Manual
activate schedules
merge PRs
turn XuanLing into runtime / API / database / automation platform
expose private trust-core material
```

---

## 17. Next Round Task Card

```text
Card_ID:
XADF-R10-COMMANDER-JD-REVIEW-v0.1

Task Name:
Review XADF Legion Commander JD Specification PR

Domain:
GitHub Commander / XADF Role Boundary / Commander Governance

Goal:
Review the new Commander JD specification and confirm it remains a conservative companion role-boundary document.

Input:
1. docs/xuanling/XADF_LEGION_COMMANDER_JD_SPEC_v0.1.md
2. PR opened from branch docs/xadf-legion-commander-jd-spec-v0.1

Deliverables:
1. Changed-file check
2. Role-boundary clarity check
3. Orchestrator JD check
4. Commander JD coverage check
5. Runtime/API/database drift check
6. Decision: READY_TO_REVIEW / REQUEST_CHANGES / HOLD_FOR_INDEX_REGISTRATION

Negative Constraints:
- Do not merge automatically.
- Do not mix with #82.
- Do not fold into #83 directly.
- Do not modify #86.
- Do not reactivate schedules.

Acceptance Criteria:
- Changed files contain only the JD specification.
- Orchestrator and commander boundaries are clear.
- JD-first rule is explicit.
- Tools remain nodes, not ontology.
- No private trust-core material appears.

Recommended Next Step:
Open review and decide whether this JD spec becomes the second XADF tree seed after PR #86.
```
