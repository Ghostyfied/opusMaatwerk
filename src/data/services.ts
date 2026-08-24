import tuinkamerJpg from '@/assets/photos/tuinkamer-platdak-640.jpg'
import tuinkamerWebp from '@/assets/photos/tuinkamer-platdak-640.webp'
import tuinkamerWebp2x from '@/assets/photos/tuinkamer-platdak-960.webp'
import overkappingJpg from '@/assets/photos/overkapping-veranda-640.jpg'
import overkappingWebp from '@/assets/photos/overkapping-veranda-640.webp'
import overkappingWebp2x from '@/assets/photos/overkapping-veranda-960.webp'
import tuinhuisJpg from '@/assets/photos/tuinhuis-atelier-640.jpg'
import tuinhuisWebp from '@/assets/photos/tuinhuis-atelier-640.webp'
import tuinhuisWebp2x from '@/assets/photos/tuinhuis-atelier-960.webp'
import buitenkeukenJpg from '@/assets/photos/buitenkeuken-hoek-640.jpg'
import buitenkeukenWebp from '@/assets/photos/buitenkeuken-hoek-640.webp'
import buitenkeukenWebp2x from '@/assets/photos/buitenkeuken-hoek-960.webp'

export interface ServiceImage {
  /** 640w webp */
  webp: string
  /** 960w webp for high-dpi */
  webp2x: string
  /** 640w jpeg fallback */
  jpg: string
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
      webp: tuinkamerWebp,
      webp2x: tuinkamerWebp2x,
      jpg: tuinkamerJpg,
      alt: 'Tuinkamer met plat dak, glazen schuifwanden en regenton met zinken afvoer',
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
      alt: 'Vrijstaande houten overkapping met lichtdoorlatend dak en aangebouwde berging',
    },
  },
  {
    title: 'Tuinhuizen & schuren',
    description: 'Van berging tot atelier: degelijk gebouwd, onderhoudsarm en precies op maat.',
    image: {
      webp: tuinhuisWebp,
      webp2x: tuinhuisWebp2x,
      jpg: tuinhuisJpg,
      alt: 'Modern tuinhuis met verticale gevelbekleding van lariks en daklichten',
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
      alt: 'Buitenkeuken op maat in douglas hout met spoelbak en donker werkblad',
    },
  },
]
