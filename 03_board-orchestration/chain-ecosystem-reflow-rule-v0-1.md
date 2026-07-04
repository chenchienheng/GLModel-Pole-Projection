# Chain Ecosystem Reflow Rule v0.1

一句核心：
靈絡鏈生態不是把節點收進來就結束，而是讓每一個節點在被映射、路由、驗證、回寫後，仍能回流成規則、樣本、路由經驗或審計記錄，避免鏈生態變成靜態資料堆。

## 0. 狀態
Draft v0.1

## 1. 問題定義
若外部節點進入靈絡後只被保存，會形成資料沉積。
若節點被處理後沒有回流，會形成流程沉沒成本。
若節點結果沒有轉化成規則，下一次仍會重新處理同一問題。

因此，靈絡需要 reflow。

## 2. 回流四類
### R1｜Rule Reflow
當某次處理形成穩定判準，回流為規則。

例：
- 無 source_ref 不得升階
- 03 / 04 / 05 不適合一般高頻巡檢
- 工具結果需回 result packet

### R2｜Route Reflow
當某次任務形成有效窗口順序，回流為路由樣本。

例：
- 06 -> 04 -> 05 -> 02 -> 00
- 03 -> 05 -> 02 -> 07 -> 00
- 10 -> 11 -> 07 -> 00

### R3｜Evidence Reflow
當某次外部改動有可見痕跡，回流為 external evidence。

例：
- GitHub commit
- Gmail label / archive
- Calendar event change
- Asana / ClickUp task update
- Slack thread evidence
- Notion / Docs page update

### R4｜Audit Reflow
當某次處理發現斷點、黑洞或失配，回流為審計項。

例：
- path not found
- writeback failed
- role collision
- empty schedule run
- model output lacks source

## 3. 回流流程
每一個 Lingluo Node Packet 被處理後，必須判斷是否進入以下至少一類：
1. rule_candidate
2. route_sample
3. external_evidence
4. audit_item
5. no_reflow_needed

若選擇 no_reflow_needed，必須說明原因。

## 4. 回流輸出格式
```yaml
reflow_id:
node_packet_id:
source_ref:
reflow_type:
reflow_target_path:
actual_result:
lesson_or_rule:
route_sample:
evidence_ref:
audit_gap:
next_single_action:
return_to_00:
```

## 5. 回流等級
- RF0｜No Reflow：處理後未產生可回流內容
- RF1｜Observed Reflow Candidate：可能有價值但未整理
- RF2｜Captured Reflow：已保存為記錄
- RF3｜Structured Reflow：已壓成規則、路由、證據或審計項
- RF4｜Reusable Reflow：可被後續窗口直接調用
- RF5｜Ecosystem Reflow：已改變主骨規則或路由矩陣

## 6. 禁止事項
- 禁止只保存結果，不判斷是否回流
- 禁止外部證據不登錄
- 禁止重複失敗不轉成 audit item
- 禁止有效路由不回寫成 route sample
- 禁止規則只停在對話中，不進主骨

## 7. 收斂語句
鏈生態的生命力不在於節點多，而在於每一個節點處理完後能不能回流成下一輪可用的骨；不能回流的流程會沉沒，能回流的流程才會成為靈絡的養分。
