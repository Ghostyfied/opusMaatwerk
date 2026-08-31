import interieurJpg from '@/assets/photos/tuinkamer-interieur-640.jpg'
import interieurWebp from '@/assets/photos/tuinkamer-interieur-640.webp'
import interieurWebp2x from '@/assets/photos/tuinkamer-interieur-960.webp'
import interieurLargeWebp from '@/assets/photos/tuinkamer-interieur-1600.webp'
import interieurLargeJpg from '@/assets/photos/tuinkamer-interieur-1600.jpg'
import overkappingJpg from '@/assets/photos/overkapping-veranda-640.jpg'
import overkappingWebp from '@/assets/photos/overkapping-veranda-640.webp'
import overkappingWebp2x from '@/assets/photos/overkapping-veranda-960.webp'
import overkappingLargeWebp from '@/assets/photos/overkapping-veranda-1600.webp'
import overkappingLargeJpg from '@/assets/photos/overkapping-veranda-1600.jpg'
import atelierJpg from '@/assets/photos/tuinhuis-atelier-640.jpg'
import atelierWebp from '@/assets/photos/tuinhuis-atelier-640.webp'
import atelierWebp2x from '@/assets/photos/tuinhuis-atelier-960.webp'
import atelierLargeWebp from '@/assets/photos/tuinhuis-atelier-1600.webp'
import atelierLargeJpg from '@/assets/photos/tuinhuis-atelier-1600.jpg'
import buitenkeukenJpg from '@/assets/photos/buitenkeuken-hoek-640.jpg'
import buitenkeukenWebp from '@/assets/photos/buitenkeuken-hoek-640.webp'
import buitenkeukenWebp2x from '@/assets/photos/buitenkeuken-hoek-960.webp'
import buitenkeukenLargeWebp from '@/assets/photos/buitenkeuken-hoek-1600.webp'
import buitenkeukenLargeJpg from '@/assets/photos/buitenkeuken-hoek-1600.jpg'

export interface ServiceImage {
  /** 640w webp */
  webp: string
  /** 960w webp for high-dpi */
  webp2x: string
  /** 640w jpeg fallback */
  jpg: string
  /** enlarged (lightbox) sources */
  largeWebp: string
  largeJpg: string
  alt: string
}

export interface Service {
  title: string
  description: string
  image: ServiceImage
}

export const services: Service[] = [
  {
    title: 'Tuinkamers & buitenverblijven',
    description:
      'Royale tuinkamers, desgewenst met glazen schuifwanden. Buiten zitten, het hele jaar door.',
    image: {
      webp: interieurWebp,
      webp2x: interieurWebp2x,
      jpg: interieurJpg,
      largeWebp: interieurLargeWebp,
      largeJpg: interieurLargeJpg,
      alt: 'Interieur van een tuinkamer met loungehoek, kussens en wandverlichting achter een glazen schuifwand',
    },
  },
  {
    title: "Overkappingen & veranda's",
    description:
      'Robuuste houten constructies met pannendak, EPDM of lichtdoorlatend dak — vrijstaand of tegen het huis aan.',
    image: {
      webp: overkappingWebp,
      webp2x: overkappingWebp2x,
      jpg: overkappingJpg,
      largeWebp: overkappingLargeWebp,
      largeJpg: overkappingLargeJpg,
      alt: 'Vrijstaande houten overkapping met lichtdoorlatend dak en aangebouwde berging',
    },
  },
  {
    title: 'Ateliers en schuren',
    description: 'Van berging tot atelier: degelijk gebouwd, onderhoudsarm en precies op maat.',
    image: {
      webp: atelierWebp,
      webp2x: atelierWebp2x,
      jpg: atelierJpg,
      largeWebp: atelierLargeWebp,
      largeJpg: atelierLargeJpg,
      alt: 'Modern atelier met verticale gevelbekleding van lariks en daklichten',
    },
  },
  {
    title: 'Maatwerk binnen & buiten',
    description:
      'Buitenkeukens, kasten, deuren en slimme oplossingen — het timmerwerk waar het ooit mee begon.',
    image: {
      webp: buitenkeukenWebp,
      webp2x: buitenkeukenWebp2x,
      jpg: buitenkeukenJpg,
      largeWebp: buitenkeukenLargeWebp,
      largeJpg: buitenkeukenLargeJpg,
      alt: 'Buitenkeuken op maat in douglas hout met spoelbak en donker werkblad',
    },
  },
]
