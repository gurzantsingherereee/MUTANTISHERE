const fs = require('fs');

const sourcePaths = [
  'assets/hero/hero-bg-desktop.webp',
  'assets/hero/hero-10w-box.png',
  'assets/hero/hero-speaker.png',
  'assets/product/product-three-quarter.png',
  'assets/lifestyle/big-idea-campsite.webp',
  'assets/product/strategy-product-macro.webp',
  'assets/moodboard/mountain.webp',
  'assets/moodboard/campfire.webp',
  'assets/moodboard/mesh.webp',
  'assets/moodboard/rock.webp',
  'assets/moodboard/compass.webp',
  'assets/moodboard/route.webp',
  'assets/textures/mesh.webp',
  'assets/textures/rock.webp',
  'assets/textures/distress.png',
  'assets/icons/route-pattern.svg',
  'assets/packaging/5w/5w-box-front-three-quarter.png',
  'assets/packaging/10w/10w-box-front-three-quarter.png',
  'assets/packaging/5w/5w-box-hero.png',
  'assets/packaging/5w/5w-dieline-artwork.webp',
  'assets/packaging/5w/5w-front-panel.webp',
  'assets/packaging/5w/5w-lifestyle-panel.webp',
  'assets/packaging/5w/5w-story-panel.webp',
  'assets/packaging/5w/5w-feature-panel.webp',
  'assets/packaging/10w/10w-box-hero.png',
  'assets/packaging/10w/10w-dieline-artwork.webp',
  'assets/packaging/family/comparison-5w.png',
  'assets/packaging/family/comparison-10w.png',
  'assets/features/feature-sound.webp',
  'assets/features/feature-360.webp',
  'assets/features/feature-splash.webp',
  'assets/features/feature-playback.webp',
  'assets/features/feature-rgb.webp',
  'assets/features/feature-portable.webp',
  'assets/lifestyle/morning.webp',
  'assets/lifestyle/day.webp',
  'assets/lifestyle/night.webp',
  'assets/product/product-front.png',
  'assets/product/product-top.png',
  'assets/product/product-side.png',
  'assets/manual/manual-cover.png',
  'assets/manual/manual-welcome.png',
  'assets/manual/manual-controls.png',
  'assets/manual/manual-pairing.png',
  'assets/manual/manual-care.png',
  'assets/manual/manual-specifications.png',
  'assets/in-box/speaker.png',
  'assets/in-box/cable.png',
  'assets/in-box/manual.png',
  'assets/in-box/warranty.png',
  'assets/pdp/pdp-hero.webp',
  'assets/pdp/pdp-360.webp',
  'assets/pdp/pdp-splash.webp',
  'assets/pdp/pdp-playback.webp',
  'assets/pdp/pdp-dimensions.webp',
  'assets/pdp/pdp-inbox.webp',
  'assets/production/front.webp',
  'assets/production/back.webp',
  'assets/production/side.webp',
  'assets/production/angle.webp',
  'assets/production/family.webp',
  'assets/production/detail.webp',
  'assets/packaging/family/final-family.webp'
];

let html = fs.readFileSync('index.html', 'utf8');

sourcePaths.forEach((oldPath, index) => {
  html = html.split(oldPath).join(`assets/images/${index + 1}.png`);
});

html = html
  .replaceAll('onerror="this.remove()"', 'onerror="useImageFallback(this)"')
  .replaceAll('onerror="this.style.display=\'none\'"', 'onerror="useImageFallback(this)"')
  .replace(/<img([^>]*?)src="assets\/images\/(\d+)\.png"([^>]*)>/g, '<img$1src="assets/images/$2.png" data-asset-number="$2"$3>');

const marquee = `
<div class="motion-marquee" aria-hidden="true">
  <div class="motion-marquee-track">
    <span>TAKE IT ANYWHERE</span><i>●</i><span>SOUND THAT MOVES YOU</span><i>●</i><span>DESIGNED FOR EVERY ADVENTURE</span><i>●</i>
    <span>TAKE IT ANYWHERE</span><i>●</i><span>SOUND THAT MOVES YOU</span><i>●</i><span>DESIGNED FOR EVERY ADVENTURE</span><i>●</i>
  </div>
</div>`;

html = html.replace('<section class="section" id="overview">', marquee + '\n<section class="section" id="overview">');

const signatureAndDocuments = `
<section class="section signature-section" id="campaign-visual">
  <div class="container signature-grid">
    <div class="signature-copy motion-card">
      <p class="section-label">19 · Campaign Key Visual</p>
      <h2 class="heading">Take the product promise into a bold retail moment.</h2>
      <p class="lead">A graphic-led composition where the product, orange loop and vertical RGB strip become the centre of the campaign language.</p>
      <div class="signature-line"><span></span><b>Product signature</b></div>
    </div>
    <div class="slot contain signature-visual motion-card">
      <img src="assets/images/64.png" data-asset-number="64" alt="WAVEX Take It Anywhere campaign visual" onerror="useImageFallback(this)">
      <div class="slot-copy"><strong>Campaign key visual</strong><span>Use the supplied product artwork</span><small>White or cream background, product centred, no placeholder text after upload.</small></div>
      <div class="slot-path">assets/images/64.png</div>
    </div>
  </div>
</section>

<section class="section document-section" id="documents">
  <div class="container">
    <p class="section-label">20 · Project Documents</p>
    <h2 class="heading">Artwork, structure and user experience in one place.</h2>
    <div class="document-grid">
      <a class="document-card motion-card" href="pdf/WAVEX-5W-Packaging.pdf" target="_blank" rel="noreferrer">
        <span>01</span><strong>WAVEX 5W Packaging</strong><small>Artwork + structural dieline</small><b>Open PDF ↗</b>
      </a>
      <a class="document-card motion-card" href="pdf/WAVEX-10W-Packaging.pdf" target="_blank" rel="noreferrer">
        <span>02</span><strong>WAVEX 10W Packaging</strong><small>110 × 110 × 210 mm master</small><b>Open PDF ↗</b>
      </a>
      <a class="document-card motion-card" href="pdf/WAVEX-User-Manual.pdf" target="_blank" rel="noreferrer">
        <span>03</span><strong>WAVEX User Manual</strong><small>Controls, pairing, care and details</small><b>Open PDF ↗</b>
      </a>
    </div>
  </div>
</section>`;

html = html.replace('<section class="section final" id="outcome">', signatureAndDocuments + '\n<section class="section final" id="outcome">');

const headInjection = `
<style>
  .asset-file-tag{display:none!important}
  .slot.has-image .slot-copy,.slot.has-image .slot-path{display:none!important}
  .slot.has-image{border-color:transparent}
  .hero-layer.has-image{border-color:transparent;background:transparent;color:transparent}
  .slot img{transition:transform 1s cubic-bezier(.16,1,.3,1),filter .6s ease;will-change:transform}
  .slot.has-image:hover img{transform:scale(1.035)}
  .hero-bg img,.final-bg img{will-change:transform;transform:scale(1.05)}
  .hero-box{animation:wavexFloat 6s ease-in-out infinite}
  .hero-product{animation:wavexFloat 5s ease-in-out -1.2s infinite}
  .hero-product:after{content:"";position:absolute;inset:15% 28%;border-radius:999px;background:rgba(241,90,0,.16);filter:blur(35px);z-index:-1;animation:wavexPulse 3s ease-in-out infinite}
  .hero-wave{position:absolute;inset:auto 0 18%;z-index:1;height:120px;opacity:.28;pointer-events:none;overflow:hidden}
  .hero-wave:before,.hero-wave:after{content:"";position:absolute;left:-10%;width:120%;height:1px;top:50%;background:linear-gradient(90deg,transparent,var(--orange),transparent);box-shadow:0 -18px 0 rgba(241,90,0,.35),0 18px 0 rgba(241,90,0,.2);animation:waveTravel 7s linear infinite}
  .hero-wave:after{top:62%;opacity:.5;animation-duration:11s;animation-direction:reverse}
  .motion-marquee{overflow:hidden;border-block:1px solid var(--line);background:#0d0d0b;padding:18px 0}
  .motion-marquee-track{width:max-content;display:flex;align-items:center;gap:26px;animation:marquee 28s linear infinite;font-family:"Arial Narrow",Impact,sans-serif;font-size:clamp(2rem,5vw,4.8rem);font-weight:900;letter-spacing:-.05em;line-height:1;text-transform:uppercase;color:transparent;-webkit-text-stroke:1px rgba(238,231,220,.42)}
  .motion-marquee-track i{color:var(--orange);font-style:normal;font-size:.34em;-webkit-text-stroke:0}
  .motion-card{opacity:0;transform:translateY(55px) scale(.975);transition:opacity .85s cubic-bezier(.16,1,.3,1),transform .85s cubic-bezier(.16,1,.3,1)}
  .motion-card.motion-in{opacity:1;transform:none}
  .signature-section{background:linear-gradient(135deg,#eee7dc,#d8cec0);color:#17130f;overflow:hidden}
  .signature-section .section-label{color:#a33b00}.signature-section .lead{color:#5f574e}
  .signature-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:clamp(24px,6vw,90px);align-items:center}
  .signature-copy{position:relative;z-index:2}.signature-copy .heading{font-size:clamp(2.8rem,6vw,6rem)}
  .signature-visual{min-height:720px;background:#f7f3ed;border-color:rgba(0,0,0,.14);box-shadow:0 45px 110px rgba(61,41,23,.18)}
  .signature-visual img{object-fit:contain!important;background:#f7f3ed!important;padding:clamp(18px,4vw,54px)}
  .signature-line{display:flex;align-items:center;gap:16px;margin-top:34px;text-transform:uppercase;font:700 .72rem ui-monospace,monospace;letter-spacing:.12em;color:#a33b00}
  .signature-line span{width:90px;height:2px;background:#f15a00;animation:lineBreath 2.8s ease-in-out infinite}
  .document-section{background:#0d0d0b}
  .document-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:54px}
  .document-card{min-height:330px;display:flex;flex-direction:column;padding:30px;border:1px solid var(--line);border-radius:var(--radius);background:linear-gradient(145deg,rgba(255,255,255,.045),rgba(255,255,255,.015));transition:border-color .3s ease,background .3s ease,transform .3s ease}
  .document-card:hover{border-color:rgba(241,90,0,.75);background:linear-gradient(145deg,rgba(241,90,0,.13),rgba(255,255,255,.02));transform:translateY(-8px)}
  .document-card>span{color:var(--orange);font:12px ui-monospace,monospace}.document-card strong{margin:auto 0 12px;font-size:clamp(1.8rem,3vw,3rem);line-height:.95;letter-spacing:-.05em;text-transform:uppercase}.document-card small{color:var(--grey)}.document-card b{margin-top:26px;color:var(--orange);font-size:.8rem}
  a.pdf-missing{opacity:.5;cursor:not-allowed;filter:grayscale(.4)}
  a.pdf-missing:hover{transform:none!important;border-color:var(--line)!important;background:rgba(255,255,255,.03)!important}
  a.pdf-missing b{color:#ff9b73!important}
  .section:after{content:"";position:absolute;left:50%;bottom:0;width:min(1240px,calc(100vw - 44px));height:1px;background:linear-gradient(90deg,transparent,var(--line),transparent);transform:translateX(-50%)}
  .cursor-glow{position:fixed;left:0;top:0;width:420px;height:420px;border-radius:50%;z-index:0;pointer-events:none;background:radial-gradient(circle,rgba(241,90,0,.075),transparent 66%);transform:translate(-50%,-50%);will-change:transform}
  @keyframes wavexFloat{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-14px) rotate(.7deg)}}
  @keyframes wavexPulse{0%,100%{opacity:.45;transform:scale(.9)}50%{opacity:1;transform:scale(1.15)}}
  @keyframes waveTravel{0%{transform:translateX(-8%) skewY(-2deg)}50%{transform:translateX(8%) skewY(2deg)}100%{transform:translateX(-8%) skewY(-2deg)}}
  @keyframes marquee{to{transform:translateX(-50%)}}
  @keyframes lineBreath{0%,100%{transform:scaleX(.55);transform-origin:left}50%{transform:scaleX(1)}}
  @media(max-width:980px){.signature-grid,.document-grid{grid-template-columns:1fr}.signature-visual{min-height:560px}.document-card{min-height:240px}}
  @media(prefers-reduced-motion:reduce){.hero-box,.hero-product,.hero-product:after,.hero-wave:before,.hero-wave:after,.motion-marquee-track,.signature-line span{animation:none!important}.motion-card{opacity:1;transform:none}.cursor-glow{display:none}}
</style>
<script>
  function markImageReady(img){
    const holder=img.closest('.slot,.hero-layer');
    if(holder) holder.classList.add('has-image');
  }
  function useImageFallback(img){
    const src=img.getAttribute('src')||'';
    const match=src.match(/assets\\/images\\/(\\d+)\\.png/);
    if(match && !img.dataset.fallbackApplied){
      img.dataset.assetNumber=match[1];
      img.dataset.fallbackApplied='true';
      img.src='https://picsum.photos/seed/wavex-'+match[1]+'/1600/1100';
      return;
    }
    img.style.display='none';
  }
</script>`;

const bodyInjection = `
<div class="cursor-glow" id="cursorGlow" aria-hidden="true"></div>
<script>
  (function(){
    document.querySelectorAll('.asset-file-tag').forEach(function(tag){tag.remove();});
    document.querySelectorAll('.slot img,.hero-layer img').forEach(function(img){
      img.addEventListener('load',function(){markImageReady(img);});
      if(img.complete&&img.naturalWidth>0) markImageReady(img);
    });

    document.querySelectorAll('a[href$=".pdf"]').forEach(function(link){
      const url=link.getAttribute('href');
      fetch(url,{method:'HEAD',cache:'no-store'}).then(function(response){
        if(!response.ok) throw new Error('PDF missing');
      }).catch(function(){
        link.classList.add('pdf-missing');
        link.setAttribute('aria-disabled','true');
        link.setAttribute('title','This PDF has not been uploaded to GitHub yet.');
        const label=link.querySelector('b');
        if(label) label.textContent='PDF not uploaded';
        link.addEventListener('click',function(event){
          event.preventDefault();
          alert('This PDF has not been uploaded yet. Add it to the pdf folder using the exact filename shown in the repository instructions.');
        });
      });
    });

    const hero=document.querySelector('.hero');
    if(hero&&!hero.querySelector('.hero-wave')){
      const wave=document.createElement('div');wave.className='hero-wave';hero.appendChild(wave);
    }

    const cards=document.querySelectorAll('.slot,.document-card,.signature-copy');
    const motionObserver=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('motion-in');motionObserver.unobserve(entry.target);}});
    },{threshold:.12});
    cards.forEach(function(card){card.classList.add('motion-card');motionObserver.observe(card);});

    let ticking=false;
    function parallax(){
      const y=window.scrollY||0;
      const heroImage=document.querySelector('.hero-bg img');
      const finalImage=document.querySelector('.final-bg img');
      if(heroImage) heroImage.style.transform='scale(1.07) translate3d(0,'+(y*.09)+'px,0)';
      if(finalImage){
        const rect=document.querySelector('.final')?.getBoundingClientRect();
        if(rect) finalImage.style.transform='scale(1.06) translate3d(0,'+(-rect.top*.035)+'px,0)';
      }
      ticking=false;
    }
    window.addEventListener('scroll',function(){if(!ticking){requestAnimationFrame(parallax);ticking=true;}},{passive:true});
    parallax();

    const glow=document.getElementById('cursorGlow');
    window.addEventListener('pointermove',function(event){
      if(glow) glow.style.transform='translate3d('+(event.clientX-210)+'px,'+(event.clientY-210)+'px,0)';
    },{passive:true});

    document.querySelectorAll('.strategy .slot,.packaging-hero .slot,.family-item .slot,.signature-visual').forEach(function(card){
      card.addEventListener('pointermove',function(event){
        const rect=card.getBoundingClientRect();
        const rx=((event.clientY-rect.top)/rect.height-.5)*-4;
        const ry=((event.clientX-rect.left)/rect.width-.5)*5;
        card.style.transform='perspective(1100px) rotateX('+rx+'deg) rotateY('+ry+'deg)';
      });
      card.addEventListener('pointerleave',function(){card.style.transform='';});
    });
  })();
</script>`;

html = html.replace('</head>', headInjection + '\n</head>');
html = html.replace('</body>', bodyInjection + '\n</body>');

fs.writeFileSync('index.html', html);
console.log('Prepared 64 numbered image slots, motion effects, PDF status checks and project-document links.');
