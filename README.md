# Stacks+Joules website

Source for [stacksandjoules.org](https://www.stacksandjoules.org). A static marketing site for a nonprofit workforce development program training overlooked populations for jobs in building automation.

Built with Astro 5 + React 18, deployed to Netlify.

## Quick start

```bash
git clone git@github.com:stacks-joules/website.git
cd website
npm install
npm start
```

Dev server runs at `http://localhost:4321`.

## Scripts

| Command | What it does |
|---------|--------------|
| `npm start` | Start dev server with HMR |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Serve `dist/` locally to preview the production build |
| `npm run type-check` | `astro check` + `tsc --noEmit` |
| `npm run lint` | ESLint over `src/**/*.{ts,js,tsx}` |
| `npm run format` | Prettier write to `src/` |
| `npm test` | Vitest (currently no test files; runs with `--passWithNoTests`) |
| `npm run clean` | Remove `dist/` and `.astro/` |

## Stack

- [Astro 5](https://astro.build) — static site generator with islands architecture
- React 18 — used for interactive islands (Header WebGL, Navigation menu, ContactSection form, Newsletter signup, AccordionPanel)
- TypeScript with `astro/tsconfigs/strict`
- CSS Modules (no SCSS, no Tailwind)
- Vitest + Testing Library (set up but unused)
- Netlify for hosting + serverless functions for form submissions

## Project layout

```
src/
  pages/         Astro pages — each .astro file becomes a route
  layouts/       Layout.astro wraps every page (Header, Navigation, ContactSection, Footer)
  components/
    blocks/      Block, Card, AccordionPanel, ImagePanel, etc. — composable content blocks
    common/      Buttons, Modal, NeuroNoiseBackground (WebGL shader), Theme, Logo
    layout/      Header, Footer, Navigation, Container, SectionHeader
    sections/    ContactSection, NewsletterSignup, Infographic
  data/          Site metadata constants (title, description, og tags)
  styles/        global.css, fonts.css
  types/         Shared TypeScript types

public/
  images/        Static images, referenced as /images/foo.png
  fonts/         Inter (latin), MontaguSlab, Manrope
  robots.txt
  _redirects     Netlify redirect rules

netlify/
  functions/     Serverless functions for contact form (and future newsletter)
```

## Islands hydration

Astro renders everything as static HTML by default. React components are only hydrated on the client when needed:

- `client:load` — hydrates immediately (Header, Navigation, NotFoundIsland)
- `client:visible` — hydrates when scrolled into view (ContactSection, NewsletterSignup)
- (no directive) — server-rendered as HTML, no JS shipped

`ThemeProvider` lives inside the Header island only — React context can't span islands. If cross-island state ever becomes necessary, switch to `nanostores`.

## Image references

Images live in `public/images/` and are referenced as plain string paths (`/images/foo.png`) — never imported as ES modules. This works for both Astro pages and React islands without needing the `typeof X === 'string' ? X : X.src` shim that Vite's asset pipeline otherwise requires for components used as islands.

## Forms

`netlify/functions/submitForm.js` receives contact form submissions and forwards them to Monday.com. Configure `MONDAY_BOARD_ID` and `MONDAY_API_KEY` in the Netlify dashboard.

The newsletter form on the homepage currently uses `data-netlify="true"` form detection, which does not reliably trigger on Astro static builds — submissions may silently no-op in production. Tracked as a known issue; convert to a serverless function before relying on it.

## Deployment

Netlify auto-deploys on push:

- `main` → production at https://www.stacksandjoules.org
- any branch → branch preview at `https://<branch>--stacksjoules.netlify.app`

Build settings live in `netlify.toml`:

```toml
[build]
  command = "npm run build && mkdir -p .cache && echo '{}' > .cache/imageCdnEncryptionConfig.json"
  publish = "dist"
  functions = "netlify/functions"
```

The `.cache/imageCdnEncryptionConfig.json` stub is a workaround for Netlify's image-CDN encryption-key check during Astro builds. Remove once Netlify resolves the underlying issue.

## Migration history

This site was migrated from Gatsby 5 to Astro 5 in 2026. See [`MIGRATION.md`](./MIGRATION.md) for the full plan and rationale.

## License

MIT — see [`LICENSE.md`](./LICENSE.md).
