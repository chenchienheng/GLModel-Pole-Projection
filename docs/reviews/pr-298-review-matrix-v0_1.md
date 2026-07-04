# PR #298 Review Matrix v0.1

Status: Candidate / Review Matrix / Not Approved / No Runtime
Scope: PR #298 cleanup planning
Use As: review support for Vitas, W7, W1, and authorized construction
Do Not Use As: merge approval, closeout, or final decision

## Current Gate

```yaml
PR_298:
  status: "Umbrella Draft / Review Needed / Do Not Merge Yet"
  runtime: false
  merge_ready: false
  primary_issue: "scope growth and semantic boundary cleanup"
```

## Review Categories

1. Evidence boundary gaps
2. Microsoft carrier boundary
3. Mirror review boundary
4. No-runtime wording
5. Open Core neutrality
6. GitHub template and schema alignment
7. Domain example wording
8. PR scope hygiene

## Matrix

| ID | Area | Issue | Priority | Candidate Fix | Vitas Decision |
|---|---|---|---|---|---|
| R1 | Return packet schema | evidence levels were not bound to claims | Must | add evidence registry and evidence refs per claim | No |
| R2 | G return packet | return packet lacked user-reported / verified boundary | Must | add evidence boundary fields | No |
| R3 | Settings schema | mirror review was mixed with G surfaces | Must | keep mirror review separate from G surfaces | No |
| R4 | G stream template | no-runtime template allowed Approved / BuildReady / Runtime | Must | use Signal / Candidate / Review_Needed / Evidence_Pending states | No |
| R5 | M settings plan | M was treated as company-only | Must | split Personal_M / Company_M365 / Unknown_M | No |
| R6 | M365 contract | rule language implied settings writeback path | Must | keep all rules as candidate / manual-guide language | No |
| R7 | Cloud workcells | final authority actions could be read as parallelizable | Must | serialize final decisions through Qinyi review and Vitas decision | No |
| R8 | Open Core canonical gate | internal role routing leaked into canonical gate | Must | use role-neutral wording; keep persona mapping in domain/internal docs | No |
| R9 | Issue template | issue form used about instead of description | Must | use description key | No |
| R10 | Gate schema | schema did not match examples | Must | expand schema or align examples | No |
| R11 | Signal notes | some evidence states mixed facts with To_Verify | Must | move uncertain items to To_Verify and keep schema values | No |
| R12 | MEP example | example still reads too close to a permitted option | Must | keep as Review_Needed and neutral authority | No |
| R13 | PR scope | Open Core, settings, signals, packs, internal notes are in one PR | Should | split PR or mark umbrella draft with lane review | Yes |
| R14 | role doctrine | old Codex/Jules/Hazumi split may conflict with current cloud model | Should | Vitas decides current role doctrine | Yes |

## Patch Sets

```yaml
Patch_Sets:
  A_Evidence:
    status: "partially applied"
  B_Carrier_Boundary:
    status: "partially applied"
  C_No_Runtime:
    status: "partially applied"
  D_Open_Core_Neutrality:
    status: "partially applied"
  E_Domain_Wording:
    status: "partially pending"
```

## Manual Needed

- decide split PR vs patch-in-place
- decide current Codex / Hazumi / Jules role doctrine
- decide whether Personal_M / Company_M365 / Unknown_M becomes the shared Microsoft carrier standard
- decide whether #298 remains umbrella draft after cleanup

## Final Note

PR #298 has useful content, but it should remain review-needed until the must-fix list is closed or split into reviewable lanes.
