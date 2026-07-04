# Public Board Writeback Map — Seed v0.1

一句核心：
⓪ 公盤首輪若採入口鏡像模式，應先定義哪些內容只讀顯示、哪些內容可回寫狀態註記、以及所有入口如何對回 GitHub 主本。

## 映射項
- Governance Core Entry -> Read from GitHub / No reverse write
- Current Blockers Summary -> Read from GitHub / Optional status note after test
- Tool Family Status Summary -> Read from GitHub status files / Optional test note append
- Next Action Queue -> Display next step / If updated, write back through GitHub source file
- Handoff Target Display -> Read from GitHub / No reverse write
- Source Ref -> Always point to GitHub path ref

## 原則
- 公盤不承接 rule 主寫
- 公盤可承接測試註記，但正式更新仍需回 GitHub
- 任何入口項都需保留 GitHub source ref
- 若首測後需修正內容，先修 GitHub，再同步公盤鏡像

## 狀態
Seed v0.1
