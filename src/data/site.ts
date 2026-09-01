/**
 * Single source of identity (PLAN.md §1 "swap mechanics").
 *
 * The company name, logo, and domain do not exist yet. Everything
 * identity-related lives here, in BrandMark.vue, and in the @theme
 * token block of main.css — rebranding must touch nothing else.
 * The literal string "[Bedrijfsnaam]" is the greppable placeholder.
 */
export const site = {
  brand: {
    name: 'Eigen Buiten',
    nameIsPlaceholder: false,
    /** Former internal codename, kept for repo history context. */
    workingTitle: 'Project Buitenwerk',
    tagline: 'Buitenverblijven op maat',
  },
  owner: 'Tijmen Wehlburg',
  location: 'Culemborg',
  contact: {
    /** Interim address — replace with an address on the new domain. */
    email: 'tijmen@wehlburg.nu',
    phone: null as string | null,
    /** wa.me number, digits only (e.g. '31612345678'). */
    whatsapp: null as string | null,
  },
  legal: {
    kvk: null as string | null,
    btw: null as string | null,
  },
  domain: 'https://eigenbuiten.nl' as string | null,
  /** Keep false until launch: renders a noindex meta tag on every page. */
  indexable: false,
}
