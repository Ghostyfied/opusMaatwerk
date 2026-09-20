export interface Testimonial {
  /** Optional review title, rendered uppercase above the quote. */
  title?: string
  quote: string
  author: string
  location: string
}

/**
 * The first four entries are reviews for Eigen Buiten; the last is een
 * ervaring uit eerder werk van Tijmen als zelfstandig timmerman.
 */
export const testimonials: Testimonial[] = [
  {
    title: 'Top tuinhuis',
    quote:
      'Tijmen en Jos bouwden in mijn tuin een prachtig tuinhuis van Douglas-hout. Het huis met een schuur- en een loungegedeelte was hun ontwerp. Materiaal en uitvoering hebben zij steeds nauwkeurig met me afgestemd. Het is prachtig geworden met glazen schuifpui! En het was in een mum van tijd klaar. Ik kan hen van harte aanbevelen als zeer goede vakmannen met oog voor materialen, het hergebruik ervan en voor mooie ontwerpdetails. Helemaal top!',
    author: 'Dieuwke van Ooij',
    location: 'Utrecht',
  },
  {
    quote:
      'Jos en Tijmen hebben bij ons een prachtige overkapping gemaakt, waar we enorm van genieten. Ze dachten actief mee en gaven goede adviezen. Wij ervaarden hen als heel prettig, transparant en eerlijk.',
    author: 'Chester en Anoesjka',
    location: 'Everdingen',
  },
  {
    quote:
      'Over de vervanging van mijn schuur en schutting ben ik heel tevreden. Tijmen en collega Jos zijn prettige mensen. Werken netjes en houden zich aan afspraken. Ook over de levering van materialen werd goed gecommuniceerd. Prima bedrijf.',
    author: 'C. Rosenbaum',
    location: 'Utrecht',
  },
  {
    quote:
      'Jos en Tijmen hebben bij ons een losstaande overkapping gebouwd naar onze eigen ideeën. Een niet recht toe, recht aan constructie waardoor best ingewikkeld. Hierdoor is een hele mooie buitenkeuken ruimte gecreëerd die volledig past bij de vormen van de tuin. Ze hebben vanaf het begin goed meegedacht hoe de wensen te realiseren en we zijn heel tevreden met het eindresultaat. In een later stadium heeft Jos ook nog een bijpassende buitenkeuken gemaakt van zeer goede kwaliteit.',
    author: 'Henk Jan',
    location: 'Culemborg',
  },
  {
    quote:
      'Tijmen heeft een goed bouwkundig inzicht, vindt het fijn als je meedenkt en kiest uit alternatieven. Voor ons is ook erg belangrijk dat hij zijn afspraken nakomt — haast een unicum in de (ver)bouwwereld.',
    author: 'Jan van Dongen',
    location: 'Culemborg',
  },
]
