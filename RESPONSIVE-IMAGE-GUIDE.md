# WAVEX Responsive Image Guide

The website now uses one uploaded image for desktop, tablet and mobile unless a special mobile crop is deliberately added later.

## How the website knows the screen size

The browser does not identify a person as a desktop or mobile user. CSS media queries read the current viewport width:

- Desktop: above 980 px
- Tablet: 681–980 px
- Mobile: 680 px and below
- Small mobile: 390 px and below

The layout also updates when a browser window is resized or a phone rotates.

## Image fitting rules

### Complete artwork must remain visible

These areas use `object-fit: contain`:

- Product renders
- Packaging renders
- Dielines and panels
- Design Strategy images (`ds1.png`–`ds5.png`)
- Manuals
- In-the-box items
- Product anatomy
- PDP images
- Packaging comparison

This may create a little empty space around an image when its shape differs from the card, but no important content is cropped.

### Background images fill the screen

Hero and final background images use `object-fit: cover` because they are atmospheric backgrounds. Their edges may crop slightly to fill the viewport.

## Recommended master-image approach

Upload one high-resolution image with the important subject placed near the centre and safe space around all sides.

Recommended general sizes:

- Horizontal editorial images: 2400 × 1600 px
- Square images: 2000 × 2000 px
- Portrait product images: 2000 × 2500 px
- Hero background: 2560 × 1440 px
- Design Strategy (`ds1.png`–`ds5.png`): 2400 × 1600 px, with the speaker and key details inside the central 70% safe area

Avoid placing important details directly against the edge of the image.

## Optional focal-point control

A specific image container can later use one of these attributes:

```html
<div class="slot" data-image-position="top">
<div class="slot" data-image-position="bottom">
<div class="slot" data-image-position="left">
<div class="slot" data-image-position="right">
```

This changes alignment without requiring a second image file.
