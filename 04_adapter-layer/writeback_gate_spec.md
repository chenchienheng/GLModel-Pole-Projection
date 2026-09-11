# Writeback Gate Spec

Department: Adapter Layer
Agent Block: Writeback Gate
Node ID: ADP-004
Window: W0
Platform Writer: ChatGPT
Version: v0.1

## Core
All external writes must pass a gate before returning to GitHub.

## Gate Checks
- source ref exists
- target path exists
- version field exists
- log entry required

## Return Path
external layer -> gate check -> GitHub write -> log update

## Fail Rule
if any check fails, stop external write and return to read-only mode
