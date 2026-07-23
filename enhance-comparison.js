const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const comparisonStyles = String.raw`
<style id="wavex-comparison-enhancement">
  .comparison-lab{
    --split:50%;
    position:relative;
    min-height:0!important;
    overflow:visible!important;
    margin-top:54px;
    border-radius:0!important;
    background:transparent!important;
  }

  .comparison-toolbar{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:18px;
    margin-bottom:18px;
    padding:10px;
    border:1px solid var(--line);
    border-radius:999px;
    background:rgba(255,255,255,.035);
    backdrop-filter:blur(14px);
  }

  .comparison-mode-switch{
    display:flex;
    gap:8px;
  }

  .comparison-mode-button{
    min-height:42px;
    padding:0 18px;
    border:1px solid transparent;
    border-radius:999px;
    color:var(--grey);
    background:transparent;
    cursor:pointer;
    transition:color .25s ease,background .25s ease,border-color .25s ease,transform .25s ease;
  }

  .comparison-mode-button:hover{
    color:var(--cream);
    transform:translateY(-1px);
  }

  .comparison-mode-button.active{
    color:#111;
    border-color:var(--orange);
    background:var(--orange);
  }

  .comparison-toolbar-note{
    padding-right:12px;
    color:var(--grey);
    font:700 .68rem ui-monospace,monospace;
    letter-spacing:.1em;
    text-transform:uppercase;
  }

  .comparison-stage-premium{
    position:relative;
    overflow:hidden;
    min-height:680px;
    border:1px solid var(--line);
    border-radius:var(--radius);
    background:
      radial-gradient(circle at 50% 18%,rgba(241,90,0,.12),transparent 30rem),
      linear-gradient(145deg,#171611,#0c0c0a 72%);
    box-shadow:0 40px 120px rgba(0,0,0,.32);
  }

  .comparison-stage-premium:before{
    content:"";
    position:absolute;
    inset:0;
    pointer-events:none;
    background:
      linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),
      linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);
    background-size:40px 40px;
    mask-image:linear-gradient(to bottom,black,transparent 88%);
  }

  .comparison-side-view{
    position:relative;
    z-index:2;
    min-height:680px;
    display:grid;
    grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);
    gap:26px;
    align-items:end;
    padding:clamp(24px,4vw,54px);
  }

  .comparison-product-card{
    position:relative;
    min-width:0;
    display:flex;
    flex-direction:column;
    align-self:stretch;
    padding:18px;
    border:1px solid rgba(255,255,255,.1);
    border-radius:22px;
    background:linear-gradient(160deg,rgba(255,255,255,.055),rgba(255,255,255,.015));
    transition:transform .45s cubic-bezier(.16,1,.3,1),border-color .35s ease,background .35s ease;
  }

  .comparison-product-card:hover{
    transform:translateY(-8px);
    border-color:rgba(241,90,0,.55);
    background:linear-gradient(160deg,rgba(241,90,0,.11),rgba(255,255,255,.018));
  }

  .comparison-card-header{
    display:flex;
    align-items:flex-start;
    justify-content:space-between;
    gap:16px;
    padding:8px 8px 18px;
  }

  .comparison-card-kicker{
    display:block;
    margin-bottom:7px;
    color:var(--orange);
    font:700 .68rem ui-monospace,monospace;
    letter-spacing:.12em;
    text-transform:uppercase;
  }

  .comparison-card-title{
    margin:0;
    font-family:"Arial Narrow",Impact,sans-serif;
    font-size:clamp(2rem,4vw,4.2rem);
    line-height:.86;
    letter-spacing:-.06em;
    text-transform:uppercase;
  }

  .comparison-card-badge{
    flex:0 0 auto;
    padding:8px 10px;
    border:1px solid var(--line);
    border-radius:999px;
    color:var(--grey);
    font:700 .62rem ui-monospace,monospace;
    letter-spacing:.08em;
    text-transform:uppercase;
  }

  .comparison-media{
    position:relative;
    flex:1;
    min-height:470px;
    overflow:hidden;
    display:grid;
    place-items:center;
    border-radius:17px;
    background:radial-gradient(circle at 50% 45%,rgba(241,90,0,.12),rgba(0,0,0,.18) 58%,rgba(0,0,0,.34));
  }

  .comparison-media img{
    width:100%;
    height:100%;
    object-fit:contain;
    padding:clamp(18px,3vw,42px);
    filter:drop-shadow(0 30px 38px rgba(0,0,0,.45));
    transition:transform .7s cubic-bezier(.16,1,.3,1),filter .4s ease;
  }

  .comparison-product-card:hover .comparison-media img{
    transform:scale(1.045) translateY(-4px);
    filter:drop-shadow(0 40px 48px rgba(0,0,0,.58));
  }

  .comparison-media-placeholder{
    position:absolute;
    inset:auto 16px 16px;
    color:var(--grey);
    font:700 .65rem ui-monospace,monospace;
    letter-spacing:.08em;
    text-transform:uppercase;
    text-align:center;
  }

  .comparison-media.has-image .comparison-media-placeholder{
    display:none;
  }

  .comparison-card-footer{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:14px;
    padding:18px 8px 6px;
    color:var(--grey);
    font-size:.8rem;
  }

  .comparison-card-footer strong{
    color:var(--cream);
    font-weight:700;
  }

  .comparison-ruler-premium{
    align-self:stretch;
    min-width:84px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:14px;
    color:var(--orange);
    font:700 .62rem ui-monospace,monospace;
    letter-spacing:.12em;
    text-transform:uppercase;
  }

  .comparison-ruler-line{
    position:relative;
    width:1px;
    flex:1;
    min-height:360px;
    background:linear-gradient(to bottom,transparent,var(--orange) 18%,var(--orange) 82%,transparent);
  }

  .comparison-ruler-line:before,
  .comparison-ruler-line:after{
    content:"";
    position:absolute;
    left:50%;
    width:16px;
    height:1px;
    background:var(--orange);
    transform:translateX(-50%);
  }

  .comparison-ruler-line:before{top:18%}
  .comparison-ruler-line:after{bottom:18%}

  .comparison-ruler-dot{
    width:11px;
    height:11px;
    border:2px solid var(--orange);
    border-radius:50%;
    box-shadow:0 0 22px rgba(241,90,0,.7);
    animation:comparisonPulse 2.8s ease-in-out infinite;
  }

  .comparison-overlay-view{
    position:relative;
    z-index:2;
    min-height:680px;
    display:none;
    overflow:hidden;
  }

  .comparison-lab.mode-overlay .comparison-side-view{display:none}
  .comparison-lab.mode-overlay .comparison-overlay-view{display:block}

  .comparison-overlay-layer{
    position:absolute;
    inset:0;
    display:grid;
    place-items:center;
    overflow:hidden;
  }

  .comparison-overlay-layer:before{
    content:"";
    position:absolute;
    inset:0;
    background:radial-gradient(circle at 50% 50%,rgba(241,90,0,.1),transparent 38%);
  }

  .comparison-overlay-layer img{
    position:relative;
    z-index:1;
    width:100%;
    height:100%;
    object-fit:contain;
    padding:clamp(52px,8vw,105px);
    filter:drop-shadow(0 38px 45px rgba(0,0,0,.55));
  }

  .comparison-overlay-layer.is-top{
    clip-path:inset(0 calc(100% - var(--split)) 0 0);
  }

  .comparison-overlay-label{
    position:absolute;
    top:24px;
    z-index:4;
    padding:9px 13px;
    border:1px solid var(--line);
    border-radius:999px;
    background:rgba(8,8,7,.7);
    backdrop-filter:blur(12px);
    color:var(--cream);
    font:700 .68rem ui-monospace,monospace;
    letter-spacing:.09em;
    text-transform:uppercase;
  }

  .comparison-overlay-label.left{left:24px}
  .comparison-overlay-label.right{right:24px}

  .comparison-split-line{
    position:absolute;
    top:0;
    bottom:0;
    left:var(--split);
    z-index:5;
    width:2px;
    background:linear-gradient(to bottom,transparent,var(--orange) 15%,var(--orange) 85%,transparent);
    transform:translateX(-1px);
    pointer-events:none;
  }

  .comparison-split-handle{
    position:absolute;
    top:50%;
    left:50%;
    width:58px;
    height:58px;
    display:grid;
    grid-template-columns:1fr 1fr;
    place-items:center;
    border:1px solid rgba(255,255,255,.22);
    border-radius:50%;
    color:#111;
    background:var(--orange);
    box-shadow:0 12px 35px rgba(0,0,0,.42),0 0 28px rgba(241,90,0,.36);
    transform:translate(-50%,-50%);
    font-weight:900;
  }

  .comparison-slider{
    position:absolute;
    inset:0;
    z-index:8;
    width:100%;
    height:100%;
    margin:0;
    opacity:0;
    cursor:ew-resize;
  }

  .comparison-readout{
    position:absolute;
    left:50%;
    bottom:22px;
    z-index:7;
    display:flex;
    align-items:center;
    gap:10px;
    padding:9px 13px;
    border:1px solid var(--line);
    border-radius:999px;
    color:var(--grey);
    background:rgba(8,8,7,.72);
    backdrop-filter:blur(12px);
    transform:translateX(-50%);
    font:700 .68rem ui-monospace,monospace;
    letter-spacing:.08em;
    text-transform:uppercase;
  }

  .comparison-readout b{color:var(--orange)}

  .comparison-detail-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:12px;
    margin-top:14px;
  }

  .comparison-detail-card{
    min-height:150px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:20px;
    border:1px solid var(--line);
    border-radius:18px;
    background:rgba(255,255,255,.025);
    transition:transform .3s ease,border-color .3s ease,background .3s ease;
  }

  .comparison-detail-card:hover{
    transform:translateY(-5px);
    border-color:rgba(241,90,0,.5);
    background:rgba(241,90,0,.065);
  }

  .comparison-detail-card span{
    color:var(--orange);
    font:700 .62rem ui-monospace,monospace;
    letter-spacing:.11em;
    text-transform:uppercase;
  }

  .comparison-detail-card strong{
    display:block;
    margin-top:24px;
    font-size:1.06rem;
    line-height:1.22;
  }

  .comparison-detail-card small{
    display:block;
    margin-top:6px;
    color:var(--grey);
  }

  @keyframes comparisonPulse{
    0%,100%{transform:scale(.85);opacity:.45}
    50%{transform:scale(1.15);opacity:1}
  }

  @media(max-width:900px){
    .comparison-side-view{
      grid-template-columns:1fr;
      min-height:0;
    }
    .comparison-ruler-premium{
      min-width:0;
      min-height:70px;
      flex-direction:row;
    }
    .comparison-ruler-line{
      width:auto;
      height:1px;
      min-height:0;
      min-width:220px;
      flex:1;
      background:linear-gradient(to right,transparent,var(--orange) 18%,var(--orange) 82%,transparent);
    }
    .comparison-ruler-line:before,
    .comparison-ruler-line:after{
      top:50%;
      width:1px;
      height:16px;
      transform:translateY(-50%);
    }
    .comparison-ruler-line:before{left:18%}
    .comparison-ruler-line:after{left:auto;right:18%}
    .comparison-detail-grid{grid-template-columns:1fr 1fr}
  }

  @media(max-width:640px){
    .comparison-toolbar{
      align-items:flex-start;
      flex-direction:column;
      border-radius:22px;
      padding:12px;
    }
    .comparison-mode-switch{width:100%}
    .comparison-mode-button{flex:1;padding-inline:10px}
    .comparison-toolbar-note{padding:0 8px 4px}
    .comparison-stage-premium,
    .comparison-overlay-view{min-height:520px}
    .comparison-side-view{padding:16px}
    .comparison-product-card{padding:12px}
    .comparison-media{min-height:360px}
    .comparison-card-footer{align-items:flex-start;flex-direction:column}
    .comparison-overlay-layer img{padding:50px 24px 82px}
    .comparison-overlay-label{top:15px}
    .comparison-overlay-label.left{left:15px}
    .comparison-overlay-label.right{right:15px}
    .comparison-detail-grid{grid-template-columns:1fr}
  }

  @media(prefers-reduced-motion:reduce){
    .comparison-ruler-dot{animation:none}
    .comparison-product-card,
    .comparison-media img{transition:none}
  }
</style>`;

const comparisonScript = String.raw`
<script id="wavex-comparison-script">
(function(){
  const comparison=document.querySelector('.comparison');
  if(!comparison || comparison.dataset.enhanced==='true') return;

  comparison.dataset.enhanced='true';
  comparison.classList.add('comparison-lab');
  comparison.classList.remove('comparison');

  comparison.innerHTML=''
    +'<div class="comparison-toolbar">'
      +'<div class="comparison-mode-switch" role="group" aria-label="Packaging comparison view">'
        +'<button class="comparison-mode-button active" type="button" data-comparison-mode="side">Side by side</button>'
        +'<button class="comparison-mode-button" type="button" data-comparison-mode="overlay">Interactive overlay</button>'
      +'</div>'
      +'<span class="comparison-toolbar-note">Same identity · adapted structure</span>'
    +'</div>'
    +'<div class="comparison-stage-premium">'
      +'<div class="comparison-side-view">'
        +'<article class="comparison-product-card">'
          +'<div class="comparison-card-header">'
            +'<div><span class="comparison-card-kicker">Compact format</span><h3 class="comparison-card-title">WAVEX 5W</h3></div>'
            +'<span class="comparison-card-badge">Agile</span>'
          +'</div>'
          +'<div class="comparison-media">'
            +'<img src="assets/images/27.png" alt="WAVEX 5W package comparison" onerror="useImageFallback(this)">'
            +'<span class="comparison-media-placeholder">Add the 5W comparison render</span>'
          +'</div>'
          +'<div class="comparison-card-footer"><span>Condensed hierarchy</span><strong>Compact shelf footprint</strong></div>'
        +'</article>'
        +'<div class="comparison-ruler-premium" aria-hidden="true">'
          +'<span>Scale</span><i class="comparison-ruler-dot"></i><i class="comparison-ruler-line"></i><span>System</span>'
        +'</div>'
        +'<article class="comparison-product-card">'
          +'<div class="comparison-card-header">'
            +'<div><span class="comparison-card-kicker">Expanded format</span><h3 class="comparison-card-title">WAVEX 10W</h3></div>'
            +'<span class="comparison-card-badge">Premium</span>'
          +'</div>'
          +'<div class="comparison-media">'
            +'<img src="assets/images/28.png" alt="WAVEX 10W package comparison" onerror="useImageFallback(this)">'
            +'<span class="comparison-media-placeholder">Add the 10W comparison render</span>'
          +'</div>'
          +'<div class="comparison-card-footer"><span>Expanded hierarchy</span><strong>Stronger shelf presence</strong></div>'
        +'</article>'
      +'</div>'
      +'<div class="comparison-overlay-view">'
        +'<div class="comparison-overlay-layer">'
          +'<img src="assets/images/28.png" alt="WAVEX 10W package overlay" onerror="useImageFallback(this)">'
        +'</div>'
        +'<div class="comparison-overlay-layer is-top">'
          +'<img src="assets/images/27.png" alt="WAVEX 5W package overlay" onerror="useImageFallback(this)">'
        +'</div>'
        +'<span class="comparison-overlay-label left">5W compact</span>'
        +'<span class="comparison-overlay-label right">10W expanded</span>'
        +'<div class="comparison-split-line"><span class="comparison-split-handle">‹ ›</span></div>'
        +'<input class="comparison-slider" type="range" min="0" max="100" value="50" aria-label="Compare 5W and 10W packaging">'
        +'<div class="comparison-readout"><span>Split</span><b>50%</b></div>'
      +'</div>'
    +'</div>'
    +'<div class="comparison-detail-grid">'
      +'<article class="comparison-detail-card"><span>01 · Form</span><div><strong>Compact → Tall</strong><small>One identity adjusted to two physical proportions.</small></div></article>'
      +'<article class="comparison-detail-card"><span>02 · Hierarchy</span><div><strong>Compressed → Expanded</strong><small>Spacing grows while the communication order stays consistent.</small></div></article>'
      +'<article class="comparison-detail-card"><span>03 · Density</span><div><strong>Efficient → Airy</strong><small>The taller format gains more breathing room without losing recognition.</small></div></article>'
      +'<article class="comparison-detail-card"><span>04 · Presence</span><div><strong>Agile → Premium</strong><small>Different shelf impact, unified visual language.</small></div></article>'
    +'</div>';

  const modeButtons=comparison.querySelectorAll('[data-comparison-mode]');
  modeButtons.forEach(function(button){
    button.addEventListener('click',function(){
      modeButtons.forEach(function(item){item.classList.remove('active');});
      button.classList.add('active');
      comparison.classList.toggle('mode-overlay',button.dataset.comparisonMode==='overlay');
    });
  });

  const slider=comparison.querySelector('.comparison-slider');
  const readout=comparison.querySelector('.comparison-readout b');
  if(slider){
    const updateSplit=function(){
      const value=slider.value+'%';
      comparison.style.setProperty('--split',value);
      if(readout) readout.textContent=value;
    };
    slider.addEventListener('input',updateSplit);
    updateSplit();
  }

  comparison.querySelectorAll('.comparison-media img').forEach(function(img){
    const holder=img.closest('.comparison-media');
    const mark=function(){if(holder) holder.classList.add('has-image');};
    img.addEventListener('load',mark);
    if(img.complete&&img.naturalWidth>0) mark();
  });
})();
</script>`;

html = html.replace('</head>', comparisonStyles + '\n</head>');
html = html.replace('</body>', comparisonScript + '\n</body>');

fs.writeFileSync('index.html', html);
console.log('Enhanced the WAVEX packaging comparison section.');
