const fs = require('fs');

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

// Remove the previous local-font integration, if it exists.
html = html
  .replace(/<style id="wavex-original-font">[\s\S]*?<\/style>/g, '')
  .replace(/<style id="wavex-font-system">[\s\S]*?<\/style>/g, '')
  .replace(/<link[^>]+id="wavex-google-fonts"[^>]*>/g, '')
  .replace(/<link[^>]+id="wavex-google-fonts-preconnect"[^>]*>/g, '')
  .replace(/<link[^>]+id="wavex-google-fonts-static"[^>]*>/g, '');

const fontLinks = `
<link id="wavex-google-fonts-preconnect" rel="preconnect" href="https://fonts.googleapis.com">
<link id="wavex-google-fonts-static" rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link id="wavex-google-fonts" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500;600;700&display=swap">
`;

const typographyStyles = `
<style id="wavex-font-system">
  :root {
    --font-display: "Bebas Neue", "Arial Narrow", Impact, sans-serif;
    --font-body: "Montserrat", Inter, ui-sans-serif, system-ui, sans-serif;
  }

  html,
  body,
  button,
  input,
  textarea,
  select {
    font-family: var(--font-body) !important;
  }

  .display,
  .heading,
  .type-demo,
  .copy-panel h3,
  .packaging-copy h3,
  .card h3,
  .life-card h3,
  .document-card strong,
  .motion-marquee-track,
  .comparison-title,
  .family-item h3 {
    font-family: var(--font-display) !important;
    font-weight: 400 !important;
  }

  .section-label,
  .nav-links,
  .button,
  .pill,
  .type-font-row,
  .slot-copy,
  .hero-meta,
  .facts,
  .lead,
  .credits,
  .footer {
    font-family: var(--font-body) !important;
  }

  .type-demo {
    letter-spacing: -0.025em !important;
  }

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
    font-weight: 700;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .type-font-row small {
    color: var(--grey);
    font-size: .72rem;
    font-weight: 500;
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

if (!html.includes('id="wavex-google-fonts"')) {
  html = html.replace('</head>', fontLinks + typographyStyles + '\n</head>');
}

html = html.replace(
  /<p class="lead" style="font-size:\.9rem">Replace the display fallback after the original font file is supplied\.<\/p>/,
  typographyNames
);

html = html.replace(
  /<p class="type-caption">[\s\S]*?<\/p>/,
  typographyNames
);

fs.writeFileSync(file, html);
console.log('Loaded Bebas Neue and Montserrat from Google Fonts and applied the WAVEX typography system.');
