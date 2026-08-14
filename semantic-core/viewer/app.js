const base='../specimens/gui-lu/';
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

async function loadJSON(name){const r=await fetch(base+name);if(!r.ok)throw new Error(`${name}: ${r.status}`);return r.json()}
async function loadText(name){const r=await fetch(base+name);if(!r.ok)throw new Error(`${name}: ${r.status}`);return r.text()}
async function loadEvents(){const t=await loadText('events.jsonl');return t.trim().split(/\n+/).filter(Boolean).map(JSON.parse)}

function metric(label,value){return `<div class="metric"><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`}
function row(title,detail=''){return `<div class="row"><strong>${esc(title)}</strong>${detail?`<small>${esc(detail)}</small>`:''}</div>`}
function basicMarkdown(md){return md.split('\n').map(line=>{
  if(line.startsWith('# '))return `<h1>${esc(line.slice(2))}</h1>`;
  if(line.startsWith('## '))return `<h2>${esc(line.slice(3))}</h2>`;
  if(!line.trim())return '';
  return `<p>${esc(line).replace(/`([^`]+)`/g,'<code>$1</code>')}</p>`;
}).join('')}

async function main(){
  try{
    const [world,visual,rebuild,events,human]=await Promise.all([
      loadJSON('world.json'),loadJSON('visual-bindings.json'),loadJSON('rebuild-manifest.json'),loadEvents(),loadText('HUMAN.zh-TW.md')
    ]);
    $('status').textContent='BOUNDED SPECIMEN';
    $('status').classList.add('ok');
    $('summary').innerHTML=[
      metric('Stable Identity',world.stable_id),
      metric('Lifecycle',world.state.lifecycle),
      metric('Rebuild',rebuild.rebuild_status),
      metric('Visual Bindings',visual.bindings.length)
    ].join('');
    $('relations').innerHTML=(world.relations||[]).map(r=>row(`${r.type} → ${r.target}`,r.state)).join('');
    $('anchors').innerHTML=visual.bindings.map(v=>row(v.view_id,`${v.evidence_role} · ${(v.drift_checks||[]).join(' / ')}`)).join('');
    $('holds').innerHTML=(rebuild.holds||[]).map(h=>row(h)).join('')||row('目前沒有 Hold');
    $('events').innerHTML=events.map(e=>`<div class="event"><strong>${esc(e.event_type)} · ${esc(e.event_id)}</strong><p>${esc(e.state_effect?.after||'')}<br>${esc(e.claim_ceiling||'')}</p></div>`).join('');
    $('human').innerHTML=basicMarkdown(human);
  }catch(err){
    $('status').textContent='LOAD ERROR';
    $('status').classList.add('warning');
    $('summary').innerHTML=metric('錯誤',err.message);
  }
}
main();
