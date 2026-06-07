# imenjarraya.github.io

Personal academic site for **Imen Jarraya** — Postdoctoral Fellow at the Robotics
and Internet of Things Unit (RIOTU), Prince Sultan University, Riyadh.
# Update to trigger site rebuild

Static HTML + CSS + a small bit of JS. No build step. Hosted on GitHub Pages.

## Structure

```
├── index.html         Homepage
├── research.html      Research statement & areas
├── publications.html  Filterable publication list
├── teaching.html      Teaching statement
├── cv.html            Full CV
├── .nojekyll          Tells GitHub Pages not to run Jekyll
└── assets/
    ├── css/style.css  All styles
    ├── js/main.js     Publication filter & search
    ├── img/           (Add your portrait & figures here)
    └── docs/          (Add downloadable PDFs of CV / statements here)
```

## Editing content

All content lives in the HTML files — open them in any editor and edit the text.
The publication entries use this pattern, and the filter/search updates automatically:

```html
<div class="pub" data-cat="journal" data-year="2026">
  <div class="pub-year">2026<span class="pub-id">J2</span></div>
  <div>
    <p class="pub-title">Title goes here</p>
    <p class="pub-authors"><span class="self">Jarraya I.</span>, Coauthor</p>
    <p class="pub-venue">Venue · vol. X, p. Y</p>
    <div class="pub-badges"><span class="pub-badge q1">Q1 · IF 10.1</span></div>
  </div>
</div>
```

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying

This repo is configured to serve from the `main` branch root via GitHub Pages.
After pushing, the live site is at https://imenjarraya.github.io/.

```bash
git add .
git commit -m "Update site content"
git push origin main
```

## Adding a portrait

Drop a square JPG/PNG into `assets/img/portrait.jpg` and add this block to the
`.hero` div in `index.html` if you want a photo (the layout currently doesn't
include one — your choice).

## License

Content © Imen Jarraya. Code (HTML/CSS/JS scaffolding) is MIT.
