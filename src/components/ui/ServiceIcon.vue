<script setup lang="ts">
import type { Service } from '@/data/services'

defineProps<{ icon: Service['icon'] }>()
</script>

<template>
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="h-8 w-8"
    aria-hidden="true"
  >
    <!-- tuinkamer: roof + glass sliding walls -->
    <template v-if="icon === 'tuinkamer'">
      <path d="M3 13 16 5l13 8" />
      <path d="M6 13v14M26 13v14M4 27h24" />
      <path d="M10 17v10M16 17v10M22 17v10" opacity="0.55" />
    </template>
    <!-- overkapping: lean-to roof on posts -->
    <template v-else-if="icon === 'overkapping'">
      <path d="M3 12h26M5 9l24 3" />
      <path d="M7 12v15M25 12v15" />
      <path d="M7 18l4-4M25 18l-4-4" opacity="0.55" />
    </template>
    <!-- tuinhuis: shed with door -->
    <template v-else-if="icon === 'tuinhuis'">
      <path d="M4 14 16 6l12 8" />
      <path d="M7 14v13h18V14" />
      <path d="M13 27v-8h6v8" opacity="0.55" />
    </template>
    <!-- maatwerk: cabinet / joinery -->
    <template v-else>
      <rect x="7" y="5" width="18" height="22" rx="1" />
      <path d="M16 5v22M7 16h18" />
      <path d="M12.5 10.5v2M19.5 10.5v2" opacity="0.55" />
    </template>
  </svg>
</template>
