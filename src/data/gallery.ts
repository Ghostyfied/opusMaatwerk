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
