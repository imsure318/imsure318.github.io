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

## Formatting

Install Node.js 24 and pnpm 11.19.0, then run:

```sh
pnpm install --frozen-lockfile
pnpm format
pnpm format:check
```

Prettier formats the HTML, JavaScript, main CSS, Markdown, and configuration files. Third-party minified CSS and binary assets are excluded. The formatter version is pinned in `package.json` and `pnpm-lock.yaml`.

In VS Code, install the recommended Prettier extension to enable format-on-save using the repository settings. GitHub Actions checks formatting on pushes and pull requests.

## Hosting

GitHub Pages publishes the repository root on the `master` branch. The `source` branch is used for editing. The `.nojekyll` file tells Pages to serve these static files without a Jekyll build.

After committing and checking changes on `source`, fetch and merge `origin/master` to preserve any publishing-branch changes, then push the same commit to both branches:

```sh
git fetch origin
git merge origin/master
git push origin source
git push origin HEAD:master
```

The push to `master` triggers GitHub’s Pages deployment. The formatting workflow alone does not deploy the website.

## Credits

Based on the al-folio Jekyll theme: https://github.com/alshedivat/al-folio.
The original MIT license is retained in `LICENSE`.
