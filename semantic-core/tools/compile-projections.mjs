import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const specimen=path.join(root,'specimens/gui-lu');
const generated=path.join(root,'generated');
const readJSON=async name=>JSON.parse(await fs.readFile(path.join(specimen,name),'utf8'));

const world=await readJSON('world.json');
const visual=await readJSON('visual-bindings.json');
const rebuild=await readJSON('rebuild-manifest.json');
const projections=await readJSON('projection-manifest.json');
const events=(await fs.readFile(path.join(specimen,'events.jsonl'),'utf8')).trim().split(/\n+/).filter(Boolean).map(JSON.parse);

const primaryOrgans=(world.relations||[]).filter(r=>r.type==='HAS_PRIMARY_ORGAN').map(r=>({id:r.target,state:r.state}));
const anchors=(world.relations||[]).filter(r=>r.type==='HAS_ANCHOR').map(r=>{
  const binding=(visual.bindings||[]).find(b=>b.view_id===r.target);
  return {
    id:r.target,
    state:r.state,
    binding_id:binding?.binding_id??null,
    evidence_role:binding?.evidence_role??null,
    artifact_pointer:binding?.artifact_pointer??null,
    revision:binding?.revision??null,
    drift_checks:binding?.drift_checks??[]
  };
});
const external=(projections.profiles||[]).find(p=>p.profile==='EXTERNAL_EN');

const view={
  generated_from:{
    world:'specimens/gui-lu/world.json',
    visual:'specimens/gui-lu/visual-bindings.json',
    rebuild:'specimens/gui-lu/rebuild-manifest.json',
    events:'specimens/gui-lu/events.jsonl',
    projections:'specimens/gui-lu/projection-manifest.json'
  },
  identity:{stable_id:world.stable_id,object_type:world.object_type,native_holder:world.native_home?.holder},
  state:world.state,
  primary_organs:primaryOrgans,
  anchors,
  holds:rebuild.holds||[],
  rebuild_status:rebuild.rebuild_status,
  recent_events:events.slice(-10).map(e=>({event_id:e.event_id,event_type:e.event_type,state_after:e.state_effect?.after??null,claim_ceiling:e.claim_ceiling??null,next_gate:e.next_gate??null})),
  release:{external_state:external?.release_state??'MISSING',external_pointer:external?.pointer??null},
  claim_ceiling:rebuild.claim_ceiling
};

await fs.mkdir(generated,{recursive:true});
await fs.writeFile(path.join(generated,'gui-lu.semantic-view.json'),JSON.stringify(view,null,2)+'\n');
console.log(`compiled ${world.stable_id}: ${anchors.length} anchors, ${events.length} events`);
