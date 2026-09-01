<script setup lang="ts">
import { openLightbox } from '@/composables/lightbox'
import { usePageSeo } from '@/composables/seo'
import { galleryPhotos } from '@/data/gallery'

usePageSeo({
  title: 'Galerij · Eigen Buiten',
  description: 'Een greep uit ons werk: tuinkamers, overkappingen, ateliers en maatwerk in hout.',
  path: '/galerij/',
})
</script>

<template>
  <div class="container-site py-16 sm:py-24">
    <div class="max-w-2xl">
      <h1
        class="font-display text-4xl font-bold tracking-tight text-balance text-ink-900 sm:text-5xl"
      >
        Galerij
      </h1>
      <p class="mt-5 text-lg leading-relaxed">
        Een greep uit ons werk — tuinkamers, overkappingen, ateliers en maatwerk. Klik op een foto
        om hem te vergroten.
      </p>
    </div>

    <div class="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
      <figure v-for="photo in galleryPhotos" :key="photo.id" class="mb-5 break-inside-avoid">
        <button
          type="button"
          class="block w-full cursor-zoom-in overflow-hidden rounded-[4px] border border-line-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oak-400"
          :aria-label="`Vergroot foto: ${photo.alt}`"
          @click="
            openLightbox({
              webp: photo.largeWebp,
              jpg: photo.largeJpg,
              alt: photo.alt,
            })
          "
        >
          <picture>
            <source
              type="image/webp"
              :srcset="`${photo.thumbWebp} 640w, ${photo.thumbWebp2x} 960w`"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <img
              :src="photo.thumbJpg"
              :width="photo.width"
              :height="photo.height"
              :alt="photo.alt"
              loading="lazy"
              class="w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          </picture>
        </button>
      </figure>
    </div>
  </div>
</template>
