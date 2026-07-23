const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const heroMarkup = `
<section class="hero hero-composite" id="hero">
  <div class="hero-bg hero-composite-bg">
    <div class="slot hero-composite-slot" style="position:absolute;inset:0;min-height:100%;border:0;border-radius:0">
      <img src="assets/images/1.png" data-asset-number="1" alt="WAVEX speaker and packaging in a mountain sunset environment" onerror="useImageFallback(this)">
      <div class="slot-copy">
        <strong>Complete hero composition</strong>
        <span>2560 × 1440 · PNG</span>
        <small>Mountain background, WAVEX packaging and speaker combined into one image; left side reserved for HTML copy.</small>
      </div>
    </div>
  </div>

  <div class="container hero-content">
    <div class="hero-copy-panel">
      <p class="section-label reveal">Consumer electronics · Packaging · Art direction</p>
      <h1 class="display reveal"><span>Take It</span><span class="outline">Anywhere</span></h1>
      <div class="hero-bottom reveal">
        <p>A portable speaker identity built around movement, memory and outdoor experience.</p>
        <div class="hero-meta">
          <span><b>Project</b>WAVEX Speaker</span>
          <span><b>Formats</b>5W / 10W</span>
          <span><b>Role</b>Creative Direction</span>
        </div>
      </div>
    </div>
  </div>
</section>`;

html = html.replace(/<section class="hero" id="hero">[\s\S]*?<\/section>/, heroMarkup);

const heroStyles = `
<style id="wavex-hero-composite-fix">
  .hero-composite{min-height:100svh;display:flex;align-items:flex-end;overflow:hidden;padding:150px 0 64px;background:#080807}
  .hero-composite-bg{position:absolute;inset:0;overflow:hidden;background:#080807}
  .hero-composite-slot{background:#080807!important}
  .hero-composite-slot img{width:100%;height:100%;object-fit:cover;object-position:center center;transform:scale(1.01)!important;filter:brightness(1.08) saturate(1.02) contrast(1.02)}

  /* Warm product light: lifts the lower-right package and speaker without washing out the scene. */
  .hero-composite-slot:before{content:"";position:absolute;inset:0;z-index:1;background:radial-gradient(circle at 79% 64%,rgba(255,169,91,.30) 0%,rgba(255,111,38,.17) 19%,rgba(241,90,0,.07) 34%,transparent 52%);mix-blend-mode:screen;pointer-events:none}

  /* Keep the text side dark, but remove the heavy black veil from the product foreground. */
  .hero-composite-slot:after{content:"";position:absolute;inset:0;z-index:2;background:linear-gradient(90deg,rgba(5,8,10,.96) 0%,rgba(5,8,10,.82) 27%,rgba(5,8,10,.30) 49%,rgba(5,8,10,.03) 70%),linear-gradient(0deg,rgba(8,8,7,.48) 0%,rgba(8,8,7,.16) 18%,transparent 36%);pointer-events:none}

  .hero-composite .hero-content{position:relative;z-index:4;width:var(--container)}
  .hero-copy-panel{width:min(49%,670px);padding:32px 0 6px}
  .hero-composite .display{max-width:650px;font-size:clamp(5rem,8.2vw,9.4rem);line-height:.82;letter-spacing:-.075em}
  .hero-composite .display span{display:block}
  .hero-composite .hero-bottom{grid-template-columns:1fr;gap:25px;margin-top:38px;max-width:560px}
  .hero-composite .hero-bottom>p{max-width:540px;margin:0;color:#d1c9bf;font-size:clamp(1rem,1.35vw,1.16rem)}
  .hero-composite .hero-meta{justify-content:flex-start;gap:26px;padding-top:21px;border-top:1px solid rgba(255,255,255,.13)}
  .hero-composite .section-label{margin-bottom:30px}
  .hero-composite .hero-wave{opacity:.10;bottom:10%}
  .hero-composite .slot.has-image:hover img{transform:scale(1.01)!important}

  @media(max-width:1100px){
    .hero-copy-panel{width:min(57%,620px)}
    .hero-composite .display{font-size:clamp(4.7rem,9vw,7.4rem)}
    .hero-composite-slot img{object-position:62% center;filter:brightness(1.1) saturate(1.02) contrast(1.01)}
    .hero-composite-slot:before{background:radial-gradient(circle at 77% 63%,rgba(255,169,91,.32) 0%,rgba(255,111,38,.17) 22%,transparent 50%)}
  }

  @media(max-width:760px){
    .hero-composite{min-height:920px;align-items:flex-start;padding:145px 0 45px}
    .hero-composite-slot img{object-position:69% center;filter:brightness(.88) saturate(1) contrast(1.03)}
    .hero-composite-slot:before{background:radial-gradient(circle at 72% 66%,rgba(255,150,72,.28) 0%,rgba(241,90,0,.12) 30%,transparent 55%)}
    .hero-composite-slot:after{background:linear-gradient(180deg,rgba(5,8,10,.90) 0%,rgba(5,8,10,.62) 31%,rgba(5,8,10,.08) 60%,rgba(5,8,10,.42) 100%),linear-gradient(90deg,rgba(5,8,10,.68),transparent 72%)}
    .hero-copy-panel{width:100%;padding:18px 0 0}
    .hero-composite .display{max-width:100%;font-size:clamp(4.2rem,19vw,7rem)}
    .hero-composite .hero-bottom{max-width:90%;margin-top:28px}
    .hero-composite .hero-meta{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px 18px}
    .hero-composite .section-label{max-width:290px;line-height:1.5}
  }

  @media(max-width:480px){
    .hero-composite{min-height:860px}
    .hero-composite .display{font-size:clamp(3.8rem,20vw,5.7rem)}
    .hero-composite .hero-bottom>p{font-size:.95rem}
    .hero-composite .hero-meta{font-size:.68rem}
  }
</style>`;

html = html.replace('</head>', heroStyles + '\n</head>');

fs.writeFileSync('index.html', html);
console.log('Rebuilt the hero with improved foreground light and clearer packaging visibility.');
