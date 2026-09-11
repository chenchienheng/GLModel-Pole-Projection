# Replit Relay Spec

Department: Adapter Layer
Agent Block: Replit Relay
Node ID: ADP-003
Window: W0
Platform Writer: ChatGPT
Version: v0.1

## Core
Replit is the interaction relay layer for board, task, and log flow.

## Input
- board index
- task items
- blockers
- log refs

## Output
- interactive board view
- task relay actions
- log relay form

## Rules
- read first
- controlled writeback later
- do not replace GitHub history
