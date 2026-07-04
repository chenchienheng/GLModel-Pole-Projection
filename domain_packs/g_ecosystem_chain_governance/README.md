# G Ecosystem Chain Governance Domain Pack v0.1

Status: Candidate / Internal Learning / Domain Pack Support / Not Approved / No Runtime
Source: User-provided Qinyi reviews on G ecosystem carrier governance
Evidence Level: Direct Material / User Relay / Local Carrier Not Verified by Qinyi
Use As: Qinyi learning node, Google carrier domain pack candidate, carrier governance example
Do Not Use As: Google official architecture, formal deployment, Approved Runtime, Drive verification proof, external automation authorization
Related PR: #298
Master Gate: #297

## Core

This domain pack reframes Google tools from scattered utilities into a carrier governance chain:

```text
Gmail Signal → Qinyi Judgment → Drive Carrier → Gemini Mirror Review → Return Packet → Vitas Decision → Archive / Upgrade / Schedule
```

This is not Gmail cleanup. It is a G ecosystem carrier governance model.

## Evidence Boundary

Qinyi does not directly verify the user's Google Drive folders or files in this packet. Any statement about existing Drive structure is treated as user-reported material.

```yaml
Evidence_Boundary:
  user_reported:
    - "Drive carrier skeleton may exist"
    - "G ecosystem audit or chain-flow documents may exist"
  qinyi_verified: false
  status: "Direct Material / User Relay / Local Carrier Not Verified by Qinyi"
```

## Tool Roles

```yaml
G_Ecosystem_Roles:
  Gmail:
    role: "Signal Gate"
    not: "task database / source of final truth"
  Qinyi:
    role: "judgment / cleanup / translation / return framing"
    not: "final approver / external executor"
  Drive:
    role: "carrier / index / archive candidate"
    not: "completion proof"
  Gemini:
    role: "mirror review / second view / challenge"
    not: "authority / approval"
  Calendar:
    role: "time gate / scheduled review entry"
    not: "task evidence database"
  Contacts:
    role: "human / organization index"
    not: "authorization proof"
  Vitas:
    role: "decision / upgrade / archive / schedule authority"
    not: "automated runtime"
```

## Semantic Red Doors

- Gmail Signal != Task Approval.
- Gmail Label != Responsibility.
- Drive File != Closeout.
- Drive Folder != Source of Truth.
- Gemini Review != Approval.
- Gemini Summary != Decision.
- Calendar Event != Execution.
- Scheduled Follow-up != Completion.
- Contacts Record != Authority.
- Archive Candidate != Resolved.
- Upgrade Candidate != Approved Contract.
- Mirror Review != Human Judgment.

## Required Hardening Fields

```yaml
G_Ecosystem_Signal_Record:
  signal_id:
  received_from: "Gmail / Drive / Calendar / Gemini / Manual"
  date_received:
  signal_type:
    - "Information"
    - "Task"
    - "Risk"
    - "Opportunity"
    - "Schedule"
    - "Document"
    - "Relationship"
    - "System Alert"
    - "Archive Only"
  source_summary:
  current_carrier:
  status:
    - "Signal"
    - "Candidate"
    - "Active Carrier"
    - "Upgrade Candidate"
    - "Deliverable"
    - "Archive Candidate"
  carrier_decision:
    - "Archive"
    - "Drive"
    - "Calendar"
    - "Gemini Mirror Review"
    - "Vitas Decision"
    - "Upgrade Candidate"
    - "Park"
  requires_qinyi_judgment: true
  requires_gemini_mirror_review: false
  requires_vitas_decision: true
  return_path:
```

## Learning Rule

Not every signal needs action, but every signal needs positioning.

## Final Judgment

This domain pack should be used as a Google ecosystem carrier governance example. It is not Open Core itself and not a claim of Google-side deployment or automation.