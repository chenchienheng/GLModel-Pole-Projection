# Version Lineage Rule

一句核心：
版本不是只看號碼遞增；靈絡中的版本必須保留來源、分支、取代關係與升階路徑，形成可追讀的版本譜系。

## 最小欄位
- Version ID
- Parent Version Ref
- Branch Ref
- Layer
- Scope
- Status
- Supersedes Ref
- Release Ref
- Time
- Notes

## 譜系關係
- derives-from
- supersedes
- split-from
- merged-into
- promoted-to

## 原則
- 無 Parent Version Ref 者，不得宣稱完整版本來源
- 版本譜系需能對回分支、gate 與 release note
- 局部版本升階時需標示 scope
- 譜系記錄不得取代實際版本內容，只作追讀入口

## 狀態
Seed v0.1
