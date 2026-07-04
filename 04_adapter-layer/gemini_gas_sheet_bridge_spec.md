# Gemini to Google Sheet Bridge Spec

- Department: Adapter Layer
- Node ID: ADP-GBS-01
- Version: v0.1
- Status: Engineering Draft

---

## 1. Overview

This spec defines a safe bridge for ingesting point-cloud delta data from Gemini
into Google Sheets via Google Apps Script (GAS). It prioritizes data integrity
and non-destructive updates.

## 2. Safety Boundaries

- **No Deletion:** The script must never delete rows or clear the sheet.
- **Report-Only by Default:** Live writes require `AUTHORIZED_WRITE = true`.
- **Strength-Based Update:** Only update fields if the new data is "stronger"
  (e.g., Fact > Radar) or more recent.
- **No Private Data:** Payloads must not contain company-sensitive information.

## 3. GAS Code Draft

```javascript
/**
 * Gemini to Google Sheet Bridge (GAS)
 * Safety: Report-only until AUTHORIZED_WRITE = true
 */

const AUTHORIZED_WRITE = false; // Set to true to enable live writes

function doPost(e) {
  try {
    const packet = JSON.parse(e.postData.contents);
    const result = processPacket(packet);
    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      error: err.toString(),
      status: "failed"
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function processPacket(packet) {
  const stats = { added: 0, updated: 0, skipped: 0, errors: [] };
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = packet.target_path ?
      ss.getSheetByName(packet.target_path) : ss.getActiveSheet();

  if (!sheet) {
    throw new Error(`Target sheet not found: ${packet.target_path}`);
  }

  let data = sheet.getDataRange().getValues();
  const formulas = sheet.getDataRange().getFormulas();
  const headers = data[0];

  const entityNameIdx = headers.indexOf("Entity_Name");
  const statusIdx = headers.indexOf("Evidence_Status");
  const updatedAtIdx = headers.indexOf("Updated_At");

  if (entityNameIdx === -1 || statusIdx === -1 || updatedAtIdx === -1) {
    throw new Error(
        "Required headers missing (Entity_Name, Evidence_Status, Updated_At)");
  }

  const entityIndexMap = new Map();
  for (let i = 1; i < data.length; i++) {
    const entityName = data[i][entityNameIdx];
    if (!entityIndexMap.has(entityName)) {
      entityIndexMap.set(entityName, i);
    }
  }

  packet.payload.rows.forEach(newRow => {
    try {
      let existingRowIdx = entityIndexMap.has(newRow["Entity_Name"]) ?
          entityIndexMap.get(newRow["Entity_Name"]) : -1;

      if (existingRowIdx === -1) {
        const rowData = headers.map((h, colIdx) => {
          if (h === "Payload_ID") return packet.payload.payload_id;
          if (h === "Source_Batch") return packet.payload.source_batch;
          return newRow[h] === undefined ? "" : newRow[h];
        });
        data.push(rowData);
        if (!entityIndexMap.has(rowData[entityNameIdx])) {
          entityIndexMap.set(rowData[entityNameIdx], data.length - 1);
        }
        stats.added++;
      } else {
        const existingStatus = data[existingRowIdx][statusIdx];
        const newStatus = newRow["Evidence_Status"];
        const existingUpdate = data[existingRowIdx][updatedAtIdx];
        const newUpdate = newRow["Updated_At"] || null;

        const mode = getUpdateMode(existingStatus, newStatus,
            existingUpdate, newUpdate);

        if (mode !== "SKIP") {
          headers.forEach((h, colIdx) => {
            // Formulas are never overwritten by bridge
            if (formulas[existingRowIdx] && formulas[existingRowIdx][colIdx]) {
              return;
            }

            let newVal = newRow[h];
            if (h === "Payload_ID") newVal = packet.payload.payload_id;
            if (h === "Source_Batch") newVal = packet.payload.source_batch;

            if (newVal !== undefined && newVal !== "") {
              if (mode === "OVERWRITE" || data[existingRowIdx][colIdx] === "") {
                data[existingRowIdx][colIdx] = newVal;
              }
            }
          });
          stats.updated++;
        } else {
          stats.skipped++;
        }
      }
    } catch (err) {
      stats.errors.push(`Row failed: ${newRow["Entity_Name"]} - ${err}`);
    }
  });

  if (AUTHORIZED_WRITE) {
    // Restore formulas before setValues to avoid formula-to-value conversion
    for (let r = 0; r < formulas.length; r++) {
      for (let c = 0; c < formulas[r].length; c++) {
        if (formulas[r][c] !== "") {
          data[r][c] = formulas[r][c];
        }
      }
    }
    sheet.getRange(1, 1, data.length, headers.length).setValues(data);
  }

  return {
    status: stats.errors.length > 0 ? "partial_success" : "success",
    Asset_ID: "TBD",
    Location_Link: ss.getUrl(),
    Return_Path: "AXIS-05",
    stats: stats,
    legion_log: {
      Round_ID: packet.payload.payload_id,
      Node: packet.node_id,
      Action: AUTHORIZED_WRITE ? "LIVE_WRITE" : "DRY_RUN_REPORT",
      Output: `Added: ${stats.added}, Updated: ${stats.updated}, ` +
              `Skipped: ${stats.skipped}, Errors: ${stats.errors.length}`,
      Next_Action: "Review report and authorize live write if needed",
      Risk_or_Blocker: stats.errors.length > 0 ?
          "Row processing errors" : "None",
      Return_Path: "AXIS-05"
    }
  };
}

function getUpdateMode(oldStatus, newStatus, oldUpdate, newUpdate) {
  const weights = { "Fact": 3, "Signal": 2, "Radar": 1, "Pending": 0 };
  const newWeight = weights[newStatus] || 0;
  const oldWeight = weights[oldStatus] || 0;

  if (newWeight > oldWeight) return "OVERWRITE";
  if (newWeight < oldWeight) return "SKIP";

  // Weights are equal, check recency
  if (!oldUpdate) return "OVERWRITE";
  if (!newUpdate) return "SKIP";

  if (new Date(newUpdate) > new Date(oldUpdate)) {
    return "MERGE_EMPTY_ONLY"; // Equal strength, newer data: only fill gaps
  }
  return "SKIP";
}
```

## 4. Test Payload Format

Aligned with `Writeback Packet Contract` (v0.1).

```json
{
  "department": "Adapter Layer",
  "node_id": "Gemini_Scout_Node",
  "action": "update",
  "target_path": "Point_Cloud_Log",
  "payload": {
    "payload_id": "PCD-TEST-001",
    "source_batch": "Gemini_Batch_001",
    "rows": [
      {
        "Entity_Name": "Example Entity",
        "Entity_Type": "Owner / Demand Node",
        "Chain_Position": "Owner",
        "Region": "North",
        "Possible_Facility_Link": "Data Center",
        "Evidence_Status": "Radar",
        "Source_or_Search_Lead": "public search lead only",
        "Can_Support": "May be relevant to market point-cloud",
        "Cannot_Support": "Does not prove project opportunity",
        "Next_Verification_Needed": "official source / filing",
        "Updated_At": "2026-04-22T00:00:00Z"
      }
    ]
  }
}
```

## 5. Return Contract

The GAS bridge returns a JSON object with:

- **stats:** counts for added, updated, skipped, errors.
- **legion_log:**
  - **Round_ID:** from packet payload.
  - **Node:** from packet node_id.
  - **Action:** LIVE_WRITE or DRY_RUN_REPORT.
  - **Output:** summary string.
  - **Next_Action:** instructions for next step.
  - **Risk_or_Blocker:** row processing errors or None.
  - **Return_Path:** AXIS-05 (Review Chain).

## 6. GitHub Action Plan (Optional)

A workflow to validate the bridge logic using a mock spreadsheet service.

1. **Trigger:** Push to `04_adapter-layer/`.
2. **Setup:** Install Node.js dependencies (e.g., `jest`).
3. **Test:**
   - Validate payload schema.
   - Run unit tests for `shouldUpdate` logic.
   - Mock GAS `SpreadsheetApp` to verify append/update behavior.

## 7. Status & Tracking

- design_complete: true
- gas_draft_included: true
- report_only_enabled: true
- registered_in_corpus: true

---

## 8. PR Refresh Result

```yaml
PR_127_Post_139_Result:
  Base_Updated_Against_Main: Yes
  Mergeable_After_Update: Yes
  Writeback_Contract_Aligned: Yes
  Stale_Overwrite_Prevented: Yes
  Formula_Preservation: Yes
  Diff_Scope: Clean
  Recommended_Action: Merge
```
