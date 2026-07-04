# Cloud Parallel Workcell Model v0.1

Status: Candidate / Cloud Work Orchestration / No Runtime / No External Writeback
Master Gate: #297
Related PR: #298

## Core

Cloud work should not imitate a single slow chat thread. It may use multiple bounded workcells that run in parallel, each with a small scope, a clear return packet, and a shared review gate.

The point is not to create autonomous bots. The point is to reduce blocking while preserving Source / Carrier / Authority / Gate / Action / Return / Rebuild.

## Why This Exists

Local experiments showed that multi-task work is possible, but local carrier proximity creates endpoint, log, retry, and authority pollution risk.

Cloud-first work preserves cleaner traces, but can feel slow if every item waits for a single chat loop. The answer is parallel cloud workcells, not uncontrolled automation.

## Workcell Types

```yaml
Cloud_Workcells:
  Gate_Cell:
    role: "state, authority, red-door, semantic boundary precheck"
  Build_Cell:
    role: "docs, schema, examples, template construction candidate"
  Review_Cell:
    role: "diff review, consistency check, not-to-claim audit"
  Signal_Cell:
    role: "external signal absorption and case index"
  Settings_Cell:
    role: "G/M/settings governance planning"
  Open_Core_Cell:
    role: "Open XuanLing Core first build set"
  Return_Cell:
    role: "collect workcell returns and route them to Qinyi review"
```

## Parallel Rule

Parallel work is allowed only when each cell has:

- one clear scope
- no external writeback
- no merge authority
- no company raw data
- a declared carrier
- a declared return path
- a Return Packet
- a Qinyi review after completion
- a Vitas decision before merge, publish, runtime, or company-side action

## Not Parallelizable

The following must remain serialized through Qinyi review and Vitas decision. Approval may authorize a next action, but it does not make the decision lane parallelizable:

- merge decisions
- issue or PR close decisions
- branch deletion
- release or publication
- external system writeback
- M365 or company-side operation
- use of private or company raw material
- identity/persona finalization

## Suggested Cloud Lane Design

```yaml
Cloud_Lanes:
  Lane_A_Open_Core:
    files:
      - "open-core/README.md"
      - "open-core/SPEC.md"
      - "open-core/schemas/*"
      - "open-core/examples/*"
    return_to: "#298"
  Lane_B_Governance:
    files:
      - "docs/github/naming-convention.md"
      - "docs/github/repo-state-map.md"
      - "docs/github/cloud-parallel-workcell-model-v0_1.md"
    return_to: "#298"
  Lane_C_Signals:
    files:
      - "docs/signals/*"
    return_to: "#298"
  Lane_D_Settings:
    files:
      - "docs/settings/*"
      - "schemas/settings-inventory-return.schema.yaml"
    return_to: "#298"
  Lane_E_Review:
    files:
      - "PR diff"
      - "changed file list"
      - "Codex review comments"
    return_to: "Qinyi Gate Review"
```

## Dispatch Template

```yaml
Cloud_Workcell_Dispatch:
  cell_id:
  lane:
  scope:
  files_allowed:
  files_forbidden:
  task:
  red_doors:
  expected_return:
  return_to:
  do_not_claim:
    - "not approved"
    - "not runtime"
    - "not merge approval"
    - "not external writeback"
```

## Return Template

```yaml
Cloud_Workcell_Return:
  cell_id:
  lane:
  files_read:
  files_changed:
  findings:
  conflicts:
  what_changed:
  what_did_not_change:
  risks:
  next_action:
  needs_vitas_decision:
  return_to:
```

## Final Rule

Cloud parallelism is not autonomy. It is bounded concurrency under gate review. Multiple workcells may run at once, but authority remains serialized through Qinyi review and Vitas decision. A Return_Cell collects packets; it does not produce the final Qinyi gate review by itself.