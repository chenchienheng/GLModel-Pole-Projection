# Window Naming Rule

一句核心：
對話框不是聊天殼，而是靈絡中的視窗節點；命名必須能同時表達盤位、作用、狀態與版本。

## 命名格式
`[Board]-[Layer]-[Function]-[Status]-[Version]`

## 欄位說明
- Board：⓪~⑧ 或對應盤名
- Layer：Mother / Spine / Translation / Board / Adapter / Topology
- Function：當前主作用
- Status：Seed / Draft / Active / Freeze / Mirror
- Version：v0.x / v1.x / v4.x

## 範例
- `⓪-Board-Orchestration-Dispatch-Active-v4`
- `❶-Adapter-CloudMirror-Draft-v0.1`
- `❸-Translation-EventRouting-Seed-v0.1`
- `⑦-Knowledge-Index-Freeze-v3`

## 原則
- 命名先表達作用，不先表達情緒
- 同名不同態必須拆開
- 視窗名稱需可對回 writeback target 與 log

## 狀態
Seed v0.1
