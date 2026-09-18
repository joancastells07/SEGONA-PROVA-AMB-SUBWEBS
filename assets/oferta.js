document.addEventListener('DOMContentLoaded',()=>{
  const grid=document.getElementById('programGrid');
  if(!grid) return;
  const cards=[...grid.querySelectorAll('.program-card')];
  const q=document.getElementById('q');
  const area=document.getElementById('area');
  const mode=document.getElementById('mode');
  const type=document.getElementById('type');
  const count=document.getElementById('resultCount');
  const norm=s=>(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  function run(){
    const qq=norm(q.value), aa=norm(area.value), mm=norm(mode.value), tt=norm(type.value);
    let n=0;
    cards.forEach(card=>{
      const ok=(!qq || norm(card.dataset.title).includes(qq) || norm(card.dataset.area).includes(qq)) &&
               (!aa || norm(card.dataset.area).includes(aa)) &&
               (!mm || norm(card.dataset.mode).includes(mm)) &&
               (!tt || norm(card.dataset.type).includes(tt));
      card.hidden=!ok;
      if(ok) n++;
    });
    count.textContent=`${n} programes`;
  }
  [q,area,mode,type].forEach(el=>el.addEventListener('input',run,{passive:true}));
});
