export interface Testimonial {
  /** Optional review title, rendered uppercase above the quote. */
  title?: string
  quote: string
  author: string
  location: string
}

/**
 * The first three entries are reviews for Eigen Buiten; the others are
 * ervaringen uit eerder werk van Tijmen als zelfstandig timmerman.
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
      'Tijmen heeft een goed bouwkundig inzicht, vindt het fijn als je meedenkt en kiest uit alternatieven. Voor ons is ook erg belangrijk dat hij zijn afspraken nakomt — haast een unicum in de (ver)bouwwereld.',
    author: 'Jan van Dongen',
    location: 'Culemborg',
  },
  {
    quote:
      'Heel prettig hoe hij meedenkt en verschillende opties kan aanbieden in zijn offerte wat betreft degelijkheid, kosten en hergebruik van materialen. Een creatieve vakman!',
    author: 'Stadsboerderij Caetshage',
    location: 'Culemborg',
  },
]
