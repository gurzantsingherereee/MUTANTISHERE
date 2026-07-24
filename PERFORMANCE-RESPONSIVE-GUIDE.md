# WAVEX Responsive Media and Performance System

The website now uses one master image per visual slot across desktop, tablet and mobile.

## How the image system works

- Product, packaging, manuals, PDP artwork and Design Strategy visuals use `object-fit: contain` so the complete image remains visible.
- A restrained blurred version of the same image fills unused container space, keeping the presentation cinematic without cropping the important foreground image.
- Hero and final-outcome backgrounds use `object-fit: cover` because those are atmospheric full-screen backgrounds.
- Responsive aspect ratios replace fixed pixel heights on tablet and mobile.

## Recommended source-image rules

- Keep the product and important details inside the central 70% of the frame.
- Avoid important text or objects within the outer 10% of any edge.
- Use high-resolution source images, preferably 2400 px or more on the long edge.
- Use PNG for transparent product and packaging artwork.
- Use WebP or optimized JPG for photographic scenes when possible.

## Performance improvements

- The hero image is preloaded and receives high fetch priority.
- Images below the fold use native lazy loading, asynchronous decoding and low fetch priority.
- Missing numbered images use lightweight local SVG placeholders instead of downloading random images from external services.
- Design Strategy fallbacks no longer download Unsplash images.
- Sections below the fold use `content-visibility: auto`.
- Scroll progress updates are throttled through `requestAnimationFrame`.
- The loader is tied to the real page load and is capped below one second.
- Expensive cursor, parallax, hover and noise effects are reduced or disabled on touch devices.
- Data Saver and reduced-motion preferences automatically reduce decorative processing.

## Build order

The final deployment step is:

```text
node cinematic-performance.js
```

It runs after the existing page, comparison, hero, typography, Design Strategy and responsive-media build steps.