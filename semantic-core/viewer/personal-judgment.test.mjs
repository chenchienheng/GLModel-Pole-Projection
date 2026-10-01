import assert from 'node:assert/strict';
import test from 'node:test';
import {assessRecord,buildSourceItems,canonicalJSON,createRecord,exportBatch,importBatch,sameItemIdentity,sha256} from './personal-judgment.mjs';

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

// UI event wiring is exercised with controlled DOM/File/URL doubles, not a browser.
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

async function judgmentUI(sourceRebuild=rebuild,sourceActive=active){
  const html=readFileSync(new URL('./index.html',import.meta.url),'utf8');
  const elements=new Map([...html.matchAll(/id="([^"]+)"/g)].map(match=>[match[1],{
    value:'',textContent:'',innerHTML:'',hidden:true,files:[],listeners:{},
    classList:{toggle(){}},addEventListener(type,fn){this.listeners[type]=fn},
  }]));
  const get=id=>{assert.ok(elements.has(id),`Missing actual HTML control: ${id}`);return elements.get(id)};
  const downloads=[];
  const windowListeners={};
  get('judgment-source').value='0';
  get('judgment-form').reset=()=>{
    for(const id of ['judgment-decision','judgment-reason','judgment-next','judgment-derived-from'])get(id).value='';
    get('judgment-source').value='0';
  };
  const context=vm.createContext({
    logic:{assessRecord,buildSourceItems,createRecord,exportBatch,importBatch,sameItemIdentity},setTimeout:()=>0,
    crypto:globalThis.crypto,Blob,URL:{createObjectURL(blob){downloads.push(blob);return 'blob:controlled-download'},revokeObjectURL(){}},
    document:{getElementById:get,createElement(tag){assert.equal(tag,'a');return {click(){}}}},
    window:{addEventListener(type,fn){windowListeners[type]=fn}},
    fetch:async path=>({ok:true,status:200,json:async()=>structuredClone(path.includes('rebuild-manifest')?sourceRebuild:sourceActive)}),
  });
  const code=readFileSync(new URL('./personal-judgment-ui.js',import.meta.url),'utf8').replace(/^import[^\n]+\n/,'const {assessRecord,buildSourceItems,createRecord,exportBatch,importBatch,sameItemIdentity}=logic;\n');
  vm.runInContext(code,context,{filename:'personal-judgment-ui.js'});
  for(let turns=0;!get('judgment-records').innerHTML;turns++){
    assert.ok(turns<1000,'Source loading did not settle');
    await new Promise(resolve=>setImmediate(resolve));
  }
  return {
    get,
    add(decision='維持 Hold',derivedFrom=''){
      get('judgment-decision').value=decision;get('judgment-reason').value='證據仍不足';get('judgment-next').value='取得具名證據';get('judgment-derived-from').value=derivedFrom;
      get('judgment-form').listeners.submit({preventDefault(){},target:get('judgment-form')});
    },
    importFile(file){const target=get('judgment-import');target.files=[file];return target.listeners.change({target})},
    async exportText(){get('judgment-export').listeners.click();return downloads.at(-1).text()},
    warnsOnExit(){let warned=false;windowListeners.beforeunload({preventDefault(){warned=true}});return warned},
  };
}
const fileOf=text=>({text:async()=>text});

test('UI download request without readback retains the exit warning',async()=>{
  const ui=await judgmentUI();ui.add();
  await ui.exportText(); // The controlled anchor never writes a file (cancelled/blocked download).
  assert.equal(ui.get('judgment-unsaved').hidden,false);
  assert.equal(ui.warnsOnExit(),true);
  assert.match(ui.get('judgment-message').textContent,/發起下載/);
});

test('UI delayed import preserves a judgment added during File.text and its warning',async()=>{
  const ui=await judgmentUI();
  let release;
  const pending=ui.importFile({text:()=>new Promise(resolve=>{release=resolve})});
  ui.add('讀檔期間新增');
  release(exportBatch([]));await pending;
  const result=JSON.parse(await ui.exportText());
  assert.equal(result.records.length,1);
  assert.equal(result.records[0].decision,'讀檔期間新增');
  assert.equal(ui.warnsOnExit(),true);
});

test('UI backup readback covers only records actually present in the selected file',async()=>{
  const ui=await judgmentUI();ui.add('第一筆');
  const first=await ui.exportText();
  await ui.importFile(fileOf(first));
  assert.equal(ui.warnsOnExit(),false);
  ui.add('第二筆');
  await ui.importFile(fileOf(first));
  assert.equal(ui.warnsOnExit(),true);
  const full=await ui.exportText();await ui.importFile(fileOf(full));
  assert.equal(ui.warnsOnExit(),false);
  assert.equal(JSON.parse(full).records.length,2);
});

test('UI late backup readback keeps newer records after export and during import',async()=>{
  const ui=await judgmentUI();ui.add('備份內');
  const saved=await ui.exportText();let release;
  const pending=ui.importFile({text:()=>new Promise(resolve=>{release=resolve})});
  ui.add('備份外');await ui.exportText();
  release(saved);await pending;
  assert.equal(ui.warnsOnExit(),true);
  assert.deepEqual(JSON.parse(await ui.exportText()).records.map(record=>record.decision),['備份內','備份外']);
});

test('UI export reopen import version change reconfirm and atomic reject preserve the full process',async()=>{
  const sourceRebuild=JSON.parse(readFileSync(new URL('../specimens/gui-lu/rebuild-manifest.json',import.meta.url),'utf8'));
  const sourceActive=JSON.parse(readFileSync(new URL('../dcp/instances/active-state.json',import.meta.url),'utf8'));
  const sourcesBefore=canonicalJSON({sourceRebuild,sourceActive});
  const original=await judgmentUI(sourceRebuild,sourceActive);original.add();
  const saved=await original.exportText();
  const reopened=await judgmentUI(sourceRebuild,sourceActive);await reopened.importFile(fileOf(saved));
  assert.deepEqual(JSON.parse(await reopened.exportText()).records,JSON.parse(saved).records);
  assert.match(reopened.get('judgment-records').innerHTML,/CURRENT_SOURCE_MATCH/);
  const nextRevision=`${sourceRebuild.manifest_id}-EXPERIMENT`;
  const changed=await judgmentUI({...sourceRebuild,manifest_id:nextRevision},sourceActive);
  await changed.importFile(fileOf(saved));
  assert.match(changed.get('judgment-records').innerHTML,/HISTORICAL_PENDING_REVALIDATION/);
  const parent=JSON.parse(saved).records[0].judgment_id;
  changed.add('換版後重新判讀',parent);
  const beforeReject=JSON.parse(await changed.exportText()).records;
  assert.equal(beforeReject.length,2);assert.equal(beforeReject[1].derived_from,parent);
  assert.equal(beforeReject[1].binding.source_revision,nextRevision);
  const bad=JSON.parse(exportBatch(beforeReject));bad.records.push({...beforeReject[0],judgment_id:'BAD',decision:''});
  await changed.importFile(fileOf(JSON.stringify(bad)));
  assert.match(changed.get('judgment-message').textContent,/整批拒收/);
  assert.deepEqual(JSON.parse(await changed.exportText()).records,beforeReject);
  assert.equal(canonicalJSON({sourceRebuild,sourceActive}),sourcesBefore);
});

test('lineage missing parent rejects without changing existing records',async()=>{
  const {record}=await fixture();const existing=[record];
  const child=createRecord({...record,judgment_id:'CHILD',derived_from:'ABSENT'});
  assert.throws(()=>importBatch(existing,exportBatch([child])),/DERIVED_FROM_MISSING/);
  assert.deepEqual(existing,[record]);
});
test('lineage reconfirmation must retain the same source item and subject identity',async()=>{
  const {record}=await fixture();
  for(const binding of [{...record.binding,item_id:'OTHER'},{...record.binding,subject_id:'OTHER'}]){
    const child=createRecord({...record,judgment_id:'CHILD',binding,derived_from:record.judgment_id});
    assert.throws(()=>importBatch([record],exportBatch([child])),/DERIVED_FROM_IDENTITY_MISMATCH/);
  }
});
test('lineage cycles reject atomically',async()=>{
  const {record}=await fixture();
  const first=createRecord({...record,judgment_id:'A',derived_from:'B'});
  const second=createRecord({...record,judgment_id:'B',derived_from:'A'});
  assert.throws(()=>importBatch([],exportBatch([first,second])),/DERIVED_FROM_CYCLE/);
});
test('judgment and parent IDs require strings rather than coercion',async()=>{
  const {record}=await fixture();
  assert.throws(()=>createRecord({...record,judgment_id:123}),/JUDGMENT_ID_INVALID/);
  assert.throws(()=>createRecord({...record,derived_from:123}),/RECORD_DERIVED_FROM_INVALID/);
});
