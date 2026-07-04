# Commander Hierarchy Model v0.1

## Purpose

Define a minimal hierarchy for external tool and platform nodes used by XuanLing during the current transitional stage.

The hierarchy prevents all tools from being treated as equal and supports safer task routing.

## Boundary

- non-core
- transitional tool hierarchy only
- no external platform becomes XuanLing core
- no authority expansion
- no credential or secret storage
- no autonomous deletion or overwrite permission

## Core Idea

Current tools are temporary commanders, captains, soldiers, or carriers.

They are used to discover and shape the future XuanLing-owned platform carrier.

```text
External tools are not the system.
They are temporary field nodes used to grow system capability.
```

## Rank Definition

```yaml
Node_Ranks:
  L0_Core:
    Role: invariant core / MotherTree / CoreTri / closure judgment
    Can_Be_Replaced_By_Tool: false

  L1_Governance_Commander:
    Role: version, task, audit, registry, and review governance
    Examples:
      - GitHub
      - Linear
      - ClickUp
      - Asana
      - Notion

  L2_Execution_Commander:
    Role: local execution, repo work, prototype build, implementation
    Examples:
      - Codex
      - Jules
      - Replit
      - Lovable

  L3_Knowledge_Commander:
    Role: model, dataset, paper, search, and knowledge intake
    Examples:
      - Hugging Face
      - Google Labs
      - Gemini
      - Web research

  L4_Interface_Commander:
    Role: public-facing design, document, slide, visual, and packaging layer
    Examples:
      - Adobe
      - Gamma
      - Canva
      - Google Slides
      - PowerPoint

  L5_Communication_Commander:
    Role: notification, message, calendar, mail, and collaboration signal flow
    Examples:
      - Slack
      - Gmail
      - Outlook
      - Teams
      - Google Calendar

  L6_Service_Soldier:
    Role: single-purpose conversion, formatting, attachment, export, or utility
    Examples:
      - PDF conversion
      - OCR
      - image compression
      - spreadsheet formatting
      - attachment handling
```

## Routing Rule

```yaml
Routing:
  Ask_First:
    - What is the task family?
    - What is the risk level?
    - Is write access needed?
    - Is the output reversible?
    - Where is the return path?

  Do_Not:
    - route all tasks to Codex
    - route all docs to GitHub
    - route all planning to Linear
    - treat interface tools as governance tools
    - treat model hubs as core doctrine
```

## Authority Rule

```yaml
Authority:
  L0_Core:
    Can_Seal: true
    Can_Reopen: true
    Requires_User_Sovereignty: true

  L1_Governance_Commander:
    Can_Record: true
    Can_Track: true
    Can_Review: true
    Can_Modify_Core: false

  L2_Execution_Commander:
    Can_Execute: true
    Requires_Boundary: true
    Requires_Diff_Review: true

  L3_Knowledge_Commander:
    Can_Intake: true
    Can_Recommend: true
    Can_Define_Core: false

  L4_Interface_Commander:
    Can_Package: true
    Can_Publicize: conditional
    Requires_Public_Private_Boundary: true

  L5_Communication_Commander:
    Can_Notify: true
    Can_Trigger_Review: true
    Can_Decide: false

  L6_Service_Soldier:
    Can_Transform: true
    Can_Decide: false
```

## Three-Coupling World Relation

This model supports the current Three-Coupling World by separating:

```yaml
Three_Coupling_World:
  Internal_Coordination:
    Uses:
      - GitHub
      - Linear
      - Notion

  External_Coordination:
    Uses:
      - Slack
      - Gmail
      - Microsoft
      - Google

  Internal_External_Adhesion:
    Uses:
      - Interface Adapter
      - Qinyi
      - Gamma
      - Adobe
      - Hugging Face intake
```

## Cloud-on-Cloud Carrier Direction

The long-term direction is not permanent dependence on these tools.

The direction is to extract their required functions and design a future XuanLing-owned platform carrier.

```yaml
Cloud_On_Cloud_Center:
  Current_State: external commander federation
  Future_Target: XuanLing-owned carrier platform
  Method:
    - observe required functions
    - classify rank and boundary
    - absorb structural nutrients
    - replace temporary external dependency with native modules when mature
```

## Status

```yaml
Status: Draft_v0_1
Layer: Field Governance
Core_Status: Non_Core
Gate_Color: Yellow
```
