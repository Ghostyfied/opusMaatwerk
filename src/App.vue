<script setup lang="ts">
import { useHead } from '@unhead/vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import LightboxOverlay from '@/components/ui/LightboxOverlay.vue'
import { site } from '@/data/site'

useHead({
  htmlAttrs: { lang: 'nl' },
  meta: [
    // noindex until launch — flipped via site.indexable (PLAN.md §6)
    ...(site.indexable ? [] : [{ name: 'robots', content: 'noindex, nofollow' }]),
    { name: 'theme-color', content: '#35523f' },
  ],
})
</script>

<template>
  <div class="flex min-h-svh flex-col">
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-[3px] focus:bg-spruce-700 focus:px-4 focus:py-2 focus:text-cream-50"
    >
      Naar de inhoud
    </a>
    <SiteHeader />
    <main id="main" class="flex-1">
      <RouterView />
    </main>
    <SiteFooter />
    <LightboxOverlay />
  </div>
</template>
