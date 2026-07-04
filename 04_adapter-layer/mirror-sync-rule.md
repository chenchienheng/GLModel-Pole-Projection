# Mirror Sync Rule

一句核心：
鏡像層的作用是保留可回讀與共享視圖，不是與主寫位競爭；同步必須服從主寫位與回寫契約。

## 同步方向
- Primary Write -> Mirror
- Mirror -> Ref Link
- Mirror 不得直接覆寫 Primary Write

## 同步條件
- 已有 Primary Write Target
- 已有 Ref Link 或來源引用
- 已定同步時點或事件觸發
- 已知鏡像用途（共享 / 備援 / 展示 / 回讀）

## 規則
- 無主寫位，不建鏡像同步
- 鏡像不同步時需標示延遲或失敗原因
- 鏡像更新後需可對回來源版本
- 多鏡像並存時需指定主鏡像或用途區分

## 狀態
Seed v0.1
