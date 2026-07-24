const fs = require('fs');

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');
const version = (process.env.GITHUB_SHA || Date.now().toString(36)).slice(0, 12);

for (let n = 7; n <= 12; n += 1) {
  const re = new RegExp(`assets/images/${n}\\.png(?:\\?v=[^"']*)?`, 'g');
  html = html.replace(re, `assets/images/${n}.png?v=${version}`);
}

const styles = `
<style id="wavex-moodboard-final-fix">
  /* Responsive editorial masonry for Moodboard assets 7–12. */
  .mood-grid {
    --mood-gap: clamp(12px, 1.45vw, 20px);
    --mood-row: 8px;
    display: grid !important;
    grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
    grid-auto-rows: var(--mood-row) !important;
    grid-auto-flow: row dense !important;
    gap: var(--mood-gap) !important;
    align-items: start !important;
    margin-top: clamp(38px, 5vw, 64px) !important;
  }

  .mood-grid .slot {
    position: relative !important;
    display: block !important;
    width: 100% !important;
    height: auto !important;
    min-height: 0 !important;
    max-height: none !important;
    padding: 0 !important;
    margin: 0 !important;
    overflow: hidden !important;
    isolation: isolate;
    border: 1px solid rgba(255,255,255,.12) !important;
    border-radius: clamp(18px, 2vw, 28px) !important;
    background: #0b0b09 !important;
    box-shadow: 0 22px 64px rgba(0,0,0,.28);
  }

  .mood-grid .slot::before,
  .mood-grid .slot::after,
  .mood-grid .slot .slot-copy,
  .mood-grid .slot .slot-path {
    display: none !important;
  }

  .mood-grid .slot > img {
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
    transform: none !important;
    scale: 1 !important;
    filter: saturate(.96) contrast(1.02);
    transition: filter .35s ease !important;
  }

  .mood-grid .slot:hover > img {
    transform: none !important;
    scale: 1 !important;
    filter: saturate(1.03) contrast(1.04) brightness(1.025);
  }

  /* Editorial rhythm: two large landscapes balanced by portrait and square details. */
  .mood-grid .mood-asset-7,
  .mood-grid .mood-asset-12 {
    grid-column: span 8 !important;
  }

  .mood-grid .mood-asset-8,
  .mood-grid .mood-asset-9,
  .mood-grid .mood-asset-10,
  .mood-grid .mood-asset-11 {
    grid-column: span 4 !important;
  }

  @media (max-width: 980px) {
    .mood-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      grid-auto-rows: 8px !important;
    }

    .mood-grid .mood-asset-7,
    .mood-grid .mood-asset-12 {
      grid-column: 1 / -1 !important;
    }

    .mood-grid .mood-asset-8,
    .mood-grid .mood-asset-9,
    .mood-grid .mood-asset-10,
    .mood-grid .mood-asset-11 {
      grid-column: span 1 !important;
    }
  }

  @media (max-width: 680px) {
    .mood-grid {
      grid-template-columns: 1fr !important;
      grid-auto-rows: 6px !important;
      gap: 14px !important;
    }

    .mood-grid .slot,
    .mood-grid .mood-asset-7,
    .mood-grid .mood-asset-8,
    .mood-grid .mood-asset-9,
    .mood-grid .mood-asset-10,
    .mood-grid .mood-asset-11,
    .mood-grid .mood-asset-12 {
      grid-column: 1 / -1 !important;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .mood-grid .slot > img { transition: none !important; }
  }
</style>`;

const script = `
<script id="wavex-moodboard-final-script">
(function(){
  const grid = document.querySelector('.mood-grid');
  if(!grid) return;

  const fallbackRatios = {
    7: [2000,1500],
    8: [1600,2000],
    9: [1600,1600],
    10:[1600,1600],
    11:[1600,2000],
    12:[2000,1500]
  };

  function assetNumber(img){
    const raw = img.getAttribute('data-asset-number') || '';
    const src = img.getAttribute('src') || '';
    const match = src.match(/assets\\/images\\/(7|8|9|10|11|12)\\.png/i);
    return Number(raw || (match && match[1]) || 0);
  }

  function prepareCard(img){
    const number = assetNumber(img);
    if(number < 7 || number > 12) return null;

    const holder = img.closest('.slot');
    if(!holder) return null;

    holder.classList.remove('media-fit','asset-ratio-frame','cinematic-media','media-fill');
    holder.classList.add('mood-editorial-card','mood-asset-' + number);
    holder.style.removeProperty('--asset-ratio');

    img.style.objectFit = 'cover';
    img.style.objectPosition = 'center center';
    img.style.transform = 'none';
    return holder;
  }

  function resizeCard(holder){
    const img = holder.querySelector('img');
    if(!img) return;

    const number = assetNumber(img);
    const fallback = fallbackRatios[number] || [4,3];
    const naturalWidth = img.naturalWidth || fallback[0];
    const naturalHeight = img.naturalHeight || fallback[1];
    const ratio = naturalHeight / naturalWidth;
    const width = holder.getBoundingClientRect().width;
    if(!width) return;

    const styles = getComputedStyle(grid);
    const row = parseFloat(styles.gridAutoRows) || 8;
    const gap = parseFloat(styles.rowGap) || 16;
    const height = width * ratio;
    const span = Math.max(1, Math.ceil((height + gap) / (row + gap)));

    holder.style.gridRowEnd = 'span ' + span;
  }

  const cards = [];
  grid.querySelectorAll('img').forEach(function(img){
    const holder = prepareCard(img);
    if(!holder) return;
    cards.push(holder);
    const update = function(){ resizeCard(holder); };
    if(img.complete && img.naturalWidth) update();
    img.addEventListener('load', update, {passive:true});
  });

  function resizeAll(){ cards.forEach(resizeCard); }

  let frame = 0;
  function queueResize(){
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(resizeAll);
  }

  if('ResizeObserver' in window){
    const observer = new ResizeObserver(queueResize);
    observer.observe(grid);
  } else {
    addEventListener('resize', queueResize, {passive:true});
  }

  addEventListener('load', resizeAll, {once:true});
  queueResize();
})();
</script>`;

html = html.replace(/<style id="wavex-moodboard-final-fix">[\s\S]*?<\/style>/, '');
html = html.replace(/<script id="wavex-moodboard-final-script">[\s\S]*?<\/script>/, '');
html = html.replace('</head>', styles + '\n</head>');
html = html.replace('</body>', script + '\n</body>');

fs.writeFileSync(file, html);
console.log('Rebuilt Moodboard assets 7.png through 12.png as a responsive editorial masonry layout.');