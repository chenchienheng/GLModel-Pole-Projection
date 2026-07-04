# Edge Collapse Reconstruction Flow v0.1

一句核心：
邊緣崩潰不可被視為系統終止，而必須被納入靈絡的正式重建時鏈；真正的成熟，不在於永不失配，而在於失配時仍可依主骨、時間窗、證據鏈與再入鏈重建。

## 0. 狀態
Draft v0.1

## 1. 適用情境
- 平台失效
- 鏡像失真
- 回寫中斷
- 節點脫源
- 盤位錯掛
- 時間窗錯位
- 責代失聯

## 2. 重建原則
- 母本優先於鏡像
- 時間主權優先於當前畫面狀態
- 證據鏈優先於主觀描述
- 先恢復可成立，再恢復可擴散

## 3. 重建流程
### R1｜判定崩潰層級
先判目前屬：
- 邊緣顯示崩潰
- 鏡像承載崩潰
- 回寫鏈崩潰
- 時間窗崩潰
- 主骨關聯崩潰

### R2｜回抓母本
- 找回 source ref
- 找回 repository path
- 找回 version line
- 找回對應 branch / commit / file

### R3｜回抓時間窗
- 確認事件原始時間窗
- 確認目前有效序
- 判定是否屬同一輪 rollup

### R4｜回抓證據鏈
- packet 是否存在
- log ref 是否存在
- audit trail 是否可讀
- writeback target 是否可核對

### R5｜回抓盤位與責代
- 原主掛盤位
- 原副掛盤位
- responsible ref
- handoff target

### R6｜建立恢復點
- recovery point
- snapshot ref
- current restoration status
- blocked restoration items

### R7｜重掛節點
- 重新掛回九盤
- 重新對回七位
- 重新附著時間窗
- 重新確認回寫位

### R8｜重啟回寫
- 補 packet contract
- 補 log append
- 補 writeback target 確認

### R9｜回進 rollup
- 回進 Window 00 / Native Board
- 明列 recovered items / still broken items / next actions

### R10｜再入鏈
- 將恢復完成項重新列入 reference set
- 將未完項列為下一輪 seed / blocker

## 4. 崩潰分級
### L1｜表面崩潰
- 顯示層失真
- 鏡像讀面失真
- 主骨仍完好

### L2｜承載崩潰
- 鏡像承載或盤位承載失配
- 主骨可讀，但對位中斷

### L3｜回寫崩潰
- packet 缺失
- log append 缺失
- 閉環不完整

### L4｜主鏈崩潰
- source ref / version / time window / responsibility 任一重大失配
- 需回抓母本與時間窗重建

## 5. 成功判定
重建成功至少需同時具備：
- 可回對母本
- 可回對時間窗
- 可回對責代
- 可回對回寫位置
- 可回進 rollup 與再入鏈

## 6. 收斂語句
邊緣崩潰重建，不是修補畫面，而是讓靈絡在失配後仍能依母本、時間主權、證據鏈與盤位責代，重新長回同一條成立鏈。
