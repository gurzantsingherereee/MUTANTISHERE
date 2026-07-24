const fs = require('fs');

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

const styles = `
<style id="wavex-final-image-frame-fix">
  /*
    Final full-site media contract.
    Every normal image uses its own canvas ratio, remains completely visible,
    and cannot be enlarged or cropped by earlier desktop/mobile rules.
  */

  img {
    max-width: 100%;
  }

  .slot,
  .ds-visual,
  .comparison .slot,
  .signature-visual {
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
  }

  .slot.asset-ratio-frame,
  .comparison .slot.asset-ratio-frame,
  .signature-visual.asset-ratio-frame {
    display: block !important;
    width: 100% !important;
    height: auto !important;
    min-height: 0 !important;
    max-height: none !important;
    aspect-ratio: var(--asset-ratio, 16 / 10) !important;
    padding: 0 !important;
    background: #0b0b09;
  }

  .slot.asset-ratio-frame > img,
  .comparison .slot.asset-ratio-frame > img,
  .signature-visual.asset-ratio-frame > img {
    position: absolute !important;
    inset: 0 !important;
    display: block !important;
    width: 100% !important;
    height: 100% !important;
    min-width: 0 !important;
    min-height: 0 !important;
    max-width: 100% !important;
    max-height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    object-fit: contain !important;
    object-position: center center !important;
    transform: none !important;
    scale: 1 !important;
  }

  /* Remove duplicate blurred image layers that can make the artwork appear cropped. */
  .slot.asset-ratio-frame.cinematic-media::after,
  .comparison .slot.asset-ratio-frame.cinematic-media::after,
  .signature-visual.asset-ratio-frame.cinematic-media::after {
    display: none !important;
  }

  /* Atmospheric full-screen areas intentionally fill the viewport. */
  .hero-bg,
  .final-bg,
  .hero-composite-slot {
    overflow: hidden;
  }

  .hero-bg img,
  .final-bg img,
  .hero-composite-slot > img {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    max-width: none !important;
    max-height: none !important;
    object-fit: cover !important;
  }

  /* Design Strategy images are all authored at 2400 × 1600. */
  .ds-experience {
    min-height: 0 !important;
    align-items: stretch;
  }

  .ds-visual {
    width: 100% !important;
    height: auto !important;
    min-height: 0 !important;
    max-height: none !important;
    aspect-ratio: 3 / 2 !important;
    background: #090907;
  }

  .ds-image {
    position: absolute !important;
    inset: 0 !important;
    display: block;
    width: 100% !important;
    height: 100% !important;
    min-width: 0 !important;
    min-height: 0 !important;
    max-width: 100% !important;
    max-height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    object-fit: contain !important;
    object-position: center center !important;
    transform: none !important;
    scale: 1 !important;
  }

  .ds-image.active {
    transform: none !important;
    scale: 1 !important;
  }

  .ds-visual.cinematic-media::after {
    display: none !important;
  }

  .ds-visual-shade {
    background:
      linear-gradient(180deg, rgba(0,0,0,.15), transparent 28%, transparent 68%, rgba(0,0,0,.48)),
      linear-gradient(90deg, transparent 72%, rgba(0,0,0,.07));
  }

  .ds-visual-topline {
    top: clamp(12px, 2vw, 24px);
    left: clamp(12px, 2vw, 26px);
    right: clamp(12px, 2vw, 26px);
  }

  .ds-visual-caption {
    left: clamp(12px, 2vw, 28px);
    right: clamp(12px, 2vw, 28px);
    bottom: clamp(12px, 2vw, 24px);
    font-size: clamp(2rem, 6vw, 6rem);
  }

  /* Big Idea is a 16:9 master image on every screen. */
  .big-idea-responsive,
  .slot.asset-5-frame {
    width: 100% !important;
    height: auto !important;
    min-height: 0 !important;
    max-height: none !important;
    aspect-ratio: 16 / 9 !important;
  }

  /* Stop all hover, parallax and touch transforms from moving images outside frames. */
  .slot.asset-ratio-frame:hover > img,
  .slot.has-image:hover > img,
  .ds-visual:hover > .ds-image,
  .signature-visual:hover > img,
  .comparison .slot:hover > img {
    transform: none !important;
    scale: 1 !important;
  }

  .mood-grid,
  .panel-grid,
  .production-grid,
  .anatomy-grid,
  .inbox-grid,
  .pdp-grid,
  .document-grid {
    align-items: start;
  }

  @media (max-width: 980px) {
    .ds-experience {
      grid-template-columns: 1fr !important;
    }

    .ds-visual {
      aspect-ratio: 3 / 2 !important;
    }
  }

  @media (max-width: 680px) {
    .ds-visual,
    .ds-experience .ds-visual {
      width: 100% !important;
      height: auto !important;
      min-height: 0 !important;
      aspect-ratio: 3 / 2 !important;
      border-radius: 0;
    }

    .ds-visual-caption {
      font-size: clamp(1.8rem, 12vw, 4rem);
    }

    .slot.asset-ratio-frame,
    .comparison .slot.asset-ratio-frame,
    .signature-visual.asset-ratio-frame {
      width: 100% !important;
      height: auto !important;
      min-height: 0 !important;
      max-height: none !important;
      aspect-ratio: var(--asset-ratio, 16 / 10) !important;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .slot.asset-ratio-frame > img,
    .ds-image,
    .signature-visual > img {
      transition: none !important;
      animation: none !important;
    }
  }
</style>`;

const script = `
<script id="wavex-final-image-frame-script">
(function(){
  /* Ratios are applied before load to avoid layout jumps. Natural dimensions
     replace these values after load, so future replacement images also fit. */
  const ratios={
    2:[2200,3200],3:[2200,3000],4:[2200,3000],5:[2560,1440],6:[2400,1600],
    7:[2000,1500],8:[1600,2000],9:[1600,1600],10:[1600,1600],11:[1600,2000],12:[2000,1500],
    13:[2048,2048],14:[2048,2048],15:[2048,2048],16:[2400,1200],17:[2000,2800],18:[2200,3300],
    19:[2200,3200],20:[2600,1800],21:[1600,2000],22:[1600,2000],23:[1600,2000],24:[1600,2000],
    25:[2200,3300],26:[2600,1800],27:[2200,2200],28:[2200,2200],29:[2560,1440],30:[2560,1440],
    31:[2560,1440],32:[2560,1440],33:[2560,1440],34:[2560,1440],35:[2400,1600],36:[2400,1600],
    37:[2400,1600],38:[2200,2200],39:[2200,2200],40:[2200,2200],41:[2200,1600],42:[2200,1600],
    43:[2200,1600],44:[2200,1600],45:[2200,1600],46:[2200,1600],47:[2000,2000],48:[2000,2000],
    49:[2000,2000],50:[2000,2000],51:[2000,2000],52:[2000,2000],53:[2000,2000],54:[2000,2000],
    55:[2000,2000],56:[2000,2000],57:[2000,1500],58:[2000,1500],59:[2000,1500],60:[2000,1500],
    61:[2000,1500],62:[2000,1500],63:[2560,1440]
  };

  function isAtmospheric(img){
    return !!img.closest('.hero-bg,.final-bg,.hero-composite-slot');
  }

  function holderFor(img){
    return img.closest('.slot,.signature-visual,.comparison .slot');
  }

  function setRatio(holder,width,height){
    if(!holder||!width||!height)return;
    holder.style.setProperty('--asset-ratio',String(width)+' / '+String(height));
    holder.classList.add('asset-ratio-frame','image-frame-ready');
  }

  function prepare(img){
    if(isAtmospheric(img))return;

    if(img.classList.contains('ds-image')){
      const ds=img.closest('.ds-visual');
      if(ds)ds.classList.add('image-frame-ready');
      img.style.objectPosition='center center';
      return;
    }

    const holder=holderFor(img);
    if(!holder)return;

    const asset=Number(img.dataset.assetNumber||'');
    if(asset===5)holder.classList.add('asset-5-frame');
    if(ratios[asset])setRatio(holder,ratios[asset][0],ratios[asset][1]);

    const applyNatural=function(){
      if(img.naturalWidth>0&&img.naturalHeight>0){
        setRatio(holder,img.naturalWidth,img.naturalHeight);
      }
      img.style.objectPosition='center center';
      img.style.transform='none';
    };

    img.addEventListener('load',applyNatural,{passive:true});
    if(img.complete&&img.naturalWidth>0)applyNatural();
  }

  document.querySelectorAll('.slot img,.ds-image,.signature-visual img,.comparison img').forEach(prepare);

  /* Feature/manual viewers replace src at runtime; recalculate their frame. */
  const observer=new MutationObserver(function(records){
    records.forEach(function(record){
      if(record.type==='attributes'&&record.target.tagName==='IMG')prepare(record.target);
    });
  });

  document.querySelectorAll('.slot img,.ds-image,.signature-visual img,.comparison img').forEach(function(img){
    observer.observe(img,{attributes:true,attributeFilter:['src']});
  });
})();
</script>`;

html = html.replace(/<style id="wavex-final-image-frame-fix">[\s\S]*?<\/style>/, '');
html = html.replace(/<script id="wavex-final-image-frame-script">[\s\S]*?<\/script>/, '');
html = html.replace('</head>', styles + '\n</head>');
html = html.replace('</body>', script + '\n</body>');

fs.writeFileSync(file, html);
console.log('Applied exact-ratio full-visibility framing to every website image.');
