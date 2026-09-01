<script setup lang="ts">
import icon from '@/assets/brand/icon-192.png'
import fullLogo from '@/assets/brand/logo-full-360.jpg'

withDefaults(
  defineProps<{
    /**
     * 'icon' = the round EB monogram (navbar, favicon);
     * 'full' = the square logo with roof mark and wordmark (footer).
     * Sources: assets/brand/{icon,logo}-original.jpg.
     */
    variant?: 'icon' | 'full'
  }>(),
  { variant: 'icon' },
)
</script>

<template>
  <img
    v-if="variant === 'icon'"
    :src="icon"
    alt="Eigen Buiten"
    width="192"
    height="192"
    class="h-11 w-11"
  />
  <img v-else :src="fullLogo" alt="Eigen Buiten" width="360" height="360" class="h-auto w-36" />
</template>
