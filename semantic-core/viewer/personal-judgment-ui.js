import {assessRecord,buildSourceItems,createRecord,exportBatch,importBatch,sameItemIdentity} from './personal-judgment.mjs';

const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let items=[];
let records=[];
let dirty=false;
const backedUpIds=new Set();

function option(value,label){return `<option value="${esc(value)}">${esc(label)}</option>`}
function setMessage(message,error=false){$('judgment-message').textContent=message;$('judgment-message').classList.toggle('warning',error)}
function selectedItem(){return items[Number($('judgment-source').value)]}
function renderBinding(){
  const item=selectedItem();
  $('judgment-binding').textContent=item
    ? `${item.binding.source_path} · ${item.binding.source_revision} · ${item.binding.item_id} · ${item.binding.item_sha256}`
    : '沒有可判讀的具名未閉項目';
  renderDerivedFrom();
}
function renderDerivedFrom(){
  const chosen=$('judgment-derived-from').value;
  const item=selectedItem();
  const eligible=item?records.filter(record=>sameItemIdentity(record.binding,item.binding)):[];
  $('judgment-derived-from').innerHTML=option('','不是重驗判讀')+eligible.map(record=>option(record.judgment_id,record.judgment_id)).join('');
  $('judgment-derived-from').value=eligible.some(record=>record.judgment_id===chosen)?chosen:'';
}
function renderRecords(){
  $('judgment-records').innerHTML=records.map(record=>{
    const assessment=assessRecord(record,items);
    return `<div class="row"><strong>${esc(record.judgment_id)} · ${esc(assessment.state)}</strong><small>${esc(record.binding.item_id)} · ${esc(record.decision)}<br>${esc(record.reason)}<br>下一步：${esc(record.next_step)}${assessment.reason?`<br>${esc(assessment.reason)}`:''}</small></div>`;
  }).join('')||'<div class="row"><strong>尚無個人判讀</strong><small>頁面不會背景保存；新增後請明確匯出。</small></div>';
  renderDerivedFrom();
}
function markDirty(value){dirty=value;$('judgment-unsaved').hidden=!dirty}

async function loadJudgmentSources(){
  const [rebuildResponse,activeResponse]=await Promise.all([
    fetch('../specimens/gui-lu/rebuild-manifest.json'),
    fetch('../dcp/instances/active-state.json'),
  ]);
  if(!rebuildResponse.ok)throw new Error(`rebuild-manifest.json: ${rebuildResponse.status}`);
  if(!activeResponse.ok)throw new Error(`active-state.json: ${activeResponse.status}`);
  items=await buildSourceItems(await rebuildResponse.json(),await activeResponse.json());
  $('judgment-source').innerHTML=items.map((item,index)=>option(index,`${item.kind} · ${item.label}`)).join('');
  renderBinding();
  renderRecords();
}

function addRecord(event){
  event.preventDefault();
  const item=selectedItem();
  if(!item){setMessage('無可用來源項目，未新增判讀。',true);return}
  try{
    const now=new Date().toISOString();
    const record=createRecord({
      judgment_id:`JUDGMENT-${now.replace(/[-:.TZ]/g,'')}-${crypto.randomUUID().slice(0,8)}`,
      binding:item.binding,
      decision:$('judgment-decision').value,
      reason:$('judgment-reason').value,
      next_step:$('judgment-next').value,
      created_at:now,
      derived_from:$('judgment-derived-from').value||null,
    });
    records=importBatch(records,exportBatch([record],now)).records;
    event.target.reset();
    renderBinding();
    renderRecords();
    markDirty(true);
    setMessage('個人判讀已加入記憶體；請匯出後選取下載檔匯入確認備份。');
  }catch(error){setMessage(`未新增：${error.message}`,true)}
}

function download(){
  try{
    const blob=new Blob([exportBatch(records)],{type:'application/json'});
    const link=document.createElement('a');
    link.href=URL.createObjectURL(blob);
    link.download='xuanling-personal-judgments.json';
    link.click();
    setTimeout(()=>URL.revokeObjectURL(link.href),60_000);
    setMessage(`已發起下載 ${records.length} 筆；請選取下載檔匯入確認備份。尚未確認的判讀仍保留離開警告，來源 Hold／Return 不變。`);
  }catch(error){setMessage(`匯出失敗：${error.message}`,true)}
}

async function upload(event){
  const file=event.target.files?.[0];
  if(!file)return;
  try{
    const text=await file.text();
    const backup=importBatch([],text);
    const result=importBatch(records,text);
    records=result.records;
    for(const record of backup.records)backedUpIds.add(record.judgment_id);
    renderRecords();
    markDirty(records.some(record=>!backedUpIds.has(record.judgment_id)));
    setMessage(`整批匯入成立：新增 ${result.imported}，相同略過 ${result.duplicates}。${dirty?'仍有判讀不在已讀回的備份內，請再匯出完整備份。':'目前判讀均有已讀回的備份。'}`);
  }catch(error){setMessage(`整批拒收，既有判讀未變：${error.message}`,true)}
  finally{event.target.value=''}
}

function main(){
  $('judgment-source').addEventListener('change',renderBinding);
  $('judgment-form').addEventListener('submit',addRecord);
  $('judgment-export').addEventListener('click',download);
  $('judgment-import').addEventListener('change',upload);
  window.addEventListener('beforeunload',event=>{if(dirty){event.preventDefault();event.returnValue=''}});
  loadJudgmentSources().catch(error=>setMessage(`判讀來源載入失敗：${error.message}`,true));
}
main();
