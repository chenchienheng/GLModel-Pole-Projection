# G Ecosystem Phase-Stream Contract v0.2

Status: Candidate / Phase-Stream Contract / No Runtime / No External Writeback
Master Gate: #297
Related PR: #298
Supersedes: docs/settings/g-to-m-ecosystem-bridge-window-contract-v0_1.md as wording basis
Use As: shared instruction for the single integration window while it moves from Gmail into other G ecosystem streams and later prepares M ecosystem mapping
Do Not Use As: Gmail settings approval / M365 authorization / company deployment / Gemini final authority / Codex automation approval

## Core Correction

This is not a set of separate ecosystem windows. It is one integration window moving through different phases and streams.

The current phase has just crossed Gmail cleanup and is now organizing the other streams under the G ecosystem: Drive, Calendar, Contacts, Gemini, and GitHub/DCP handoff material.

Short rule:

```text
One window, multiple phases, multiple streams.
G first for integrated personal-cloud governance.
M later for enterprise-permission operational governance.
```

## Phase Model

```yaml
G_Ecosystem_Phases:
  Phase_0_Gmail_Cleanup:
    status: "crossed / still needs review follow-up"
    role: "attention entry, label model, true action candidate cleanup"
    return_to: "G ecosystem integration window"
  Phase_1_G_Stream_Inventory:
    status: "active now"
    streams:
      Drive: "document carrier and evidence boundary"
      Calendar: "time gate and review reminder"
      Contacts: "people and organization index"
      Gemini: "second-model mirror and Google-side reasoning support"
      GitHub_DCP: "sanitized handoff and return-packet carrier"
  Phase_2_G_Stream_Normalization:
    status: "candidate next"
    role: "align naming, labels, folders, reminders, and return formats"
  Phase_3_G_to_M_Mapping:
    status: "candidate later"
    role: "map governance grammar from G surfaces to M surfaces without moving data or authority"
  Phase_4_M_Manual_Planning:
    status: "reserved"
    role: "M365 manual guide and company-side planning candidate only"
```

## Why G First

G ecosystem has higher integration density for personal-cloud governance:

- Gmail gives attention and task signals.
- Drive gives document carrier and evidence boundaries.
- Calendar gives time gates.
- Contacts gives relationship indexing.
- Gemini gives Google-side second-model review.
- GitHub/DCP gives sanitized construction and return traces.

This makes G ecosystem a better first integration field for governance grammar.

## Why M Later

M ecosystem is not less important. It is the enterprise friction substrate. It requires stronger clarity before any action.

```yaml
M_Ecosystem_Red_Line_Density:
  - "company authority"
  - "tenant policy"
  - "SSO / IT / admin boundary"
  - "data retention"
  - "legal / audit / compliance"
  - "external sharing"
  - "formal workflow side effects"
  - "company process fit"
```

Therefore M ecosystem should receive only stabilized grammar, manual planning, and explicit red-door mapping until Vitas decides otherwise.

## Stream Model

```yaml
G_Ecosystem_Streams:
  Gmail:
    current_role: "attention stream / action signal"
    state: "passed first cleanup, still subject to review"
  Drive:
    current_role: "document stream / evidence boundary / handoff carrier"
    state: "active inventory candidate"
  Calendar:
    current_role: "time stream / deadline and review gate"
    state: "inventory candidate"
  Contacts:
    current_role: "relationship stream / people and organization index"
    state: "inventory candidate"
  Gemini:
    current_role: "reasoning mirror stream / second model check"
    state: "contract candidate"
  GitHub_DCP:
    current_role: "sanitized construction stream / issue, PR, schema, return packet"
    state: "active through #297 / #298"
```

## G to M Mapping Is Translation, Not Copying

```yaml
G_to_M_Translation:
  Gmail_to_Outlook:
    translate: "classification grammar"
    do_not_copy: "personal labels or private mail"
  Drive_to_SharePoint:
    translate: "document carrier and evidence boundary model"
    do_not_copy: "raw company data or private Drive structure"
  Calendar_to_Outlook_Calendar:
    translate: "deadline / review gate / commitment language"
    do_not_copy: "personal reminder habits"
  Contacts_to_Directory:
    translate: "role and relationship index grammar"
    do_not_copy: "private contact context"
  Gemini_to_M365_Assistant:
    translate: "second-opinion return format"
    do_not_copy: "Gemini authority or Google-side source status"
```

## Allowed Now

```yaml
Allowed_Now:
  - "G ecosystem read-only inventory planning"
  - "Drive / Calendar / Contacts / Gemini contract drafting"
  - "G stream return packet format"
  - "G-to-M mapping language"
  - "M ecosystem red-door planning"
  - "manual guide candidate language"
```

## Forbidden Now

```yaml
Forbidden_Now:
  - "change Gmail settings"
  - "create filters without approval"
  - "change Drive sharing"
  - "move company material into private G carrier"
  - "operate Outlook / Teams / SharePoint / Power Platform"
  - "create M365 runtime"
  - "use Gemini as final authority"
  - "treat G maturity as M approval"
```

## Return Format

```yaml
G_Ecosystem_Stream_Return:
  Phase:
  Stream:
  Source:
  Carrier:
  Authority:
  Current_State:
  Proposed_Action:
  Allowed_Now:
  Forbidden_Now:
  Red_Doors:
  What_Can_Move_To_M:
  What_Cannot_Move_To_M:
  Needs_Vitas_Decision:
  Return_To:
  Next_Action:
```

## Red Doors

- Same window phase progress ≠ ecosystem completion.
- Gmail cleanup ≠ G ecosystem governance completion.
- G ecosystem maturity ≠ M ecosystem implementation approval.
- Personal authority ≠ company authority.
- Google-side summary ≠ Microsoft-side evidence.
- Gemini output ≠ final authority.
- Drive folder ≠ SharePoint permission model.
- Calendar reminder ≠ company commitment.
- Manual guide ≠ workflow runtime.
- Company data must remain in company carrier.

## Final Rule

Do not split the ecosystem into independent windows. Treat it as one integration window moving across phases and streams. Stabilize G-side governance grammar first; translate only the grammar to M-side planning later, never the raw data, authority, or responsibility.