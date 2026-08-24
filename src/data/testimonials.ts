export interface Testimonial {
  quote: string
  author: string
  location: string
}

/**
 * Ervaringen uit eerder werk van Tijmen (destijds onder zijn vorige
 * bedrijfsnaam). Herpublicatie onder het nieuwe merk wordt nog
 * bevestigd met de opdrachtgevers — zie PLAN.md §7.
 */
export const testimonials: Testimonial[] = [
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
