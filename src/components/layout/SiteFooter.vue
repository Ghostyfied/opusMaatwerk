<script setup lang="ts">
import BrandMark from '@/components/ui/BrandMark.vue'
import { site } from '@/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-spruce-900 text-cream-100/80">
    <div class="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
      <div class="max-w-xs">
        <BrandMark on-dark />
        <p class="mt-4 text-sm leading-relaxed">
          Houten buitenverblijven op maat — ontwerp en bouw door timmerman
          {{ site.owner }} uit {{ site.location }}.
        </p>
      </div>

      <nav aria-label="Voettekstmenu" class="text-sm">
        <p class="mb-3 font-display text-xs font-semibold tracking-[0.2em] uppercase text-oak-300">
          Op deze site
        </p>
        <ul class="space-y-2">
          <li><RouterLink class="hover:text-cream-50" to="/#diensten">Wat ik maak</RouterLink></li>
          <li><RouterLink class="hover:text-cream-50" to="/#werkwijze">Werkwijze</RouterLink></li>
          <li><RouterLink class="hover:text-cream-50" to="/#ervaringen">Ervaringen</RouterLink></li>
          <li>
            <RouterLink class="hover:text-cream-50" to="/contact">Contact & offerte</RouterLink>
          </li>
        </ul>
      </nav>

      <div class="text-sm">
        <p class="mb-3 font-display text-xs font-semibold tracking-[0.2em] uppercase text-oak-300">
          Contact
        </p>
        <ul class="space-y-2">
          <li>
            <a class="hover:text-cream-50" :href="`mailto:${site.contact.email}`">
              {{ site.contact.email }}
            </a>
          </li>
          <li v-if="site.contact.phone">
            <a class="hover:text-cream-50" :href="`tel:${site.contact.phone}`">
              {{ site.contact.phone }}
            </a>
          </li>
          <li v-else class="text-cream-100/50">Telefoonnummer volgt</li>
          <li>Werkgebied: {{ site.serviceArea }}</li>
        </ul>
      </div>
    </div>

    <div class="border-t border-cream-50/10">
      <div
        class="container-site flex flex-col gap-2 py-5 text-xs text-cream-100/50 sm:flex-row sm:items-center sm:justify-between"
      >
        <p>© {{ year }} {{ site.owner }} · alle rechten voorbehouden</p>
        <p v-if="site.legal.kvk">KvK {{ site.legal.kvk }}</p>
        <p v-else>Bedrijfsgegevens (naam, KvK, btw-id) volgen bij inschrijving</p>
      </div>
    </div>
  </footer>
</template>
