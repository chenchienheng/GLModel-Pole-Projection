# Mother Architecture Registry v0.1

一句核心：
本 registry 用於管理 DCP、DXS、XDDC、DXC、XDDL、XLEN、LingLuo、XuanLing、CoreTri、早期 v1-v3 文本與後續 runtime spine 之間的譜系關係；原則是不覆寫母本、不刪除早期實驗，而是分級、封存、對照、升級。

## 0. Status
Draft v0.1

## 1. Source Snapshot
目前 repo 已確認：
- `README.md`：DCP Framework 主入口；定位為 conceptual and interpretive framework，不是 software system 或 executable model。
- `STATUS.md`：目前狀態為 conceptually stable / exploratory；implementation status: not implemented。
- `00_mother-law/README.md`：母法資料夾，列出 DCP、13 books index、DXC / XDDL / XLEN、LingLuo v4 mapping。
- `Freeze/readme`：標示 DCP 母本放置。

尚未在本 repo 搜尋命中：
- DXS
- XDDC
- early architecture text v1-v3
- explicit project blueprint files

## 2. Governance Principle
```yaml
mother_architecture_rule:
  do_not_delete_early_texts: true
  do_not_rewrite_mother_source_directly: true
  archive_before_upgrade: true
  version_lineage_required: true
  source_ref_required: true
  return_to_00: true
```

## 3. Classification
| Class | Meaning | Action |
|---|---|---|
| M0 Mother Source | 母本、原始法則、不可直接覆寫 | freeze / cite / index |
| M1 Structural Core | DCP / CoreTri / 00 mother-law | stabilize / clarify |
| M2 Runtime Spine | GitHub, AGENTS, schedules, window instructions | active governance |
| M3 Projection Layer | Gamma / Figma / documents / visual maps | surface only |
| M4 Experimental Text | v1-v3, early drafts, naming variants | archive + lineage |
| M5 Candidate Module | DXS / XDDC / DXC / XDDL / XLEN if not yet mapped | identify + classify |

## 4. Current Registry
```yaml
DCP:
  status: confirmed_in_repo
  current_layer: M1 Structural Core
  source_ref:
    - README.md
    - STATUS.md
  action: keep as stable conceptual entrance

00_mother_law:
  status: confirmed_in_repo
  current_layer: M1 / M2 bridge
  source_ref:
    - 00_mother-law/README.md
  action: expand index without rewriting source meaning

Freeze:
  status: confirmed_in_repo
  current_layer: M0 Mother Source holding area
  source_ref:
    - Freeze/readme
  action: keep as archival mother-source area

DXC:
  status: mentioned_in_mother_law_readme
  current_layer: M5 Candidate Module
  source_ref:
    - 00_mother-law/README.md
  action: identify exact source text later

XDDL:
  status: mentioned_in_mother_law_readme
  current_layer: M5 Candidate Module
  source_ref:
    - 00_mother-law/README.md
  action: identify exact source text later

XLEN:
  status: mentioned_in_mother_law_readme
  current_layer: M5 Candidate Module / Identity spine
  source_ref:
    - 00_mother-law/README.md
  action: map to identity / authorship / architecture lineage

LingLuo_v4_mapping:
  status: mentioned_in_mother_law_readme
  current_layer: M2 Runtime / M3 Projection bridge
  source_ref:
    - 00_mother-law/README.md
  action: create explicit mapping index later

DXS:
  status: not_found_in_current_repo_search
  current_layer: unknown / M5 candidate
  source_ref: missing
  action: user or Drive must provide source_ref

XDDC:
  status: not_found_in_current_repo_search
  current_layer: unknown / M5 candidate
  source_ref: missing
  action: user or Drive must provide source_ref

early_architecture_text_v1_v3:
  status: not_found_in_current_repo_search
  current_layer: M4 Experimental Text
  source_ref: missing
  action: locate in Drive / uploads / old chats / external files before mapping

blueprints:
  status: not_found_in_current_repo_search
  current_layer: M4 / M5 candidate
  source_ref: missing
  action: locate before upgrade
```

## 5. Upgrade Path
```yaml
upgrade_path:
  step_1_locate:
    action: find exact source_ref for each old text or project name
  step_2_classify:
    action: assign M0-M5 class
  step_3_freeze:
    action: preserve original before any rewrite
  step_4_crosswalk:
    action: create old_name -> current_role mapping
  step_5_promote:
    action: only promote if source_ref + role + return_to_00 exist
```

## 6. Do Not Do
- Do not merge DXS / XDDC / DXC / XDDL into DCP without source_ref.
- Do not rewrite early v1-v3 as if they were current doctrine.
- Do not delete early experimental architecture texts.
- Do not let runtime docs overwrite mother-source docs.
- Do not treat projection diagrams as canonical mother architecture.

## 7. Next Single Action
Locate exact source_ref for DXS / XDDC / early v1-v3 / blueprint texts.

## 8. Return to 00
return_to_00: true
