# W2 Evidence Boundary Prompt Pack v0.1 Candidate

Status: Candidate / Prepare Only / Not Dispatched / Not Approved / No Runtime / No External Writeback
Owner: W1 preparation; W2 dispatch requires Vitas approval

## 一句核心
先分清楚「我知道的事、我推論的事、還要查證的事」，再讓 AI 幫忙整理；不要把 AI 的自信語氣當成證據。

## 一般人版解釋
這個提示包不是要禁止使用 AI，而是讓使用者在貼資料、問問題、整理輸出前，先標出資料來源、敏感程度、可公開程度與需要人審的地方。

## Evidence Boundary Prompt
請把以下內容分成三欄：
1. Facts：原文或可靠來源已明確支持的事。
2. Inferences：根據 Facts 推論出的可能解讀。
3. To Verify：仍需查證、補來源、問人或等待批准的事。

同時請標註：
- 是否含公司資料、客戶資料、合約、財務、技術、圖面、內部專案資訊或個資。
- 是否需要去識別化。
- 是否可以作為 public-safe 草稿。
- 哪些句子不能宣稱為 Approved、Runtime、官方政策、投資建議或公司授權。

## Facts / Inferences / To Verify Template
| Type | Content | Source | Confidence | Needs Human Review |
|---|---|---|---|---|
| Fact |  |  |  |  |
| Inference |  |  |  |  |
| To Verify |  |  |  |  |

## What Not To Claim
- This completely prevents hallucination.
- Pasting data is always safe.
- AI can never check information.
- Data Boundary equals Final Approval.
- This is an Approved public guide.
- This can be published to GitHub or externally now.

## Public-safe Wording Candidate
Use AI to organize low-risk or fictional examples, but keep sensitive data out, label uncertain points, and route anything requiring approval back to a human owner.

## Internal-only Note
This pack is a low-risk test preparation artifact. It does not dispatch W2, approve publication, create runtime, or authorize external writeback.

## Source_Mining_Return Stub
See `SOURCE_MINING_RETURN_SCHEMA_v0_1.yaml`; this test should return to W1 with evidence level, risks, not-to-claim items, and a suggested W1 queue decision.

## W1 Import Queue Suggestion
Suggested initial decision: Park until Vitas approves actual W2 dispatch or W1 test execution.
