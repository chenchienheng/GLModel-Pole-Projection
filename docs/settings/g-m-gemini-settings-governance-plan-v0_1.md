# G Ecosystem → M Ecosystem → Gemini Settings Governance Plan v0.1

Status: Candidate / Settings Governance Plan / No Runtime / No External Writeback
Owner: Vitas
Qinyi Role: settings-domain inventory, semantic cleanup, layering, handoff packet, return review
Hazumi / Codex Role: UI, repo, or document construction only after explicit approval
Master Gate: #297
Related PR: #298
Active Bridge Contract: docs/settings/g-ecosystem-phase-stream-contract-v0_2.md

## Core

This plan upgrades Gmail cleanup into ecosystem-level settings governance inside one integration window moving through phases and streams.

Correction: M ecosystem must not be treated as company-only. It has Personal_M and Company_M365 modes. Unknown_M must not enter operational execution.

```text
G ecosystem = personal / cloud / signal / portable carrier
Personal_M = personal Microsoft cloud carrier
Company_M365 = company / enterprise / permissioned operational carrier
Unknown_M = unresolved Microsoft carrier; no execution
Gemini = mirror review / second-model reviewer / not authority
Qinyi = bridge / cleanup / contract / return review
Codex = bounded executor after approval
Vitas = final authority
```

Shared governance syntax:

```text
Source -> Carrier -> Authority -> Gate -> Action -> Return -> Rebuild
```

## Phase Stream Model

```yaml
Phase_Stream_Model:
  one_window: true
  current_phase: "G ecosystem stream inventory after Gmail cleanup"
  streams:
    Gmail: "crossed first cleanup stream; still subject to review"
    Drive: "active inventory candidate"
    Calendar: "inventory candidate"
    Contacts: "inventory candidate"
    Gemini: "mirror review contract candidate"
    GitHub_DCP: "sanitized carrier for docs, issues, schemas, return packets"
  later:
    Personal_M: "personal Microsoft carrier mapping"
    Company_M365: "manual planning and enterprise red-door mapping only"
```

## G Ecosystem

```yaml
G_Settings_Surface:
  Gmail: "attention entry / task signal / billing and security reminders"
  Drive: "document carrier / evidence storage / public-safe and private separation"
  Calendar: "time commitment / deadline / reminder / review gate"
  Contacts: "people and organization index"
```

Gemini is intentionally not listed as an operational G surface. It is a mirror review node.

## Gemini Work Contract

```yaml
Gemini_Work_Contract:
  Role: "Google-side reasoning mirror / second opinion / long-context digestion"
  Can_Do:
    - "digest sanitized or approved-context material"
    - "second-model check of Qinyi candidate outputs"
    - "external signal absorption"
    - "comparison tables"
    - "public-safe rewrite candidate"
  Cannot_Do:
    - "final approval"
    - "company policy decision"
    - "GitHub merge"
    - "company-side writeback"
    - "identity or world-model final lock"
    - "treat Drive documents as approved source by default"
```

Gemini output must return to Qinyi as Facts / Inferences / To Verify / Risk / Suggested Action.

## M Ecosystem Modes

```yaml
M_Ecosystem_Modes:
  Personal_M:
    nature: "personal Microsoft cloud carrier"
    surfaces:
      - "Outlook"
      - "OneDrive"
      - "Calendar"
      - "To Do"
      - "OneNote / Loop if available"
    authority: "Vitas personal authority"
  Company_M365:
    nature: "company / enterprise / permissioned operational carrier"
    surfaces:
      - "Outlook"
      - "Teams"
      - "SharePoint / OneDrive"
      - "Outlook Calendar"
      - "Lists / Planner / To Do"
      - "Power Platform if approved"
    authority: "company / tenant / owner / admin / human gate"
  Unknown_M:
    nature: "unresolved Microsoft carrier"
    rule: "no operational execution"
```

## Boundary

Reusable across sides:

- five-classification model
- Source -> Carrier -> Authority -> Gate -> Action -> Return -> Rebuild
- Candidate / Review Needed / Evidence Pending / Human Gate Required
- Facts / Inferences / To Verify
- Return Packet
- Filter Candidate -> Dry-run Plan -> Human Gate -> Apply if approved -> Verify -> Return

Not transferable:

- raw company material
- private mail contents
- company permissions
- account authorization material
- unreviewed private identity material
- internal decision evidence

## Final Judgment

The task is not Gmail cleanup anymore. The task is ecosystem settings governance inside one integration window moving through phases and streams. G, Personal_M, Company_M365, and Gemini may share governance syntax, but must not share data, authority, or responsibility.