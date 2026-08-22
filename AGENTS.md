# AGENTS.md

Guidelines for AI coding agents working in this repository.

## Core principle: everything is data driven

**Do not hardcode content in components or pages.** All site content must live in `src/data/`:

- `src/data/projects.js`
- `src/data/experiences.js`
- `src/data/education.js`
- `src/data/books.js`
- `src/data/games.js`
- `src/data/conferences.js`

Components (`src/components/`) are generic renderers that receive data via props.
Pages (`src/pages/`) only map over the data arrays. To add or update content
(a project, a job, a book…), edit the corresponding data file and place any new
images in `public/images/`. Only modify components when adding a genuinely new
kind of presentation.

## Other rules

- **Base URL**: the site is served from `/Portfolio/` (see `astro.config.mjs`).
  Always build asset/link paths as `${import.meta.env.BASE_URL}path/without/leading/slash`.
  Never write `` `${base}/...` `` — the base already ends with a slash and you will
  get broken double-slash URLs.
- **Hydration**: do not add `client:*` directives to purely static React components.
  Only hydrate components that truly need browser interactivity.
- **Styling**: prefer Tailwind utility classes; plain CSS files are legacy for card styles.
- After changes, verify with `npx astro build` and inspect `dist/` HTML if touching URLs.