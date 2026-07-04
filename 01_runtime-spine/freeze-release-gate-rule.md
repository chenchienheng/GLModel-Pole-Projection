# Freeze Release Gate Rule

一句核心：
分支內容要進入更穩定層級前，必須先通過凍結與釋出門判定；未過 gate 者，可運行但不得宣稱為穩定母本。

## Gate 層級
- Draft Gate：草案可讀
- Seed Gate：可續寫與內部測試
- Stable Gate：可作為穩定參照
- Main Gate：可併入主幹或對外作為正式版本

## 檢查要素
- 是否已有核心句與作用範圍
- 是否已有 Responsible Board
- 是否已有 Primary Write 與 Writeback Contract
- 是否已有 Snapshot / Recovery Point
- 是否已有衝突與風險說明

## 原則
- 未過 Seed Gate，不得長期作為依據
- 未過 Stable Gate，不得視為穩定母法
- Main Gate 必須附版本、freeze 記錄與釋出說明
- Gate 結果需可回讀

## 狀態
Seed v0.1
