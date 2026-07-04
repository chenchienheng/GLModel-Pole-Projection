# Temporal State Sequence Specification｜時態序列與狀態唯一性規格

> Purpose: define how logs, rules, settings, functions, PRs, agent actions, and runtime claims must be read as time-bound state events with record, impact, extension, and feedback.

---

## 0. Status

- spec_version: v0.1
- status: Candidate / Temporal State Draft
- runtime_status: no_runtime
- action_status: no_external_action
- return_to_00: true

---

## 1. One-Line Reading

任何 log、規則、設定、功能、PR、agent 行為或 runtime 宣稱，一旦成立，就進入時間序列；它必須有時間、紀錄、影響、擴展與回授，而且同一成立點不可能出現第二個同時、同地、同態的原事件。

---

## 2. Core Rule｜Temporal State Singularity

```text
No second original event can occupy the same time, place, and state.
同一成立點，不存在第二個同時、同地、同態的原事件。
```

If a second record appears, it is not the same original event.
It is one of:

- copy
- echo
- revision
- replay
- fork
- return packet
- derived record
- later observation
- reinterpretation
- contaminated duplicate

---

## 3. Time-Bound State Event

Every meaningful event should be read as:

```yaml
Temporal_State_Event:
  event_id:
  timestamp:
  source:
  location_or_surface:
  actor_or_origin:
  state_before:
  action_or_change:
  state_after:
  record_surface:
  impact:
  extension_path:
  feedback_path:
  review_status:
```

This applies to:

- log entry
- rule creation
- setting change
- feature activation
- PR comment
- issue update
- file change
- adapter signal
- agent action
- model output
- return packet
- closeout claim

---

## 4. Five Temporal Axes

### 4.1 Time｜時間

When did the event become part of the sequence?

### 4.2 Record｜紀錄

Where is the event recorded, and can it be retrieved?

### 4.3 Impact｜影響

What changed because of this event?

### 4.4 Extension｜擴展

What new branches, tasks, permissions, or interpretations did it open?

### 4.5 Feedback｜回授

How does the event return into review, correction, continuation, or archive?

---

## 5. Log / Rule / Setting / Function Reading

A log is not just a note.
A rule is not just a sentence.
A setting is not just a preference.
A function is not just a capability.

Each is a time-bound state event once it affects operation.

```yaml
Operational_Object_Read:
  log:
    must_have: timestamp + source + effect
  rule:
    must_have: authority + scope + activation state
  setting:
    must_have: owner + current value + change history
  function:
    must_have: capability + permission + execution boundary
```

---

## 6. Non-Promotion Rules

Do not promote:

| From | To |
|---|---|
| record | event itself |
| replay | original event |
| log | proof of approval |
| setting name | active permission |
| function availability | authorization to execute |
| PR comment | doctrine change |
| model output | evidence |
| return packet | closeout |
| duplicate text | same state |

---

## 7. Relation to 通 / 轉 / 續

Temporal sequence is what makes 通、轉、續 auditable.

```yaml
Tong_通:
  asks: what entered, from where, and at what time?
Zhuan_轉:
  asks: what changed form, state, or authority during transition?
Xu_續:
  asks: how did it persist, return, and affect the next state?
```

Without temporal record:

- 通 cannot prove entry
- 轉 cannot prove transformation
- 續 cannot prove continuity

---

## 8. Contamination Patterns

Temporal-state pollution occurs when:

- a later copy is treated as the original event
- a summary erases state-before and state-after
- a setting is treated as permanent without change history
- a rule is cited without activation time
- a log is treated as approval
- an agent action lacks record surface
- feedback is missing but closeout is claimed
- two records are treated as identical despite different time, surface, actor, or state

---

## 9. Minimum Return Requirement

Any temporal-state event that affects governance should return:

- event time
- source
- surface
- state change
- evidence or record link
- impact
- pending branch
- feedback path
- review target

---

## 10. Closing Sentence

Time is not just metadata. In XuanLing governance, time is what prevents logs, rules, settings, functions, records, and agent actions from collapsing into false sameness.
