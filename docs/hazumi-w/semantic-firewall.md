# Semantic Boundary｜Candidate State Guard

Status: Candidate / Governance Guard / No Runtime
Master Gate: #297

## Core

This document defines state boundaries for XuanLing Cloud Workbench. It keeps draft, candidate, approval, runtime, publication, and company-side action separate.

## Core Distinctions

- Draft != Candidate.
- Candidate != Approved.
- Approved != Runtime.
- BuildReady != Runtime.
- Review != Human Approval.
- Return Packet != Closeout.
- Public-safe != Public-approved.
- GitHub issue/comment != installed agent.
- GitHub docs != deployed system.
- Manual build guide != completed company build.
- Capability != Permission.

## Time Sovereignty

Each task, file, decision, and action has a time-state. The next state cannot steal unfinished review, evidence, or responsibility from the previous state.

## Authority Rings in Time

- R0 Human Source: final approval and responsibility.
- R1 Governance Trunk: state definitions and gates.
- R2 Delivery Trunk: reviewable candidate delivery.
- R3 Candidate Branch: support, drafting, experiment.
- R4 Evidence QA: evidence, manifest, crosswalk, diff.
- R5 Temp Debug: temporary troubleshooting.
- R6 External Relay: GitHub / DCP / public-safe / human relay.

## What Not To Claim

- Do not claim candidate docs are approved doctrine.
- Do not claim an issue comment is completed action.
- Do not claim a manual guide is a built system.
- Do not claim cloud-first is automation.
- Do not claim a model report is final authority.

## Return Rule

When confusion appears, return to Source / Carrier / Authority / Gate / Action / Return / Rebuild and mark the item as Keep, Merge, Supersede, Park, Red Gate, or Needs Vitas Decision.