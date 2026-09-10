<!-- Write in Traditional Chinese. Follow AGENTS.md and the task's scope and authorization. Remove unused prompts. -->

## Purpose and scope

Explain the problem, changed files and resulting behavior. Identify any out-of-scope changes.

## Evidence and recovery

State relevant checks actually performed, their limits, material risks and the rollback or recovery path. No unrelated tests are required to fill this section.

## Approval and follow-up

Keep applicable gate and scope labels:
- `gate:green`: docs, analysis or candidates without red-gate effects.
- `gate:yellow`: code, schema, configuration or dependencies; identify reviewer and return path.
- `gate:red`: secrets, billing, deployment, workflows/actions, permissions, branch rules, cloud resources or core/architecture.

User approval is required before merge; red-gate execution requires applicable explicit user/admin authorization. Reuse authorization already given for the action.

Report actual pending decisions and affected dependencies. Add a MotherTree return packet only when required by the task. A blocker holds dependent actions only. Saved changes, receiver readback and observed use remain separate.
