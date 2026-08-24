# Project Buitenwerk — New Company Website Plan

> **Working title.** "Project Buitenwerk" is a disposable codename, **not** a name proposal. The client is launching a **new company** — name, logo, and domain do not exist yet. This plan builds the site brand-agnostic around a **placeholder identity** that can be swapped in one place the moment the real branding lands.

A complete plan for building a new, professional, static Vue site hosted on GitHub Pages for the carpentry business of Tijmen Wehlburg (Culemborg NL), positioned around large wooden garden buildings (buitenverblijven). His current site, [opusmaatwerk.nl](https://opusmaatwerk.nl/), serves only as **source material** (story, testimonials, werkwijze content, photos) — the new site is a fresh brand, not a redesign of it.

---

## 1. Context & goals

**The business.** Tijmen Wehlburg is a one-man carpentry business in Culemborg (Rivierenland, NL) — a former professional musician who turned his craftsmanship into a carpentry career during the COVID years. He currently operates as "Opus Maatwerk" doing custom carpentry of all kinds, and is launching a **new company** to specialize in large garden buildings: timber-frame garden rooms with glass sliding walls, verandas/overkappingen with tiled roofs, and big garden houses.

**Goals for the new site:**

1. Look professional and trustworthy — a showcase, not a brochure-builder page.
2. Position from day one as **specialist in houten buitenverblijven**, with general custom carpentry as a secondary service.
3. Properly showcase completed work (portfolio with case pages).
4. Convert visitors: make it effortless to request advice/a quote.
5. **Brand-agnostic build:** name, logo, and domain are pending — the site must absorb the final identity (wordmark, colors, domain, e-mail) with a config/token swap, not a rebuild.
6. Tech: latest Vue, fully static, hosted on GitHub Pages (repo `Ghostyfied/opusMaatwerk` — repo can be renamed once the company name exists; GitHub redirects old repo URLs).

### Branding status & placeholder strategy

| Identity element  | Status | Placeholder until then                                                                |
| ----------------- | ------ | ------------------------------------------------------------------------------------- |
| Company name      | ❌ TBD | `[BEDRIJFSNAAM]` in copy/meta; "Project Buitenwerk" as internal codename              |
| Logo              | ❌ TBD | Neutral placeholder mark (framed monogram/wordmark component, clearly temporary)      |
| Domain            | ❌ TBD | `ghostyfied.github.io/opusMaatwerk` during development                                |
| E-mail            | ❌ TBD | Form via Formspree (works without a domain); `tel:`/WhatsApp once number is confirmed |
| Brand colors/type | ❌ TBD | Provisional design system (§5), built entirely as swappable tokens                    |

**Swap mechanics (build requirement):** all identity lives in exactly three places — `src/data/site.ts` (name, tagline, domain, e-mail, phone, KvK, socials → feeds copy, meta tags, JSON-LD), a `BrandMark.vue` component (placeholder mark now, real logo later), and the Tailwind `@theme` token block (colors/fonts). Rebranding = editing those three files. Nothing else in the codebase may hard-code identity.

---

## 2. Source material: the current opusmaatwerk.nl

Platform: One.com Web Editor (site-builder). Three pages: Home, Foto's van projecten → Exterieur, Werkwijze. Meta description: _"Klusjesman Timmerman Culemborg"_. The new company's site should reuse its substance and avoid its weaknesses.

### Content worth carrying over

| Content                                                                                                                                     | Notes                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Intro text ("Voor een oplossing op maat ben je bij mij aan het goede adres…")                                                               | Warm, personal, includes the musician backstory. Rewrite for the new positioning; the story is Tijmen's, not the old brand's — it carries over.                                  |
| 5 testimonials (Hagemans/Den Bosch, Albers/Asperen, Stadsboerderij Caetshage/Culemborg, Van Dongen/Culemborg, Spijker/Culemborg)            | Genuinely strong social proof about Tijmen personally (meedenken, betrouwbaarheid, duurzaamheid, prijs). Reusable under the new brand — reconfirm permission in the new context. |
| Werkwijze: 5 process steps (oriëntatie → urenraming (gratis) → ontwerpschets (betaald) → definitief ontwerp + vaste prijs optie → planning) | Great transparency — keep and visualize as a timeline. Rates/terms may change with the new company: confirm.                                                                     |
| Voorwaarden: €55/u excl. btw, min. dagdeel + reistijd, betaling 14 dagen, 1 jaar garantie, verzekerd                                        | Confirm whether these carry over to the new company.                                                                                                                             |
| Photos                                                                                                                                      | Re-collect originals in high-res from Tijmen; the current gallery is an unlabeled JS-rendered dump.                                                                              |

### Mistakes the new site must not repeat

- Handyman ("klusjesman") framing that hides the specialization.
- No portfolio structure: no project stories, materials, or dimensions — exactly what buyers of a €10k+ garden building want to see.
- No conversion path (no phone, no form, no CTA).
- No SEO for valuable terms (houten overkapping, tuinkamer, veranda op maat, buitenverblijf), no structured data, no per-page meta.
- Trust gaps: no KvK number (legally required for NL business sites), no service-area statement.

**Fate of opusmaatwerk.nl:** open question for the client — keep it running alongside, retire it, or redirect it to the new site once live (a redirect would pass along its modest existing traffic/findability).

---

## 3. Positioning & messaging strategy

**Primary positioning:** _Specialist in houten buitenverblijven — ontwerp én bouw door één vakman._
**Secondary:** _Maatwerk binnen en buiten_ (built-ins, doors, renovation) — keeps the existing pipeline without diluting the headline story.

**Audience:** homeowners in Culemborg / Rivierenland / province of Utrecht & Gelderland considering a serious garden building (garden room, veranda, large shed) who value craftsmanship, involvement in the design, and reliability over lowest price.

**Trust pillars (recurring across the site):**

1. **Meedenken** — design together, options within budget (echoed by every testimonial).
2. **Afspraak is afspraak** — deadlines kept ("haast een unicum in de (ver)bouwwereld" — actual customer quote).
3. **Duurzaam** — reuse of materials, durable wood species.
4. **Zeker** — insured, warranty, transparent rates.

**Tagline:** finalized together with the name (a good name+tagline pair is one decision, not two). Name-independent candidates that work today:

- _"Houten buitenverblijven op maat"_ — clear + SEO (recommended for hero H1 regardless of final tagline)
- _"Vakwerk in hout — van schets tot oplevering"_
- _"Buitenleven, gebouwd voor jaren"_

Tone of voice: professional but personal ("ik", not "wij"), concrete, no marketing fluff. All site copy in Dutch. Where the name would appear, copy uses `[BEDRIJFSNAAM]` so the swap is greppable.

---

## 4. Site architecture

Six routes + one legal page. Navigation: **Buitenverblijven · Projecten · Werkwijze · Over · Contact** (placeholder mark links home). "Vraag advies aan" as highlighted button in the header.

```
/                     Home
/buitenverblijven/    Specialization pillar page
/projecten/           Portfolio grid (filterable)
/projecten/[slug]/    Project case page (one per project)
/werkwijze/           Process + rates + guarantees
/over/                About Tijmen / the story
/contact/             Contact & quote request
/privacy/             Privacy statement (footer only)
```

### Page blueprints

**Home**

1. Hero: full-bleed photo of the flagship garden room, dark gradient overlay, H1 _"Houten buitenverblijven op maat"_, subline _"Ontwerp en bouw door één vakman uit Culemborg — van eerste schets tot laatste dakpan."_, CTAs **Bekijk projecten** / **Vraag vrijblijvend advies**.
2. Positioning strip: one paragraph — who Tijmen is, what he builds, where.
3. Featured projects: 3 cards → /projecten.
4. "Wat ik maak" services grid: Buitenverblijven & tuinkamers · Overkappingen & veranda's · Tuinhuizen & schuren · Maatwerk binnenshuis (kasten, deuren, herstel).
5. Werkwijze teaser: the 5 steps as a compact horizontal timeline → /werkwijze.
6. "Waarom [BEDRIJFSNAAM]" — 4 trust pillars.
7. Testimonials (2–3 highlighted, link to more).
8. About teaser: portrait + two lines of the musician story → /over.
9. CTA banner + footer (contact data, KvK, service area, privacy link).

**Buitenverblijven** (the money page — target for SEO & ads)

- Intro on the specialization; what "op maat" actually means vs. catalog garden houses.
- Types: tuinkamer met glazen schuifwanden · overkapping/veranda · tuinhuis met berging. Each with photo, typical dimensions, options.
- Materials & options: houtsoorten (douglas, lariks, eiken), dakbedekking (dakpannen, EPDM), glazen schuifwanden, goten/hemelwaterafvoer, verlichting/elektra, fundering.
- Indicative pricing ("vanaf €X" per type — figures from Tijmen; manages expectations, filters leads).
- Mini-FAQ: vergunning nodig? bouwtijd? onderhoud? (also SEO/AI-answer fodder).
- Process recap + CTA.

**Projecten**

- Filterable grid (Alles · Buitenverblijven · Overkappingen · Interieur · Renovatie). Cards: photo, title, place, year.
- Case page per project: gallery, the story (vraag → oplossing), spec block (afmetingen, houtsoort, dak, glas, bouwtijd), linked testimonial when available, prev/next navigation, CTA.
- Launch target: 4–6 projects, each with 4–8 photos. Grows over time — adding a project = adding one data file + photos.

**Werkwijze**

- The 5 steps as a vertical timeline with short explanations, marking clearly what's free and what's billed.
- Tarieven & voorwaarden as a clean table (confirm figures for the new company).
- Garanties & verzekering block. CTA.

**Over**

- Portrait, the musician → maker story told properly, values, and why the new company focuses on buitenverblijven.
- Optionally: partners/collaboration note (testimonials mention working with colleagues for bigger jobs — reassures capacity for large builds).

**Contact**

- Two columns: (left) direct contact — phone/WhatsApp deep-link, e-mail, service area ("Culemborg en omstreken, ± 50 km"), response promise; (right) quote form: naam, e-mail, telefoon, type project (select), omschrijving, foto-upload prompt ("stuur foto's van de locatie via WhatsApp/e-mail").
- Footer data everywhere: KvK, btw-id, e-mail, phone.

---

## 5. Design direction (provisional, pending branding)

**Principle: photography-first, identity-light.** Until the brand exists, the design leans on what is certain — the work itself. Warm wood, garden greens, calm grounds. The provisional system below makes the site look finished and professional today, and is built 100% as design tokens so the final brand palette/typeface replaces it wholesale. Nothing in the layout depends on a specific hue or letterform.

### Provisional color tokens

| Token        | Value     | Use                                                               |
| ------------ | --------- | ----------------------------------------------------------------- |
| `spruce-900` | `#22362A` | Footer, hero overlays                                             |
| `spruce-700` | `#35523F` | **Provisional primary:** buttons, headings accents, header        |
| `spruce-500` | `#57795F` | Hover states, links                                               |
| `oak-600`    | `#9A6B33` | Accent (text-safe): eyebrows, highlights                          |
| `oak-400`    | `#C08A4E` | Accent (visual): icons, active states — from the wood photography |
| `cream-50`   | `#FAF8F2` | Page background (warm white — never clinical #FFF)                |
| `cream-100`  | `#F2EDE2` | Alternating section background, cards                             |
| `ink-900`    | `#23211C` | Headings on light                                                 |
| `ink-600`    | `#4B473E` | Body text                                                         |
| `line-200`   | `#E4DECF` | Borders, rules                                                    |

Rationale for provisional green: it comes from the product's context (gardens) rather than from any brand guess, so it won't imprint a false identity — and if the final brand happens to land elsewhere (navy, terracotta, black), the token swap carries no layout consequences. Contrast: spruce-700 and ink-600 on cream-50 are both ≥ 7:1 — AA/AAA safe. Buttons: spruce bg + cream text (primary), oak ghost (secondary).

### Provisional typography (Google Fonts)

- **Display: Archivo** (600/700) — sturdy, slightly technical grotesk that fits timber construction; neutral enough not to fight any future logo.
- **Body: Inter** (400/500/600) — neutral, excellent legibility.
- **Testimonials: Lora italic** (optional third voice for quotes).
- Scale: fluid `clamp()` sizes; H1 ~ clamp(2.2rem, 5vw, 3.5rem).
- When the real logo arrives, revisit the display face so headings and logo letterforms rhyme.

### Placeholder brand mark

- `BrandMark.vue`: a simple framed wordmark rendering `[BEDRIJFSNAAM]`'s working state — thin-bordered box, uppercase letterspaced text. Honest about being temporary in dev previews, but styled well enough that stakeholder demos don't look broken.
- Variants via props (`light`/`dark`/`compact` for header vs footer), so the real logo's SVG variants slot into the same component API later.
- Favicon: neutral placeholder (single letter or mark) until branding; swap file in `public/`.

### Imagery & components

- Photography does the selling: large, edge-to-edge project photos, warm grading, consistent 3:2 / 4:3 crops; dark gradient only on hero overlays for text contrast.
- Photo guideline sheet for Tijmen (shoot wide + detail shots, daylight, tidy site, before/after pairs).
- Component inventory: sticky header (transparent-over-hero → solid on scroll), hero, section eyebrow label, project card, testimonial card, step timeline (horizontal + vertical), spec table, USP item, CTA banner, photo grid + lightbox, filter pills, contact form fields, footer.
- Feel: generous whitespace, 4px corner radius (crafted, not bubbly), thin rules, subtle scroll-reveal animations only (no parallax circus).
- Single light theme (deliberate choice for a marketing site).

---

## 6. Technical architecture

### Stack

| Concern           | Choice                                                                                                                                                                                | Why                                                                                                                                                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Framework         | **Vue 3 (latest) + Vite (latest)**                                                                                                                                                    | As requested; Composition API + `<script setup>`                                                                                                                                                                               |
| Static generation | **vite-ssg** (+ vue-router 4, @unhead/vue)                                                                                                                                            | Pre-renders every route to real HTML at build time → proper SEO/OG on GitHub Pages, history-mode URLs without 404 hacks, stays a plain Vue+Vite project (Nuxt would work too but adds framework weight this site doesn't need) |
| Styling           | **Tailwind CSS v4**                                                                                                                                                                   | Design tokens via `@theme` (provisional palette above), fast professional iteration, tiny purged output; **the brand-swap surface**                                                                                            |
| Content           | **Typed data files** (`src/data/*.ts`: projects, testimonials, services, **site.ts = single source of identity**)                                                                     | No CMS needed yet; adding a project = one object + photos; type-checked; rebrand = edit site.ts + tokens + BrandMark                                                                                                           |
| Images            | **vite-imagetools** (or a sharp prebuild script)                                                                                                                                      | Generates AVIF/WebP + responsive `srcset` from originals; `loading="lazy"`; explicit width/height against CLS                                                                                                                  |
| Contact form      | **Formspree free tier** (or FormSubmit) + `tel:`/WhatsApp `wa.me` links                                                                                                               | GitHub Pages has no backend; works without a company domain/e-mail; honeypot + Dutch validation messages                                                                                                                       |
| SEO               | @unhead/vue per-route meta fed from `site.ts`, `sitemap.xml` + `robots.txt` at build, JSON-LD (`LocalBusiness` sitewide, per-project `CreativeWork`/`ImageObject`), OG image per page | Name/domain flow in from config at build time                                                                                                                                                                                  |
| Analytics         | **GoatCounter or Plausible** (optional)                                                                                                                                               | Cookieless → no cookie banner needed under AVG                                                                                                                                                                                 |
| Lint/format       | ESLint + Prettier, `vue-tsc`                                                                                                                                                          |                                                                                                                                                                                                                                |
| CI/CD             | **GitHub Actions → GitHub Pages** (official `actions/deploy-pages` flow)                                                                                                              | Build + deploy on push to `main`                                                                                                                                                                                               |

### Repo structure

```
opusMaatwerk/            # repo rename optional once the company name exists
├─ .github/workflows/deploy.yml
├─ public/               # favicon (placeholder), robots.txt, (CNAME later)
├─ src/
│  ├─ assets/            # placeholder mark, css
│  ├─ components/        # ui/ (Button, SectionLabel, BrandMark…), blocks/ (Hero, ProjectCard…)
│  ├─ layouts/           # header/footer shell
│  ├─ pages/             # route components (home, buitenverblijven, projecten, …)
│  ├─ data/              # site.ts (IDENTITY), projects.ts, testimonials.ts, services.ts
│  ├─ content/photos/    # per-project originals (processed by imagetools)
│  └─ main.ts            # ViteSSG entry
├─ PLAN.md
└─ vite.config.ts
```

### GitHub Pages & (future) domain

1. Pages source = "GitHub Actions"; workflow: checkout → pnpm install → build (vite-ssg) → upload artifact → deploy.
2. **Base path:** `/opusMaatwerk/` (served at `ghostyfied.github.io/opusMaatwerk`) via env; flips to `/` when a custom domain is attached. If the repo is renamed after the company name lands, the base path and Pages URL follow the new repo name.
3. **Custom domain (later):** once the name exists, check availability and register the `.nl` domain (registrar of choice — cheap, and includes mailbox options or pair with a mail provider for `info@<newdomain>.nl`). Then: `CNAME` file in `public/`, A/AAAA records → GitHub Pages IPs, `www` CNAME → `ghostyfied.github.io`, enforce HTTPS. Until then the site develops and demos happily on the github.io URL — `noindex` during development, lifted at launch.
4. **SEO from zero:** a new domain has no history, so on launch: Google Business Profile for the new company, Search Console verification, and (client decision) a redirect from opusmaatwerk.nl to pass along its existing findability.

### Quality bar (acceptance criteria)

- Lighthouse ≥ 95 on all four categories (mobile), LCP < 2.5s on 4G.
- Fully responsive 360px → 1920px; keyboard navigable; alt text on every photo; focus states; `lang="nl"`.
- Every route has unique title/description/OG tags and valid JSON-LD (Rich Results test) — all identity fields sourced from `site.ts`.
- Works with JS disabled for all content (pre-rendered HTML) — only lightbox/filters degrade gracefully.
- **Rebrand drill:** changing name/colors/mark touches only `site.ts`, the `@theme` block, `BrandMark.vue`, and favicon files — verified once by actually doing a test swap.

---

## 7. Content plan & required input from Tijmen

Draft all copy in Dutch as part of the build (the plan's blueprints define each page's message). Existing werkwijze/voorwaarden text and the 5 testimonials migrate near-verbatim (pending confirmation they apply to the new company).

**Branding workstream (client-side, can run parallel to phases 0–3):**

- [ ] Company name (check: KvK handelsnaam availability, domain availability, no trademark clashes)
- [ ] Domain registration + decision on e-mail address (`info@<newdomain>.nl`)
- [ ] Logo (designer or a later iteration together) — delivered as SVG if at all possible
- [ ] Brand colors/typeface if the logo implies them
- [ ] KvK: register new handelsnaam (or new inschrijving) — number goes in the site footer

**Asset & info checklist:**

- [ ] High-res photos per project (target 4–6 projects; wide + detail shots; phone originals are fine)
- [ ] Per project: place, year, dimensions, wood species, roof/glass details, one-paragraph story
- [ ] Portrait photo of Tijmen (on site, natural light)
- [ ] Phone number for the site + OK for WhatsApp button
- [ ] Confirm rates/terms for the new company (€55/u? warranty? payment terms?)
- [ ] "Vanaf" price indications for the 3 buitenverblijf types (or decision to omit)
- [ ] Service area radius
- [ ] Permission from the 5 testimonial authors to republish under the new brand
- [ ] Decision on opusmaatwerk.nl: keep / retire / redirect at launch

Until real assets arrive: build with the 3 available photos (garden room ×2) + neutral placeholders, clearly marked.

---

## 8. Implementation phases

| Phase                                                                          | Deliverable                                                                                                                                       | Definition of done                                                                              |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **0. Foundation** ✅                                                           | Vite + Vue + vite-ssg + Tailwind scaffold, provisional tokens, `site.ts` + `BrandMark` placeholder identity, header/footer shell, deploy workflow | CI deploys a styled shell to GitHub Pages _(workflow ready; needs one-time Pages activation)_   |
| **1. Core pages** ✅                                                           | Home + Contact with real copy, hero, USPs, testimonials, form                                                                                     | MVP shareable with the client                                                                   |
| **2. Portfolio**                                                               | Data model, Projecten grid + case template, 4–6 projects entered                                                                                  | Adding a project requires no code changes                                                       |
| **3. Story pages**                                                             | Buitenverblijven pillar page, Werkwijze, Over, Privacy                                                                                            | Full sitemap live                                                                               |
| **B. Brand drop-in** _(whenever branding lands — independent of other phases)_ | Real name/logo/colors/domain applied via `site.ts`, tokens, `BrandMark`, favicon, CNAME                                                           | Site carries the final identity; no placeholder strings remain (grep `[BEDRIJFSNAAM]` = 0 hits) |
| **4. Polish & launch**                                                         | SEO pass (meta/JSON-LD/sitemap/OG), image pipeline, a11y audit, Lighthouse ≥95, `noindex` lifted, domain live                                     | The new domain serves the site over HTTPS                                                       |

Phase 0+1 first, get client feedback on look & feel, then 2–3; Phase B slots in whenever the branding is ready; Phase 4 closes it out (launch needs the domain, so B before 4).

### Later (explicitly out of scope now)

- Decap CMS (git-based, free) if Tijmen wants to edit projects himself
- Google Reviews integration / review collection flow
- Price-indication configurator ("stel je overkapping samen")
- Before/after slider component; project videos
- Blog/kennisbank for SEO (vergunningvrij bouwen, houtsoorten, onderhoud)

---

## 9. Open questions for the client

1. Company name & branding: who creates the logo, and what's the timeline? (Site build doesn't block on it.)
2. What happens to opusmaatwerk.nl at launch — keep, retire, or redirect?
3. Do rates/terms (€55/u, 1 jaar garantie, betaling 14 dagen) carry over to the new company?
4. Phone number & WhatsApp on the site — yes?
5. Publish "vanaf" prices for buitenverblijven, or keep pricing to the quote stage?
6. Keep offering small jobs (klussen) explicitly, or position them quietly under "maatwerk binnenshuis"?
7. Which project is the flagship for the homepage hero?
8. Does the musician backstory stay front-and-center on the Over page? (Recommended — it's memorable and it's his.)
