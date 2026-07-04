# Heartbeat Health Check Rule

一句核心：
靈絡要長時運作，不能只看是否有輸出；還必須定期檢查主鏈、盤位、工具與回寫是否維持健康狀態。

## 檢查面
- Main Chain Health：主鏈是否可續接
- Board Health：盤位是否有卡滯、過載或失配
- Tool Health：工具是否可用、是否失敗累積
- Writeback Health：回寫是否延遲、缺失或中斷
- Window Health：窗口是否過窗未關或長期停滯

## 最小欄位
- Check ID
- Time
- Check Scope
- Status
- Issue Summary
- Suggested Action
- Responsible Ref
- Log Ref

## 狀態分類
- Green：穩定
- Yellow：可運作但需注意
- Orange：局部失配或延遲
- Red：需立即處理

## 原則
- 健康檢查不取代主寫，只作監測與維護依據
- 連續 Yellow / Orange 應建立處理事件
- Red 不得長期掛置而無 Responsible Board

## 狀態
Seed v0.1
