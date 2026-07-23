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
  const numberedPath = `assets/images/${index + 1}.png`;
  html = html.split(oldPath).join(numberedPath);
});

html = html
  .replaceAll('onerror="this.remove()"', 'onerror="useImageFallback(this)"')
  .replaceAll('onerror="this.style.display=\'none\'"', 'onerror="useImageFallback(this)"')
  .replace(/<img([^>]*?)src="assets\/images\/(\d+)\.png"([^>]*)>/g, '<img$1src="assets/images/$2.png" data-asset-number="$2"$3>');

const headInjection = `
<style>
  .asset-file-tag{display:none!important}
  .slot.has-image .slot-copy,
  .slot.has-image .slot-path{display:none!important}
  .slot.has-image{border-color:transparent}
  .hero-layer.has-image{border-color:transparent;background:transparent;color:transparent}
</style>
<script>
  function markImageReady(img){
    const holder=img.closest('.slot,.hero-layer');
    if(holder) holder.classList.add('has-image');
  }

  function useImageFallback(img){
    const src=img.getAttribute('src')||'';
    const match=src.match(/assets\\/images\\/(\\d+)\\.png/);
    if(match){
      img.dataset.assetNumber=match[1];
      img.src='https://picsum.photos/seed/wavex-'+match[1]+'/1600/1100';
      return;
    }
    img.style.display='none';
  }

  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('.asset-file-tag').forEach(function(tag){tag.remove();});
    document.querySelectorAll('.slot img,.hero-layer img').forEach(function(img){
      img.addEventListener('load',function(){markImageReady(img);});
      if(img.complete&&img.naturalWidth>0) markImageReady(img);
    });
  });
</script>`;

html = html.replace('</head>', headInjection + '\n</head>');

fs.writeFileSync('index.html', html);
console.log(`Prepared ${sourcePaths.length} numbered image slots without visible filename tags.`);
