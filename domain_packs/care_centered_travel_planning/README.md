# Care-Centered Travel Planning Domain Pack v0.1

Status: Candidate / Domain Pack Support / Not Approved / No Runtime
Source: Sanitized extraction from Qinyi multi-carrier task assistant mode
Use As: care-centered travel and family logistics planning pattern
Do Not Use As: public travel guide, actual booking decision, private family record, or platform recommendation proof
Related PR: #298
Master Gate: #297

## Core

Care-centered travel planning is not sightseeing maximization or lowest-price search. It is a dependency model for comfort, relationship, mobility, safety, confirmation, and rebuild.

## Open Core Mapping

```yaml
Source: "care-centered travel need / participants / constraints"
Carrier: "booking platforms / review platforms / map tools / direct confirmation / calendar"
Authority: "human decision and direct confirmation for critical constraints"
Gate: "mobility / lodging / transport / rest / timing"
Action: "candidate shortlist / confirmation / itinerary candidate"
Return: "confirmed facts / rejected candidates / pending checks / fallback plan"
Rebuild: "weather / fatigue / room / parking / schedule change"
```

## Red Doors

- Tool Result != Authority.
- Available != Suitable.
- Listed Parking != Confirmed Parking.
- Review Score != Comfort.
- Lowest Price != Best Decision.
- Candidate Lodging != Final Booking.
- Confirmation Candidate != Final Commitment.

## Required Gates

```yaml
Care_Travel_Gates:
  mobility:
    low_walking_load:
    rest_window:
  lodging:
    suitable_layout:
    quiet_room:
    cancellation_flexibility:
  transport:
    large_vehicle_or_access_constraint:
  schedule:
    meal_timing:
    family_availability:
  rebuild:
    weather:
    fatigue:
    unavailable_room:
    transport_constraint:
```

## Candidate Board

```yaml
Candidate:
  name:
  pros: []
  risks: []
  hard_gate_status:
  soft_gate_status:
  authority_needed:
  confirmation_needed:
  decision_status: "Candidate / Rejected / Confirmed"
```

## Final Rule

The travel plan is successful when the people can move, rest, meet, and return without hidden burden. Tool outputs are carriers. Human comfort and confirmed constraints decide.