# Tool Establishment Matrix｜2026-04-16 v0.1

一句核心：
工具不按品牌定義，而按 entry、auth、read、search、space、evidence、writeback 七個成立條件分位；同型工具可替，主位由是否能形成可回流證據決定。

## 0. Mode
- mode：tool establishment classification
- scope：connected tools sampled so far
- mutation：GitHub diagnostic writeback only
- return_to_00：yes

## 1. Establishment Criteria
```yaml
tool_establishment:
  entry: available interface
  auth: identity or permission confirmed
  read: can read relevant object
  search: can find object by keyword or id
  space: can return stable coordinate
  evidence: can return result_ref or durable proof
  writeback: can update or create controlled output
```

## 2. Matrix
| Tool | Entry | Auth | Read | Search | Space | Evidence | Writeback | Window | Grade | Position |
|---|---|---|---|---|---|---|---|---|---|---|
| GitHub | yes | yes | yes | yes | repo/branch/path/commit | strong | yes | 00/01/07 | G4 | mainbone / version / evidence |
| Google Drive | yes | yes | yes | yes | file/folder/doc id | medium-strong | controlled | 01/07 | G3-G4 | source mirror / doc body |
| Gmail | yes | yes | yes | yes | message_id/thread | strong | controlled | 06 | G4 | intake / exception detector |
| Google Calendar | yes | yes | yes | yes | event_id/time window | medium | controlled | 05 | G3 | time coordinate |
| Google Contacts | yes | yes | yes | limited | people id/email | medium | no write | 04 | G3 | identity coordinate |
| ClickUp | yes | yes | yes | yes | task/list/workspace id | medium-strong | yes | 02 | G3 | task execution surface |
| Asana | yes | listed | candidate | yes | task/project gid | candidate | yes | 02 | G2-G3 | alternate task execution surface |
| Slack | yes | listed | yes | yes | channel/thread/message ts | current gap | controlled | 03/06 | G1-G2 | event/discussion surface |
| Notion | yes | yes | yes | yes | page/database/data source id | medium | yes | 07/09/10 | G3 | workspace knowledge / database projection |
| Gamma | yes | listed | existing URL only | folders/themes | gamma id/url | output URL | create only | 09 | G2-G3 | surface/output generator |
| Figma | yes | whoami confirmed | target required | target required | fileKey/nodeId/team key | target-based | plan-limited | 09/11 | G2-G3 | visual surface / diagram candidate |

## 3. Replacement Logic
```yaml
capability_classes:
  mainbone:
    primary: GitHub
    fallback: Drive or Notion as mirror only
  source_mirror:
    primary: Drive
    fallback: GitHub docs or Notion pages
  task_execution:
    primary: ClickUp
    fallback: Asana or GitHub Issues or Notion DB
  intake:
    primary: Gmail
    fallback: Slack alerts or Calendar notifications
  time_coordinate:
    primary: Google Calendar
    fallback: dated GitHub/Drive/Notion records
  identity_coordinate:
    primary: Contacts
    fallback: Gmail sender or Calendar attendee or Notion user
  surface_output:
    primary: Gamma or Figma depending on artifact type
    fallback: Google Slides or Drive docs
```

## 4. Findings
- Same capability is not exclusive to one brand family.
- GitHub remains strongest for 00 because it naturally provides version, path, commit, and evidence.
- Drive is strong for document body and mirror, but should not replace 00 adjudication by default.
- ClickUp and Asana are same-class task surfaces; only one should be primary at a time.
- Slack remains HOLD for 03 until event_ref or thread_ref exists.
- Gamma and Figma should remain 09/11 surfaces, not source-of-truth.

## 5. Position Rule
```yaml
position_rule:
  unique_position: allowed
  functional_replacement: required
  parallel_primary: blocked
  fallback_activation: only when primary lacks feedback or evidence
```

## 6. Next Single Action
Create capability replacement map for source, task, knowledge, surface, and event classes.

## 7. Return to 00
return_to_00：yes
