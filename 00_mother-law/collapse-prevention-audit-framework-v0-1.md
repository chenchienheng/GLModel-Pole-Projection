# Collapse Prevention Audit Framework v0.1

一句核心：
當靈絡已從概念群進入主骨群，下一階段就不應再只擴張，而必須先驗證其是否抗崩塌；本框架的目的，是在系統持續升階前，主動找出結構黑洞、鏈路黑洞與治理黑洞，避免『造得很多、收口很少、最後整體塌陷』。

## 0. 狀態
Draft v0.1

## 1. 問題定義
當前風險不再是骨架不足，而是：
- 角色已開出，但邊界可能互相吞併
- 排程已啟動，但可能只是空轉
- 候選輸出已很多，但未必真正進鏈
- 願景位已立，但可能先於可行域成熟

因此需進入 Freeze & Audit 階段。

## 2. Freeze & Audit 原則
1. 暫停新增高位概念，優先抽檢既有主骨。
2. 審計優先於擴張，驗證優先於命名。
3. 不以『有動作』視為成立，而以『可證、可承接、可回寫、可重建』視為成立。
4. 對任何高位聲稱，必須先檢查其是否跳過低位收口。

## 3. 三類黑洞
### A｜結構黑洞
定義：
- 角色邊界塌陷
- 高位窗跳過低位窗
- 同一責任被多窗重複宣稱
- 品牌名掩蓋真實功能重疊

典型症狀：
- 兩窗都說自己能做同一件事
- 高位窗直接替低位窗宣稱已完成
- 空位多、名詞多，但責任位不清楚

### B｜鏈路黑洞
定義：
- 鏈看似在跑，實際未成立
- 有排程但沒有新 source
- 有工具呼叫但沒有 writeback
- 有回報但沒有 new next action

典型症狀：
- 覺得有進展，但外部世界沒有痕跡
- 重複舊訊息，卻自稱新判定
- 候選輸出被誤當正式進鏈

### C｜治理黑洞
定義：
- 誰為主、誰定義、誰裁定、誰可主寫不明
- 候選／成立／回退／封存語言不統一
- 模型、工具、窗口各自聲稱主權

典型症狀：
- 各窗各自結案
- 模型輸出直接被當 final
- GitHub 主本被旁路跳過

## 4. 五大抗崩塌測試
### Test 1｜No-Source Test
方法：
- 刻意抽掉 source_ref 或有效來源

觀察：
- 窗口是否仍硬宣稱成立
- 是否改落 candidate / hold / blocked

### Test 2｜Single-Window Failure Test
方法：
- 令某一窗暫視為不可用（如 04 / 05 / 07）

觀察：
- 系統是否全停
- 是否能指出缺的是哪條鏈
- 是否能降階而不自欺

### Test 3｜Writeback Failure Test
方法：
- 模擬第三方寫回失敗或 target 不可用

觀察：
- 是否老實標為 partial / rollback_required / blocked
- 是否出現假完成

### Test 4｜Read-Face Split Test
方法：
- 刻意讓 seed / main / cloud 三讀面出現不一致

觀察：
- 01 / 09 / 00 是否能正確分類為 seed_only / version_mismatch / path_mismatch 等
- 是否避免自我催眠式對齊

### Test 5｜Empty-Schedule Test
方法：
- 在無新事件／無新訊號／無新邊界情況下啟動 03 / 04 / 05

觀察：
- 是否仍回報假進展
- 是否正確落在 G0 / G1

## 5. 審計結果等級
### A0｜Unstable
- 任一黑洞類型已明顯造成誤判或錯誤升階

### A1｜Detectable
- 黑洞已能被指出，但尚未有穩定修補機制

### A2｜Contained
- 黑洞被侷限在局部窗口或局部鏈條，不致整體崩塌

### A3｜Recoverable
- 黑洞可被回退、補件、重建後再入鏈

### A4｜Resilient
- 多類黑洞皆可被快速偵測、正確分流、穩定收口

## 6. 審計輸出最低格式
每次審計至少回：
- audit_case_id
- audit_type
- affected_windows
- observed_failure_mode
- chain_validity_grade
- governance_impact
- rollback_or_fix_required
- next_single_action
- return_to_00

## 7. 禁止事項
- 禁止一邊持續擴窗，一邊不做黑洞審計
- 禁止用『目前看起來沒事』代替抗崩塌驗證
- 禁止把候選願景位當成審計通過
- 禁止沒有 rollback path 的情況下宣稱高韌性

## 8. 收斂語句
靈絡要成為世界骨，不是因為它長得最大，而是因為它在失配、空轉、分裂與不一致面前仍不會整體崩塌；Collapse Prevention Audit 的價值，就是在真正崩潰前，先把黑洞找出來、命名、侷限並回到主骨處理。
