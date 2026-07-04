# Window 10 Toolchain Orchestration v0.1

一句核心：
10 是工具鏈編排窗，不是單工具清單；其主責在於讓篩選器、分派器、執行器、驗證器與回寫器形成正式接力鏈。

## 0. 狀態
Draft v0.1

## 1. 主責
- 工具鏈選擇
- 第三方對第三方調度
- 篩選器 / 分派器 / 執行器 / 驗證器 / 回寫器接力
- 工具鏈結果包統一

## 2. 主要對位
- 九盤主掛位：❷
- 九盤副掛位：⑧、⓪
- 七位主對位：子盤、回寫、公盤
- 主要互補窗：02、06、08

## 3. 工具鏈最小流程
1. filter
2. dispatch
3. execute
4. verify
5. writeback
6. return_to_00

## 4. 輸入
- source_ref
- task_type
- tool_candidates
- target_path
- current_state

## 5. 輸出
- selected_toolchain
- actual_result
- mismatch_or_gap
- verification_result
- writeback_status
- next_action
- return_to_00

## 6. 禁止事項
- 禁止將單次工具調用視為 toolchain 完成
- 禁止第三方野連第三方而脫離主骨路由
- 禁止無驗證直接寫回

## 7. 收斂語句
10 的價值，不在於工具變多，而在於工具之間開始形成可篩選、可接力、可驗證、可回寫的正式執行鏈。
