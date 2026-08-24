<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import BrandMark from '@/components/ui/BrandMark.vue'

const nav = [
  { label: 'Wat ik maak', to: '/#diensten' },
  { label: 'Werkwijze', to: '/#werkwijze' },
  { label: 'Ervaringen', to: '/#ervaringen' },
  { label: 'Over', to: '/#over' },
  { label: 'Contact', to: '/contact' },
]

const open = ref(false)
const route = useRoute()
watch(
  () => route.fullPath,
  () => {
    open.value = false
  },
)
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-line-200 bg-cream-50/95 backdrop-blur">
    <div class="container-site flex h-16 items-center justify-between gap-4">
      <RouterLink to="/" class="shrink-0" aria-label="Naar de homepage">
        <BrandMark />
      </RouterLink>

      <nav class="hidden items-center gap-6 lg:flex" aria-label="Hoofdmenu">
        <RouterLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="text-sm font-medium text-ink-600 transition-colors hover:text-spruce-700"
        >
          {{ item.label }}
        </RouterLink>
        <RouterLink to="/contact" class="btn-primary py-2.5!">Vraag advies aan</RouterLink>
      </nav>

      <button
        type="button"
        class="-mr-1 inline-flex h-10 w-10 items-center justify-center rounded-[3px] text-ink-900 lg:hidden"
        :aria-expanded="open"
        aria-controls="mobiel-menu"
        @click="open = !open"
      >
        <span class="sr-only">{{ open ? 'Menu sluiten' : 'Menu openen' }}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          class="h-6 w-6"
          aria-hidden="true"
        >
          <template v-if="open"><path d="M6 6l12 12M18 6L6 18" /></template>
          <template v-else><path d="M4 7h16M4 12h16M4 17h16" /></template>
        </svg>
      </button>
    </div>

    <nav
      v-show="open"
      id="mobiel-menu"
      class="border-t border-line-200 bg-cream-50 lg:hidden"
      aria-label="Hoofdmenu mobiel"
    >
      <div class="container-site flex flex-col gap-1 py-4">
        <RouterLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="rounded-[3px] px-2 py-2.5 text-[15px] font-medium text-ink-900 hover:bg-cream-100"
        >
          {{ item.label }}
        </RouterLink>
        <RouterLink to="/contact" class="btn-primary mt-2">Vraag advies aan</RouterLink>
      </div>
    </nav>
  </header>
</template>
