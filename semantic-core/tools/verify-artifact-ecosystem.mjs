import fs from 'node:fs';

const readJson = p => JSON.parse(fs.readFileSync(p, 'utf8'));
const index = readJson('semantic-core/index.json');
const registry = readJson('semantic-core/artifacts/artifact-registry.json');
const assembly = readJson('semantic-core/assemblies/gui-lu-design-review.json');
const triad = readJson('semantic-core/specimens/gui-lu/triadic-representation-set.json');

const fail = msg => { console.error(msg); process.exit(1); };

for (const p of ['HUMAN_ZH_TW','EXTERNAL_EN_GATED','CANONICAL_MACHINE','VISUAL_SPATIAL','DOMAIN_NATIVE']) {
  if (!index.representation_profiles.includes(p)) fail(`REPRESENTATION_PROFILE_MISSING:${p}`);
}

for (const p of [
  'semantic-core/HUMAN.zh-TW.md',
  'semantic-core/artifacts/artifact-selection-matrix.csv',
  'semantic-core/visuals/triadic-life-dependency.mmd'
]) {
  if (!fs.existsSync(p)) fail(`MULTIMODAL_HUMAN_OR_VISUAL_SURFACE_MISSING:${p}`);
}

const artifacts = registry.artifacts || [];
if (!artifacts.length) fail('ARTIFACT_REGISTRY_EMPTY');

for (const a of artifacts) {
  if (!a.artifact_id || !a.stable_subject_id) fail('ARTIFACT_IDENTITY_MISSING');
  if (a.lifecycle_state === 'CURRENT' && !a.carrier_binding?.pointer) fail(`CURRENT_ARTIFACT_POINTER_MISSING:${a.artifact_id}`);
  if (['SUPERSEDED','HISTORICAL','INVALIDATED','RETIRED','RECLAIM_CANDIDATE'].includes(a.lifecycle_state) && a.semantic_role === 'STATE' && a.claim_ceiling === 'CURRENT') {
    fail(`HISTORICAL_ARTIFACT_CANNOT_ASSERT_CURRENT:${a.artifact_id}`);
  }
  if (a.representation_profile === 'EXTERNAL_EN_GATED' && a.lifecycle_state === 'CURRENT' && a.carrier_binding?.pointer && !a.rights_profile_id) {
    fail(`EXTERNAL_ARTIFACT_RIGHTS_GATE_MISSING:${a.artifact_id}`);
  }
}

const bySubject = Map.groupBy(artifacts.filter(a => a.lifecycle_state === 'CURRENT'), a => a.stable_subject_id);
for (const [subject, list] of bySubject) {
  const profiles = new Set(list.map(a => a.representation_profile));
  if (!profiles.has('HUMAN_ZH_TW')) fail(`CURRENT_SUBJECT_HUMAN_ZH_TW_MISSING:${subject}`);
  if (!profiles.has('CANONICAL_MACHINE')) fail(`CURRENT_SUBJECT_MACHINE_PROFILE_MISSING:${subject}`);
}

if (!assembly.selection_rules.exclude_superseded_without_explicit_request) fail('ASSEMBLY_MUST_EXCLUDE_SUPERSEDED_BY_DEFAULT');
if (!assembly.selection_rules.exclude_invalidated) fail('ASSEMBLY_MUST_EXCLUDE_INVALIDATED');
if (!assembly.output_profiles.includes('HUMAN_ZH_TW')) fail('ASSEMBLY_HUMAN_PROFILE_MISSING');
if (!assembly.output_profiles.includes('CANONICAL_MACHINE')) fail('ASSEMBLY_MACHINE_PROFILE_MISSING');

if (triad.stable_subject_id !== 'WORLD-GUI-LU') fail('TRIAD_STABLE_IDENTITY_DRIFT');
if (triad.profiles.human_zh_tw?.stable_subject_id !== triad.stable_subject_id) fail('TRIAD_HUMAN_IDENTITY_DRIFT');
if (triad.profiles.canonical_machine?.stable_subject_id !== triad.stable_subject_id) fail('TRIAD_MACHINE_IDENTITY_DRIFT');
for (const a of triad.profiles.visual_spatial || []) {
  if (a.stable_subject_id !== triad.stable_subject_id) fail(`TRIAD_VISUAL_IDENTITY_DRIFT:${a.artifact_id}`);
}
if (triad.profiles.external_en_gated !== null) fail('EXTERNAL_PROFILE_MUST_REMAIN_GATED_UNTIL_RELEASE');
if (!['ALIGNED','PARTIAL','HOLD'].includes(triad.alignment_state)) fail('INVALID_TRIAD_ALIGNMENT_STATE');

for (const key of ['artifact_component','triadic_representation_set','context_assembly']) {
  const p = index.schemas[key];
  if (!p || !fs.existsSync(`semantic-core/${p}`)) fail(`SCHEMA_POINTER_MISSING:${key}`);
}

console.log(`ARTIFACT_ECOSYSTEM_OK:${triad.alignment_state}`);
