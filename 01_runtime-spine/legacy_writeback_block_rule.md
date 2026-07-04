# Legacy Writeback Block Rule

Department: Runtime Spine
Agent Block: Legacy Writeback Guard
Node ID: RSP-003
Window: W0
Platform Writer: ChatGPT
Version: v0.1
Status: active

## Core
New runtime outputs must not be written into legacy v3 folders. Legacy folders are read-source or relay-source only unless relay mode is explicitly declared.

## Block Scope
- drivers writing new runtime output into v3 paths
- windows writing new state into v3 archive folders
- adapter layers treating legacy paths as primary targets

## Allowed Legacy Use
- read existing legacy content
- extract bones from v3 content
- declare relay mode for controlled migration
- preserve source reference for all legacy-derived items

## Block Rule
If target_path points to a legacy v3 folder and relay_mode is not declared:
- block writeback
- mark status as Legacy Path Blocked
- reroute item to window 00 hold state
- require new target_path assignment

## Relay Mode
Relay mode must declare:
- legacy_source_path
- extracted_node_key
- new_target_path
- writeback_key
- migration_log_ref

## Rules
- legacy is not primary write destination
- migration is controlled, not implicit
- every blocked legacy write must leave one log entry
