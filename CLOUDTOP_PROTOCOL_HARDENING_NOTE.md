# CloudTop Protocol Hardening Note

> Purpose: Harden CloudTop protocol rules to ensure cross-window handoff
> operates without repeated re-explanation and maintains semantic integrity.

---

## 1. Decision States (Go / No-Go / Conditional Pass)

Every cross-window dispatch or handoff must evaluate against these states:

### GO
- **Criteria:** Sufficient evidence, correct scope, allowed action, clear return
  path.
- **Action:** Proceed with execution and writeback.

### NO-GO
- **Criteria:** Unsafe, unsupported, unauthorized, wrong layer, or irreversible
  risk.
- **Action:** Halt execution immediately and route failure to AXIS-05.

### CONDITIONAL PASS
- **Criteria:** Useful but requires source hardening, boundary note, user
  authorization, or further scout dispatch.
- **Action:** Execute with strict boundary notes and request human review.

---

## 2. Closure Gate Notes

### Entry Gate (Intake)
- **Condition:** All required fields in the intake packet must be present.
- **Condition:** Source must be verified against `source_map.md`.

### Exit Gate (Closure)
- **Condition:** Output must align with the target window's schema.
- **Condition:** Return path must be registered in the `Legion_Log`.

---

## 3. Structural Alignment

### 3.1 Asset Schema Alignment (#120)
- All outputs must align with the **Full-Lifecycle Asset Matrix**.
- Assets must be uniquely identified by `Asset_ID`.

### 3.2 Relay Alignment (#121)
- All inter-node communication must pass through the **XuanLing Relay Layer**.
- Relay flow: Capture → Field Identify → Dependency Map → Boundary Check.

### 3.3 Bridge Alignment (#122)
- Coordinate via the **Gemini-Jules-Codex Translation Bridge**.
- Maintain Packet Contracts (Scout, Jules, Repo) for all translations.

---

## 4. Semantic Hardening Rules

To prevent semantic drift during translation and handoff:

- **Forbidden Fact Promotion:** `Pending`, `Radar`, or `Signal` must NEVER be
  converted into `Fact` without explicit verification.
- **Investment Protection:** `Investment` must not be written as "project
  opportunity".
- **Capability Protection:** `Capability` must not be written as "cooperation
  willingness".

---

## 5. Return Fields & Legion Log

Every output must include the following fields:

- **Asset_ID:** Unique identifier for the generated artifact.
- **Location_Link:** Direct link to the artifact (GitHub URL or path).
- **Return_Path:** Canonical path for the return loop.
- **Legion_Log:** Structural log entry using Pascal_Case keys:
  - `Round_ID`
  - `Node`
  - `Action`
  - `Output`
  - `Next_Action`
  - `Risk_or_Blocker`
  - `Return_Path`

---

## 6. Safety Boundaries

- No final doctrine self-authoring.
- No mother-law rewrite.
- No merge or closure without human review.
- No sensitive data in the public repository.

---

## 7. MotherTree Merge Gate Update Discipline

To preserve structural integrity and execution trace continuity after a
baseline merge (e.g., MotherTree Clearance):

- **Baseline Preservation:** Never overwrite already-merged artifacts on `main`.
- **Clean Rebase:** Always update/rebase against the latest `main` before
  final merge.
- **Scope Locking:** Do not introduce out-of-scope files, runtime expansions,
  or API activations during the hardening update.
- **Conflict Resolution:** If a conflict occurs with a merged Clearance
  Report, the `main` branch version takes precedence.
