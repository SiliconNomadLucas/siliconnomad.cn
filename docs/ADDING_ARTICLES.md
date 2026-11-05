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

Push the change to the `main` branch. The GitHub Actions workflow builds the
site on a GitHub-hosted runner, then uses Alibaba Cloud OIDC and ECS Cloud
Assistant to publish the generated files. See
[`deploy/GITHUB_ACTIONS_ALIYUN.md`](../deploy/GITHUB_ACTIONS_ALIYUN.md) for
the one-time cloud setup.
