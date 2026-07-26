# WAVEX — Live Website Image Map

This document shows **exactly where every current website image belongs**.

For the production prompts, dimensions and creative instructions, read [`PROMPTS.md`](./PROMPTS.md).

---

## Start here

### Upload website images here

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

### Upload approved PDFs here

[`pdf/`](./pdf/)

```text
pdf/WAVEX-5W-Packaging.pdf
pdf/WAVEX-10W-Packaging.pdf
pdf/WAVEX-User-Manual.pdf
```

> The live website first looks for all new artwork in `assets/images/`. Old folders are compatibility fallbacks only.

---

## Current website order

| Order | Website section | Files used |
|---:|---|---|
| 00 | Hero | `1.png` |
| 01 | Project Snapshot | `4.png` |
| 02 | Big Idea | `5.png` |
| 03 | Design Strategy | `ds1.png`–`ds5.png` |
| 04 | Moodboard | `7.png`–`12.png` |
| 05 | Visual Language | `13.png`–`16.png` |
| 06 | Packaging System | `19.png`–`28.png` |
| 07 | Feature Experience | `29.png`–`34.png` |
| 08 | User Manual | `41.png`–`46.png` |
| 09 | Selected PDP Work | `51.png`–`56.png` |
| 10 | Final Outcome | `63.png` |

---

# Detailed live image map

## 00 — Hero

| File | Exact upload path | Website placement | Frame / behaviour | Recommended size |
|---|---|---|---|---|
| `1.png` | `assets/images/1.png` | Full opening hero | Full-width background; HTML title sits over the left side | 2560 × 1440 |

The hero uses one finished composition. Do not upload separate box and speaker layers expecting them to appear automatically.

---

## 01 — Project Snapshot

| File | Exact upload path | Website placement | Frame / behaviour | Recommended size |
|---|---|---|---|---|
| `4.png` | `assets/images/4.png` | Right side of Project Snapshot | Portrait product card; complete cutout shown with `contain` | 2200 × 3000 |

---

## 02 — Big Idea

| File | Exact upload path | Website placement | Frame / behaviour | Recommended size |
|---|---|---|---|---|
| `5.png` | `assets/images/5.png` | Wide image below Big Idea copy | 16:9 cinematic frame | 2560 × 1440 |

---

## 03 — Design Strategy

Upload all five files to `assets/images/`.

| Button | File | Exact upload path | Website behaviour | Recommended size |
|---|---|---|---|---|
| Adventurous | `ds1.png` | `assets/images/ds1.png` | Default strategy image | 2400 × 1600 |
| Rugged | `ds2.png` | `assets/images/ds2.png` | Appears when Rugged is selected | 2400 × 1600 |
| Immersive | `ds3.png` | `assets/images/ds3.png` | Appears when Immersive is selected | 2400 × 1600 |
| Modern | `ds4.png` | `assets/images/ds4.png` | Appears when Modern is selected | 2400 × 1600 |
| Energetic | `ds5.png` | `assets/images/ds5.png` | Appears when Energetic is selected | 2400 × 1600 |

> Do not upload the new files only to `assets/design-strategy/`. That folder is a legacy fallback. The canonical path is now `assets/images/ds1.png`–`ds5.png`.

---

## 04 — Moodboard collage

These six images form one structured editorial collage. They are not six full-width sections.

| Collage position | File | Exact upload path | Shape in source | Role |
|---|---|---|---|---|
| Large upper-left anchor | `7.png` | `assets/images/7.png` | 4:3 | Mountain exploration |
| Tall upper-middle image | `8.png` | `assets/images/8.png` | 4:5 | Campfire warmth |
| Small upper-right tile | `9.png` | `assets/images/9.png` | 1:1 | Speaker-mesh macro |
| Small middle-right tile | `10.png` | `assets/images/10.png` | 1:1 | Rugged-rock material |
| Tall lower-left tile | `11.png` | `assets/images/11.png` | 4:5 | Compass and map |
| Wide lower image | `12.png` | `assets/images/12.png` | 4:3 | Route and movement |

Recommended sizes:

```text
7.png   2000 × 1500
8.png   1600 × 2000
9.png   1600 × 1600
10.png  1600 × 1600
11.png  1600 × 2000
12.png  2000 × 1500
```

The collage uses cropped image frames, so keep important subjects near the centre and away from the outer 10–12%.

---

## 05 — Visual Language

| File | Exact upload path | Website placement | Frame | Recommended size |
|---|---|---|---|---|
| `13.png` | `assets/images/13.png` | Mesh texture tile | Square | 2048 × 2048 |
| `14.png` | `assets/images/14.png` | Rock texture tile | Square | 2048 × 2048 |
| `15.png` | `assets/images/15.png` | Distress-mask tile | Square | 2048 × 2048 |
| `16.png` | `assets/images/16.png` | Wide route graphic | 2:1, transparent | 2400 × 1200 |

For `16.png`, the background must be genuinely transparent. Do not bake in white, black or checkerboard pixels.

---

## 06 — Packaging System

### Main package and artwork cards

| Card | File | Exact upload path | Website frame | Recommended size |
|---|---|---|---|---|
| WAVEX 5W package | `19.png` | `assets/images/19.png` | 1:1 card with complete package contained | 2200 × 3200 |
| WAVEX 10W package | `25.png` | `assets/images/25.png` | 1:1 card with complete package contained | 2200 × 3300 |
| 5W full artwork preview | `20.png` | `assets/images/20.png` | 1:1 clickable PDF-preview card | 2600 × 1800 |
| 10W full artwork preview | `26.png` | `assets/images/26.png` | 1:1 clickable PDF-preview card | 2600 × 1800 |

The preview images and PDFs are separate files:

```text
assets/images/20.png  → preview image
pdf/WAVEX-5W-Packaging.pdf → original PDF opened on click

assets/images/26.png  → preview image
pdf/WAVEX-10W-Packaging.pdf → original PDF opened on click
```

### Package comparison

| File | Exact upload path | Website placement | Frame | Recommended size |
|---|---|---|---|---|
| `27.png` | `assets/images/27.png` | Left comparison card | 1:1, complete 5W package | 2200 × 2200 |
| `28.png` | `assets/images/28.png` | Right comparison card | 1:1, complete 10W package | 2200 × 2200 |

Use the same camera, baseline, lighting and crop for `27.png` and `28.png`.

### Expandable 5W panel gallery

These files stay hidden until the visitor opens **Explore supporting packaging panels**.

| File | Exact upload path | Panel | Recommended size |
|---|---|---|---|
| `21.png` | `assets/images/21.png` | Front panel | 1600 × 2000 |
| `22.png` | `assets/images/22.png` | Lifestyle panel | 1600 × 2000 |
| `23.png` | `assets/images/23.png` | Story panel | 1600 × 2000 |
| `24.png` | `assets/images/24.png` | Feature panel | 1600 × 2000 |

These four panel files must be flat artwork crops from the official PDF, not AI-redrawn replacements.

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

All six files use a 16:9 horizontal frame.

---

## 08 — User Manual

Only one manual image is visible at a time. The arrows cycle through all six files.

| Page | File | Exact upload path | Recommended size |
|---|---|---|---|
| Cover | `41.png` | `assets/images/41.png` | 2200 × 1600 |
| Welcome and In the Box | `42.png` | `assets/images/42.png` | 2200 × 1600 |
| Controls | `43.png` | `assets/images/43.png` | 2200 × 1600 |
| Pairing and connection | `44.png` | `assets/images/44.png` | 2200 × 1600 |
| Battery care | `45.png` | `assets/images/45.png` | 2200 × 1600 |
| Specifications | `46.png` | `assets/images/46.png` | 2200 × 1600 |

Required PDF:

```text
pdf/WAVEX-User-Manual.pdf
```

Use exact approved manual artwork. Do not regenerate printed content with AI.

---

## 09 — Selected PDP Work

### Visible immediately

| File | Exact upload path | PDP subject | Recommended size |
|---|---|---|---|
| `51.png` | `assets/images/51.png` | PDP hero | 2000 × 2000 |
| `52.png` | `assets/images/52.png` | 360-degree sound | 2000 × 2000 |
| `53.png` | `assets/images/53.png` | Splash protection | 2000 × 2000 |

### Expandable gallery

These files appear after the visitor opens **View three more PDP frames**.

| File | Exact upload path | PDP subject | Recommended size |
|---|---|---|---|
| `54.png` | `assets/images/54.png` | Playback | 2000 × 2000 |
| `55.png` | `assets/images/55.png` | Dimensions source | 2000 × 2000 |
| `56.png` | `assets/images/56.png` | In the Box | 2000 × 2000 |

---

## 10 — Final Outcome

| File | Exact upload path | Website placement | Frame | Recommended size |
|---|---|---|---|---|
| `63.png` | `assets/images/63.png` | Full closing section | Wide 16:9 background | 2560 × 1440 |

Keep the upper-left area dark and calm because the HTML closing headline appears there.

---

# Reserved image IDs

These files are not displayed by the current compressed website.

| Reserved files | Previous / future purpose |
|---|---|
| `2.png`, `3.png` | Optional source layers for rebuilding the hero |
| `6.png` | Legacy single Design Strategy macro |
| `17.png`, `18.png` | Earlier Product Family package cards |
| `35.png`–`37.png` | Everyday Adventure expansion |
| `38.png`–`40.png` | Product Anatomy expansion |
| `47.png`–`50.png` | In-the-Box expansion |
| `57.png`–`62.png` | Physical Production expansion |
| `64.png` | Future campaign key visual |

Do not delete these ID assignments. They are reserved so the project can expand later without renaming active files.

---

# Fast replacement workflow

1. Open [`assets/images/`](./assets/images/).
2. Select **Add file → Upload files**.
3. Upload the new image with the exact required filename.
4. Replace the existing file when GitHub detects the same name.
5. Commit the change to `main`.
6. Open the **Actions** tab and wait for the Pages deployment to finish.
7. Hard-refresh the live website.

For PDFs, use the same process inside [`pdf/`](./pdf/).

---

# Troubleshooting

## The image is broken or faded

Check all of these:

- The file is inside `assets/images/`.
- The filename matches exactly.
- The extension is lowercase `.png`.
- There are no spaces, brackets, duplicate suffixes or capital letters.
- The image opens normally when clicked inside GitHub.
- GitHub Pages has completed its latest deployment.

## The Design Strategy image does not change

Confirm that the files are named exactly:

```text
assets/images/ds1.png
assets/images/ds2.png
assets/images/ds3.png
assets/images/ds4.png
assets/images/ds5.png
```

## The package preview opens the wrong file

The preview and PDF are different assets. Confirm both paths:

```text
assets/images/20.png
pdf/WAVEX-5W-Packaging.pdf

assets/images/26.png
pdf/WAVEX-10W-Packaging.pdf
```

## The new image still does not appear

- Wait for GitHub Pages deployment to complete.
- Refresh with `Ctrl + Shift + R` on desktop.
- On mobile, close the old tab and reopen the live site.

---

# Upload checklist

- [ ] Correct section and image number
- [ ] Correct path inside `assets/images/`
- [ ] Exact filename and lowercase `.png`
- [ ] Correct dimensions and aspect ratio
- [ ] sRGB colour profile
- [ ] Transparent background is genuinely transparent where required
- [ ] No AI-redrawn packaging or manual typography
- [ ] Important content stays inside the central safe area
- [ ] File optimised before upload
- [ ] GitHub Pages deployment completed
