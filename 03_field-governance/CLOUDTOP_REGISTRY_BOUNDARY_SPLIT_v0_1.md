# CloudTop / Registry Boundary Split v0.1

> Status: Candidate / review packet
> Related issue: #167
> Purpose: separate company data work surfaces from return-governance record surfaces before any formal rule review.

---

## 1. Core

CloudTop and GitHub / Registry Tree are different layers.

CloudTop is the company data and source-view work surface. GitHub / Registry Tree is the governance, review, lineage, and return-path record surface.

This file is not an approved doctrine. It is candidate split evidence for review.

---

## 2. CloudTop / Drive Layer

```yaml
CloudTop_Drive_Layer:
  role: company data / ERP-CRM-knowledge-base pre-structure / Taiwan strategy DB carrier
  may_hold:
    - source ledger
    - entity records
    - claim / matrix / view candidates
    - GM View candidates
    - CWC company-level records
    - capability / role / link / source fields
  output_type:
    - company-data structure
    - source-view work surface
  required_gates:
    - source-view separation
    - evidence boundary
    - company-sensitive data boundary
    - GM View hardening
```

---

## 3. GitHub / Registry Tree Layer

```yaml
GitHub_Registry_Tree_Layer:
  role: return-chain governance / window protocols / structural rules / MotherTree review tasks
  may_hold:
    - boundary rules
    - review tasks
    - return-path governance
    - issue / PR lineage
    - candidate patch tasks
  output_type:
    - governance record
    - candidate rule
    - review packet
  required_gates:
    - Candidate vs Approved
    - Return Packet vs Closeout
    - issue / PR trace
    - MotherTree review
```

---

## 4. Separation Rule

```yaml
Separation_Rule:
  CloudTop_View:
    can_support: company-side data work and strategy view preparation
    cannot_support: final governance rule by itself

  GitHub_Governance_Record:
    can_support: structural review, lineage, boundary rule candidate, and return path
    cannot_support: live company database or company-sensitive operating source by itself
```

---

## 5. Bridge Rule

CloudTop may generate company views, source ledgers, or strategy packets. Those views become governance material only after review and return through GitHub / Registry Tree.

GitHub may record rules, reviews, and return paths. It does not replace the company data layer.

Qinyi Assistant updates remain downstream of MotherTree review and must not be generated directly from this candidate file.

---

## 6. Minimal Review Checklist

```yaml
Review_Checklist:
  - Is CloudTop clearly scoped as company data / source-view work surface?
  - Is GitHub clearly scoped as governance / review / return-path surface?
  - Does this preserve Candidate / Approved separation?
  - Does this avoid mixing company data with registry governance?
  - Is a later formal rule file needed?
```

---

## 7. Current Decision

```yaml
Decision: Conditional_Pass_Candidate
Status: Candidate_Boundary_Split
Review_State: needs_MotherTree_review
Return_Path: Issue #167 -> candidate PR -> MotherTree review -> explicit Go / Conditional Pass / No-Go
```
