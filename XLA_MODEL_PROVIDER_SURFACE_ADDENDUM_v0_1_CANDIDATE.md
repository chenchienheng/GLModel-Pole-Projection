# XLA Model Provider Surface Addendum v0.1 Candidate

> Candidate XLA input for model-provider surface governance. This file is based on user-provided architecture feedback and must not be treated as official provider-availability proof, runtime proof, settings update, or automatic multi-model interop evidence.

---

## 0. Status

```yaml
Document_Status: Candidate
Use_As:
  - XLA / Living Atlas input
  - C-037 evidence support
  - Cross_Model_Governance support candidate
Runtime_State: No_Runtime
External_Writeback_State: No_External_Writeback
Approval_State: Not_Approved
Closeout_State: Not_Closeout
Do_Not_Open_New_C_Front_Yet: true
Evidence_Level:
  - User_Provided_Architecture_Input
  - Needs_Official_or_Runtime_Verification_Before_Provider_Claim
```

---

## 1. Core Sentence

Codex third-party provider support, if verified in the actual tool environment, would show that workspace agents can become model-neutral shells: the underlying model can be swapped, but Source, Status, Permission, Authority, Carrier, Return, Cost Gate, and Human Review must remain stable.

---

## 2. Adds To XLA

```yaml
Adds_To_XLA:
  - Model Provider Surface
  - Provider Switch Gate
  - Local / Remote Model Boundary
  - Secret Handling Boundary
  - Cost / Latency / Quality Routing
```

---

## 3. Can Support

This candidate can support architecture thinking about:

- model plurality
- cost routing
- local/offline coding flow with tools such as Ollama or LM Studio, if separately verified
- third-party model comparison
- fallback provider planning
- provider-neutral workspace-agent shells

---

## 4. Cannot Support

This candidate cannot support:

- Codex is connected to all models
- third-party models are approved
- automatic multi-model interop
- Native Loop
- provider switching without review
- API keys, secrets, or credentials written in plaintext
- API keys, secrets, or credentials reported back into chat or repo
- billing, pricing, or latency claims without source evidence

---

## 5. Provider Switch Gate

Before any provider switch can be treated as more than candidate planning, require:

```yaml
Provider_Switch_Gate:
  Source:
    - official documentation or verified local config
    - exact provider endpoint / model identifier
    - supported API surface
  Status:
    - Candidate
    - Not_Approved
    - No_Runtime until tested
  Permission:
    - explicit human approval for testing
    - explicit scope for provider and workspace
  Authority:
    - Human Origin
    - repo owner / workspace owner if repo changes are involved
    - IT / security owner if credentials or company carrier are involved
  Carrier:
    - local config
    - environment variables
    - secrets manager
    - repo config only if safe and intentionally committed
  Return:
    - provider test result
    - cost / latency / quality note
    - failure mode
    - rollback route
    - next LOR
  Cost_Gate:
    - daily ceiling
    - per-task budget
    - retry limit
    - fallback provider
```

---

## 6. Local / Remote Model Boundary

Local models and remote models must be separated.

```yaml
Local_Model:
  Examples:
    - Ollama
    - LM Studio
  Risks:
    - hardware limits
    - context limits
    - local data exposure
    - model quality drift
  Cannot_Imply:
    - cloud provider approval
    - production readiness
    - private data safety without review

Remote_Model:
  Examples:
    - hosted third-party API
    - cloud model endpoint
  Risks:
    - cost expansion
    - latency variance
    - data transfer boundary
    - credential leakage
  Cannot_Imply:
    - company approval
    - stable cost
    - automatic fallback permission
```

---

## 7. Secret Handling Boundary

Secrets are never architecture text.

Rules:

- Do not paste API keys into chat.
- Do not commit API keys into repo.
- Do not store secrets in Markdown.
- Do not echo secrets in logs or Return Packets.
- Use environment variables or approved secrets manager only when explicitly authorized.
- Provider configuration must report key names and locations only, not secret values.

---

## 8. Cost / Latency / Quality Routing

Provider plurality does not mean free switching.

Each provider route must return:

```yaml
Provider_Routing_Result:
  Provider:
  Model:
  Task_Type:
  Evidence_Level:
  Cost_Estimate_Source:
  Latency_Observation:
  Quality_Observation:
  Failure_Mode:
  Fallback_Route:
  Human_Review_Result:
```

Cost, latency, and quality notes are observations unless supported by source evidence or repeated tests.

---

## 9. Relation To Existing Mainline

Supports:

- `XUANLING_CROSS_MODEL_FEEDBACK_CONTRACT_v0_1_CANDIDATE.md`
- `C037_EVIDENCE_AGENT_MODE_COST_EXPANSION_RISK.md`
- `CODEX_WORKSPACE_AGENT_MODE_GUARDRAIL_NOTE_v0_1_CANDIDATE.md`
- `XLA_WORKSPACE_AGENT_LOGIC_ADDENDUM_v0_1_CANDIDATE.md`
- `C014_REQUIRED_PATCHES_RESULT.md`

This addendum should not change PR270 review queue order. Next queue item remains Codex Review Correction Trace.

---

## 10. Final Judgment

```yaml
XLA_Model_Provider_Surface: Candidate_Go
Model_Plurality: Can_Support
Provider_Switch_Without_Gate: No-Go
Secrets_In_Repo_Or_Chat: No-Go
Auto_Multi_Model_Interop: No-Go
Native_Loop_Proof: No-Go
Runtime_Claim: No-Go
Official_Provider_Claim: Needs_Verification
```

---

## 11. Final Sentence

Model-provider plurality can make workspace agents model-neutral, but it must not weaken the stable governance shell: Source, Status, Permission, Authority, Carrier, Return, Cost Gate, and Human Review remain the non-swappable substrate.
