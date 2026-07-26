# WAVEX — Current Website Image Prompt Guide

This file is aligned with the **current compressed WAVEX case-study website**. It explains exactly which images are live, where each file must be uploaded, and how each image should be produced.

For a quick filename-only checklist, also read [`IMAGE-MAP.md`](./IMAGE-MAP.md).

---

## 1. Exact upload locations

### Website images

Upload every active numbered image and every Design Strategy image to one folder:

```text
assets/images/
```

Examples:

```text
assets/images/1.png
assets/images/7.png
assets/images/20.png
assets/images/63.png
assets/images/ds1.png
assets/images/ds5.png
```

**Use this folder:** [`assets/images/`](./assets/images/)

> The live website looks in `assets/images/` first. Older folders are only compatibility fallbacks. Do not upload new Design Strategy files to `assets/design-strategy/`.

### PDF files

Upload the approved PDFs here:

```text
pdf/WAVEX-5W-Packaging.pdf
pdf/WAVEX-10W-Packaging.pdf
pdf/WAVEX-User-Manual.pdf
```

**Use this folder:** [`pdf/`](./pdf/)

### Brand logo

```text
assets/brand/wavex-logo.svg
```

---

## 2. Current live website structure

Only the files below are used by the current compressed website.

| Website section | Active files | Display behaviour |
|---|---|---|
| Hero | `1.png` | Full-width cinematic background |
| Project Snapshot | `4.png` | Transparent product cutout |
| Big Idea | `5.png` | Wide 16:9 lifestyle image |
| Design Strategy | `ds1.png`–`ds5.png` | One interactive image visible at a time |
| Moodboard | `7.png`–`12.png` | Structured editorial collage |
| Visual Language | `13.png`–`16.png` | Texture grid and wide route graphic |
| Packaging System | `19.png`–`28.png` | Square cards, comparison cards and expandable panels |
| Feature Experience | `29.png`–`34.png` | One interactive feature image visible at a time |
| User Manual | `41.png`–`46.png` | One interactive manual image visible at a time |
| Selected PDP Work | `51.png`–`56.png` | Three visible cards and three expandable cards |
| Final Outcome | `63.png` | Full-width closing composition |

### Reserved for future expansion

These files are **not currently displayed** by the live website:

```text
2.png, 3.png, 6.png, 17.png, 18.png,
35.png–40.png, 47.png–50.png, 57.png–62.png, 64.png
```

Keep those IDs reserved. They can be activated later without renumbering the current website.

---

## 3. File naming rules

- Use the exact filenames shown in this document.
- Use lowercase `ds` for `ds1.png`–`ds5.png`.
- Numbered filenames must contain only the number and `.png`.
- GitHub Pages is case-sensitive: `7.png` and `7.PNG` are different files.
- Replace the existing file; do not upload names such as `7-new.png`, `7 final.png` or `7(1).png`.
- Export in **sRGB**. Do not upload CMYK website images.
- Keep the full product, package, manual or artwork inside the frame unless the prompt explicitly requests a material macro.

---

## 4. Website performance rules

The current site is intentionally compressed and should remain fast.

- Strip unnecessary metadata before upload.
- Optimise PNG files before committing them.
- Avoid files larger than needed for the listed dimensions.
- Keep large photographic PNGs preferably below about **2.5 MB** when quality allows.
- Keep square textures and PDP images preferably below about **1.5 MB** when quality allows.
- Transparent package and product cutouts may be larger, but avoid uncompressed 8–20 MB exports.
- Do not upscale a small image merely to match the dimensions; regenerate or re-export from the source.
- Keep key subjects away from the outer 10–12% because responsive crops vary.
- Do not embed website headings inside images. The website adds headings with HTML.

---

## 5. Global product and packaging accuracy

### Product accuracy

For every WAVEX speaker image:

> Use the supplied WAVEX speaker reference exactly. Preserve the matte-black cylindrical body, premium black woven mesh, bright-orange hanging loop, correct top-control layout and real vertical RGB light strip. Do not invent buttons, ports, logos, proportions, accessories or feature claims.

### Packaging accuracy

For every packaging image:

> Use the official WAVEX packaging artwork exactly. Do not ask AI to redraw printed text. Apply the approved artwork to a realistic mockup, or export directly from the official PDF when instructed. Preserve all logos, colours, typography, icons and panel graphics.

### Manual accuracy

For every manual image:

> Use the exact approved WAVEX manual page. Do not regenerate, rewrite or approximate printed text, icons, specifications or diagrams.

---

# 01 — Hero and introduction

## `1.png` — Complete hero composition

**Upload to:** `assets/images/1.png`  
**Dimensions:** 2560 × 1440 px  
**Format:** PNG, 16:9

> Create a premium cinematic WAVEX hero composition using the supplied mountain-sunset background, official WAVEX 10W packaging and exact WAVEX speaker reference. Arrange the package and speaker on the right side of a rocky mountain foreground under warm adventure-orange sunset light. Keep the entire left 48 percent deep navy-black, uncluttered and low-detail for the HTML headline. Keep the full speaker and full package visible. Preserve realistic product and packaging details, clear shadow detail, subtle fog and premium advertising art direction. No embedded headline, extra products, floating objects or invented badges.

## `4.png` — Project Snapshot speaker

**Upload to:** `assets/images/4.png`  
**Dimensions:** 2200 × 3000 px  
**Format:** Transparent PNG

> Use the exact WAVEX speaker reference. Create a clean front three-quarter studio render with realistic black mesh, orange loop, correct top controls and vertical RGB strip. Use soft directional lighting, balanced contrast and a transparent background. Keep the complete product visible with generous even margin. No environment or text.

## `5.png` — Big Idea campsite

**Upload to:** `assets/images/5.png`  
**Dimensions:** 2560 × 1440 px  
**Format:** PNG, 16:9

> Use the exact WAVEX speaker reference. Create a premium cinematic mountain campsite at sunset with the speaker placed naturally on weathered rock or a refined camp table. Include a folded contour map, metal compass, restrained rope and enamel mug without clutter. Use deep blue shadows, warm adventure-orange light and realistic materials. Keep the speaker fully visible and important details inside the central safe area. No embedded text, floating product or extra speaker.

---

# 02 — Interactive Design Strategy

Upload all five files directly to `assets/images/`.

All five images use **2400 × 1600 px, 3:2 horizontal PNG**.

## `ds1.png` — Adventurous

**Upload to:** `assets/images/ds1.png`

> Use the exact WAVEX speaker reference. Create a premium cinematic mountain campsite at sunset with the speaker on weathered rock beside a folded contour map, enamel mug, subtle rope and metal compass. Use deep navy shadows, warm adventure-orange sunlight and realistic atmosphere. Keep the product fully visible with accurate mesh, orange loop, controls and RGB strip. No text, packaging or extra speaker.

## `ds2.png` — Rugged

**Upload to:** `assets/images/ds2.png`

> Place the exact WAVEX speaker securely against dark wet basalt rock after light rain. Add realistic droplets on the top surface and restrained moisture on the mesh. Use low-key mountain lighting with one controlled orange edge reflection. Emphasise material strength without making the scene aggressive or industrial. Keep the complete product visible. No text or badges.

## `ds3.png` — Immersive

**Upload to:** `assets/images/ds3.png`

> Create a cinematic dusk mountain scene with the exact WAVEX speaker standing on dark rock while elegant concentric orange sound-wave rings expand through subtle fog. Use layered depth and restrained light particles. Keep the product grounded, realistic and fully visible. No text, floating product or fake specifications.

## `ds4.png` — Modern

**Upload to:** `assets/images/ds4.png`

> Create a refined contemporary studio composition using matte-black geometric planes, subtle charcoal textures and one precise adventure-orange edge light. Position the exact WAVEX speaker at a clean three-quarter angle with balanced negative space and crisp material definition. Keep the full product visible. No packaging, text or floating parts.

## `ds5.png` — Energetic

**Upload to:** `assets/images/ds5.png`

> Create a dynamic blue-hour product scene with elegant orange light trails moving around the exact WAVEX speaker and restrained rhythm particles. Let the real RGB strip glow vividly while the black mesh and orange loop remain realistic. Keep the speaker grounded on dark textured rock and fully visible. No text, fake claims or extra speaker.

---

# 03 — Moodboard collage

The website combines these six images into one controlled collage. Compose each image for its assigned crop.

## `7.png` — Mountain exploration

**Upload to:** `assets/images/7.png`  
**Dimensions:** 2000 × 1500 px, 4:3

> Create cinematic layered mountain silhouettes at sunset with soft fog, deep blue shadows and restrained adventure-orange light. Premium editorial adventure photography with the important ridgelines in the central safe area. No product, logo or text.

## `8.png` — Campfire warmth

**Upload to:** `assets/images/8.png`  
**Dimensions:** 1600 × 2000 px, 4:5

> Create a close atmospheric campfire scene with glowing embers, fine sparks and warm orange light against a deep dark outdoor background. Premium editorial photography, shallow depth of field and a vertical composition. Keep the flame inside the central safe area. No people, product or text.

## `9.png` — Speaker mesh

**Upload to:** `assets/images/9.png`  
**Dimensions:** 1600 × 1600 px, 1:1

> Create an extreme macro photograph of premium black woven speaker mesh with realistic texture, subtle depth and one controlled orange reflection. Minimal, technical and refined. No logo, product silhouette or text.

## `10.png` — Rugged rock

**Upload to:** `assets/images/10.png`  
**Dimensions:** 1600 × 1600 px, 1:1

> Create a dark basalt-rock material study with realistic cracks, layered mineral detail, low-key lighting and a subtle warm orange edge reflection. No objects or text.

## `11.png` — Compass and map

**Upload to:** `assets/images/11.png`  
**Dimensions:** 1600 × 2000 px, 4:5

> Create a premium top-down travel composition with a folded contour map, metal compass, restrained rope and one orange route accent. Use a dark warm surface and controlled shadows. Keep all important objects inside the central safe area. No readable place names, logos or text.

## `12.png` — Route and movement

**Upload to:** `assets/images/12.png`  
**Dimensions:** 2000 × 1500 px, 4:3

> Create an aerial view of a winding trail through dark mountainous terrain with one elegant orange route accent. Communicate movement and direction through a cinematic premium editorial composition. Keep the trail readable inside the central safe area. No labels, typography or product.

---

# 04 — Visual Language

## `13.png` — Mesh texture

**Upload to:** `assets/images/13.png`  
**Dimensions:** 2048 × 2048 px, 1:1

> Create a seamless square macro texture of premium black woven speaker mesh, evenly lit with realistic depth and subtle tonal variation. No logo, object outline, border or text.

## `14.png` — Rock texture

**Upload to:** `assets/images/14.png`  
**Dimensions:** 2048 × 2048 px, 1:1

> Create a seamless square dark basalt-rock texture with realistic surface variation and a very subtle orange edge reflection. Keep it neutral enough for use as a website texture. No objects, borders or text.

## `15.png` — Distress mask

**Upload to:** `assets/images/15.png`  
**Dimensions:** 2048 × 2048 px, 1:1

> Create a high-contrast black-and-white distressed print mask with irregular ink loss, scratches, worn edges and rough screen-print texture. Do not include letters, words, logos or recognisable shapes.

## `16.png` — Route pattern

**Upload to:** `assets/images/16.png`  
**Dimensions:** 2400 × 1200 px, 2:1  
**Format:** Transparent PNG

> Create a clean vector-style adventure route line with small waypoints, subtle contour references and light sound-wave geometry. Use a single adventure-orange stroke on a genuinely transparent background. No checkerboard, white background, glow field, place names, labels, numbers or text.

---

# 05 — Packaging System

The website presents package renders and artwork previews in square cards. Keep the complete package or artwork visible with generous margin.

## `19.png` — 5W package hero

**Upload to:** `assets/images/19.png`  
**Dimensions:** 2200 × 3200 px  
**Format:** Transparent PNG

> Use the official WAVEX 5W packaging artwork exactly. Create a premium upright front three-quarter retail-box mockup with realistic paperboard, accurate folds, subtle production texture and controlled orange rim light. Transparent background, complete package visible with even margin. Do not redraw or rewrite artwork.

## `20.png` — 5W full artwork

**Upload to:** `assets/images/20.png`  
**Dimensions:** 2600 × 1800 px  
**Format:** PNG

> Do not generate this with AI. Export the complete full-colour artwork page directly from the official WAVEX 5W packaging PDF at high resolution. Preserve every panel, boundary, colour, icon and printed word exactly. Crop with an even outer margin and no perspective distortion.

## `21.png` — 5W front panel

**Upload to:** `assets/images/21.png`  
**Dimensions:** 1600 × 2000 px

> Crop the exact front hero panel from the official 5W packaging artwork. Keep the complete panel boundary visible, flat, colour-accurate and distortion-free. Do not use AI or alter text, branding or graphics.

## `22.png` — 5W lifestyle panel

**Upload to:** `assets/images/22.png`  
**Dimensions:** 1600 × 2000 px

> Crop the exact lifestyle panel from the official 5W packaging artwork. Keep the complete panel boundary visible, flat, colour-accurate and distortion-free. Do not use AI or alter printed content.

## `23.png` — 5W story panel

**Upload to:** `assets/images/23.png`  
**Dimensions:** 1600 × 2000 px

> Crop the exact “Sound That Moves You” story panel from the official 5W packaging artwork. Keep the complete panel boundary visible and preserve every printed detail exactly. Do not use AI.

## `24.png` — 5W feature panel

**Upload to:** `assets/images/24.png`  
**Dimensions:** 1600 × 2000 px

> Crop the exact feature and route-graphic panel from the official 5W packaging artwork. Keep every icon, route graphic and printed detail accurate. Do not use AI or alter text.

## `25.png` — 10W package hero

**Upload to:** `assets/images/25.png`  
**Dimensions:** 2200 × 3300 px  
**Format:** Transparent PNG

> Use the official WAVEX 10W packaging artwork exactly and preserve the 110 × 110 × 210 mm structure. Create a premium upright front three-quarter retail-box mockup with realistic paperboard, clean folds, subtle production texture and controlled orange edge lighting. Transparent background, complete package visible with even margin. Do not redraw or rewrite artwork.

## `26.png` — 10W full artwork

**Upload to:** `assets/images/26.png`  
**Dimensions:** 2600 × 1800 px

> Do not generate this with AI. Export the complete full-colour artwork page directly from the official WAVEX 10W packaging PDF at high resolution. Preserve every panel, boundary, colour, icon and printed word exactly. Keep an even outer margin and no perspective distortion.

## `27.png` — 5W comparison render

**Upload to:** `assets/images/27.png`  
**Dimensions:** 2200 × 2200 px  
**Format:** Transparent PNG, 1:1

> Use the official WAVEX 5W package artwork exactly. Create a centred premium studio render on a fixed neutral baseline with an orthographic-feeling camera and even lighting. Keep the full package visible. Match the camera, baseline, crop and lighting of `28.png` exactly.

## `28.png` — 10W comparison render

**Upload to:** `assets/images/28.png`  
**Dimensions:** 2200 × 2200 px  
**Format:** Transparent PNG, 1:1

> Use the official WAVEX 10W package artwork exactly and preserve its physical proportion. Create a centred premium studio render on the same baseline, camera, canvas, crop and lighting as `27.png`. Keep the complete package visible and make the height difference physically believable.

### Required packaging PDFs

```text
pdf/WAVEX-5W-Packaging.pdf
pdf/WAVEX-10W-Packaging.pdf
```

The square artwork cards use `20.png` and `26.png` as previews and open these original PDFs when clicked.

---

# 06 — Feature Experience

All feature images use **2560 × 1440 px, 16:9 PNG** and are loaded interactively one at a time.

## `29.png` — Sound

**Upload to:** `assets/images/29.png`

> Create a premium wide scene with the exact WAVEX speaker surrounded by restrained orange acoustic rings and subtle driver energy. Use a deep-black environment, controlled orange highlights and realistic materials. Keep the complete speaker visible and reserve negative space for HTML copy. No embedded typography.

## `30.png` — 360-degree sound

**Upload to:** `assets/images/30.png`

> Centre the exact WAVEX speaker inside an elegant circular orange spatial-sound orbit with subtle waves moving around the cylinder. Use a premium deep-black environment, realistic reflections and refined motion. Keep the full product visible. No text or extra speakers.

## `31.png` — Splash protection

**Upload to:** `assets/images/31.png`

> Create a premium splash-protection scene with the exact WAVEX speaker, realistic suspended droplets and one elegant water arc. Preserve full visibility of the mesh, orange loop, controls and RGB strip. Use a deep-black background and controlled orange edge light. No embedded claims or text.

## `32.png` — Playback

**Upload to:** `assets/images/32.png`

> Create a cinematic campsite scene that transitions from warm sunset to deep blue night as a playback-time metaphor. Place the exact WAVEX speaker naturally in the foreground and keep it fully visible. Use refined camping details and clean negative space. No percentages, unverified claims or text.

## `33.png` — RGB lighting

**Upload to:** `assets/images/33.png`

> Create a dark premium macro product scene focused on the real vertical RGB strip. Let the RGB light glow subtly while the speaker remains matte black and realistic. Show mesh texture and orange-loop detail with controlled contrast. Do not turn the whole product neon. No text.

## `34.png` — Portability

**Upload to:** `assets/images/34.png`

> Show the exact WAVEX speaker naturally attached to a premium outdoor backpack using the bright-orange hanging loop. Create a mountain-trail environment with realistic fabric and metal details and a clear sense of movement. Keep the complete product and loop visible. No visible faces, text or extra products.

---

# 07 — User Manual

Use the exact approved manual pages. All six images use **2200 × 1600 px, 11:8 PNG**.

## `41.png` — Cover

**Upload to:** `assets/images/41.png`

> Use the exact WAVEX manual cover. Create a realistic closed booklet at a slight three-quarter angle on a premium dark studio surface with restrained orange accent lighting. Preserve every printed word and graphic exactly. Keep the complete booklet visible.

## `42.png` — Welcome and In the Box

**Upload to:** `assets/images/42.png`

> Use the exact approved welcome and in-the-box pages. Create a realistic open-booklet mockup with the full spread visible, realistic paper, centre fold and controlled shadows. Preserve all printed content exactly.

## `43.png` — Controls

**Upload to:** `assets/images/43.png`

> Use the exact approved controls page. Create a realistic open-booklet mockup with clear readable print, gentle page curvature and premium studio lighting. Preserve every icon, label and printed word exactly.

## `44.png` — Pairing and connection

**Upload to:** `assets/images/44.png`

> Use the exact approved charging, pairing and TWS page. Create a realistic open-booklet mockup with readable print, accurate fold and controlled shadows. Preserve every printed detail exactly.

## `45.png` — Battery care

**Upload to:** `assets/images/45.png`

> Use the exact approved battery-care and troubleshooting page. Create a realistic open-booklet mockup on a refined studio surface with subtle orange accents. Keep the full spread visible and every word and diagram accurate.

## `46.png` — Specifications

**Upload to:** `assets/images/46.png`

> Use the exact approved specifications page. Create a realistic open-booklet mockup with clear readable technical content, gentle page curve and premium controlled lighting. Keep the full spread visible and do not rewrite any specification.

### Required manual PDF

```text
pdf/WAVEX-User-Manual.pdf
```

---

# 08 — Selected PDP Work

All PDP images use **2000 × 2000 px, square PNG**.

The first three files are visible immediately. Files `54.png`–`56.png` are inside an expandable gallery.

## `51.png` — PDP hero

**Upload to:** `assets/images/51.png`

> Use the exact WAVEX speaker and official packaging references. Create a premium square ecommerce hero with product and package on a deep-black background, warm adventure-orange light and clean negative space. Keep both complete and fully visible. No generated text or fake claims.

## `52.png` — PDP 360-degree sound

**Upload to:** `assets/images/52.png`

> Create a premium square ecommerce visual with the exact WAVEX speaker centred inside restrained circular orange sound waves. Use a deep-black background, realistic lighting and clear negative space. Keep the complete speaker visible. No typography.

## `53.png` — PDP splash

**Upload to:** `assets/images/53.png`

> Create a premium square splash-protection visual with the exact WAVEX speaker, realistic droplets and one controlled water arc. Preserve all product details, use a deep-black background with orange edge light and keep the full speaker visible. No text.

## `54.png` — PDP playback

**Upload to:** `assets/images/54.png`

> Create a premium square campsite visual transitioning from sunset to night to suggest extended playback. Keep the exact WAVEX speaker naturally placed and fully visible. Leave clean space for HTML copy. No percentages, comparison claims or text.

## `55.png` — PDP dimensions source

**Upload to:** `assets/images/55.png`

> Create a clean square studio composition showing the exact WAVEX speaker from front and top angles on a neutral dark background. Keep both complete and leave wide empty areas for HTML or SVG dimension lines. Do not embed measurements or text.

## `56.png` — PDP In the Box

**Upload to:** `assets/images/56.png`

> Use the exact WAVEX speaker, Type-C cable, user manual and approved warranty card. Create a premium square top-down ecommerce flat lay with balanced spacing on a dark textured surface and subtle orange accents. Keep every item complete. No extra accessories or embedded text.

---

# 09 — Final Outcome

## `63.png` — Complete family composition

**Upload to:** `assets/images/63.png`  
**Dimensions:** 2560 × 1440 px  
**Format:** PNG, 16:9

> Use the official WAVEX 5W and 10W package artwork exactly, the exact WAVEX speaker reference, the exact manual cover, a black Type-C cable and the approved warranty card. Arrange the product family in a premium black studio composition with warm adventure-orange rim light, subtle ground reflection and atmospheric depth. Keep every object complete and fully visible. Keep the upper-left area calm and dark for the closing HTML headline. Add no extra accessories or embedded text.

---

# 10 — Upload workflow

1. Open [`assets/images/`](./assets/images/).
2. Select **Add file → Upload files**.
3. Upload the replacement using the exact filename.
4. Confirm that GitHub shows the correct case and extension.
5. Commit directly to `main`.
6. Wait for the GitHub Pages workflow to finish.
7. Open the live website and hard-refresh it.

For PDF replacements, repeat the same process inside [`pdf/`](./pdf/).

---

# 11 — Final checklist

Before uploading any image:

- [ ] Correct upload folder
- [ ] Exact filename and lowercase extension
- [ ] Correct dimensions and aspect ratio
- [ ] sRGB colour profile
- [ ] Product or package remains fully visible where required
- [ ] No accidental white or checkerboard background on transparent files
- [ ] No AI-redrawn packaging or manual text
- [ ] No embedded website heading
- [ ] File optimised for web delivery
- [ ] Important details remain inside the central safe area
