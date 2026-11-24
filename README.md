# Taller de escritura en español

Local Astro proof of concept, based on the official Astro blog starter and its Bear Blog styling. No database, API, or client-side framework.

## Run

Use a Node version satisfying `package.json` and npm.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

The development server prints its local URL. Production output is in `dist/`. Pushes to `astro-migration` deploy through `.github/workflows/deploy-pages.yml` to GitHub Pages at https://johnlockwood.com/.

With Task installed, run `task serve` (or just `task`) for the development server at `http://127.0.0.1:4321/`. Saved Markdown, component, layout, and CSS changes should update the browser automatically. Keep this command running in your terminal; Ctrl+C stops it.

For a background server started by Astro, use `task status`, `task logs`, and `task stop`. Stop an existing server before starting your own. If a saved change appears only after refreshing, reload the browser page once to reconnect live reload. `task preview` serves the production build and does not watch source changes; use `task serve` while editing. `task build` produces the static build.

## Add writing

Create a directory in `src/content/escritos/`, using a stable URL-friendly name:

```text
mi-escrito/
  borrador.md
  final.md          # optional
  comentarios.md   # optional, free-form Markdown
```

Or start with just `mi-escrito/index.md`. Any additional Markdown files in that directory become sections, so the three traditional filenames are conventions rather than requirements. Known filenames get Spanish labels; other sections use their title or filename.

Astro content collections load all Markdown files recursively. The title and metadata come from `final.md`, then `borrador.md`, then `index.md`, then the first file alphabetically. A missing title falls back to the directory name. The directory name supplies the URL: `/escritos/mi-escrito/`.

```yaml
---
title: Mi título
date: 2026-11-23
source: Texto original
tags: [vida cotidiana]
---
```

All metadata fields are optional. Commentary needs no frontmatter or expression schema. Use it for your intentions, practice goals, questions, and feedback. Label every retained Codex-generated section explicitly, for example:

```markdown
## Mi intención
Quería practicar...

## Comentarios de Codex
*Sección generada por Codex.*

...

## Mis reflexiones
...
```

All supplied sample writing and feedback are explicitly identified as Codex-generated. Remove the sample directory when adding real content. To check draft-only behavior, temporarily move `final.md` outside the content directory and rebuild.

## Deployment and rollback

GitHub Pages uses GitHub Actions. The `github-pages` environment allows `astro-migration`, and the deployment workflow runs only for that branch. The repository default branch remains `master`.

The workflow installs locked dependencies with `npm ci`, builds Astro into `dist/`, copies `github-pages-files/CNAME` and `.nojekyll` into the artifact root, and deploys it. Keep the Pages custom domain set to `johnlockwood.com` and HTTPS enforced; the artifact CNAME does not replace that setting.

To return to the previous Sphinx site, set Pages back to “Deploy from a branch,” selecting `master` and `/docs` (provided master still contains the old site). To restore the exact archived production output later, use tag `pre-astro-production-2026-11-23`. Local work before the migration is preserved on `archive/pre-astro`.


## Navigation and tabs

`/` is the home page; `/escritos/` lists all writing. Multi-section pages use a small framework-free script for accessible tabs, including arrow keys, Home/End, and URL fragments. Without JavaScript, all sections remain visible and the tab links act as ordinary anchors. Single-section pages need no tab behavior. Printing shows every section.
