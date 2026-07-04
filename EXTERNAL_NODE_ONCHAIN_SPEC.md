# External Node On-Chain Specification

> Durable specification for onboarding external ecosystem nodes into the XLEN / Xuanling runtime.
> Purpose: ensure external tools, platforms, and services become chain-bound nodes instead of uncontrolled dependencies.

---

## 0. Core Reading

External nodes should not be treated as:
- isolated tools
- uncontrolled dependencies
- opaque black-box integrations

They should be treated as:
- role-bound nodes
- replaceable ecosystem members
- chain-aware execution surfaces

---

## 1. On-Chain Conditions for External Nodes

An external node is considered on-chain only when:

1. **role is defined**
2. **owner_window is assigned**
3. **input/output is bounded**
4. **writeback path exists**
5. **replacement is possible**

---

## 2. Node Record Schema

Each node should include:

- `node_name`
- `family_type`
- `owner_window`
- `structural_role`
- `input_type`
- `output_type`
- `writeback_surface`
- `replacement_ready`
- `failure_mode`
- `last_verified_time`

---

## 3. Failure Mode Rule

Each node must define:
- what happens when it fails
- fallback path
- alternative node

---

## 4. Anti-Dependency Rule

A node is unsafe if:
- it becomes irreplaceable
- it holds critical state without writeback
- it controls routing without visibility

---

## 5. Current Priority Nodes

| Node | Family | Role | Status |
|---|---|---|---|
| GitHub | repository/writeback | bone + writeback anchor | stable |
| Gmail | communication/intake | event intake | partial |
| Google Drive | carrying mesh | storage + draft | early |
| workflow tools | board/orchestration | routing support | early |

---

## 6. Next Expansion

- calendar/time nodes
- public web nodes
- multi-model nodes

---

## 7. Status

- external_node_onchain_spec_created: true
- node_role_binding_defined: true
- dependency_control_started: true
- return_to_00: true
