# Main Merge Readiness Checklist

一句核心：
分支要進入 main 前，必須先通過最小併幹檢查；未過檢查者，可繼續演化，但不得提昇為主幹依據。

## 檢查項
- 是否已有核心句與作用範圍
- 是否已有 Responsible Board 與 Primary Write
- 是否已有 Writeback Contract
- 是否已有 Snapshot 與 Recovery Point
- 是否已有 Conflict Resolution 記錄
- 是否已通過對應 Gate 層級
- 是否已有 Release Note 或併幹說明

## 結果
- Ready：可提請併入 main
- Partial：仍留在 seed / stable 層
- Blocked：不得提請併幹

## 原則
- main 只承接可作穩定參照之內容
- Partial 不得因急用而跳過 Ready
- Blocked 需明示阻塞項與補件路徑

## 狀態
Seed v0.1
