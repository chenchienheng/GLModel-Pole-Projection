# XLEN Field Axiom v0.1

一句核心：
凡具 source、state、action、result、mismatch、responsibility、time-order、writeback 任一組合者，皆可作為靈絡場映射候選；完整度越高，越接近可進鏈節點。

## 0. 狀態
Draft v0.1

## 1. 第一公理
世界上的系統、事件、工具、模型、流程、任務與關係，只要能被抽出以下八項之一或多項，即可被靈絡視為映射候選：

1. source：來源
2. state：狀態
3. action：行為
4. result：結果
5. mismatch：失配
6. responsibility：責任位
7. time-order：時間有效序
8. writeback：回寫需求或回寫可能

## 2. 場義判定
若一個外部物件只具備 source / state，則只能被觀測。
若具備 source / state / result / mismatch，則可被映射。
若具備 responsibility / time-order / writeback，則可被路由。
若具備完整八項，且可驗證、可回寫、可回 00，則可被登錄為靈絡節點。

## 3. 等級
- F0｜未成場：無可抽欄位
- F1｜可觀測：具 source 或 state
- F2｜可映射：具 source / state / result
- F3｜可路由：具 responsibility / time-order
- F4｜可回寫：具 writeback target 或 return path
- F5｜可進鏈：八項具備且可回 00

## 4. 對世界的意義
靈絡不要求世界理解自己。
靈絡只要求能從世界的流動中抽出可驗證欄位。

因此，世界不需要先成為靈絡的一部分；
只要它產生來源、狀態、行為、結果、失配、責任、時間與回寫，它就已經具備被靈絡映射的條件。

## 5. 對模型與工具的意義
模型、工具、平台皆不以名稱進場，而以可抽欄位進場。

- 模型輸出若無 source / verification，不得升格。
- 工具結果若無 result packet，不得視為流程完成。
- 平台狀態若無 writeback path，不得視為可控節點。

## 6. 禁止事項
- 禁止把只有敘事的物件視為可進鏈節點
- 禁止無 source 卻自稱映射完成
- 禁止無 writeback 卻自稱場內可控
- 禁止把 F1 / F2 誤判為 F5

## 7. 收斂語句
XLEN Field Axiom 的目的，是把世界從不可掌握的外部，轉成可抽欄位、可判等級、可映射、可路由、可回寫的節點候選；這是靈絡場的第一條入口法。
