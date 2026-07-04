# Recomposition Engine v0.1

## Purpose

Define the minimal recomposition engine that turns Knowledge Molecules into usable outputs.

This engine connects Knowledge Molecule, Co-Field Dependency, Linear task queue, GitHub PR chain, and Interface outputs.

## Boundary

- non-core
- schema and routing only
- no database implementation
- no runtime automation requirement
- no secret storage
- no formal conclusion without evidence boundary
- no public output without interface review

## Core Idea

Knowledge is not used by volume. Knowledge is recomposed by constraints.

```text
Task vector + role context + boundary + verified molecules -> structured output + return path
```

## Input Schema

```yaml
Recomposition_Input:
  Task_Vector:
  Role_Context:
  Boundary:
  Target_Output:
  Molecule_Set:
    - Molecule_ID:
      Entity_ID:
      Source_ID:
      Claim_ID:
      Role_ID:
      Vector_ID:
      Weight_Profile:
      Can_Support:
      Cannot_Support:
      Boundary_Level:
      Verification_Status:
  Return_Path:
```

## Process

```yaml
Recomposition_Process:
  1_Filter:
    - remove molecules outside boundary
    - hold molecules with missing Source_ID
    - separate Pending from formal use

  2_Rank:
    - rank by Weight_Profile
    - prefer official / primary source where required
    - downgrade weak signal instead of deleting it

  3_Assemble:
    - group by Role_ID
    - group by Vector_ID
    - connect Dependency_Link where available
    - preserve Can_Support and Cannot_Support

  4_Verify:
    - check evidence level
    - check role boundary
    - check no overclaim
    - check return path exists

  5_Output:
    - produce target format
    - attach Source_ID
    - attach Boundary_Level
    - attach Return_Path
```

## Output Types

```yaml
Recomposition_Output_Types:
  Report:
    Use: strategy memo, evidence summary, branch feedback
    Requires: Source_ID / Can_Support / Cannot_Support

  Matrix:
    Use: relationship matrix, dependency matrix, commander matrix
    Requires: rows with role, vector, boundary, return path

  Task_Card:
    Use: Linear / ClickUp / Asana issue
    Requires: objective, acceptance criteria, blocker, return path

  PR_Draft:
    Use: GitHub branch / file / PR body
    Requires: non-core boundary, changed artifact, review gate

  Interface_Output:
    Use: Qinyi / AEO / distribution copy
    Requires: public/private boundary and no private source exposure
```

## Compatibility Map

```yaml
Compatibility:
  Knowledge_Molecule_Model:
    Provides: Molecule_Set and evidence boundaries

  Co_Field_Dependency_Model:
    Provides: Node, Field, Dependency, Matrix, Return_Path

  Cluster_Initiative_Rhythm:
    Provides: Report / Prepare / Activate / Return / Calibrate rhythm

  Commander_Hierarchy:
    Provides: node rank and routing authority

  External_Round_Ledger:
    Provides: cross-window continuity and next-round prompt

  AEO_Interface_Adapter:
    Receives: Interface_Output

  Linear_Task_Queue:
    Receives: Task_Card

  GitHub_PR_Chain:
    Receives: PR_Draft and evidence record
```

## Formal Use Gate

```yaml
Formal_Use_Gate:
  Can_Formalize_When:
    - Source_ID exists
    - Can_Support is explicit
    - Cannot_Support is explicit
    - Boundary_Level permits formal use
    - Verification_Status is Hardened or Conditional_Hardened

  Must_Downgrade_When:
    - source is media-only
    - claim is inferred
    - role boundary is unclear
    - source cannot support proposed conclusion
    - verification is pending

  Must_Reject_When:
    - claim lacks source
    - claim exposes private source
    - claim changes core doctrine without review
    - output lacks return path
```

## Return Packet

```yaml
Recomposition_Return_Packet:
  Task_Vector:
  Target_Output:
  Molecules_Used:
  Molecules_Held:
  Key_Boundaries:
  Output_Produced:
  Verification_Status:
  User_Decision_Needed:
  Next_Task:
  Return_Path:
```

## Anti-Drift Rules

```yaml
Anti_Drift:
  - do not turn weak signal into fact
  - do not turn capability into willingness
  - do not turn investment into deal source
  - do not expose private source in interface output
  - do not use Pending as formal conclusion
  - do not delete Radar nodes solely because they are weak
  - do not let output format override evidence boundary
```

## Status

```yaml
Status: Draft_v0_1
Layer: Field Governance
Core_Status: Non_Core
Gate_Color: Yellow
```
