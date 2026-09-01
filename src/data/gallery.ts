import gardenRoom640w from '@/assets/photos/garden-room-640.webp'
import gardenRoom960w from '@/assets/photos/garden-room-960.webp'
import gardenRoom640j from '@/assets/photos/garden-room-640.jpg'
import gardenRoom1438w from '@/assets/photos/garden-room-1438.webp'
import gardenRoom1438j from '@/assets/photos/garden-room-1438.jpg'
import interieur640w from '@/assets/photos/tuinkamer-interieur-640.webp'
import interieur960w from '@/assets/photos/tuinkamer-interieur-960.webp'
import interieur640j from '@/assets/photos/tuinkamer-interieur-640.jpg'
import interieur1600w from '@/assets/photos/tuinkamer-interieur-1600.webp'
import interieur1600j from '@/assets/photos/tuinkamer-interieur-1600.jpg'
import platdak640w from '@/assets/photos/tuinkamer-platdak-640.webp'
import platdak960w from '@/assets/photos/tuinkamer-platdak-960.webp'
import platdak640j from '@/assets/photos/tuinkamer-platdak-640.jpg'
import platdak1600w from '@/assets/photos/tuinkamer-platdak-1600.webp'
import platdak1600j from '@/assets/photos/tuinkamer-platdak-1600.jpg'
import overkapping640w from '@/assets/photos/overkapping-veranda-640.webp'
import overkapping960w from '@/assets/photos/overkapping-veranda-960.webp'
import overkapping640j from '@/assets/photos/overkapping-veranda-640.jpg'
import overkapping1600w from '@/assets/photos/overkapping-veranda-1600.webp'
import overkapping1600j from '@/assets/photos/overkapping-veranda-1600.jpg'
import atelier640w from '@/assets/photos/tuinhuis-atelier-640.webp'
import atelier960w from '@/assets/photos/tuinhuis-atelier-960.webp'
import atelier640j from '@/assets/photos/tuinhuis-atelier-640.jpg'
import atelier1600w from '@/assets/photos/tuinhuis-atelier-1600.webp'
import atelier1600j from '@/assets/photos/tuinhuis-atelier-1600.jpg'
import keukenHoek640w from '@/assets/photos/buitenkeuken-hoek-640.webp'
import keukenHoek960w from '@/assets/photos/buitenkeuken-hoek-960.webp'
import keukenHoek640j from '@/assets/photos/buitenkeuken-hoek-640.jpg'
import keukenHoek1600w from '@/assets/photos/buitenkeuken-hoek-1600.webp'
import keukenHoek1600j from '@/assets/photos/buitenkeuken-hoek-1600.jpg'
import keukenVeranda640w from '@/assets/photos/buitenkeuken-veranda-640.webp'
import keukenVeranda960w from '@/assets/photos/buitenkeuken-veranda-960.webp'
import keukenVeranda640j from '@/assets/photos/buitenkeuken-veranda-640.jpg'
import keukenVeranda1600w from '@/assets/photos/buitenkeuken-veranda-1600.webp'
import keukenVeranda1600j from '@/assets/photos/buitenkeuken-veranda-1600.jpg'
import terras640w from '@/assets/photos/terras-lariks-640.webp'
import terras960w from '@/assets/photos/terras-lariks-960.webp'
import terras640j from '@/assets/photos/terras-lariks-640.jpg'
import terras1600w from '@/assets/photos/terras-lariks-1600.webp'
import terras1600j from '@/assets/photos/terras-lariks-1600.jpg'
import lounge640w from '@/assets/photos/overkapping-lounge-640.webp'
import lounge960w from '@/assets/photos/overkapping-lounge-960.webp'
import lounge640j from '@/assets/photos/overkapping-lounge-640.jpg'
import lounge1600w from '@/assets/photos/overkapping-lounge-1600.webp'
import lounge1600j from '@/assets/photos/overkapping-lounge-1600.jpg'
import vergrijsd640w from '@/assets/photos/tuinhuis-vergrijsd-640.webp'
import vergrijsd960w from '@/assets/photos/tuinhuis-vergrijsd-960.webp'
import vergrijsd640j from '@/assets/photos/tuinhuis-vergrijsd-640.jpg'
import vergrijsd1600w from '@/assets/photos/tuinhuis-vergrijsd-1600.webp'
import vergrijsd1600j from '@/assets/photos/tuinhuis-vergrijsd-1600.jpg'
import doorgang640w from '@/assets/photos/berging-doorgang-640.webp'
import doorgang960w from '@/assets/photos/berging-doorgang-960.webp'
import doorgang640j from '@/assets/photos/berging-doorgang-640.jpg'
import doorgang1600w from '@/assets/photos/berging-doorgang-1600.webp'
import doorgang1600j from '@/assets/photos/berging-doorgang-1600.jpg'
import schutting640w from '@/assets/photos/schutting-zwembad-640.webp'
import schutting960w from '@/assets/photos/schutting-zwembad-960.webp'
import schutting640j from '@/assets/photos/schutting-zwembad-640.jpg'
import schutting1600w from '@/assets/photos/schutting-zwembad-1600.webp'
import schutting1600j from '@/assets/photos/schutting-zwembad-1600.jpg'
import constructie800w from '@/assets/photos/constructie-800.webp'
import constructie800j from '@/assets/photos/constructie-800.jpg'
import constructie1400w from '@/assets/photos/constructie-1400.webp'
import constructie1400j from '@/assets/photos/constructie-1400.jpg'

export interface GalleryPhoto {
  id: string
  /** thumbnail sources (640w + optional 960w webp for high-dpi) */
  thumbWebp: string
  thumbWebp2x: string
  thumbJpg: string
  /** enlarged (lightbox) sources */
  largeWebp: string
  largeJpg: string
  width: number
  height: number
  alt: string
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'tuinkamer-schuifwanden',
    thumbWebp: gardenRoom640w,
    thumbWebp2x: gardenRoom960w,
    thumbJpg: gardenRoom640j,
    largeWebp: gardenRoom1438w,
    largeJpg: gardenRoom1438j,
    width: 1438,
    height: 1078,
    alt: 'Houten tuinkamer met glazen schuifwanden en pannendak, met de twee makers op de voorgrond',
  },
  {
    id: 'tuinkamer-interieur',
    thumbWebp: interieur640w,
    thumbWebp2x: interieur960w,
    thumbJpg: interieur640j,
    largeWebp: interieur1600w,
    largeJpg: interieur1600j,
    width: 1600,
    height: 1200,
    alt: 'Interieur van een tuinkamer met loungehoek, kussens en wandverlichting achter een glazen schuifwand',
  },
  {
    id: 'overkapping-veranda',
    thumbWebp: overkapping640w,
    thumbWebp2x: overkapping960w,
    thumbJpg: overkapping640j,
    largeWebp: overkapping1600w,
    largeJpg: overkapping1600j,
    width: 1600,
    height: 1200,
    alt: 'Vrijstaande houten overkapping met lichtdoorlatend dak en aangebouwde berging',
  },
  {
    id: 'overkapping-lounge',
    thumbWebp: lounge640w,
    thumbWebp2x: lounge960w,
    thumbJpg: lounge640j,
    largeWebp: lounge1600w,
    largeJpg: lounge1600j,
    width: 1600,
    height: 1200,
    alt: 'Houten overkapping met pannendak boven een loungehoek in de tuin',
  },
  {
    id: 'tuinhuis-atelier',
    thumbWebp: atelier640w,
    thumbWebp2x: atelier960w,
    thumbJpg: atelier640j,
    largeWebp: atelier1600w,
    largeJpg: atelier1600j,
    width: 1600,
    height: 1200,
    alt: 'Modern atelier met verticale gevelbekleding van lariks en daklichten',
  },
  {
    id: 'tuinhuis-vergrijsd',
    thumbWebp: vergrijsd640w,
    thumbWebp2x: vergrijsd960w,
    thumbJpg: vergrijsd640j,
    largeWebp: vergrijsd1600w,
    largeJpg: vergrijsd1600j,
    width: 1600,
    height: 1077,
    alt: 'Tuinhuis met plat dak, vergrijsde gevelbekleding en dubbele deuren met glas',
  },
  {
    id: 'terras-lariks',
    thumbWebp: terras640w,
    thumbWebp2x: terras960w,
    thumbJpg: terras640j,
    largeWebp: terras1600w,
    largeJpg: terras1600j,
    width: 1600,
    height: 1038,
    alt: 'Beschutte terrashoek tegen de gevel met wanden en verhoogde vlonder van lariks',
  },
  {
    id: 'buitenkeuken-hoek',
    thumbWebp: keukenHoek640w,
    thumbWebp2x: keukenHoek960w,
    thumbJpg: keukenHoek640j,
    largeWebp: keukenHoek1600w,
    largeJpg: keukenHoek1600j,
    width: 1600,
    height: 1200,
    alt: 'Buitenkeuken op maat in douglas hout met spoelbak en donker werkblad',
  },
  {
    id: 'tuinkamer-platdak',
    thumbWebp: platdak640w,
    thumbWebp2x: platdak960w,
    thumbJpg: platdak640j,
    largeWebp: platdak1600w,
    largeJpg: platdak1600j,
    width: 1600,
    height: 1200,
    alt: 'Tuinkamer met plat dak, glazen schuifwanden en regenton met zinken afvoer',
  },
  {
    id: 'buitenkeuken-veranda',
    thumbWebp: keukenVeranda640w,
    thumbWebp2x: keukenVeranda960w,
    thumbJpg: keukenVeranda640j,
    largeWebp: keukenVeranda1600w,
    largeJpg: keukenVeranda1600j,
    width: 1600,
    height: 1200,
    alt: 'Maatwerk buitenkeuken met kamado-barbecue onder een houten veranda met windscherm',
  },
  {
    id: 'schutting-zwembad',
    thumbWebp: schutting640w,
    thumbWebp2x: schutting960w,
    thumbJpg: schutting640j,
    largeWebp: schutting1600w,
    largeJpg: schutting1600j,
    width: 1600,
    height: 1200,
    alt: 'Strak houten schuttingwerk rondom een zwembad',
  },
  {
    id: 'berging-doorgang',
    thumbWebp: doorgang640w,
    thumbWebp2x: doorgang960w,
    thumbJpg: doorgang640j,
    largeWebp: doorgang1600w,
    largeJpg: doorgang1600j,
    width: 1536,
    height: 2048,
    alt: 'Doorgang met overstek tussen berging en schutting, bekleed met lariks',
  },
  {
    id: 'constructie',
    thumbWebp: constructie800w,
    thumbWebp2x: constructie1400w,
    thumbJpg: constructie800j,
    largeWebp: constructie1400w,
    largeJpg: constructie1400j,
    width: 1400,
    height: 1050,
    alt: 'Constructie in douglas hout van een buitenverblijf in aanbouw, met asymmetrische kap en schoren',
  },
]
