import assert from 'node:assert/strict';
import test from 'node:test';
import {assessRecord,buildSourceItems,canonicalJSON,createRecord,exportBatch,importBatch,sha256} from './personal-judgment.mjs';

const rebuild={manifest_id:'RB-1',subject_id:'WORLD-1',holds:['HOLD-1']};
const active={version:'1',profile:'ACTIVE',active_holds:[{hold_id:'HOLD-2',subject:'WORLD-2',reason:'pending'}],active_conflicts:[],pending_returns:[{return_id:'RET-1',from:'A',to:'B',closure:'RETURN_PENDING'}]};

async function fixture(){
  const items=await buildSourceItems(rebuild,active);
  return {items,record:createRecord({
    judgment_id:'JUDGMENT-1',binding:items[0].binding,decision:'維持 Hold',reason:'證據不足',next_step:'補證據',created_at:'2026-10-01T00:00:00.000Z',derived_from:null,
  })};
}

test('source items bind revision, source fingerprint, subject and item fingerprint',async()=>{
  const {items}=await fixture();
  assert.equal(items.length,3);
  assert.equal(items[0].binding.source_revision,'RB-1');
  assert.equal(items[0].binding.subject_id,'WORLD-1');
  assert.equal(items[0].binding.item_id,'HOLD-1');
  assert.match(items[0].binding.source_sha256,/^[0-9a-f]{64}$/);
  assert.match(items[0].binding.item_sha256,/^[0-9a-f]{64}$/);
});

test('canonical fingerprints are insensitive to object key insertion order',async()=>{
  assert.equal(canonicalJSON({b:2,a:{d:4,c:3}}),canonicalJSON({a:{c:3,d:4},b:2}));
  assert.equal(await sha256({b:2,a:1}),await sha256({a:1,b:2}));
});

test('explicit export and import recover every record field exactly',async()=>{
  const {record}=await fixture();
  const exported=exportBatch([record],'2026-10-01T00:01:00.000Z');
  const result=importBatch([],exported);
  assert.deepEqual(result.records,[record]);
  assert.equal(result.imported,1);
});

test('exact duplicate does not create a second record',async()=>{
  const {record}=await fixture();
  const result=importBatch([record],exportBatch([record]));
  assert.deepEqual(result.records,[record]);
  assert.equal(result.duplicates,1);
});

test('same judgment ID with different content rejects the whole batch',async()=>{
  const {record}=await fixture();
  const changed={...record,decision:'解除 Hold'};
  const existing=[structuredClone(record)];
  assert.throws(()=>importBatch(existing,exportBatch([changed])),/JUDGMENT_ID_CONTENT_CONFLICT/);
  assert.deepEqual(existing,[record]);
});

for(const mutate of [
  batch=>{batch.extra=true},
  batch=>{batch.records[0].extra=true},
  batch=>{delete batch.records[0].binding.item_sha256},
  batch=>{batch.records.push({...batch.records[0],judgment_id:'JUDGMENT-2',decision:''})},
]){
  test('unknown, incomplete or invalid records reject the whole batch',async()=>{
    const {record}=await fixture();
    const batch=JSON.parse(exportBatch([record]));
    mutate(batch);
    const existing=[structuredClone(record)];
    assert.throws(()=>importBatch(existing,JSON.stringify(batch)));
    assert.deepEqual(existing,[record]);
  });
}

test('source version or content change preserves record as historical pending revalidation',async()=>{
  const {record}=await fixture();
  const current=await buildSourceItems({...rebuild,manifest_id:'RB-2'},active);
  assert.deepEqual(assessRecord(record,current),{
    state:'HISTORICAL_PENDING_REVALIDATION',reason:'SOURCE_VERSION_OR_CONTENT_CHANGED',item:current[0],
  });
});

test('missing item preserves record as historical pending revalidation',async()=>{
  const {record}=await fixture();
  const current=await buildSourceItems({...rebuild,holds:[]},active);
  assert.deepEqual(assessRecord(record,current),{
    state:'HISTORICAL_PENDING_REVALIDATION',reason:'SOURCE_ITEM_MISSING',item:null,
  });
});

test('reconfirmation creates a new record with explicit derived_from',async()=>{
  const {items,record}=await fixture();
  const next=createRecord({judgment_id:'JUDGMENT-2',binding:items[0].binding,decision:'續留',reason:'仍待證據',next_step:'再檢查',created_at:'2026-10-02T00:00:00.000Z',derived_from:record.judgment_id});
  assert.equal(next.derived_from,'JUDGMENT-1');
  assert.throws(()=>createRecord({...next,judgment_id:'JUDGMENT-1',derived_from:'JUDGMENT-1'}),/RECORD_SELF_DERIVATION/);
});
