const worldBase='../specimens/gui-lu/';
const dcpBase='../dcp/';
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

async function getResponse(url){
  let response;
  try{response=await fetch(url)}
  catch{throw new Error(`${url}: 請求失敗`)}
  if(!response.ok)throw new Error(`${url}: ${response.status}`);
  return response;
}
async function getJSON(url){
  const response=await getResponse(url);
  try{return await response.json()}
  catch{throw new Error(`${url}: JSON 讀取或解析失敗`)}
}
async function getText(url){
  const response=await getResponse(url);
  try{return await response.text()}
  catch{throw new Error(`${url}: 文字讀取失敗`)}
}
async function loadWorldJSON(name){return getJSON(worldBase+name)}
async function loadWorldText(name){return getText(worldBase+name)}
async function loadEvents(){
  const url=worldBase+'events.jsonl';
  const text=await getText(url);
  return text.split('\n').flatMap((line,index)=>{
    if(!line.trim())return [];
    try{return [JSON.parse(line)]}
    catch{throw new Error(`${url}:${index+1}: JSON 解析失敗`)}
  });
}

// Only an explicit array can support a source-local empty-list claim.
// This is a viewer input check, not full schema or semantic validation.
function requiredCollection(record,key,source){
  const value=record?.[key];
  if(!Array.isArray(value))throw new Error(`${source}: ${key} 必須提供陣列；缺值或格式錯誤不代表沒有資料`);
  return value;
}

function metric(label,value){return `<div class="metric"><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`}
function row(title,detail=''){return `<div class="row"><strong>${esc(title)}</strong>${detail?`<small>${esc(detail)}</small>`:''}</div>`}
function basicMarkdown(md){return md.split('\n').map(line=>{
  if(line.startsWith('# '))return `<h1>${esc(line.slice(2))}</h1>`;
  if(line.startsWith('## '))return `<h2>${esc(line.slice(3))}</h2>`;
  if(line.startsWith('- '))return `<p>• ${esc(line.slice(2)).replace(/`([^`]+)`/g,'<code>$1</code>')}</p>`;
  if(!line.trim())return '';
  return `<p>${esc(line).replace(/`([^`]+)`/g,'<code>$1</code>')}</p>`;
}).join('')}

async function loadWorld(){
  const [world,visual,rebuild,events,human]=await Promise.all([
    loadWorldJSON('world.json'),loadWorldJSON('visual-bindings.json'),loadWorldJSON('rebuild-manifest.json'),loadEvents(),loadWorldText('HUMAN.zh-TW.md')
  ]);
  const holds=requiredCollection(rebuild,'holds','rebuild-manifest.json');
  // Prepare all display content before changing this view's DOM.
  const html={};
  html['summary']=[metric('Stable Identity',world.stable_id),metric('Lifecycle',world.state.lifecycle),metric('Rebuild',rebuild.rebuild_status),metric('Visual Bindings',visual.bindings.length)].join('');
  html['relations']=(world.relations||[]).map(r=>row(`${r.type} → ${r.target}`,r.state)).join('');
  html['anchors']=visual.bindings.map(v=>row(v.view_id,`${v.evidence_role} · ${(v.drift_checks||[]).join(' / ')}`)).join('');
  html['holds']=holds.map(h=>row(h)).join('')||row('此來源未列出 Hold');
  html['events']=events.map(e=>`<div class="event"><strong>${esc(e.event_type)} · ${esc(e.event_id)}</strong><p>${esc(e.state_effect?.after||'')}<br>${esc(e.claim_ceiling||'')}</p></div>`).join('');
  html['human']=basicMarkdown(human);
  for(const [id,markup] of Object.entries(html))$(id).innerHTML=markup;
}

async function loadDCP(){
  const [index,families,state,authority,growth,active,returns,human,diagram,matrix]=await Promise.all([
    getJSON(dcpBase+'index.json'),
    getJSON(dcpBase+'current/dependency-families.json'),
    getJSON(dcpBase+'current/state-envelope.json'),
    getJSON(dcpBase+'current/authority-gate-matrix.json'),
    getJSON(dcpBase+'current/growth-memory-model.json'),
    getJSON(dcpBase+'instances/active-state.json'),
    getJSON(dcpBase+'instances/return-ledger.json'),
    getText(dcpBase+'HUMAN.zh-TW.md'),
    getText(dcpBase+'visuals/dependency-current.mmd'),
    getText(dcpBase+'visuals/state-authority-matrix.csv')
  ]);
  const activeHolds=requiredCollection(active,'active_holds','active-state.json');
  const activeConflicts=requiredCollection(active,'active_conflicts','active-state.json');
  const pendingReturns=requiredCollection(active,'pending_returns','active-state.json');
  // Prepare all display content before changing this view's DOM.
  const html={};
  html['dcp-summary']=[
    metric('Profile',index.profile),
    metric('Current Surfaces',Object.keys(index.current_surfaces||{}).length),
    metric('Runtime',String(active.state?.runtime??index.runtime)),
    metric('Historical Metabolism',active.state?.historical_metabolism||'UNKNOWN')
  ].join('');
  html['dcp-families']=(families.families||[]).map(f=>row(f.family_id,f.purpose)).join('');
  html['dcp-guards']=(state.forbidden_inferences||[]).map(x=>row(x)).join('');
  const holdRows=[
    ...activeHolds.map(x=>row(x.hold_id,`${x.owner} · ${x.reason}`)),
    ...activeConflicts.map(x=>row(x.conflict_id||'CONFLICT',x.reason||JSON.stringify(x)))
  ];
  html['dcp-holds']=holdRows.join('')||row('此來源未列出 Hold／Conflict');
  html['dcp-pending']=pendingReturns.map(x=>row(x.return_id,`${x.from} → ${x.to} · ${x.closure}`)).join('')||row('此來源未列出 Pending Return');
  html['dcp-rights']=(authority.rights||[]).map(x=>row(x)).join('');
  html['dcp-returns']=(returns.entries||[]).map(x=>row(x.return_id,`${x.state} · ${x.reconciliation}`)).join('');
  html['dcp-growth']=[...(growth.capability_levels||[]).map(x=>row(x,'Capability maturity')),...(growth.growth_evidence||[]).map(x=>row(x,'Growth evidence'))].join('');
  html['dcp-claims']=(active.not_to_claim||[]).map(x=>row(x)).join('');
  html['dcp-human']=basicMarkdown(human);
  for(const [id,markup] of Object.entries(html))$(id).innerHTML=markup;
  $('dcp-diagram').textContent=diagram;
  $('dcp-matrix').textContent=matrix;
}

function bindNavigation(){
  document.querySelectorAll('[data-view]').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('[data-view]').forEach(x=>x.classList.toggle('active',x===btn));
    const dcp=btn.dataset.view==='dcp';
    $('world-view').hidden=dcp;
    $('dcp-view').hidden=!dcp;
  }));
}

async function main(){
  bindNavigation();
  try{
    // Both loaders write the DOM. Set final status only after both settle,
    // so a later world render cannot overwrite an earlier DCP error.
    const results=await Promise.allSettled([loadWorld(),loadDCP()]);
    const failures=results.flatMap((result,index)=>{
      if(result.status!=='rejected')return [];
      const message=`${index===0?'世界視圖':'DCP 視圖'}：${result.reason?.message??String(result.reason)}`;
      // A failed view must not replace the other view's successful summary.
      $(index===0?'summary':'dcp-summary').innerHTML=metric('錯誤',message);
      return [message];
    });
    if(failures.length)throw new Error(failures.join('；'));
    $('status').textContent='資料已載入；尚未執行語義驗證';
    $('status').classList.add('warning');
  }catch(err){
    $('status').textContent='LOAD ERROR';
    $('status').classList.add('warning');
    // Keep details visible when either view is selected; never render errors as HTML.
    $('load-error').textContent=`載入失敗：${err.message}`;
    $('load-error').hidden=false;
  }
}
main();
