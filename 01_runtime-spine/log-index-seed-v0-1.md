# Log Index — Seed v0.1

一句核心：
此索引用於指出 xuanling-seed-v0-1 當前已存在或已定義的日誌入口，作為後續實例 log 庫的最小過渡層。

## Log Entries
- LI-001 / Audit Trail / 01_runtime-spine/audit-trail-rule.md / Related Board=①,⑥ / Time Range=Seed setup / Status=defined / Notes=稽核規則已立，待實例化事件加入
- LI-002 / Tool Status Event / 04_adapter-layer/tool-status-update-protocol.md / Related Board=④,⑥ / Time Range=Seed setup / Status=defined / Notes=已可支援工具狀態事件，待公盤與通訊盤實測後擴充
- LI-003 / Execution Log / 04_adapter-layer/tool-execution-log-schema.md / Related Board=④,⑥ / Time Range=Seed setup / Status=defined / Notes=執行日誌格式已定，待首輪 log 庫實例
- LI-004 / Snapshot Log / 01_runtime-spine/snapshot-rule.md / Related Board=①,⑥ / Time Range=Seed setup / Status=defined / Notes=快照規則已立，待首次狀態快照實例
- LI-005 / Recovery Log / 01_runtime-spine/recovery-point-rule.md / Related Board=①,⑥ / Time Range=Seed setup / Status=defined / Notes=回復點規則已立，待首次回復演練實例
- LI-006 / Conflict Log / 01_runtime-spine/conflict-resolution-rule.md / Related Board=①,⑥ / Time Range=Seed setup / Status=defined / Notes=衝突解決規則已立，待首個衝突實例掛入

## Notes
- 此索引先作入口，不等於完整 log 庫
- defined 代表規則與入口已存在，但未必已有充足實例
- 後續每次出現正式 log 時，應補入具體 path ref 或事件 ref

## 狀態
Seed v0.1
