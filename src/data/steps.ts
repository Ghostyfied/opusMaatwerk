export interface Step {
  title: string
  description: string
  note?: string
}

/** Werkwijze — carried over from Tijmen's huidige werkwijze-pagina. */
export const steps: Step[] = [
  {
    title: 'Kennismaking',
    description: 'Vrijblijvend contact per e-mail of telefoon, of direct een bezoek op locatie.',
    note: 'gratis',
  },
  {
    title: 'Raming',
    description: 'Een eerste inschatting van uren en kosten, zodat je weet waar je aan toe bent.',
    note: 'gratis',
  },
  {
    title: 'Ontwerpschets',
    description: 'Een uitgewerkte schets van je buitenverblijf, op basis van je wensen en budget.',
  },
  {
    title: 'Definitief ontwerp',
    description: 'Het definitieve ontwerp — desgewenst met een vaste totaalprijs vooraf.',
  },
  {
    title: 'De bouw',
    description: 'We plannen een startdatum en ik ga aan de slag. Afspraak is afspraak.',
  },
]
