# Knowledge Molecule Model v0.1

## Purpose

Define a minimal structure for decomposed knowledge units that can be recomposed without storing full datasets.

## Boundary

- non-core
- no data storage requirement
- no registry overwrite
- no external system binding

## Core Idea

Knowledge is stored as molecules, not documents.

Recomposition is driven by constraints, not retrieval volume.

## Molecule Schema

```yaml
Knowledge_Molecule:
  Molecule_ID:
  Entity_ID:
  Source_ID:
  Claim_ID:
  Role_ID:
  Vector_ID:
  Language_ID:
  Weight_Profile:
  Can_Support:
  Cannot_Support:
  Boundary_Level:
  Recompose_Use:
  Return_Path:
  Verification_Status:
```

## Recomposition Rule

```yaml
Recomposition:
  Input:
    - Task_Vector
    - Role_Context
    - Boundary
  Process:
    - Filter by Boundary_Level
    - Rank by Weight_Profile
    - Select valid Claim_ID
    - Assemble by Vector_ID
  Output:
    - Structured result
    - Traceable Source_ID
    - Return_Path preserved
```

## XuanLing Mapping

```yaml
Mapping:
  Molecule:
    maps_to: node fragment
  Recomposition:
    maps_to: XuanLing Recomposition Force
  Weight_Profile:
    maps_to: evidence strength
  Boundary_Level:
    maps_to: usable constraint
```

## Status

```yaml
Status: Draft_v0_1
Layer: Field Governance
Core_Status: Non_Core
Gate_Color: Yellow
```
