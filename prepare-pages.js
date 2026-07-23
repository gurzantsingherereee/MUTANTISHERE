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
  .asset-file-tag{position:absolute;top:14px;right:14px;z-index:20;padding:7px 10px;border:1px solid rgba(255,255,255,.2);border-radius:999px;color:#fff;background:rgba(8,8,7,.78);backdrop-filter:blur(10px);font:700 11px ui-monospace,monospace;letter-spacing:.08em}
</style>
<script>
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
</script>`;

const bodyInjection = `
<script>
  (function(){
    function updateTag(img){
      const src=img.getAttribute('src')||'';
      const match=src.match(/assets\\/images\\/(\\d+)\\.png/);
      if(match) img.dataset.assetNumber=match[1];
      const number=img.dataset.assetNumber;
      if(!number) return;
      const holder=img.closest('.slot,.hero-layer');
      if(!holder) return;
      let tag=holder.querySelector(':scope > .asset-file-tag');
      if(!tag){tag=document.createElement('span');tag.className='asset-file-tag';holder.appendChild(tag);}
      tag.textContent=number+'.png';
    }
    document.querySelectorAll('img[data-asset-number]').forEach(updateTag);
    const observer=new MutationObserver(records=>records.forEach(record=>{if(record.target.tagName==='IMG') updateTag(record.target);}));
    document.querySelectorAll('img').forEach(img=>observer.observe(img,{attributes:true,attributeFilter:['src']}));
  })();
</script>`;

html = html.replace('</head>', headInjection + '\n</head>');
html = html.replace('</body>', bodyInjection + '\n</body>');

fs.writeFileSync('index.html', html);
console.log(`Prepared ${sourcePaths.length} numbered image slots.`);
