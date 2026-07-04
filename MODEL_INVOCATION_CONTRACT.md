# Model Invocation Contract

> Durable contract for chain-bound model invocation inside the XLEN / Xuanling runtime.
> Purpose: prevent model usage from remaining informal, floating, or weakly auditable.
>
> This contract should be read as the minimum invocation discipline required to keep model participation attached to the main continuity chain.

---

## 0. Core Reading

A model invocation should not be treated as:
- a free-floating answer event
- a black-box output with no return target
- an unscoped reasoning burst

A model invocation should be treated as:
- a bounded runtime act
- a role-owned chain event
- a source-aware reasoning or generation packet
- a writeback-obligated operation

---

## 1. Minimum Invocation Fields

Every high-value model invocation should eventually be representable with at least the following fields:

- `invocation_id`
- `timestamp`
- `model_family`
- `model_surface`
- `owner_window`
- `structural_role`
- `source_refs`
- `allowed_scope`
- `task_type`
- `expected_output_type`
- `writeback_surface`
- `confidence_statement`
- `mismatch_or_gap`
- `contradiction_flag`
- `next_single_action`
- `return_target`

---

## 2. Field Meanings

### `model_family`
Which differentiated model family is being used?
Examples:
- reasoning
- drafting
- audit
- extraction
- synthesis
- multimodal
- domain-specific

### `owner_window`
Which runtime window owns the invocation?
This prevents model use from drifting outside runtime responsibility.

### `structural_role`
What role is the model serving now?
Examples:
- drafter
- auditor
- extractor
- comparer
- synthesizer
- translator
- public-view formatter

### `source_refs`
What sources, notes, registers, or artifacts is the model allowed to use for this operation?

### `allowed_scope`
What is inside scope, and what is outside scope?
This prevents silent inflation of task boundaries.

### `expected_output_type`
What is the expected output class?
Examples:
- draft
- audit
- classification
- shortlist
- synthesis
- contradiction report
- public note

### `writeback_surface`
Where must the output return?
Examples:
- repo artifact
- issue
- register
- log
- branch note
- board

### `mismatch_or_gap`
What could not be verified, completed, or safely concluded?
This is mandatory for anti-hallucination discipline.

### `contradiction_flag`
Did the invocation contradict existing chain state, source reading, or prior writeback?

### `next_single_action`
What is the smallest next valid action after this invocation?

---

## 3. Invocation Types

### Type A — Drafting Invocation
Purpose:
- generate candidate text
- structure note drafts
- produce first-pass written articulation

Risk:
- fluency may exceed grounding

Required emphasis:
- source refs
- scope
- writeback target

### Type B — Audit Invocation
Purpose:
- compare existing artifacts
- detect drift, contradiction, contamination, missing fields

Risk:
- false certainty if prior chain state is incomplete

Required emphasis:
- contradiction flag
- mismatch_or_gap
- audit surface return

### Type C — Extraction Invocation
Purpose:
- extract families, fields, tags, candidate structures from larger corpus

Risk:
- over-grouping or flattening distinct artifacts

Required emphasis:
- source refs
- role classification discipline
- structured output type

### Type D — Synthesis Invocation
Purpose:
- fold multiple sources into one coherent operational view

Risk:
- premature unification

Required emphasis:
- scope control
- contradiction visibility
- return path

### Type E — Public View Invocation
Purpose:
- produce outward-readable, presentation-friendly, or simplified surface outputs

Risk:
- surface readability overriding structural truth

Required emphasis:
- owner window
- relation to stronger source artifacts
- no sovereignty inflation

---

## 4. Contract Validity Rule

A model invocation should be considered weak or off-chain if any of the following are missing:
- no owner window
- no source refs
- no writeback surface
- no mismatch/gap field
- no next action

This does not make the output useless.
But it means the invocation has not yet met chain discipline.

---

## 5. Anti-Hallucination Contract Rule

To reduce hallucination drift, model outputs should explicitly show:
- what they know from source
- what they infer
- what remains uncertain
- what they could not verify
- what should happen next

Recommended minimal output packet:

```yaml
source_ref:
current_role:
claim_type:
confidence_or_uncertainty:
mismatch_or_gap:
next_single_action:
return_target:
```

---

## 6. Escalation Rule

If contradiction is detected, the invocation should not silently continue as final truth.
It should trigger:
1. `contradiction_flag = true`
2. source comparison
3. window owner review
4. escalation to `00` or audit surface if needed

---

## 7. Immediate Repository Implication

Future high-value model-assisted repository work should be able to cite or conform to this contract.
This makes model contribution:
- role-aware
- source-aware
- auditable
- returnable
- comparable across invocations

---

## 8. Suggested Next Artifact

- `MODEL_FAMILY_REGISTER.md`
- `MODEL_CONTRADICTION_REGISTER.md`
- `MODEL_TO_WINDOW_OWNERSHIP_MAP.md`

---

## 9. Status

- model_invocation_contract_created: true
- anti_hallucination_minimum_fields_defined: true
- contradiction_escalation_rule_defined: true
- return_to_00: true
