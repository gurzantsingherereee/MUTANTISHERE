const fs = require('fs');

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

const criticalHead = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="image" href="assets/images/1.png" fetchpriority="high">`;

if (!html.includes('rel="preload" as="image" href="assets/images/1.png"')) {
  html = html.replace('</head>', criticalHead + '\n</head>');
}

const performanceStyles = `
<style id="wavex-cinematic-performance">
  /*
    Full-site responsive media and performance layer.
    One master image is reused across desktop, tablet and mobile.
    Foreground artwork stays fully visible while a restrained blurred version
    fills unused space to preserve the cinematic presentation.
  */

  :root {
    --media-surface: #0c0c0a;
    --media-frame: rgba(255,255,255,.11);
  }

  html {
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }

  body {
    overflow-x: clip;
    overscroll-behavior-x: none;
  }

  .section:not(.hero):not(.final) {
    content-visibility: auto;
    contain-intrinsic-size: 900px;
  }

  .slot,
  .ds-visual,
  .comparison,
  .signature-visual {
    isolation: isolate;
    background-color: var(--media-surface);
  }

  .slot.cinematic-media::after,
  .ds-visual.cinematic-media::after,
  .comparison .slot.cinematic-media::after {
    content: "";
    position: absolute;
    inset: -8%;
    z-index: 0;
    pointer-events: none;
    background-image: var(--cinematic-media);
    background-size: cover;
    background-position: var(--cinematic-position, center center);
    filter: blur(30px) saturate(.78) brightness(.62);
    opacity: .36;
    transform: scale(1.08);
  }

  .slot.cinematic-media::before,
  .ds-visual.cinematic-media::before {
    z-index: 1;
    opacity: .22;
  }

  .slot.cinematic-media > img,
  .ds-visual.cinematic-media > img,
  .comparison .slot.cinematic-media > img {
    z-index: 2;
  }

  .slot-copy,
  .slot-path,
  .ds-visual-shade,
  .ds-visual-topline,
  .ds-visual-caption {
    z-index: 3;
  }

  .slot.has-image,
  .ds-visual.cinematic-media {
    border-color: var(--media-frame);
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.025), 0 24px 70px rgba(0,0,0,.2);
  }

  /* Complete-image rule for product, packaging, manuals and generated scenes. */
  .slot:not(.hero-bg .slot):not(.final-bg .slot) > img,
  .ds-image,
  .comparison .slot > img {
    object-fit: contain !important;
    object-position: center center;
  }

  .hero-bg img,
  .final-bg img {
    object-fit: cover !important;
  }

  /* Remove global will-change allocation; enable it only while interaction is possible. */
  .slot img,
  .hero-bg img,
  .final-bg img,
  .cursor-glow {
    will-change: auto !important;
  }

  @media (hover:hover) and (pointer:fine) {
    .slot.has-image:hover > img {
      transform: scale(1.018);
    }
  }

  @media (max-width: 1120px) {
    .slot.wide,
    .slot.dieline,
    .mood-grid .slot,
    .production-grid .slot {
      aspect-ratio: 4 / 3;
      min-height: 0 !important;
    }

    .slot.tall,
    .slot.portrait,
    .family-item .slot,
    .packaging-hero .slot,
    .panel-grid .slot,
    .manual-viewer .slot,
    .life-card .slot {
      aspect-ratio: 4 / 5;
      min-height: 0 !important;
    }

    .slot.square,
    .inbox-grid .slot,
    .anatomy-grid .slot,
    .pdp-grid .slot {
      aspect-ratio: 1;
      min-height: 0 !important;
    }
  }

  @media (max-width: 760px), (pointer:coarse) {
    .cursor-glow,
    .noise {
      display: none !important;
    }

    .nav {
      backdrop-filter: blur(10px);
    }

    .slot img,
    .ds-image,
    .hero-bg img,
    .final-bg img {
      transform: none !important;
      transition: opacity .35s ease, filter .35s ease !important;
    }

    .hero-box,
    .hero-product,
    .hero-product::after,
    .hero-wave::before,
    .hero-wave::after,
    .signature-line span {
      animation: none !important;
    }

    .slot.cinematic-media::after,
    .ds-visual.cinematic-media::after,
    .comparison .slot.cinematic-media::after {
      inset: -5%;
      filter: blur(22px) saturate(.74) brightness(.58);
      opacity: .3;
    }

    .motion-card {
      transform: translateY(22px);
      transition-duration: .5s;
    }

    .section:not(.hero):not(.final) {
      contain-intrinsic-size: 760px;
    }
  }

  @media (max-width: 520px) {
    .slot.wide,
    .slot.dieline,
    .mood-grid .slot,
    .production-grid .slot {
      aspect-ratio: 1 / 1;
    }

    .slot.tall,
    .slot.portrait,
    .family-item .slot,
    .packaging-hero .slot,
    .panel-grid .slot,
    .manual-viewer .slot,
    .life-card .slot,
    .ds-visual,
    .comparison {
      aspect-ratio: 4 / 5 !important;
    }
  }

  .data-saver .motion-marquee-track,
  .data-saver .hero-wave::before,
  .data-saver .hero-wave::after,
  .data-saver .hero-box,
  .data-saver .hero-product {
    animation: none !important;
  }

  .data-saver .slot.cinematic-media::after,
  .data-saver .ds-visual.cinematic-media::after {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    .slot img,
    .ds-image,
    .hero-bg img,
    .final-bg img {
      transform: none !important;
      transition: none !important;
    }
  }
</style>`;

html = html.replace(/<style id="wavex-cinematic-performance">[\s\S]*?<\/style>/, '');
html = html.replace('</head>', performanceStyles + '\n</head>');

/* Remove expensive remote placeholder requests. Missing images become tiny local SVG art. */
html = html.replace(
  /img\.src='https:\/\/picsum\.photos\/seed\/wavex-'\+match\[1\]\+'\/1600\/1100';/g,
  `const asset=match[1];
       const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1100"><defs><radialGradient id="g" cx="72%" cy="32%" r="82%"><stop stop-color="#5a250d"/><stop offset=".46" stop-color="#171611"/><stop offset="1" stop-color="#080807"/></radialGradient><filter id="n"><feTurbulence baseFrequency=".012" numOctaves="2" seed="'+asset+'"/><feColorMatrix values="1 0 0 0 0 0 .35 0 0 0 0 0 .12 0 0 0 0 0 .18 0"/></filter></defs><rect width="1600" height="1100" fill="url(#g)"/><rect width="1600" height="1100" filter="url(#n)" opacity=".3"/><path d="M-80 920L390 520l260 240 250-330 760 550v180H-80z" fill="#10100e"/><path d="M0 980L480 650l220 180 260-280 640 440" fill="none" stroke="#f15a00" stroke-opacity=".28" stroke-width="4"/></svg>';
       img.src='data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg);`
);

/* Design Strategy used remote Unsplash fallbacks. Route those through the local fallback. */
html = html.replace(/onerror="if\(!this\.dataset\.fallback\)[^"]+"/g, 'onerror="useImageFallback(this)"');

/* Add native loading hints to every image, then promote only above-the-fold assets. */
html = html.replace(/<img\b([^>]*?)>/g, (tag, attrs) => {
  let next = attrs
    .replace(/\sloading="[^"]*"/g, '')
    .replace(/\sdecoding="[^"]*"/g, '')
    .replace(/\sfetchpriority="[^"]*"/g, '');
  return `<img${next} loading="lazy" decoding="async" fetchpriority="low">`;
});

html = html.replace(/(<div class="loader"[\s\S]*?<\/div>)/, match =>
  match.replace(/<img\b([^>]*?)>/, (tag, attrs) => `<img${attrs.replace(/\sloading="[^"]*"|\sdecoding="[^"]*"|\sfetchpriority="[^"]*"/g, '')} loading="eager" decoding="async" fetchpriority="high">`)
);

html = html.replace(/(<section class="hero"[\s\S]*?<\/section>)/, match =>
  match.replace(/<img\b([^>]*?)>/g, (tag, attrs) => `<img${attrs.replace(/\sloading="[^"]*"|\sdecoding="[^"]*"|\sfetchpriority="[^"]*"/g, '')} loading="eager" decoding="async" fetchpriority="high">`)
);

/* Replace the artificial loader with a load-aware loader capped below one second. */
html = html.replace(
  /const loader=document\.getElementById\('loader'\),bar=document\.getElementById\('loaderBar'\),count=document\.getElementById\('loaderCount'\);let n=0;const t=setInterval\(\(\)=>\{[\s\S]*?\},55\);/,
  `const loader=document.getElementById('loader'),bar=document.getElementById('loaderBar'),count=document.getElementById('loaderCount');let loaderHidden=false;const hideLoader=()=>{if(loaderHidden)return;loaderHidden=true;if(bar)bar.style.width='100%';if(count)count.textContent='100';requestAnimationFrame(()=>setTimeout(()=>loader&&loader.classList.add('hide'),90))};if(document.readyState==='complete')hideLoader();else addEventListener('load',hideLoader,{once:true});setTimeout(hideLoader,850);`
);

/* Throttle the reading-progress update to one animation frame. */
html = html.replace(
  /const progress=\(\)=>\{const max=document\.documentElement\.scrollHeight-innerHeight;document\.documentElement\.style\.setProperty\('--progress',\(max\?scrollY\/max\*100:0\)\+'%'\)\};addEventListener\('scroll',progress,\{passive:true\}\);progress\(\);/,
  `let progressQueued=false;const progress=()=>{const max=document.documentElement.scrollHeight-innerHeight;document.documentElement.style.setProperty('--progress',(max?scrollY/max*100:0)+'%');progressQueued=false};addEventListener('scroll',()=>{if(!progressQueued){progressQueued=true;requestAnimationFrame(progress)}},{passive:true});progress();`
);

const performanceScript = `
<script id="wavex-cinematic-performance-script">
(function(){
  const connection=navigator.connection||navigator.mozConnection||navigator.webkitConnection;
  if(connection&&connection.saveData) document.documentElement.classList.add('data-saver');

  /* A no-network fallback for numbered assets and ds1–ds5. */
  window.useImageFallback=function(img){
    if(img.dataset.localFallbackApplied){img.style.display='none';return;}
    img.dataset.localFallbackApplied='true';
    const source=img.getAttribute('src')||'';
    const key=(source.match(/assets\\/images\\/(\\d+)\\.png/)||source.match(/assets\\/design-strategy\\/(ds\\d+)\\.png/i)||[])[1]||'W';
    const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1100"><defs><radialGradient id="g" cx="76%" cy="28%" r="90%"><stop stop-color="#61260c"/><stop offset=".4" stop-color="#181711"/><stop offset="1" stop-color="#080807"/></radialGradient><filter id="n"><feTurbulence baseFrequency=".011" numOctaves="2" seed="'+String(key).replace(/\\D/g,'')+'"/><feColorMatrix values="1 0 0 0 0 0 .32 0 0 0 0 0 .1 0 0 0 0 0 .2 0"/></filter></defs><rect width="1600" height="1100" fill="url(#g)"/><rect width="1600" height="1100" filter="url(#n)" opacity=".28"/><path d="M-100 930L330 560l280 210 270-360 820 600v130H-100z" fill="#0e0e0c"/><path d="M-40 1010L450 680l210 170 300-300 680 480" fill="none" stroke="#f15a00" stroke-opacity=".3" stroke-width="4"/></svg>';
    img.src='data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg);
  };

  const isAtmospheric=function(holder){return !!holder.closest('.hero-bg,.final-bg')};
  const setBackdrop=function(img){
    const holder=img.closest('.slot,.ds-visual');
    if(!holder||isAtmospheric(holder)||!img.currentSrc&&!img.src)return;
    const source=img.currentSrc||img.src;
    if(!source)return;
    holder.style.setProperty('--cinematic-media','url("'+source.replace(/"/g,'%22')+'")');
    holder.classList.add('cinematic-media');
  };

  const prepare=function(img){
    if(!img.closest('.hero,.loader')){
      img.loading='lazy';
      img.fetchPriority='low';
    }
    img.decoding='async';
    img.addEventListener('load',function(){setBackdrop(img)},{passive:true});
    if(img.complete&&img.naturalWidth)setBackdrop(img);
  };

  document.querySelectorAll('img').forEach(prepare);

  const srcObserver=new MutationObserver(function(records){
    records.forEach(function(record){
      if(record.type==='attributes'&&record.target.tagName==='IMG') setBackdrop(record.target);
    });
  });
  document.querySelectorAll('.slot img,.ds-image').forEach(function(img){srcObserver.observe(img,{attributes:true,attributeFilter:['src']})});

  /* Pause decorative animation work while the tab is hidden. */
  document.addEventListener('visibilitychange',function(){
    document.documentElement.classList.toggle('page-hidden',document.hidden);
  });
})();
</script>`;

html = html.replace(/<script id="wavex-cinematic-performance-script">[\s\S]*?<\/script>/, '');
html = html.replace('</body>', performanceScript + '\n</body>');

fs.writeFileSync(file, html);
console.log('Applied full-site cinematic responsive media and performance optimisation.');