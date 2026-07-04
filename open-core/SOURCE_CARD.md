# SOURCE CARD｜Open XuanLing Core

Status: Candidate / Source Card / Not Approved / No Runtime

## Core

A Source Card records where an item came from, what it contains, what evidence level it has, and what it may or may not support.

## Template

```yaml
Source_Card:
  id:
  title:
  source_type:
  source_location:
  carrier:
  owner:
  received_at:
  evidence_level:
  summary:
  supports:
  does_not_support:
  restrictions:
  needs_verification:
  next_gate:
```

## Evidence Levels

```yaml
Evidence_Level:
  - Primary_Record
  - Direct_Material
  - Metadata
  - Secondary_Source
  - User_Relay
  - Model_Inference
  - Pending_Verification
```

## Not To Claim

A Source Card is not approval. It records source status and evidence boundary only.