# Activation Sequence Rule

一句核心：
主案與主切面要正式啟動，必須依固定序列進行；跳過序列雖可暫時運作，但不視為穩定成立。

## 最小序列
1. Intake
2. Triage
3. Smelting
4. Single Slice Selection
5. Responsible Board Assignment
6. Primary Write Target Set
7. Tool Activation
8. Writeback
9. Snapshot / Recovery Point

## 規則
- 前一步未成立，不得直接跳入下一步
- 高負載工具只能在第 7 步後啟用
- 第 8 步未完成，不得視為閉環
- 關鍵步驟缺失者，只能列為暫態運作

## 原則
- 序列優先於即時完整
- 閉環優先於快速展開
- 可回讀優先於一次生成

## 狀態
Seed v0.1
