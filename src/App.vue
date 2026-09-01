<script setup lang="ts">
import { useHead } from '@unhead/vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import LightboxOverlay from '@/components/ui/LightboxOverlay.vue'
import { site } from '@/data/site'
import logoFull from '@/assets/brand/logo-full-360.jpg'

useHead({
  htmlAttrs: { lang: 'nl' },
  meta: [
    ...(site.indexable ? [] : [{ name: 'robots', content: 'noindex, nofollow' }]),
    { name: 'theme-color', content: '#35523f' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HomeAndConstructionBusiness',
        name: site.brand.name,
        description:
          'Ontwerp en bouw van houten buitenverblijven: tuinkamers, overkappingen, ateliers, tuinhuizen en maatwerk.',
        url: site.domain,
        email: site.contact.email,
        image: `${site.domain}${logoFull}`,
        logo: `${site.domain}${logoFull}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: site.location,
          addressCountry: 'NL',
        },
        founder: [
          { '@type': 'Person', name: 'Tijmen Wehlburg' },
          { '@type': 'Person', name: 'Jos Bodewes' },
        ],
      }),
    },
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
