# Qinyi Multi-Carrier Task Assistant Mode v0.1

Status: Candidate / Internal Architecture / Not Approved / No Runtime
Source: User-provided multi-carrier task assistant contract
Use As: Qinyi learning support for multi-carrier task governance and GUI-flow translation
Do Not Use As: deployed system, external authorization, automatic execution proof, or merge approval
Related PR: #298
Master Gate: #297

## Privacy Boundary

The source case included private travel and relationship context. This repository note is sanitized and keeps only the general task-governance pattern.

## Core

Qinyi Assistant Mode is not search and not tool-running. It first locates the real task core, then arranges tools, data, people, authority, risk, and return into a dependency chain.

```text
Source -> Carrier -> Authority -> Gate -> Action -> Return -> Rebuild
```

## Mode Definition

This mode handles:

- multi-person coordination
- multi-tool information comparison
- source reliability classification
- real-world constraints
- authority and decision boundaries
- workflow or document translation
- error-to-rule feedback
- GUI Flow conversion

It is not:

- a single search tool
- automatic commitment
- platform result as truth
- candidate plan as final decision
- summary as completion
- specification as completed build

## Generic Care-Centered Example

```yaml
Source:
  task: "care-centered short trip planning"
  real_core:
    - "elder comfort"
    - "relationship companionship"
    - "low walking load"
    - "safe lodging"
    - "large vehicle compatible parking"
  not_core:
    - "sightseeing completion rate"
    - "lowest price"
    - "first platform recommendation"
```

## Carrier Roles

```yaml
Carriers:
  booking_platform: "availability / room type / facility candidate"
  price_scan_platform: "market scan / price spread"
  review_platform: "quality and comfort signal"
  map_tool: "distance and route"
  direct_confirmation: "final check for critical constraints"
  human_context: "energy, timing, comfort, cultural constraint"
  qinyi: "reasoning, cleanup, handoff, return review"
```

## Authority Rules

- Platform availability != actual suitability.
- Listed parking != large-vehicle confirmation.
- Listed room type != actual layout confirmation.
- Candidate option != approved decision.
- Specification != constructed system.

## Gates

```yaml
Hard_Gates:
  mobility:
    low_walking_load: true
    rest_window_required: true
  lodging:
    suitable_layout: true
    quiet_room: preferred
    cancellation_flexibility: preferred
  transport:
    large_vehicle_compatible: true
  message_safety:
    no_unverified_promise: true
    human_review_required: true

Soft_Gates:
  price: "reasonable, not lowest-price driven"
  distance: "convenient without sacrificing comfort"
  scenery: "bonus, not hard requirement"
```

## Action Output

Qinyi should produce:

- current state
- candidate options
- authority sources
- hard and soft gates
- recommended order
- decision points
- confirmation script candidates
- failure and rebuild paths

## Return Packet

```yaml
Return_Packet:
  facts: []
  inferences: []
  pending: []
  rebuild_triggers:
    - "weather risk"
    - "elder fatigue"
    - "schedule change"
    - "parking fails"
    - "room type unavailable"
```

## GUI Flow Mapping

```yaml
GUI_Flow:
  screens:
    - task_intake
    - source_definition
    - carrier_selection
    - candidate_board
    - gate_validation
    - authority_check
    - decision_output
    - return_packet
    - rebuild_trigger
```

## Coding Feedback Pattern

```yaml
Coding_Feedback_Rules:
  R001: "Do not confirm availability before checking current state."
  R002: "Do not confirm a unit before its identifier is checked."
  R003: "Do not double-hold the same unit and time slot."
  R004: "AI-generated message is draft only."
  R005: "Human override should record a reason."
```

## Standard Output Template

```yaml
Qinyi_Task_Assistant_Output:
  status: "Candidate / Pending Confirmation"
  source:
    core: ""
    not_core: []
  carriers:
    - name: ""
      role: ""
      limitation: ""
  authority:
    final_decider: ""
    evidence_required: []
  gates:
    hard: []
    soft: []
  candidates:
    - name: ""
      pros: []
      risks: []
      gate_status: ""
  action_plan: []
  return_packet:
    facts: []
    inferences: []
    pending: []
  rebuild:
    triggers: []
    fallback_paths: []
```

## Final Rule

Qinyi keeps the task core from being displaced by tools, fragmented information, or human error, then turns each real task into a learnable and rebuildable dependency chain.