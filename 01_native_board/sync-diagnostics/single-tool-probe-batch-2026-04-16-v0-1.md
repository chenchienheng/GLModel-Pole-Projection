# Single Tool Probe Batch｜2026-04-16 v0.1

一句核心：
本輪以單工具輪調方式測試 GitHub、Gmail、Calendar、Contacts、Google Drive/File Search、Automations；結果顯示 00 主骨、06 入口、05 時權、04 身份、排程鏈具可讀能力，Drive 空查詢未命中，需改用關鍵字查找。

## 0. Test Mode
- mode：single-tool sequential probe
- mutation：read-only except final GitHub diagnostic writeback
- avoid：parallel calls / broad scan / external writes
- return_to_00：yes

## 1. GitHub Probe
```yaml
tool_name: GitHub
source_ref: 00_mother-law/full-time-chain-coordinate-constraint-framework-v0-1.md
readback_status: readable
actual_result: full-time chain coordinate framework readable
assigned_window: 00 / 01
assigned_chain_line: CL-Source / CL-Evidence
run_grade: G4
cv_grade: CV4
next_single_action: use as coordinate rule for future probes
return_to_00: yes
```

## 2. Gmail Probe
```yaml
tool_name: Gmail
source_ref: newer_than:12h sample
readback_status: readable
actual_result: recent inbox sample readable; sample mostly updates/promotions/newsletter items
assigned_window: 06
assigned_chain_line: CL-Intake
mismatch_or_gap: no mutation performed; this was a read-only sample
run_grade: G3
cv_grade: CV3
next_single_action: keep Gmail as intake/exception surface, not broad archive by default
return_to_00: yes
```

## 3. Calendar Probe
```yaml
tool_name: Google Calendar
source_ref: primary calendar 2026-04-16 to 2026-04-18
readback_status: readable
actual_result: one transparent birthday event on 2026-04-17; no work-conflict sample detected
assigned_window: 05
assigned_chain_line: CL-Time
mismatch_or_gap: no conflict; no writeback needed
run_grade: G3
cv_grade: CV3
next_single_action: keep 05 daily time-window check narrow
return_to_00: yes
```

## 4. Contacts Probe
```yaml
tool_name: Google Contacts
source_ref: query 陳, max_results 3
readback_status: readable
actual_result: identity sample returned contact records
assigned_window: 04
assigned_chain_line: CL-Identity
mismatch_or_gap: read-only sample; no identity escalation
run_grade: G3
cv_grade: CV3
next_single_action: use Contacts only for identity verification when source requires it
return_to_00: yes
```

## 5. Google Drive / File Search Probe
```yaml
tool_name: Google Drive via file_search
source_ref: empty query
readback_status: callable but no result
actual_result: 0 results returned
assigned_window: 01 / 07
assigned_chain_line: CL-Source / CL-Knowledge
mismatch_or_gap: empty query ineffective for current Drive connector
run_grade: G1
cv_grade: CV1
next_single_action: use keyword-focused Drive queries rather than empty query
return_to_00: yes
```

## 6. Automations Probe
```yaml
tool_name: Automations
source_ref: automations list
readback_status: readable
actual_result: low-load seven-line schedule chain active
assigned_window: 00 / 05 / 06
assigned_chain_line: CL-Time / CL-Reflow
mismatch_or_gap: no excess active task detected in this sample
run_grade: G4
cv_grade: CV4
next_single_action: do not add new schedules unless a tool proves evidence value
return_to_00: yes
```

## 7. Batch Observation
一般平台用法：
- use tool when needed
- receive answer

靈絡測試用法：
- probe one tool
- assign window
- assign chain line
- record evidence level
- identify gap
- return to 00

## 8. Current Window Arrangement Impact
| Window | Probe Impact |
|---|---|
| 00 | GitHub and Automations remain strong control surfaces |
| 01 | GitHub readable; Drive requires keyword queries |
| 04 | Contacts usable as identity verification surface |
| 05 | Calendar usable as time-coordinate surface |
| 06 | Gmail usable as intake surface |
| 07 | Drive/File Search not yet proven by empty query |
| 08-12 | no activation; remain HOLD / candidate |

## 9. Next Single Action
Run the next batch with one keyword-based Drive query and one Codex task-result proof, still sequentially.

## 10. Return to 00
return_to_00: yes
