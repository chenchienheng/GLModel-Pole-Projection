const worldBase='../specimens/gui-lu/';
const dcpBase='../dcp/';
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

async function getJSON(url){const r=await fetch(url);if(!r.ok)throw new Error(`${url}: ${r.status}`);return r.json()}
async function getText(url){const r=await fetch(url);if(!r.ok)throw new Error(`${url}: ${r.status}`);return r.text()}
async function loadWorldJSON(name){return getJSON(worldBase+name)}
async function loadWorldText(name){return getText(worldBase+name)}
async function loadEvents(){const t=await loadWorldText('events.jsonl');return t.trim().split(/\n+/).filter(Boolean).map(JSON.parse)}

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
  $('summary').innerHTML=[metric('Stable Identity',world.stable_id),metric('Lifecycle',world.state.lifecycle),metric('Rebuild',rebuild.rebuild_status),metric('Visual Bindings',visual.bindings.length)].join('');
  $('relations').innerHTML=(world.relations||[]).map(r=>row(`${r.type} → ${r.target}`,r.state)).join('');
  $('anchors').innerHTML=visual.bindings.map(v=>row(v.view_id,`${v.evidence_role} · ${(v.drift_checks||[]).join(' / ')}`)).join('');
  $('holds').innerHTML=(rebuild.holds||[]).map(h=>row(h)).join('')||row('目前沒有 Hold');
  $('events').innerHTML=events.map(e=>`<div class="event"><strong>${esc(e.event_type)} · ${esc(e.event_id)}</strong><p>${esc(e.state_effect?.after||'')}<br>${esc(e.claim_ceiling||'')}</p></div>`).join('');
  $('human').innerHTML=basicMarkdown(human);
}

async function loadDCP(){
  const [index,families,state,authority,growth,human]=await Promise.all([
    getJSON(dcpBase+'index.json'),getJSON(dcpBase+'current/dependency-families.json'),getJSON(dcpBase+'current/state-envelope.json'),getJSON(dcpBase+'current/authority-gate-matrix.json'),getJSON(dcpBase+'current/growth-memory-model.json'),getText(dcpBase+'HUMAN.zh-TW.md')
  ]);
  $('dcp-summary').innerHTML=[metric('Profile',index.profile),metric('Current Surfaces',Object.keys(index.current_surfaces||{}).length),metric('Runtime',String(index.runtime)),metric('Reader Rule',index.reader_rule)].join('');
  $('dcp-families').innerHTML=(families.families||[]).map(f=>row(f.family_id,f.purpose)).join('');
  $('dcp-guards').innerHTML=(state.forbidden_inferences||[]).map(x=>row(x)).join('');
  $('dcp-rights').innerHTML=(authority.rights||[]).map(x=>row(x)).join('');
  $('dcp-growth').innerHTML=[...(growth.capability_levels||[]).map(x=>row(x,'Capability maturity')),...(growth.growth_evidence||[]).map(x=>row(x,'Growth evidence'))].join('');
  $('dcp-human').innerHTML=basicMarkdown(human);
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
    await Promise.all([loadWorld(),loadDCP()]);
    $('status').textContent='PASS BOUNDED';
    $('status').classList.add('ok');
  }catch(err){
    $('status').textContent='LOAD ERROR';
    $('status').classList.add('warning');
    $('summary').innerHTML=metric('錯誤',err.message);
  }
}
main();
