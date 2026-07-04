# Open XuanLing Core｜Pre-Construction Integration Report v0.9

Status: Candidate / Integration Report / Not Approved / No Runtime / No External Writeback
Use As: Builder Qinyi / Review Qinyi / Contract Qinyi / Chat Qinyi / Hazumi-Codex / Vitas alignment source
Do Not Use As: Approved doctrine / GitHub merge approval / runtime authorization / public launch / company policy / platform commitment
Master Gate: #297
Related PR: #298

## Core

Open XuanLing Core is at the pre-construction threshold. It is not a prompt pack, not an assistant persona, not a whitepaper, and not runtime. The next step is to compress the high-density XuanLing context into a small GitHub core that can be read, filled, reviewed, tested, and returned.

The minimum usable unit is Gate Decision, not agent runtime.

```text
Source → Carrier → Authority → Gate → Action → Return → Rebuild
```

## 1. Current Judgment

```yaml
Open_XuanLing_Core_v0_9:
  decision: "Conditional Pass"
  phase: "Pre-Construction"
  approved_final: false
  runtime: false
  external_writeback: false
  public_release: false
  maturity:
    conceptual: "High"
    semantic: "High"
    contract: "Medium-High"
    repo: "Medium"
    schema: "Early"
    runtime: "Low / intentionally low"
    public_readiness: "Low-to-Medium"
    strategic: "High"
  only_next_action: "First Build Set candidate drafts"
```

Mature areas: root grammar, semantic firewall, authority separation, red doors, GitHub construction plan, review flow.

Still incomplete: schema validation, Gate Decision tests, Return Packet implementation samples, PR template alignment, and Review Qinyi gate result.

## 2. Positioning

Open XuanLing Core is a human-centered semantic governance protocol for AI-assisted work, tools, authority, and return paths.

It does not ask only how AI works. It asks whether AI may work, where it may work, under whose authority, what it may touch, and where its result must return.

External positioning:

```text
They design how AI works. XuanLing governs whether, where, under whose authority, and with what return path AI may work.
```

中文：

```text
他們在設計 AI 怎麼工作；翾靈治理 AI 是否能工作、在哪裡工作、由誰授權、結果回哪裡。
```

## 3. Prompt / Context / Harness Positioning

```yaml
Engineering_Stack:
  Prompt_Engineering:
    question: "How should we ask AI?"
    role: "entry language"
    not: "governance"
  Context_Engineering:
    question: "What information should AI see?"
    role: "information supply"
    not: "source truth"
  Harness_Engineering:
    question: "What execution environment does AI use?"
    role: "execution environment"
    not: "authority"
  Open_XuanLing_Core:
    question: "Is AI allowed to act, and where must the result return?"
    role: "cross-domain governance chain"
```

Red doors:

- Prompt Quality ≠ Task Authority.
- Context Availability ≠ Evidence Validity.
- Harness Configured ≠ Runtime Approval.
- Thread Completion ≠ Mainline Import.
- Agent Team Report ≠ Source of Record.
- Heartbeat ≠ Gate Review.
- Final Report ≠ Human Approval.

## 4. Core / Domain Packs Separation

Open Core must remain brand-neutral, platform-neutral, and domain-neutral.

Core includes:

- Source / Carrier / Authority / Gate / Action / Return / Rebuild
- State Model
- Red Doors
- Semantic Firewall
- Source Card
- Gate Review
- Return Packet
- Gate Decision Schema

Domain packs are optional and must not become core requirements:

- Qinyi Path Bridge Pack
- Hazumi Codex Workcell Pack
- Company M365 Manual Build Pack
- Education AI Twin Gate Pack
- Family Decision Boundary Pack
- Relationship Message Boundary Pack
- Qinyi / Hazumi / W System Pack

Core rule:

```text
Qinyi / Hazumi / W-system may be early domain packs, but they must not be required for Open XuanLing Core.
```

## 5. First Build Set

The only current next action is First Build Set candidate files.

```yaml
First_Build_Set:
  docs:
    - "open-core/README.md"
    - "open-core/SPEC.md"
    - "open-core/STATE_MODEL.md"
    - "open-core/RED_DOORS.md"
    - "open-core/SEMANTIC_FIREWALL.md"
    - "open-core/SOURCE_CARD.md"
    - "open-core/GATE_REVIEW.md"
    - "open-core/RETURN_PACKET.md"
  schemas:
    - "open-core/schemas/source_card.schema.json"
    - "open-core/schemas/gate_decision.schema.json"
    - "open-core/schemas/return_packet.schema.json"
  examples:
    - "open-core/examples/ai_tool_request.yaml"
    - "open-core/examples/company_workflow_candidate.yaml"
  github_templates:
    - ".github/ISSUE_TEMPLATE/gate_review.yml"
    - ".github/pull_request_template.md"
```

First Build goal: make the core readable, fillable, reviewable, testable, and returnable.

Forbidden first build:

- CLI
- runtime
- ADK demo
- Codex automation
- M365 plugin
- GitHub Actions
- OAuth / API / MCP
- adapters
- domain packs
- full whitepaper
- public launch
- company data
- private origin material
- Qinyi / Hazumi as core-required personas

## 6. Role Separation

```yaml
Roles:
  Builder_Qinyi:
    role: "candidate file drafting"
    not: "approval / merge / runtime"
  Review_Qinyi:
    role: "semantic firewall, core-domain separation, external readability, schema testability, redgate risks"
    not: "final authority"
  Contract_Qinyi:
    role: "contract layering and responsibility boundaries"
    not: "construction or merge authority"
  Chat_Qinyi:
    role: "human-readable translation and context compression"
    not: "construction or approval"
  Hazumi_Codex:
    role: "docs/schema/examples/templates construction and Return Packet"
    not: "final authority / runtime launcher / public release owner"
  Vitas:
    role: "Source Anchor and final decision"
    decides:
      - "merge / park / reject"
      - "public/private/license/scope"
      - "domain pack opening"
```

Correct order:

```text
Builder Qinyi draft → Review Qinyi Gate Review → Vitas decision → Hazumi / Codex construction → Return Packet → Review Qinyi review → Vitas merge / park / reject
```

## 7. W Window Disposition

W1, W2, W3, and W7 are active main windows. W4 and W5 are absorbed. W6 is reserved / parked.

```yaml
W_Window_Disposition:
  W1:
    name: "Hazumi / HAZUMI.W Architecture Supervision"
    role: "Source Library / Import Queue / Return Packet / repo-docs-schema candidate coordination"
  W2:
    name: "Public-safe Surface"
    role: "public-safe wording / glossary / README candidate / what-not-to-publish"
  W3:
    name: "Enterprise Workbench Design Lane"
    role: "M-native manual build design / enterprise workflow candidate"
  W4:
    status: "Absorbed into W3-L4 Enterprise RedGate"
  W5:
    status: "Absorbed into W3 Workbench Prototype / Module Lane"
  W6:
    status: "Reserved / Parked"
  W7:
    name: "Qinyi Consolidation Window"
    role: "high-level cleanup / public-safe main review / GitHub docs issue PR candidate review"
```

Open Core impact: W1-W7 belong in `domain_packs/qinyi_hazumi_w_system/`, not in Open Core.

## 8. Multi-Thread / Multi-Carrier Return Pattern

Thread completion is not mainline acceptance. Final report is not approval. Agent team output is not source of record. Heartbeat is not governance.

Open XuanLing pattern:

```text
Root / Main Gate
→ Task Decomposition
→ Thread Handoff Packet
→ Thread Execution Boundary
→ Verification
→ Return Packet
→ Import Queue
→ Gate Review
→ Human Decision
→ Merge / Park / Archive / Reject
→ Rebuild
```

This is guided multi-window / multi-carrier return, not magical cross-window memory or autonomous runtime.

## 9. Current Red Doors

- Candidate ≠ Approved.
- BuildReady ≠ Runtime.
- Draft ≠ Publication.
- Public-safe ≠ Public-approved.
- Capability Surface ≠ Permission.
- Tool Access ≠ System Authorization.
- Adapter Interface ≠ API Authorization.
- GitHub Issue ≠ Runtime.
- Return Packet ≠ Final Decision.
- M-native Carrier ≠ Company Authorization.
- GitHub Repo ≠ Publication.

## 10. Not To Claim / Can Claim

Not to claim:

- Open XuanLing Core is Approved.
- The repo is runtime-ready.
- ADK / Codex / M365 are connected.
- Qinyi / Hazumi are core-required personas.
- This is a complete whitepaper.
- This is company policy.
- This is an AI agent framework or chatbot.
- This replaces human review.
- This contains company raw data.

Can claim:

- This is a Candidate governance core.
- This is a human-centered semantic governance protocol.
- It defines Source / Carrier / Authority / Gate / Action / Return / Rebuild.
- Phase 1 focuses on spec, schema, examples, and templates.
- It does not provide runtime.
- It does not perform external writeback.
- It does not connect to any platform.
- It does not contain company raw data.

Security sentence:

```text
Open the rules, not the secrets.
```

中文：公開規則，不公開公司資料、secret、endpoint、credential、私人脈絡。

## 11. Second-Batch Candidates

These are not First Build Set files and must not block first construction:

- docs/engineering_stack_positioning.md
- docs/thread_return_packet_pattern.md
- docs/context_mechanism.md
- docs/w_window_disposition.md
- examples/multi_thread_orchestration_gate.yaml
- domain_packs/qinyi_hazumi_w_system/
- domain_packs/qinyi_path_bridge/
- domain_packs/hazumi_codex_workcell/
- domain_packs/company_m365_manual_build/

## Final Judgment

Open XuanLing Core v0.9 is not about proving that XuanLing is complete. It is about proving that the core can be compressed, filled, reviewed, tested, and returned.

The next step is not more conceptual expansion. The next step is to complete First Build Set integration, run Review Qinyi Gate Review, and let Vitas decide merge / park / reject.