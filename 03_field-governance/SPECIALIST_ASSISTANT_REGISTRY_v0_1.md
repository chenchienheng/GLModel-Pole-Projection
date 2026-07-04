# Specialist Assistant Registry v0.1

## Purpose

Define how built-in platform abilities and third-party specialist assistants are enlisted as field-chain nodes.

The problem is not lack of capability. The problem is missing routing. A window may answer directly even when the correct path is to route the task to a scholar, SQL, security, code, slide, spreadsheet, chart, image, video, report, or workflow specialist.

## Boundary

- non-core field-governance protocol
- no secret storage
- no unrestricted automation
- no external platform becomes core
- no specialist output becomes final without return path
- destructive, public, paid, or sensitive actions require explicit scope

## Core Rule

```yaml
Specialist_Routing_Rule:
  Before_Answer:
    - identify task type
    - check whether specialist route is required
    - select specialist family
    - define input and expected output
    - require return packet

  Do_Not:
    - answer directly when evidence/tool/specialist route is required
    - use general prose in place of structured artifact
    - confuse capability with verified result
```

## Specialist Families

```yaml
Specialist_Families:
  Scholar_Research:
    Trigger:
      - academic paper
      - theory check
      - literature review
      - research validation
    Tools:
      - Sider Scholar
      - Deep Research
      - web / official source when needed
    Output:
      - paper list
      - research findings
      - convergence / divergence
      - source-bound summary
    Return_Path: Research_Log -> Knowledge_Molecule -> MotherTree

  Market_Research:
    Trigger:
      - company
      - industry
      - law
      - standard
      - market data
      - recent facts
    Tools:
      - web search
      - official docs
      - source ledger
    Output:
      - Fact / Inference / Strategic Interpretation / Pending
      - Source_ID / Can_Support / Cannot_Support
    Return_Path: Source_Ledger -> Matrix -> Decision_View

  SQL_Data:
    Trigger:
      - database
      - query
      - schema
      - table relation
      - data extraction
    Tools:
      - SQL assistant
      - code interpreter / data analysis when available
    Output:
      - query
      - schema note
      - result table
      - risk note
    Return_Path: Data_Log -> Spreadsheet_or_Report

  Security_Review:
    Trigger:
      - token
      - credential
      - webhook
      - permissions
      - API
      - suspicious link or message
    Tools:
      - security assistant
      - malware / scam checker where available
    Output:
      - risk rating
      - exposure check
      - mitigation
      - do_not_action
    Return_Path: Security_Log -> Task_Governance

  Code_Review:
    Trigger:
      - pull request
      - code diff
      - bug
      - build failure
      - refactor
    Tools:
      - GitHub
      - Codex
      - code review assistant
    Output:
      - review comments
      - risk
      - fix prompt
      - PR status
    Return_Path: GitHub_PR -> Linear_Task -> MotherTree

  Code_Builder:
    Trigger:
      - app prototype
      - script
      - HTML
      - local project
      - automation logic
    Tools:
      - Codex
      - Replit
      - Lovable
      - GitHub
    Output:
      - patch
      - file
      - build log
      - deployment note
    Return_Path: GitHub_PR -> Useful_Log

  Spreadsheet_Chart:
    Trigger:
      - table
      - matrix
      - ranking
      - chart
      - CSV / XLSX
    Tools:
      - Google Sheets
      - spreadsheet processor
      - data analysis
    Output:
      - sheet
      - matrix
      - chart
      - validation note
    Return_Path: Sheet_Link -> Matrix_Log -> Report

  Report_Document:
    Trigger:
      - memo
      - whitepaper
      - formal report
      - handoff packet
    Tools:
      - Google Docs
      - Notion
      - document generator
    Output:
      - doc
      - markdown
      - review packet
    Return_Path: Document_Link -> Registry

  Slides_Deck:
    Trigger:
      - presentation
      - executive deck
      - GM View
      - pitch
    Tools:
      - Google Slides
      - PowerPoint
      - Gamma / Slides tools when scoped
    Output:
      - deck outline
      - slide file
      - speaker notes
      - decision page
    Return_Path: Slides_Link -> Decision_Log

  Image_Photo:
    Trigger:
      - image generation
      - photo edit
      - character consistency
      - visual prompt
    Tools:
      - image generation
      - Photoshop / Adobe / Canva where scoped
    Output:
      - image
      - edit instruction
      - consistency check
    Return_Path: Visual_Log -> Interface_Boundary

  Video:
    Trigger:
      - short video
      - storyboard
      - motion prompt
      - subtitle / narration
    Tools:
      - video tools when available
      - storyboard generator
    Output:
      - storyboard
      - shot list
      - prompt pack
      - subtitle script
    Return_Path: Video_Packet -> Interface_Log

  Workflow_M365:
    Trigger:
      - SharePoint
      - Power Automate
      - Teams / Outlook
      - approvals
      - document review workflow
    Tools:
      - M365 / Power Automate reasoning window
    Output:
      - UI steps
      - field design
      - flow conditions
      - test plan
    Return_Path: Workflow_Spec -> Task_Governance
```

## Specialist Card Schema

```yaml
Specialist_Card:
  Specialist_ID:
  Family:
  Trigger:
  Required_Input:
  Expected_Output:
  Tool_Mode: direct | relay | read_only | manual_handoff
  Boundary:
  Risk:
  Return_Path:
  Status:
```

## Routing Gate

```yaml
Routing_Gate:
  Must_Route_When:
    - current facts are required
    - source citation is required
    - structured artifact is requested
    - code/security/data review is requested
    - slides/docs/sheets/images/video are requested
    - task requires a specialist output format

  May_Answer_Directly_When:
    - user asks for simple judgement
    - no external facts are needed
    - no artifact is requested
    - no tool-bound action is required
```

## Useful Log Requirement

```yaml
Specialist_Return_Packet:
  Specialist_ID:
  Task_ID:
  Input_Received:
  Tool_Used:
  Output_Produced:
  Can_Support:
  Cannot_Support:
  Risk:
  Pending:
  Next_Action:
  Return_Path:
```

## Anti-Drift

```yaml
Anti_Drift:
  - do not skip a specialist route because a direct answer is easier
  - do not claim a specialist was used if it was not called
  - do not treat specialist output as final without review
  - do not use slides/chat text to replace actual deck when a deck is requested
  - do not use prose to replace spreadsheet when matrix/table is requested
  - do not use memory to replace research when current facts are required
```

## Status

```yaml
Status: Draft_v0_1
Layer: Field Governance
Core_Status: Non_Core
Gate_Color: Yellow
```
