# [CoreTri] Work OS Chain Integration Spec

> Defines how a single-domain Work OS (e.g., Hermes Agent) is integrated
> as an execution chain node within the XuanLing multi-chain system.

---

## 1. Node Record Schema

- **node_name:** Work OS (e.g., Hermes Agent)
- **family_type:** execution / domain-specific orchestration
- **owner_window:** Domain-specific window (e.g., Development/Task Routing)
- **structural_role:** single-domain execution node
- **input_type:** Task assignments, structured instructions, domain context
- **output_type:** Task completion status, PRs, execution logs
- **writeback_surface:** GitHub Issues, Pull Requests
- **replacement_ready:** true
- **failure_mode:** Halt execution, log trace, route to AXIS-05
- **last_verified_time:** (To be updated on run)

---

## 2. External Ecosystem Absorption Properties

- **primary_axis:** AXIS-01 (World Chain)
- **secondary_axis:** AXIS-03 (Time Chain) / AXIS-05 (Review Chain)
- **input:** Bounded task constraints, isolated codebase context, API boundaries
- **output:** Code modifications, status updates, resource allocations
- **execution_boundary:** Acts strictly as an execution node. Cannot perform
  system building, UI design, or DB design. Operates strictly on logic and
  structured task execution within bounded files.
- **review_path:** Output passes through PR review by Human or embedded
  Jules reviews before merging into the core bone.
- **return_path:** PR submission and GitHub issue updates.
- **fallback:** If execution drifts or exceeds constraints, halt and escalate
  to AXIS-05 (Review Chain).

---

## 3. Integration Rules

1. **No System Building:** The Work OS must not independently author new
   architecture, redefine doctrine, or invent systemic mechanisms outside its
   explicitly bounded task.
2. **No UI / DB Design:** The node is restricted to logic, orchestration,
   and structural updates, not visual presentation or data persistence modeling.
3. **Traceable Actions:** Every meaningful state change initiated by the
   Work OS must have a corresponding pull request or verifiable issue comment.
4. **Immediate Fallback on Ambiguity:** If instructions are unclear or conflict
   with established master laws, the Work OS must query the user or route the
   flag to AXIS-05 rather than guessing.

---

## 4. mismatch_or_gap
No existing framework formally restricted single-domain execution nodes from
attempting UI or DB tasks previously; this spec introduces those hard boundaries
to prevent scope creep.

## 5. unresolved_risks
If the Work OS receives instructions that mix logic updates with UI tweaks,
the task parsing mechanism must successfully reject the out-of-bounds UI portion
without failing the entire valid logic payload.

## 6. next_single_recommended_action
Ensure task prompt templates passed to the Work OS explicitly state the
constraints: "NO SYSTEM BUILDING. NO UI/DB DESIGN. LOGIC/EXECUTION ONLY."
