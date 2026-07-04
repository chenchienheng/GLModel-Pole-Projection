# Pulse Rollup

Department: Native Board
Agent Block: Pulse Rollup
Node ID: NBD-003
Window: 00
Platform Writer: ChatGPT
Version: v0.1
Status: active

## Core
Window 00 is the rollup point for GitHub-driven pulse inspection.

## Required Output
- valid GitHub delta items
- mapped windows
- windows with no action
- writeback-required items
- exceptions
- next single actions

## Rollup Template
### Current State
- GitHub delta source: active / inactive
- tri-key extraction: complete / partial / missing
- mapping coverage: complete / partial / missing
- writeback targets: complete / partial / missing

### Exceptions
1. 
2. 
3. 

### Next Single Actions
- 00:
- 01:
- 02:
- 03:
- 04:
- 05:
- 06:
- 07:

## Rules
- rollup starts from GitHub delta, not from window self-report
- unresolved deltas stay in 00 hold state
- no-action windows must be explicitly marked
- each rollup should preserve source refs or delta ids
