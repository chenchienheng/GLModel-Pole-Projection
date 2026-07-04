# Window 00-07 Mainbone Alignment Table v0.1

一句核心：
00–07 不能再各自運行；每一窗都必須先接 00 主骨，明確自己的 source、window role、chain line、minimum action、blocked action、evidence rule 與 return_to_00 格式，才能形成可續接窗口鏈。

## 0. Status
Draft v0.1

## 1. Purpose
本表用於一次抓住 00–07 的對齊狀態，避免：
- 各窗各自表述
- 使用者逐窗佈達
- 工具可用但窗口不接主骨
- 沒有 source_ref 卻升階
- 沒有 evidence_ref 卻自稱完成
- 沒有 return_to_00 導致斷鏈

## 2. Global Rule for 00–07
Every active window must follow:

```text
read_00 -> identify_self -> compare_delta -> update_boundary -> run_minimum_action -> result_packet -> return_to_00
```

Required packet:

```yaml
window_id:
source_ref:
space_coordinate:
time_coordinate:
chain_line:
actual_result:
mismatch_or_gap:
evidence_ref:
blocked_actions:
next_single_action:
run_grade:
cv_grade:
return_to_00: yes
```

## 3. Window Alignment Table
| Window | Core Name | Primary Role | Source Surface | Chain Line | Minimum Action | Blocked Action | Evidence Rule | Current Grade |
|---|---|---|---|---|---|---|---|---|
| 00 | Mainbone / Adjudication Core | 裁定、收斂、升階、回退 | GitHub / AGENTS / diagnostics / schedules | CL-Evidence / CL-Reflow | read latest source, adjudicate one item | 不直接吞所有工具、不取代各窗 | repo evidence or external evidence required | G4 |
| 01 | Google / Source Mirror | 主本、mirror、source path | GitHub / Drive / Docs / Google source | CL-Source / CL-Knowledge | confirm source path and readback | 無 source_ref 不升階 | readable source path required | G3 candidate |
| 02 | Execution / Task Plane | task/spec/issue/process routing | Asana / ClickUp / GitHub issues | CL-Task | classify task and assign target path | 無 task_id / owner / status 不主寫 | task_id or repo issue evidence required | G1-G2 |
| 03 | Event / Discussion Plane | event, discussion, anomaly mapping | Slack / message thread / event source | CL-Intake / CL-Evidence | confirm event_ref and time window | 無 event_ref 不分流 | event/thread evidence required | G1-G2 |
| 04 | Identity / Relation Plane | identity, role, relation verification | Contacts / Gmail / Calendar attendees | CL-Identity | verify identity_ref or role_ref | 不吞事件、時序、任務 | contact/email/calendar signal required | G3 |
| 05 | Time Sovereignty Plane | time window, stale, future-bound, effective order | Calendar / Automations / dated source | CL-Time | detect stale/future/conflict | 不做全域收斂 | calendar event or schedule evidence required | G3-G4 |
| 06 | Mail / Intake Plane | external input, alerts, receipts, finance/security | Gmail | CL-Intake / CL-Evidence | classify ingress and exceptions | 不把清信當完成、不無限整理 | message_id evidence required | G4 |
| 07 | Knowledge / Readback Plane | docs, knowledge, readback, version/source verification | Drive / Docs / Notion / GitHub docs | CL-Knowledge | readback one source and report gap | 不憑空補知識、不重複空轉 | source/version/readback required | G1-G3 |

## 4. Window-by-Window Binding

### 00 Mainbone
```yaml
window_id: 00
must_read:
  - AGENTS.md
  - 01_native_board/audit-dashboard-v0-1.md
  - latest diagnostics file
allowed_scope:
  - adjudicate
  - consolidate
  - assign run_grade / cv_grade
  - hold / promote / rollback
blocked_actions:
  - direct uncontrolled tool expansion
  - claiming external completion without evidence
next_single_action: adjudicate one current chain item only
return_to_00: self-loop allowed
```

### 01 Source / Mirror
```yaml
window_id: 01
must_read:
  - explicit source_ref
  - repo path or Google source path
allowed_scope:
  - source discovery
  - mirror verification
  - path confirmation
blocked_actions:
  - no-source promotion
  - acting as execution plane
next_single_action: confirm one readable source path
return_to_00: yes
```

### 02 Execution / Task
```yaml
window_id: 02
must_read:
  - task_id or issue_id or process_delta
allowed_scope:
  - classify task/spec/issue
  - assign responsible_ref
  - propose target_path
blocked_actions:
  - create task without source_ref
  - claim completion without task evidence
next_single_action: hold until ClickUp/Asana/GitHub issue evidence exists
return_to_00: yes
```

### 03 Event / Discussion
```yaml
window_id: 03
must_read:
  - event_ref
  - thread_ref
  - time_window
allowed_scope:
  - event mapping
  - anomaly intake
  - route to 02/05/07/00
blocked_actions:
  - inventing events
  - treating discussion as decision
next_single_action: hold until event source exists
return_to_00: yes
```

### 04 Identity / Relation
```yaml
window_id: 04
must_read:
  - identity_ref
  - role_ref
  - contact/email/calendar signal
allowed_scope:
  - identity verification
  - relation candidate
  - role boundary
blocked_actions:
  - deciding task/time/knowledge ownership alone
  - writing contacts without explicit request
next_single_action: verify only when identity is needed by another chain
return_to_00: yes
```

### 05 Time Sovereignty
```yaml
window_id: 05
must_read:
  - calendar event
  - schedule item
  - dated source
allowed_scope:
  - time window
  - stale/future-bound
  - effective_order
blocked_actions:
  - broad consolidation
  - treating reminders as full-time chain
next_single_action: daily time-window exception check only
return_to_00: yes
```

### 06 Mail / Intake
```yaml
window_id: 06
must_read:
  - Gmail message_id
  - sender/subject/time
allowed_scope:
  - intake classification
  - security/finance/receipt alert
  - exception extraction
blocked_actions:
  - over-cleaning
  - treating labeling as final chain completion
next_single_action: keep only exception-worthy ingress
return_to_00: yes
```

### 07 Knowledge / Readback
```yaml
window_id: 07
must_read:
  - source path
  - doc/version/ref
allowed_scope:
  - readback verification
  - knowledge source mapping
  - gap statement
blocked_actions:
  - repeating empty scans
  - inventing knowledge
  - finalizing without source/version
next_single_action: run keyword-based Drive/GitHub docs readback test
return_to_00: yes
```

## 5. Current Problem Diagnosis
### P1｜00 was not explicitly binding each window
00 has GitHub strength, but windows were not all forced to read 00 before acting.

### P2｜01 and 07 were under-tested
Drive/Docs/Knowledge surfaces were not tested with keyword-based readback enough.

### P3｜02 and 03 lack external evidence
Task and event planes remain candidate because no task_id / event_ref has been proven.

### P4｜04, 05, 06 are usable but need stricter boundaries
Contacts, Calendar and Gmail work, but must not expand into full system decisions.

## 6. Required Catch-up Output for Each Window
Every 00–07 window must return:

```yaml
window_id:
latest_00_ref_read:
local_boundary_updated:
detected_delta:
current_allowed_scope:
blocked_actions:
minimum_next_action:
run_grade:
cv_grade:
return_to_00: yes
```

## 7. Next Single Action
Run one sequential catch-up cycle:

1. 00 reads AGENTS.md and latest diagnostic.
2. 01 confirms one source path.
3. 04 confirms one identity sample only if needed.
4. 05 confirms one time window.
5. 06 confirms one intake exception.
6. 07 confirms one knowledge readback path.
7. 02/03 remain HOLD until task/event evidence exists.

## 8. Return to 00
return_to_00：yes

## 9. 收斂語句
00–07 的問題不是沒有工具，而是沒有被一次抓成同一張依存表；現在每窗都有 source、role、chain line、minimum action、blocked action 與 evidence rule，下一步才有資格真正接上 00，而不是靠使用者逐窗提醒。
