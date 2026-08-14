import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const specimen=path.resolve(here,'../specimens/gui-lu');
const readJSON=async name=>JSON.parse(await fs.readFile(path.join(specimen,name),'utf8'));

const world=await readJSON('world.json');
const visual=await readJSON('visual-bindings.json');
const rebuild=await readJSON('rebuild-manifest.json');
const events=(await fs.readFile(path.join(specimen,'events.jsonl'),'utf8')).trim().split(/\n+/).filter(Boolean).map(JSON.parse);

const errors=[];
const assert=(cond,msg)=>{if(!cond)errors.push(msg)};
assert(world.stable_id,'WORLD_STABLE_ID_MISSING');
assert(visual.world_id===world.stable_id,`VISUAL_WORLD_DRIFT:${visual.world_id}!=${world.stable_id}`);
assert(rebuild.subject_id===world.stable_id,`REBUILD_SUBJECT_DRIFT:${rebuild.subject_id}!=${world.stable_id}`);
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

const result={
  specimen:world.stable_id,
  status:errors.length?'FAIL':'PASS_BOUNDED',
  relation_count:(world.relations||[]).length,
  visual_binding_count:(visual.bindings||[]).length,
  event_count:events.length,
  errors
};
console.log(JSON.stringify(result,null,2));
if(errors.length)process.exitCode=1;
