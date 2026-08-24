# Opus Maatwerk — Website Redesign Plan

A complete plan for rebuilding [opusmaatwerk.nl](https://opusmaatwerk.nl/) from scratch as a modern, professional, static Vue site hosted on GitHub Pages, repositioning the business around large wooden garden buildings (buitenverblijven) while keeping the existing name and logo.

---

## 1. Context & goals

**The business.** Opus Maatwerk is the one-man carpentry business of Tijmen Wehlburg in Culemborg (Rivierenland, NL). Tijmen is a former professional musician who turned his craftsmanship into a carpentry career during the COVID years — the name "Opus" comes from that story, and "maatwerk" (custom work) doubles nicely with "maat" (a musical bar/measure). He does custom carpentry of all kinds, and now wants to **specialize in large garden buildings**: timber-frame garden rooms with glass sliding walls, verandas/overkappingen with tiled roofs, and big garden houses.

**Goals for the new site:**

1. Look professional and trustworthy — a showcase, not a brochure-builder page.
2. Reposition from "klusjesman/timmerman" (handyman) to **specialist in houten buitenverblijven**, with general custom carpentry as a secondary service.
3. Properly showcase completed work (portfolio with case pages).
4. Convert visitors: make it effortless to request advice/a quote.
5. Keep the existing name and logo; integrate the logo so it belongs to the design instead of sitting on top of it.
6. Tech: latest Vue, fully static, hosted on GitHub Pages (repo `Ghostyfied/opusMaatwerk`).

---

## 2. Analysis of the current site

Platform: **One.com Web Editor** (site-builder). Three pages: Home, Foto's van projecten → Exterieur, Werkwijze. Meta description: *"Klusjesman Timmerman Culemborg"*.

### Content inventory (to migrate)

| Content | Where | Notes |
|---|---|---|
| Intro text ("Voor een oplossing op maat ben je bij mij aan het goede adres…") | Home | Warm, personal, includes musician backstory. Rewrite, keep the story. |
| 5 testimonials (Hagemans/Den Bosch, Albers/Asperen, Stadsboerderij Caetshage/Culemborg, Van Dongen/Culemborg, Spijker/Culemborg) | Home | Genuinely strong social proof — praise for meedenken, betrouwbaarheid, duurzaamheid, prijs. Migrate verbatim (confirm permission). |
| Werkwijze: 5 process steps (oriëntatie → urenraming (gratis) → ontwerpschets (betaald) → definitief ontwerp + vaste prijs optie → planning) | /werkwijze | Great transparency — keep and visualize as a timeline. |
| Voorwaarden: €55/u excl. btw, min. dagdeel + reistijd, betaling 14 dagen, 1 jaar garantie, verzekerd | /werkwijze | Keep; transparency is a differentiator in this market. |
| Photo gallery | /fotos-van-projecten/exterieur | JS-rendered gallery, no captions, no structure. Photos must be re-collected from Tijmen in high-res. |
| Contact: `tijmen@wehlburg.nu` (mailto only) | Everywhere | No phone, no form, no KvK number, personal e-mail domain. |
| Logo `OPUS_logo_RGB.jpg` | Header | Navy square (#1D375A) with white "OPUS" + boxed "MAATWERK". Only exists as JPG. |

### What works

- Authentic personal story (musician → craftsman) — rare, memorable, keep it central.
- Real, detailed testimonials with names and places.
- Unusual transparency about process, rates and warranty.

### What holds it back

- **Positioning:** "Klusjesman" undersells the work; the garden-room photos show high-end timber framing. The specialization is invisible.
- **No portfolio structure:** one unlabeled photo dump; no project stories, materials, or dimensions — exactly what buyers of a €10k+ garden building want to see.
- **No conversion path:** no phone number, no form, no CTA; just a mailto link.
- **Generic design:** builder template, logo-as-hero, no typographic hierarchy, no consistent color system.
- **Weak SEO:** no keyword targeting for valuable terms (houten overkapping, tuinkamer, veranda op maat, buitenverblijf), no structured data, no per-page meta.
- **Trust gaps:** no KvK number (legally required for NL business sites), no service-area statement, personal e-mail domain.

---

## 3. Positioning & messaging strategy

**Primary positioning:** *Specialist in houten buitenverblijven — ontwerp én bouw door één vakman.*
**Secondary:** *Maatwerk binnen en buiten* (built-ins, doors, renovation) — keeps the existing pipeline without diluting the headline story.

**Audience:** homeowners in Culemborg / Rivierenland / province of Utrecht & Gelderland considering a serious garden building (garden room, veranda, large shed) who value craftsmanship, involvement in the design, and reliability over lowest price.

**Trust pillars (recurring across the site):**

1. **Meedenken** — design together, options within budget (echoed by every testimonial).
2. **Afspraak is afspraak** — deadlines kept ("haast een unicum in de (ver)bouwwereld" — actual customer quote).
3. **Duurzaam** — reuse of materials, durable wood species.
4. **Zeker** — insured, 1 year warranty, transparent rates.

**Tagline options** (final choice with client):

- *"Houten buitenverblijven op maat"* — clear + SEO (recommended for hero H1)
- *"Vakwerk in hout — van schets tot oplevering"*
- *"Elk project een opus"* — leans on the music story; good as Over-page motto rather than hero
- *"Timmerwerk met gevoel voor maat"* — subtle musical double meaning

Tone of voice: professional but personal ("ik", not "wij"), concrete, no marketing fluff. All site copy in Dutch.

---

## 4. Site architecture

Six routes + one legal page. Navigation: **Buitenverblijven · Projecten · Werkwijze · Over · Contact** (logo links home). "Vraag advies aan" as highlighted button in the header.

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
1. Hero: full-bleed photo of the flagship garden room, dark navy gradient overlay, H1 *"Houten buitenverblijven op maat"*, subline *"Ontwerp en bouw door één vakman uit Culemborg — van eerste schets tot laatste dakpan."*, CTAs **Bekijk projecten** / **Vraag vrijblijvend advies**.
2. Positioning strip: one paragraph — who Tijmen is, what he builds, where.
3. Featured projects: 3 cards → /projecten.
4. "Wat ik maak" services grid: Buitenverblijven & tuinkamers · Overkappingen & veranda's · Tuinhuizen & schuren · Maatwerk binnenshuis (kasten, deuren, herstel).
5. Werkwijze teaser: the 5 steps as a compact horizontal timeline → /werkwijze.
6. "Waarom Opus" — 4 trust pillars.
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
- Tarieven & voorwaarden as a clean table (€55/u excl. btw etc.).
- Garanties & verzekering block. CTA.

**Over**
- Portrait, the musician → maker story told properly, values, the meaning of "Opus".
- Optionally: partners/collaboration note (testimonials mention working with colleagues for bigger jobs — reassures capacity for large builds).

**Contact**
- Two columns: (left) direct contact — phone/WhatsApp deep-link, e-mail, service area ("Culemborg en omstreken, ± 50 km"), response promise; (right) quote form: naam, e-mail, telefoon, type project (select), omschrijving, foto-upload prompt ("stuur foto's van de locatie via WhatsApp/e-mail").
- Footer data everywhere: KvK, btw-id, e-mail, phone.

---

## 5. Design direction

**Principle: the logo's navy becomes the site's primary color.** That single decision makes the logo feel native instead of "stuck on". The warm wood tones of the photography carry the craft; navy carries the professionalism.

### Color tokens

| Token | Value | Use |
|---|---|---|
| `navy-900` | `#14263F` | Footer, hero overlays |
| `navy-700` | `#1D375A` | **Logo navy.** Primary: headings, buttons, header |
| `navy-500` | `#33507D` | Hover states, links |
| `oak-500` | `#C08A4E` | Accent: highlights, icons, active states (from the wood photography) |
| `oak-300` | `#DDBB8E` | Subtle accents on dark navy |
| `cream-50` | `#FAF7F1` | Page background (warm white — never clinical #FFF) |
| `cream-100` | `#F1EBE0` | Alternating section background, cards |
| `ink-900` | `#22201B` | Headings on light |
| `ink-600` | `#4A463D` | Body text |
| `line-200` | `#E3DCCE` | Borders, rules |

Contrast: navy-700 on cream-50 ≈ 10:1, ink-600 on cream-50 ≈ 7.5:1 — AA/AAA safe. Buttons: navy bg + white text (primary), oak underline/ghost (secondary).

### Typography (Google Fonts)

- **Display: Oswald** (500/600, uppercase, letterspaced) — tall condensed grotesk that directly echoes the "OPUS" letterforms in the logo, so logo and headings read as one family.
- **Body: Inter** (400/500/600) — neutral, excellent legibility.
- **Testimonials: Lora italic** (optional third voice for quotes).
- Scale: fluid `clamp()` sizes; H1 ~ clamp(2.2rem, 5vw, 3.5rem).

### Logo integration

- Recreate the logo as **SVG** (it currently only exists as JPG): (a) the navy square badge as-is, (b) transparent variants — navy-on-transparent and white-on-transparent, (c) a horizontal one-line lockup "OPUS MAATWERK" for the sticky header.
- Header on cream → navy transparent lockup; footer & dark sections → white version on navy-900; favicon + touch icons from the badge.
- Reuse the logo's **boxed "MAATWERK" motif** (word in a thin rectangular frame with tick lines) as the section-label component (`── PROJECTEN ──` style eyebrow labels) — a small detail that ties the whole site to the logo.

### Imagery & components

- Photography does the selling: large, edge-to-edge project photos, warm grading, consistent 3:2 / 4:3 crops; navy duotone/gradient only on hero overlays for text contrast.
- Photo guideline sheet for Tijmen (shoot wide + detail shots, daylight, tidy site, before/after pairs).
- Component inventory: sticky header (transparent-over-hero → solid on scroll), hero, section eyebrow label, project card, testimonial card, step timeline (horizontal + vertical), spec table, USP item, CTA banner, photo grid + lightbox, filter pills, contact form fields, footer.
- Feel: generous whitespace, 4px corner radius (crafted, not bubbly), thin rules echoing the logo frame, subtle scroll-reveal animations only (no parallax circus).
- Single light theme (deliberate choice for a marketing site).

---

## 6. Technical architecture

### Stack

| Concern | Choice | Why |
|---|---|---|
| Framework | **Vue 3 (latest) + Vite (latest)** | As requested; Composition API + `<script setup>` |
| Static generation | **vite-ssg** (+ vue-router 4, @unhead/vue) | Pre-renders every route to real HTML at build time → proper SEO/OG on GitHub Pages, history-mode URLs without 404 hacks, stays a plain Vue+Vite project (Nuxt would work too but adds framework weight this site doesn't need) |
| Styling | **Tailwind CSS v4** | Design tokens via `@theme` (colors/fonts above), fast professional iteration, tiny purged output |
| Content | **Typed data files** (`src/data/*.ts`: projects, testimonials, services, site config) | No CMS needed yet; adding a project = one object + photos; type-checked |
| Images | **vite-imagetools** (or a sharp prebuild script) | Generates AVIF/WebP + responsive `srcset` from originals; `loading="lazy"`; explicit width/height against CLS |
| Contact form | **Formspree free tier** (or FormSubmit) + `tel:`/`mailto:`/WhatsApp `wa.me` links | GitHub Pages has no backend; honeypot + Dutch validation messages; mailto fallback until the account exists |
| SEO | @unhead/vue per-route meta, `sitemap.xml` + `robots.txt` at build, JSON-LD (`LocalBusiness` sitewide, per-project `CreativeWork`/`ImageObject`), OG image per page | |
| Analytics | **GoatCounter or Plausible** (optional) | Cookieless → no cookie banner needed under AVG |
| Lint/format | ESLint + Prettier, `vue-tsc` | |
| CI/CD | **GitHub Actions → GitHub Pages** (official `actions/deploy-pages` flow) | Build + deploy on push to `main` |

### Repo structure

```
opusMaatwerk/
├─ .github/workflows/deploy.yml
├─ public/               # favicon, robots.txt, CNAME
├─ src/
│  ├─ assets/            # logo SVGs, css
│  ├─ components/        # ui/ (Button, SectionLabel…), blocks/ (Hero, ProjectCard…)
│  ├─ layouts/           # header/footer shell
│  ├─ pages/             # route components (home, buitenverblijven, projecten, …)
│  ├─ data/              # site.ts, projects.ts, testimonials.ts, services.ts
│  ├─ content/photos/    # per-project originals (processed by imagetools)
│  └─ main.ts            # ViteSSG entry
├─ PLAN.md
└─ vite.config.ts
```

### GitHub Pages & domain

1. Pages source = "GitHub Actions"; workflow: checkout → pnpm install → build (vite-ssg) → upload artifact → deploy.
2. **Base path:** starts as `/opusMaatwerk/` (served at `ghostyfied.github.io/opusMaatwerk`) via env; flips to `/` when the custom domain is attached.
3. **Custom domain:** `CNAME` file with `opusmaatwerk.nl`; at One.com DNS: A records → `185.199.108.153` … `.111.153` (+ AAAA), `www` CNAME → `ghostyfied.github.io`; enforce HTTPS in repo settings. E-mail stays untouched at One.com (advise creating `info@opusmaatwerk.nl` there and replacing `tijmen@wehlburg.nu` on the site).
4. Old URLs (`/werkwijze`, `/fotos-van-projecten/…`) keep working or get redirect stubs → no dead links after switchover.

### Quality bar (acceptance criteria)

- Lighthouse ≥ 95 on all four categories (mobile), LCP < 2.5s on 4G.
- Fully responsive 360px → 1920px; keyboard navigable; alt text on every photo; focus states; `lang="nl"`.
- Every route has unique title/description/OG tags and valid JSON-LD (Rich Results test).
- Works with JS disabled for all content (pre-rendered HTML) — only lightbox/filters degrade gracefully.

---

## 7. Content plan & required input from Tijmen

Draft all copy in Dutch as part of the build (the plan's blueprints define each page's message). Existing werkwijze/voorwaarden text and the 5 testimonials migrate near-verbatim.

**Asset & info checklist for the client:**

- [ ] High-res photos per project (target 4–6 projects; wide + detail shots; phone originals are fine)
- [ ] Per project: place, year, dimensions, wood species, roof/glass details, one-paragraph story
- [ ] Portrait photo of Tijmen (on site, natural light)
- [ ] Phone number for the site + OK for WhatsApp button
- [ ] KvK number (+ btw-id) — legally required on the site
- [ ] "Vanaf" price indications for the 3 buitenverblijf types (or decision to omit)
- [ ] Service area radius
- [ ] Permission from the 5 testimonial authors to republish
- [ ] Decision: create `info@opusmaatwerk.nl` mailbox at One.com
- [ ] One.com DNS access for the domain switch (final step)

Until real assets arrive: build with the 3 available photos (garden room ×2, logo) + neutral placeholders, clearly marked.

---

## 8. Implementation phases

| Phase | Deliverable | Definition of done |
|---|---|---|
| **0. Foundation** | Vite + Vue + vite-ssg + Tailwind scaffold, design tokens, logo SVGs, header/footer shell, deploy workflow | CI deploys a styled shell to GitHub Pages |
| **1. Core pages** | Home + Contact with real copy, hero, USPs, testimonials, form | MVP shareable with the client |
| **2. Portfolio** | Data model, Projecten grid + case template, 4–6 projects entered | Adding a project requires no code changes |
| **3. Story pages** | Buitenverblijven pillar page, Werkwijze, Over, Privacy | Full sitemap live |
| **4. Polish & launch** | SEO pass (meta/JSON-LD/sitemap/OG), image pipeline, a11y audit, Lighthouse ≥95, redirect stubs, custom-domain switch | opusmaatwerk.nl serves the new site over HTTPS |

Phase 0+1 first, get client feedback on look & feel, then 2–4.

### Later (explicitly out of scope now)

- Decap CMS (git-based, free) if Tijmen wants to edit projects himself
- Google Reviews integration / review collection flow
- Price-indication configurator ("stel je overkapping samen")
- Before/after slider component; project videos
- Blog/kennisbank for SEO (vergunningvrij bouwen, houtsoorten, onderhoud)

---

## 9. Open questions for the client

1. Phone number & WhatsApp on the site — yes?
2. Publish "vanaf" prices for buitenverblijven, or keep pricing to the quote stage?
3. Keep offering small jobs (klussen) explicitly, or position them quietly under "maatwerk binnenshuis"?
4. Switch to `info@opusmaatwerk.nl`?
5. Which project is the flagship for the homepage hero?
6. Tagline preference (see §3).
