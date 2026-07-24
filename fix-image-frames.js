const fs = require('fs');

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

const styles = `
<style id="wavex-final-image-frame-fix">
  /* Final image-frame system.
     Lifestyle/editorial imagery fills its frame with no empty bars.
     Product cutouts, packaging and documents stay fully visible. */

  .slot,
  .ds-visual,
  .comparison .slot,
  .signature-visual {
    position: relative;
    overflow: hidden;
    min-width: 0;
  }

  .slot > img,
  .ds-image,
  .comparison .slot > img,
  .signature-visual > img {
    display: block;
    width: 100% !important;
    height: 100% !important;
    max-width: none !important;
    max-height: none !important;
    object-position: center center !important;
    transform: none !important;
  }

  /* Full-bleed lifestyle, feature, moodboard and ecommerce scenes. */
  .media-fill > img,
  .ds-visual > .ds-image {
    object-fit: cover !important;
  }

  /* Product cutouts, packaging, manuals, dielines and comparison assets. */
  .media-fit > img,
  .comparison .slot > img {
    object-fit: contain !important;
  }

  /* Disable the blurred duplicate layer once the real image fills the frame. */
  .media-fill.cinematic-media::after,
  .ds-visual.cinematic-media::after,
  .big-idea-responsive.cinematic-media::after {
    display: none !important;
  }

  /* Big Idea image 5.png is a true 16:9 full-bleed frame. */
  .big-idea-responsive,
  .slot.media-asset-5 {
    width: 100%;
    height: auto !important;
    min-height: 0 !important;
    aspect-ratio: 16 / 9 !important;
    padding: 0 !important;
    background: #090907;
  }

  .big-idea-responsive > img,
  .slot.media-asset-5 > img {
    position: absolute !important;
    inset: 0 !important;
    object-fit: cover !important;
  }

  /* Desktop Design Strategy: image panel stretches to the exact panel height,
     so no blank strip appears above or below the artwork. */
  .ds-experience {
    align-items: stretch !important;
  }

  .ds-visual {
    align-self: stretch !important;
    width: 100%;
    height: 100% !important;
    min-height: 100% !important;
    aspect-ratio: auto !important;
    background: #090907;
  }

  .ds-image {
    position: absolute !important;
    inset: 0 !important;
    object-fit: cover !important;
  }

  .ds-image.active,
  .ds-visual:hover > .ds-image,
  .slot.has-image:hover > img,
  .signature-visual:hover > img {
    transform: none !important;
  }

  /* Keep the visual overlays subtle and fully inside the image. */
  .ds-visual-shade {
    background:
      linear-gradient(180deg, rgba(0,0,0,.14), transparent 28%, transparent 67%, rgba(0,0,0,.54)),
      linear-gradient(90deg, transparent 72%, rgba(0,0,0,.08));
  }

  .ds-visual-topline {
    top: clamp(14px, 2vw, 24px);
    left: clamp(14px, 2vw, 26px);
    right: clamp(14px, 2vw, 26px);
  }

  .ds-visual-caption {
    left: clamp(14px, 2vw, 28px);
    right: clamp(14px, 2vw, 28px);
    bottom: clamp(14px, 2vw, 24px);
    font-size: clamp(2.4rem, 6vw, 6rem);
  }

  /* On stacked tablet/mobile layouts, return the visual to its source 3:2 ratio. */
  @media (max-width: 980px) {
    .ds-experience {
      grid-template-columns: 1fr !important;
      min-height: 0 !important;
    }

    .ds-visual,
    .ds-experience .ds-visual {
      width: 100%;
      height: auto !important;
      min-height: 0 !important;
      aspect-ratio: 3 / 2 !important;
    }
  }

  @media (max-width: 680px) {
    .ds-visual,
    .ds-experience .ds-visual {
      aspect-ratio: 3 / 2 !important;
      border-radius: 0;
    }

    .ds-visual-caption {
      font-size: clamp(2rem, 13vw, 4.2rem);
    }
  }
</style>`;

const script = `
<script id="wavex-final-image-frame-script">
(function(){
  /* Assets designed as immersive full-bleed scenes. */
  const fillAssets = new Set([
    1,5,6,7,8,9,10,11,12,13,14,15,16,
    29,30,31,32,33,34,35,36,37,
    41,42,43,44,45,46,
    51,52,53,54,55,56,
    57,58,59,60,61,62,63,64
  ]);

  /* Assets that must never be cropped. */
  const fitAssets = new Set([
    2,3,4,17,18,19,20,21,22,23,24,25,26,27,28,
    38,39,40,47,48,49,50
  ]);

  function classify(img){
    const holder = img.closest('.slot,.signature-visual');
    if(!holder) return;

    const raw = img.getAttribute('data-asset-number') || '';
    const src = img.getAttribute('src') || '';
    const match = src.match(/assets\/images\/(\d+)\.png/i);
    const number = Number(raw || (match && match[1]) || 0);

    holder.classList.remove('media-fill','media-fit');

    if(number){
      holder.classList.add('media-asset-' + number);
      if(fillAssets.has(number)) holder.classList.add('media-fill');
      else if(fitAssets.has(number)) holder.classList.add('media-fit');
      else holder.classList.add('media-fit');
    } else {
      holder.classList.add('media-fit');
    }

    if(number === 5) holder.classList.add('big-idea-responsive');
  }

  function prepare(){
    document.querySelectorAll('.slot img,.signature-visual img').forEach(classify);
    document.querySelectorAll('.ds-visual').forEach(function(holder){
      holder.classList.add('media-fill');
    });
  }

  prepare();

  const observer = new MutationObserver(function(records){
    records.forEach(function(record){
      if(record.target && record.target.tagName === 'IMG') classify(record.target);
    });
  });

  document.querySelectorAll('.slot img,.signature-visual img').forEach(function(img){
    observer.observe(img,{attributes:true,attributeFilter:['src','data-asset-number']});
  });
})();
</script>`;

html = html.replace(/<style id="wavex-final-image-frame-fix">[\s\S]*?<\/style>/, '');
html = html.replace(/<script id="wavex-final-image-frame-script">[\s\S]*?<\/script>/, '');
html = html.replace('</head>', styles + '\n</head>');
html = html.replace('</body>', script + '\n</body>');

fs.writeFileSync(file, html);
console.log('Removed empty image bars and applied full-bleed versus full-visibility media rules.');