<script setup lang="ts">
import { site } from '@/data/site'

withDefaults(
  defineProps<{
    /** Rendered on a dark (spruce) background or a light (cream) one. */
    onDark?: boolean
  }>(),
  { onDark: false },
)
</script>

<template>
  <!--
    Placeholder brand mark: the future logo slots into this component
    with the same API (see PLAN.md §5). Dashed frame = deliberately
    temporary, styled so demos don't look broken.
  -->
  <span
    class="inline-flex items-center gap-2 rounded-[3px] border-[1.5px] border-dashed px-3 py-1.5 font-display text-[13px] font-semibold tracking-[0.18em] uppercase"
    :class="onDark ? 'border-cream-50/50 text-cream-50' : 'border-spruce-500/60 text-spruce-700'"
    title="Logo en bedrijfsnaam volgen"
  >
    {{ site.brand.name }}
  </span>
</template>
