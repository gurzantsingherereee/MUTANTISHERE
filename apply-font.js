const fs = require('fs');

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

const typographyStyles = `
<style id="wavex-typography-names">
  .type-font-list {
    display: grid;
    gap: 10px;
    margin-top: 24px;
  }

  .type-font-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    padding: 14px 0;
    border-top: 1px solid var(--line);
  }

  .type-font-row b {
    color: var(--cream);
    font-size: .92rem;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .type-font-row small {
    color: var(--grey);
    font-size: .72rem;
    letter-spacing: .08em;
    text-align: right;
    text-transform: uppercase;
  }

  @media (max-width: 560px) {
    .type-font-row {
      align-items: flex-start;
      flex-direction: column;
      gap: 5px;
    }

    .type-font-row small {
      text-align: left;
    }
  }
</style>`;

if (!html.includes('id="wavex-typography-names"')) {
  html = html.replace('</head>', typographyStyles + '\n</head>');
}

const typographyNames = `
<div class="type-font-list" aria-label="WAVEX packaging typography">
  <div class="type-font-row">
    <b>Bebas Neue</b>
    <small>Display headlines · distressed treatment</small>
  </div>
  <div class="type-font-row">
    <b>Montserrat</b>
    <small>Regular · Medium · SemiBold · Bold</small>
  </div>
  <div class="type-font-row">
    <b>WAVEX / AILKIN</b>
    <small>Custom wordmarks</small>
  </div>
</div>`;

html = html.replace(
  /<p class="lead" style="font-size:\.9rem">Replace the display fallback after the original font file is supplied\.<\/p>/,
  typographyNames
);

html = html.replace(
  /<p class="type-caption">[\s\S]*?<\/p>/,
  typographyNames
);

html = html.replace(/<style id="wavex-original-font">[\s\S]*?<\/style>/, '');

fs.writeFileSync(file, html);
console.log('Added the verified packaging font names without loading font files.');