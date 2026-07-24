const fs = require('fs');

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

const fontStyles = `
<style id="wavex-original-font">
  @font-face {
    font-family: "WAVEX Display";
    src:
      url("assets/fonts/WAVEX-Display.woff2") format("woff2"),
      url("assets/fonts/WAVEX-Display.woff") format("woff"),
      url("assets/fonts/WAVEX-Display.ttf") format("truetype");
    font-style: normal;
    font-weight: 400 900;
    font-display: swap;
  }

  .display,
  .heading,
  .type-demo,
  .copy-panel h3,
  .packaging-copy h3,
  .card h3,
  .life-card h3,
  .document-card strong,
  .motion-marquee-track {
    font-family: "WAVEX Display", "Arial Narrow", Impact, sans-serif !important;
  }

  .type-demo {
    letter-spacing: -0.055em;
  }

  .type-caption {
    margin: 0;
    color: var(--grey);
    font-size: .78rem;
    letter-spacing: .12em;
    text-transform: uppercase;
  }
</style>`;

if (!html.includes('id="wavex-original-font"')) {
  html = html.replace('</head>', fontStyles + '\n</head>');
}

html = html.replace(
  /<p class="lead" style="font-size:\.9rem">Replace the display fallback after the original font file is supplied\.<\/p>/,
  '<p class="type-caption">WAVEX Display · Primary Typeface</p>'
);

fs.writeFileSync(file, html);
console.log('Applied WAVEX display font integration and removed the fallback note.');
