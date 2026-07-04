# Main Branch Taskboard Reconciliation

## Purpose

Re-align internal taskboard and execution context with the current `main`
branch state, shifting from a flat task list to an axis-execution absorption
model.

## Scope

- scan current `main`
- map legacy execution tasks under Master Axis envelopes
- maintain state layering (ACTIVE, STRUCTURE_ESTABLISHED, SUPERSEDED)
- establish the five master axes as the active master-chain view
- do not automatically close issues

## 1. Active Master-Chain View

The 5 Master Axes form the active structural view of the repository. They are
the stable structural envelopes governing all execution trace logic below them:

- **AXIS-01 (World Chain)**: Issue **#16**
- **AXIS-02 (Existence Chain)**: Issue **#17**
- **AXIS-03 (Time Chain)**: Issue **#18**
- **AXIS-04 (Space Chain)**: Issue **#19**
- **AXIS-05 (Review Chain)**: Issue **#20**

## 2. Absorbed Execution Traces

The following execution issues are no longer independent tasks; they are
absorbed by their corresponding CoreTri Master Axis definitions as execution
traces.

| Execution Issue | Absorbed By | Trace Context |
| :--- | :--- | :--- |
| **#1** | **#17** (AXIS-02) | Identity, boundary definition, corpus existence mapping. |
| **#2** | **#16** (AXIS-01) | External environment bounds. |
| **#6** | **#18** (AXIS-03) | Scheduling topology and runtime logic. |
| **#9** | **#19** (AXIS-04) | Structural placement and cross-linking verification. |
| **#15** | **#16** (AXIS-01) | Ecosystem expansion and snapshot readiness. |

## 3. State Layering Framework

To preserve execution trace and replay continuity, do not blindly close issues.
Issues must be mapped strictly according to this state layering:

- **ACTIVE**: In-flight execution tasks not yet merged to `main`.
- **STRUCTURE_ESTABLISHED**: Absorbed traces (#1, #2, #6, #9, #15) and
  active Master Axes (#16, #17, #18, #19, #20). These **must remain open**.
- **SUPERSEDED**: Work completely replaced with no remaining dependency trace.

## 4. Single Control Surface Rule

This file (`MAIN_BRANCH_TASKBOARD_RECONCILIATION.md`) is the **single
control surface** for taskboard reality.

**Rule:** Do not close any of the tracked issues automatically. No execution
chains or runtime expansions are to be initiated without explicit prior mapping
to the 5 Master Axes.

## 5. Mismatch or Gap

- **Gap**: Relying solely on the default GitHub UI state obscures the
  structural relationship between the Master Axes and their absorbed execution
  traces.
- **Mismatch**: Viewing #1, #2, #6, #9, and #15 as "stale tasks to be closed"
  violates the trace continuity requirement. They are established structural
  components.

## 6. Next Recommended Action

- Maintain the current issue state and structure. No automated closure actions
  are required or permitted.
