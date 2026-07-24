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
  /*
    Stable editorial Moodboard layout.
    The previous two-row bento forced several images into very narrow columns,
    causing excessive cropping and an unbalanced composition.
  */
  .mood-grid {
    display: grid !important;
    grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
    grid-template-rows:
      clamp(320px, 32vw, 450px)
      clamp(250px, 22vw, 330px)
      clamp(300px, 28vw, 410px) !important;
    gap: clamp(14px, 1.5vw, 20px) !important;
    margin-top: clamp(40px, 5vw, 64px) !important;
    align-items: stretch !important;
  }

  .mood-grid > .slot {
    position: relative !important;
    display: block !important;
    width: 100% !important;
    height: 100% !important;
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
    isolation: isolate;
  }

  .mood-grid > .slot::before,
  .mood-grid > .slot::after,
  .mood-grid > .slot > .slot-copy,
  .mood-grid > .slot > .slot-path {
    display: none !important;
  }

  .mood-grid > .slot > img {
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
    filter: saturate(.97) contrast(1.025);
    transition: filter .3s ease !important;
  }

  .mood-grid > .slot:hover > img {
    transform: none !important;
    scale: 1 !important;
    filter: saturate(1.02) contrast(1.045) brightness(1.02);
  }

  /* Desktop: one hero row, one detail row, one panoramic closing image. */
  .mood-grid > .slot:nth-child(1) {
    grid-column: 1 / span 8 !important;
    grid-row: 1 !important;
  }

  .mood-grid > .slot:nth-child(2) {
    grid-column: 9 / span 4 !important;
    grid-row: 1 !important;
  }

  .mood-grid > .slot:nth-child(3) {
    grid-column: 1 / span 4 !important;
    grid-row: 2 !important;
  }

  .mood-grid > .slot:nth-child(4) {
    grid-column: 5 / span 4 !important;
    grid-row: 2 !important;
  }

  .mood-grid > .slot:nth-child(5) {
    grid-column: 9 / span 4 !important;
    grid-row: 2 !important;
  }

  .mood-grid > .slot:nth-child(6) {
    grid-column: 1 / -1 !important;
    grid-row: 3 !important;
  }

  @media (max-width: 980px) {
    .mood-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      grid-template-rows: none !important;
      grid-auto-rows: auto !important;
    }

    .mood-grid > .slot,
    .mood-grid > .slot:nth-child(n) {
      grid-column: auto !important;
      grid-row: auto !important;
      height: auto !important;
    }

    .mood-grid > .slot:nth-child(1),
    .mood-grid > .slot:nth-child(6) {
      grid-column: 1 / -1 !important;
      aspect-ratio: 16 / 9 !important;
    }

    .mood-grid > .slot:nth-child(2),
    .mood-grid > .slot:nth-child(5) {
      aspect-ratio: 4 / 5 !important;
    }

    .mood-grid > .slot:nth-child(3),
    .mood-grid > .slot:nth-child(4) {
      aspect-ratio: 1 / 1 !important;
    }
  }

  @media (max-width: 680px) {
    .mood-grid {
      grid-template-columns: 1fr !important;
      gap: 14px !important;
    }

    .mood-grid > .slot,
    .mood-grid > .slot:nth-child(n) {
      grid-column: 1 / -1 !important;
      grid-row: auto !important;
    }

    .mood-grid > .slot:nth-child(1),
    .mood-grid > .slot:nth-child(6) {
      aspect-ratio: 16 / 10 !important;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .mood-grid > .slot > img {
      transition: none !important;
    }
  }
</style>`;

const script = `
<script id="wavex-moodboard-final-script">
(function(){
  const grid = document.querySelector('.mood-grid');
  if(!grid) return;

  grid.classList.add('mood-layout-ready');

  grid.querySelectorAll(':scope > .slot').forEach(function(holder){
    holder.classList.remove('media-fit','media-fill','asset-ratio-frame','cinematic-media');
    holder.style.removeProperty('--asset-ratio');
    holder.style.removeProperty('grid-row-end');

    const img = holder.querySelector('img');
    if(!img) return;
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
console.log('Applied stable three-row editorial Moodboard layout for assets 7.png through 12.png.');
