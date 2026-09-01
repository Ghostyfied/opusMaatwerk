<script setup lang="ts">
import CtaBanner from '@/components/blocks/CtaBanner.vue'
import { usePageSeo } from '@/composables/seo'
import { services } from '@/data/services'
import { site } from '@/data/site'
import { steps } from '@/data/steps'
import { testimonials } from '@/data/testimonials'
import { usps } from '@/data/usps'

import hero640 from '@/assets/photos/garden-room-640.webp'
import hero960 from '@/assets/photos/garden-room-960.webp'
import hero1438 from '@/assets/photos/garden-room-1438.webp'
import heroJpg from '@/assets/photos/garden-room-960.jpg'
import bouwWebp from '@/assets/photos/constructie-800.webp'
import bouwWebp2x from '@/assets/photos/constructie-1400.webp'
import bouwJpg from '@/assets/photos/constructie-800.jpg'

usePageSeo({
  title: 'Eigen Buiten — Buitenverblijven op maat · Culemborg',
  description:
    'Tuinkamers, overkappingen en tuinhuizen in hout — van ontwerp tot uitvoering, gebouwd door twee vakmannen uit Culemborg.',
  path: '/',
})
</script>

<template>
  <div>
    <!-- 1 · Hero -->
    <section
      class="relative isolate overflow-hidden bg-spruce-900 sm:flex sm:min-h-[min(85svh,860px)] sm:items-end"
    >
      <picture>
        <source
          type="image/webp"
          :srcset="`${hero640} 640w, ${hero960} 960w, ${hero1438} 1438w`"
          sizes="100vw"
        />
        <img
          :src="heroJpg"
          width="1438"
          height="1078"
          alt="Houten tuinkamer met glazen schuifwanden en pannendak, met de twee makers van Eigen Buiten op de voorgrond"
          class="aspect-[4/3] w-full object-cover sm:absolute sm:inset-0 sm:-z-20 sm:aspect-auto sm:h-full"
          fetchpriority="high"
        />
      </picture>
      <div
        class="absolute inset-0 -z-10 hidden sm:block"
        aria-hidden="true"
        style="
          background-image: linear-gradient(
            183deg,
            rgb(34 54 42 / 0.35),
            rgb(34 54 42 / 0.22) 45%,
            rgb(18 28 22 / 0.9) 96%
          );
        "
      />
      <div class="container-site pt-10 pb-12 sm:pt-44 sm:pb-20">
        <h1
          class="max-w-3xl font-display text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl"
        >
          Buitenverblijven op&nbsp;maat
        </h1>
        <p class="mt-4 max-w-xl text-lg text-cream-100/90">
          Tuinkamers, overkappingen en tuinhuizen — van ontwerp tot uitvoering.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <RouterLink to="/galerij" class="btn-on-dark">Bekijk ons werk</RouterLink>
          <RouterLink to="/#contact" class="btn-ghost-on-dark"
            >Vraag vrijblijvend advies</RouterLink
          >
        </div>
      </div>
    </section>

    <!-- 2 · Positionering -->
    <section class="container-site scroll-mt-24 py-20 sm:py-28" id="intro">
      <div class="max-w-3xl">
        <h2
          class="font-display text-3xl font-bold tracking-tight text-balance text-ink-900 sm:text-4xl"
        >
          Een buitenverblijf is geen bouwpakket
        </h2>
        <p class="mt-5 leading-relaxed">
          Wij ontwerpen en bouwen houten buitenverblijven die kloppen — bij je tuin, bij jou en je
          budget. Geen standaardontwerpen uit een catalogus, maar uniek vakwerk in douglas, lariks
          of eiken: samen met jou bedacht, degelijk gebouwd en tot in de details afgewerkt.
        </p>
        <p class="mt-4 leading-relaxed">
          Heb je al een strak plan of nog geen idee? We denken met je mee en komen met opties waar
          je zelf misschien nog niet aan had gedacht.
        </p>
      </div>
    </section>

    <!-- 3 · Diensten -->
    <section class="scroll-mt-16 bg-cream-100 py-20 sm:py-24" id="diensten">
      <div class="container-site">
        <h2
          class="font-display text-3xl font-bold tracking-tight text-balance text-ink-900 sm:text-4xl"
        >
          Vakwerk in hout, buiten en binnen
        </h2>
        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="service in services"
            :key="service.title"
            class="overflow-hidden rounded-[4px] border border-line-200 bg-card"
          >
            <RouterLink
              to="/galerij"
              class="block w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oak-400"
              :aria-label="`Naar de galerij — ${service.title}`"
            >
              <picture>
                <source
                  type="image/webp"
                  :srcset="`${service.image.webp} 640w, ${service.image.webp2x} 960w`"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <img
                  :src="service.image.jpg"
                  width="640"
                  height="480"
                  :alt="service.image.alt"
                  loading="lazy"
                  class="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                />
              </picture>
            </RouterLink>
            <div class="p-6">
              <h3 class="font-semibold text-ink-900">{{ service.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed">{{ service.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 4 · Werkwijze -->
    <section class="container-site scroll-mt-16 py-20 sm:py-28" id="werkwijze">
      <h2
        class="font-display text-3xl font-bold tracking-tight text-balance text-ink-900 sm:text-4xl"
      >
        Van idee naar buitenverblijf in vijf stappen
      </h2>
      <ol class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        <li v-for="(step, i) in steps" :key="step.title">
          <div class="flex items-baseline gap-3">
            <span class="font-display text-3xl font-bold text-spruce-500" aria-hidden="true">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <span
              v-if="step.note"
              class="rounded-[3px] bg-cream-100 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-oak-600 uppercase"
            >
              {{ step.note }}
            </span>
          </div>
          <h3 class="mt-2 font-semibold text-ink-900">{{ step.title }}</h3>
          <p class="mt-1.5 text-sm leading-relaxed">{{ step.description }}</p>
        </li>
      </ol>
      <figure class="mt-12">
        <RouterLink
          to="/galerij"
          class="block w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oak-400"
          aria-label="Naar de galerij"
        >
          <picture>
            <source
              type="image/webp"
              :srcset="`${bouwWebp} 800w, ${bouwWebp2x} 1400w`"
              sizes="(min-width: 1152px) 1088px, 100vw"
            />
            <img
              :src="bouwJpg"
              width="1400"
              height="1050"
              alt="Constructie in douglas hout van een buitenverblijf in aanbouw, met asymmetrische kap en schoren"
              loading="lazy"
              class="aspect-[21/9] w-full rounded-[4px] object-cover object-[center_62%]"
            />
          </picture>
        </RouterLink>
      </figure>
    </section>

    <!-- 5 · Waarom -->
    <section class="scroll-mt-16 bg-cream-100 py-20 sm:py-24" id="waarom">
      <div class="container-site">
        <h2
          class="font-display text-3xl font-bold tracking-tight text-balance text-ink-900 sm:text-4xl"
        >
          Vakmanschap met duidelijke afspraken
        </h2>
        <div class="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          <div v-for="usp in usps" :key="usp.title" class="flex gap-4">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mt-0.5 h-6 w-6 shrink-0 text-spruce-700"
              aria-hidden="true"
            >
              <path d="M4.5 12.5l5 5L19.5 7" />
            </svg>
            <div>
              <h3 class="font-semibold text-ink-900">{{ usp.title }}</h3>
              <p class="mt-1.5 text-sm leading-relaxed">{{ usp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6 · Ervaringen -->
    <section class="container-site scroll-mt-16 py-20 sm:py-28" id="ervaringen">
      <h2
        class="font-display text-3xl font-bold tracking-tight text-balance text-ink-900 sm:text-4xl"
      >
        Wat opdrachtgevers zeggen
      </h2>
      <div class="mt-10 grid gap-5 sm:grid-cols-2">
        <figure
          v-for="t in testimonials"
          :key="t.author"
          class="flex flex-col justify-between rounded-[4px] border border-line-200 bg-card p-7"
        >
          <div>
            <p
              v-if="t.title"
              class="mb-2 font-display text-xs font-bold tracking-[0.15em] text-oak-600 uppercase"
            >
              {{ t.title }}
            </p>
            <blockquote class="font-serif text-[17px] leading-relaxed text-ink-900 italic">
              “{{ t.quote }}”
            </blockquote>
          </div>
          <figcaption class="mt-5 text-sm">
            <span class="font-semibold text-ink-900">{{ t.author }}</span>
            <span class="text-ink-600/70"> · {{ t.location }}</span>
          </figcaption>
        </figure>
      </div>
    </section>

    <!-- 7 · Over -->
    <section class="scroll-mt-16 border-y border-line-200 bg-cream-100/60 py-20 sm:py-24" id="over">
      <div class="container-site max-w-3xl">
        <h2
          class="font-display text-3xl font-bold tracking-tight text-balance text-ink-900 sm:text-4xl"
        >
          Twee makers, één ambacht
        </h2>
        <p class="mt-5 leading-relaxed">
          {{ site.brand.name }} is het werk van twee vakmannen met een gedeelde overtuiging: buiten
          leven wordt beter met goed hout, een slim ontwerp en aandacht voor detail.
        </p>
        <p class="mt-4 leading-relaxed">
          Tijmen Wehlburg stond jarenlang als musicus op het podium en ontdekte tijdens de
          coronajaren dat creativiteit en precisie ook in ambachtelijk werk kunnen wonen. Jos
          Bodewes werkte jarenlang als technisch-commercieel specialist voor verschillende
          ondernemingen, maar vond zijn passie in hout.
        </p>
        <p class="mt-4 leading-relaxed">
          Samen begonnen ze {{ site.brand.name }} — vakwerk waar ze hun naam aan verbinden.
        </p>
        <ul class="mt-6 space-y-1 text-sm text-ink-900">
          <li>
            Tijmen Wehlburg,
            <a
              href="https://www.opusmaatwerk.nl"
              target="_blank"
              rel="noopener"
              class="font-medium text-spruce-700 underline decoration-oak-400/50 underline-offset-2 hover:text-spruce-900"
              >www.opusmaatwerk.nl</a
            >
          </li>
          <li>Jos Bodewes</li>
        </ul>
        <p class="mt-6 font-display text-sm font-semibold tracking-wide text-spruce-700">
          — de makers van {{ site.brand.name }}
        </p>
        <RouterLink
          to="/galerij"
          class="mt-6 inline-block font-medium text-spruce-700 underline decoration-oak-400/50 underline-offset-2 hover:text-spruce-900"
        >
          Bekijk ons werk in de galerij →
        </RouterLink>
      </div>
    </section>

    <!-- 8 · CTA -->
    <div class="pt-20 sm:pt-28">
      <CtaBanner />
    </div>
  </div>
</template>
