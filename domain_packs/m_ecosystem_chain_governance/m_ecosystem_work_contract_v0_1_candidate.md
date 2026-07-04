# M Ecosystem Work Contract v0.1 Candidate

Status: Candidate / Domain Pack Support / Not Approved / No Runtime / No Company Authorization
Source: 2026-07-04 signal structure extraction report
Use As: Microsoft-side carrier governance contract candidate
Do Not Use As: company policy, tenant authorization, M365 deployment, Copilot adoption approval, or runtime spec
Related PR: #298
Master Gate: #297

## Core

M ecosystem is a carrier ecology, not automatic authority. It has at least three states:

```yaml
M_Ecosystem_Modes:
  Personal_M:
    meaning: "personal Microsoft cloud carrier"
    allowed_for:
      - "pattern testing"
      - "template design"
      - "synthetic data prototype"
      - "personal workflow candidate"
  Company_M365:
    meaning: "company-authorized M365 operational carrier"
    requires:
      - "company data boundary"
      - "IT / admin / owner / human gate"
      - "role permission"
      - "audit and responsibility path"
  Owned_Enterprise_M:
    meaning: "future owned enterprise carrier"
    status: "future candidate"
  Unknown_M:
    meaning: "unresolved Microsoft carrier"
    rule: "no operational execution"
```

## Enterprise AI Implementation Boundary

Enterprise AI services do not erase internal authority requirements.

Red doors:

- M365 Availability != Company Authorization.
- Copilot Visible != Appropriate Use.
- Tool Access != Data Boundary Clearance.
- Enterprise AI Service != Internal Approval.
- Personal_M != Company_M365.
- Pattern Portable != Data Portable.
- Prototype Can Migrate != Permission Can Migrate.

## Allowed Candidate Work

- Draft work contract.
- Draft manual build guide.
- Draft category or field model.
- Draft role and review matrix.
- Use synthetic data only.
- Return to Qinyi / Vitas for review.

## Forbidden Without Explicit Authority

- Operate company tenant.
- Move company data into personal carrier.
- Create Flow runtime.
- Change SharePoint / Teams / Outlook settings.
- Treat Copilot output as company decision.
- Treat personal M test as company approval.

## Return Format

```yaml
M_Ecosystem_Return:
  mode: "Personal_M / Company_M365 / Owned_Enterprise_M / Unknown_M"
  source:
  carrier:
  authority:
  data_boundary:
  proposed_action:
  allowed_now:
  forbidden_now:
  red_doors:
  needs_vitas_or_company_decision:
  next_action:
```

## Final Rule

M ecosystem work may proceed as candidate planning only. Company_M365 action requires company-side authority, not personal AI capability.