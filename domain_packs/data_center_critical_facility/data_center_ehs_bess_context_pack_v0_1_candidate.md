# Data Center EHS / BESS Context Pack v0.1 Candidate

Status: Candidate / Domain Pack Support / Not Approved / No Runtime
Source: 2026-07-04 signal structure extraction report
Use As: AEC / MEP / critical facility proposal context support
Do Not Use As: engineering design, owner approval, EHS clearance, investment advice, or construction instruction
Related PR: #298
Master Gate: #297

## Core

Data center work should not be treated as ordinary IT-room or MEP work. It should be reviewed as critical facility topology: power, cooling, fire protection, EHS, water, community, compliance, resilience, commissioning, and operational responsibility.

## Required Modules

```yaml
Critical_Facility_Modules:
  Power_Capacity_And_Backup:
  BESS_Energy_Storage:
  Demand_Response:
  Cooling_And_Liquid_Cooling:
  Fire_Protection_And_EHS:
  Water_And_Drainage:
  Community_And_Local_Risk:
  Smart_Building_Integration:
  Carbon_Energy_Sustainability:
  Commissioning_And_Operations:
```

## Red Doors

- Data Center Demand != Grid Readiness.
- MEP Design != EHS Clearance.
- BESS Mentioned != Owner Approved.
- Power Contract != Commissioned Facility.
- Sustainability Claim != Verified Performance.
- Community Meeting != Local Acceptance.
- Commissioning Plan != Operational Readiness.

## Proposal Matrix

```yaml
Critical_Facility_Proposal_Row:
  module:
  current_evidence:
  maturity:
  authority_required:
  risk_owner:
  missing_inputs:
  owner_buy_in_needed:
  return_packet_required: true
```

## Taiwan / AEC Use

This pack supports a strategic lens: Taiwan critical facility work should not be framed only as low-cost construction. It can be framed as resilience engineering for semiconductor, AI data center, energy, communications, healthcare, logistics, BCP, and EHS-linked facilities.

## Final Rule

A data center proposal is not complete because it has an MEP concept. It needs energy, EHS, resilience, community, and operations gates.