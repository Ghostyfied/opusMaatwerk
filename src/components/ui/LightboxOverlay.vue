<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { closeLightbox, lightbox } from '@/composables/lightbox'

const route = useRoute()
const closeButton = ref<HTMLButtonElement | null>(null)
const onGalleryPage = computed(() => route.path.replace(/\/+$/, '') === '/galerij')

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeLightbox()
}

watch(
  () => lightbox.photo,
  (photo) => {
    if (import.meta.env.SSR) return
    if (photo) {
      document.addEventListener('keydown', onKeydown)
      document.body.style.overflow = 'hidden'
      void nextTick(() => closeButton.value?.focus())
    } else {
      document.removeEventListener('keydown', onKeydown)
      document.body.style.overflow = ''
    }
  },
)

onBeforeUnmount(() => {
  if (import.meta.env.SSR) return
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div
    v-if="lightbox.photo"
    class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-spruce-900/95 p-4 sm:p-10"
    role="dialog"
    aria-modal="true"
    :aria-label="lightbox.photo.alt"
    @click.self="closeLightbox()"
  >
    <button
      ref="closeButton"
      type="button"
      class="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-[3px] text-cream-50 transition-colors hover:bg-cream-50/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oak-300"
      @click="closeLightbox()"
    >
      <span class="sr-only">Sluiten</span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        class="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M6 6l12 12M18 6L6 18" />
      </svg>
    </button>

    <picture
      class="pointer-events-none min-h-0 flex-1 items-center justify-center overflow-hidden flex w-full"
    >
      <source type="image/webp" :srcset="lightbox.photo.webp" />
      <img
        :src="lightbox.photo.jpg"
        :alt="lightbox.photo.alt"
        class="max-h-full max-w-full rounded-[4px] object-contain"
      />
    </picture>

    <div class="mt-4 text-center">
      <p v-if="lightbox.photo.caption" class="text-sm text-cream-100/85">
        {{ lightbox.photo.caption }}
      </p>
      <RouterLink
        v-if="!onGalleryPage"
        to="/galerij"
        class="mt-1.5 inline-block text-sm font-medium text-oak-300 underline decoration-oak-300/50 underline-offset-2 hover:text-cream-50"
        @click="closeLightbox()"
      >
        Bekijk meer in de galerij →
      </RouterLink>
    </div>
  </div>
</template>
