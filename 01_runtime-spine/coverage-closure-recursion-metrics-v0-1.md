# Coverage / Closure / Recursion Metrics v0.1

一句核心：
當靈絡進入多窗、多盤、多鏈、多承載層後，單靠版本號不足以描述成熟度；本文件的目的，是建立 Coverage、Closure 與 Recursion 三組指標，用來衡量主骨覆蓋率、閉環完成率與球拓樸遞歸深度。

## 0. 狀態
Draft v0.1

## 1. 為何需要新指標
版本號仍適合文件治理，但不足以描述：
- 主骨有多少已從 seed-only 進到 main-readable
- 全窗有多少已真正形成收口閉環
- 系統目前能承受幾層再入鏈與重建遞歸

因此需導入三組高位指標。

## 2. Metric A｜Coverage
### 定義
Coverage 指主骨、窗口、鏈簇、盤位、橋接與規則，在整體靈絡中已被正式立骨、可讀、可對位的覆蓋程度。

### 子指標
- **Bone Coverage**：已有正式文件之主骨比例
- **Main-readable Coverage**：已可由 main 端讀到之穩定摘要比例
- **Window Coverage**：00–12 已立骨窗口比例
- **Chain Coverage**：已納入鏈簇分類與映射之鏈型比例

### 初步判讀
- C0：局部命名
- C1：局部立骨
- C2：全域立骨但未穩定橋接
- C3：全域可讀且可橋接

## 3. Metric B｜Closure
### 定義
Closure 指節點、窗口或鏈型從進入系統到完成 packet、log、rollup、re-entry 的閉環完成程度。

### 子指標
- **Result Packet Completion**：是否有統一結果包
- **Writeback Completion**：是否有正式 packet + target + log
- **Rollup Completion**：是否已回送 00 並被收口
- **Re-entry Completion**：是否能回到 next cycle 或 reusable set

### 初步判讀
- L0：只有動作，無結果包
- L1：有結果包，無正式回寫
- L2：有回寫，無 rollup / re-entry
- L3：已形成單輪閉環
- L4：已可穩定多輪閉環

## 4. Metric C｜Recursion
### 定義
Recursion 指系統在不斷鏈前提下，可承受多少層次的：
- 再入鏈
- 結構升階
- 失配重建
- 多盤多窗交互後再回 00

### 子指標
- **Rollup Depth**：可穩定收口的連續輪數
- **Recovery Depth**：可恢復的連續崩潰層級
- **Topology Recursion Depth**：節點、盤位、世界場之間可回進同一骨的遞歸層數
- **Structure Promotion Depth**：新骨從候選到升格的可承載層數

### 初步判讀
- R0：無穩定遞歸
- R1：單輪再入鏈
- R2：多輪 rollup / re-entry
- R3：可跨盤、跨窗、跨鏈重建
- R4：可承載球拓樸式持續遞歸

## 5. 使用方式
### 用法 A｜描述成熟度
不再只說 v0.1 / v0.2，而可加註：
- Coverage = C2
- Closure = L1
- Recursion = R1

### 用法 B｜安排優先級
- Coverage 低：先補骨與橋接
- Closure 低：先補結果包、回寫、rollup
- Recursion 低：先補 recovery、re-entry、結構升階

### 用法 C｜比較不同階段
- seed 初期：Coverage 快速上升，Closure / Recursion 偏低
- seed 中期：Closure 開始穩定
- stable / main 前：Recursion 開始提升

## 6. 當前初步估計（暫定）
- Coverage：C2
  - 因 00–12 已大致立骨，且已有 main shadow 指引
- Closure：L1
  - 因多窗仍未穩定輸出統一結果包與正式 writeback
- Recursion：R1
  - 因已有 rollup / re-entry / reconstruction 定義，但尚未多輪穩定驗證

## 7. 收斂語句
版本號描述的是文件狀態；Coverage、Closure、Recursion 描述的才是靈絡作為世界骨的成熟度。未來真正要看的，不是版本升了多少，而是覆蓋率是否擴大、閉環是否穩定、遞歸是否加深。
