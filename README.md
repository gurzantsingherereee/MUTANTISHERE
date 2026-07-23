# WAVEX Interactive Case Study

Live-ready GitHub Pages structure for the WAVEX packaging and product case study.

## Add images

Upload files using the exact paths already referenced in `index.html`.

```text
assets/
├── brand/wavex-logo.svg
├── hero/
├── product/
├── lifestyle/
├── moodboard/
├── textures/
├── icons/
├── packaging/
│   ├── 5w/
│   ├── 10w/
│   └── family/
├── features/
├── manual/
├── in-box/
├── pdp/
└── production/
```

## PDFs

Place these in `pdf/`:

- `WAVEX-5W-Packaging.pdf`
- `WAVEX-10W-Packaging.pdf`
- `WAVEX-User-Manual.pdf`

## Automatic deployment

Every push to `main` triggers `.github/workflows/pages.yml` and republishes the website through GitHub Pages.

## Important

This repository is currently private. GitHub Pages availability for private repositories depends on the GitHub plan. For a universally accessible public website, change the repository visibility to Public in **Settings → General → Danger Zone → Change repository visibility**.
