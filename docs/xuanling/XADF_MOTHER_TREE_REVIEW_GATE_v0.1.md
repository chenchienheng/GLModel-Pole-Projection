# XADF Mother Tree Review Gate

## v0.1

**System:** XuanLing All-Time Dependency Field  
**Short code:** XADF  
**Document type:** Mother-tree review and submission gate specification  

---

## 0. Document Position

This document defines the review-gate rule for XADF branch trees.

It is not a runtime, API layer, database, automation platform, or executable software system.
It is a governance document for how branch outputs should be reviewed before they are submitted to the user for final approval.

Core rule:

```text
Branch trees do not submit directly to the user.
Branch trees submit to the Mother Tree first.
The Mother Tree reviews, cleans, and only then submits final review packets to the user.
```

---

## 1. Why This Rule Exists

A branch window, tool, or commander may produce useful work, but it does not necessarily know:

```text
mother-frame boundary
merge order
file-scope hygiene
whether another branch already owns the same layer
whether the output should be a document, task card, PR, or review packet
whether a user decision is actually required
```

Therefore, branch outputs must pass through the Mother Tree review gate before becoming user-facing final submissions.

---

## 2. Mother Tree Role

The Mother Tree is the review and convergence layer for XADF.

It is responsible for:

```text
receiving branch outputs
checking domain and boundary
checking file scope
checking return path
checking whether the branch is mother / child / shared layer
requesting Codex cleanup when repo hygiene is required
requesting Jules drafting or wording cleanup when document semantics are unclear
producing the final user-facing review packet
submitting clickable review links and decision options to the user
```

The Mother Tree does not replace the user.
It filters and prepares the final decision state.

---

## 3. Submission Order

Correct order:

```text
Branch Tree / Commander Output
→ Mother Tree Review
→ Codex / Jules cleanup if needed
→ Final Review Packet
→ User Decision
```

Incorrect order:

```text
Branch Tree / Commander Output
→ User directly
→ User must inspect raw branch state
→ context and token pressure increase
```

---

## 4. Branch Tree Requirements

Every branch tree must declare:

```text
Branch Name
Domain
Scope
Boundary
Upstream Reference
Downstream Reference
Return Path
Expected Output Type
Decision Required or Not
```

Minimum self-identification:

```text
I am a branch tree.
I own this domain.
I do not own the mother frame.
My output returns to the Mother Tree before user review.
```

---

## 5. Mother / Child / Shared Layer Rule

### Mother Layer

```text
Invariant core
return-calibration logic
True Main merge logic
final submission gate
cross-branch consistency
```

### Child Layer

```text
commander-specific branch
window-specific branch
document-specific branch
task-specific branch
```

### Shared Layer

```text
figures
task cards
review packets
source ledgers
evidence matrices
routing manuals
operation logs
```

A branch must not pretend to be the Mother Tree.
A shared layer must not become the final authority.

---

## 6. Codex / Jules Routing Rule

The Mother Tree may route cleanup before user submission.

### Route to Codex when:

```text
repo hygiene is required
changed-file pollution appears
branch is behind or mergeability is unclear
registry / index cleanup is needed
file path or naming is inconsistent
```

### Route to Jules when:

```text
document wording is unclear
semantic boundary is too broad
role or scope language drifts
conservative rewrite is needed
public-facing clarity is required
```

### Route to user when:

```text
merge is requested
hold / approve / request-changes decision is required
mother-law / L0 is implicated
True Main strategy changes
private or formal external commitment appears
```

---

## 7. User-Facing Submission Format

When the Mother Tree submits to the user, it must use a compact final format:

```text
Need your review:
[PR / document / issue title]
[clickable link]

Decision options:
1. MERGE_ALLOWED / APPROVE
2. HOLD_FOR_INDEX_REGISTRATION / HOLD
3. REQUEST_CHANGES
4. NO-GO

Minimum summary:
- changed files / document scope
- boundary pass or blocker
- whether Codex / Jules cleanup is needed
- recommended decision
```

The user should not need to inspect raw branch clutter.

---

## 8. Token Compression Rule

The Mother Tree should reduce token pressure by converting long chain outputs into:

```text
task cards
review packets
PR anchors
operation logs
clickable final links
```

Long chat history should not be the primary memory.

```text
Chat = current round and decision point
GitHub / Docs / PR = source anchor
Task Card = next continuation unit
Review Packet = final audit unit
```

---

## 9. Current XADF Tree Seeds

Current branch-family seeds:

```text
PR #86 — Operation Manual
PR #87 — Legion Commander JD Specification
PR #88 — First Round Operation Return Log
PR #89 — Mother Tree Review Gate
```

Interpretation:

```text
#86 = how the field operates
#87 = who the commanders are and where they stop
#88 = what was learned after running the first chain
#89 = how branches submit through the Mother Tree before user review
```

---

## 10. Final Boundary

This document does not:

```text
rewrite mother-law
rewrite L0
merge PRs
activate schedules
replace PR #86, #87, or #88
fold directly into #83
turn XuanLing into runtime / API / database / automation platform
```

---

## 11. Next Round Task Card

```text
Card_ID:
XADF-R15-MOTHER-TREE-REVIEW-GATE-REVIEW-v0.1

Task Name:
Review XADF Mother Tree Review Gate PR

Domain:
GitHub Commander / XADF Mother Tree / Branch Submission Governance

Goal:
Review the Mother Tree Review Gate and decide whether it should become the fourth XADF tree seed.

Input:
1. PR containing docs/xuanling/XADF_MOTHER_TREE_REVIEW_GATE_v0.1.md
2. PR #86 Operation Manual
3. PR #87 Commander JD Specification
4. PR #88 First Round Operation Return Log

Deliverables:
1. Changed-file check
2. Mother-tree submission rule check
3. Branch tree declaration rule check
4. Codex / Jules routing rule check
5. User-facing final submission format check
6. Decision: READY_TO_REVIEW / REQUEST_CHANGES / HOLD_FOR_INDEX_REGISTRATION

Negative Constraints:
- Do not merge automatically.
- Do not modify #82.
- Do not modify #83.
- Do not modify #86, #87, or #88.
- Do not reactivate schedules.

Acceptance Criteria:
- Changed files contain only the Mother Tree Review Gate file.
- Branches must submit to Mother Tree first.
- User-facing submissions are compact and clickable.
- Codex / Jules routing boundaries are clear.
- The document does not rewrite doctrine.

Recommended Next Step:
Open PR and perform first self-review.
```
