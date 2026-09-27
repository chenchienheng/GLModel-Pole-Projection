import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const specimen=path.resolve(here,'../specimens/gui-lu');
const readJSON=async name=>JSON.parse(await fs.readFile(path.join(specimen,name),'utf8'));

const world=await readJSON('world.json');
const visual=await readJSON('visual-bindings.json');
const rebuild=await readJSON('rebuild-manifest.json');
const projections=await readJSON('projection-manifest.json');
const events=(await fs.readFile(path.join(specimen,'events.jsonl'),'utf8')).trim().split(/\n+/).filter(Boolean).map(JSON.parse);

const errors=[];
const assert=(cond,msg)=>{if(!cond)errors.push(msg)};
assert(world.stable_id,'WORLD_STABLE_ID_MISSING');
assert(visual.world_id===world.stable_id,`VISUAL_WORLD_DRIFT:${visual.world_id}!=${world.stable_id}`);
assert(rebuild.subject_id===world.stable_id,`REBUILD_SUBJECT_DRIFT:${rebuild.subject_id}!=${world.stable_id}`);
assert(projections.subject_id===world.stable_id,`PROJECTION_SUBJECT_DRIFT:${projections.subject_id}!=${world.stable_id}`);

const nativeSource=rebuild.external_native_source;
assert(nativeSource?.required===true,'EXTERNAL_NATIVE_SOURCE_NOT_REQUIRED');
assert(typeof nativeSource?.binding_ref==='string'&&/^XL-BINDING:[A-Z0-9-]+:[A-Z0-9-]+:R[0-9]+$/.test(nativeSource.binding_ref),'EXTERNAL_NATIVE_BINDING_REF_INVALID');
assert(nativeSource?.binding_ref?.includes(`:${world.stable_id}:`),`EXTERNAL_NATIVE_BINDING_SUBJECT_DRIFT:${nativeSource?.binding_ref??'MISSING'}`);
assert(nativeSource?.resolution_scope==='AUTHORIZED_PRIVATE_CARRIER','EXTERNAL_NATIVE_RESOLUTION_SCOPE_INVALID');
assert(nativeSource?.public_pointer_disclosed===false,'PRIVATE_NATIVE_POINTER_DISCLOSURE_VIOLATION');
assert(nativeSource?.receiver_readback==='UNPROVEN','EXTERNAL_NATIVE_RECEIVER_READBACK_MUST_REMAIN_UNPROVEN');
const nativeSourceFields=new Set(['binding_ref','required','resolution_scope','public_pointer_disclosed','receiver_readback']);
for(const key of Object.keys(nativeSource||{}))assert(nativeSourceFields.has(key),`EXTERNAL_NATIVE_SOURCE_FIELD_NOT_ALLOWED:${key}`);
assert((rebuild.holds||[]).includes('GLMODEL_EXTERNAL_NATIVE_SOURCE_RECEIVER_READBACK_UNPROVEN'),'EXTERNAL_NATIVE_SOURCE_HOLD_MISSING');
assert(rebuild.rebuild_status!=='PROVEN_BOUNDED','EXTERNAL_NATIVE_SOURCE_UNPROVEN_BUT_REBUILD_PROVEN');
for(const e of events)assert(e.subject_id===world.stable_id,`EVENT_SUBJECT_DRIFT:${e.event_id}`);

const relationTargets=new Set((world.relations||[]).map(r=>r.target));
const bindingIds=new Set();
for(const b of visual.bindings||[]){
  assert(!bindingIds.has(b.binding_id),`DUPLICATE_BINDING_ID:${b.binding_id}`);
  bindingIds.add(b.binding_id);
  assert(b.subject_id===world.stable_id,`VISUAL_SUBJECT_DRIFT:${b.binding_id}`);
  assert(b.geometry_authority===false,`VISUAL_GEOMETRY_AUTHORITY_VIOLATION:${b.binding_id}`);
  assert(relationTargets.has(b.view_id)||b.evidence_role!=='IDENTITY_ANCHOR',`UNBOUND_IDENTITY_ANCHOR:${b.view_id}`);
}

for(const r of world.relations||[]){
  if(r.type==='HAS_ANCHOR'){
    const has=(visual.bindings||[]).some(b=>b.view_id===r.target);
    if(!has)errors.push(`ANCHOR_WITHOUT_VISUAL_BINDING:${r.target}`);
  }
}

const profiles=new Map((projections.profiles||[]).map(p=>[p.profile,p]));
for(const required of ['HUMAN_ZH_TW','CANONICAL_MACHINE','VISUAL_SPATIAL','EXTERNAL_EN']){
  assert(profiles.has(required),`REPRESENTATION_PROFILE_MISSING:${required}`);
}
const external=profiles.get('EXTERNAL_EN');
if(external){
  assert(external.release_state!=='APPROVED'||Boolean(external.pointer), 'PUBLIC_APPROVED_WITHOUT_PROJECTION_POINTER');
  assert(external.release_state!=='APPROVED'||(external.semantic_invariants||[]).includes('PUBLIC_SAFE_NOT_PUBLIC_APPROVED'), 'PUBLIC_RELEASE_INVARIANT_MISSING');
}
const human=profiles.get('HUMAN_ZH_TW');
const machine=profiles.get('CANONICAL_MACHINE');
const spatial=profiles.get('VISUAL_SPATIAL');
assert(human?.classification!=='PUBLIC','INTERNAL_HUMAN_PROFILE_EXPOSED_PUBLIC');
assert(machine?.classification!=='PUBLIC','CANONICAL_MACHINE_PROFILE_EXPOSED_PUBLIC');
assert(spatial?.classification!=='PUBLIC','INTERNAL_VISUAL_PROFILE_EXPOSED_PUBLIC');

const result={
  specimen:world.stable_id,
  status:errors.length?'FAIL':'PASS_BOUNDED',
  relation_count:(world.relations||[]).length,
  visual_binding_count:(visual.bindings||[]).length,
  event_count:events.length,
  representation_profile_count:(projections.profiles||[]).length,
  public_release_state:external?.release_state??'MISSING',
  errors
};
console.log(JSON.stringify(result,null,2));
if(errors.length)process.exitCode=1;
