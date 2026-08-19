# Medasani Tejo Ravi Ram — Portfolio

A static portfolio site (plain HTML/CSS/JS, no build step, no dependencies to install) —
deployable directly on GitHub Pages.

Live: [tejo123-hub.github.io/personal-profile](https://tejo123-hub.github.io/personal-profile/)

## Structure

```
index.html    → all page content/sections
style.css     → design system (blueprint / engineering-schematic theme, dark + light)
script.js     → repo data + interactions (edit the OWN_REPOS / FORKED_REPOS arrays here)
404.html      → styled not-found page for GitHub Pages
robots.txt    → search-engine crawl rules
sitemap.xml   → sitemap for search engines
```

## Advanced features

- **Light / dark theme toggle** — top-right sun/moon button. Light is the default appearance
  for every first-time visitor (regardless of OS preference); switching to dark is remembered
  in `localStorage` for their next visit. Color and background changes animate smoothly across
  the whole page when toggling.
- **Command palette (⌘K / Ctrl K)** — click "Jump to…" in the nav or press the shortcut to
  fuzzy-search every section, repo, and contribution, and jump or open it instantly. Includes
  quick links to email, GitHub, and LinkedIn.
- **Live GitHub stats** — the "Public repos" number in the About section is fetched live from
  the GitHub REST API on page load, so it stays accurate without editing code. Falls back to the
  static value already in the HTML if the API is unavailable or rate-limited (GitHub allows 60
  unauthenticated requests/hour per visitor IP). "GitHub badges earned" is a static number
  (`#statBadges` in `index.html`) since achievement badges aren't exposed by GitHub's public
  API — update it by hand from the "Achievements" section on your GitHub profile page.
- **Live per-repo stats on each build card** — every card in the "Builds on GitHub" grid shows
  a "★ stars · updated Mon YYYY" line, reusing the same single GitHub API call as the repo-count
  stat above (no extra requests, so the rate limit isn't touched twice). If the fetch fails or
  is rate-limited, the line is just left blank on that card — the rest of the card still works.
- **Tech-stack tag chips** — each build card shows 2–4 short tags (e.g. `Node.js`, `Vertex AI`)
  in addition to its primary-language badge, so visitors get a feel for the stack at a glance.
- **Featured build panel** — `sentinelpay`, the most substantial build, gets a dedicated
  case-study panel above the repo grid (problem statement, approach breakdown, tags, link) in
  addition to its regular card in the grid.
- **Filter + sort controls on the Builds grid** — click a tag chip to filter the grid to
  matching repos, or use the sort dropdown to reorder by Newest, Most starred, or A–Z. Sorting
  by "Newest"/"Most starred" uses the same live stats fetched above.
- **Background section** — a dedicated "Education & credentials" section (between About and
  Builds) with a degree card and a certifications list, styled to match the rest of the site's
  panels.
- **Scroll-reveal animations** — cards and panels fade/slide in as you scroll, via
  `IntersectionObserver`. Respects `prefers-reduced-motion` (disabled entirely for visitors who
  have that OS setting on).
- **Gmail-direct contact button** — opens Gmail's web compose window pre-addressed to you,
  instead of relying on the visitor's OS mail client.
- **Full keyboard accessibility** — visible focus states, `Escape` closes the command palette,
  arrow keys navigate its results.

## Deploy on GitHub Pages

1. Create a new repository, e.g. `tejo123-HUB/portfolio` (or `tejo123-HUB.github.io` for a root-domain site).
2. Push all files to the repo root:
   ```bash
   git init
   git add index.html style.css script.js 404.html robots.txt sitemap.xml README.md
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/tejo123-HUB/<repo-name>.git
   git push -u origin main
   ```
3. Make sure the repo is **public** — GitHub Pages is not available on private repos unless
   you're on a paid plan (Pro/Team/Enterprise).
4. On GitHub: **Settings → Pages → Source → Deploy from a branch → main / (root)** → Save.
5. Your site goes live at:
   - `https://tejo123-HUB.github.io/<repo-name>/` (normal repo), or
   - `https://tejo123-HUB.github.io/` (if the repo is named `tejo123-HUB.github.io`)
6. **Update the URLs**: `robots.txt`, `sitemap.xml`, the canonical `<link>` in `index.html`, and
   the "back to home" link inside `404.html` currently point at
   `https://tejo123-hub.github.io/personal-profile/` (this repo's live URL — see above). If you
   fork/rename the repo, update those to match.

## Editing content

- **Projects / repos**: edit the `OWN_REPOS` and `FORKED_REPOS` arrays at the top of `script.js`.
  All 16 public repos are included — 9 original (`OWN_REPOS`) + 7 contributed-to (`FORKED_REPOS`),
  the latter shown in the "Contributions" section with a credit to the original author.
  A few repos (`CSE-D-Attendance`, `Google--honours-attendance`, `codealpha_tasks`, `NTR-HBD`)
  don't have descriptions set on GitHub yet — the placeholder text (and their `tags` array) in
  `script.js` is a best guess, marked with a comment on each entry, so update those lines with
  the real description/tags once you add one to each repo (or add one on GitHub and copy it
  over).
- **Repo tags**: each entry in `OWN_REPOS`/`FORKED_REPOS` has a `tags: [...]` array (2–4 short
  strings) — these populate both the tag chips on each card and the filter-chip row above the
  Builds grid automatically, so no separate list to maintain.
- **Featured build panel**: the `sentinelpay` case-study panel is hand-written markup in
  `index.html` (inside the `#projects` section, above `#repoGrid`) rather than data-driven —
  edit it directly, or swap which project is featured by copying the `.featured-panel` block.
- **Background section**: hand-written markup in `index.html` under `id="background"` — the
  `.edu-list` (one `.edu-card` per institution: B.Tech, Intermediate, 10th) and the `.cert-list`
  for certifications. Both are static (not data-driven), so add/remove an `.edu-card` or
  `<li class="cert-item">` directly to update the list. If you add or remove a section, remember
  to renumber the `<span class="idx">` values in the nav and the `// NN — ...` eyebrow text in
  each section to keep them sequential.
- **Education map links**: Narayana Junior College and Little Brains EM School each have their
  `.edu-inst` name as a link (opens in a new tab) straight to the exact `maps.app.goo.gl`/
  `share.google` location links provided. The VRSEC (B.Tech) card instead has a `.edu-actions`
  row with two pill buttons — **Location** (a generated Google Maps search query, since no exact
  place link was on hand — swap it for a precise one if you get it) and **Website** (the
  official `vrsiddhartha.ac.in` site). Follow either pattern for any institution you add later.
- **Email button**: both "Get in touch" and the Email contact card open Gmail's web compose
  window directly (`https://mail.google.com/mail/?view=cm&fs=1&to=...`) instead of the OS mail
  app. This only works reliably if the visitor is signed into Gmail in that browser — if you'd
  rather it fall back to any mail client, swap the `href` back to `mailto:medasanitejo@gmail.com`.
- **Resume**: if you want a downloadable CV, drop a PDF in the repo (e.g. `resume.pdf`) and add
  a link/button in the hero or contact section.
- **Colors/fonts**: all design tokens are declared at the top of `style.css` under `:root` (dark)
  and `html[data-theme="light"]` (light).
- **Command palette entries**: edit `staticCommands` inside `setupCommandPalette()` in
  `script.js` — repo and contribution entries populate automatically from the data arrays.

## Notes

- No dependencies, no build step — just static files.
- Fonts (JetBrains Mono, Inter) load from Google Fonts via CDN link tags in `index.html`.
- Fully responsive down to small mobile widths; respects `prefers-reduced-motion`.
- The live GitHub stats fetch is a client-side, unauthenticated API call — no secrets, no server
  needed, safe to ship as-is on GitHub Pages.

## License

[MIT](LICENSE) © Medasani Tejo Ravi Ram

