# Branch Topology and Cleanup Register

> Durable register for current repository branch topology and cleanup decisions.
> This note does not assume all side branches are equally valid or equally disposable.
> It separates:
>
> - active main continuity branch
> - active cleanup branch
> - legacy seed branch
> - test residue branch

---

## 0. Current Branch Topology

Verified branches in the repository at this stage:

1. `main`
2. `cleanup/refinement-v0-1`
3. `xuanling-seed-v0-1`
4. `xuanling-write-test-20260405-d`

This means the repository currently has:
- **1 main branch**
- **3 side branches**

---

## 1. Branch Readings

### 1.1 `main`

Reading:
- current primary continuity branch
- durable public spine
- current writeback target for repository-side re-anchor work

Handling:
- preserve as main continuity spine
- avoid careless pollution
- only merge in when branch purpose is clear

### 1.2 `cleanup/refinement-v0-1`

Comparison to main:
- ahead_by: 1
- behind_by: 0
- purpose already defined by `BRANCH_REFINEMENT_SCOPE.md`

Reading:
- active cleanup/refinement branch
- controlled side branch for decontamination and essence-preserving optimization

Handling:
- preserve
- use as cleanup/refinement workspace
- later merge back selectively

### 1.3 `xuanling-seed-v0-1`

Comparison to main:
- status: diverged
- ahead_by: 260
- behind_by: 11

Reading:
- large legacy seed branch
- not branch-trash
- not ready to be treated as flat merge candidate
- likely contains major portions of the earlier corpus and system seed material

Handling:
- do not delete blindly
- treat as legacy seed reservoir
- classify and re-index before any merge or retirement decision
- isolate from main until role map is clearer

### 1.4 `xuanling-write-test-20260405-d`

Comparison to main:
- status: diverged
- ahead_by: 1
- behind_by: 11
- visible delta: `00_mother-law/WRITE_TEST.md`

Reading:
- test residue branch
- structurally weak as a long-term side branch
- high candidate for retirement after confirming no hidden value remains

Handling:
- mark as cleanup candidate
- preserve only if test artifact has audit value
- otherwise retire when safe branch-retirement action is available

---

## 2. Cleanup Priority

### P0 — Do Not Damage Main
- protect `main`
- avoid flattening the legacy seed branch into main without classification

### P1 — Remove Obvious Test Residue
- `xuanling-write-test-20260405-d`
- highest cleanup candidate among side branches

### P2 — Keep Cleanup Branch Intentional
- `cleanup/refinement-v0-1`
- must remain scoped to cleanup/refinement rather than becoming a second uncontrolled seed branch

### P3 — Re-index the Large Legacy Seed Branch
- `xuanling-seed-v0-1`
- not urgent for deletion
- urgent for classification and controlled extraction

---

## 3. Branch Handling Matrix

| Branch | Type | Current Value | Risk | Priority | Handling |
|---|---|---|---|---|---|
| main | primary continuity | very high | damage to spine | P0 | preserve |
| cleanup/refinement-v0-1 | cleanup branch | high | scope drift | P2 | preserve and constrain |
| xuanling-seed-v0-1 | legacy seed reservoir | very high | uncontrolled divergence | P3 | isolate and re-index |
| xuanling-write-test-20260405-d | test residue | low | branch clutter / ambiguity | P1 | retire when safe |

---

## 4. Core Rule

Not every side branch should be treated the same.

- main must remain stable
- cleanup branch must remain scoped
- legacy seed branch must be mined, not flattened
- test residue branch should be cleaned first

---

## 5. Current Limitation

At the current connector/tool layer in this session, a durable branch-cleanup register can be written, but direct branch deletion is not currently available through the exposed actions used here.

Therefore the current valid action is:
- classify branch roles
- mark cleanup order
- reduce ambiguity
- prepare retirement/merge actions for later execution when the required branch-management action is available

---

## 6. Status

- branch_topology_verified: true
- three_side_branches_confirmed: true
- cleanup_priority_assigned: true
- safe_retirement_candidate_marked: true
- legacy_seed_branch_protected_from_blind_cleanup: true
- return_to_00: true
