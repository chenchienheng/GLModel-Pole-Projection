import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'../dcp');
const read=async p=>JSON.parse(await fs.readFile(path.join(root,p),'utf8'));

const index=await read('index.json');
const files=Object.entries(index.current_surfaces||{});
const instances=Object.entries(index.instances||{});
const errors=[];
const loaded={};
const loadedInstances={};
for(const [key,p] of files){
  try{ loaded[key]=await read(p); }
  catch(e){ errors.push(`MISSING_SURFACE:${key}:${p}`); }
}
for(const [key,p] of instances){
  try{ loadedInstances[key]=await read(p); }
  catch(e){ errors.push(`MISSING_INSTANCE:${key}:${p}`); }
}
const assert=(c,m)=>{if(!c)errors.push(m)};
assert(index.native_source_root==='NOT_THIS_REPOSITORY','DCP_REPO_MUST_NOT_BE_NATIVE_SOURCE_ROOT');
assert(index.materiality_rule==='AFFECTED_EDGE_ONLY','MATERIALITY_RULE_DRIFT');
assert(Object.keys(loaded).length===8,'EXPECTED_EIGHT_DCP_CURRENT_SURFACES');
assert(Object.keys(loadedInstances).length===2,'EXPECTED_TWO_DCP_ACTIVE_INSTANCES');
if(loaded.state_envelope){
  const forbidden=new Set(loaded.state_envelope.forbidden_inferences||[]);
  for(const x of ['READABLE_IMPLIES_COPYABLE','USER_LEARNED_IMPLIES_CORE_ADMITTED','ACK_IMPLIES_RECONCILED']) assert(forbidden.has(x),`STATE_INFERENCE_GUARD_MISSING:${x}`);
}
if(loaded.return_closure){
  const inv=new Set(loaded.return_closure.invariants||[]);
  assert(inv.has('RETURN_NOT_RECONCILIATION'),'RETURN_RECONCILIATION_GUARD_MISSING');
}
if(loaded.authority_gate){
  assert(loaded.authority_gate.evaluation?.orthogonal===true,'AUTHORITY_NOT_ORTHOGONAL');
  assert(loaded.authority_gate.evaluation?.carrier_authority_equivalence===false,'CARRIER_AUTHORITY_COLLAPSE');
}
if(loaded.growth_memory) assert(loaded.growth_memory.anti_pattern==='DOCUMENT_COUNT_IS_NOT_GROWTH','GROWTH_ANTIPATTERN_GUARD_MISSING');
if(loaded.rebuild_reentry){
  const inv=new Set(loaded.rebuild_reentry.invariants||[]);
  assert(inv.has('LATEST_NOT_CURRENT'),'LATEST_CURRENT_GUARD_MISSING');
}
if(loaded.context_assembly){
  assert((loaded.context_assembly.default_exclusions||[]).includes('HISTORICAL'),'HISTORICAL_DEFAULT_EXCLUSION_MISSING');
  assert((loaded.context_assembly.explicit_reentry_purposes||[]).includes('REBUILD'),'REBUILD_REENTRY_PURPOSE_MISSING');
}
if(loaded.reasoning_contamination_gates){
  const gates=new Set((loaded.reasoning_contamination_gates.gates||[]).map(x=>x.gate_id));
  for(const g of ['GATE-HISTORICAL-REENTRY','GATE-SURFACE-DRIFT','GATE-CARRIER-AUTHORITY-CONFLATION','GATE-LEARNING-INGESTION-CONFLATION','GATE-RETURN-CLOSURE-CONFLATION']) assert(gates.has(g),`CONTAMINATION_GATE_MISSING:${g}`);
}
if(loadedInstances.active_state){
  assert(loadedInstances.active_state.runtime===false,'ACTIVE_STATE_RUNTIME_OVERCLAIM');
  assert(loadedInstances.active_state.state?.promotion==='NONE','ACTIVE_STATE_PROMOTION_OVERCLAIM');
  assert(Array.isArray(loadedInstances.active_state.pending_returns),'PENDING_RETURN_INSTANCE_MISSING');
}
if(loadedInstances.return_ledger){
  const bad=(loadedInstances.return_ledger.entries||[]).filter(x=>x.state==='CLOSED_WITH_STATE_CHANGE' && !x.reconciliation);
  assert(bad.length===0,'CLOSED_RETURN_WITHOUT_RECONCILIATION');
}
const result={profile:index.profile,status:errors.length?'FAIL':'PASS_BOUNDED',surface_count:Object.keys(loaded).length,instance_count:Object.keys(loadedInstances).length,errors};
console.log(JSON.stringify(result,null,2));
if(errors.length)process.exitCode=1;
