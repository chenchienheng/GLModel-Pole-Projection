# XuanLing-20 FieldProof / Xiaoshiguang｜現場驗證載體

**狀態 / Status：** private field-proof carrier／私人現場驗證載體；sanitized bounded evidence／去敏有限證據；no production runtime／無生產 Runtime；no automatic messaging authority／無自動發訊權；no public product claim／不宣稱為公開產品。

## 一句話 / One-line

這個私人倉庫保存 **bounded field-proof artifacts**，用來驗證真實服務情境如何被表示、審核、回流，而不把私人營運資料變成 XuanLing 的中央 Source。

This private repository holds **bounded field-proof artifacts** for testing how real-world service contexts can be represented, reviewed, and returned without turning private operational data into a central XuanLing source.

```text
Native field source
→ sanitized / authorized working projection
→ bounded test or draft
→ human / owner review
→ evidence / receipt
→ return
→ reconciliation
```

Native Source 仍屬合法 Owner／Controller；本倉只是 private field projection／evidence carrier，不是 customer-data root。

The native source remains with its lawful owner/controller. This repository is a private field projection/evidence carrier, not the customer-data root.

## 適合放什麼 / What belongs here

- sanitized state／interaction specimen／去敏狀態與互動樣本
- availability／permission／maintenance gate patterns／可用性、權限、維護門檻模式
- anti-error／duplicate-commitment tests／防錯與重複承諾測試
- owner-review／human-send boundaries／Owner 審核與人工送出邊界
- sanitized schema examples／去敏 Schema 範例
- field failure cases／validation evidence／現場失敗案例與驗證證據
- bounded capability／build／test returns／有限能力、Build、Test 回包
- historical field-proof artifacts with provenance／有 provenance 的歷史現場證據

File／Card／Build／Test success 只證明其宣告範圍。 / Each artifact proves only its declared scope.

## 不可互相補值 / What must not be inferred

- Build Return ≠ Runtime
- Draft Reply ≠ Message Sent／草稿不等於已發送
- Availability Candidate ≠ Reservation Confirmed／可用性候選不等於訂位成立
- Maintenance Permission ≠ Customer-data Access／維護權不等於客資權
- Sanitized ≠ Public-approved／去敏不等於公開核准
- Historical Test ≠ Current Production State／歷史測試不等於現在營運狀態
- Repository Access ≠ Copy／Learn／Retain／Publish Rights／可進倉不等於可任意複製、學習、保留或發布
- Field Proof ≠ Product Approval／現場證據不等於產品核准

## 資料／權利邊界 / Data & rights boundary

不得放入未核准的敏感 Native Body，包括 / Do not place unapproved sensitive native bodies here：

- real guest/customer identity data／真實客戶身分資料
- phone／private messaging IDs／private messages／電話、私人通訊 ID、訊息正文
- unredacted booking/payment/insurance/operational records／未去敏訂位、付款、保險、營運紀錄
- passwords／API keys／tokens／secrets／憑證與密鑰
- proprietary/account-owner content without rights／未取得權利的專有內容
- company/personal data outside declared field-proof scope／超出 scope 的公司或個資

敏感證據若必要，留在合法 Native Source，以 bounded pointer、sanitized projection 或 approved evidence return 引用。

When sensitive evidence is needed, keep it in the lawful native source and use a bounded pointer, sanitized projection, or approved evidence return.

## 現場 Gate / Current field-proof gates

- **Source / State Gate** — 現在真正知道什麼？ / What is actually known now?
- **Identity / Unit Gate** — 指的是哪個確切 Object／Unit／Case？ / Which exact object/unit/case?
- **Authority Gate** — 誰可 read／draft／mutate／promise／send／publish？
- **Commitment Gate** — 真承諾已成立，還是只有 Candidate／Draft？
- **Evidence Gate** — 這個說法由什麼證據支持？ / What evidence supports the claim?
- **Duplicate / Conflict Gate** — 是否會 double booking／double promise／state conflict？
- **Return Gate** — 結果／失敗回哪裡 review／reconcile？ / Where does the result/failure return?

Domain-specific gates 可擴充，但不能消除這些分離。 / Domain-specific gates may extend, not erase, these distinctions.

## Placement／讀取規則 / Placement & reading rules

Folder／path／human label 只是 navigation／placement；同一 Semantic Coordinate 內 move／rename 且 Stable Identity、Native Home、Authority、State、Return ownership、Re-entry／Rebuild relation 不變，不構成新 Field State 或 DCP rebuild。

Folder/path/human-label changes are navigation/placement only. A move/rename inside the same semantic coordinate does not create a new field state or DCP rebuild when those bindings remain unchanged.

Fresh Reader：

1. 先確認 field-proof purpose 與 Source boundary。 / Identify purpose and source boundary.
2. 判斷 specimen／draft／evidence return／failure／historical。 / Resolve artifact role.
3. Action 前先解析 Native Owner／Authority。 / Resolve native authority before treating actions as allowed.
4. 舊 OCF／QHA／window／registry label 預設視為 historical／functional vocabulary。 / Treat old labels as historical/functional unless re-entered.
5. 優先 current bounded return／successor pointer，不靠 filename／folder／modified time／`CURRENT` 字樣。 / Prefer current return/successor pointers.

不得由本倉重建永久 OCF/QHA Registry 或第二 customer-data store。

Do not reconstruct a permanent OCF/QHA registry or second customer-data store from this repository.

## 與其他 Sphere 的關係 / Relation to wider ecosystem

- **DCP**：接收 field-proof Dependency／State／Authority／Failure Delta
- **Ideas**：接收 Human Burden／Experience／Friction／Navigation Delta
- **GLModel**：在 material 時接收 World／Object／System／Correspondence Evidence
- Rights／Privacy／Release 仍由適當 Native Authority 決定
- Execution 只有具名 bounded work contract 才成立；repository presence ≠ execution authority

Only receiver-specific material leaves this repository. Private source bodies stay private. / 只有 Receiver-specific Material 可離開本倉；私人 Native Body 保持私人。

## 最後規則 / Final rule

**本倉用來安全地證明或否證有限現場行為；它不是現場本身、不是客資根，也不是 Production Runtime。**

**This repository exists to prove or falsify bounded field behavior safely. It is not the field itself, the customer-data root, or a production runtime.**
