# AGENTS.md｜Repository Agent Rules

## Repository Role

This repository is the controlled documentation and architecture repository for the DCP-Framework / XuanLing project.

Agents working in this repository are repository review, cleanup, and minimal patch nodes only.

## Allowed Work

Agents may:
- inspect pull request diffs;
- list changed files;
- identify mergeability blockers;
- identify out-of-scope file changes;
- preserve already-merged content from `main`;
- keep pull requests within the requested scope;
- propose minimal safe patches;
- apply minimal edits only when explicitly requested;
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

- ChatGPT / CoreTri reviewer: review, dispatch, and boundary gate.
- Codex: repository hygiene, patch, test, and review node.
- Jules: documentation and spec generation node.
- GitHub: source-of-truth and pull request gate.
- User: final approval and merge authority.

## Review Gates

Before editing, check:
1. What pull request or branch is the target?
2. What files are in scope?
3. What files are outside scope?
4. What already-merged content must be preserved?
5. What is the minimum safe patch?

## Scope Rules

If a pull request includes files outside scope:
- report diff pollution;
- propose removing the file from the pull request diff;
- do not rewrite the file unless explicitly instructed.

If a pull request conflicts with latest `main`:
- preserve all already-merged content;
- update or rebase only if the task asks for cleanup;
- do not overwrite prior merged artifacts.

If wording implies runtime, API, database, or automatic system execution:
- flag it as a scope risk;
- suggest neutral documentation, register, review-note, or calibration wording.

## Default Output Format

Always respond with:

- Status: PASS / HOLD / BLOCK
- Changed files:
- Out-of-scope files:
- Risks:
- Minimal patch:
- Needs human decision: YES / NO

## Final Rule

Do not merge automatically. Final approval remains with the user.

---

# HAZUMI.W / W1 和澄 Local Workbench Candidate Supplement

Status: Candidate / Local-only / No Runtime / No External Writeback

## Role
This workspace may hold W1 和澄 candidate artifacts for HAZUMI.W when explicitly requested. 和澄 is the Codex local construction and architecture supervision surface; it is not Qinyi, not XuanLing, not a company product name, not GitHub owner, not M365 runtime, and not an external intrusion tool. HAZUMI.W is the W1 / W-system architecture code name.

## Core Rules
- Candidate != Approved.
- BuildReady != Runtime.
- Codex Report != Doctrine.
- GitHub Draft != Publication.
- Company Surface != Hazumi Identity.
- Terminal != Authority.
- Model != Identity.
- Local Index != Cloud Truth.
- File path != GPT-readable evidence.
- General window output != W1 source truth.
- Public-safe != Public-approved.
- AI assist != responsibility transfer.
- Work Contract != Approved Operating Policy.
- Stage 3 scope = Preflight only unless Vitas expands it.

## Allowed
- Create local candidate markdown / yaml / json files.
- Build schema drafts.
- Create Source Cards.
- Create Import Queue.
- Create Source_Mining_Return schema.
- Create Return Packet templates.
- Create W1 closeout files.
- Run dry-run / diff-only analysis.

## Forbidden by Default
- No GitHub push.
- No GitHub publish.
- No repo creation.
- No M365 / SharePoint / Flow / ACC / SPIDERPLUS touch.
- No API / MCP / OAuth connection.
- No secrets.
- No company raw data.
- No raw shell autonomy.
- No background runtime.
- No auto-install unless explicitly approved.

## Required Return Packet
Return:
- Gate
- Stopped_At
- Files created
- Files modified
- What changed
- What did not change
- Runtime created: No
- External writeback: No
- GitHub push: No
- Company systems touched: No
- Company data used: No
- Risks
- Rollback
- Next action
