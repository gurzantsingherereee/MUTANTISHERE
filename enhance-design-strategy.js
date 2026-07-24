const fs = require('fs');

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

const strategySection = `
<section class="section design-strategy-section" id="strategy">
  <div class="container">
    <div class="ds-heading-grid">
      <div>
        <p class="section-label reveal">05 · Design Strategy</p>
        <h2 class="heading reveal">Five principles.<br><span class="accent">One unmistakable identity.</span></h2>
      </div>
      <p class="ds-intro reveal">WAVEX was repositioned from a functional electronics product into a companion for movement, atmosphere and everyday adventure. Each principle controls a different part of the visual system.</p>
    </div>

    <div class="ds-experience reveal" id="designStrategyExperience">
      <div class="ds-visual" aria-live="polite">
        <img class="ds-image active" data-ds-image="0" src="assets/design-strategy/ds1.png" alt="Adventurous WAVEX speaker scene" loading="eager" onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=84'}else{this.style.display='none'}">
        <img class="ds-image" data-ds-image="1" src="assets/design-strategy/ds2.png" alt="Rugged WAVEX speaker scene" loading="lazy" onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1800&q=84'}else{this.style.display='none'}">
        <img class="ds-image" data-ds-image="2" src="assets/design-strategy/ds3.png" alt="Immersive WAVEX speaker scene" loading="lazy" onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1800&q=84'}else{this.style.display='none'}">
        <img class="ds-image" data-ds-image="3" src="assets/design-strategy/ds4.png" alt="Modern WAVEX speaker studio scene" loading="lazy" onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1800&q=84'}else{this.style.display='none'}">
        <img class="ds-image" data-ds-image="4" src="assets/design-strategy/ds5.png" alt="Energetic WAVEX speaker scene" loading="lazy" onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1800&q=84'}else{this.style.display='none'}">

        <div class="ds-visual-shade"></div>
        <div class="ds-visual-topline"><span>WAVEX / DESIGN PRINCIPLES</span><span id="dsCounter">01 — 05</span></div>
        <div class="ds-visual-caption"><span id="dsVisualWord">MOVE</span><i></i></div>
      </div>

      <aside class="ds-detail">
        <div class="ds-detail-head">
          <span class="ds-kicker">Active principle</span>
          <span class="ds-index" id="dsIndex">01</span>
        </div>
        <h3 id="dsTitle">Adventurous</h3>
        <p id="dsCopy">Place the product inside real journeys rather than isolated technical scenes. The identity begins with movement, terrain and the promise of escape.</p>
        <div class="ds-tags" id="dsTags"><span>Movement</span><span>Exploration</span><span>Outdoor context</span></div>
        <div class="ds-progress"><i id="dsProgress"></i></div>

        <div class="ds-selector" role="tablist" aria-label="Design strategy principles">
          <button class="ds-tab active" type="button" role="tab" aria-selected="true" data-ds="0"><b>01</b><span>Adventurous</span></button>
          <button class="ds-tab" type="button" role="tab" aria-selected="false" data-ds="1"><b>02</b><span>Rugged</span></button>
          <button class="ds-tab" type="button" role="tab" aria-selected="false" data-ds="2"><b>03</b><span>Immersive</span></button>
          <button class="ds-tab" type="button" role="tab" aria-selected="false" data-ds="3"><b>04</b><span>Modern</span></button>
          <button class="ds-tab" type="button" role="tab" aria-selected="false" data-ds="4"><b>05</b><span>Energetic</span></button>
        </div>
      </aside>
    </div>

    <div class="ds-equation reveal" aria-label="WAVEX design strategy equation">
      <span>Context</span><i>+</i><span>Durability</span><i>+</i><span>Spatial sound</span><i>+</i><span>Precision</span><i>+</i><span>Energy</span><b>= WAVEX</b>
    </div>
  </div>
</section>`;

const strategyStyles = `
<style id="wavex-design-strategy-v2">
  .design-strategy-section{overflow:hidden;background:
    radial-gradient(circle at 12% 15%,rgba(241,90,0,.12),transparent 24rem),
    radial-gradient(circle at 88% 78%,rgba(241,90,0,.08),transparent 28rem),
    #0a0a08}
  .design-strategy-section:before{content:"";position:absolute;inset:0;pointer-events:none;opacity:.24;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:48px 48px;mask-image:linear-gradient(to bottom,transparent,black 18%,black 82%,transparent)}
  .ds-heading-grid{position:relative;z-index:1;display:grid;grid-template-columns:minmax(0,1.35fr) minmax(280px,.65fr);gap:clamp(32px,7vw,96px);align-items:end}
  .ds-intro{max-width:520px;margin:0 0 10px;color:var(--grey);font-size:clamp(1rem,1.45vw,1.22rem)}
  .ds-experience{position:relative;z-index:1;display:grid;grid-template-columns:minmax(0,1.45fr) minmax(330px,.55fr);min-height:720px;margin-top:64px;border:1px solid var(--line);border-radius:32px;overflow:hidden;background:#10100d;box-shadow:0 38px 90px rgba(0,0,0,.38)}
  .ds-visual{position:relative;min-height:720px;overflow:hidden;background:#080807}
  .ds-image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transform:scale(1.055);filter:saturate(.94) contrast(1.03);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform 1.4s cubic-bezier(.16,1,.3,1)}
  .ds-image.active{opacity:1;transform:scale(1)}
  .ds-visual-shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.18),transparent 34%,rgba(0,0,0,.14) 65%,rgba(0,0,0,.7)),linear-gradient(90deg,transparent 58%,rgba(0,0,0,.18));pointer-events:none}
  .ds-visual-topline{position:absolute;top:25px;left:26px;right:26px;display:flex;justify-content:space-between;gap:20px;color:rgba(255,255,255,.72);font:700 .64rem ui-monospace,monospace;letter-spacing:.15em;text-transform:uppercase}
  .ds-visual-caption{position:absolute;left:28px;right:28px;bottom:26px;display:flex;align-items:center;gap:18px;color:#fff;font-family:var(--font-display,"Bebas Neue","Arial Narrow",Impact,sans-serif);font-size:clamp(3rem,7vw,7rem);line-height:.8;letter-spacing:.02em}
  .ds-visual-caption i{height:1px;flex:1;background:linear-gradient(90deg,var(--orange),transparent)}
  .ds-detail{position:relative;display:flex;flex-direction:column;padding:clamp(28px,4vw,48px);background:linear-gradient(160deg,#1a1915,#0e0e0c 75%)}
  .ds-detail:before{content:"";position:absolute;top:0;left:0;width:1px;height:100%;background:linear-gradient(transparent,var(--orange),transparent);opacity:.55}
  .ds-detail-head{display:flex;align-items:flex-start;justify-content:space-between;gap:20px}
  .ds-kicker{color:var(--orange);font:700 .66rem ui-monospace,monospace;letter-spacing:.16em;text-transform:uppercase}
  .ds-index{color:rgba(255,255,255,.18);font-family:var(--font-display,"Bebas Neue",Impact,sans-serif);font-size:4.7rem;line-height:.75}
  .ds-detail h3{margin:clamp(55px,9vh,100px) 0 18px;font-family:var(--font-display,"Bebas Neue",Impact,sans-serif);font-size:clamp(3.5rem,6.3vw,6.8rem);font-weight:400;line-height:.82;letter-spacing:.01em;text-transform:uppercase}
  .ds-detail>p{min-height:98px;margin:0;color:#b3ada3;font-size:1rem;line-height:1.72}
  .ds-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:24px}
  .ds-tags span{padding:8px 11px;border:1px solid rgba(255,255,255,.12);border-radius:999px;color:#d9d1c5;font-size:.66rem;letter-spacing:.08em;text-transform:uppercase}
  .ds-progress{height:2px;margin:32px 0 10px;overflow:hidden;background:rgba(255,255,255,.09)}
  .ds-progress i{display:block;width:20%;height:100%;background:var(--orange);transition:width .55s cubic-bezier(.16,1,.3,1)}
  .ds-selector{margin-top:auto}
  .ds-tab{width:100%;display:grid;grid-template-columns:38px 1fr auto;align-items:center;gap:12px;padding:14px 0;border:0;border-top:1px solid rgba(255,255,255,.11);color:#77736c;background:transparent;text-align:left;cursor:pointer;transition:color .25s,padding-left .25s}
  .ds-tab:after{content:"↗";opacity:0;color:var(--orange);transform:translate(-8px,8px);transition:.25s}
  .ds-tab b{font:700 .65rem ui-monospace,monospace;color:#5f5a53}
  .ds-tab span{font-size:.82rem;letter-spacing:.08em;text-transform:uppercase}
  .ds-tab:hover,.ds-tab.active{padding-left:8px;color:var(--cream)}
  .ds-tab.active b{color:var(--orange)}
  .ds-tab.active:after{opacity:1;transform:none}
  .ds-equation{position:relative;z-index:1;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:12px 18px;margin-top:26px;padding:24px;border:1px solid var(--line);border-radius:999px;background:rgba(255,255,255,.025);font-size:.7rem;letter-spacing:.11em;text-transform:uppercase}
  .ds-equation span{color:#aaa49a}.ds-equation i{color:var(--orange);font-style:normal}.ds-equation b{color:var(--cream);font-weight:700}
  @media(max-width:980px){.ds-heading-grid{grid-template-columns:1fr}.ds-experience{grid-template-columns:1fr;min-height:0}.ds-visual{min-height:620px}.ds-detail:before{width:100%;height:1px;background:linear-gradient(90deg,transparent,var(--orange),transparent)}.ds-detail h3{margin:52px 0 18px}.ds-detail>p{min-height:auto}.ds-selector{margin-top:38px}}
  @media(max-width:680px){.ds-experience{margin-top:42px;border-radius:22px}.ds-visual{min-height:520px}.ds-visual-topline{top:18px;left:18px;right:18px;font-size:.56rem}.ds-visual-caption{left:18px;right:18px;bottom:18px}.ds-detail{padding:26px 22px}.ds-index{font-size:3.7rem}.ds-detail h3{font-size:4.1rem}.ds-equation{justify-content:flex-start;border-radius:22px}.ds-equation i{display:none}.ds-equation span,.ds-equation b{width:calc(50% - 9px)}}
  @media(prefers-reduced-motion:reduce){.ds-image,.ds-progress i,.ds-tab,.ds-tab:after{transition:none!important}}
</style>`;

const strategyScript = `
<script id="wavex-design-strategy-script">
(function(){
  const root=document.getElementById('designStrategyExperience');
  if(!root)return;
  const data=[
    {title:'Adventurous',word:'MOVE',copy:'Place the product inside real journeys rather than isolated technical scenes. The identity begins with movement, terrain and the promise of escape.',tags:['Movement','Exploration','Outdoor context']},
    {title:'Rugged',word:'ENDURE',copy:'Use honest materials, wet rock, woven mesh and controlled weather detail to communicate resilience without turning the brand into heavy industrial equipment.',tags:['Durability','Material truth','Weather-ready']},
    {title:'Immersive',word:'SURROUND',copy:'Translate sound into spatial motion. Concentric energy, atmosphere and depth make the listening experience visible before the product is heard.',tags:['360° feeling','Depth','Atmosphere']},
    {title:'Modern',word:'REFINE',copy:'Balance expressive outdoor storytelling with disciplined geometry, clear hierarchy and premium studio control across every customer touchpoint.',tags:['Precision','Clarity','Premium finish']},
    {title:'Energetic',word:'IGNITE',copy:'Adventure orange and the vertical RGB light become active signatures—introducing warmth, rhythm and a sense of movement throughout the system.',tags:['Orange signal','RGB rhythm','Motion']}
  ];
  const images=[...root.querySelectorAll('[data-ds-image]')];
  const tabs=[...root.querySelectorAll('[data-ds]')];
  const title=document.getElementById('dsTitle');
  const copy=document.getElementById('dsCopy');
  const index=document.getElementById('dsIndex');
  const counter=document.getElementById('dsCounter');
  const word=document.getElementById('dsVisualWord');
  const tags=document.getElementById('dsTags');
  const progress=document.getElementById('dsProgress');
  let current=0;
  let timer;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function activate(next,focusTab=false){
    current=(next+data.length)%data.length;
    images.forEach((img,i)=>img.classList.toggle('active',i===current));
    tabs.forEach((tab,i)=>{
      const active=i===current;
      tab.classList.toggle('active',active);
      tab.setAttribute('aria-selected',String(active));
      if(active&&focusTab)tab.focus();
    });
    const item=data[current];
    title.textContent=item.title;
    copy.textContent=item.copy;
    index.textContent=String(current+1).padStart(2,'0');
    counter.textContent=String(current+1).padStart(2,'0')+' — 05';
    word.textContent=item.word;
    tags.innerHTML=item.tags.map(tag=>'<span>'+tag+'</span>').join('');
    progress.style.width=((current+1)/data.length*100)+'%';
  }

  function restart(){
    if(reduced)return;
    clearInterval(timer);
    timer=setInterval(()=>activate(current+1),6000);
  }

  tabs.forEach((tab,i)=>{
    tab.addEventListener('click',()=>{activate(i);restart()});
    tab.addEventListener('keydown',event=>{
      if(event.key==='ArrowDown'||event.key==='ArrowRight'){event.preventDefault();activate(current+1,true);restart()}
      if(event.key==='ArrowUp'||event.key==='ArrowLeft'){event.preventDefault();activate(current-1,true);restart()}
    });
  });
  root.addEventListener('mouseenter',()=>clearInterval(timer));
  root.addEventListener('mouseleave',restart);
  root.addEventListener('focusin',()=>clearInterval(timer));
  root.addEventListener('focusout',restart);
  activate(0);
  restart();
})();
</script>`;

html = html.replace(/<style id="wavex-design-strategy-v2">[\s\S]*?<\/style>/, '');
html = html.replace(/<script id="wavex-design-strategy-script">[\s\S]*?<\/script>/, '');

const sectionPattern = /<section class="section" id="strategy">[\s\S]*?<\/section>\s*(?=<section class="section surface">)/;
if (!sectionPattern.test(html)) {
  throw new Error('Could not find the original Design Strategy section.');
}
html = html.replace(sectionPattern, strategySection + '\n');
html = html.replace('</head>', strategyStyles + '\n</head>');
html = html.replace('</body>', strategyScript + '\n</body>');

fs.writeFileSync(file, html);
console.log('Rebuilt Design Strategy with five interactive image-led principles.');
