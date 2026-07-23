# WAVEX Interactive Case Study

Live GitHub Pages website for the WAVEX packaging and product case study.

## Replace website images

All visual slots use simple numbered PNG files:

```text
assets/images/1.png
assets/images/2.png
assets/images/3.png
...
assets/images/63.png
```

A temporary random image is displayed on the live website whenever a numbered PNG is missing.

To update a section:

1. Open `assets/images/`.
2. Choose **Add file → Upload files**.
3. Upload your final image using the required number, such as `1.png`.
4. Commit the change to `main`.
5. GitHub Pages automatically republishes the website.

See [`IMAGE-MAP.md`](IMAGE-MAP.md) for the purpose and recommended dimensions of all 63 files.

## Important image rules

- Keep the filename exactly the same.
- Use PNG for every replacement, even when the image has no transparency.
- Use transparent backgrounds for product and packaging cutouts.
- Do not place website headings inside generated images.
- Use official packaging and manual artwork without rewriting printed text.

## PDFs

Place these files in `pdf/` when ready:

- `WAVEX-5W-Packaging.pdf`
- `WAVEX-10W-Packaging.pdf`
- `WAVEX-User-Manual.pdf`

## Automatic deployment

Every push to `main` runs `.github/workflows/pages.yml`, prepares the numbered image paths and deploys the website to GitHub Pages.
