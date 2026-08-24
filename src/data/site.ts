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
    /** Placeholder until the company name exists. */
    name: '[Bedrijfsnaam]',
    nameIsPlaceholder: true,
    /** Internal codename only — never rendered on the site itself. */
    workingTitle: 'Project Buitenwerk',
    tagline: 'Houten buitenverblijven op maat',
  },
  owner: 'Tijmen Wehlburg',
  location: 'Culemborg',
  serviceArea: 'Culemborg en omstreken (± 50 km)',
  contact: {
    /** Interim address — replace with an address on the new domain. */
    email: 'tijmen@wehlburg.nu',
    phone: null as string | null,
    /** wa.me number, digits only (e.g. '31612345678'). */
    whatsapp: null as string | null,
    /** Formspree/FormSubmit endpoint; the form falls back to mailto while null. */
    formEndpoint: null as string | null,
  },
  legal: {
    kvk: null as string | null,
    btw: null as string | null,
  },
  /** New domain, once registered (e.g. 'https://voorbeeld.nl'). */
  domain: null as string | null,
  /** Keep false until launch: renders a noindex meta tag on every page. */
  indexable: false,
}
