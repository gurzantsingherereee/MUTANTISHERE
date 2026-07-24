const fs = require('fs');

const file = 'index.html';
if (!fs.existsSync(file)) {
  throw new Error('fix-visual-experience.js: index.html was not found.');
}

let html = fs.readFileSync(file, 'utf8');
const version = String(process.env.GITHUB_SHA || Date.now().toString(36)).slice(0, 12);

const experienceAssets = [
  { number: 35, source: 'assets/lifestyle/morning.webp' },
  { number: 36, source: 'assets/lifestyle/day.webp' },
  { number: 37, source: 'assets/lifestyle/night.webp' }
];

experienceAssets.forEach(({ number, source }) => {
  const target = `assets/images/${number}.png?v=${version}`;
  html = html.split(source).join(target);
  html = html.replace(
    new RegExp(`assets/images/${number}\\.png(?:\\?v=[^"']*)?`, 'g'),
    target
  );
});

const styles = `
<style id="wavex-visual-experience-fix">
  /* Morning / day / night visual story using uploaded assets 35–37. */
  #experience {
    overflow: hidden;
  }

  #experience .lifestyle {
    width: var(--container) !important;
    margin: clamp(42px, 6vw, 74px) auto 0 !important;
    padding: 0 !important;
    display: grid !important;
    grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
    grid-auto-flow: row !important;
    grid-auto-columns: auto !important;
    gap: clamp(18px, 2vw, 28px) !important;
    overflow: visible !important;
    scroll-snap-type: none !important;
  }

  #experience .life-card {
    min-width: 0 !important;
    width: 100% !important;
    margin: 0 !important;
    scroll-snap-align: none !important;
  }

  #experience .life-card:nth-child(1),
  #experience .experience-card-35 {
    grid-column: 1 / -1 !important;
  }

  #experience .life-card:nth-child(2),
  #experience .experience-card-36 {
    grid-column: 1 / span 6 !important;
  }

  #experience .life-card:nth-child(3),
  #experience .experience-card-37 {
    grid-column: 7 / span 6 !important;
  }

  #experience .life-card .slot {
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
    border: 1px solid rgba(255,255,255,.13) !important;
    border-radius: clamp(20px, 2.2vw, 30px) !important;
    background: #0b0b09 !important;
    box-shadow: 0 28px 80px rgba(0,0,0,.28);
    aspect-ratio: 3 / 2 !important;
  }

  #experience .life-card:nth-child(1) .slot,
  #experience .experience-card-35 .slot {
    aspect-ratio: 16 / 9 !important;
  }

  #experience .life-card .slot::before,
  #experience .life-card .slot::after,
  #experience .life-card .slot > .slot-copy,
  #experience .life-card .slot > .slot-path {
    display: none !important;
  }

  #experience .life-card .slot > img {
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
    transition: filter .35s ease !important;
  }

  #experience .life-card:hover .slot > img {
    transform: none !important;
    scale: 1 !important;
    filter: saturate(1.035) contrast(1.045) brightness(1.015);
  }

  #experience .life-card h3 {
    max-width: 100% !important;
    margin: clamp(18px, 2.2vw, 28px) 0 0 !important;
    font-size: clamp(1.9rem, 3.4vw, 4.1rem) !important;
    line-height: .94 !important;
    letter-spacing: -.055em !important;
    text-wrap: balance;
  }

  #experience .life-card[data-experience-label] h3::before {
    content: attr(data-experience-label);
    display: block;
    margin-bottom: 12px;
    color: var(--orange);
    font: 700 .7rem ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    letter-spacing: .14em;
    text-transform: uppercase;
  }

  @media (max-width: 980px) {
    #experience .lifestyle {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    }

    #experience .life-card:nth-child(1),
    #experience .experience-card-35 {
      grid-column: 1 / -1 !important;
    }

    #experience .life-card:nth-child(2),
    #experience .experience-card-36,
    #experience .life-card:nth-child(3),
    #experience .experience-card-37 {
      grid-column: auto !important;
    }
  }

  @media (max-width: 680px) {
    #experience .lifestyle {
      width: min(100% - 28px, 1240px) !important;
      grid-template-columns: 1fr !important;
      gap: 34px !important;
    }

    #experience .life-card,
    #experience .life-card:nth-child(n),
    #experience .experience-card-35,
    #experience .experience-card-36,
    #experience .experience-card-37 {
      grid-column: 1 / -1 !important;
    }

    #experience .life-card .slot,
    #experience .life-card:nth-child(1) .slot,
    #experience .experience-card-35 .slot {
      aspect-ratio: 3 / 2 !important;
      border-radius: 20px !important;
    }

    #experience .life-card h3 {
      font-size: clamp(1.8rem, 9vw, 3rem) !important;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    #experience .life-card .slot > img {
      transition: none !important;
    }
  }
</style>`;

const script = `
<script id="wavex-visual-experience-script">
(function () {
  var section = document.getElementById('experience');
  if (!section) return;

  var labels = {
    35: '01 · Morning',
    36: '02 · Day',
    37: '03 · Night'
  };

  Array.prototype.forEach.call(section.querySelectorAll('.life-card'), function (card, index) {
    var img = card.querySelector('img');
    if (!img) return;

    var raw = Number(img.getAttribute('data-asset-number') || 0);
    var src = img.getAttribute('src') || '';
    var number = raw;

    if (number < 35 || number > 37) {
      var match = src.match(/assets\\/images\\/(35|36|37)\\.png/i);
      number = Number(match && match[1] || 35 + index);
    }

    for (var oldNumber = 35; oldNumber <= 37; oldNumber += 1) {
      card.classList.remove('experience-card-' + oldNumber);
    }

    card.classList.add('experience-card', 'experience-card-' + number);
    card.setAttribute('data-experience-label', labels[number] || ('0' + (index + 1)));

    var holder = img.closest('.slot');
    if (holder) {
      holder.classList.remove('media-fit', 'media-fill', 'asset-ratio-frame', 'cinematic-media');
      holder.style.removeProperty('--asset-ratio');
      holder.style.removeProperty('height');
      holder.style.removeProperty('aspect-ratio');
    }

    img.style.objectFit = 'cover';
    img.style.objectPosition = 'center center';
    img.style.transform = 'none';
  });
})();
</script>`;

html = html.replace(/<style id="wavex-visual-experience-fix">[\s\S]*?<\/style>/g, '');
html = html.replace(/<script id="wavex-visual-experience-script">[\s\S]*?<\/script>/g, '');

if (!html.includes('</head>') || !html.includes('</body>')) {
  throw new Error('fix-visual-experience.js: index.html is missing </head> or </body>.');
}

html = html.replace('</head>', `${styles}\n</head>`);
html = html.replace('</body>', `${script}\n</body>`);
fs.writeFileSync(file, html);

console.log('Visual Experience fixed: assets 35.png through 37.png use a polished responsive story layout.');
