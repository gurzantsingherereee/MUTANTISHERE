const fs = require('fs');

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

const smartMediaStyles = `
<style id="wavex-smart-media-system">
  /*
    WAVEX responsive image system
    --------------------------------
    One uploaded image can be used on desktop, tablet and mobile.
    The browser responds to viewport width through CSS media queries.

    - Product, packaging, manual and comparison visuals use CONTAIN so the
      complete artwork stays visible.
    - Full-bleed hero/final backgrounds use COVER because they are atmospheric
      backgrounds rather than product-reference images.
    - Mobile cards use stable aspect ratios instead of fixed pixel heights.
  */

  .slot,
  .ds-visual,
  .hero-bg,
  .final-bg {
    --wavex-image-fit: cover;
    --wavex-image-position: center center;
  }

  .slot img,
  .ds-image,
  .hero-bg img,
  .final-bg img {
    width: 100%;
    height: 100%;
    max-width: none;
    object-fit: var(--wavex-image-fit);
    object-position: var(--wavex-image-position);
  }

  /* Artwork and product areas must never be cropped. */
  .slot.contain,
  .slot.portrait,
  .slot.tall,
  .slot.square,
  .family-item .slot,
  .packaging-hero .slot,
  .panel-grid .slot,
  .comparison .slot,
  .manual-viewer .slot,
  .inbox-grid .slot,
  .anatomy-grid .slot,
  .pdp-grid .slot {
    --wavex-image-fit: contain;
    background:
      radial-gradient(circle at 50% 45%, rgba(241,90,0,.08), transparent 42%),
      #0b0b09;
  }

  /* Design Strategy uses one master image and always shows the full frame. */
  .ds-visual {
    --wavex-image-fit: contain;
    background:
      radial-gradient(circle at 70% 35%, rgba(241,90,0,.11), transparent 38%),
      linear-gradient(145deg, #151410, #080807 72%);
  }

  .ds-image {
    object-fit: contain !important;
  }

  /* Full-bleed atmospheric sections remain edge-to-edge. */
  .hero-bg,
  .hero-bg .slot,
  .final-bg,
  .final-bg .slot {
    --wavex-image-fit: cover;
  }

  .hero-bg img,
  .final-bg img {
    object-fit: cover !important;
  }

  /* Optional focal-point helpers for future manual tuning. */
  [data-image-position="top"] { --wavex-image-position: center top; }
  [data-image-position="bottom"] { --wavex-image-position: center bottom; }
  [data-image-position="left"] { --wavex-image-position: left center; }
  [data-image-position="right"] { --wavex-image-position: right center; }

  @media (max-width: 980px) {
    /* Remove fixed image heights that caused tablet clipping. */
    .slot,
    .wide,
    .tall,
    .portrait,
    .dieline,
    .panel-grid .slot,
    .life-card .slot,
    .pdp-grid .slot,
    .production-grid .slot,
    .manual-viewer .slot {
      min-height: 0 !important;
    }

    .slot.wide,
    .slot.dieline {
      aspect-ratio: 16 / 10;
    }

    .slot.tall,
    .slot.portrait,
    .family-item .slot,
    .packaging-hero .slot,
    .panel-grid .slot,
    .manual-viewer .slot,
    .life-card .slot {
      aspect-ratio: 4 / 5;
    }

    .slot.square,
    .inbox-grid .slot,
    .anatomy-grid .slot,
    .pdp-grid .slot {
      aspect-ratio: 1 / 1;
    }

    .mood-grid .slot,
    .production-grid .slot {
      aspect-ratio: 4 / 3;
    }

    .comparison {
      min-height: 0 !important;
      aspect-ratio: 1 / 1;
    }

    .ds-visual {
      min-height: 0 !important;
      aspect-ratio: 4 / 3 !important;
    }
  }

  @media (max-width: 680px) {
    /* On phones, every content card prioritises the complete image. */
    .slot:not(.hero-bg .slot):not(.final-bg .slot) {
      --wavex-image-fit: contain;
    }

    .slot:not(.hero-bg .slot):not(.final-bg .slot) img {
      object-fit: contain !important;
    }

    .slot.wide,
    .slot.dieline,
    .mood-grid .slot,
    .production-grid .slot {
      aspect-ratio: 4 / 3;
    }

    .slot.tall,
    .slot.portrait,
    .family-item .slot,
    .packaging-hero .slot,
    .panel-grid .slot,
    .manual-viewer .slot,
    .life-card .slot {
      aspect-ratio: 4 / 5;
    }

    .ds-visual {
      aspect-ratio: 4 / 5 !important;
    }

    .comparison {
      aspect-ratio: 4 / 5;
    }
  }

  @media (max-width: 390px) {
    .slot.wide,
    .slot.dieline,
    .mood-grid .slot,
    .production-grid .slot {
      aspect-ratio: 1 / 1;
    }

    .ds-visual,
    .comparison {
      aspect-ratio: 3 / 4 !important;
    }
  }
</style>`;

html = html.replace(/<style id="wavex-smart-media-system">[\s\S]*?<\/style>/, '');
html = html.replace('</head>', smartMediaStyles + '\n</head>');

fs.writeFileSync(file, html);
console.log('Applied responsive single-image media compatibility system.');
