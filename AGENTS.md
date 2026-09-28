# AGENTS.md｜Repository Agent Rules

## Repository Role

This repository is a public projection carrier for GLModel work: world, object, relation, reality, geometry, and reconstruction review. Repository location, model existence, or rendered visibility does not establish World admission, Physical Reality, or Native Authority.

Agents working here are task-bounded contributors to authorized review, construction, iteration, repair, and validation. These repository instructions apply only to authorized work in this repository; they do not set another project's role or grant new authority.

## Allowed Work

Agents may:
- inspect pull request diffs;
- list changed files;
- identify mergeability blockers;
- identify out-of-scope file changes;
- preserve already-merged content from `main`;
- keep pull requests within the requested scope;
- propose minimal safe patches;
- implement requested additions and iterate existing artifacts within the explicitly authorized task scope, choosing the smallest sufficient change;
- align current-facing names, definitions, internal references, and behavior as one scoped change; preserve stable identifiers and compatible aliases where consumers still depend on them;
- run safe local checks when available.

## Not Allowed

Agents must not:
- redefine core architecture;
- create new architecture axes;
- rewrite core doctrine;
- modify identity-core documents unless explicitly requested;
- convert documentation into runtime behavior;
- introduce API, database, background execution, or automation semantics unless explicitly requested;
- merge pull requests automatically;
- remove architecture content without explicit instruction;
- promote pending concepts into finalized doctrine.

## Governance Roles

- Task-selected models and agents are replaceable, scope-bounded carriers; their names do not establish permanent roles or Authority.
- Repository contributors may inspect, construct, iterate, repair, validate, and return evidence only within the granted task scope.
- GitHub is the repository revision/evidence carrier and pull-request gate; it is not the Native Source Root or Architecture Authority.
- User: final approval and merge authority.

## Code Review Rules

- Report consequential defects introduced by the diff, with the affected file and concrete consequence. Distinguish a broken contract from a wording suggestion or preference; do not invent line numbers or treat an undefined term alone as a defect.
- For changes that claim a configuration is equivalent or usable, flag lost stable-entity lineage or unsupported geometry, material, behavior, performance, cost/supply or maintenance consequences relevant to the task. A visual change proves appearance only; require scoped evidence for each additional claim, not every property for every edit.
- Keep review findings within the selected task's authority and evidence. Propose the smallest safe correction; do not infer merge, cross-domain write or external-action permission from capability. These rules supplement required checks and approvals, not replace them.

## Review Gates

Before editing, resolve the repository full name, selected ref, actual HEAD, and named environment when one is used. For PR work, resolve the repository's current base ref separately from the PR's recorded base SHA; a recorded base SHA can lag the current branch.

If a historical ref is missing, inspect its linked PR/commit provenance and current task need before proposing a replacement. Do not blindly retry or recreate the old branch. If the PR targets a candidate branch, preserve that dependency rather than silently retargeting it to main.

Then check:
1. What pull request or branch is the target?
2. What files are in scope?
3. What files are outside scope?
4. What already-merged content must be preserved?
5. What is the smallest sufficient change that completes the authorized outcome?

## Scope Rules

If a pull request includes files outside scope:
- report diff pollution;
- propose removing the file from the pull request diff;
- do not rewrite the file unless explicitly instructed.

If a pull request conflicts with latest `main`:
- preserve all already-merged content;
- update or rebase only if the task asks for cleanup;
- do not overwrite prior merged artifacts.

If a proposed runtime, API, database, or automatic-execution change exceeds the explicitly authorized scope, or a claim of operational behavior lacks supporting evidence:
- identify the specific unauthorized change or unsupported claim and hold only dependent actions;
- suggest a minimal correction that preserves accurate technical meaning. Mentioning a capability, documenting a non-runtime design, or making an explicitly authorized change is not by itself a scope violation. Apply the Not Allowed rules independently; this distinction grants no new implementation, deployment, or merge authority.

## Naming, Iteration, and Historical Content

Current-facing content must describe the selected artifact's actual purpose and supported behavior. Updating a display name or navigation pointer alone does not correct outdated definitions, fixed-role assumptions, examples presented as rules, or references still used by readers and tools.

For an authorized change, inspect the affected definitions and consumers together. Retain and iterate useful existing artifacts; add missing capability only when the named task authorizes it. Age, an old name, or non-selection in one task is not a reason to retire an artifact. Retire or remove only within explicit authorization and after checking dependencies and recovery.

Keep historical records accurate and visibly scoped to their event/version; record a successor when one is known. Do not mass-replace historical names or break a machine identifier merely to match a display label. If an identifier must change, include its consumer updates, migration or compatibility path, validation, and rollback in the same authorized scope.

These rules do not redefine product identity, widen access, override another Native owner's judgment, or authorize runtime conversion, merge, or deployment. The Not Allowed rules remain in force.

## Deliverable Continuity

Use the original authorized deliverable and its acceptance conditions as the unit of completion. For each increment, state which part of that deliverable becomes usable, reusable, or recoverable, and what remains unproven or blocked. Reuse still-applicable accepted results and suitable existing capabilities within the granted scope and authority; recheck only affected assumptions and dependencies. Changed-file counts, test counts, saved settings, or an analysis map alone do not establish the delivered effect. A broad domain inventory is reference material, not a requirement to reload, re-audit, or rebuild every domain before proceeding.

## Local Blockers and Evidence

### Repository environment check

For authorized Node-based checks in this repository, `.nvmrc` records the same Node major as `.github/workflows/semantic-core-verify.yml`. Environment startup alone is not CI equivalence. Select Node 22 through the environment's supported version manager; this file does not automatically change an existing Codex Cloud environment.

After resolving the intended repository and full commit SHA independently, run `node tools/check-environment.mjs --expected-repo chenchienheng/GLModel-Pole-Projection --expected-head FULL_SHA` from that worktree. Add `--expected-ref REF` when the task requires a specific existing ref. Do not copy the local HEAD solely to make the check pass. The command reads local Git state, Node policy and AGENTS bytes; it performs no network operation, installation, config edit, branch recreation, merge or deployment. It reports dirty work without discarding it. Exit 2 identifies an unavailable or mismatched check; investigate only the affected operation.

The v2 receipt separates `mismatches` from `unverified`: `MISMATCH` means at least one comparison proved different; `UNVERIFIED` means required evidence is incomplete without a proven mismatch; `CHECKED` requires both lists to be empty. Both kinds can coexist. `observed.git_reads` distinguishes missing, empty, unsupported and unreadable origin configuration; an unresolved ref is not proof that it is absent. Raw Git errors and origin credentials are not emitted. Exit 0 remains `CHECKED` only; exit 2 also covers `CHECK_UNAVAILABLE` and never grants permission to recreate a ref or retry an unknown effect.

`node --test tools/check-environment.test.mjs` checks this helper using synthetic observations and a temporary Git fixture. Its success does not prove Node 22, Codex session adoption, existing semantic-core checks or application runtime passed. Existing semantic-core validation remains authoritative for its original scope.

A blocker holds only actions that depend on it. Continue already-authorized independent work; do not widen scope or replace a required approval to avoid a blocker.

Keep saved configuration, session-loaded instructions, and observed runtime behavior as separate evidence states. A repository patch or environment setup success does not prove an existing session loaded the revision.

Keep local completion, delivery, receiver readback, and actual receiver use separate. Do not infer approval from a candidate, CI success, a saved file, or a producer's own receipt.

## Default Output Format

Lead with the outcome and its practical impact in clear Traditional Chinese. Prefer concise paragraphs or at most three top-level points; expand only when the task requires it. Avoid ASCII diagrams, nested lists, and forced report templates unless the requested deliverable needs them.

Preserve the material status, changed files, out-of-scope changes, risks, minimal patch, verification limits, and any human decision needed without forcing a fixed checklist into every response.

Synthetic examples and one-task constraints remain examples and local constraints; do not promote them into repository-wide or cross-project rules.

## Final Rule

Do not merge automatically. Final approval remains with the user.
