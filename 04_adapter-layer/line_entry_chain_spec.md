# LINE Entry Chain Specification

Department: Adapter Layer
Node ID: ADP-LINE-001
Window: W0
Version: v0.1

## Core Purpose
Establish the first real-world entry point using LINE as an AXIS-01 entry node.
This node serves as the primary external interface for direct user interactions,
routing incoming messages through the established CoreTri axis framework.

## Axis Mapping
- **Primary Axis:** AXIS-01 (World Chain) - Entry point for external events.
- **Fallback Axis:** AXIS-05 (Review Chain) - Fallback for review and failure.

## Flow Diagram

```text
[LINE User]
   | (Message)
   v
[LINE Webhook]
   | (JSON Payload)
   v
[AI Processing Node]
   | (Parsed Intent & Draft)
   v
[Review Gate (AXIS-01 / AXIS-05)]
   | (Approval / Adjustment)
   v
[Reply Assembly]
   | (Formatted Response)
   v
[LINE Reply API] -> [LINE User]
   |
   v
[Return Path (Writeback)]
```

## Data Formats

### Message Input Format
- **Type:** JSON (LINE Messaging API Webhook standard)
- **Key Fields:**
  - `replyToken`: String for immediate reply routing.
  - `source.userId`: Unique identifier for user context.
  - `message.text`: The raw text string of the message.
  - `timestamp`: Event timing for temporal alignment.

### Reply Output Format
- **Type:** JSON (LINE Messaging API Reply standard)
- **Constraints:**
  - Max 5 message objects per reply.
  - Text length bounds: Max 5000 characters per text object.
  - Must include contextual reference if returning from delayed review.

## Resource Constraints

### Cost and Quota Constraints
- **Target:** 0 API execution cost during specification phase.
- **Quota Limit:** Must adhere to LINE free tier limits.
- **Token Usage:** 0 token usage (no active LLM generation in this phase).

### Rate Limits
- No more than 1 webhook request processed per second.
- Excessive inputs must be queued or dropped to prevent cascading overload.

## Routing Paths

### Review Path
- All generated responses must route through AXIS-01 for structural validation.
- Requires explicit verification of intent before dispatching a reply.

### Return Path
- Successful interactions must generate a minimal interaction log.
- Logs are routed to the Writeback Chain for durable storage.

### Return Failed
- Any failure in webhook parsing, AI processing, or rate limiting must trigger a
  `return_failed` route directly to AXIS-05 for human or manual review.

## Required Credentials Checklist
*(Note: Do not record actual credentials in this repository. The items below are secure placeholder references only.)*
- [ ] `[PLACEHOLDER: LINE_CHANNEL_ID]`
- [ ] `[PLACEHOLDER: LINE_CHANNEL_SECRET]`
- [ ] `[PLACEHOLDER: LINE_CHANNEL_ACCESS_TOKEN]`
- [ ] `[PLACEHOLDER: WEBHOOK_URL]` (configured in LINE Developer Console)

## Analysis

### Mismatch or Gap
- Webhook endpoints require a live server, which violates the "no deployment"
  constraint of the current phase.
- Asynchronous review (AXIS-05) may cause the `replyToken` to expire (LINE
  tokens expire quickly), requiring fallback to Push API (which has different
  quota limits).

### Next Single Recommended Action
- Draft a static JSON mock of the webhook payload to simulate the input
  without requiring a live LINE application deployment.
