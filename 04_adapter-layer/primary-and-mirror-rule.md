# Primary and Mirror Rule

一句核心：
同一事件可分布於多工具，但必須明定主寫位與鏡像位；沒有主寫位，不得視為正式成立。

## 定義
- Primary Write：事件的正式主寫來源
- Mirror：供回讀、共享、展示或備援之鏡像承載
- Ref Link：主寫與鏡像之間的引用關係

## 規則
- 每一正式事件必須指定一個 Primary Write
- Mirror 可多個，但不得反向覆寫 Primary Write
- Mirror 更新需保留 Ref Link 或回寫來源
- Primary Write 若切換，需留下版本與 handoff 記錄

## 原則
- 主寫優先於同步畫面
- 鏡像服務可回讀，不主導成立條件
- 無主寫位者，僅視為暫存或草稿

## 狀態
Seed v0.1
