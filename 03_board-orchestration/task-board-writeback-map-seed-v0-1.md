# Task Board Writeback Map — Seed v0.1

一句核心：
② 任務盤首輪若採承接與追蹤模式，應先定義哪些內容只讀顯示、哪些內容可回寫狀態註記，以及所有任務項如何對回 GitHub 主本與公盤來源。

## 映射項
- Current Focus -> Read from GitHub / Optional status note after test
- Task Queue -> Track task items / If task status affects formal spine, write back through GitHub source file
- Responsible Ref -> Read from GitHub or public board source / No reverse overwrite
- Status -> Task tracking state / Optional test note append
- Next Action -> Display and track / Formal update through GitHub source file
- Handoff Source -> Read from public board or GitHub / No reverse write
- Source Ref -> Always point to GitHub path ref or approved public board ref

## 原則
- 任務盤不承接 rule 主寫
- 任務盤可承接追蹤註記，但正式更新仍需回 GitHub
- 每個任務項都需保留 source ref
- 若首測後需修正正式內容，先修 GitHub，再同步任務盤

## 狀態
Seed v0.1
