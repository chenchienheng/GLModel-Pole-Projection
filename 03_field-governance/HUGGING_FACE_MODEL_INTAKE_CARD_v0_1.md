# Hugging Face Model Intake Card v0.1

## Purpose

Define a standard intake card for Hugging Face models, datasets, Spaces, and papers.

The goal is to turn external model ecosystems into structural nutrients without allowing any model, dataset, Space, or paper to become XuanLing core doctrine.

## Boundary

- non-core
- knowledge intake only
- no model becomes doctrine
- no deployment by default
- no paid compute by default
- no private or sensitive data upload
- license and usage boundary required
- user or explicit scope required for jobs, deployment, or data upload

## Intake Card Schema

```yaml
HF_Intake_Card:
  Intake_ID:
  Repo_ID:
  Type: model | dataset | space | paper | doc
  Publisher:
  Source_URL:
  Source_ID:
  Task:
  Modality:
  Language:
  License:
  Architecture:
  Size:
  Context_Window:
  Capability:
  Limitations:
  Risk:
  Use_As:
  Do_Not_Use_As:
  Boundary_Level:
  Verification_Status:
  Decision_State: Intake | Candidate | Hold | Reject
  Return_Path:
```

## Required Checks

```yaml
Required_Checks:
  Source_Check:
    - read model card / dataset card / paper page when available
    - record Source_ID
    - record publisher or uploader

  License_Check:
    - identify license
    - mark unknown license as Hold
    - do not use restricted asset without explicit scope

  Capability_Check:
    - identify task family
    - identify modality
    - identify known limitations
    - identify whether this is structure nutrient or deployable candidate

  Boundary_Check:
    - no private data upload
    - no paid compute without explicit scope
    - no production deployment by default
    - no model replaces MotherTree / CoreTri
```

## Decision States

```yaml
Decision_States:
  Intake:
    Meaning: raw candidate captured for review

  Candidate:
    Meaning: structurally useful and boundary is acceptable

  Hold:
    Meaning: useful but license, cost, data, or safety boundary is unclear

  Reject:
    Meaning: unusable, unsafe, irrelevant, or incompatible with XuanLing boundary
```

## Structural Nutrient Mapping

```yaml
Nutrient_Mapping:
  Model_Family:
    Use: commander capability comparison / routing inspiration

  Model_Card:
    Use: node card metadata and limitation pattern

  Dataset_Card:
    Use: source boundary and data provenance pattern

  Space:
    Use: interface prototype and demo pattern

  Paper:
    Use: theoretical or architectural nutrient after evidence boundary review
```

## Use / Do Not Use

```yaml
Use_As:
  - model ecosystem scan
  - capability matrix input
  - commander routing nutrient
  - architecture pattern reference
  - multimodal task family reference
  - license boundary example

Do_Not_Use_As:
  - core doctrine
  - automatic deployment target
  - proof of truth
  - replacement for XuanLing axis
  - public claim without source boundary
  - upload target for private material
```

## Output Template

```yaml
HF_Intake_Output:
  Intake_ID:
  Repo_ID:
  Type:
  Task:
  Capability_Summary:
  Boundary_Summary:
  License_Status:
  Risk_Level:
  Decision_State:
  Recommended_Next_Action:
  Return_Path:
```

## Return Packet

```yaml
HF_Intake_Return_Packet:
  Intake_Batch:
  Items_Reviewed:
  Candidates:
  Holds:
  Rejects:
  Risks:
  Next_Scan:
  User_Decision_Needed:
  Return_Path:
```

## Anti-Drift Rules

```yaml
Anti_Drift:
  - do not treat model popularity as evidence of fit
  - do not treat open weights as unrestricted use
  - do not treat benchmark claims as deployment proof
  - do not ingest private data into external model hub
  - do not let model ecosystem define XuanLing core
  - do not skip license and boundary checks
```

## Status

```yaml
Status: Draft_v0_1
Layer: Field Governance
Core_Status: Non_Core
Gate_Color: Yellow
```
