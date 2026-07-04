# Scheduling Effect Register

> Durable register for turning named schedules into effective runtime schedules.
> Purpose: bind cadence to windows, outputs, writeback surfaces, and drift visibility.

---

## 0. Core Reading

A schedule is not real merely because it is named.
A schedule becomes effective only when it has:
- an owner window
- a cadence
- an expected output
- a writeback surface
- drift visibility

This register exists to make those conditions explicit.

---

## 1. Register Fields

Each scheduling item should eventually include:
- `schedule_name`
- `owner_window`
- `cadence`
- `trigger_type`
- `expected_output`
- `writeback_surface`
- `drift_flag`
- `last_verified_time`
- `status`
- `notes`

---

## 2. Initial Scheduling Effect Register

| Schedule Name | Owner Window | Cadence | Trigger Type | Expected Output | Writeback Surface | Drift Flag | Status |
|---|---|---|---|---|---|---|---|
| central_reanchor_review | `00` | per major change / per contradiction escalation | event-driven | adjudication decision or return direction | durable note / issue / register update | visible if missing during major state shift | planned |
| timeline_schedule_review | `06` | daily or per scheduling change | time-based | updated timeline/schedule state | scheduling note / timeline artifact | visible if cadence named but no update proof | suspended (no daily reporting) |
| board_orchestration_review | `03` | recurring review + event-driven | hybrid | routing refresh / queue movement / next actions | board note / issue / register | visible if tasks accumulate without routing update | active via 02_CVG_3D |
| log_writeback_append | `08` | on event + periodic archive cadence | hybrid | log entry or audit append | log board / writeback artifact | visible if actions happen without durable trace | active via 02_CVG_3D |
| toolchain_status_refresh | `10` | per tool change + maintenance cadence | hybrid | toolchain state update / routing check | tool/orchestration note | visible if tool conditions change without reflected state | planned |
| public_surface_refresh | `07` | periodic | time-based | refreshed readable external view | public-facing note / mirror artifact | visible if public layer drifts behind runtime | planned |
| synthesis_batch | `11` | batch cadence | time-based | synthesis note / folded runtime view | synthesis artifact | visible if source growth outpaces synthesis | planned |
| world_field_alignment | `12` | strategic cadence | time-based | environment-level positioning update | world-field note | visible if external context shifts without response | planned |

---

## 3. Current Priority Order

### P0
- `00` central_reanchor_review
- `06` timeline_schedule_review

### P1
- `03` board_orchestration_review
- `08` log_writeback_append
- `10` toolchain_status_refresh

### P2
- `07` public_surface_refresh
- `11` synthesis_batch
- `12` world_field_alignment

---

## 4. Drift Rule

A schedule is drifting when any of the following occur:
- cadence named but no output appears
- owner window unclear
- output exists but is not written back
- recurring work happens only ad hoc
- schedule exists in notes but not in operational habit or automation path

---

## 5. Immediate Use Rule

This register should be used to decide:
- which schedule should be activated first?
- which windows are under-served operationally?
- which schedule needs automation support later?
- where is cadence weak even when structure is strong?

---

## 6. Related Artifacts

Read together with:
- `WINDOW_12_MASTER_TABLE.md`
- `SCHEDULING_EFFECTIVENESS_GAP_NOTE.md`
- `THREE_COUPLING_RUNTIME_MAP.md`
- `ECOSYSTEM_FAMILY_ONBOARDING_ROADMAP.md`

---

## 7. Proposed Topology Mapping (Pending Approval)

> Following the introduction of `PLATFORM_SCHEDULER_AND_TOOL_NAMING_MAP.md`, the below mapping is proposed to reconcile the legacy 12-window schedules into the new 4-child topology.

| Proposed Target Window | Absorbed Legacy Schedules | Proposed Cadence | Notes |
|---|---|---|---|
| `00_ScheduleHub` | central_reanchor_review | event-driven | Retains master adjudication role. |
| `01_RT_Critical` | (none currently mapped) | event-driven | Reserved for structural shifts/PRs. |
| `02_CVG_3D` | timeline_schedule_review, log_writeback_append, board_orchestration_review (partial) | 3-day convergence | Absorbs daily and hybrid reviews into a stable 3-day rhythm. |
| `03_STAGE_W1` | synthesis_batch, public_surface_refresh, board_orchestration_review (partial) | weekly | Absorbs heavy batch processing and weekly stage routing. |
| `04_MANUAL_Doctrine` | toolchain_status_refresh, world_field_alignment | manual / periodic | Absorbs strategic alignment and toolchain governance. |

---

## 8. Status

- scheduling_effect_register_created: true
- owner_window_binding_started: true
- drift_visibility_started: true
- automation_binding_pending: true
- scheduler_topology_proposal_added: true
- return_to_00: true
