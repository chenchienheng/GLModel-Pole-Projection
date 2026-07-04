# Cloud Read Sync Rule v0.1

一句核心：
Cloud 承載層不得只作被動存放；它必須能讀取主本、比對差異、回報失配、並回送收口。

## 狀態
Draft v0.1

## 規則
- Cloud 不取代母本主寫
- Cloud 必須可對回 source ref
- Cloud 必須可比對版本差異
- Cloud 失配時必須回報 next action
- Cloud 結果必須回送 00 收口

## 最小程序
1. 定位 source ref
2. 確認 version
3. 比對 mirror path
4. 回報 mismatch
5. 回送 00
