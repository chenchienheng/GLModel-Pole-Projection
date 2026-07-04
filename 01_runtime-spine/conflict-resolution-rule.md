# Conflict Resolution Rule

一句核心：
當盤位、版本、主寫位、鏡像位或工具輸出互相衝突時，必須先進入衝突解決流程；未解決之衝突不得直接覆寫既有成立面。

## 衝突類型
- Version Conflict
- Writeback Conflict
- Primary vs Mirror Conflict
- Board Ownership Conflict
- Tool Output Conflict

## 解決順序
1. 保留現行主寫位
2. 建立衝突記錄與來源引用
3. 判定衝突層級與影響面
4. 指派 Responsible Board
5. 產生處理結果：merge / reject / split / hold

## 原則
- 衝突先留痕，再處理
- 未留痕，不得直接覆寫
- 無 Responsible Board，不得視為已解決
- Split 後需建立新引用關係

## 狀態
Seed v0.1
