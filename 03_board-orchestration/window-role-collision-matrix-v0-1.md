# Window Role Collision Matrix v0.1

一句核心：
靈絡若要避免結構崩塌，必須先找出哪些窗口之間存在責任重疊、邊界吞併或高位越權；本矩陣的目的，是把可能的角色碰撞顯性化，避免『都有在做，但沒有人真正在守自己的位』。

## 0. 狀態
Draft v0.1

## 1. 使用方式
每一組碰撞記錄：
- collision_pair
- overlap_area
- risk_level
- correct_boundary
- current_fix

## 2. 高風險碰撞
| collision_pair | overlap_area | risk_level | correct_boundary | current_fix |
|---|---|---|---|---|
| 00 ↔ 11 | 00 裁定 vs 11 升階提案 | High | 11 只能提候選，00 才能裁定 promoted / rollback | adjudication schema + promoted / not promoted 流程 |
| 00 ↔ 12 | 世界場願景 vs 最終成立裁定 | High | 12 只能定可行域候選，不得自判完成 | 12 必須回送 00 |
| 01 ↔ 09 | 主本讀面 vs 雲鏡像讀面 | High | 01 守主本與 binding，09 守 mirror / cloud roles | readback alignment protocol |
| 02 ↔ 10 | 執行路由 vs 工具鏈編排 | High | 02 決 task/spec/issue 承接，10 守 handoff chain | handoff validation protocol |
| 03 ↔ 05 | 事件主軸 vs 時權優先序 | High | 03 不自判先後，05 不搶事件本體 | time-window / trigger scenarios |
| 03 ↔ 06 | 事件 intake vs 入口 intake | High | 06 守入口與 tri-key，03 守事件化與分流 | source extraction + event pack |
| 04 ↔ 03/05/07 | 身份關係 vs 事件 / 時序 / 知識 | High | 04 只守 identity / role / relation / contact | loop breaker rule |
| 07 ↔ 11 | 知識回讀 vs 新骨生成 | High | 07 只回讀既有骨，11 才能提生成候選 | 07 dual-layer + 11 review gate |

## 3. 中風險碰撞
| collision_pair | overlap_area | risk_level | correct_boundary | current_fix |
|---|---|---|---|---|
| 05 ↔ 00 | 時權判位 vs 最終裁定 | Medium | 05 只出時權建議，00 才出 accept / rollback | adjudication support only |
| 06 ↔ 01 | 入口 source vs repo binding | Medium | 06 抽來源，01 對主本 path | source_ref + binding split |
| 08 ↔ 09 | runtime surface vs UI / surface | Medium | 08 守執行面，09 守交互與視面 | activation sequence |
| 08 ↔ 10 | agent runtime vs model/tool orchestration | Medium | 08 接 execution surface，10 決模型／工具角色 | adapter contract + toolchain contract |
| 09 ↔ 10 | UI surface vs 模型整合 | Medium | 09 不決模型角色，10 不主導外顯面 | strategic organization map |

## 4. 低風險碰撞
| collision_pair | overlap_area | risk_level | correct_boundary | current_fix |
|---|---|---|---|---|
| 01 ↔ 07 | 主本定位 vs 知識回讀 | Low | 01 對 path，07 對 content/readback | dual-layer readback |
| 02 ↔ 03 | 任務化 vs 事件化 | Low | 03 守事件流，02 守任務化 | event to task routing |
| 06 ↔ 07 | 來源提取 vs 知識整理 | Low | 06 先抽 source，07 再整理內容 | intake before readback |

## 5. 碰撞處理原則
1. 高位窗不得以位階優勢覆蓋低位窗主責。
2. 低位窗不得用『資訊比較多』為理由擴張到他窗責任。
3. 任一碰撞若已可明確切分主責，應優先立 schema / protocol，而非靠口頭默契。
4. 若同一責任必須跨兩窗，則需明定：誰主責、誰互補、誰裁定。

## 6. 收斂語句
真正會讓靈絡崩塌的，不是窗口太多，而是窗口彼此偷偷做同一件事；Role Collision Matrix 的目的，就是在系統擴張前先抓出重疊責任，讓每一窗都回到自己該守的位。
