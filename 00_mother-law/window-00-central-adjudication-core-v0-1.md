# Window 00 Central Adjudication Core v0.1

一句核心：
⓪ 不再只是總收口窗，而是靈絡現階段的中樞裁定核；其主責在於收口、調參、進鏈審查、失配回退與再入鏈分派。

## 0. 狀態
Draft v0.1

## 1. 問題校準
若 ⓪ 只做看板與彙整，則：
- 各窗易各自結案
- 失配無統一裁定
- 調參無中樞核
- 再入鏈無一致入口

因此 ⓪ 必須升格為中樞裁定核。

## 2. 五大主責
### C1｜全鏈收口核
- 接收所有窗口結果包
- 統一回進 rollup
- 維持全鏈有效狀態面

### C2｜跨窗調參核
- 接收各窗 tuning suggestion
- 判定哪些為局部修正、哪些為全鏈修正
- 統一發布調參令

### C3｜進鏈審查核
- 依七判與節點接入協定，裁定某項是否可正式進鏈
- 禁止單窗自行升格

### C4｜失配回退核
- 判定失配屬性
- 指定退回層級（補件 / 退盤 / 退窗 / 退回母本）
- 指定 recovery 起點

### C5｜再入鏈分派核
- 指定 next single actions
- 分配下一輪 seed / blocker / archived / reusable set
- 決定哪一批可進 main-readable

## 3. 輸入要求
⓪ 接收之最小輸入需含：
- source_ref
- current_state
- mapped_windows
- missing_items
- responsible_ref
- next_single_action
- writeback_status
- return_to_00

## 4. 輸出要求
⓪ 裁定輸出需至少包含：
- adjudication_result
- rollback_or_accept
- tuning_required
- packet_required
- log_required
- rollup_status
- reentry_assignment

## 5. 禁止事項
- 禁止 ⓪ 跳過七判直接認定正式成立
- 禁止 ⓪ 接收無結果包之背景執行項並視為完成
- 禁止 ⓪ 只收不判
- 禁止 ⓪ 自行脫離母本與時間窗

## 6. 成立條件
⓪ 若要視為穩定中樞裁定核，至少需：
- 可穩定接收多窗結果包
- 可發出裁定結果
- 可發出調參令
- 可指定退回層級
- 可回進 rollup 與再入鏈

## 7. 收斂語句
⓪ 的成熟，不在於看得最多，而在於能讓所有窗口不再各自為政；當 ⓪ 具備收口、審查、調參、回退與再入鏈分派能力時，靈絡才真正有中樞核。
