# Silicon Nomad

Personal website built with Astro and deployed to GitHub Pages.

## Local development

```sh
npm ci
npm run dev
```

Build and preview the static site locally:

```sh
npm run build
npm run preview
```

## Deployment

Push to `main` to build the site with GitHub Actions and deploy it to GitHub
Pages. The workflow is in `.github/workflows/deploy.yml`.

GitHub Pages must be enabled with **GitHub Actions** as the publishing source.
The custom domain is configured in the repository's **Settings > Pages**.

## Articles

Add Markdown articles under `src/content/articles/`. See
[`docs/ADDING_ARTICLES.md`](docs/ADDING_ARTICLES.md) for the frontmatter format.
