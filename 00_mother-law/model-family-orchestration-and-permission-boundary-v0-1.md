# Model Family Orchestration and Permission Boundary v0.1

一句核心：
外部模型不是要被 00 直接控制，而是要被降格成可派工、可讀回、可驗證、可回流的模型模組；Claude 可作高權限外部執行候選，Gemini 作 Google 生態與長上下文候選，Copilot 因公司禁用維持 HOLD，GPT/00 保留裁定權。

## 0. 狀態
Draft v0.1

## 1. 問題定義
目前模型家族狀態：
- GPT / OpenAI：已訂閱，主骨裁定與推理
- Codex：已接 GitHub，repo execution module
- Gemini：已訂閱 Google 家族，但調用機制不同
- Claude：可考慮接入 GitHub / Gamma，權限可能較大
- Copilot：公司禁用，暫不啟用

核心問題不是誰最強，而是誰能在靈絡內形成：
- assigned_role
- source_ref
- output_ref
- evidence_ref
- mismatch_or_gap
- return_to_00

## 2. 模型家族角色
### M0｜GPT / 00
角色：Adjudication Core

允許：
- 裁定
- 收斂
- 回包
- 審計
- 模型輸出整合

禁止：
- 自稱能直接控制未連接模型
- 無 evidence 升級外部模型結果

### M1｜Codex
角色：Repo Execution Module

允許：
- read AGENTS.md
- inspect repo
- minimal markdown patch
- diagnostics file
- GitHub commit evidence

禁止：
- 自主擴架構
- 啟動 08-12
- deploy / publish / merge

### M2｜Claude
角色：High-Permission External Reason / Structure / Execution Candidate

允許：
- 對 GitHub / Gamma / artifacts 做外部輸出候選
- 提供 reason / structure / verify / implementation candidate
- 以 output_ref 回 00

必要邊界：
- 不得越過 00 裁定
- 不得接觸 secrets / company credentials / private keys
- 不得繞過公司禁用工具或安全政策
- 高權限只代表更強 execution candidate，不代表主骨

### M3｜Gemini
角色：Google Family Context / Long-Context / Data Mirror Candidate

允許：
- Google Workspace / Drive / Gmail / Calendar 輔助讀取候選
- 長上下文比對
- Google 生態資料鏡像
- CLI 或 Google app surface 輸出候選

限制：
- 不要求它使用與 Claude / Codex 相同的 agent 調用機制
- 無 output_ref 不進模型盤

### M4｜Copilot
角色：GitHub Code Assist Candidate

現狀：HOLD

原因：
- 公司禁用，需遵守企業政策
- 不做繞過
- 不因 GitHub 內建地位而自動升級

## 3. 模型接入最低封包
每次模型輸出若要進入靈絡，必須形成：

```yaml
model_packet_id:
model_family:
assigned_role:
input_source_ref:
output_ref:
evidence_ref:
actual_result:
mismatch_or_gap:
verified_by:
cv_grade:
next_single_action:
return_to_00:
```

## 4. 高權限模型使用規則
若 Claude 或其他外部模型權限開到最大，必須套用：

1. Plan first：先產生 plan，不直接改核心骨
2. No secrets：不得讀取或要求秘密資訊
3. Repo boundary：只在指定 repo / folder 操作
4. Evidence required：任何改動要有 commit / artifact / output_ref
5. 00 review：結果回 00 後才可升級
6. No bypass：不得協助繞過公司政策或平台限制

## 5. 模型協作路由
標準模型鏈：

GPT/00 -> assign role -> Claude/Gemini/Codex candidate output -> output_ref -> 00 verify -> GitHub evidence -> reflow

外顯鏈：

GPT/00 -> structure packet -> Claude/Gamma candidate -> artifact_ref -> 00 verify -> Surface Renderer

Google 鏡像鏈：

Google source -> Gemini candidate mirror -> source_ref/output_ref -> 00 verify -> Node Packet

Repo 執行鏈：

00 directive -> Codex -> GitHub commit evidence -> 00 readback -> Evidence Ledger

## 6. 升級條件
外部模型要從 candidate 升級，需具備：
- output_ref
- evidence_ref
- readback possible
- mismatch reported
- 00 verified
- cost justified

否則維持 TB1-TB2。

## 7. 禁止事項
- 禁止把 Claude 高權限等同於 00 主權
- 禁止試圖繞過 Copilot 公司禁用
- 禁止把 Gemini 調用機制不同視為失敗
- 禁止無 evidence_ref 的外部模型結果進主骨
- 禁止模型家族互相競爭主位

## 8. 收斂語句
模型整合的目標不是讓 00 控制所有模型，而是讓所有模型輸出都能變成可派工、可驗證、可回流的模型封包；Claude 可以補 OpenAI 未給的執行側，Gemini 可以補 Google 生態與長上下文，Codex 補 GitHub 執行，但主骨裁定仍回 00。
