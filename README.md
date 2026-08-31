# Eigen Buiten — Website

Website for **Eigen Buiten** (logo and domain still TBD), a two-maker carpentry company in Culemborg NL: custom wooden garden buildings (buitenverblijven).

**Status:** Phase 0 (foundation), Phase 1 (Home + Contact), and the first client feedback round (name drop-in, gallery page, lightbox) are built. See [PLAN.md](./PLAN.md) for the full plan and remaining phases.

## Stack

Vue 3 + Vite, pre-rendered per route with **vite-ssg** (real HTML on GitHub Pages, no router hacks), styled with **Tailwind CSS 4**, self-hosted fonts via Fontsource. All identity (name, mark, colors, contact data) is placeholder and lives in exactly three places — `src/data/site.ts`, `src/components/ui/BrandMark.vue`, and the `@theme` block in `src/assets/main.css` — so the final branding drops in as a config swap (grep `[Bedrijfsnaam]` to verify nothing is missed).

## Development

```sh
pnpm install
pnpm dev        # dev server
pnpm build      # static build (vite-ssg) → dist/
pnpm preview    # serve the build locally
pnpm typecheck  # vue-tsc
pnpm format     # prettier
```

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` builds and deploys via the official Pages actions.

One-time activation: repo **Settings → Pages → Source: "GitHub Actions"**. After that it deploys on every push to `main`; it can also be run manually on any branch via **Actions → Deploy to GitHub Pages → Run workflow** for a preview. The build uses `BASE_PATH=/opusMaatwerk/` for the `ghostyfied.github.io/opusMaatwerk` URL — change it to `/` when a custom domain is attached (PLAN.md §6).

The site renders a `noindex` meta tag until `site.indexable` is flipped at launch.

## Content

Copy is Dutch; page content and data live in `src/data/*.ts` (services, werkwijze steps, USPs, testimonials) and `src/pages/`. Contact form: works without any backend — it opens the visitor's mail client pre-filled until a Formspree endpoint is set in `site.contact.formEndpoint`.
