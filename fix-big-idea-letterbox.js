const fs = require('fs');

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

const styles = `
<style id="wavex-big-idea-letterbox-fix">
  /*
    Final Big Idea correction.
    The frame stays 16:9 and the actual picture reaches every edge.
    A detected dark border inside the PNG is cropped automatically.
  */
  .big-idea-final-frame {
    position: relative !important;
    display: block !important;
    width: 100% !important;
    height: auto !important;
    min-height: 0 !important;
    max-height: none !important;
    aspect-ratio: 16 / 9 !important;
    padding: 0 !important;
    overflow: hidden !important;
    background: #090907 !important;
    isolation: isolate;
  }

  .big-idea-final-frame::before,
  .big-idea-final-frame::after,
  .big-idea-final-frame > .slot-copy,
  .big-idea-final-frame > .slot-path {
    display: none !important;
  }

  .big-idea-final-frame > img[data-asset-number="5"] {
    position: absolute !important;
    inset: 0 !important;
    display: block !important;
    width: 100% !important;
    height: 100% !important;
    min-width: 100% !important;
    min-height: 100% !important;
    max-width: none !important;
    max-height: none !important;
    margin: 0 !important;
    padding: 0 !important;
    object-fit: cover !important;
    object-position: center center !important;
    transform-origin: center center !important;
    transform: scale(var(--big-idea-crop-scale, 1)) !important;
    transition: none !important;
  }

  .big-idea-final-frame:hover > img[data-asset-number="5"] {
    transform: scale(var(--big-idea-crop-scale, 1)) !important;
  }

  @media (max-width: 760px) {
    .big-idea-final-frame {
      aspect-ratio: 16 / 9 !important;
      border-radius: 18px;
    }
  }
</style>`;

const script = `
<script id="wavex-big-idea-letterbox-script">
(function(){
  function rowLooksLikeDarkBorder(data, width, row){
    let dark = 0;
    let samples = 0;
    let luminance = 0;

    for(let x = 0; x < width; x += 2){
      const i = (row * width + x) * 4;
      const a = data[i + 3];
      if(a < 20) continue;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const l = .2126 * r + .7152 * g + .0722 * b;
      luminance += l;
      samples += 1;
      if(l < 24) dark += 1;
    }

    if(!samples) return true;
    return dark / samples > .88 && luminance / samples < 22;
  }

  function detectAndCrop(img){
    const holder = img.closest('.slot');
    if(!holder) return;

    holder.classList.add('big-idea-final-frame');
    holder.style.setProperty('--big-idea-crop-scale', '1');

    if(!img.naturalWidth || !img.naturalHeight) return;

    try {
      const width = 240;
      const height = Math.max(80, Math.round(width * img.naturalHeight / img.naturalWidth));
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext('2d', {willReadFrequently:true});
      if(!context) return;

      context.drawImage(img, 0, 0, width, height);
      const pixels = context.getImageData(0, 0, width, height).data;
      const limit = Math.floor(height * .2);

      let top = 0;
      while(top < limit && rowLooksLikeDarkBorder(pixels, width, top)) top += 1;

      let bottom = 0;
      while(bottom < limit && rowLooksLikeDarkBorder(pixels, width, height - 1 - bottom)) bottom += 1;

      const borderShare = (top + bottom) / height;
      if(borderShare > .025 && borderShare < .34){
        const scale = Math.min(1.38, 1 / (1 - borderShare));
        holder.style.setProperty('--big-idea-crop-scale', scale.toFixed(4));
      }
    } catch(error) {
      /* Same-origin assets should be readable. The full-bleed CSS remains active if scanning fails. */
    }
  }

  function prepare(){
    document.querySelectorAll('img[data-asset-number="5"]').forEach(function(img){
      if(img.complete && img.naturalWidth) detectAndCrop(img);
      img.addEventListener('load', function(){ detectAndCrop(img); }, {passive:true});
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', prepare, {once:true});
  } else {
    prepare();
  }
})();
</script>`;

html = html.replace(/<style id="wavex-big-idea-letterbox-fix">[\s\S]*?<\/style>/, '');
html = html.replace(/<script id="wavex-big-idea-letterbox-script">[\s\S]*?<\/script>/, '');
html = html.replace('</head>', styles + '\n</head>');
html = html.replace('</body>', script + '\n</body>');

fs.writeFileSync(file, html);
console.log('Removed Big Idea top and bottom letterboxing with automatic dark-border detection.');

require('./fix-moodboard.js');
