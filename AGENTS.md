# Agent Instructions

This repository is a static GitHub Pages site for `https://liuzhao09.github.io/`.
It hosts paper-reading notes, daily news exploration reports, global market
briefings, and housing analysis reports. Paper notes are
converted from local Markdown files under:

`/Users/liuzhao/Desktop/论文笔记`

Use `AGENTS.md` as the canonical agent guidance file. Do not rename this to
`AGENT.md`; most coding agents auto-discover the plural filename.

## File Change Recording

Before changing any file contents, call:

`beforeEditFile({ file_path: "/absolute/path/to/file" })`

After the change is complete, call:

`afterEditFile({ file_path: "/absolute/path/to/file" })`

Use absolute paths and keep one before/after pair per changed file.

## Site Structure

- `index.html`: simple homepage and entry point.
- `papers.html`: paper library and search/list page.
- `papers/*.html`: generated paper-note detail pages.
- `news.html`: daily news exploration list page.
- `news/*.html`: generated daily news report detail pages.
- `market.html`: global market briefing list page.
- `market/*.html`: generated daily global market report detail pages.
- `housing.html`: housing analysis list page.
- `housing/*.html`: generated daily housing report detail pages.
- `assets/css/site.css`: shared styles, including Markdown and MathJax layout.
- `assets/js/site-index.js`: shared homepage/library metadata, including paper
  and report record dates plus DOM-derived count synchronization.
- `assets/images/<slug>/`: copied images for each paper note.

The site is plain static HTML/CSS/JS. There is no build system and no frontend
framework. GitHub Pages publishes from `main` branch root.

## Current Paper Pages

- `papers/recgpt-mobile.html`
- `papers/tiger.html`
- `papers/marm.html`
- `papers/llm2rec.html`

## Adding Paper Notes

When converting a new note from `/Users/liuzhao/Desktop/论文笔记`, keep the
detail-page body close to the original Markdown. Add only the site wrapper,
table of contents, side notes, image path rewrites, math rendering support, and
responsive styling.

Recommended workflow:

1. Pick a source folder and Markdown file.
   Example: `/Users/liuzhao/Desktop/论文笔记/阿里-RecGPT-Mobile/阿里-RecGPT-Mobile.md`.
2. Choose an ASCII slug, such as `recgpt-mobile`, `tiger`, or `marm`.
3. Copy all local note images into `assets/images/<slug>/`.
4. Rewrite Markdown image paths:
   From `/Users/liuzhao/Desktop/论文笔记/<folder>/1.jpg`
   to `../assets/images/<slug>/1.jpg`.
5. Strip the source `[toc]` marker and generate the site TOC from headings.
6. Convert `==highlight==` to `<mark>highlight</mark>`.
7. Protect math before Markdown parsing:
   - Protect `$$...$$` blocks as placeholders.
   - Protect inline `$...$` formulas as placeholders.
   - Run Markdown parsing.
   - Restore display math as `<div class="math-display">$$...$$</div>`.
   - Restore inline math as `<span class="math-inline">$...$</span>`.
8. Add the MathJax config and loader in each paper detail page.
9. Add the new paper card to `papers.html`.
10. Add the paper record date to `assets/js/site-index.js` using the page href
    as the key and `YYYY-MM-DD` as the value. For daily notes, use the local
    note folder date; for manual notes, use the manual note folder date.
11. Optionally add the paper to the homepage recent list in `index.html`.
    Homepage and library counts are rendered from the DOM by
    `assets/js/site-index.js`; do not leave hardcoded stale totals such as
    `34 / 34` or `39`.

## Math Rendering Pitfalls

Do not pass raw LaTeX through Markdown parsing without protection. Markdown will
misread underscores in formulas as emphasis, causing broken HTML such as:

`\mathcal{L}<em>{MNTP}=-\sum</em>{i\in I}`

Correct behavior:

```html
<div class="math-display">$$
\mathcal{L}_{MNTP}=...
$$</div>
```

```html
<span class="math-inline">$z_i$</span>
```

CSS rules should distinguish inline and display MathJax:

- `mjx-container:not([display="true"])` must remain inline-level.
- `mjx-container[display="true"]` can be block-level and horizontally scrollable.
- `.math-inline` should have `max-width: 100%` and horizontal scrolling so very
  long inline formulas do not break mobile layout.

This was the root cause of the screenshot issue where inline variables like
`s`, `C`, `M_score`, and `P*` appeared on their own lines.

## Validation Checklist

After changing paper pages or styles, run checks before committing:

```bash
rg -n '/Users/liuzhao/Desktop/论文笔记|src="/Users|MATHINLINE|MATHBLOCK|<p>\$\$|\$\$</p>|mathcal\{L\}<em|sum</em>' papers/*.html
```

Expected result: no output.

Use browser-level validation with Playwright and local Chrome when possible:

- Check desktop and mobile widths.
- Check no broken images.
- Check no horizontal overflow.
- Check the homepage title stays on one line at desktop width.
- Check homepage `Notes`, recent-list badge, and library `Notes` all match the
  number of listed papers.
- Check each homepage recent item shows a right-side record date.
- Check inline MathJax containers are not `display: block`.

If using the bundled runtime, Playwright can be imported with:

```bash
NODE_PATH=/Users/liuzhao/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules \
/Users/liuzhao/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node <script>
```

For static HTTP smoke tests:

```bash
python3 -m http.server 8765
curl -I http://127.0.0.1:8765/
curl -I http://127.0.0.1:8765/papers.html
curl -I http://127.0.0.1:8765/papers/<slug>.html
```

Stop the server afterwards if it remains running.

## Commit And Publish

After validation:

```bash
git add .
git commit -m "Describe the site update"
git push
```

GitHub Pages may take 30-90 seconds to update. Use cache-busting query strings
when checking:

`https://liuzhao09.github.io/papers/<slug>.html?v=<commit>`

## Should This Become A Skill?

Not yet. A skill is useful when a workflow should be reused across multiple
repositories or by multiple unrelated projects. This workflow is currently
tightly coupled to this repository, the local source path
`/Users/liuzhao/Desktop/论文笔记`, and this site's HTML/CSS structure.

Better progression:

1. Keep repo-specific rules in this `AGENTS.md`.
2. If adding papers becomes frequent, add a deterministic script such as
   `scripts/build-paper-pages.mjs` plus a small `papers.json` manifest.
3. If the same conversion workflow is needed in other repositories, extract a
   Codex skill, for example `paper-note-site`, and bundle the conversion script
   inside that skill.

Important distinction: a skill gives agents reusable instructions; it is not
the same as an executable converter. For direct repeat execution, a script is
more reliable. A future skill should point to that script instead of asking the
agent to rewrite conversion logic every time.

## Adding Daily Reports

News reports are generated from `/Users/liuzhao/Desktop/Codex-Agent/news-daily`.
When syncing a daily report:

1. Read `/Users/liuzhao/Desktop/Codex-Agent/news-daily/AUTOMATION_PROMPT.md`
   and `news_scope.yaml` first.
2. Convert `news-daily/reports/YYYY-MM-DD.md` into
   `news/YYYY-MM-DD.html`.
3. Add or update the corresponding card in `news.html`.
4. Add the record date to `assets/js/site-index.js` using the page href as the
   key, for example `"./news/2026-05-26.html": "2026-05-26"`.
5. Keep homepage `index.html` as a multi-section entry for `论文精读`,
   `新闻探索`, `国际市场`, and `房价分析`; do not turn it back into a
   paper-only homepage.
6. News reports must preserve source time, event time, confidence labels, and
   data gaps. Do not convert unverified social media claims into facts.

Market reports are generated from
`/Users/liuzhao/Desktop/Codex-Agent/global-market-daily`. Convert
`global-market-daily/reports/YYYY-MM-DD.md` into `market/YYYY-MM-DD.html`,
update `market.html`, and add `"./market/YYYY-MM-DD.html": "YYYY-MM-DD"` to
`assets/js/site-index.js`. Preserve market data times, trading-session
cutoffs, delayed quote labels, and investment-risk boundaries.

Housing reports are generated from
`/Users/liuzhao/Desktop/Codex-Agent/housing-daily`. Convert
`housing-daily/reports/YYYY-MM-DD.md` into `housing/YYYY-MM-DD.html`, update
`housing.html`, and add `"./housing/YYYY-MM-DD.html": "YYYY-MM-DD"` to
`assets/js/site-index.js`. Preserve data freshness, official/platform口径,
`数据未验证`, `口径不可比`, and non-advice risk language.
