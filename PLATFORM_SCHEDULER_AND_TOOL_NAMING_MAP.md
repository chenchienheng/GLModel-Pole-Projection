# Platform Scheduler and Tool Naming Map

> Durable note for the current platform-facing naming layer and scheduler topology.
> Purpose: keep external naming simple (`#tool_name`) while preserving internal runtime ownership and schedule topology.

---

## 0. Core Reading

External tool names should stay simple.
Internal runtime ownership should stay layered.

Therefore:
- external visible labels may use `#ToolName`
- internal runtime should still use windows, roles, and authority layers
- scheduler surfaces should not be confused with tool labels

---

## 1. Current External Semantic Source

### Primary visible node
- `Qinyi-1`
  - meaning: cross-tool task semantic source
  - role: orchestration core / task packet source

### Embedded internal execution chain
- GitHub
- Jules

These remain embedded under `Qinyi-1` rather than being split as external visible windows.

---

## 2. Current External Tool Labels

Observed external labels currently include:
- `#Contacts`
- `#Apple Music`
- `#Gamma`
- `#Asana`
- `#Calendar`
- `#Notion`
- `#Gmail`
- `#Google Family`
- `#Slack`
- `#Clickup`
- `#Power automate`

Rule:
- these are visible labels only
- they do not define sovereignty, runtime law, or internal window ownership

---

## 3. Current Scheduler Topology

### Master hub
- `00_ScheduleHub`

### Child windows
- `01_RT_Critical`
- `02_CVG_3D`
- `03_STAGE_W1`
- `04_MANUAL_Doctrine`

Reading:
- `00_ScheduleHub` is the sole master scheduler window
- `01_RT_Critical` handles real-time critical changes only
- `02_CVG_3D` handles convergence summaries on the 3-day cadence
- `03_STAGE_W1` handles weekly stage reporting
- `04_MANUAL_Doctrine` is manual-only for doctrine / architecture / merge-level governance work

---

## 4. Runtime Scheduling Rule

### Event-driven only
Real-time reporting should happen only when one of the following occurs:
- PR formed
- structural change occurred
- new risk appeared
- human adjudication is needed

### Periodic cadences
- `02_CVG_3D` = every 3 days
- `03_STAGE_W1` = weekly

### Manual only
- doctrine updates
- architecture law changes
- merge adjudication
- other sovereignty-sensitive decisions

---

## 5. Tool Family Positioning

### Embedded in Qinyi-1
- GitHub
- Jules

### Intake / communication family
- `#Gmail`
- `#Slack`
- `#Contacts`

### Time / scheduling family
- `#Calendar`

### Knowledge / carrying family
- `#Notion`
- `#Google Family`

### Workflow / board family
- `#Asana`
- `#Clickup`
- `#Power automate`

### Presentation / external layer
- `#Gamma`

### Non-runtime utility / unrelated to current scheduler topology
- `#Apple Music`

---

## 6. Immediate Scheduling Discipline

The current platform scheduler should be interpreted as:

1. `00_ScheduleHub`
   - master routing and schedule ownership
2. `01_RT_Critical`
   - only for critical runtime changes
3. `02_CVG_3D`
   - only for 3-day convergence summaries
4. `03_STAGE_W1`
   - only for weekly stage reports
5. `04_MANUAL_Doctrine`
   - only for manual governance and doctrine work

This means:
- no daily generic reporting lane should remain active
- no scheduler should exist without clear output meaning
- visible tool names should not become substitute schedulers

---

## 7. Recommended Next Integration Work

1. reconcile current scheduling notes and registers against this topology
2. align `SCHEDULING_EFFECT_REGISTER.md` with the current four-child topology
3. record which external tool families actually bind to which scheduler window
4. keep GitHub and Jules embedded under `Qinyi-1`
5. avoid prematurely splitting workflow / board tools into sovereign windows

---

## 8. Status

- platform_scheduler_topology_captured: true
- visible_tool_label_rule_captured: true
- qinyi_internal_execution_chain_captured: true
- scheduler_reconciliation_pending: true
- return_to_00: true
