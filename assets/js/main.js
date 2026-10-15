'use strict';
(() => {
  const root=document.documentElement;
  root.classList.add('js');
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('#navigation');
  const header=document.querySelector('.site-header');
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const small=window.matchMedia('(max-width: 680px)');

  function closeMenu(restoreFocus=false){
    toggle?.setAttribute('aria-expanded','false');
    nav?.classList.remove('is-open');
    if(restoreFocus)toggle?.focus();
  }
  if(toggle&&nav){
    toggle.addEventListener('click',()=>{
      const open=toggle.getAttribute('aria-expanded')!=='true';
      toggle.setAttribute('aria-expanded',String(open));
      nav.classList.toggle('is-open',open);
    });
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>closeMenu()));
    document.addEventListener('keydown',event=>{
      if(event.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true')closeMenu(true);
    });
    document.addEventListener('click',event=>{
      if(!nav.contains(event.target)&&!toggle.contains(event.target))closeMenu();
    });
    window.matchMedia('(min-width: 901px)').addEventListener('change',()=>closeMenu());
  }
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=String(new Date().getFullYear()));

  // Sticky appearance changes without changing height or measuring page layout.
  if(header){
    let framePending=false;
    function syncHeader(){header.classList.toggle('is-scrolled',window.scrollY>16);framePending=false;}
    window.addEventListener('scroll',()=>{
      if(framePending)return;
      framePending=true;window.requestAnimationFrame(syncHeader);
    },{passive:true});
    syncHeader();
  }

  // Every element stays visible in the base CSS. Animate only on intersection;
  // no hidden classes, layout writes or dependency on a successful observer.
  const selectors=[
    '.page-home .home-introduction>div','.page-home .overview-layout>div:first-child',
    '.page-home .service-preview','.page-home .audience-list>article',
    '.page-home .personal-label','.page-home .personal-copy','.page-home .journey>li',
    '.page-tax .chapter-label','.page-tax .chapter-content','.page-tax .decision-layout>div',
    '.page-about .about-story>div','.page-about .profile-facts>div',
    '.page-about .working-style>div','.page-about .two-col>div',
    '.closing-section>div'
  ].join(',');
  const pending=new Set(document.querySelectorAll(selectors));
  const running=new Set();
  let observer=null;

  function stopMotion(){
    root.classList.remove('motion-enabled');
    observer?.disconnect();observer=null;
    running.forEach(animation=>animation.cancel());running.clear();
  }
  function startMotion(){
    if(reduced.matches)return;
    root.classList.add('motion-enabled');
    if(!('IntersectionObserver' in window)||!pending.size)return;
    try{
      observer=new window.IntersectionObserver(entries=>{
        if(reduced.matches)return;
        let stagger=0;
        entries.forEach(entry=>{
          if(!entry.isIntersecting||!pending.has(entry.target))return;
          const el=entry.target;
          pending.delete(el);observer?.unobserve(el);
          if(typeof el.animate!=='function'||el.contains(document.activeElement))return;
          const distance=small.matches?6:12;
          const side=el.matches('.personal-label,.chapter-label');
          const transform=side?'translateX(-'+distance+'px)':'translateY('+distance+'px)';
          try{
            const animation=el.animate([
              {opacity:.45,transform},{opacity:1,transform:'translate(0,0)'}
            ],{duration:small.matches?430:540,delay:small.matches?0:Math.min(stagger++*80,160),easing:'cubic-bezier(.22,1,.36,1)',fill:'none'});
            running.add(animation);
            animation.addEventListener('finish',()=>running.delete(animation),{once:true});
            animation.addEventListener('cancel',()=>running.delete(animation),{once:true});
          }catch(_){/* Static content remains visible if animation is unsupported. */}
        });
        if(!pending.size){observer?.disconnect();observer=null;}
      },{threshold:.08,rootMargin:'0px 0px -20px 0px'});
      pending.forEach(el=>observer.observe(el));
    }catch(_){observer?.disconnect();observer=null;}
  }
  reduced.addEventListener('change',()=>{stopMotion();if(!reduced.matches)startMotion();});
  startMotion();
})();
