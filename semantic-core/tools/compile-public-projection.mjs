import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const manifest=JSON.parse(await fs.readFile(path.join(root,'specimens/gui-lu/projection-manifest.json'),'utf8'));
const external=(manifest.projections||[]).find(p=>p.profile==='EXTERNAL_EN');
if(!external){console.error('EXTERNAL_PROFILE_MISSING');process.exit(2)}
if(external.release_state!=='APPROVED_BOUNDED'){
  console.error(`PUBLIC_PROJECTION_BLOCKED:${external.release_state}`);
  process.exit(3);
}
if(!external.pointer){
  console.error('PUBLIC_PROJECTION_POINTER_MISSING');
  process.exit(4);
}
console.log(JSON.stringify({status:'PUBLIC_PROJECTION_ELIGIBLE',projection_id:external.projection_id,pointer:external.pointer},null,2));
