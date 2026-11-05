# Adding Articles

Create one Markdown file per article in `src/content/articles/`. The filename
becomes the URL slug, so `first-note.md` is published at
`https://siliconnomad.cn/articles/first-note/`.

Use this frontmatter:

```md
---
title: "Article title"
description: "A short summary for the article list and search results."
pubDate: 2026-11-05
tags:
  - Notes
---

Write the article in Markdown below the frontmatter.
```

`updatedDate` is optional. Set `draft: true` to keep an article out of the
published site. Drafts are excluded from the article list, generated pages,
RSS feed, and sitemap.

Push the change to the `main` branch. GitHub Actions builds the site on a
GitHub-hosted runner and publishes the generated static files to GitHub Pages.
