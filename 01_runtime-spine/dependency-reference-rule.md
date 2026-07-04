# Dependency Reference Rule

一句核心：
靈絡中的節點、規則、窗口、盤位與工具，不得只靠語意記憶連接；重要依存關係應留下可追讀的引用鏈。

## 引用對象
- Rule -> Rule
- Board -> Window
- Event -> Project Card
- Tool Action -> Writeback Target
- Snapshot -> Recovery Point
- Release Note -> Version Ref

## 最小欄位
- Reference ID
- Source Ref
- Target Ref
- Relation Type
- Time
- Notes

## Relation Type
- depends-on
- writes-to
- mirrors
- supersedes
- recovers-from
- belongs-to

## 原則
- 重要依存關係需有明確引用
- 無引用者，不得宣稱為穩定依存鏈
- 引用鏈應能對回版本、窗口或主寫位

## 狀態
Seed v0.1
