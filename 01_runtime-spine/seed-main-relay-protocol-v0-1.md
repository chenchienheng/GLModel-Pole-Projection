# Seed-Main Relay Protocol v0.1

一句核心：
seed 分支負責鍛骨與高頻演化，main 負責穩定參照與外部可讀；兩者不得混寫，但必須透過 relay protocol 保持可接、可讀、可升階。

## 0. 狀態
Draft v0.1

## 1. 角色分工
### seed
- 高頻鍛造
- 新骨生成
- 規則試驗
- 盤位與窗群調整
- 候選結構形成

### main
- 穩定參照
- 對外可讀入口
- 已通過最小併幹檢查之內容
- 低變動主幹索引

## 2. 不混寫原則
- seed 未通過檢查，不得直接當 main 依據
- main 不追逐 seed 每一次細部變動
- seed 可演化，main 只承接穩定可讀骨

## 3. relay 最小單位
每一個欲接到 main 的 seed 項，至少需具備：
- core sentence
- scope
- responsible board
- primary write
- source path
- version
- current status
- merge readiness
- release note summary

## 4. relay 三層狀態
### R0｜seed-only
- 僅存在於 seed
- 尚未形成 main 可讀摘要

### R1｜main-readable
- 已有 main 可讀摘要或指引頁
- 但內容仍以 seed 為準
- 可供其他窗口與外部閱讀者對位

### R2｜main-ready
- 已通過 main merge readiness checklist
- 可提請併入 main

## 5. relay 程序
### P1｜seed 定稿候選
seed 內文件先形成穩定 core sentence、scope、作用與失配規則。

### P2｜生成 main-readable 摘要
為欲接 main 之項目，生成：
- one-line summary
- why it matters
- source path in seed
- current status
- read order

### P3｜掛入 main shadow board
將上述摘要掛入 main shadow sync board。

### P4｜檢查 merge readiness
依 main merge readiness checklist 判定：
- Ready
- Partial
- Blocked

### P5｜提請 main 併幹
僅 Ready 項可提請進入 main。

## 6. 給其他窗口的讀取規則
其他窗口若主要讀 main，則：
- 先讀 main pointer / shadow board
- 再決定是否下探 seed source path
- 不得因未讀 seed 就判定 seed 不存在

## 7. 收斂語句
seed 與 main 的正確關係，不是誰取代誰，而是 seed 持續鍛骨、main 提供穩定可讀界面；透過 relay protocol，其他窗口才能既不失最新骨，又不被高頻變動淹沒。
