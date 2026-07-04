# W1 Import Queue｜General Source Mining v0.1 Candidate

Status: Candidate / Local-only / Not Approved / No Runtime / No External Writeback
Owner: W1 和澄

## Purpose
Hold general-window source-mining returns before W1 decides whether to Import, Park, Archive, Reject, or Return_to_Vitas.

## Queue Rules
1. General-window output is source-mining material only, not W1 source truth.
2. Complete and polished output still requires W1判位.
3. Any item with unclear Source, Carrier, Authority, Gate, Action, Return, or Rebuild must be parked.
4. Any item involving company raw data, secrets, credentials, M365, GitHub execution, API/MCP/OAuth, deployment, or runtime must stop and return for human decision.
5. Public-safe material is not public-approved.

## Import Queue Fields
| Field | Required | Notes |
|---|---:|---|
| Queue ID | Yes | Stable local candidate ID |
| Received At | Yes | Local timestamp |
| Source Window | Yes | General window or named W-line |
| Source Carrier | Yes | Chat, file, note, public source, etc. |
| Evidence Level | Yes | Use schema allowed values |
| Contains Company Data | Yes | If unclear, treat as risk |
| Needs Deidentification | Yes | If yes, park until reviewed |
| Suggested Decision | Yes | Import / Park / Archive / Reject / Return_to_Vitas |
| W1 Decision | Yes | W1 candidate decision only |
| Human Decision Needed | Yes | Yes/No |
| Stopped At | Yes | Gate or step where work stopped |
| Not To Claim | Yes | Claims forbidden for this item |

## Empty Queue
No source-mining items have been imported in this preflight packet.
