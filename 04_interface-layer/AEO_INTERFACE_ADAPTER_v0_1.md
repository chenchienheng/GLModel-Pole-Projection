# AEO Interface Adapter v0.1

## Purpose

Transform internal recomposed outputs into AI-readable, recommendation-ready structured content.

## Boundary

- non-core
- output layer only
- no logic rewrite
- no registry change

## Input

```yaml
Recomposition_Output:
  Entity:
  Problem:
  Solution:
  Differentiation:
  Evidence:
  Output:
```

## AEO Mapping

```yaml
AEO_Output:
  Entity:
  Problem_Context:
  Solution:
  Differentiation:
  Trust:
  Structured_Output:
```

## Rule

- preserve Source_ID
- preserve Boundary
- no hallucinated claims
- compress but not distort

## Return Path

```yaml
Return:
  To: Interface Layer
  Next: Distribution / Qinyi / External
```

## Status

```yaml
Status: Draft_v0_1
Layer: Interface
Core_Status: Non_Core
Gate_Color: Yellow
```
