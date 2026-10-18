/* Requested responsive acceptance. Email delivery is always intercepted. */
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const base=process.env.FTAX_BASE_URL||'http://127.0.0.1:8000/Yilmaz/';
const out=path.resolve(process.env.FTAX_QA_DIR||path.join(__dirname,'../qa/mobile'));
const widths=[360,390,430,768,1440];
const pages=['index.html','steuerberatung.html','ueber-mich.html','buchhaltung.html','bilanzierung.html','lohnverrechnung.html','impressum.html','datenschutz.html','404.html'];
const emoji=/[\p{Extended_Pictographic}\uFE0F\u20E3]/u;
const report={viewports:[],interactions:[],desktop:[],errors:[],failedAssets:[]};
fs.mkdirSync(out,{recursive:true});

async function geometry(p){
 return p.evaluate(()=>{
  const visible=e=>{const r=e.getBoundingClientRect();return r.width>0&&r.height>0&&getComputedStyle(e).visibility!=='hidden';};
  const clipped=[...document.querySelectorAll('main h1,main h2,main h3,main p,.button,.text-link,summary,.focus-tabs button')].filter(visible).filter(e=>e.clientWidth>0&&e.scrollWidth>e.clientWidth+1).map(e=>({tag:e.tagName,class:e.className,text:e.textContent.trim().slice(0,65),width:e.clientWidth,scroll:e.scrollWidth}));
  const outside=[...document.querySelectorAll('main *,header *,footer *')].filter(visible).filter(e=>!e.closest('.form-honeypot,.hero-art,.identity-art')).filter(e=>{const r=e.getBoundingClientRect();return r.left< -1||r.right>innerWidth+1}).map(e=>e.tagName+'.'+e.className).slice(0,8);
  return {width:innerWidth,scroll:document.documentElement.scrollWidth,clipped,outside};
 });
}
async function screenshotSection(p,selector,file){
 await p.locator(selector).evaluate(e=>scrollTo({top:e.getBoundingClientRect().top+scrollY-document.querySelector('.site-header').offsetHeight-16,behavior:'instant'}));
 await p.screenshot({path:path.join(out,file)});
}

(async()=>{
 const b=await chromium.launch({channel:process.env.FTAX_BROWSER_CHANNEL||undefined,headless:true});
 try{
  const p=await b.newPage({reducedMotion:'reduce',deviceScaleFactor:1});
  p.on('pageerror',e=>report.errors.push(String(e)));
  p.on('response',r=>{if(r.url().startsWith(base)&&r.status()>=400&&r.url()!==base+'404.html')report.failedAssets.push({url:r.url(),status:r.status()});});
  for(const width of widths){
   await p.setViewportSize({width,height:width<768?844:1024});
   for(const file of pages){
    assert.equal((await p.goto(base+file)).status(),200);await p.evaluate(()=>document.fonts.ready);
    const raw=(await p.locator('body').textContent()).replace(/[©®™]/g,'');
    assert.ok(!emoji.test(raw),`${file}: emoji in UI`);
    for(const part of[0,.5,1]){
     await p.evaluate(f=>scrollTo({top:(document.documentElement.scrollHeight-innerHeight)*f,behavior:'instant'}),part);
     const r=await geometry(p);
     assert.ok(r.scroll<=width+1,`${file} ${width}px horizontal scroll: ${JSON.stringify(r)}`);
     assert.deepEqual(r.clipped,[],`${file} ${width}px clipped content`);
     assert.deepEqual(r.outside,[],`${file} ${width}px content outside viewport`);
    }
    await p.evaluate(()=>scrollTo({top:0,behavior:'instant'}));
    if(file==='index.html'||file==='steuerberatung.html')await p.screenshot({path:path.join(out,`after-${file.replace('.html','')}-${width}.png`),fullPage:true});
    if(file==='index.html'){
     await p.screenshot({path:path.join(out,`after-viewport-${width}.png`)});
     for(const [selector,name] of [['.service-rows','cards'],['.focus-tabs','tabs'],['.footer-heading','footer']])await screenshotSection(p,selector,`after-${name}-${width}.png`);
    }
    report.viewports.push({file,width,overflow:false,clipping:false,emoji:false});
   }
   await p.goto(base);
   if(width<901){
    const targets=await p.locator('.menu-toggle,.header-appointment,.button,.text-link,.service-row,.hero-down,.hero-advisor,.appointment-meta>a,.footer-mail,.footer-bottom a,.footer-grid>div>a,.focus-tabs button,.faq-list summary,.request-details summary').evaluateAll(els=>els.filter(e=>e.getBoundingClientRect().width).map(e=>({label:e.getAttribute('aria-label')||e.textContent.trim().slice(0,50),width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height})).filter(r=>r.width<43.9||r.height<43.9));
    assert.deepEqual(targets,[],`${width}px touch targets below 44px`);
    const menu=p.getByRole('button',{name:'Menü',exact:true});await menu.click();
    assert.equal(await menu.getAttribute('aria-expanded'),'true');
    for(const link of await p.locator('#navigation a').all()){assert.ok(await link.isVisible());const r=await link.boundingBox();assert.ok(r.height>=44&&r.x+r.width<=width+1);}
    await p.screenshot({path:path.join(out,`after-menu-${width}.png`)});
    await p.keyboard.press('Escape');assert.equal(await menu.getAttribute('aria-expanded'),'false');assert.ok(await menu.evaluate(e=>e===document.activeElement));
    await menu.click();await p.locator('#navigation a[href="steuerberatung.html"]').click();await p.waitForURL('**/steuerberatung.html');
    assert.equal(await menu.getAttribute('aria-expanded'),'false');
    report.interactions.push({width,menu:'open, Escape, focus return, link navigation'});
   }
   await p.goto(base);await p.locator('.service-row').first().click();await p.waitForURL('**/buchhaltung.html');
   await p.goto(base);await p.locator('.hero-actions .button').click();await p.waitForURL('**/#termin');
   assert.ok(await p.locator('#request-name').isVisible());
   await p.locator('.form-submit').click();assert.equal(await p.locator('#request-name').getAttribute('aria-invalid'),'true');
   await p.fill('#request-name','Mobile QA');await p.fill('#request-email','ungueltig');await p.locator('.form-submit').click();
   assert.equal(await p.locator('#request-email').getAttribute('aria-invalid'),'true');
   await p.fill('#request-email','qa@example.com');await p.locator('.request-details summary').click();
   await p.fill('#request-company','Ein langer Unternehmensname zur Darstellungskontrolle');
   await p.selectOption('#request-topic','Gründung und Rechtsformwahl');
   await p.fill('#request-message','Prüfung der mobilen Formularansicht. Diese Anfrage wird abgefangen.');
   if(width<901){const sizes=await p.locator('.form-field input,.form-field select,.form-field textarea').evaluateAll(es=>es.map(e=>parseFloat(getComputedStyle(e).fontSize)));assert.ok(sizes.every(v=>v>=16));}
   let r=await geometry(p);assert.deepEqual(r.clipped,[]);assert.ok(r.scroll<=width+1);
   await screenshotSection(p,'.request-panel',`after-form-${width}.png`);
   let calls=0;await p.route('https://api.emailjs.com/**',async route=>{calls++;await new Promise(resolve=>setTimeout(resolve,200));await route.fulfill({status:200,body:'OK'});});
   await p.locator('.form-submit').click();assert.ok(await p.locator('.form-submit').isDisabled());
   await p.waitForFunction(()=>document.querySelector('[data-contact-status]').dataset.state==='success');assert.equal(calls,1);
   assert.equal(await p.locator('#request-name').inputValue(),'');assert.deepEqual((await geometry(p)).clipped,[]);
   await screenshotSection(p,'.form-submit',`after-success-${width}.png`);await p.unroute('https://api.emailjs.com/**');
   await p.goto(base+'#termin');await p.fill('#request-name','Mobile QA');await p.fill('#request-email','qa@example.com');
   await p.route('https://api.emailjs.com/**',route=>route.fulfill({status:500,body:'Mock service error'}));await p.locator('.form-submit').click();
   await p.waitForFunction(()=>document.querySelector('[data-contact-status]').dataset.state==='error');assert.equal(await p.locator('#request-name').inputValue(),'Mobile QA');assert.ok(await p.locator('.form-submit').isEnabled());
   assert.deepEqual((await geometry(p)).clipped,[]);await screenshotSection(p,'.form-submit',`after-error-${width}.png`);await p.unroute('https://api.emailjs.com/**');
   report.interactions.push({width,form:'invalid name/email, optional fields, pending, mocked success/error, retained input',links:'CTA anchor and service card'});
   if(width===1440){
    await p.goto(base);await p.evaluate(()=>document.fonts.ready);
    const current=await p.evaluate(()=>Object.fromEntries(['.masthead','.hero-composition','h1','.service-rows','.appointment-layout','.request-panel','.site-footer'].map(s=>{const r=document.querySelector(s).getBoundingClientRect();return[s,{x:r.x,y:r.y,width:r.width,height:r.height}]})));
    fs.writeFileSync(path.join(out,'desktop-after.json'),JSON.stringify(current,null,2));
    const beforeFile=path.join(out,'desktop-before.json');
    if(fs.existsSync(beforeFile)){
     const before=JSON.parse(fs.readFileSync(beforeFile,'utf8'));
     for(const selector of Object.keys(current))for(const key of ['x','y','width','height']){
      const delta=Math.abs(current[selector][key]-before[selector][key]);report.desktop.push({selector,key,delta});
      assert.ok(delta<1.1,`Desktop geometry changed ${selector} ${key}: ${delta}px`);
     }
    }
   }
  }
  await p.setViewportSize({width:360,height:640});await p.goto(base);await p.locator('.menu-toggle').click();await p.setViewportSize({width:1440,height:900});assert.equal(await p.locator('.menu-toggle').getAttribute('aria-expanded'),'false');assert.ok(await p.locator('#navigation').isVisible());
  await p.setViewportSize({width:360,height:640});assert.ok(await p.locator('#navigation').isHidden());
  report.interactions.push({resize:'Open mobile menu to desktop and back resets correctly'});
  assert.deepEqual(report.errors,[]);assert.deepEqual(report.failedAssets,[]);
  fs.writeFileSync(path.join(out,'mobile-acceptance.json'),JSON.stringify(report,null,2));
  console.log(`PASS: ${report.viewports.length} page/viewport combinations, ${report.interactions.length} interaction groups; no clipping, overflow, emoji or runtime/asset errors.`);
 }finally{await b.close();}
})().catch(e=>{console.error(e);process.exit(1)});
