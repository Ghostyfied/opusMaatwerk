import { reactive } from 'vue'

export interface LightboxPhoto {
  webp: string
  jpg: string
  alt: string
  caption?: string
}

export const lightbox = reactive({
  photo: null as LightboxPhoto | null,
})

export function openLightbox(photo: LightboxPhoto) {
  lightbox.photo = photo
}

export function closeLightbox() {
  lightbox.photo = null
}
