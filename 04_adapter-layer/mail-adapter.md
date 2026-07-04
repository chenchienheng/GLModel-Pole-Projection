# Mail Adapter

一句核心：
Mail 是入口分流層與外部來件承接層。

## 主責
- 外部來件
- 分流判位
- 回覆草稿
- 入口留痕

## 原則
- Mail 不取代事件盤與公盤
- 重要來件需對回 writeback target
- 來件處理需保留來源與時間

## 狀態
Seed v0.1
