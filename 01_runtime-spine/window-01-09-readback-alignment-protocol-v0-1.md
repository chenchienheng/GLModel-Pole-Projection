# Window 01-09 Readback Alignment Protocol v0.1

一句核心：
01 與 09 若不能把 seed、main、cloud 三個讀面對回同一條主骨，則讀取落差會被誤判成結構不存在；本協定的目的，是讓 repo binding 與 multicloud coordination 共同完成 readback 對位。

## 0. 狀態
Draft v0.1

## 1. 問題定義
目前常見錯位：
- 01 只看 repo / branch，不看 cloud mirror
- 09 只看 cloud mirror，不對回 seed / main
- 其他窗口只讀 main，誤以為 seed 不存在
- 同一份主骨在 seed、main、cloud 呈現出不同可見度，造成誤判

## 2. 協定目的
- 對回 seed source path
- 對回 main-readable pointer / shadow board
- 對回 cloud mirror / readback surface
- 找出三者之間的差異與缺口
- 將差異回送 00 收口

## 3. 三讀面定義
### R1｜Seed Read Face
- 來源：`xuanling-seed-v0-1`
- 特性：高頻鍛骨、最新候選、細節完整

### R2｜Main Read Face
- 來源：`main` + shadow pointer / shadow board
- 特性：穩定可讀、低變動、摘要化

### R3｜Cloud Read Face
- 來源：Drive / cloud mirror / runtime surface
- 特性：承載、鏡像、快照、歷史回讀、外顯視面

## 4. 最小對位流程
### A1｜01 定位主本
- repo_ref
- branch_ref
- source_path
- version_ref

### A2｜09 定位承載與鏡像
- cloud_family_ref
- mirror_path
- readback_surface
- primary_path_hint

### A3｜對位三讀面
逐項判定：
- seed exists?
- main pointer exists?
- shadow summary exists?
- cloud mirror exists?
- version consistent?
- source path consistent?

### A4｜差異分類
- seed_only
- main_only
- cloud_only
- seed_main_aligned_but_cloud_missing
- seed_cloud_aligned_but_main_missing
- all_aligned
- all_present_but_version_mismatch

### A5｜回送 00
輸出 readback alignment result packet 並回送 00。

## 5. 01 與 09 的角色分工
### 01 主責
- 對回 repo / branch / source path
- 判定主本與 specialization 是否明確
- 提供 seed 與 main 的結構基準

### 09 主責
- 對回 cloud family / mirror path / readback surface
- 判定 cloud read face 是否只是鏡像、快照或承載外顯
- 提供 seed-main-cloud 三者之間的承載差異說明

## 6. 核心輸入
- source_ref
- repo_ref
- branch_ref
- source_path
- main_pointer_ref
- shadow_board_ref
- cloud_family_ref
- mirror_path
- readback_surface
- current_state

## 7. 核心輸出
- alignment_result
- read_faces_present
- version_consistency
- source_consistency
- primary_gap
- recommended_fix
- next_single_action
- return_to_00

## 8. 禁止事項
- 禁止只看 main 就判定 seed 不存在
- 禁止只看 cloud mirror 就誤認為已對回主本
- 禁止 01 與 09 各自完成、卻不形成聯合 readback 結果
- 禁止有差異卻不分類 mismatch type

## 9. 成立條件
01 / 09 若要視為穩定 readback alignment 對位組，至少需：
- 可連續兩輪以上對回三讀面
- 可指出差異類型
- 可提供 recommended_fix
- 可回送 00 並更新 dashboard / alignment status

## 10. 收斂語句
01 與 09 的成熟，不在於看見多少 repo 或多少雲，而在於它們能否把 seed、main、cloud 三個讀面壓回同一條主骨；只有這樣，靈絡才不會因可見度差異而產生讀取幻差。
