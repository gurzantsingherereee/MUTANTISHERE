const fs = require('fs');

const file = 'index.html';
if (!fs.existsSync(file)) {
  throw new Error('fix-visual-language.js: index.html was not found.');
}

let html = fs.readFileSync(file, 'utf8');
const version = String(process.env.GITHUB_SHA || Date.now().toString(36)).slice(0, 12);

const visualLanguageAssets = [
  { number: 13, legacy: 'assets/textures/mesh.webp' },
  { number: 14, legacy: 'assets/textures/rock.webp' },
  { number: 15, legacy: 'assets/textures/distress.png' },
  { number: 16, legacy: 'assets/icons/route-pattern.svg' }
];

visualLanguageAssets.forEach(({ number, legacy }) => {
  const target = `assets/images/${number}.png?v=${version}`;
  html = html.split(legacy).join(target);
  html = html.replace(
    new RegExp(`assets/images/${number}\\.png(?:\\?v=[^"']*)?`, 'g'),
    target
  );
});

const styles = `
<style id="wavex-visual-language-fix">
  /* Polished Visual Language system using uploaded assets 13–16. */
  .visual-language-section {
    overflow: hidden;
  }

  .visual-language-section .brand-grid {
    display: grid !important;
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr) !important;
    gap: clamp(16px, 2vw, 24px) !important;
    align-items: stretch !important;
  }

  .visual-language-section .palette,
  .visual-language-section .type-panel {
    min-width: 0 !important;
    height: 100% !important;
  }

  .visual-language-section .palette {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    grid-template-rows: repeat(2, minmax(180px, 1fr)) !important;
    gap: 12px !important;
  }

  .visual-language-section .swatch {
    min-height: 0 !important;
    padding: clamp(18px, 2vw, 26px) !important;
    border: 1px solid rgba(255,255,255,.14) !important;
    border-radius: clamp(18px, 2vw, 26px) !important;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.025);
    font-size: .78rem;
    font-weight: 700;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .visual-language-section .type-panel {
    min-height: clamp(430px, 40vw, 560px) !important;
    padding: clamp(28px, 4vw, 52px) !important;
    border-radius: clamp(20px, 2.2vw, 30px) !important;
    background:
      radial-gradient(circle at 82% 18%, rgba(241,90,0,.16), transparent 34%),
      linear-gradient(145deg, #1c1a15, #0d0d0b 72%) !important;
    overflow: hidden;
  }

  .visual-language-section .type-demo {
    font-size: clamp(4rem, 8.8vw, 8.6rem) !important;
    line-height: .78 !important;
    letter-spacing: -.075em !important;
    text-wrap: balance;
  }

  .visual-language-section .texture-grid {
    display: grid !important;
    grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
    grid-template-rows: auto auto !important;
    gap: clamp(14px, 1.5vw, 20px) !important;
    margin-top: clamp(20px, 2.5vw, 32px) !important;
    align-items: stretch !important;
  }

  .visual-language-section .texture-grid > .slot {
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
    isolation: isolate;
    border: 1px solid rgba(255,255,255,.12) !important;
    border-radius: clamp(18px, 2vw, 28px) !important;
    background: #0b0b09 !important;
    box-shadow: 0 22px 62px rgba(0,0,0,.24);
  }

  .visual-language-section .texture-grid > .slot::before,
  .visual-language-section .texture-grid > .slot::after,
  .visual-language-section .texture-grid > .slot > .slot-copy,
  .visual-language-section .texture-grid > .slot > .slot-path {
    display: none !important;
  }

  .visual-language-section .texture-grid > .slot > img {
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
    filter: saturate(.98) contrast(1.025);
    transition: filter .3s ease !important;
  }

  .visual-language-section .texture-grid > .visual-language-card-13,
  .visual-language-section .texture-grid > .slot:nth-child(1) {
    grid-column: 1 / span 4 !important;
    grid-row: 1 !important;
    aspect-ratio: 1 / 1 !important;
  }

  .visual-language-section .texture-grid > .visual-language-card-14,
  .visual-language-section .texture-grid > .slot:nth-child(2) {
    grid-column: 5 / span 4 !important;
    grid-row: 1 !important;
    aspect-ratio: 1 / 1 !important;
  }

  .visual-language-section .texture-grid > .visual-language-card-15,
  .visual-language-section .texture-grid > .slot:nth-child(3) {
    grid-column: 9 / span 4 !important;
    grid-row: 1 !important;
    aspect-ratio: 1 / 1 !important;
  }

  .visual-language-section .texture-grid > .visual-language-card-16,
  .visual-language-section .texture-grid > .slot:nth-child(4) {
    grid-column: 1 / -1 !important;
    grid-row: 2 !important;
    aspect-ratio: 2 / 1 !important;
  }

  .visual-language-section .texture-grid > .visual-language-card-16 > img,
  .visual-language-section .texture-grid > .slot:nth-child(4) > img {
    object-fit: contain !important;
    background: #0b0b09;
  }

  .visual-language-section .texture-grid > .slot:hover > img {
    transform: none !important;
    scale: 1 !important;
    filter: saturate(1.035) contrast(1.045) brightness(1.015);
  }

  @media (max-width: 980px) {
    .visual-language-section .brand-grid {
      grid-template-columns: 1fr !important;
    }

    .visual-language-section .texture-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      grid-template-rows: none !important;
    }

    .visual-language-section .texture-grid > .slot,
    .visual-language-section .texture-grid > .slot:nth-child(n) {
      grid-column: auto !important;
      grid-row: auto !important;
    }

    .visual-language-section .texture-grid > .visual-language-card-13,
    .visual-language-section .texture-grid > .visual-language-card-14,
    .visual-language-section .texture-grid > .visual-language-card-15,
    .visual-language-section .texture-grid > .slot:nth-child(1),
    .visual-language-section .texture-grid > .slot:nth-child(2),
    .visual-language-section .texture-grid > .slot:nth-child(3) {
      aspect-ratio: 1 / 1 !important;
    }

    .visual-language-section .texture-grid > .visual-language-card-16,
    .visual-language-section .texture-grid > .slot:nth-child(4) {
      grid-column: 1 / -1 !important;
      aspect-ratio: 2 / 1 !important;
    }
  }

  @media (max-width: 680px) {
    .visual-language-section .palette,
    .visual-language-section .texture-grid {
      grid-template-columns: 1fr !important;
    }

    .visual-language-section .palette {
      grid-template-rows: repeat(4, minmax(140px, auto)) !important;
    }

    .visual-language-section .type-panel {
      min-height: 420px !important;
    }

    .visual-language-section .texture-grid > .slot,
    .visual-language-section .texture-grid > .slot:nth-child(n) {
      grid-column: 1 / -1 !important;
      grid-row: auto !important;
    }

    .visual-language-section .texture-grid > .visual-language-card-16,
    .visual-language-section .texture-grid > .slot:nth-child(4) {
      aspect-ratio: 16 / 9 !important;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .visual-language-section .texture-grid > .slot > img {
      transition: none !important;
    }
  }
</style>`;

const script = `
<script id="wavex-visual-language-script">
(function () {
  var textureGrid = document.querySelector('.texture-grid');
  if (!textureGrid) return;

  var section = textureGrid.closest('.section');
  if (section) section.classList.add('visual-language-section');

  function getAssetNumber(img, index) {
    var raw = Number(img.getAttribute('data-asset-number') || 0);
    if (raw >= 13 && raw <= 16) return raw;

    var src = img.getAttribute('src') || '';
    var match = src.match(/assets\\/images\\/(13|14|15|16)\\.png/i);
    return Number((match && match[1]) || (13 + index));
  }

  Array.prototype.forEach.call(textureGrid.children, function (holder, index) {
    if (!holder.classList || !holder.classList.contains('slot')) return;

    var img = holder.querySelector('img');
    if (!img) return;

    var number = getAssetNumber(img, index);
    if (number < 13 || number > 16) return;

    for (var oldNumber = 13; oldNumber <= 16; oldNumber += 1) {
      holder.classList.remove('visual-language-card-' + oldNumber);
    }

    holder.classList.remove('media-fit', 'media-fill', 'asset-ratio-frame', 'cinematic-media');
    holder.classList.add('visual-language-card', 'visual-language-card-' + number);
    holder.style.removeProperty('--asset-ratio');
    holder.style.removeProperty('grid-row-end');
    holder.style.removeProperty('grid-column');
    holder.style.removeProperty('grid-row');
    holder.style.removeProperty('height');
    holder.style.removeProperty('aspect-ratio');

    img.style.objectFit = number === 16 ? 'contain' : 'cover';
    img.style.objectPosition = 'center center';
    img.style.transform = 'none';
  });
})();
</script>`;

html = html.replace(/<style id="wavex-visual-language-fix">[\s\S]*?<\/style>/g, '');
html = html.replace(/<script id="wavex-visual-language-script">[\s\S]*?<\/script>/g, '');

if (!html.includes('</head>') || !html.includes('</body>')) {
  throw new Error('fix-visual-language.js: index.html is missing </head> or </body>.');
}

html = html.replace('</head>', `${styles}\n</head>`);
html = html.replace('</body>', `${script}\n</body>`);
fs.writeFileSync(file, html);

console.log('Visual Language fixed: uploaded assets 13.png through 16.png use a polished responsive layout.');
