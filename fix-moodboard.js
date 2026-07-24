const fs = require('fs');

const file = 'index.html';
if (!fs.existsSync(file)) {
  throw new Error('fix-moodboard.js: index.html was not found.');
}

let html = fs.readFileSync(file, 'utf8');
const version = String(process.env.GITHUB_SHA || Date.now().toString(36)).slice(0, 12);

for (let number = 7; number <= 12; number += 1) {
  const source = new RegExp(`assets/images/${number}\\.png(?:\\?v=[^"']*)?`, 'g');
  html = html.replace(source, `assets/images/${number}.png?v=${version}`);
}

const styles = `
<style id="wavex-moodboard-final-fix">
  /*
    Use the uploaded image canvases as the layout source.
    No forced card ratio, no cropping, no black bars.
  */
  .mood-grid {
    display: flex !important;
    flex-direction: column !important;
    gap: clamp(14px, 1.5vw, 20px) !important;
    margin-top: clamp(40px, 5vw, 64px) !important;
  }

  .mood-detail-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(14px, 1.5vw, 20px);
    align-items: start;
  }

  .mood-stack {
    display: flex;
    flex-direction: column;
    gap: clamp(14px, 1.5vw, 20px);
    min-width: 0;
  }

  .mood-grid > .slot,
  .mood-stack > .slot {
    position: relative !important;
    display: block !important;
    width: 100% !important;
    height: auto !important;
    min-width: 0 !important;
    min-height: 0 !important;
    max-width: none !important;
    max-height: none !important;
    padding: 0 !important;
    margin: 0 !important;
    overflow: hidden !important;
    border: 1px solid rgba(255,255,255,.12) !important;
    border-radius: clamp(18px, 2vw, 28px) !important;
    background: #0b0b09 !important;
    box-shadow: 0 22px 64px rgba(0,0,0,.26);
    aspect-ratio: auto !important;
    isolation: isolate;
  }

  .mood-grid .slot::before,
  .mood-grid .slot::after,
  .mood-grid .slot > .slot-copy,
  .mood-grid .slot > .slot-path {
    display: none !important;
  }

  .mood-grid .slot > img {
    position: relative !important;
    inset: auto !important;
    display: block !important;
    width: 100% !important;
    height: auto !important;
    min-width: 0 !important;
    min-height: 0 !important;
    max-width: 100% !important;
    max-height: none !important;
    margin: 0 !important;
    padding: 0 !important;
    object-fit: contain !important;
    object-position: center center !important;
    transform: none !important;
    scale: 1 !important;
    filter: saturate(.98) contrast(1.02);
    transition: filter .3s ease !important;
  }

  .mood-grid .slot:hover > img {
    transform: none !important;
    scale: 1 !important;
    filter: saturate(1.02) contrast(1.04) brightness(1.02);
  }

  @media (max-width: 760px) {
    .mood-detail-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .mood-grid .slot > img {
      transition: none !important;
    }
  }
</style>`;

const script = `
<script id="wavex-moodboard-final-script">
(function () {
  var grid = document.querySelector('.mood-grid');
  if (!grid) return;

  function getAssetNumber(img) {
    var raw = Number(img.getAttribute('data-asset-number') || 0);
    if (raw >= 7 && raw <= 12) return raw;

    var src = img.getAttribute('src') || '';
    for (var number = 7; number <= 12; number += 1) {
      if (src.indexOf('/' + number + '.png') !== -1) return number;
    }
    return 0;
  }

  var cards = {};
  Array.prototype.forEach.call(grid.querySelectorAll('.slot'), function (holder) {
    var img = holder.querySelector('img');
    if (!img) return;

    var number = getAssetNumber(img);
    if (number < 7 || number > 12) return;

    cards[number] = holder;
    holder.classList.remove('media-fit', 'media-fill', 'asset-ratio-frame', 'cinematic-media');
    holder.classList.add('mood-card', 'mood-card-' + number);

    holder.style.removeProperty('--asset-ratio');
    holder.style.removeProperty('grid-row-end');
    holder.style.removeProperty('grid-column');
    holder.style.removeProperty('grid-row');
    holder.style.removeProperty('height');
    holder.style.removeProperty('aspect-ratio');

    img.style.objectFit = 'contain';
    img.style.objectPosition = 'center center';
    img.style.transform = 'none';
  });

  if (!cards[7] || !cards[8] || !cards[9] || !cards[10] || !cards[11] || !cards[12]) return;

  while (grid.firstChild) grid.removeChild(grid.firstChild);

  var details = document.createElement('div');
  details.className = 'mood-detail-grid';

  var left = document.createElement('div');
  left.className = 'mood-stack mood-stack-left';
  left.appendChild(cards[8]);
  left.appendChild(cards[9]);

  var right = document.createElement('div');
  right.className = 'mood-stack mood-stack-right';
  right.appendChild(cards[10]);
  right.appendChild(cards[11]);

  details.appendChild(left);
  details.appendChild(right);

  grid.appendChild(cards[7]);
  grid.appendChild(details);
  grid.appendChild(cards[12]);
  grid.classList.add('mood-layout-ready');
})();
</script>`;

html = html.replace(/<style id="wavex-moodboard-final-fix">[\s\S]*?<\/style>/g, '');
html = html.replace(/<script id="wavex-moodboard-final-script">[\s\S]*?<\/script>/g, '');

if (!html.includes('</head>') || !html.includes('</body>')) {
  throw new Error('fix-moodboard.js: index.html is missing </head> or </body>.');
}

html = html.replace('</head>', `${styles}\n</head>`);
html = html.replace('</body>', `${script}\n</body>`);
fs.writeFileSync(file, html);

console.log('Moodboard fixed using the natural proportions of uploaded assets 7.png through 12.png.');
