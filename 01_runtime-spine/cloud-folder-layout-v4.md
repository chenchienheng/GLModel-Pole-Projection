# Cloud Folder Layout v4

一句核心：
v4 雲端資料夾不是堆檔案，而是承載、鏡像、凍結、回寫的路徑骨架。

## 建議主結構
- `00_INBOX`
- `01_MOTHER-LAW`
- `02_RUNTIME-SPINE`
- `03_TRANSLATION-LAYER`
- `04_BOARD-ORCHESTRATION`
- `05_ADAPTER-LAYER`
- `06_TOPOLOGY`
- `90_MIRROR`
- `99_FREEZE`

## 各層作用
- `00_INBOX`：新進材料、未判位件
- `01_MOTHER-LAW`：母法、憲章、13本、命名層
- `02_RUNTIME-SPINE`：log、version、freeze、writeback
- `03_TRANSLATION-LAYER`：外界標籤、動作語義、路由轉譯
- `04_BOARD-ORCHESTRATION`：九盤主副責、handoff、視窗命名
- `05_ADAPTER-LAYER`：各雲家族接面守位
- `06_TOPOLOGY`：局部三耦環、母模式、拓撲對位
- `90_MIRROR`：鏡像層
- `99_FREEZE`：歷史保留與快照

## 原則
- 新資料先進 `00_INBOX`
- 判位後再分流，不直接亂放
- `90_MIRROR` 不作主編輯區
- `99_FREEZE` 只凍結，不承擔新版主寫

## 狀態
Seed v0.1
