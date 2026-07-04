# Time Window Human-Readable Format v0.1

一句核心：
05 若只輸出時間窗、有效序與狀態碼，對主骨有用、對人不可讀；本格式的目的，是讓時權窗在保留結構欄位的同時，也能用最少白話讓人看懂「現在是什麼時間條件、先後怎麼排、還缺什麼」。

## 0. 狀態
Draft v0.1

## 1. 問題定義
05 目前常見狀況：
- 有 current_time_window，但人不知道代表什麼
- 有 effective_order，但人不知道前後順序影響什麼
- 有 stale / future-bound 等標記，但人不知道該怎麼處理
- 因此 05 雖在做時權判定，閱讀者卻無法迅速理解

## 2. 雙層輸出原則
### Layer 1｜主骨時權欄位
至少需含：
- source_ref
- current_time_window
- effective_order
- stale_or_future_bound
- related_windows
- current_state
- next_single_action
- return_to_00

### Layer 2｜人可讀白話版
最少四句：
1. 這次你判到的時間窗是什麼
2. 它目前在整體順序裡排第幾層／先後如何
3. 哪些項目已過期、尚未到窗、或仍未定
4. 建議我現在先處理哪一個時間相關動作

## 3. 白話模板
### 模板 A｜標準版
- 當前時間窗：<window>
- 在目前序列中的位置：<effective_order>
- 當前影響：<why_it_matters>
- 仍缺：<missing_time_info>
- 下一步：<next_single_action>

### 模板 B｜簡版
- 現在處在：<window>
- 先做：<priority_item>
- 暫不做：<future_or_stale_item>
- 原因：<reason>

## 4. 時權狀態語言
- **active**：當前有效，應優先處理
- **pending**：尚未到窗，但已可預備
- **stale**：已過有效窗，需判定是否補件或歸檔
- **blocked_by_time**：其他條件可能齊備，但因時間窗未開不可前進
- **undetermined**：缺時權資料，暫不可判

## 5. 禁止事項
- 禁止只回 current_time_window 而不做白話翻譯
- 禁止只說「尚未到時間」卻不指出具體影響
- 禁止用 stale / pending 等標記取代整體順序說明
- 禁止省略 next_single_action

## 6. 成立條件
05 若要視為穩定時權窗，至少需：
- 連續兩輪以上提供雙層輸出
- 白話層能讓非技術讀者判斷先後與優先度
- 主骨欄位仍可供 00 收口與其他窗互補使用

## 7. 收斂語句
05 的成熟，不在於列出多少時間欄位，而在於它能否同時告訴主骨與人：現在是什麼時間條件、順序如何、哪些可先做、哪些不能做；只有這樣，時權才不只是標記，而是真正可運行的秩序語言。
