<script setup lang="ts">
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
    Interim wordmark for "Eigen Buiten" — the real logo, when designed,
    slots into this component with the same API (see PLAN.md §5).
  -->
  <span
    class="inline-flex items-baseline gap-[0.45em] font-display text-[15px] tracking-[0.2em] uppercase"
    :class="onDark ? 'text-cream-50' : 'text-spruce-900'"
  >
    <span class="font-bold">Eigen</span>
    <span class="font-medium" :class="onDark ? 'text-oak-300' : 'text-oak-600'">Buiten</span>
  </span>
</template>
