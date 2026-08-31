export interface Step {
  title: string
  description: string
  note?: string
}

/** Werkwijze — overgenomen uit de huidige werkwijze van de makers. */
export const steps: Step[] = [
  {
    title: 'Kennismaking',
    description: 'Vrijblijvend contact per e-mail of telefoon, of direct een bezoek op locatie.',
    note: 'gratis',
  },
  {
    title: 'Raming',
    description:
      'Een inschatting van kosten, zodat je weet waar je aan begint voor we de volgende stap zetten.',
    note: 'gratis',
  },
  {
    title: 'Ontwerpschets',
    description: 'Een schets van je buitenverblijf, op basis van je wensen en budget.',
  },
  {
    title: 'Definitief ontwerp',
    description: 'Het definitieve ontwerp — desgewenst met een vaste totaalprijs.',
  },
  {
    title: 'De bouw',
    description: 'We plannen een startdatum en gaan aan de slag. Afspraak is afspraak.',
  },
]
