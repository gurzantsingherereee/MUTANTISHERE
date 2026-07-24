# WAVEX — Master Image Prompt File

This is the single prompt file for every image used by the WAVEX website.

## Upload locations

Numbered website images:

```text
assets/images/1.png
assets/images/2.png
...
assets/images/64.png
```

Design Strategy images:

```text
assets/design-strategy/ds1.png
assets/design-strategy/ds2.png
assets/design-strategy/ds3.png
assets/design-strategy/ds4.png
assets/design-strategy/ds5.png
```

Use the exact lowercase filenames shown below. GitHub Pages is case-sensitive.

## Global responsive composition rule

Create one master image per filename. The same image is used on desktop, tablet and mobile.

- Keep the main product, package, manual or object inside the central safe area.
- Keep important details away from the extreme outer 12% of the frame.
- Product, packaging, manual and artwork images must remain completely visible.
- Do not embed website headings, labels, dimensions or claims inside generated images unless the instruction explicitly asks for exact supplied artwork.
- Export all final files as PNG in sRGB colour space.

## Global product accuracy rule

For every product image:

> Use the supplied WAVEX speaker reference exactly. Preserve the matte-black cylindrical body, premium black woven mesh, bright-orange hanging loop, correct top-control layout and real vertical RGB light strip. Do not invent buttons, ports, logos, proportions, accessories or feature claims.

## Global packaging accuracy rule

For every packaging image:

> Use the official WAVEX packaging artwork exactly. Do not ask AI to redraw printed text. Apply the supplied artwork to a realistic mockup or export directly from the official PDF when specified. Preserve all logos, colours, typography, icons and panel graphics.

---

# 01 — Hero and introduction

## `1.png` — Complete hero composition

**Section:** Hero  
**Dimensions:** 2560 × 1440 px  
**Format:** PNG  
**Aspect ratio:** 16:9

**Prompt:**

> Create a premium cinematic WAVEX hero composition using the supplied mountain-sunset background, official WAVEX 10W packaging and exact WAVEX speaker reference. Preserve the matte-black cylindrical speaker body, black woven mesh, bright-orange hanging loop, correct top controls and vertical RGB light strip. Preserve the official packaging artwork and physical proportions without rewriting or inventing printed text. Arrange the package behind or slightly beside the speaker on the right side of a rocky mountain foreground, illuminated by warm adventure-orange sunset light. Keep the entire left 48 percent deep navy-black, uncluttered and low-detail for large HTML typography. Keep the full speaker and full package visible. Preserve clear detail in the lower-right rocks, speaker base and packaging base; do not crush the shadows. Use realistic materials, controlled contrast, subtle atmospheric fog and premium advertising art direction. No embedded headline, no floating objects, no extra products and no invented badges.

---

## `2.png` — 10W hero packaging source cutout

**Section:** Hero source asset — optional  
**Dimensions:** 2200 × 3200 px  
**Format:** Transparent PNG

**Prompt:**

> Use the official WAVEX 10W packaging artwork exactly and preserve the 110 × 110 × 210 mm box proportion. Create a premium upright retail-box render at a front three-quarter angle with realistic paperboard edges, subtle print texture, accurate folds and controlled warm orange rim lighting. Transparent background, complete box visible with generous even margin. Do not alter, rewrite or invent any printed artwork or text.

**Usage note:** This is an optional source layer for revising `1.png`. It is not displayed separately in the current hero.

---

## `3.png` — Hero speaker source cutout

**Section:** Hero source asset — optional  
**Dimensions:** 2200 × 3000 px  
**Format:** Transparent PNG

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Create a premium front three-quarter product render with realistic matte-black mesh, accurate orange hanging loop, correct top controls and the real vertical RGB strip. Add subtle warm orange rim lighting and soft studio highlights. Transparent background, entire product visible with even margin, no text, no extra accessories and no redesign.

**Usage note:** This is an optional source layer for revising `1.png`. It is not displayed separately in the current hero.

---

## `4.png` — Project Snapshot speaker

**Section:** Project Snapshot  
**Dimensions:** 2200 × 3000 px  
**Format:** Transparent PNG

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Create a clean neutral front three-quarter studio render with realistic black mesh, orange loop, correct controls and vertical RGB strip. Soft directional light, balanced contrast, transparent background, complete product visible with generous margin, no environment and no text.

---

## `5.png` — Big Idea campsite

**Section:** The Big Idea  
**Dimensions:** 2560 × 1440 px  
**Format:** PNG  
**Aspect ratio:** 16:9

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Create a premium cinematic mountain campsite at sunset. Place the speaker naturally on a weathered rock or refined wooden camp table. Include a subtle folded contour map, metal compass, restrained rope detail and enamel mug, but keep the scene clean and aspirational. Use deep blue shadows, warm adventure-orange sunset light and realistic materials. Leave the right 35 percent visually calm for HTML copy while keeping the speaker fully visible inside the central safe area. No embedded text, no floating product and no extra speakers.

---

# 02 — Legacy strategy source and moodboard

## `6.png` — Strategy product macro

**Section:** Legacy Design Strategy source — optional  
**Dimensions:** 2400 × 1600 px  
**Format:** PNG  
**Aspect ratio:** 3:2

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Create a premium horizontal macro image of the speaker emerging from darkness. Emphasise the rugged black mesh texture, orange loop attachment and vertical RGB strip. Keep the product on the right 55 percent and leave the left 35 percent dark for copy. Use controlled orange edge light, shallow depth of field and refined advertising photography. Preserve the complete product silhouette where possible. No text.

**Usage note:** The current interactive Design Strategy section uses `ds1.png`–`ds5.png`. Keep `6.png` only as an optional legacy source image.

---

## `7.png` — Mountain exploration moodboard

**Section:** Moodboard  
**Dimensions:** 2000 × 1500 px  
**Format:** PNG  
**Aspect ratio:** 4:3

**Prompt:**

> Create cinematic layered mountain silhouettes at sunset with soft fog, deep blue shadows and restrained adventure-orange light. Premium editorial adventure photography, refined composition and realistic atmosphere. Keep the key ridgelines inside the central safe area. No product, no logo and no text.

---

## `8.png` — Campfire warmth moodboard

**Section:** Moodboard  
**Dimensions:** 1600 × 2000 px  
**Format:** PNG  
**Aspect ratio:** 4:5

**Prompt:**

> Create a close atmospheric campfire scene with glowing embers, fine sparks and warm orange light against a deep dark outdoor background. Premium editorial photography, shallow depth of field, refined and not overly rustic. Keep the main flame inside the central safe area. No people, no product and no text.

---

## `9.png` — Speaker mesh moodboard

**Section:** Moodboard  
**Dimensions:** 1600 × 1600 px  
**Format:** PNG  
**Aspect ratio:** 1:1

**Prompt:**

> Create an extreme macro photograph of premium black woven speaker mesh with highly realistic texture, subtle depth and one controlled orange reflection. Minimal, technical and refined. No logo, no product silhouette and no text.

---

## `10.png` — Rugged rock moodboard

**Section:** Moodboard  
**Dimensions:** 1600 × 1600 px  
**Format:** PNG  
**Aspect ratio:** 1:1

**Prompt:**

> Create a dark basalt rock material study with realistic cracks, layered mineral details, low-key lighting and a subtle warm orange edge reflection. Premium editorial material photography, square composition, no objects and no text.

---

## `11.png` — Compass and map moodboard

**Section:** Moodboard  
**Dimensions:** 1600 × 2000 px  
**Format:** PNG  
**Aspect ratio:** 4:5

**Prompt:**

> Create a premium top-down travel composition with a folded contour map, metal compass, restrained rope detail and one orange route accent. Use a dark warm surface, controlled shadows and refined outdoor editorial styling. Keep all important objects inside the central safe area. No readable place names, no logos and no text.

---

## `12.png` — Route and movement moodboard

**Section:** Moodboard  
**Dimensions:** 2000 × 1500 px  
**Format:** PNG  
**Aspect ratio:** 4:3

**Prompt:**

> Create an aerial view of a winding trail through dark mountainous terrain with one elegant orange route accent. Communicate movement and direction through a cinematic atmosphere and premium editorial composition. Keep the trail readable inside the central safe area. No labels, typography or product.

---

# 03 — Visual language textures

## `13.png` — Mesh texture

**Section:** Visual Language  
**Dimensions:** 2048 × 2048 px  
**Format:** PNG  
**Aspect ratio:** 1:1

**Prompt:**

> Create a seamless square macro texture of premium black woven speaker mesh, evenly lit with realistic depth and subtle tonal variation. No logo, object outline, border or text.

---

## `14.png` — Rock texture

**Section:** Visual Language  
**Dimensions:** 2048 × 2048 px  
**Format:** PNG  
**Aspect ratio:** 1:1

**Prompt:**

> Create a seamless square dark basalt rock texture with realistic surface variation and a very subtle orange edge reflection. Keep it neutral enough for use as a website background. No objects, borders or text.

---

## `15.png` — Distress mask

**Section:** Visual Language  
**Dimensions:** 2048 × 2048 px  
**Format:** PNG  
**Aspect ratio:** 1:1

**Prompt:**

> Create a high-contrast black-and-white distressed print mask with irregular ink loss, scratches, worn edges and rough screen-print texture. Do not include letters, words, logos or recognisable shapes. Seamless-feeling square composition.

---

## `16.png` — Route pattern

**Section:** Visual Language  
**Dimensions:** 2400 × 1200 px  
**Format:** Transparent PNG  
**Aspect ratio:** 2:1

**Prompt:**

> Create a clean vector-style adventure route line with small waypoints, subtle contour references and light sound-wave geometry. Use a single adventure-orange stroke on a transparent background. Wide horizontal composition, no place names, labels, numbers or text.

---

# 04 — Product family and packaging

## `17.png` — 5W family package cutout

**Section:** Product Family  
**Dimensions:** 2000 × 2800 px  
**Format:** Transparent PNG

**Prompt:**

> Use the official WAVEX 5W packaging artwork exactly. Render the package upright at a front three-quarter angle with realistic paperboard thickness, clean folds, soft studio shadow and subtle orange edge light. Transparent background, complete package visible with generous even margin. Do not alter or regenerate printed text or graphics.

---

## `18.png` — 10W family package cutout

**Section:** Product Family  
**Dimensions:** 2200 × 3300 px  
**Format:** Transparent PNG

**Prompt:**

> Use the official WAVEX 10W packaging artwork exactly and preserve the 110 × 110 × 210 mm proportion. Render it upright at the same camera angle, baseline and lighting style as `17.png`. Use realistic paperboard, clean edges and a transparent background. Keep the complete package visible. Do not alter printed text or graphics.

---

## `19.png` — 5W hero package

**Section:** WAVEX 5W Packaging  
**Dimensions:** 2200 × 3200 px  
**Format:** Transparent PNG

**Prompt:**

> Use the official WAVEX 5W packaging artwork exactly. Create a premium upright front three-quarter retail-box mockup with realistic paperboard, accurate folds, subtle production texture and controlled orange rim light. Transparent background, complete package visible with even margin. Do not redraw or rewrite artwork.

---

## `20.png` — 5W artwork dieline

**Section:** WAVEX 5W Packaging  
**Dimensions:** 2600 × 1800 px  
**Format:** PNG

**Production instruction:**

> Do not generate this with AI. Export the complete full-colour artwork page directly from the official WAVEX 5W packaging PDF at high resolution. Preserve every panel, boundary, colour, icon and printed word exactly. Crop with an even outer margin and no perspective distortion.

---

## `21.png` — 5W front panel

**Section:** WAVEX 5W Packaging  
**Dimensions:** 1600 × 2000 px  
**Format:** PNG

**Production instruction:**

> Crop the exact front hero panel from the official 5W packaging artwork. Keep the complete panel boundary visible, flat, colour-accurate and distortion-free. Do not use AI and do not change text, branding or graphics.

---

## `22.png` — 5W lifestyle panel

**Section:** WAVEX 5W Packaging  
**Dimensions:** 1600 × 2000 px  
**Format:** PNG

**Production instruction:**

> Crop the exact lifestyle panel from the official 5W packaging artwork. Keep the complete panel boundary visible, flat, colour-accurate and distortion-free. Do not use AI and do not change text, branding or graphics.

---

## `23.png` — 5W story panel

**Section:** WAVEX 5W Packaging  
**Dimensions:** 1600 × 2000 px  
**Format:** PNG

**Production instruction:**

> Crop the exact “Sound That Moves You” story panel from the official 5W packaging artwork. Keep the full panel boundary visible, flat and completely accurate. Do not use AI and do not alter any typography or graphics.

---

## `24.png` — 5W feature panel

**Section:** WAVEX 5W Packaging  
**Dimensions:** 1600 × 2000 px  
**Format:** PNG

**Production instruction:**

> Crop the exact feature and route-graphic panel from the official 5W packaging artwork. Keep every icon, route graphic and printed detail accurate. Do not use AI and do not alter text.

---

## `25.png` — 10W hero package

**Section:** WAVEX 10W Packaging  
**Dimensions:** 2200 × 3300 px  
**Format:** Transparent PNG

**Prompt:**

> Use the official WAVEX 10W packaging artwork exactly and preserve the 110 × 110 × 210 mm structure. Create a premium upright front three-quarter retail-box mockup with realistic paperboard, clean folds, subtle production texture and controlled orange edge lighting. Transparent background, complete package visible with even margin. Do not redraw or rewrite artwork.

---

## `26.png` — 10W artwork dieline

**Section:** WAVEX 10W Packaging  
**Dimensions:** 2600 × 1800 px  
**Format:** PNG

**Production instruction:**

> Do not generate this with AI. Export the complete full-colour artwork page directly from the official WAVEX 10W packaging PDF at high resolution. Preserve every panel, boundary, colour, icon and printed word exactly. Keep an even outer margin and no perspective distortion.

---

## `27.png` — 5W comparison render

**Section:** Packaging Comparison  
**Dimensions:** 2200 × 2200 px  
**Format:** Transparent PNG  
**Aspect ratio:** 1:1

**Prompt:**

> Use the official WAVEX 5W package artwork exactly. Create a straight-on premium studio render of the 5W package on a fixed neutral baseline. Centre it carefully with an orthographic-feeling camera, even soft lighting and transparent background. Keep the full package visible. This image must match the camera, baseline, canvas, crop and lighting of `28.png` exactly.

---

## `28.png` — 10W comparison render

**Section:** Packaging Comparison  
**Dimensions:** 2200 × 2200 px  
**Format:** Transparent PNG  
**Aspect ratio:** 1:1

**Prompt:**

> Use the official WAVEX 10W package artwork exactly and preserve the 110 × 110 × 210 mm proportion. Create a straight-on premium studio render on the same fixed baseline, camera, canvas, crop and lighting as `27.png`. Transparent background, complete package visible. The height difference must be physically believable.

---

# 05 — Product feature scenes

## `29.png` — Sound feature

**Section:** Product Features  
**Dimensions:** 2560 × 1440 px  
**Format:** PNG  
**Aspect ratio:** 16:9

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Create a premium wide advertising scene with the speaker surrounded by restrained orange acoustic rings and subtle driver energy, suggesting powerful immersive sound without showing fake technical internals. Use a deep-black environment, controlled orange highlights and realistic product materials. Keep the complete speaker inside the central safe area and reserve about 35 percent negative space for HTML text. No embedded typography.

---

## `30.png` — 360-degree sound

**Section:** Product Features  
**Dimensions:** 2560 × 1440 px  
**Format:** PNG  
**Aspect ratio:** 16:9

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Centre the speaker inside an elegant circular orange spatial-sound orbit with subtle waves moving around the full cylinder. Use a premium deep-black environment, realistic reflections, refined motion feeling and approximately 35 percent negative space for HTML copy. Keep the full speaker visible. No text and no extra speakers.

---

## `31.png` — Splash protection

**Section:** Product Features  
**Dimensions:** 2560 × 1440 px  
**Format:** PNG  
**Aspect ratio:** 16:9

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Create a premium dramatic splash-protection scene with realistic suspended water droplets and one elegant water-splash arc around the product. Preserve full visibility of the mesh, orange loop, controls and RGB strip. Use a deep-black background, controlled orange edge light and clear negative space for HTML copy. No embedded claims or text.

---

## `32.png` — Playback scene

**Section:** Product Features  
**Dimensions:** 2560 × 1440 px  
**Format:** PNG  
**Aspect ratio:** 16:9

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Create a cinematic campsite scene that transitions visually from warm sunset on one side to deep blue night on the other, using the passage of time as the battery-playback metaphor. Place the speaker naturally in the foreground and keep it fully visible. Include refined camping details and clean negative space for HTML copy. No percentages, unverified claims or text.

---

## `33.png` — RGB lighting

**Section:** Product Features  
**Dimensions:** 2560 × 1440 px  
**Format:** PNG  
**Aspect ratio:** 16:9

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Create a dark premium macro product scene focused on the real vertical RGB strip. Let the RGB light glow subtly while the rest of the speaker remains matte black and realistic. Show mesh texture and orange loop detail with controlled contrast and negative space for HTML copy. Do not make the whole product neon. No text.

---

## `34.png` — Portability

**Section:** Product Features  
**Dimensions:** 2560 × 1440 px  
**Format:** PNG  
**Aspect ratio:** 16:9

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Show the speaker naturally attached to a premium outdoor backpack using the bright-orange hanging loop. Create a mountain-trail environment with realistic fabric and metal details, controlled warm light and a clear sense of movement. Keep the complete product and loop visible inside the central safe area and leave 35 percent negative space for HTML copy. No visible faces, no text and no extra products.

---

# 06 — Everyday Adventure

## `35.png` — Morning routine

**Section:** Everyday Adventure  
**Dimensions:** 2400 × 1600 px  
**Format:** PNG  
**Aspect ratio:** 3:2

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Create a premium modern bathroom or vanity setting in soft morning light. Place the speaker naturally on a dry counter near restrained water droplets and refined grooming objects. Keep the full speaker visible and the composition clean, aspirational and realistic, with negative space for HTML text. No embedded typography and no fake water-submersion claim.

---

## `36.png` — Day or beach lifestyle

**Section:** Everyday Adventure  
**Dimensions:** 2400 × 1600 px  
**Format:** PNG  
**Aspect ratio:** 3:2

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Create a bright but controlled beach or picnic setting with natural sunlight, towel, sunglasses and subtle travel objects. Place the speaker naturally and keep the complete product visible inside the central safe area. Premium lifestyle photography, balanced colour, negative space for HTML copy, no text and no additional speakers.

---

## `37.png` — Night campsite

**Section:** Everyday Adventure  
**Dimensions:** 2400 × 1600 px  
**Format:** PNG  
**Aspect ratio:** 3:2

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Create an intimate night campsite with deep blue atmosphere, campfire glow and a softly illuminated tent. Place the speaker naturally in the foreground with a subtle RGB glow and keep it fully visible. Premium cinematic realism, negative space for HTML copy and no embedded text.

---

# 07 — Product anatomy

## `38.png` — Front view

**Section:** Product Anatomy  
**Dimensions:** 2200 × 2200 px  
**Format:** Transparent PNG  
**Aspect ratio:** 1:1

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Create a perfectly centred straight-front orthographic-style studio render with even neutral lighting and transparent background. Preserve the accurate mesh, orange loop and vertical RGB strip. Keep the full product visible with even margin. No labels, dimensions, arrows or text.

---

## `39.png` — Top view

**Section:** Product Anatomy  
**Dimensions:** 2200 × 2200 px  
**Format:** Transparent PNG  
**Aspect ratio:** 1:1

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Create a perfectly centred direct top view with the accurate button layout, orange loop position and realistic materials. Use even neutral lighting and a transparent background. Keep the complete top silhouette visible with even margin. No labels, dimensions or text.

---

## `40.png` — Side view

**Section:** Product Anatomy  
**Dimensions:** 2200 × 2200 px  
**Format:** Transparent PNG  
**Aspect ratio:** 1:1

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Create a clean side-profile orthographic-style studio render with accurate proportions, orange loop and product details. Use even neutral lighting and a transparent background. Keep the full product visible with even margin. No labels, dimensions or text.

---

# 08 — User manual mockups

For `41.png`–`46.png`, use the exact supplied WAVEX user-manual pages. Do not regenerate printed text.

## `41.png` — Manual cover

**Section:** User Manual  
**Dimensions:** 2200 × 1600 px  
**Format:** PNG  
**Aspect ratio:** 11:8

**Prompt:**

> Use the exact supplied WAVEX user-manual cover. Create a realistic closed booklet standing at a slight three-quarter angle on a premium dark studio surface with restrained orange accent lighting. Preserve every printed word and graphic exactly. Keep the full booklet visible. No additional text.

---

## `42.png` — Welcome spread

**Section:** User Manual  
**Dimensions:** 2200 × 1600 px  
**Format:** PNG  
**Aspect ratio:** 11:8

**Prompt:**

> Use the exact supplied WAVEX welcome and in-the-box manual pages. Create a realistic open booklet mockup on a clean dark or warm-cream studio surface. Keep the full spread visible with realistic paper, centre fold and shadows. Preserve all printed content exactly and distortion-free.

---

## `43.png` — Controls spread

**Section:** User Manual  
**Dimensions:** 2200 × 1600 px  
**Format:** PNG  
**Aspect ratio:** 11:8

**Prompt:**

> Use the exact supplied WAVEX controls page. Create a realistic open booklet mockup with clear readable print, gentle page curvature and premium studio lighting. Keep the complete spread visible and preserve every icon, label and printed word exactly.

---

## `44.png` — Pairing spread

**Section:** User Manual  
**Dimensions:** 2200 × 1600 px  
**Format:** PNG  
**Aspect ratio:** 11:8

**Prompt:**

> Use the exact supplied WAVEX charging, pairing and TWS page. Create a realistic open booklet mockup with readable print, accurate fold and controlled shadows. Keep the complete spread visible and preserve every printed detail exactly.

---

## `45.png` — Care spread

**Section:** User Manual  
**Dimensions:** 2200 × 1600 px  
**Format:** PNG  
**Aspect ratio:** 11:8

**Prompt:**

> Use the exact supplied WAVEX battery-care and troubleshooting page. Create a realistic open booklet mockup on a refined studio surface with subtle orange accents. Keep the full spread visible and every word and diagram exact and legible.

---

## `46.png` — Specifications spread

**Section:** User Manual  
**Dimensions:** 2200 × 1600 px  
**Format:** PNG  
**Aspect ratio:** 11:8

**Prompt:**

> Use the exact supplied WAVEX specifications page. Create a realistic open booklet mockup with clear readable technical content, gentle page curve and premium controlled lighting. Keep the full spread visible. Do not rewrite, replace or change any specification.

---

# 09 — In the Box

## `47.png` — Speaker object

**Section:** In the Box  
**Dimensions:** 2000 × 2000 px  
**Format:** Transparent PNG  
**Aspect ratio:** 1:1

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Create a clean premium top-down or slight three-quarter product cutout with realistic materials, even studio lighting and transparent background. Keep the entire product visible with generous margin. No text and no extra accessories.

---

## `48.png` — Type-C cable

**Section:** In the Box  
**Dimensions:** 2000 × 2000 px  
**Format:** Transparent PNG  
**Aspect ratio:** 1:1

**Prompt:**

> Create a neatly coiled black Type-C charging cable with realistic rubber texture, accurate connectors, subtle studio shadow and transparent background. Centre the full cable with generous margin. No text.

---

## `49.png` — Manual object

**Section:** In the Box  
**Dimensions:** 2000 × 2000 px  
**Format:** Transparent PNG  
**Aspect ratio:** 1:1

**Prompt:**

> Use the exact supplied WAVEX manual cover. Create a clean closed-booklet product cutout at a slight three-quarter angle with realistic paper edges and transparent background. Preserve the cover artwork exactly and keep the complete booklet visible.

---

## `50.png` — Warranty card

**Section:** In the Box  
**Dimensions:** 2000 × 2000 px  
**Format:** Transparent PNG  
**Aspect ratio:** 1:1

**Production instruction:**

> Use the approved warranty-card artwork. Create a clean flat or slight three-quarter card cutout with realistic paper thickness and transparent background. Keep the full card visible with even margin. Do not generate, rewrite or invent warranty text.

---

# 10 — Ecommerce and PDP

## `51.png` — PDP hero

**Section:** Ecommerce & PDP  
**Dimensions:** 2000 × 2000 px  
**Format:** PNG  
**Aspect ratio:** 1:1

**Prompt:**

> Use the supplied WAVEX speaker and official packaging references exactly. Create a premium square ecommerce hero composition with product and package on a deep-black background, warm adventure-orange light and clean negative space for HTML labels. Keep both complete and fully visible inside the central safe area. Use realistic materials, no generated text and no fake claims.

---

## `52.png` — PDP 360-degree sound

**Section:** Ecommerce & PDP  
**Dimensions:** 2000 × 2000 px  
**Format:** PNG  
**Aspect ratio:** 1:1

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Create a premium square ecommerce visual with the speaker centred inside restrained circular orange sound waves. Use a deep-black background, realistic product lighting and clear negative space for HTML text. Keep the complete speaker visible. No embedded typography.

---

## `53.png` — PDP splash

**Section:** Ecommerce & PDP  
**Dimensions:** 2000 × 2000 px  
**Format:** PNG  
**Aspect ratio:** 1:1

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Create a premium square splash-protection visual with realistic droplets and one controlled water arc around the product. Preserve all product details, use a deep-black background with orange edge light and leave space for HTML labels. Keep the full speaker visible. Add no text.

---

## `54.png` — PDP playback

**Section:** Ecommerce & PDP  
**Dimensions:** 2000 × 2000 px  
**Format:** PNG  
**Aspect ratio:** 1:1

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Create a premium square campsite visual transitioning from sunset to night to suggest extended playback. Keep the product naturally placed and fully visible, leave clean space for HTML copy and include no percentages, comparison claims or text.

---

## `55.png` — PDP dimensions

**Section:** Ecommerce & PDP  
**Dimensions:** 2000 × 2000 px  
**Format:** PNG  
**Aspect ratio:** 1:1

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Create a clean square studio composition showing the product from front and top angles on a neutral dark background. Keep both complete and leave wide empty areas around them for HTML or SVG dimension lines. Do not embed measurements or text in the image.

---

## `56.png` — PDP In the Box

**Section:** Ecommerce & PDP  
**Dimensions:** 2000 × 2000 px  
**Format:** PNG  
**Aspect ratio:** 1:1

**Prompt:**

> Use the exact WAVEX speaker, Type-C cable, user manual and approved warranty card. Create a premium square top-down ecommerce flat lay with balanced spacing on a dark textured surface and subtle orange accents. Keep every item complete and inside the central safe area. Leave space for HTML labels. No extra accessories and no embedded text.

---

# 11 — Physical production photographs

For `57.png`–`62.png`, use the actual physical packaging photographs. Do not generate replacement packages with AI.

## `57.png` — Production front

**Section:** Physical Production  
**Dimensions:** 2000 × 1500 px  
**Format:** PNG  
**Aspect ratio:** 4:3

**Editing instruction:**

> Use the actual front-view packaging photograph. Correct white balance, reduce the pink-wall colour cast, preserve truthful print colours, improve contrast gently and crop it as premium editorial documentary photography. Keep the full package visible. Do not replace or redesign the package.

---

## `58.png` — Production back

**Section:** Physical Production  
**Dimensions:** 2000 × 1500 px  
**Format:** PNG  
**Aspect ratio:** 4:3

**Editing instruction:**

> Use the actual back-view packaging photograph. Correct white balance, reduce colour cast, preserve printed details and crop cleanly. Keep the full package visible and the result truthful and documentary, not artificially rendered.

---

## `59.png` — Production side

**Section:** Physical Production  
**Dimensions:** 2000 × 1500 px  
**Format:** PNG  
**Aspect ratio:** 4:3

**Editing instruction:**

> Use the actual side-view packaging photograph. Correct perspective slightly, balance exposure and colour, preserve all printed details and crop editorially. Keep the full package visible. Do not alter packaging artwork.

---

## `60.png` — Production angle

**Section:** Physical Production  
**Dimensions:** 2000 × 1500 px  
**Format:** PNG  
**Aspect ratio:** 4:3

**Editing instruction:**

> Use the actual three-quarter physical packaging photograph. Correct white balance and perspective gently, preserve real material texture and truthful colours, and create a premium editorial crop. Keep the complete package visible. No AI replacement.

---

## `61.png` — Production family

**Section:** Physical Production  
**Dimensions:** 2000 × 1500 px  
**Format:** PNG  
**Aspect ratio:** 4:3

**Editing instruction:**

> Use the actual photograph showing the 5W and 10W packaging together. Correct white balance, align verticals, reduce distracting background colour, preserve the real scale relationship and crop as a clean documentary family image. Keep both packages fully visible.

---

## `62.png` — Print and fold detail

**Section:** Physical Production  
**Dimensions:** 2000 × 1500 px  
**Format:** PNG  
**Aspect ratio:** 4:3

**Editing instruction:**

> Use a real close-up photograph of the printed packaging edge, fold, paperboard texture or finishing detail. Correct colour and exposure while preserving the authentic print and material. Use a tight premium editorial crop. No AI reconstruction.

---

# 12 — Final Outcome and campaign visual

## `63.png` — Final family composition

**Section:** Final Outcome  
**Dimensions:** 2560 × 1440 px  
**Format:** PNG  
**Aspect ratio:** 16:9

**Prompt:**

> Use the official WAVEX 5W and 10W package artwork exactly, the supplied WAVEX speaker reference exactly, the exact user-manual cover, a black Type-C cable and the approved warranty card. Arrange both package sizes, both speakers, manual, cable and warranty card in a premium balanced black studio composition with warm adventure-orange rim light, subtle ground reflection and atmospheric depth. Keep every object complete and fully visible. Keep the upper-left 35 percent calm and dark for the closing HTML headline. Preserve all product and packaging details, add no extra accessories and no embedded text.

---

## `64.png` — Campaign key visual

**Section:** Campaign Key Visual  
**Dimensions:** 2200 × 2200 px  
**Format:** PNG  
**Aspect ratio:** 1:1

**Prompt:**

> Use the supplied WAVEX speaker reference and approved WAVEX product artwork exactly. Create a premium square retail campaign composition on a clean warm-cream background. Make the speaker the dominant central object, with the orange hanging loop and vertical RGB strip clearly visible. Add controlled black geometric shadows, subtle adventure-orange accents and restrained motion-inspired route details around the product. Keep the complete speaker visible with generous breathing room. Do not add embedded headline text, fake specifications, badges, extra products or redesigned details.

---

# 13 — Interactive Design Strategy images

Upload these five images to:

```text
assets/design-strategy/
```

Use the same **2400 × 1600 px, 3:2 horizontal ratio** for all five images.

## `ds1.png` — Adventurous

**Section:** 05 · Design Strategy  
**Dimensions:** 2400 × 1600 px  
**Format:** PNG  
**Aspect ratio:** 3:2

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Create a premium cinematic mountain campsite at sunset with the speaker placed naturally on a weathered rock beside a folded contour map, enamel mug, subtle rope and metal compass. Use deep navy shadows, warm adventure-orange sunlight, realistic atmosphere and aspirational outdoor styling. Keep the product fully visible with accurate black mesh, orange loop, top controls and vertical RGB strip. Compose the scene with depth and a clear sense of journey. Keep important details inside the central safe area. No text, packaging, extra speaker or invented product details.

---

## `ds2.png` — Rugged

**Section:** 05 · Design Strategy  
**Dimensions:** 2400 × 1600 px  
**Format:** PNG  
**Aspect ratio:** 3:2

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Place the speaker securely against dark wet basalt rock after light rain, with realistic water droplets on the top surface and subtle moisture on the mesh. Use low-key mountain lighting with one controlled orange sunset edge reflection. Emphasise tactile woven mesh, strong construction and the orange loop without making the scene aggressive or industrial. Keep the complete product visible inside the central safe area. Premium editorial product photography, realistic shadows, no text, fake certification badge, packaging or extra products.

---

## `ds3.png` — Immersive

**Section:** 05 · Design Strategy  
**Dimensions:** 2400 × 1600 px  
**Format:** PNG  
**Aspect ratio:** 3:2

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Create a cinematic dusk mountain scene with the speaker standing on dark rock while elegant concentric orange sound-wave rings expand naturally through the surrounding atmosphere. Use subtle fog, layered depth and restrained light particles to communicate immersive spatial sound. Keep the speaker realistic, grounded and fully visible, with accurate mesh, orange loop, controls and vertical RGB strip. Premium advertising art direction, controlled contrast, no text, floating speaker, fake specifications or extra products.

---

## `ds4.png` — Modern

**Section:** 05 · Design Strategy  
**Dimensions:** 2400 × 1600 px  
**Format:** PNG  
**Aspect ratio:** 3:2

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Create a refined contemporary studio composition using matte-black geometric planes, subtle charcoal textures and one precise adventure-orange edge light. Position the speaker in a clean three-quarter angle with balanced negative space, crisp material definition and premium consumer-electronics lighting. Preserve the exact orange loop, top controls, black woven mesh and vertical RGB strip. Keep the full speaker visible inside the central safe area. Minimal, architectural and modern. No text, logo treatment, packaging, floating parts or additional product.

---

## `ds5.png` — Energetic

**Section:** 05 · Design Strategy  
**Dimensions:** 2400 × 1600 px  
**Format:** PNG  
**Aspect ratio:** 3:2

**Prompt:**

> Use the supplied WAVEX speaker reference exactly. Create a dynamic premium product scene at blue hour with elegant orange light trails sweeping around the speaker and subtle particles suggesting rhythm and motion. Let the vertical RGB strip glow vividly while the black mesh and orange loop remain realistic and sharply defined. Keep the speaker physically grounded on textured dark rock and fully visible inside the central safe area; do not make it float. High-energy but controlled advertising photography, cinematic depth, no text, fake feature claims, packaging or extra speaker.

---

# Final export checklist

Before uploading any image:

- Export as PNG in sRGB.
- Use the exact filename and letter case.
- Confirm the specified pixel dimensions.
- Keep the main subject fully visible.
- Keep important content inside the central safe area.
- Remove embedded website text unless the image uses exact approved packaging or manual artwork.
- Do not invent product controls, specifications, printed packaging text or accessories.
- Upload numbered images to `assets/images/`.
- Upload Design Strategy images to `assets/design-strategy/`.
- Commit to `main`; GitHub Pages will redeploy automatically.
