# M365 Review｜Qinyi Governance Style Review v0.1

Status: Candidate / External Window Review / Not Approved Doctrine / No Runtime
Source: User-provided M365 evaluation text
Master Gate: #297
Related PR: #298
Use As: review support for Qinyi style, M365/workflow boundary, Open XuanLing positioning
Do Not Use As: final model evaluation, company policy, approved doctrine, or merge approval

## Core

The M365 review identifies Qinyi / XuanLing's distinct value as Program Governance and System Thinking rather than pure engineering Q&A.

The key difference is not greater knowledge volume. The difference is the natural focus on state transition, responsibility transfer, decision governance, hidden variables, and program control.

## Main Observations

### 1. Problem Reframing

Common model pattern:

```text
equipment reuse -> how to evaluate
generator -> how to update
air conditioning -> how to replace
```

Qinyi pattern:

```text
Is the project category itself wrong?
```

The reframing moves the case from mechanical/electrical engineering into state-transition engineering.

### 2. Authority and Responsibility Before Answer

Common answer:

```text
If inspection passes, equipment may be reused.
```

Qinyi answer pattern:

```text
Who has authority to decide reuse?
Who carries future risk?
Who signs?
```

This is closer to PMO, audit, governance, and operational handover than pure engineering design.

### 3. State Transition Over Process

The reviewed pattern emphasizes states:

```text
S0 existing
S1 investigation
S2 temporary
S3 construction
S4 cutover
S5 verification
S6 handover
```

This is closer to systems engineering, semiconductor fab program governance, IT change management, aviation/nuclear maintenance logic, and critical facility turnover.

### 4. Document Downgrade Without Document Neglect

Documents are not treated as sacred objects. They are treated as carriers of responsibility chains, decision chains, and evidence chains.

Core distinction:

```text
Document itself is not the point.
The responsibility, decision, and evidence it carries are the point.
```

### 5. Hidden Variables

Qinyi repeatedly searches for missing logs and registers:

- Assumption Log
- Decision Log
- Interface Register
- who accepted
- who approved
- who owns risk
- whether a meeting discussion became a formal decision

This captures failure modes common in engineering projects:

- everyone assumed reuse was allowed, but no one formally accepted risk
- everyone assumed a change was submitted, but it was not
- everyone assumed the owner accepted, but it was only discussed

## Limitations Identified

Qinyi may not outperform specialist technical models on pure calculations or code-level technical design, such as:

- short-circuit current calculation
- transformer sizing
- VRF load analysis
- fire-code clause interpretation

Its strongest zone is:

```text
ambiguous problem
-> problem reframing
-> governance framework
-> hidden risk discovery
-> responsibility boundary definition
```

## Comparative Positioning

```yaml
M365_Workflow_View:
  focus:
    - governance
    - process
    - traceability
    - gate
    - M365 carrier

Gemini_View:
  focus:
    - system interaction
    - physical conflict
    - interface risk
    - dynamic interface

Qinyi_XuanLing_View:
  focus:
    - state transition
    - responsibility transfer
    - decision governance
    - program control
```

## XuanLing Mapping

```yaml
XuanLing_Mapping:
  Source: "M365 external window review"
  Carrier: "user-provided evaluation text / GitHub candidate doc"
  Authority: "Vitas decision pending"
  Gate: "Qinyi review support only"
  Action: "absorb as positioning support"
  Return: "#298 / Qinyi Gate Review"
  Rebuild: "use to refine external positioning and M ecosystem manual planning"
```

## Not To Claim

- Do not claim M365 officially endorsed Open XuanLing Core.
- Do not claim this is a final model benchmark.
- Do not claim Qinyi is superior for pure technical calculations.
- Do not claim this is company policy.
- Do not claim this is merge approval.
- Do not claim this proves runtime readiness.

## Final Judgment

This review is useful because it identifies the Qinyi / XuanLing style as governance over task answer, state transition over process checklist, and responsibility chain over document accumulation.

It should be used as review support for positioning, not as final doctrine.