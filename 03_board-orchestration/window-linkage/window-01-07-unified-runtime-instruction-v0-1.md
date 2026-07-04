# Window 01-07 Unified Runtime Instruction v0.1

一句核心：
01-07 不再各自等待使用者逐窗佈達；所有窗口統一讀取 00 主骨與工具成立矩陣後，只回報本窗有效差異、阻塞、替代節點與下一個最小動作。

## 0. Status
Draft v0.1

## 1. Global Rule
每一窗啟動前，必須先讀：

1. 00 mainbone / latest consolidation packet
2. tool-establishment matrix
3. 本窗上一輪 result packet

不得直接跳入工具執行。

## 2. Required Output Packet
```yaml
window_id:
source_ref:
actual_result:
mismatch_or_gap:
current_grade:
cv_status:
blocked_items:
replacement_candidate:
next_single_action:
return_to_00: true
```

## 3. Window Instructions

### 01 Source / Mirror
```yaml
window_id: 01
primary_role: source mirror / source path
primary_tools:
  - Google Drive
  - GitHub docs
fallback_tools:
  - Notion pages
allowed_action:
  - verify source path
  - confirm readable document
  - report stale source or missing mirror
blocked_action:
  - no-source promotion
  - replacing 00 adjudication
next_single_action: verify one source path only
```

### 02 Task / Execution
```yaml
window_id: 02
primary_role: task execution surface
primary_tools:
  - ClickUp
fallback_tools:
  - Asana
  - GitHub Issues
  - Notion DB
allowed_action:
  - identify task_id / status / owner / due
  - report missing owner or blocked writeback
blocked_action:
  - creating duplicate task planes
  - activating ClickUp and Asana as parallel primaries
next_single_action: use only one primary task surface per cycle
```

### 03 Event / Discussion
```yaml
window_id: 03
primary_role: event / discussion surface
primary_tools:
  - Slack only when event_ref exists
fallback_tools:
  - Gmail thread
  - ClickUp comment
  - Notion comment
allowed_action:
  - verify event_ref / thread_ref
  - report missing event evidence
blocked_action:
  - treating chat as decision
  - promoting discussion without source_ref
next_single_action: remain HOLD until real event_ref exists
```

### 04 Identity / Relation
```yaml
window_id: 04
primary_role: identity coordinate
primary_tools:
  - Google Contacts
fallback_tools:
  - Gmail sender
  - Calendar attendee
  - Notion user
allowed_action:
  - confirm identity_ref / email / role
  - report identity drift
blocked_action:
  - deciding task or time ownership alone
  - writing contacts without explicit user request
next_single_action: only verify identity when another chain requires it
```

### 05 Time Sovereignty
```yaml
window_id: 05
primary_role: time coordinate / effective order
primary_tools:
  - Google Calendar
  - Automations schedule
fallback_tools:
  - dated GitHub records
  - dated Drive records
allowed_action:
  - detect stale / future-bound / conflict
  - report effective_order issue
blocked_action:
  - broad consolidation
  - replacing 00 consolidation
next_single_action: check only time-window exceptions
```

### 06 Mail / Intake
```yaml
window_id: 06
primary_role: intake / exception detector
primary_tools:
  - Gmail
fallback_tools:
  - Slack alerts
  - Calendar notifications
allowed_action:
  - detect security / finance / receipt / ETC / permission alerts
  - report exception source_ref
blocked_action:
  - over-cleaning
  - archiving security or finance items without confirmation
next_single_action: report only high-value exceptions
```

### 07 Knowledge / Readback
```yaml
window_id: 07
primary_role: knowledge readback / version verification
primary_tools:
  - GitHub docs
  - Google Drive
fallback_tools:
  - Notion pages
allowed_action:
  - readback one source
  - report version drift or missing evidence
blocked_action:
  - inventing knowledge
  - finalizing without source/version
next_single_action: verify one knowledge source per cycle
```

## 4. Replacement Rule
```yaml
replacement_rule:
  primary_only_one: true
  same_capability_tools_are_fallbacks: true
  fallback_activation: only_when_primary_blocked_or_missing_feedback
  parallel_primary: blocked
```

## 5. Grade Rule
```yaml
grade_rule:
  G4: source_ref + evidence_ref + writeback_or_clear_no_action
  G3: source_ref + readable result + known gap
  G2: tool exists but no valid source object
  G1: tool listed only or current search gap
  HOLD: no event/task/source evidence
```

## 6. Current Priority
Do not activate 08-12.
Do not add more tools.
Do not create new schedules.
Strengthen 01-07 by source_ref, evidence_ref, and replacement logic only.

## 7. Return to 00
return_to_00: true

## 8. 收斂語句
01-07 可以繼續走，但不能各自擴張；每窗只處理自己能成立的座標，缺口回 00，替代節點只在主位失效時啟用。
