<script setup lang="ts">
withDefaults(defineProps<{ onDark?: boolean }>(), { onDark: false })
</script>

<template>
  <p
    class="mb-3 flex items-center gap-3 font-display text-xs font-semibold tracking-[0.2em] uppercase"
    :class="onDark ? 'text-oak-300' : 'text-oak-600'"
  >
    <span><slot /></span>
    <span aria-hidden="true" class="h-px w-10" :class="onDark ? 'bg-cream-50/25' : 'bg-line-200'" />
  </p>
</template>
