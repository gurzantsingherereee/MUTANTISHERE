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
  /* Curated cinematic bento grid for Moodboard assets 7–12. */
  .mood-grid {
    display: grid !important;
    grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
    grid-template-rows: repeat(2, clamp(250px, 27vw, 390px)) !important;
    gap: clamp(12px, 1.5vw, 20px) !important;
    margin-top: clamp(38px, 5vw, 64px) !important;
    align-items: stretch !important;
  }

  .mood-grid .slot {
    position: relative !important;
    display: block !important;
    width: 100% !important;
    height: 100% !important;
    min-height: 0 !important;
    max-height: none !important;
    padding: 0 !important;
    margin: 0 !important;
    overflow: hidden !important;
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
    filter: saturate(.96) contrast(1.03);
    transition: filter .35s ease !important;
  }

  .mood-grid .slot:hover > img {
    transform: none !important;
    filter: saturate(1.03) contrast(1.05) brightness(1.025);
  }

  /* Desktop composition: one hero, two details, then a balanced second row. */
  .mood-grid .mood-asset-7 { grid-column: 1 / span 7 !important; grid-row: 1 !important; }
  .mood-grid .mood-asset-8 { grid-column: 8 / span 3 !important; grid-row: 1 !important; }
  .mood-grid .mood-asset-9 { grid-column: 11 / span 2 !important; grid-row: 1 !important; }
  .mood-grid .mood-asset-10 { grid-column: 1 / span 3 !important; grid-row: 2 !important; }
  .mood-grid .mood-asset-11 { grid-column: 4 / span 3 !important; grid-row: 2 !important; }
  .mood-grid .mood-asset-12 { grid-column: 7 / span 6 !important; grid-row: 2 !important; }

  .mood-grid .mood-asset-8 > img,
  .mood-grid .mood-asset-11 > img { object-position: center center !important; }

  @media (max-width: 980px) {
    .mood-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      grid-template-rows: none !important;
      grid-auto-rows: clamp(230px, 44vw, 360px) !important;
    }

    .mood-grid .mood-asset-7,
    .mood-grid .mood-asset-12 {
      grid-column: 1 / -1 !important;
      grid-row: auto !important;
      aspect-ratio: 16 / 9 !important;
    }

    .mood-grid .mood-asset-8,
    .mood-grid .mood-asset-9,
    .mood-grid .mood-asset-10,
    .mood-grid .mood-asset-11 {
      grid-column: auto !important;
      grid-row: auto !important;
      aspect-ratio: 4 / 5 !important;
    }
  }

  @media (max-width: 680px) {
    .mood-grid {
      grid-template-columns: 1fr !important;
      grid-auto-rows: auto !important;
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
      grid-row: auto !important;
    }

    .mood-grid .mood-asset-7,
    .mood-grid .mood-asset-12 {
      aspect-ratio: 16 / 10 !important;
    }

    .mood-grid .mood-asset-8,
    .mood-grid .mood-asset-11 {
      aspect-ratio: 4 / 5 !important;
    }

    .mood-grid .mood-asset-9,
    .mood-grid .mood-asset-10 {
      aspect-ratio: 1 / 1 !important;
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

  grid.querySelectorAll('img').forEach(function(img){
    const raw = img.getAttribute('data-asset-number') || '';
    const src = img.getAttribute('src') || '';
    const match = src.match(/assets\\/images\\/(7|8|9|10|11|12)\\.png/i);
    const number = Number(raw || (match && match[1]) || 0);
    if(number < 7 || number > 12) return;

    const holder = img.closest('.slot');
    if(!holder) return;

    holder.classList.remove('media-fit','asset-ratio-frame','cinematic-media','media-fill');
    holder.classList.add('mood-editorial-card','mood-asset-' + number);
    holder.style.removeProperty('--asset-ratio');
    holder.style.removeProperty('grid-row-end');

    img.style.objectFit = 'cover';
    img.style.objectPosition = 'center center';
    img.style.transform = 'none';
  });
})();
</script>`;

html = html.replace(/<style id="wavex-moodboard-final-fix">[\s\S]*?<\/style>/, '');
html = html.replace(/<script id="wavex-moodboard-final-script">[\s\S]*?<\/script>/, '');
html = html.replace('</head>', styles + '\n</head>');
html = html.replace('</body>', script + '\n</body>');

fs.writeFileSync(file, html);
console.log('Rebuilt Moodboard as a balanced responsive cinematic bento grid.');