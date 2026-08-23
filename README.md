# Portfolio

My personal porfolio.
Built with [Astro](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com) and [React](https://react.dev).

Live at: https://sylvainbrunet37.github.io/Portfolio/

## Project structure

```
/
├── public/              # Static assets (images, CV PDFs, favicon)
├── src/
│   ├── components/      # React components (cards, navbar, hero, footer)
│   ├── data/            # All content lives here (projects, experiences, education, books, games, conferences)
│   ├── layouts/         # BaseLayout.astro (SEO meta tags, fonts)
│   ├── pages/           # Astro pages (index, projects, experiences, education, miscellaneous)
│   └── styles/          # Global + per-card CSS
└── astro.config.mjs     # site/base config (GitHub Pages deployment)
```

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |
