# Unified Naming Convention｜XuanLing Cloud Workbench

Status: Candidate / Naming Standard / No Runtime
Master Gate: #297
Applies To: GitHub issues, PRs, branches, docs, schemas, templates, return packets

## Core

Naming must let Vitas, Qinyi, Hazumi, Jules, and future review windows understand where an item belongs, what state it is in, and what it is allowed to do.

A name should answer:

1. What system or window is this for?
2. What function does it serve?
3. What stage or state is it in?
4. Is it docs, schema, signal, handoff, or PR candidate?
5. Does it require Vitas decision?

## Global Rules

- Use lowercase kebab-case for repository file paths.
- Use concise English paths for GitHub stability.
- Use Chinese titles inside files when useful.
- Put status in the document header, not only in the filename.
- Do not overload one file name with too many concepts.
- Prefer one stable current file plus lineage notes, instead of many active version copies.

## Folder Map

```yaml
Folder_Map:
  docs/handoff:
    role: "cross-window handoff, root narrative, work contracts"
  docs/hazumi-w:
    role: "HAZUMI.W / W-system docs, cloud-first, semantic boundary"
  docs/qinyi:
    role: "Qinyi Gate Review, review memos, bridge language"
  docs/github:
    role: "repo governance, naming, repo state map, cleanup gate"
  docs/signals:
    role: "external signal absorption notes"
  docs/m365-manual-build:
    role: "manual M365 build guides and boundaries"
  docs/public-safe:
    role: "public-safe wording and what-not-to-claim"
  schemas:
    role: "machine-readable or structured YAML schemas"
  templates:
    role: "reusable return packet and review templates"
  archive:
    role: "superseded or historical material, not active lane"
```

## File Name Pattern

Preferred pattern:

```text
<scope>-<function>-<type>.md
<scope>-<function>.schema.yaml
<scope>-<function>-template.md
```

Examples:

```text
docs/handoff/xuanling-cloud-workbench-root-narrative-v0_8.md
docs/handoff/xuanling-cloud-workbench-contract.md
docs/hazumi-w/cloud-first-pivot.md
docs/hazumi-w/semantic-firewall.md
docs/github/repo-state-map.md
docs/github/naming-convention.md
docs/signals/xuanling-signal-absorption-2026-06-30.md
schemas/return-packet.schema.yaml
```

## Version Rules

```yaml
Version_Rules:
  root_narrative:
    use: "v0_8 or current milestone version when the conceptual layer changes"
  daily_signal:
    use: "date-based naming: yyyy-mm-dd"
  stable_schema:
    use: "semantic file name; version in header unless breaking change"
  archive_versions:
    use: "archive folder or lineage note"
```

## Issue Title Pattern

```text
DCP-<LANE>-<SERIES>｜<human-readable title>
```

Examples:

```text
DCP-GITHUB-CLEANUP-v0.7.2｜Cloud-first repo cleanup work contract
DCP-DEPENDENCY-R1｜GitHub dependency-chain relation net
DCP-HANDOFF-R1｜Codex GitHub-only migration handoff packet
```

Use issue titles for gates, relation hubs, handoff packets, and review sockets. Do not create many execution issues unless they pass #297.

## PR Title Pattern

```text
<scope>: <candidate change summary>
```

Examples:

```text
XuanLing Cloud Workbench v0.8 root narrative candidate
docs: add return packet schema candidate
```

PR title must not imply approval, deployment, release, or runtime.

## Branch Pattern

```text
<owner-surface>/<scope>-<purpose>-<version>
```

Examples:

```text
qinyi/xuanling-cloud-workbench-v0.8
hazumi/source-mining-schema-v0.1
jules/mock-test-candidate-v0.1
```

## State Tags

Use these exact state words in headers and reviews:

```yaml
State_Tags:
  - Candidate
  - Review_Support
  - Conditional_Pass
  - Approved
  - BuildReady
  - Runtime
  - Park
  - Supersede
  - Red_Gate
  - Needs_Vitas_Decision
```

## Repo State Values

Use these for issue and PR inventory:

```yaml
Repo_State_Values:
  Keep: "valid active reference"
  Merge: "mergeable only after explicit Vitas approval"
  Supersede: "replaced by newer trunk; keep as record"
  Park: "valuable but not active lane"
  Red_Gate: "do not execute; retain stop reason"
  Needs_Vitas_Decision: "human decision required"
```

## Naming Boundaries

- Qinyi means front Gate Review and human-language bridge.
- Hazumi / 和澄 means Codex cloud docs, schema, and manual-guide support.
- Jules means optional branch/code/test candidate after approval.
- XuanLing means root dependency-chain world model.
- HAZUMI.W means W-system architecture code name, not company product name.
- GitHub / DCP means cloud substrate, not runtime.

## What Not To Do

- Do not name a candidate file as final.
- Do not name a guide as deployed.
- Do not name a PR as approved.
- Do not make issue names imply execution.
- Do not mix company-facing names with internal XuanLing names.
- Do not create aliases for 和澄; wrong spellings are typos, not alternate names.

## Company-facing Naming

Use simple company-facing names only:

```text
Shared Work Flow
共用作業底盤
表單與流程工作臺
Enterprise Operations Workbench
```

Do not expose full internal names such as XuanLing, Qinyi, Hazumi, CoreTri, or W-system in company-facing drafts unless Vitas explicitly chooses to do so.

## Final Rule

If a name does not show scope, function, state, and carrier clearly, rename before expanding the work.