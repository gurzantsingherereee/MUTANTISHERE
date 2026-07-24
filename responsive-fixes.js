const fs = require('fs');

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

const responsiveStyles = `
<style id="wavex-responsive-compatibility">
  /* Global width and overflow safety */
  html,
  body {
    width: 100%;
    max-width: 100%;
    overflow-x: clip;
  }

  body,
  main,
  section,
  .container,
  .two,
  .brand-grid,
  .packaging-hero,
  .feature-stage,
  .manual-viewer,
  .ds-heading-grid,
  .ds-experience,
  .ds-visual,
  .ds-detail {
    min-width: 0;
  }

  .container {
    width: min(1240px, calc(100% - clamp(24px, 4vw, 44px)));
  }

  img,
  svg,
  video,
  canvas {
    max-width: 100%;
  }

  /* Safer fluid typography across the full website */
  .display,
  .heading,
  .type-demo,
  .copy-panel h3,
  .packaging-copy h3,
  .card h3,
  .life-card h3,
  .ds-detail h3 {
    max-width: 100%;
    text-wrap: balance;
    overflow-wrap: normal;
    word-break: normal;
  }

  .display {
    font-size: clamp(3.5rem, 10vw, 10rem);
    line-height: .88;
    letter-spacing: -.055em;
  }

  .heading {
    font-size: clamp(2.45rem, 6vw, 6.25rem);
    line-height: .91;
    letter-spacing: -.05em;
  }

  .copy-panel h3,
  .packaging-copy h3 {
    font-size: clamp(2.4rem, 4.7vw, 4.85rem);
    line-height: .92;
    letter-spacing: -.045em;
  }

  /* Design Strategy: desktop-safe sizing */
  .design-strategy-section {
    overflow: clip;
  }

  .design-strategy-section .heading {
    max-width: 900px;
    font-size: clamp(2.7rem, 5.4vw, 5.7rem);
    line-height: .92;
  }

  .ds-heading-grid {
    grid-template-columns: minmax(0, 1.2fr) minmax(260px, .8fr);
    gap: clamp(28px, 5vw, 72px);
  }

  .ds-intro {
    max-width: 480px;
    font-size: clamp(.98rem, 1.25vw, 1.14rem);
  }

  .ds-experience {
    grid-template-columns: minmax(0, 1.35fr) minmax(300px, .65fr);
    min-height: clamp(620px, 52vw, 720px);
  }

  .ds-visual {
    min-height: clamp(620px, 52vw, 720px);
  }

  .ds-visual-caption {
    min-width: 0;
    font-size: clamp(2.8rem, 5.6vw, 6rem);
    line-height: .84;
  }

  .ds-visual-caption span {
    min-width: 0;
    max-width: 100%;
    overflow-wrap: normal;
  }

  .ds-detail {
    padding: clamp(26px, 3.2vw, 42px);
  }

  .ds-index {
    font-size: clamp(3.25rem, 4vw, 4.25rem);
  }

  .ds-detail h3 {
    margin: clamp(38px, 6vh, 72px) 0 16px;
    font-size: clamp(2.8rem, 4.25vw, 4.9rem);
    line-height: .88;
    letter-spacing: .005em;
  }

  .ds-detail > p {
    min-height: 0;
    font-size: clamp(.92rem, 1vw, 1rem);
    line-height: 1.65;
  }

  .ds-tab {
    grid-template-columns: 34px minmax(0, 1fr) auto;
  }

  .ds-tab span {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  .ds-equation {
    border-radius: 24px;
    padding: 20px 22px;
  }

  /* Medium desktop and tablet */
  @media (max-width: 1120px) {
    .design-strategy-section .heading {
      max-width: 760px;
      font-size: clamp(2.6rem, 6.8vw, 5.1rem);
    }

    .ds-heading-grid {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .ds-intro {
      max-width: 680px;
    }

    .ds-experience {
      grid-template-columns: 1fr;
      min-height: 0;
    }

    .ds-visual {
      min-height: 0;
      aspect-ratio: 16 / 10;
    }

    .ds-detail:before {
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--orange), transparent);
    }

    .ds-detail h3 {
      margin: 34px 0 16px;
      font-size: clamp(3rem, 8vw, 4.7rem);
    }

    .ds-selector {
      margin-top: 34px;
    }
  }

  /* Mobile */
  @media (max-width: 680px) {
    :root {
      --container: calc(100vw - 26px);
    }

    .container {
      width: calc(100% - 26px);
    }

    .section {
      padding: 84px 0;
    }

    .display {
      font-size: clamp(3.4rem, 18vw, 6.2rem);
      line-height: .9;
    }

    .heading,
    .design-strategy-section .heading {
      max-width: 100%;
      font-size: clamp(2.35rem, 12vw, 4.15rem);
      line-height: .94;
      letter-spacing: -.04em;
      text-wrap: pretty;
    }

    .heading br,
    .design-strategy-section .heading br {
      display: none;
    }

    .ds-heading-grid {
      gap: 20px;
    }

    .ds-intro {
      font-size: .98rem;
      line-height: 1.65;
    }

    .ds-experience {
      margin-top: 34px;
      border-radius: 20px;
    }

    .ds-visual {
      aspect-ratio: 4 / 5;
      min-height: 0;
    }

    .ds-image {
      object-position: center center;
    }

    .ds-visual-topline {
      top: 16px;
      left: 16px;
      right: 16px;
      gap: 10px;
      font-size: .5rem;
      letter-spacing: .1em;
    }

    .ds-visual-topline span:first-child {
      max-width: 70%;
    }

    .ds-visual-caption {
      left: 16px;
      right: 16px;
      bottom: 16px;
      gap: 12px;
      font-size: clamp(2.6rem, 15vw, 4.8rem);
    }

    .ds-detail {
      padding: 22px 18px 24px;
    }

    .ds-detail-head {
      align-items: center;
    }

    .ds-index {
      font-size: 3.1rem;
    }

    .ds-detail h3 {
      margin: 28px 0 14px;
      font-size: clamp(2.75rem, 14vw, 4rem);
      line-height: .9;
    }

    .ds-detail > p {
      font-size: .93rem;
      line-height: 1.65;
    }

    .ds-tags {
      gap: 6px;
      margin-top: 18px;
    }

    .ds-tags span {
      padding: 7px 9px;
      font-size: .59rem;
    }

    .ds-progress {
      margin: 24px 0 8px;
    }

    .ds-selector {
      margin-top: 24px;
    }

    .ds-tab {
      grid-template-columns: 30px minmax(0, 1fr) auto;
      gap: 9px;
      padding: 13px 0;
    }

    .ds-tab:hover,
    .ds-tab.active {
      padding-left: 4px;
    }

    .ds-tab span {
      font-size: .75rem;
      letter-spacing: .065em;
    }

    .ds-equation {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      align-items: stretch;
      gap: 8px;
      padding: 14px;
      border-radius: 18px;
    }

    .ds-equation i {
      display: none;
    }

    .ds-equation span,
    .ds-equation b {
      width: auto;
      min-width: 0;
      padding: 10px;
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 12px;
      text-align: center;
      overflow-wrap: anywhere;
    }

    .copy-panel h3,
    .packaging-copy h3,
    .card h3,
    .life-card h3 {
      font-size: clamp(2.15rem, 10vw, 3.6rem);
      line-height: .95;
    }
  }

  /* Very small phones */
  @media (max-width: 390px) {
    .heading,
    .design-strategy-section .heading {
      font-size: clamp(2.15rem, 11.5vw, 3.35rem);
    }

    .ds-visual {
      aspect-ratio: 3 / 4;
    }

    .ds-detail h3 {
      font-size: clamp(2.55rem, 13vw, 3.45rem);
    }

    .ds-equation {
      grid-template-columns: 1fr;
    }
  }

  @supports not (overflow: clip) {
    html,
    body,
    .design-strategy-section {
      overflow-x: hidden;
    }
  }
</style>`;

html = html.replace(/<style id="wavex-responsive-compatibility">[\s\S]*?<\/style>/, '');
html = html.replace('</head>', responsiveStyles + '\n</head>');

fs.writeFileSync(file, html);
console.log('Applied desktop, tablet and mobile responsive compatibility fixes.');
