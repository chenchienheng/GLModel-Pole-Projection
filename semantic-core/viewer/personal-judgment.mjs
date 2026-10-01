const RECORD_SCHEMA='xuanling-personal-judgment/v1';
const BATCH_SCHEMA='xuanling-personal-judgment-batch/v1';
const HEX64=/^[0-9a-f]{64}$/;
const ID=/^[A-Za-z0-9][A-Za-z0-9._:/-]{0,199}$/;

function fail(code){throw new Error(code)}
function plainObject(value){return value!==null&&typeof value==='object'&&!Array.isArray(value)}
function exactKeys(value,expected,code){
  if(!plainObject(value))fail(code);
  const actual=Object.keys(value).sort();
  const wanted=[...expected].sort();
  if(actual.length!==wanted.length||actual.some((key,index)=>key!==wanted[index]))fail(code);
}
function nonEmpty(value,code){if(typeof value!=='string'||!value.trim())fail(code);return value}
function stable(value){
  if(Array.isArray(value))return value.map(stable);
  if(plainObject(value))return Object.fromEntries(Object.keys(value).sort().map(key=>[key,stable(value[key])]));
  return value;
}
export function canonicalJSON(value){return JSON.stringify(stable(value))}

export async function sha256(value){
  const bytes=new TextEncoder().encode(typeof value==='string'?value:canonicalJSON(value));
  const digest=await globalThis.crypto.subtle.digest('SHA-256',bytes);
  return [...new Uint8Array(digest)].map(byte=>byte.toString(16).padStart(2,'0')).join('');
}

function sourceRevision(document,path){
  const value=document.version??document.as_of??document.manifest_id;
  return nonEmpty(String(value??''),`SOURCE_REVISION_MISSING:${path}`);
}

async function binding(path,document,subjectId,itemId,item){
  return {
    source_path:path,
    source_revision:sourceRevision(document,path),
    source_sha256:await sha256(document),
    subject_id:nonEmpty(String(subjectId??''),`SUBJECT_ID_MISSING:${itemId}`),
    item_id:nonEmpty(String(itemId??''),'ITEM_ID_MISSING'),
    item_sha256:await sha256(item),
  };
}

export async function buildSourceItems(rebuild,active){
  if(!Array.isArray(rebuild?.holds))fail('SOURCE_COLLECTION_INVALID:rebuild-manifest.json.holds');
  if(!Array.isArray(active?.active_holds))fail('SOURCE_COLLECTION_INVALID:active-state.json.active_holds');
  if(!Array.isArray(active?.active_conflicts))fail('SOURCE_COLLECTION_INVALID:active-state.json.active_conflicts');
  if(!Array.isArray(active?.pending_returns))fail('SOURCE_COLLECTION_INVALID:active-state.json.pending_returns');
  const output=[];
  for(const hold of rebuild.holds){
    nonEmpty(hold,'SOURCE_ITEM_INVALID:rebuild-manifest.json.holds');
    output.push({kind:'WORLD_HOLD',label:hold,binding:await binding(
      '../specimens/gui-lu/rebuild-manifest.json',rebuild,rebuild.subject_id,hold,hold
    )});
  }
  for(const hold of active.active_holds){
    if(!plainObject(hold))fail('SOURCE_ITEM_INVALID:active-state.json.active_holds');
    output.push({kind:'DCP_HOLD',label:`${hold.hold_id} · ${hold.reason??''}`,binding:await binding(
      '../dcp/instances/active-state.json',active,hold.subject,hold.hold_id,hold
    )});
  }
  for(const conflict of active.active_conflicts){
    if(!plainObject(conflict))fail('SOURCE_ITEM_INVALID:active-state.json.active_conflicts');
    const itemId=conflict.conflict_id;
    output.push({kind:'DCP_CONFLICT',label:`${itemId} · ${conflict.reason??''}`,binding:await binding(
      '../dcp/instances/active-state.json',active,conflict.subject??active.profile,itemId,conflict
    )});
  }
  for(const pending of active.pending_returns){
    if(!plainObject(pending))fail('SOURCE_ITEM_INVALID:active-state.json.pending_returns');
    output.push({kind:'PENDING_RETURN',label:`${pending.return_id} · ${pending.from??''} → ${pending.to??''}`,binding:await binding(
      '../dcp/instances/active-state.json',active,pending.subject??pending.return_id,pending.return_id,pending
    )});
  }
  return output;
}

function validateBinding(value){
  exactKeys(value,['source_path','source_revision','source_sha256','subject_id','item_id','item_sha256'],'BINDING_FIELDS_INVALID');
  for(const key of ['source_path','source_revision','subject_id','item_id'])nonEmpty(value[key],`BINDING_${key.toUpperCase()}_INVALID`);
  for(const key of ['source_sha256','item_sha256'])if(!HEX64.test(value[key]))fail(`BINDING_${key.toUpperCase()}_INVALID`);
  return value;
}

export function validateRecord(value){
  exactKeys(value,['schema','judgment_id','binding','decision','reason','next_step','created_at','derived_from'],'RECORD_FIELDS_INVALID');
  if(value.schema!==RECORD_SCHEMA)fail('RECORD_SCHEMA_UNSUPPORTED');
  if(typeof value.judgment_id!=='string'||!ID.test(value.judgment_id))fail('JUDGMENT_ID_INVALID');
  validateBinding(value.binding);
  for(const key of ['decision','reason','next_step'])nonEmpty(value[key],`RECORD_${key.toUpperCase()}_INVALID`);
  if(typeof value.created_at!=='string'||Number.isNaN(Date.parse(value.created_at)))fail('RECORD_CREATED_AT_INVALID');
  if(value.derived_from!==null&&(typeof value.derived_from!=='string'||!ID.test(value.derived_from)))fail('RECORD_DERIVED_FROM_INVALID');
  if(value.derived_from===value.judgment_id)fail('RECORD_SELF_DERIVATION');
  return value;
}

export function createRecord({judgment_id,binding,decision,reason,next_step,created_at,derived_from=null}){
  return validateRecord({schema:RECORD_SCHEMA,judgment_id,binding:{...binding},decision,reason,next_step,created_at,derived_from});
}

export function sameItemIdentity(first,second){
  return ['source_path','subject_id','item_id'].every(key=>first[key]===second[key]);
}

function validateLineage(records){
  const byId=new Map(records.map(record=>[record.judgment_id,record]));
  for(const record of records){
    if(record.derived_from===null)continue;
    const parent=byId.get(record.derived_from);
    if(!parent)fail(`DERIVED_FROM_MISSING:${record.judgment_id}`);
    if(!sameItemIdentity(parent.binding,record.binding))fail(`DERIVED_FROM_IDENTITY_MISMATCH:${record.judgment_id}`);
  }
  const complete=new Set();
  for(const record of records){
    const visiting=new Set();let current=record;
    while(current&&!complete.has(current.judgment_id)){
      if(visiting.has(current.judgment_id))fail(`DERIVED_FROM_CYCLE:${current.judgment_id}`);
      visiting.add(current.judgment_id);
      current=current.derived_from===null?null:byId.get(current.derived_from);
    }
    for(const id of visiting)complete.add(id);
  }
}

function validateBatch(value){
  exactKeys(value,['schema','exported_at','records'],'BATCH_FIELDS_INVALID');
  if(value.schema!==BATCH_SCHEMA)fail('BATCH_SCHEMA_UNSUPPORTED');
  if(typeof value.exported_at!=='string'||Number.isNaN(Date.parse(value.exported_at)))fail('BATCH_EXPORTED_AT_INVALID');
  if(!Array.isArray(value.records))fail('BATCH_RECORDS_INVALID');
  value.records.forEach(validateRecord);
  return value;
}

export function exportBatch(records,exportedAt=new Date().toISOString()){
  const value={schema:BATCH_SCHEMA,exported_at:exportedAt,records:records.map(record=>structuredClone(validateRecord(record)))};
  return `${JSON.stringify(value,null,2)}\n`;
}

export function importBatch(existing,text){
  existing.forEach(validateRecord);
  let parsed;
  try{parsed=JSON.parse(text)}catch{fail('BATCH_JSON_INVALID')}
  const batch=validateBatch(parsed);
  const combined=existing.map(record=>structuredClone(record));
  const byId=new Map(combined.map(record=>[record.judgment_id,canonicalJSON(record)]));
  let imported=0,duplicates=0;
  for(const record of batch.records){
    const serialized=canonicalJSON(record);
    if(byId.has(record.judgment_id)){
      if(byId.get(record.judgment_id)!==serialized)fail(`JUDGMENT_ID_CONTENT_CONFLICT:${record.judgment_id}`);
      duplicates++;
      continue;
    }
    byId.set(record.judgment_id,serialized);
    combined.push(structuredClone(record));
    imported++;
  }
  validateLineage(combined);
  return {records:combined,imported,duplicates};
}

export function assessRecord(record,currentItems){
  validateRecord(record);
  const exact=currentItems.find(item=>canonicalJSON(item.binding)===canonicalJSON(record.binding));
  if(exact)return {state:'CURRENT_SOURCE_MATCH',reason:null,item:exact};
  const identity=currentItems.find(item=>sameItemIdentity(item.binding,record.binding));
  return {
    state:'HISTORICAL_PENDING_REVALIDATION',
    reason:identity?'SOURCE_VERSION_OR_CONTENT_CHANGED':'SOURCE_ITEM_MISSING',
    item:identity??null,
  };
}

export const schemas={record:RECORD_SCHEMA,batch:BATCH_SCHEMA};
