# Tool Failure Fallback Rule

一句核心：
當工具失敗、中斷或不可用時，靈絡不得整體停擺；應依盤位與回寫契約，切換至較低負載或鏡像可承接的替代路徑。

## 失敗類型
- Connection Failure
- Permission Failure
- Output Failure
- Writeback Failure
- Timeout or Unavailable

## 回退順序
1. 保留 Primary Write 與現況快照
2. 留下 Failed 記錄與原因
3. 判定是否可切換低負載工具
4. 若不可切換，改入 Hold 或 Candidate Seed
5. 恢復後建立 Restored 記錄與續接點

## 原則
- 工具失敗不等於主案失效
- 回退不得破壞主寫位與版本引用
- 無回退路徑者，需明確標記中斷位置
- 恢復後不得跳過缺失的 writeback 與 log

## 狀態
Seed v0.1
