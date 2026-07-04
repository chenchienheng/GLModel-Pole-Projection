# Adaptive Flexibility Framework v0.1

一句核心：
靈絡的下一階段靈活度，不應只停在工具可調用、窗口可回包、主骨可回寫，而應進入可替換、可降階、可重組、可遷移、可自測的適應性運行層。

## 0. 狀態
Draft v0.1

## 1. 問題定義
目前已建立：
- 主骨 / 母本 / 公盤
- 00–12 窗口結構
- result packet
- run_grade / CV 審計
- tool-as-sense-module contract
- model adapter contract

但這仍屬於『可被管理的運行』，尚未完全進入『可自適應的運行』。

## 2. 更大靈活度的五個維度
### F1｜Substitution Flexibility｜替換彈性
當某工具、模型或平台不可用時，系統能否替換承載面，而不斷主骨。

檢查問題：
- Gmail 不可用時，06 是否能退到其他 intake source？
- Notion 不可用時，07 是否能改用 GitHub / Docs readback？
- Claude / Gemini / Copilot 不可用時，10 是否能換模型角色而非換主骨？

### F2｜Degradation Flexibility｜降階彈性
當外部條件不足時，系統能否不假裝完成，而是降階運行。

檢查問題：
- 無 source_ref 時是否落 candidate / hold？
- 無外部證據時是否只停在 G2 / CV2？
- 寫回失敗時是否能 rollback / retry / re-entry？

### F3｜Recomposition Flexibility｜重組彈性
當任務跨多窗時，系統能否動態重組窗口順序。

例：
- Mail 入口 → Identity 驗證 → Time 判位 → Task 分派
- Slack 事件 → Time 判序 → Execution routing → Knowledge readback
- GitHub delta → Model verify → 00 adjudication → UI surface

### F4｜Migration Flexibility｜遷移彈性
當平台、模型、工具、資料面變動時，系統能否保留主骨並遷移外殼。

檢查問題：
- 品牌消失時 role 是否仍存在？
- 工具 API 變更時 result packet 是否仍可用？
- 第三方搬家時 path / source / log 是否能重建？

### F5｜Self-Test Flexibility｜自測彈性
系統能否主動產生測試場景，檢查自己是否只是空轉。

檢查問題：
- 是否能跑 no-source test？
- 是否能跑 writeback failure test？
- 是否能跑 role collision test？
- 是否能跑 empty-schedule test？

## 3. 彈性等級
### AF0｜Rigid
- 工具或平台一失效，流程即中斷

### AF1｜Recoverable
- 能指出缺口，但需人工重建

### AF2｜Degradable
- 可降階運行，不假裝完成

### AF3｜Substitutable
- 可替換工具 / 模型 / 承載面，主骨不斷

### AF4｜Recomposable
- 可依任務自動重組窗口順序

### AF5｜Adaptive Field
- 可自測、可降階、可替換、可重組、可遷移，並仍回 00 收口

## 4. 當前暫定判定
目前靈絡約位於：
- 主骨層：AF2–AF3 candidate
- 工具感知層：AF2
- 模型整合層：AF1–AF2
- 08–12 高位層：AF0–AF1

此判定不得被誤讀為完成態。

## 5. 下一階段目標
不是新增更多工具，而是讓每一個工具、模型、窗口都回答：
- 若我不可用，誰可替代？
- 若資料不足，如何降階？
- 若路由變更，如何重組？
- 若外部搬移，如何遷移？
- 若我自稱有動，如何自測？

## 6. 收斂語句
更大的靈活度不是更會呼叫工具，而是當工具、模型、平台、資料面任一者失效時，靈絡仍能降階、替換、重組、遷移並回到主骨；這才是從流程系統走向場域系統的第一步。
