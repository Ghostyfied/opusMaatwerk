<script setup lang="ts">
import { site } from '@/data/site'

const mailto = `mailto:${site.contact.email}?subject=${encodeURIComponent('Aanvraag buitenverblijf')}`
</script>

<template>
  <section id="contact" class="container-site scroll-mt-16 pb-20 sm:pb-28">
    <div
      class="relative flex flex-col items-start gap-6 overflow-hidden rounded-[4px] bg-spruce-700 px-8 py-10 text-cream-50 sm:px-12 lg:flex-row lg:items-center lg:justify-between"
    >
      <svg
        viewBox="0 0 100 64.5"
        aria-hidden="true"
        class="pointer-events-none absolute -right-8 -bottom-4 h-44 w-auto text-cream-50 opacity-[0.08]"
      >
        <path d="M50 0 L90 35 L100 64 L92 61.5 L50 28 L8 61.5 L0 64 L10 35 Z" fill="currentColor" />
      </svg>
      <div class="relative max-w-xl">
        <h2 class="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Plannen voor een buitenverblijf?
        </h2>
        <p class="mt-2 text-cream-100/90">
          Vertel ons over je tuin en je wensen — we denken vrijblijvend met je mee over de
          mogelijkheden, ook als je nog geen concreet plan hebt.
        </p>
        <p class="mt-3 text-sm text-cream-100/75">
          Tip: stuur meteen een paar foto's van de plek in je tuin mee — dat helpt enorm bij een
          eerste inschatting.
        </p>
      </div>
      <a :href="mailto" class="btn-on-dark relative shrink-0">{{ site.contact.email }}</a>
    </div>
  </section>
</template>
