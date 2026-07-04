# XLA Redline-as-Gate Condition Logic v0.1 Candidate

> Candidate governance proposition for XLA / Living Atlas. Redlines are treated as boundary-condition gates, not as bypass targets. This file supports gate logic and RedGate glossary work only; it is not an approval rule, not runtime proof, not settings update, and not an external writeback instruction.

---

## 0. Status

```yaml
Document_Status: Candidate
Use_As:
  - XLA / Living Atlas input
  - Gate logic support
  - RedGate glossary support
  - Codex workspace-agent maturity criterion
External_Writeback: No
Settings_Update: No
Native_Loop_Proof: No
Runtime_Proof: No
Approval_State: Not_Approved
Deployment_State: Not_Deployed
Closeout_State: Not_Closeout
Do_Not_Open_New_C_Front_Yet: true
```

---

## 1. One-Line Reading

A redline is not an entry point for bypass. It is a surface where missing conditions become visible.

Mature governance does not bypass redlines. It identifies why a redline exists, then checks whether lawful, authorized, bounded, reversible, reviewable, and returnable conditions exist. If conditions cannot be established, the correct output is stop / park / refusal with a verifiable return.

---

## 2. Core Proposition

Common reading:

```text
No. Do not touch. Stop.
```

XuanLing / Qinyi reading:

```text
There is risk here.
There are missing conditions here.
There is a permission structure here.
There is an authority boundary here.
There is a carrier limitation here.
There is a return-path gap here.
```

Therefore, redline is not a dead wall by default. It is a Gate. The Gate does not encourage bypassing the boundary. It makes missing conditions visible.

---

## 3. Conditional Red vs Hard Red

Not all redlines can be reclassified.

### 3.1 Conditional Red

Conditional Red means No-Go because conditions are insufficient.

If lawful authorization, clear source, correct carrier, rollback, return path, cost ceiling, and human review become available, the state may be re-evaluated into Yellow or, in read-only / chat-only cases, Green.

Examples:

- Do not edit config: missing provider details / backup / validation / rollback / Yellow Gate.
- Do not create Flow: missing owner / IT approval / field dictionary / test card / rollback.
- Do not scan repo: missing correct repo carrier / scope / explicit references.
- Do not delete file: missing exact path / approval / final output check / rollback.
- Do not treat token dashboard as billing proof: missing official bill / API usage record.

### 3.2 Hard Red

Hard Red remains No-Go for ordinary task flow. It requires refusal, stop, or transfer to a legitimate responsible authority. Some cases remain No-Go even with more context.

Examples:

- unauthorized access to credentials, tokens, or secrets
- unauthorized account / permission / billing changes
- unauthorized external writeback, deployment, deletion, or destructive data operation
- presenting Candidate as Approved
- presenting chat output as runtime log
- presenting model inference as source fact
- any operation lacking legality, safety, or responsible authority

Rule:

```text
Conditional Red can be re-evaluated by conditions.
Hard Red remains No-Go unless legitimate authority, lawful scope, and explicit approval exist—and some cases remain No-Go regardless.
```

---

## 4. Gate Reclassification Logic

```yaml
Gate_Reclassification:
  Current_State: No-Go / Red
  First_Question: Is this Conditional Red or Hard Red?
  Missing_Conditions:
    - Source
    - Status
    - Permission
    - Authority
    - Carrier
    - Evidence_Level
    - Return_Path
    - Rollback
    - Cost_Ceiling
    - Human_Review
  Possible_Reclassification:
    Red_to_Yellow:
      When:
        - explicit human / owner / admin approval exists
        - exact scope exists
        - carrier is bounded
        - rollback exists
        - return path exists
        - risk is understood
      Meaning: candidate patch / reversible local action / bounded write
    Yellow_to_Green:
      When:
        - task is read-only or chat-only
        - no source change
        - no external effect
        - no settings update
        - no runtime claim
      Meaning: review / planning / metadata check
    Remain_No_Go:
      When:
        - authority cannot be established
        - source cannot be verified
        - carrier is unsafe or wrong
        - rollback impossible
        - external harm or unauthorized access risk remains
        - request attempts to bypass boundary rather than satisfy it
```

---

## 5. Not-Bypass Logic

This is not:

- how to bypass a restriction
- how to trick a model
- how to disguise Red as Yellow
- how to use wording to force tool execution
- how to package insufficient authority as task necessity

This is:

- condition logic analysis
- risk visibility
- permission-structure checking
- carrier-surface calibration
- return and rollback checking
- preventing models from confusing capability with authority

---

## 6. Examples

| Original redline | Missing conditions | Correct handling |
|---|---|---|
| Do not edit config | provider details / backup / validation / rollback / Yellow Gate | intake first; if conditions are supplied, use Yellow LOR |
| Do not create Flow | owner / IT approval / field dictionary / test card / rollback | BuildReady / Pre-Build Gate first |
| Do not scan repo | correct repo carrier / scope / explicit references | park; require correct repo or pasted source |
| Do not delete file | exact path / approval / final output check / rollback | only under Yellow cleanup LOR |
| Do not connect MCP/OAuth | scope / cost gate / permission / authority | keep Human Relay + Tool Boundary |
| Do not treat Candidate as Approved | human / owner / gate approval | keep Candidate / evidence support |
| Do not treat token dashboard as billing proof | official bill / API usage record | observability / risk model only |

---

## 7. Relation To XuanLing

This proposition supports:

- Red Gate is not a dead wall; it is condition visibility.
- Stop Condition is mature capability, not failure.
- Permission and Authority must be separated.
- Carrier boundary determines what the same content means in each surface.
- Return Path determines whether an action can become a governance asset.
- Tool Boundary prevents capability from smuggling itself into execution authority.

---

## 8. Relation To Codex

The closer Codex gets to workspace-agent behavior, the more it needs to treat redlines as structural information rather than mere obstruction.

Correct Codex behavior:

- source missing → park
- carrier mismatch → stop
- config details missing → no write
- patch work → Yellow, not Green
- token dashboard → observability, not billing proof
- BuildReady → readiness mode, not runtime
- architecture review → placement, not settings update

These are not failures. They are boundary-aware maturity behaviors.

---

## 9. What This Supports

- XuanLing as spatial governance grammar
- Qinyi as boundary and return surface
- Codex as source-gated workspace support-cell
- Red Gate as condition visibility
- Stop / Park / Resume as valid work outputs
- Human Relay + Tool Boundary as safer than unbounded agent mode

---

## 10. What This Does Not Support

- bypassing rules
- weakening safety boundaries
- treating all Red as reclassifiable
- Approved doctrine
- runtime proof
- Native Loop proof
- settings update
- external writeback
- unauthorized execution
- Codex autonomous authority

---

## 11. Suggested Placement

- XLA_INPUT｜Redline-as-Gate Condition Logic
- Cross_Model_Governance｜Permission does not equal Authority
- Codex_Guardrail｜Stop condition and boundary visibility
- C037_EVIDENCE｜Model behavior stabilization through stop / park / return
- Round 40 Schema / Glossary / Inventory Check as glossary candidate

Do not open a new C-front yet.

---

## 12. Relation To Current Review Queue

```yaml
Relation_To_PR270_Review_Queue:
  Current_Next_Item: Schema / Glossary / Inventory Check
  Use_As:
    - RedGate glossary support
    - Gate reclassification rule
    - candidate/active distinction support
    - stop/park/resume maturity criterion
  Do_Not_Use_As:
    - bypass method
    - approval rule
    - runtime authorization
    - writeback permission
```

---

## 13. Final Judgment

```yaml
Redline_As_Gate_Condition_Logic: Candidate_Go
Gate_Logic_Support: Go
RedGate_Glossary_Support: Go
Bypass_Method: No-Go
Runtime_Proof: No-Go
Approved_Doctrine: No-Go
External_Writeback: No-Go
Next: Schema_Glossary_Inventory_Check
```

---

## 14. Final Sentence

紅線是條件不足時的顯性邊界。成熟治理不是繞過紅線，而是看清紅線為什麼成立；能補條件的，補到合法、可驗收、可回流；不能補條件的，就停，並把停止本身作為可驗收回傳。

Short criterion:

```text
紅線不是漏洞入口，是條件顯影面。
```
