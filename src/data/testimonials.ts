export interface Testimonial {
  /** Optional review title, rendered uppercase above the quote. */
  title?: string
  quote: string
  author: string
  location: string
}

/**
 * The first entry is a review for Eigen Buiten; the others are
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
      'Tijmen heeft een goed bouwkundig inzicht, vindt het fijn als je meedenkt en kiest uit alternatieven. Voor ons is ook erg belangrijk dat hij zijn afspraken nakomt — haast een unicum in de (ver)bouwwereld.',
    author: 'Jan van Dongen',
    location: 'Culemborg',
  },
  {
    quote:
      'Wij zijn heel tevreden over de wijze waarop Tijmen meedenkt, duurzaam werkt, niet schroomt materialen te hergebruiken en zijn afspraken nakomt. Chapeaux!',
    author: 'M. Albers',
    location: 'Asperen',
  },
  {
    quote:
      'Heel prettig hoe hij meedenkt en verschillende opties kan aanbieden in zijn offerte wat betreft degelijkheid, kosten en hergebruik van materialen. Een creatieve vakman!',
    author: 'Stadsboerderij Caetshage',
    location: 'Culemborg',
  },
]
