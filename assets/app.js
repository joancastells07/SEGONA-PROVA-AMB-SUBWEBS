
window.addEventListener('load',()=>document.body.classList.add('loaded'));

const header=document.querySelector('header');
const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{
  header?.classList.toggle('scrolled',scrollY>30);
  if(progress){
    const max=document.documentElement.scrollHeight-innerHeight;
    progress.style.width=(max>0?(scrollY/max*100):0)+'%';
  }
});

const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})
},{threshold:.13});
document.querySelectorAll('.reveal,.stagger').forEach(el=>io.observe(el));

document.querySelectorAll('[data-parallax]').forEach(el=>{
  const strength=parseFloat(el.dataset.parallax||'8');
  el.parentElement?.addEventListener('mousemove',e=>{
    const r=el.parentElement.getBoundingClientRect();
    const x=(e.clientX-r.left-r.width/2)/r.width;
    const y=(e.clientY-r.top-r.height/2)/r.height;
    el.style.transform=`translate(${x*strength}px,${y*strength}px)`;
  });
  el.parentElement?.addEventListener('mouseleave',()=>el.style.transform='');
});

document.querySelector('.mobile-toggle')?.addEventListener('click',()=>document.querySelector('header')?.classList.toggle('mobile-open'));

document.querySelectorAll('.acc-head').forEach(h=>{
  h.addEventListener('click',()=>h.closest('.acc-item').classList.toggle('open'));
});

document.querySelectorAll('a[href]').forEach(a=>{
  const href=a.getAttribute('href');
  if(href && href.endsWith('.html')){
    a.addEventListener('click',e=>{
      e.preventDefault();
      document.body.classList.remove('loaded');
      setTimeout(()=>location.href=href,420);
    })
  }
});

const counters=document.querySelectorAll('[data-count]');
if(counters.length){
 const cio=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
   if(!e.isIntersecting)return;
   const el=e.target,target=Number(el.dataset.count),suffix=el.dataset.suffix||'';
   let start=0; const dur=900; const t0=performance.now();
   const tick=t=>{const p=Math.min(1,(t-t0)/dur); el.textContent=Math.floor(target*(1-Math.pow(1-p,3)))+suffix;if(p<1)requestAnimationFrame(tick)}
   requestAnimationFrame(tick); cio.unobserve(el);
  })
 },{threshold:.5});
 counters.forEach(c=>cio.observe(c));
}

const filterArea=document.querySelector('[data-filter-area]');
if(filterArea){
 const q=document.querySelector('#q'),area=document.querySelector('#area'),mode=document.querySelector('#mode'),type=document.querySelector('#type'),count=document.querySelector('#resultCount');
 const run=()=>{
  let n=0;
  document.querySelectorAll('.program-card[data-area]').forEach(card=>{
   const okq=!q.value||card.innerText.toLowerCase().includes(q.value.toLowerCase());
   const oka=!area.value||card.dataset.area===area.value;
   const okm=!mode.value||card.dataset.mode===mode.value;
   const okt=!type.value||card.dataset.type===type.value;
   card.style.display=(okq&&oka&&okm&&okt)?'flex':'none';
   if(okq&&oka&&okm&&okt)n++;
  });
  if(count)count.textContent=n+' programes';
 };
 [q,area,mode,type].forEach(x=>x?.addEventListener('input',run));
 run();
}

document.querySelectorAll('[data-demo-form]').forEach(form=>{
 form.addEventListener('submit',e=>{
  e.preventDefault();
  const toast=document.querySelector('.toast');
  if(toast){toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),3000)}
 })
});
