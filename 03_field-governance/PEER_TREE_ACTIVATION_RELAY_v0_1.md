# Peer Tree Activation Relay v0.1

## Purpose

Enable activation of peer-tree nodes (Gemini, Claude, external GPT instances) that are connected but not directly callable.

## Core Concept

Connection ≠ activation.

A relay is required to:
- carry activation packet
- receive response
- enforce return packet

## Relay Carriers

- Slack channel
- Notion page
- Google Doc
- Linear task

## Activation Packet

```yaml
Peer_Tree_Activation:
  Role:
  Field_Position:
  Task:
  Boundary:
  Required_Output:
  Return_Path:
```

## Return Packet

```yaml
Peer_Tree_Return:
  Findings:
  Gaps:
  Risk:
  Can_Support:
  Cannot_Support:
  Next_Action:
  Return_Path:
```

## Flow

1. MotherTree creates activation packet
2. Packet placed into relay carrier
3. Peer-tree reads and executes
4. Response returned via carrier
5. Result re-ingested into GitHub / Linear

## Anti Drift

- do not assume connection equals control
- do not bypass boundary
- do not accept output without return packet

## Status

Draft v0.1
