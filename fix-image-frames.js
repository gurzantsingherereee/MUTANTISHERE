const fs = require('fs');

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

const styles = `
<style id="wavex-final-image-frame-fix">
  /* Final image-frame rules: preserve each image, keep it inside its area,
     and remove aspect-ratio conflicts introduced by earlier layout layers. */

  .slot,
  .ds-visual,
  .comparison .slot,
  .signature-visual {
    position: relative;
    overflow: hidden;
  }

  .slot > img,
  .comparison .slot > img,
  .signature-visual > img {
    display: block;
    width: 100% !important;
    height: 100% !important;
    max-width: 100% !important;
    max-height: 100% !important;
    object-fit: contain !important;
    object-position: center center !important;
    transform: none !important;
  }

  /* Atmospheric full-screen areas are the only intentional cover images. */
  .hero-bg img,
  .final-bg img,
  .hero-composite-slot > img {
    width: 100% !important;
    height: 100% !important;
    max-width: none !important;
    max-height: none !important;
    object-fit: cover !important;
  }

  /* Design Strategy artwork is generated at 2400 × 1600 (3:2).
     Keep that exact ratio on every device so the image both fills the frame
     and remains completely visible. */
  .ds-experience {
    min-height: 0 !important;
  }

  .ds-visual {
    width: 100%;
    min-height: 0 !important;
    height: auto !important;
    aspect-ratio: 3 / 2 !important;
    background: #090907;
  }

  .ds-image {
    position: absolute !important;
    inset: 0 !important;
    display: block;
    width: 100% !important;
    height: 100% !important;
    max-width: 100% !important;
    max-height: 100% !important;
    object-fit: contain !important;
    object-position: center center !important;
    transform: none !important;
  }

  .ds-image.active {
    transform: none !important;
  }

  /* Keep overlays inside the visible image frame without covering too much. */
  .ds-visual-shade {
    background:
      linear-gradient(180deg, rgba(0,0,0,.16), transparent 28%, transparent 68%, rgba(0,0,0,.5)),
      linear-gradient(90deg, transparent 70%, rgba(0,0,0,.08));
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

  /* Uploaded 16:9 Big Idea artwork must retain its complete frame. */
  .big-idea-responsive,
  .slot:has(> img[data-asset-number="5"]) {
    min-height: 0 !important;
    height: auto !important;
    aspect-ratio: 16 / 9 !important;
  }

  /* Stop hover scaling from pushing artwork outside its frame. */
  .slot.has-image:hover > img,
  .ds-visual:hover > .ds-image,
  .signature-visual:hover > img {
    transform: none !important;
  }

  @media (max-width: 980px) {
    .ds-experience {
      grid-template-columns: 1fr !important;
    }

    .ds-visual {
      aspect-ratio: 3 / 2 !important;
      min-height: 0 !important;
    }
  }

  @media (max-width: 680px) {
    .ds-visual,
    .ds-experience .ds-visual {
      aspect-ratio: 3 / 2 !important;
      min-height: 0 !important;
      border-radius: 0;
    }

    .ds-visual-caption {
      font-size: clamp(2rem, 13vw, 4.2rem);
    }

    .slot > img,
    .comparison .slot > img,
    .signature-visual > img {
      object-fit: contain !important;
      object-position: center center !important;
    }
  }
</style>`;

const script = `
<script id="wavex-final-image-frame-script">
(function(){
  function markLoaded(img){
    const holder=img.closest('.slot,.ds-visual,.signature-visual');
    if(holder) holder.classList.add('image-frame-ready');
  }

  document.querySelectorAll('.slot img,.ds-image,.signature-visual img').forEach(function(img){
    img.style.objectPosition='center center';
    if(img.complete&&img.naturalWidth>0) markLoaded(img);
    img.addEventListener('load',function(){markLoaded(img)},{passive:true});
  });
})();
</script>`;

html = html.replace(/<style id="wavex-final-image-frame-fix">[\s\S]*?<\/style>/, '');
html = html.replace(/<script id="wavex-final-image-frame-script">[\s\S]*?<\/script>/, '');
html = html.replace('</head>', styles + '\n</head>');
html = html.replace('</body>', script + '\n</body>');

fs.writeFileSync(file, html);
console.log('Applied final responsive image-frame visibility fixes.');
