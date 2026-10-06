# Shuo Zhang’s academic website

Static website intended for GitHub Pages at https://imsure318.github.io.

## Content

- `index.html`: biography and news.
- `publications/index.html`: publications and paper links.
- `education/index.html`: education.
- `Activity/index.html`: professional activities.
- `news/`: individual announcements, retained for existing links.
- `assets/`: styles, scripts, fonts, photos, and research PDFs.

## Editing and preview

Edit the HTML files directly. This checkout contains generated static pages, not the original Jekyll templates or build configuration.

From the repository root, run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. Serve from the repository root because asset and navigation links use absolute paths.

## Hosting

The files can be served directly by GitHub Pages. Check the repository’s Pages settings for the configured publishing branch or workflow before deploying. No Jekyll build is needed for this checkout.

## Credits

Based on the al-folio Jekyll theme: https://github.com/alshedivat/al-folio.
The original MIT license is retained in `LICENSE`.
