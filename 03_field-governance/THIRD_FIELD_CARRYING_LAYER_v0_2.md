# Third Field Carrying Layer v0.2

## Purpose

The Third Field is a carrying and buffering layer between external signals and the internal invariant core.

It prevents external signal noise, tool output, or window-specific wording from directly rewriting core architecture.

## Boundary

This file is not core doctrine.
It does not define ontology.
It does not create runtime, API, database, or automation behavior.
It does not overwrite MotherTree, CoreTri, CloudTop, or existing registry files.

## Carrying Capacity Rule

A connection being possible does not mean the destination chain can safely carry every load.

Each window, chain, tool, and commander surface has a load-bearing range.

The Third Field checks:

- signal type
- task weight
- target capability
- privacy or evidence boundary
- overload risk
- return path

If the target cannot safely carry the load, the signal should be held, redirected, downgraded, or returned for MotherTree review.

## Relation to CoreTri

CoreTri decides whether field conditions are sufficient for action.
The Third Field provides carrying-capacity and routing context for that judgment.

## Relation to Field-Generation Center

The Field-Generation Center maintains the wider operating field.
The Third Field is a local buffer and carrying layer inside that field.

## Return Packet

```yaml
Third_Field_Return_Packet:
  Signal_ID:
  Source:
  Target_Window:
  Load_Type:
  Carrying_Capacity_Check: Pass | Hold | Redirect | Reject
  Boundary_Check:
  Risk:
  Recommended_Action:
  Return_Path: MotherTree / CoreTri / Closure Gate
```

## Status

```yaml
Status: Draft_v0_2
Layer: Field Governance
Core_Status: Non_Core
Gate_Color: Yellow
```
