# External Signal Entry Chain Specification

Department: Adapter Layer / Core
Node Type: External Signal Entry Node
Version: v0.1

## Core Purpose
Define a tool-agnostic external signal entry chain for all inbound external
triggers. This specification treats messaging platforms, web inputs,
webhook/API inputs, crawler inputs, telecom signals, and IoT sensor signals
as interchangeable entry nodes rather than unique or isolated integrations.

## Axis Mapping
- **Primary Axis:** AXIS-01 (World Chain) - Universal entry point.
- **Secondary Axis:** AXIS-05 (Review Chain) - Universal fallback/failure gate.

## Common Fields Definition
Every external entry node must declare the following parameters to be
considered compliant with the runtime:

- `entry_type`: The category of the inbound signal (messaging, webhook, sensor).
- `platform_or_protocol`: The specific service or standard (LINE, HTTP, SMS).
- `signal_format`: The structural format of the inbound data (JSON, Plaintext).
- `authentication_boundary`: How the signal proves its origin or authorization.
- `cost_or_quota_constraint`: Strict bounds on execution cost and rate limits.
- `primary_axis`: Must be AXIS-01.
- `secondary_axis`: AXIS-05 or specific internal routing chain.
- `review_path`: The mandatory gateway for signal verification before action.
- `return_path`: The destination for logs, output, or writeback archiving.
- `return_failed`: Must route to AXIS-05 for human/manual recovery.
- `replaceability_rule`: The exact mechanism by which this entry node can be
  swapped for an equivalent node without causing runtime collapse.

## Example Mapping Table

| Node | Entry Type | Format | Replaceability |
|---|---|---|---|
| LINE | Messaging | JSON | Swappable with WhatsApp/Telegram |
| Webhook | API Trigger | JSON | Bound to API contract |
| IoT Sensor | Sensor Data | MQTT | Standardized numeric mapping |
| Email Inbox | Comm. | MIME | IMAP protocol standardization |

## Analysis

### Mismatch or Gap
- The current runtime heavily couples platform-specific details (e.g. tokens)
  too early in the flow. A generic abstraction layer must exist between the
  raw inbound payload and the internal logic queue.
- Authentication boundaries for webhooks often require immediate responses
  (e.g., HTTP 200 OK) which conflicts with asynchronous review cycles.

### Unresolved Risks
- **Signal Flooding:** Without a standardized rate-limiter at the edge of
  the chain, the system is vulnerable to cascading failure from rapid external
  signals (e.g., bot floods, sensor malfunctions).
- **Format Drift:** External APIs or signal structures may change without
  warning, breaking the entry chain if schema validation is not strictly
  enforced at the boundary.

### Next Single Recommended Action
- Create a lightweight schema validation template for inbound payloads that
  can be applied universally to all entry nodes before they are allowed onto
  the primary AXIS-01 track.
