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
    Eigen Buiten lockup: the badge is an SVG recreation of the delivered
    logo (roof mark on the ochre square — source: assets/brand/
    logo-original.jpg); the wordmark is set in Quicksand to match the
    logo's rounded letterforms, in a contrast-safe color per background.
  -->
  <span class="inline-flex items-center gap-2.5">
    <svg viewBox="0 0 100 100" aria-hidden="true" class="h-9 w-9 shrink-0">
      <rect width="100" height="100" rx="14" fill="#C18F50" />
      <path
        d="M50 0 L90 35 L100 64 L92 61.5 L50 28 L8 61.5 L0 64 L10 35 Z"
        fill="#E7DAB7"
        transform="translate(18 29.5) scale(0.64)"
      />
    </svg>
    <span
      class="font-logo text-[17px] leading-none font-semibold tracking-[0.01em]"
      :class="onDark ? 'text-cream-50' : 'text-ink-900'"
    >
      Eigen Buiten
    </span>
  </span>
</template>
