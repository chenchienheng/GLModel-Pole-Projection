import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'../carriers');
const read=async p=>JSON.parse(await fs.readFile(path.join(root,p),'utf8'));
const [cap,pointer,adapter,projection]=await Promise.all([
  read('carrier-capability-model.json'),
  read('pointer-resolution-model.json'),
  read('adapter-contract.json'),
  read('projection-envelope.json')
]);
const errors=[];
const assert=(c,m)=>{if(!c)errors.push(m)};
for(const inv of ['CARRIER_NOT_IDENTITY','CARRIER_NOT_AUTHORITY','PATH_NOT_STATE','HASH_NOT_SEMANTICS']) assert((cap.invariants||[]).includes(inv),`CARRIER_INVARIANT_MISSING:${inv}`);
assert((pointer.forbidden_resolution||[]).includes('FILENAME_ONLY'),'FILENAME_RESOLUTION_GUARD_MISSING');
assert((pointer.forbidden_resolution||[]).includes('LATEST_BY_DATE_ONLY'),'LATEST_RESOLUTION_GUARD_MISSING');
for(const x of ['CLAIM_NATIVE_OWNERSHIP','PROMOTE_PROJECTION_TO_TRUTH','INFER_RIGHTS_FROM_CONNECTIVITY']) assert((adapter.adapter_must_not||[]).includes(x),`ADAPTER_GUARD_MISSING:${x}`);
for(const x of ['PROJECTION_NOT_SECOND_TRUTH','PUBLIC_SAFE_NOT_PUBLIC_APPROVED']) assert((projection.invariants||[]).includes(x),`PROJECTION_GUARD_MISSING:${x}`);
const result={profile:'CARRIER_ABSTRACTION_VERIFY',status:errors.length?'FAIL':'PASS_BOUNDED',carrier_type_count:(cap.carrier_types||[]).length,errors};
console.log(JSON.stringify(result,null,2));
if(errors.length)process.exitCode=1;
