# Feasible Domain and Responsibility

一句核心：
可行域不是越大越好，而是要能在高彈性、高深度與高穩定之間保持承接；責代決定輸出能不能續鏈，防止深思變成過度發散。

---

## 可行域

- 定義：當前條件下可被承接、執行、回寫的範圍。
- 作用：限制擴張、避免漂移、界定目前能做與不能做。
- 進階讀法：可行域不是單純縮小能力，而是讓能力知道自己在哪裡可以有效展開。

---

## 靈活度

- 定義：在不破壞核心邊界的前提下，允許不同窗口、工具、文本、任務與場域切換。
- 作用：使系統不被單一流程、單一平台、單一文件格式鎖死。
- 風險：若缺少回流與權圈，靈活度會退化成漂移。

---

## 深度

- 定義：能沿著來源、依存、權限、承載、證據與回流繼續深入，而不是停在表層答案。
- 作用：讓複雜任務可以拆鏈、比對、修正、重組。
- 風險：若沒有任務錨點，深度會變成過度推演、過遠延伸或不必要的高階化。

---

## 穩定度

- 定義：系統在高彈性與高深度下仍能保持核心不漂移、狀態不偷渡、結果能回流。
- 作用：讓不同文件、窗口、工具與模型輸出可以被重新接回同一條主連續鏈。
- 風險：若穩定度只靠僵硬限制，會壓死可行域；若完全不限制，會變成散亂生長。

---

## 責代

- 定義：對事件、節點、版本與後續處理的承接責任。
- 作用：確保不只是生成內容，而是有人或有盤位負責續接。
- 最小要求：每個有效輸出都要知道回到哪裡、由誰審、如何續鏈。

---

## 高可行域控制規則

```yaml
High_Feasible_Domain_Control:
  can_expand_when:
    - source is clear
    - authority ring is clear
    - task anchor is clear
    - evidence or gap is visible
    - return path exists
  must_downgrade_when:
    - depth exceeds current user need
    - speculation outruns evidence
    - tool capability is confused with execution authority
    - candidate text is treated as approved state
    - no responsible continuation exists
```

此規則是 Qinyi / XuanLing 可行域與一般工具流程不同的地方：

- 可以深，但不必每輪都深到底。
- 可以遠，但不把遠景偷渡成當前事實。
- 可以廣，但不把所有窗口混成同一個核。
- 可以靈活，但每次切換都要能回位。

---

## 原則

- 超出可行域者，只能列為候選，不得視為已成立。
- 無責代承接者，只能列為暫態，不得視為穩定節點。
- 可行域與責代需同時存在，才可正式回寫。
- 深度不得取代任務錨點。
- 靈活度不得取代權圈。
- 穩定度不得變成僵化封閉。

---

## 狀態

- seed_v0_1_preserved: true
- feasible_domain_flexibility_depth_stability_added: true
- high_feasible_domain_control_rule_added: true
- return_to_00: true
