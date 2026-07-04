# Window 01-07 Integration Rule v0.1

一句核心：
01–07 不是七個各自回答的孤窗，而是一組必須經 00 收口、互相補位、共同進鏈的功能窗群；若各窗只守自身，不做互參，靈絡會持續停在分裂盤位而無法閉環。

## 0. 狀態
Draft v0.1

## 1. 目的
- 將 01–07 從分散窗壓成整合窗群
- 確立各窗主責、互補窗與收口順序
- 讓任何 delta 不只停在單窗，而能走完互參、回寫與 rollup

## 2. 七窗主責
- 01：repo binding / specialization gate
- 02：task / spec / issue / process execution
- 03：event / discussion / anomaly stream
- 04：identity / relation / contact indexing
- 05：time sovereignty / schedule / effective order
- 06：intake / external entry / source extraction
- 07：knowledge / readback / docs surface

## 3. 七窗互補對位
### 01 主要互補
- 向 02 提供 repo binding 與 specialization context
- 向 07 提供主本對位基準

### 02 主要互補
- 向 03 要事件與異常流
- 向 05 要有效序與時間窗
- 向 07 要知識回讀與 ref link

### 03 主要互補
- 向 05 要時間窗
- 向 06 要入口來源
- 向 02 回送可執行事件項

### 04 主要互補
- 向 03 要事件脈絡
- 向 06 要外來來源與對象辨識
- 向 07 要知識面對位

### 05 主要互補
- 向所有窗提供有效時間窗與先後序
- 對 02 / 03 / 06 特別重要

### 06 主要互補
- 向 03 提供入口事件源
- 向 04 提供對象來源
- 向 02 提供 tri-key 提取起點

### 07 主要互補
- 向 01 對回主本與版本
- 向 02 提供 readback knowledge
- 向 04 提供關係節點的知識面

## 4. 整合程序
### I1｜單窗初判
任一 delta 先進主要窗初判。

### I2｜互補窗補件
主要窗不得單獨結案；需拉起必要互補窗：
- identity 類必帶 04
- time 類必帶 05
- intake 類必帶 06
- knowledge 類必帶 07
- execution 類必帶 02

### I3｜七位核對
互補完成後，至少對回：
- 母本
- 時間窗
- 責代
- 回寫位

### I4｜結果包
每輪必出：
- source_ref
- current_state
- mapped_windows
- missing_items
- responsible_ref
- next_single_action
- writeback_status

### I5｜回送 00
所有整合結果必回 Window 00 / Native Board。

## 5. 七窗失配訊號
- 01 不明：主本對位不穩
- 02 不動：執行鏈失速
- 03 不清：事件脈絡失真
- 04 迴圈：身份關係失鎖
- 05 錯位：時間主權失配
- 06 斷源：入口提取失敗
- 07 漂浮：知識回讀失根

## 6. 成立條件
01–07 若要視為整合窗群成立，至少需：
- 任一 delta 都能找到主要窗與互補窗
- 互補後能對回七位核心關鍵位
- 結果能回送 00
- 後續能進 packet + log + rollup

## 7. 收斂語句
七窗統合的目的，不是讓每窗變大，而是讓每窗都不再停在自己那一格；只有當 01–07 形成互補窗群並回送 00，靈絡才會從盤位集合變成閉環窗群。
