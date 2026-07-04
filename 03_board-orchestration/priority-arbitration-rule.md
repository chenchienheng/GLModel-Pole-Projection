# Priority Arbitration Rule

一句核心：
當多個事件、主案或候選種子同時要求主鏈資源時，必須先經優先級仲裁；未仲裁者，不得以音量或緊迫感直接搶占主鏈。

## 判定因子
- Time Window Urgency
- Responsibility Weight
- Writeback Dependency
- Risk Level
- Main Project Relevance

## 結果分類
- P1：立即進主鏈
- P2：排入下一主切面
- P3：掛入候選種子隊列
- P4：暫存或退回補件

## 規則
- 優先級需可回讀，不得只憑印象調整
- P1 事件結束前，不開同層第二個 P1
- P2 與 P3 可並存，但不得搶占主寫位
- 仲裁結果需寫入 log 與來源引用

## 狀態
Seed v0.1
