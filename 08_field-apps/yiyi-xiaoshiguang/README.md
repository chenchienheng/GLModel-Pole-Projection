# Yiyi / Xiaoshiguang Fieldspace

Status: Candidate / Public-safe Fieldspace / No Customer Data / No Runtime / No External Writeback

## 一句核心

這個目錄是在 DCP-Framework 主倉庫中開闢給「漪漪／小蒔光房況防錯 App」的去敏架構空間；它承載設計、權限、施工與回流契約，不承載客戶資料、金鑰、正式後台設定或未授權素材。

## Fieldspace 定位

這不是小蒔光正式營運後台，也不是客戶資料庫。  
它是 Vitas 已有數位生態空間中的一個「芥子須彌式」架構節點：用主倉庫保存邏輯、契約、邊界與施工入口，讓後續 Codex／和澄／維護者可照規則施工，但不把營運主權從漪漪手上拿走。

## Authority

- Highest Authority: 漪漪／小蒔光實際營運權威
- Support: Vitas / Qinyi / Codex / Hazumi construction window
- Carrier: GitHub / Web App / Supabase / Vercel / LINE

GitHub 是 Carrier，不是 Authority。  
Vitas 與 Qinyi 是 support，不是 final operator。  
漪漪保留最高授權、撤權、資料主權與正式上線裁定。

## Hard Boundaries

This directory MUST NOT contain:

- customer names
- phone numbers
- LINE IDs
- private messages
- booking records
- payment details
- API keys
- `.env` files
- Supabase service keys
- LINE Developers credentials
- unapproved Facebook / Instagram content
- AI-generated photos used as business room photos

This directory MAY contain:

- sanitized architecture contracts
- GUI flow definitions
- permission models
- backend schema candidates
- staging / production gates
- Codex handoff notes
- public official source references
- photo import rules

## Current Version

- v0.6: Backend Authority-Safe Candidate exists as artifact package.
- v0.7: Authority Lock / Operation Rules / Go-live Gate patch is being integrated here.

## Next Actions

1. Keep this branch as Candidate.
2. Add v0.7 contract and security boundary documents.
3. Prepare Codex handoff without customer data.
4. Do not deploy production from this repo without owner approval.
5. If runtime becomes necessary, use protected deployment and external secrets, not committed files.
