'use strict';
(() => {
  const tabs=[...document.querySelectorAll('[data-focus]')];
  if(!tabs.length)return;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const panels=tabs.map(tab=>document.getElementById(tab.getAttribute('aria-controls')));
  function select(index,moveFocus=false){
    tabs.forEach((tab,i)=>{
      const active=i===index;
      tab.setAttribute('aria-selected',String(active));
      tab.tabIndex=active?0:-1;
      panels[i].hidden=!active;
      panels[i].classList.remove('is-entering');
    });
    if(!reduced.matches)panels[index].classList.add('is-entering');
    if(moveFocus)tabs[index].focus();
  }
  tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>select(index));
    tab.addEventListener('keydown',event=>{
      let next;
      if(event.key==='ArrowRight')next=(index+1)%tabs.length;
      if(event.key==='ArrowLeft')next=(index-1+tabs.length)%tabs.length;
      if(event.key==='Home')next=0;
      if(event.key==='End')next=tabs.length-1;
      if(next!==undefined){event.preventDefault();select(next,true);}
    });
  });
  select(0);
})();
