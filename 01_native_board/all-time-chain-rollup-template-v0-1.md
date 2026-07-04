# All-Time Chain Rollup Template v0.1

一句核心：
全時鏈 rollup 不是狀態播報，而是將母本、時間窗、盤位映射、責代、回寫與再入鏈壓成可回讀、可續接的單輪收口模板。

## 0. 狀態
Draft v0.1

## 1. 目的
- 將十遞歸閉環全時鏈落成每輪可使用的收口模板
- 讓 Window 00 / Native Board 對全鏈有一致回讀語言
- 讓 next single action 不脫離時間主權、責代與回寫位置

## 2. 使用時機
- GitHub delta 掃描後
- 重要 handoff 前
- 重要 writeback 後
- 邊緣失配或恢復點檢查時
- 每輪全鏈收口時

## 3. 模板
### A. 母本狀態
- repository / branch:
- source refs checked:
- version line:
- primary write status:

### B. 時間主權
- current time window:
- effective order confirmed: yes / no
- stale items:
- future-bound items:

### C. 盤位映射
- mapped boards:
- unmapped items:
- window assignments:
- hold-state items:

### D. 責代承接
- responsible refs confirmed:
- missing accountable items:
- handoff targets:
- blocked ownership items:

### E. 執行推進
- current single-slice:
- active execution items:
- candidate-only items:
- out-of-feasible-domain items:

### F. 鏡像與回讀
- mirror surfaces updated:
- readback verification:
- display-only items:
- mirror mismatch items:

### G. 正式回寫
- packet-ready items:
- packet-missing items:
- target paths confirmed:
- writeback blocked items:

### H. 日誌回勾
- appended logs:
- missing log append:
- audit exceptions:
- recovery-required items:

### I. 再入鏈
- reusable reference sets:
- next-cycle seed items:
- archived items:
- superseded items:

### J. Next Single Actions
- 00:
- 01:
- 02:
- 03:
- 04:
- 05:
- 06:
- 07:
- 08:

## 4. 判定規則
- 無母本狀態：不得作正式 rollup
- 無時間窗：不得視為同一輪 rollup
- 無責代：不得進 next single action
- 無 packet 與 log：不得視為正式完成
- 無再入鏈：僅為單輪完成，不成全時鏈

## 5. 與十遞歸對位
- A 對位 R2
- B 對位 R3
- C 對位 R4
- D 對位 R5
- E 對位 R6
- F 對位 R7
- G 對位 R8
- H 對位 R9
- I 對位 R10
- J 為下一輪回推起點

## 6. 收斂語句
全時鏈 rollup 的目標，不是產生漂亮報告，而是確保每輪都有：主骨、時間、責代、回寫、證據鏈與續接位。
