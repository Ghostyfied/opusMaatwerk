export interface Service {
  title: string
  description: string
  /** Key of the inline icon rendered by ServiceIcon.vue */
  icon: 'tuinkamer' | 'overkapping' | 'tuinhuis' | 'maatwerk'
}

export const services: Service[] = [
  {
    title: 'Tuinkamers & buitenverblijven',
    description:
      'Royale tuinkamers, desgewenst met glazen schuifwanden. Buiten zitten, het hele jaar door.',
    icon: 'tuinkamer',
  },
  {
    title: "Overkappingen & veranda's",
    description:
      'Robuuste houten constructies met pannendak of EPDM — vrijstaand of tegen het huis aan.',
    icon: 'overkapping',
  },
  {
    title: 'Tuinhuizen & schuren',
    description: 'Van berging tot atelier: degelijk gebouwd, onderhoudsarm en precies op maat.',
    icon: 'tuinhuis',
  },
  {
    title: 'Maatwerk binnen & buiten',
    description:
      'Kasten, deuren, herstelwerk en slimme oplossingen — het timmerwerk waar het ooit mee begon.',
    icon: 'maatwerk',
  },
]
