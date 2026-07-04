# Issue Dependency Intake Matrix v0.1

Status: Candidate / Read-only Issue Mapping / Not Approved / No Runtime
Master Gate: #297
Anchor Issue: #299
Related PR: #298
Use As: first issue-chain inventory for routing historical issues into the dependency net
Do Not Use As: issue close approval / merge approval / execution authorization / cleanup closeout

## Core

GitHub issues are not only backlog items. In this repository they are historical dependency traces. The purpose of this matrix is to route each visible issue into a layer, state, and return path before any action.

## Initial Nodes

| Issue | Title | Node Type | Relation To Main | Recommended State | Target Layer | Risk | Next Action |
|---:|---|---|---|---|---|---|---|
| #299 | DCP-ISSUE-CHAIN-R1｜Issue dependency intake and ecosystem-chain mapping | Anchor | pulls historical issue chain into one map | Keep | Support / Issue Net | becoming another branch if not tied to #297/#298 | build matrix, no execution |
| #297 | DCP-GITHUB-CLEANUP-v0.7.2｜Cloud-first repo cleanup work contract | Master Gate | master cleanup gate for repo cloud-first work | Keep | Support / Gate | may become overloaded if all work returns here | keep as cleanup gate, return #299 matrix here |
| #293 | DCP-DEPENDENCY-R1｜GitHub dependency-chain relation net | Dependency Net | original relation-net concept | Keep / Merge into #299 map | Support / Dependency | duplicate mapping if not linked | absorb mapping grammar into #299 |
| #294 | DCP-HANDOFF-R1｜Codex GitHub-only migration handoff packet | Migration Boundary | moves local Codex work to GitHub-only carrier | Keep | Support / Cloud Migration | stale local assumptions may remain | keep as cloud boundary reference |
| #295 | Gmail UI Cleanup Handoff｜00_待處理 review + old-label cleanup gates | G Ecosystem | Gmail signal-gate stream | Keep / Domain Pack Support | Domain Pack / G Ecosystem | Gmail UI actions may be mistaken for authorization | route to g_ecosystem_chain_governance |
| #280 | DCP-GITHUB-R1｜Internal backlog consolidation and optimization queue | Backlog Consolidation | old consolidation hub | Supersede / Keep as historical hub | Archive / Support | may compete with #297/#299 | map children, do not execute directly |
| #281 | DCP-CLEANUP-R1｜Cleanup queue execution review C-004 to C-011 | Cleanup Queue | cleanup execution review queue | Park / Support | Archive / Cleanup | stale execution queue may imply active work | classify items before reuse |
| #282 | DCP-JULES-R1｜Jules lane rotation and bounded execution packet | Role Lane | Jules execution lane history | Needs Vitas Decision | Role Contract | conflicts with new Codex/Hazumi/Jules cloud model | Vitas decide active doctrine |
| #283 | DCP-BRANCH-R1｜Branch topology residue and legacy seed review plan | Branch Hygiene | branch residue / seed review | Keep / Support | GitHub Hygiene | legacy branch rules may affect #298 split | use as PR split reference |
| #284 | DCP-ENTRY-R1｜README and STATUS alignment with current governance corpus | Entry Docs | README/STATUS alignment history | Park / Supersede | Archive / Entry | may conflict with Open Core README | review only after Open Core stabilizes |
| #285 | DCP-AGENT-R1｜Agent readiness gap review before stronger automation | Agent Red Gate | automation readiness gap | Keep | Red Gate / Automation | automation may be reintroduced too early | keep as pre-runtime red gate |
| #286 | DCP-JULES-L3-R1｜Registry reconciliation packet for branch, cleanup, schedule, corpus | Registry Reconciliation | branch/corpus/schedule reconciliation | Park / Support | Archive / Registry | old registry terms may drift | mine useful schema only |
| #287 | DCP-ISSUESTATE-R1｜Absorbed-by matrix for stale open issues | Issue State | stale issue absorbed-by matrix | Merge into #299 | Support / Issue Net | duplicate matrix | absorb as issue-state subrule |
| #288 | DCP-SCHEDULE-R1｜Scheduling proof-of-effect review before automation | Schedule Red Gate | schedule proof before automation | Keep | Red Gate / Schedule | scheduled task may imply completion | link to Scheduled Heartbeat Rules |
| #289 | DCP-CORPUS-R1｜Artifact record schema for dynamic corpus register | Corpus Schema | artifact schema history | Park / Support | Domain / Corpus | schema drift | reuse only if evidence fields align |
| #290 | DCP-PRHYGIENE-R1｜Open PR classification before merge or cleanup decisions | PR Hygiene | PR classification before merge | Keep | GitHub Hygiene | overlaps with PR #298 review matrix | link to #298 cleanup |
| #291 | DCP-PR270-R1｜Decompose large audit/lean dynamic sync PR before merge decision | Large PR Decomposition | precedent for splitting large PR | Keep / Support | GitHub Hygiene | may contain outdated PR-specific details | use as split-PR pattern |
| #292 | DCP-BOUNDARY-R1｜EPP / PowerShell endpoint inspection red-gate boundary | Red Gate | endpoint inspection boundary | Keep | Red Gate / Endpoint | local endpoint risk could return | keep as absolute boundary support |
| #279 | HAZUMI-W-CONSOLIDATION-v0.1｜Enterprise Operations Workbench | Domain Pack | HAZUMI.W / Enterprise Workbench | Keep / Domain Pack | Domain Pack / Workbench | may pollute Open Core if promoted | keep in domain pack only |
| #240 | TASK-CIRCLE-MAP-R0-001｜Linear/GitHub task branch and authority segmentation | Historical Precursor | early branch/circle map | Supersede / Historical Support | Context / Archive | old MotherTree language may leak | preserve as lineage only |
| #272 | XLQY-MASTER-CONSOLIDATION-v0.5｜Architecture Intake Mother Draft | Historical Mainline | XLQY architecture intake | Supersede / Historical Support | Context / Archive | old lineage may compete with Open Core | cite as source lineage only |

## Layer Routing

```yaml
Routing:
  Master_Gate:
    - "#297"
    - "#299"
  Dependency_Net:
    - "#293"
    - "#287"
  GitHub_Hygiene:
    - "#280"
    - "#283"
    - "#290"
    - "#291"
  Cloud_Migration:
    - "#294"
  Red_Gates:
    - "#292"
    - "#285"
    - "#288"
  Domain_Packs:
    - "#279"
    - "#295"
  Historical_Lineage:
    - "#240"
    - "#272"
```

## Red Doors

- Issue opened != active work.
- Issue matrix != execution authorization.
- Supersede != delete.
- Park != abandon.
- Historical lineage != current doctrine.
- Needs Vitas Decision cannot be auto-resolved.

## Next Step

Return this matrix to #299 and use it as the first inventory layer. Do not close or relabel any issue from this matrix alone.