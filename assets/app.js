
window.addEventListener('load',()=>document.body.classList.add('loaded'));
const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{
 const max=document.documentElement.scrollHeight-innerHeight;
 if(progress)progress.style.width=(max>0?scrollY/max*100:0)+'%';
});

function syncScrollStage(){
 const themed=document.body.classList.contains('page-home')||document.body.classList.contains('page-offer')||document.body.classList.contains('page-program');
 if(!themed) return;
 const max=Math.max(document.documentElement.scrollHeight-innerHeight,1);
 const r=scrollY/max;
 const stage=r<.22?'1':r<.48?'2':r<.74?'3':'4';
 document.body.setAttribute('data-scroll-stage',stage);
}
window.addEventListener('load',syncScrollStage);
window.addEventListener('scroll',syncScrollStage,{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal,.stagger').forEach(el=>io.observe(el));
document.addEventListener('click',e=>{
 const h=e.target.closest('.acc-head'); if(h)h.closest('.acc').classList.toggle('open');
});
document.querySelectorAll('[data-demo-form]').forEach(f=>f.addEventListener('submit',e=>{
 e.preventDefault(); const t=document.querySelector('.toast'); if(t){t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2600)}
}));
document.querySelectorAll('a[href$=".html"]').forEach(a=>a.addEventListener('click',e=>{
 const href=a.getAttribute('href'); if(!href||href.startsWith('http'))return;
 e.preventDefault();document.body.classList.remove('loaded');setTimeout(()=>location.href=href,350);
}));
