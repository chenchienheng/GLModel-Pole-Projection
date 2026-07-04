# Rotational Toolchain Probe｜2026-04-16 v0.1

一句核心：
本輪採用單點輪調方式測試 GitHub、Gmail、Calendar、Automations，再回 GitHub 留痕；結果顯示靈絡鏈模型的差異不在同時調用工具，而在每個工具被壓成 source、packet、exception、schedule、evidence 與 return_to_00 的可回流節點。

## 0. Test Mode
- mode：rotational / single-tool-at-a-time
- avoid：parallel calls / broad scan / loop expansion
- objective：verify chain-model ecosystem behavior

## 1. Tool Sequence
1. GitHub readback
2. Gmail recent ingress sample
3. Calendar time-window sample
4. Automations schedule-state sample
5. GitHub diagnostic writeback

## 2. GitHub Result
- source_ref：`AGENTS.md`
- actual_result：readable
- confirmed_rules：Codex as execution module; 00 as adjudication core; external tools as adapter surfaces; repo evidence required before promotion
- run_grade：G4 for repo readback
- cv_grade：CV4 for AGENTS.md readback

## 3. Gmail Result
- source_ref：Gmail `newer_than:1d` sample
- actual_result：recent inbox sample readable
- notable_exception：Google security alert regarding Claude for Google Calendar access appeared in the recent sample
- mismatch_or_gap：security alert requires user-side verification if not expected
- next_single_action：verify whether Claude for Google Calendar access was intentionally granted
- return_to_00：yes

## 4. Calendar Result
- source_ref：Google Calendar primary, 2026-04-16 to 2026-04-18
- actual_result：one transparent birthday event on 2026-04-17
- mismatch_or_gap：no work-time conflict detected in this small sample
- next_single_action：no schedule action required unless the event should be mapped into 05 family/time ledger
- return_to_00：yes

## 5. Automations Result
- source_ref：Automations list
- actual_result：low-load schedule chain active
- active_chain：mail intake; control plane; governance light check; 05 time window; cross-window exceptions; 00 consolidation; 00 heartbeat; weekly 05 review
- mismatch_or_gap：none detected in schedule-state sample
- next_single_action：keep schedule low-load; do not add more active windows
- return_to_00：yes

## 6. Chain-Model Observation
一般工具流：
- tool call -> answer

靈絡鏈模型：
- source -> sample -> exception -> packet -> evidence -> return_to_00 -> reflow

本輪驚人點不在工具能力，而在每個工具被降格後仍能形成同一種結果封包。

## 7. Why the Architecture Feels Forward-Looking
1. 工具不是主體，而是感知模組。
2. 模型不是主體，而是角色模組。
3. GitHub 不是倉庫而已，而是外證主骨。
4. 排程不是提醒而已，而是低載時間觸發。
5. 安全訊號、日曆事件、repo 規則與排程狀態可回到同一個 00 packet。

## 8. Current Grade
- overall_run_grade：G4 for rotational toolchain probe
- overall_cv：CV4 for GitHub/Gmail/Calendar/Automation readback, with GitHub writeback evidence
- limitation：does not prove Claude/Gemini/Copilot/Gamma runtime execution yet

## 9. Next Single Action
Verify the Google security alert regarding Claude for Google Calendar access before expanding Claude permissions further.

## 10. Return to 00
return_to_00：yes
