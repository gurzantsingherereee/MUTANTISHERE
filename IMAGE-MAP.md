# WAVEX — Live Website Image Map

This document shows **exactly where every current website image belongs**, which files are active, which files are interactive, and which files are reserved for future expansion.

For full production prompts, dimensions and creative instructions, read [`PROMPTS.md`](./PROMPTS.md).

---

## 1. Upload locations

### Website images

Upload every active numbered image and every Design Strategy image here:

[`assets/images/`](./assets/images/)

```text
MUTANTISHERE/
└── assets/
    └── images/
        ├── 1.png
        ├── 4.png
        ├── 5.png
        ├── 7.png
        ├── ...
        ├── 63.png
        ├── ds1.png
        ├── ds2.png
        ├── ds3.png
        ├── ds4.png
        └── ds5.png
```

The live website checks `assets/images/` first. Older asset folders are compatibility fallbacks only.

### Approved PDFs

Upload the original approved PDFs here:

[`pdf/`](./pdf/)

```text
pdf/WAVEX-5W-Packaging.pdf
pdf/WAVEX-10W-Packaging.pdf
pdf/WAVEX-User-Manual.pdf
```

### Brand logo

```text
assets/brand/wavex-logo.svg
```

---

## 2. Locked accuracy rules

These rules apply to every image in the project and must not be weakened inside individual prompts.

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

## 3. Current website order

| Order | Website section | Files used | Behaviour |
|---:|---|---|---|
| 00 | Hero | `1.png` | Full-width cinematic background |
| 01 | Project Snapshot | `4.png` | Transparent product cutout |
| 02 | Big Idea | `5.png` | Wide 16:9 lifestyle image |
| 03 | Design Strategy | `ds1.png`–`ds5.png` | One interactive image at a time |
| 04 | Moodboard | `7.png`–`12.png` | Structured editorial collage |
| 05 | Visual Language | `13.png`–`16.png` | Texture tiles and route graphic |
| 06 | Packaging System | `19.png`–`28.png` | Square cards, PDF previews and expandable panels |
| 07 | Feature Experience | `29.png`–`34.png` | One interactive feature image at a time |
| 08 | User Manual | `41.png`–`46.png` | One interactive manual image at a time |
| 09 | Selected PDP Work | `51.png`–`56.png` | Three visible and three expandable cards |
| 10 | Final Outcome | `63.png` | Full-width closing composition |

---

# 4. Detailed live image map

## 00 — Hero

| File | Exact upload path | Website placement | Recommended size |
|---|---|---|---|
| `1.png` | `assets/images/1.png` | Full opening hero; HTML title overlays the left side | 2560 × 1440 |

The hero uses one finished composition. Do not expect separate package and speaker layers to appear automatically.

---

## 01 — Project Snapshot

| File | Exact upload path | Website placement | Recommended size |
|---|---|---|---|
| `4.png` | `assets/images/4.png` | Right-side portrait card; complete product shown with `contain` | 2200 × 3000 |

The image must have a genuinely transparent background.

---

## 02 — Big Idea

| File | Exact upload path | Website placement | Recommended size |
|---|---|---|---|
| `5.png` | `assets/images/5.png` | Wide cinematic image below the Big Idea copy | 2560 × 1440 |

---

## 03 — Design Strategy

Upload all five files directly to `assets/images/`.

| Button | File | Exact upload path | Recommended size |
|---|---|---|---|
| Adventurous | `ds1.png` | `assets/images/ds1.png` | 2400 × 1600 |
| Rugged | `ds2.png` | `assets/images/ds2.png` | 2400 × 1600 |
| Immersive | `ds3.png` | `assets/images/ds3.png` | 2400 × 1600 |
| Modern | `ds4.png` | `assets/images/ds4.png` | 2400 × 1600 |
| Energetic | `ds5.png` | `assets/images/ds5.png` | 2400 × 1600 |

Do not upload the new files only to `assets/design-strategy/`. That folder is a legacy fallback. The canonical files are `assets/images/ds1.png`–`ds5.png`.

---

## 04 — Moodboard collage

These six images form one controlled editorial collage. They are not six full-width sections.

| Collage position | File | Exact upload path | Source shape | Role |
|---|---|---|---|---|
| Large upper-left anchor | `7.png` | `assets/images/7.png` | 4:3 | Mountain exploration |
| Tall upper-middle tile | `8.png` | `assets/images/8.png` | 4:5 | Campfire warmth |
| Small upper-right tile | `9.png` | `assets/images/9.png` | 1:1 | Speaker-mesh macro |
| Small middle-right tile | `10.png` | `assets/images/10.png` | 1:1 | Rugged-rock material |
| Tall lower-left tile | `11.png` | `assets/images/11.png` | 4:5 | Compass and map |
| Wide lower tile | `12.png` | `assets/images/12.png` | 4:3 | Route and movement |

Recommended sizes:

```text
7.png   2000 × 1500
8.png   1600 × 2000
9.png   1600 × 1600
10.png  1600 × 1600
11.png  1600 × 2000
12.png  2000 × 1500
```

The collage crops each source responsively. Keep important subjects near the centre and away from the outer 10–12%.

---

## 05 — Visual Language

| File | Exact upload path | Website placement | Recommended size |
|---|---|---|---|
| `13.png` | `assets/images/13.png` | Square mesh-texture tile | 2048 × 2048 |
| `14.png` | `assets/images/14.png` | Square rock-texture tile | 2048 × 2048 |
| `15.png` | `assets/images/15.png` | Square distress-mask tile | 2048 × 2048 |
| `16.png` | `assets/images/16.png` | Wide 2:1 route graphic | 2400 × 1200 |

`16.png` must have a genuinely transparent background. Do not bake in white, black, grey or checkerboard pixels.

---

## 06 — Packaging System

### Main package and artwork cards

| Card | File | Exact upload path | Website frame | Recommended size |
|---|---|---|---|---|
| WAVEX 5W package | `19.png` | `assets/images/19.png` | 1:1 card with full package contained | 2200 × 3200 |
| WAVEX 10W package | `25.png` | `assets/images/25.png` | 1:1 card with full package contained | 2200 × 3300 |
| 5W artwork preview | `20.png` | `assets/images/20.png` | 1:1 clickable PDF-preview card | 2600 × 1800 |
| 10W artwork preview | `26.png` | `assets/images/26.png` | 1:1 clickable PDF-preview card | 2600 × 1800 |

The preview image and the PDF are separate assets:

```text
assets/images/20.png
pdf/WAVEX-5W-Packaging.pdf

assets/images/26.png
pdf/WAVEX-10W-Packaging.pdf
```

`20.png` and `26.png` must be direct high-resolution exports from the official PDFs. Do not recreate the dielines with AI.

### Package comparison

| File | Exact upload path | Website placement | Recommended size |
|---|---|---|---|
| `27.png` | `assets/images/27.png` | Left 5W comparison card | 2200 × 2200 |
| `28.png` | `assets/images/28.png` | Right 10W comparison card | 2200 × 2200 |

Use the same camera, baseline, lighting, scale logic and crop for `27.png` and `28.png`.

### Expandable 5W panel gallery

These images stay hidden until the visitor opens **Explore supporting packaging panels**.

| File | Exact upload path | Panel | Recommended size |
|---|---|---|---|
| `21.png` | `assets/images/21.png` | Front panel | 1600 × 2000 |
| `22.png` | `assets/images/22.png` | Lifestyle panel | 1600 × 2000 |
| `23.png` | `assets/images/23.png` | Story panel | 1600 × 2000 |
| `24.png` | `assets/images/24.png` | Feature panel | 1600 × 2000 |

These four files must be flat, colour-accurate artwork crops from the approved 5W PDF. They must not be AI-redrawn.

---

## 07 — Feature Experience

Only one feature image is visible at a time.

| Button | File | Exact upload path | Recommended size |
|---|---|---|---|
| Sound | `29.png` | `assets/images/29.png` | 2560 × 1440 |
| 360° | `30.png` | `assets/images/30.png` | 2560 × 1440 |
| Splash | `31.png` | `assets/images/31.png` | 2560 × 1440 |
| Playback | `32.png` | `assets/images/32.png` | 2560 × 1440 |
| RGB | `33.png` | `assets/images/33.png` | 2560 × 1440 |
| Portable | `34.png` | `assets/images/34.png` | 2560 × 1440 |

All six files use a horizontal 16:9 frame and must follow the locked Product Accuracy rule.

---

## 08 — User Manual

Only one manual image is visible at a time. The arrow controls cycle through all six files.

| Page | File | Exact upload path | Recommended size |
|---|---|---|---|
| Cover | `41.png` | `assets/images/41.png` | 2200 × 1600 |
| Welcome and In the Box | `42.png` | `assets/images/42.png` | 2200 × 1600 |
| Controls | `43.png` | `assets/images/43.png` | 2200 × 1600 |
| Pairing and connection | `44.png` | `assets/images/44.png` | 2200 × 1600 |
| Battery care | `45.png` | `assets/images/45.png` | 2200 × 1600 |
| Specifications | `46.png` | `assets/images/46.png` | 2200 × 1600 |

Required original PDF:

```text
pdf/WAVEX-User-Manual.pdf
```

Every file must use the exact approved manual page. Do not regenerate printed content with AI.

---

## 09 — Selected PDP Work

### Visible immediately

| File | Exact upload path | Subject | Recommended size |
|---|---|---|---|
| `51.png` | `assets/images/51.png` | Product-and-package PDP hero | 2000 × 2000 |
| `52.png` | `assets/images/52.png` | 360-degree sound | 2000 × 2000 |
| `53.png` | `assets/images/53.png` | Splash protection | 2000 × 2000 |

### Expandable gallery

These images appear after the visitor opens **View three more PDP frames**.

| File | Exact upload path | Subject | Recommended size |
|---|---|---|---|
| `54.png` | `assets/images/54.png` | Playback | 2000 × 2000 |
| `55.png` | `assets/images/55.png` | Dimensions source | 2000 × 2000 |
| `56.png` | `assets/images/56.png` | In the Box | 2000 × 2000 |

---

## 10 — Final Outcome

| File | Exact upload path | Website placement | Recommended size |
|---|---|---|---|
| `63.png` | `assets/images/63.png` | Full closing background | 2560 × 1440 |

Keep the upper-left area dark and visually calm because the closing HTML headline appears there.

---

# 5. Reserved image IDs

These files are not displayed by the current compressed website.

| Reserved files | Previous or future purpose |
|---|---|
| `2.png`, `3.png` | Optional source layers for rebuilding the hero |
| `6.png` | Legacy single Design Strategy macro |
| `17.png`, `18.png` | Earlier Product Family package cards |
| `35.png`–`37.png` | Everyday Adventure expansion |
| `38.png`–`40.png` | Product Anatomy expansion |
| `47.png`–`50.png` | In-the-Box expansion |
| `57.png`–`62.png` | Physical Production expansion |
| `64.png` | Future campaign key visual |

Do not delete or reassign these IDs. They are reserved so the website can expand later without renaming active files.

---

# 6. File and performance rules

- Use the exact filename and path shown in this document.
- GitHub Pages is case-sensitive: `7.png` and `7.PNG` are different files.
- Use lowercase `.png` and lowercase `ds` filenames.
- Export website images in sRGB, not CMYK.
- Strip unnecessary metadata before upload.
- Optimise images before committing them.
- Keep important subjects away from the outer 10–12%.
- Do not embed website headings inside images.
- Keep complete products, packages, manuals and artwork visible unless a prompt explicitly requests a texture macro.
- Transparent assets must contain real alpha transparency, not a checkerboard illustration.
- Never replace approved packaging or manual typography with AI-generated text.

---

# 7. Fast replacement workflow

1. Open [`assets/images/`](./assets/images/).
2. Select **Add file → Upload files**.
3. Upload the replacement using the exact required filename.
4. Replace the existing file when GitHub detects the same name.
5. Commit the change to `main`.
6. Open the **Actions** tab and wait for GitHub Pages deployment to finish.
7. Hard-refresh the live website.

For PDFs, repeat the same process inside [`pdf/`](./pdf/).

---

# 8. Troubleshooting

## An image is broken, faded or missing

Confirm all of these:

- The file is inside `assets/images/`.
- The filename matches exactly.
- The extension is lowercase `.png`.
- The filename has no spaces, brackets, capital letters or duplicate suffixes.
- The image opens normally when clicked inside GitHub.
- GitHub Pages has completed the latest deployment.

## A Design Strategy image does not change

Confirm these exact files exist:

```text
assets/images/ds1.png
assets/images/ds2.png
assets/images/ds3.png
assets/images/ds4.png
assets/images/ds5.png
```

## A package preview opens the wrong file

Confirm both the preview image and original PDF:

```text
assets/images/20.png
pdf/WAVEX-5W-Packaging.pdf

assets/images/26.png
pdf/WAVEX-10W-Packaging.pdf
```

## A new image still does not appear

- Wait for the Pages deployment to complete.
- Refresh with `Ctrl + Shift + R` on desktop.
- On mobile, close the old tab and reopen the live site.

---

# 9. Upload checklist

- [ ] Correct section and image number
- [ ] Correct path inside `assets/images/`
- [ ] Exact filename and lowercase `.png`
- [ ] Correct dimensions and aspect ratio
- [ ] sRGB colour profile
- [ ] Transparent background is genuinely transparent where required
- [ ] Locked Product Accuracy rule followed
- [ ] Locked Packaging Accuracy rule followed
- [ ] Locked Manual Accuracy rule followed
- [ ] Important content stays inside the central safe area
- [ ] File optimised before upload
- [ ] GitHub Pages deployment completed
