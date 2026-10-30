(function(){
  'use strict';
  const cfg=window.SITE_CONFIG||{};
  const brand=cfg.brand||'BasePilot';
  document.querySelectorAll('[data-brand]').forEach(el=>el.textContent=brand);
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  const menu=document.querySelector('.menu-toggle');
  const nav=document.getElementById('mainnav');
  if(menu&&nav){
    menu.addEventListener('click',()=>{
      const opened=menu.getAttribute('aria-expanded')==='true';
      menu.setAttribute('aria-expanded',String(!opened));
      menu.setAttribute('aria-label',opened?'Menü öffnen':'Menü schließen');
      nav.classList.toggle('open',!opened);
    });
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Menü öffnen');
    }));
    document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}});
  }
  const tabs=[...document.querySelectorAll('.tab-button')];
  const switchTab=(tab)=>{
    tabs.forEach(t=>{const selected=t===tab;t.classList.toggle('active',selected);t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1;const panel=document.getElementById(t.dataset.panel);if(panel)panel.hidden=!selected;});
  };
  tabs.forEach((tab,i)=>{
    tab.tabIndex=i===0?0:-1;
    tab.addEventListener('click',()=>switchTab(tab));
    tab.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'||e.key==='Home'||e.key==='End'){
      e.preventDefault();let pos=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
      switchTab(tabs[pos]);tabs[pos].focus();
    }});
  });
  const grid=document.getElementById('pricing-grid');
  if(grid){
    const sample=document.getElementById('price-notice');
    if(sample)sample.hidden=!cfg.pricesAreExamples;
    (Array.isArray(cfg.plans)?cfg.plans:[]).forEach(plan=>{
      const card=document.createElement('article');card.className='price-card'+(plan.featured?' featured':'');
      if(plan.featured){const badge=document.createElement('div');badge.className='best';badge.textContent='BELIEBTES PAKET';card.appendChild(badge);}
      const h=document.createElement('h3');h.textContent=plan.title;card.appendChild(h);
      const d=document.createElement('p');d.className='plan-desc';d.textContent=plan.description;card.appendChild(d);
      const price=document.createElement('div');price.className='plan-price';price.textContent=plan.price||'Preis folgt';card.appendChild(price);
      const term=document.createElement('p');term.className='plan-term';term.textContent='Einmalig / '+plan.period;card.appendChild(term);
      const list=document.createElement('ul');list.className='price-list';
      ['Desktop-Software während der Laufzeit','Geplante Online-Lizenzaktivierung','Farming-Funktionen & Einstellungen','Ein Gerät pro Lizenz (geplant)'].forEach(item=>{const li=document.createElement('li');li.textContent=item;list.appendChild(li);});card.appendChild(list);
      const url=typeof plan.checkoutUrl==='string'?plan.checkoutUrl.trim():'';
      const validUrl=/^https:\/\//i.test(url);
      if(validUrl&&!cfg.pricesAreExamples){const link=document.createElement('a');link.className='button '+(plan.featured?'button-primary':'button-ghost');link.textContent='Lizenz auswählen ↗';link.href=url;link.target='_blank';link.rel='noopener noreferrer';card.appendChild(link);}
      else{const btn=document.createElement('button');btn.className='button '+(plan.featured?'button-primary':'button-ghost');btn.disabled=true;btn.textContent='Verkauf demnächst';btn.title='Checkout nach Shop-Einrichtung verfügbar';card.appendChild(btn);}
      grid.appendChild(card);
    });
  }
  // Support-Kontakt nur nach echter Konfiguration aktivieren.
  const mail=(typeof cfg.supportEmail==='string'?cfg.supportEmail:'').trim();
  document.querySelectorAll('[data-email]').forEach(el=>{
    el.textContent=mail||'Bitte vor Veröffentlichung eine Support-E-Mail ergänzen';
    if(mail&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)){el.href='mailto:'+mail;}
    else{el.removeAttribute('href');}
  });
  document.querySelectorAll('[data-business]').forEach(el=>el.textContent=cfg.businessName||'[Vollständiger Name / Unternehmen ergänzen]');
  document.querySelectorAll('[data-download]').forEach(el=>{
    const download=typeof cfg.downloadUrl==='string'?cfg.downloadUrl.trim():'';
    if(/^https:\/\//i.test(download)){el.href=download;el.removeAttribute('aria-disabled');el.textContent='Download öffnen ↗';el.rel='noopener noreferrer';el.target='_blank';}
    else{el.removeAttribute('href');el.setAttribute('aria-disabled','true');el.textContent='Download noch nicht freigegeben';}
  });
})();
