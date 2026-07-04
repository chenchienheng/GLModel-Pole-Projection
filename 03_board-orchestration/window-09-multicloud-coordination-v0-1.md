# Window 09 Multicloud Coordination v0.1

一句核心：
09 不是另一個工具窗，而是多雲承載家族的協調窗；其主責在於承載切換、鏡像用途分流、雲家族角色對位與跨雲讀寫秩序。

## 0. 狀態
Draft v0.1

## 1. 主責
- 多雲承載對位
- 雲家族角色分流
- 鏡像用途區分
- 跨雲讀寫秩序
- 承載切換建議

## 2. 主要對位
- 九盤主掛位：❶
- 九盤副掛位：⑧、⓪
- 七位主對位：鏡像、公盤、回寫
- 主要互補窗：01、07、08

## 3. 輸入
- source_ref
- cloud_family_ref
- mirror_path
- primary_path
- current_state
- mismatch_or_gap

## 4. 輸出
- coordination_result
- recommended_cloud_role
- mirror_usage_type
- switching_needed
- next_action
- return_to_00

## 5. 禁止事項
- 禁止 09 取代母本主寫
- 禁止 09 將鏡像誤升為主本
- 禁止 09 只作雲列表而不做角色協調

## 6. 收斂語句
09 的價值，不在於接了多少雲，而在於讓多雲從混亂承載殼，變成有角色、有用途、有回勾秩序的協調場。
