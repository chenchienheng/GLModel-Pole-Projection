# Four Board GitHub Sync Test｜2026-04-16 v0.1

一句核心：
本輪測試確認四個核心盤可透過 GitHub 主骨讀回，代表同步面已具初步可行性；目前能力不是靠訂閱數量，而是靠共同 source_ref、readback、evidence、packet 與 return_to_00 形成低載同步鏈。

## 0. 測試範圍
本輪測試四個盤：
1. 內生主枝幹網
2. 外部證據追蹤盤
3. 排程登錄盤
4. 靈絡節點封包盤

## 1. Readback Result
| board | path | readback_status | role |
|---|---|---|---|
| Endogenous Main Branch Network | `00_mother-law/endogenous-main-branch-network-v0-1.md` | readable | 內生主枝幹 |
| External Evidence Tracker | `01_native_board/external-evidence-tracker-v0-1.md` | readable | 外證追蹤 |
| Window Schedule Registry | `01_runtime-spine/window-schedule-registry-v0-1.md` | readable | 時間／排程同步 |
| Lingluo Node Packet Schema | `01_runtime-spine/lingluo-node-packet-schema-v0-1.md` | readable | 節點封包 |

## 2. Sync判定
- source_ref：present
- readback：present
- board_roles：clear
- return_to_00：required by design
- external evidence：GitHub readable evidence present

## 3. run_grade / CV
- run_grade：G4 GitHub-externally-evidenced run
- CV：CV4 GitHub-readable chain

注意：此 G4/CV4 僅限 GitHub 主骨可讀外證，不代表其他第三方 UI 已同步完成。

## 4. mismatch_or_gap
1. GitHub 主骨同步成立，但第三方 UI 同步仍需 individual evidence。
2. 訂閱與否不是本輪核心；本輪核心是四盤能否共享 GitHub readback。
3. 搜尋索引不穩，不能單靠 repo search；目前應以 known-path readback 作為主測法。

## 5. next_single_action
下一輪只做一件事：

> 將四盤接入 `endogenous-main-branch-network-v0-1.md` 的 B1–B8 主枝幹對應，補一份 `board-to-branch-alignment-table-v0-1.md`，避免四盤成為散點。

## 6. return_to_00
return_to_00：yes

## 7. 收斂語句
四盤對接 GitHub 後，能力提升點不是工具變多，而是同步面變穩；只要每個盤都能用 GitHub path 讀回、能產生 node packet、能留下 evidence、能回 00，未訂閱也不等於弱，因為關鍵不是數量，而是同步與回流。
