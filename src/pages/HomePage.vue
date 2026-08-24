<script setup lang="ts">
import { useHead } from '@unhead/vue'
import CtaBanner from '@/components/blocks/CtaBanner.vue'
import SectionLabel from '@/components/ui/SectionLabel.vue'
import ServiceIcon from '@/components/ui/ServiceIcon.vue'
import { services } from '@/data/services'
import { site } from '@/data/site'
import { steps } from '@/data/steps'
import { testimonials } from '@/data/testimonials'
import { usps } from '@/data/usps'

import hero640 from '@/assets/photos/garden-room-640.webp'
import hero960 from '@/assets/photos/garden-room-960.webp'
import hero1438 from '@/assets/photos/garden-room-1438.webp'
import heroJpg from '@/assets/photos/garden-room-960.jpg'
import detailWebp from '@/assets/photos/garden-room-detail-574.webp'
import detailJpg from '@/assets/photos/garden-room-detail-574.jpg'

useHead({
  title: 'Houten buitenverblijven op maat · Culemborg',
  meta: [
    {
      name: 'description',
      content:
        'Tuinkamers, overkappingen en tuinhuizen in hout — ontworpen en gebouwd door één vakman uit Culemborg. Van de eerste schets tot de laatste dakpan.',
    },
  ],
})

const specs = ['Douglas hout', 'Glazen schuifwanden', 'Pannendak', 'Zinken goten']
</script>

<template>
  <div>
    <!-- 1 · Hero -->
    <section
      class="relative isolate flex min-h-[min(85svh,860px)] items-end overflow-hidden bg-spruce-900"
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
          alt="Houten tuinkamer met glazen schuifwanden en pannendak, met timmerman Tijmen Wehlburg op de voorgrond"
          class="absolute inset-0 -z-20 h-full w-full object-cover"
          fetchpriority="high"
        />
      </picture>
      <div
        class="absolute inset-0 -z-10"
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
      <div class="container-site pt-44 pb-14 sm:pb-20">
        <p class="mb-3 font-display text-xs font-semibold tracking-[0.24em] uppercase text-oak-300">
          {{ site.location }} en omstreken · ontwerp & bouw in één hand
        </p>
        <h1
          class="max-w-3xl font-display text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl"
        >
          Houten buitenverblijven op&nbsp;maat
        </h1>
        <p class="mt-4 max-w-xl text-lg text-cream-100/90">
          Tuinkamers, overkappingen en tuinhuizen — ontworpen en gebouwd door één vakman, van de
          eerste schets tot de laatste dakpan.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <RouterLink to="/#uitgelicht" class="btn-on-dark">Bekijk mijn werk</RouterLink>
          <RouterLink to="/contact" class="btn-ghost-on-dark">Vraag vrijblijvend advies</RouterLink>
        </div>
      </div>
    </section>

    <!-- 2 · Positionering -->
    <section class="container-site scroll-mt-24 py-20 sm:py-28" id="intro">
      <div class="max-w-3xl">
        <SectionLabel>Maatwerk uit {{ site.location }}</SectionLabel>
        <h2
          class="font-display text-3xl font-bold tracking-tight text-balance text-ink-900 sm:text-4xl"
        >
          Een buitenverblijf is geen bouwpakket
        </h2>
        <p class="mt-5 text-lg leading-relaxed">
          Ik ben {{ site.owner }}, timmerman. Ik ontwerp en bouw houten buitenverblijven die kloppen
          — bij je tuin, je huis en je budget. Geen standaardmaten uit een catalogus, maar robuust
          vakwerk in douglas, lariks of eiken: samen bedacht, degelijk gebouwd en tot in de details
          afgewerkt.
        </p>
        <p class="mt-4 leading-relaxed">
          Grote tuinkamer of lastige hoek, strak plan of nog geen idee: ik denk met je mee en kom
          met opties waar je zelf misschien nog niet aan had gedacht.
        </p>
      </div>
    </section>

    <!-- 3 · Diensten -->
    <section class="scroll-mt-16 bg-cream-100 py-20 sm:py-24" id="diensten">
      <div class="container-site">
        <SectionLabel>Wat ik maak</SectionLabel>
        <h2
          class="font-display text-3xl font-bold tracking-tight text-balance text-ink-900 sm:text-4xl"
        >
          Vakwerk in hout, buiten en binnen
        </h2>
        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="service in services"
            :key="service.title"
            class="rounded-[4px] border border-line-200 bg-card p-6"
          >
            <ServiceIcon :icon="service.icon" class="text-spruce-700" />
            <h3 class="mt-4 font-semibold text-ink-900">{{ service.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed">{{ service.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- 4 · Uitgelicht project -->
    <section class="scroll-mt-16 bg-spruce-900 py-20 text-cream-100/85 sm:py-24" id="uitgelicht">
      <div class="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <picture>
          <source type="image/webp" :srcset="detailWebp" />
          <img
            :src="detailJpg"
            width="574"
            height="980"
            alt="Detail van de houten constructie: douglas staander met schoren en glazen schuifwand"
            loading="lazy"
            class="max-h-[540px] w-full rounded-[4px] object-cover object-top"
          />
        </picture>
        <div>
          <SectionLabel on-dark>Uitgelicht project</SectionLabel>
          <h2
            class="font-display text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl"
          >
            Tuinkamer met glazen schuifwanden
          </h2>
          <p class="mt-5 leading-relaxed">
            Een royale tuinkamer in douglas: robuust balkenwerk met karakteristieke schoren, een
            pannendak met zinken goten en rondom glazen schuifwanden. Buiten leven, het hele jaar
            door — gebouwd om decennia mee te gaan.
          </p>
          <ul class="mt-6 flex flex-wrap gap-2">
            <li
              v-for="spec in specs"
              :key="spec"
              class="rounded-[3px] border border-cream-50/25 px-3 py-1.5 text-xs font-medium tracking-wide text-cream-100"
            >
              {{ spec }}
            </li>
          </ul>
          <p class="mt-8 text-sm text-cream-100/60">
            Het volledige portfolio wordt momenteel gevuld — meer projecten volgen hier binnenkort.
          </p>
        </div>
      </div>
    </section>

    <!-- 5 · Werkwijze -->
    <section class="container-site scroll-mt-16 py-20 sm:py-28" id="werkwijze">
      <SectionLabel>Werkwijze</SectionLabel>
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
      <p class="mt-8 max-w-2xl text-sm">
        Heldere afspraken vooraf: de eerste inschatting is altijd gratis, en desgewenst werk ik met
        een vaste totaalprijs voor het hele project.
      </p>
    </section>

    <!-- 6 · Waarom -->
    <section class="scroll-mt-16 bg-cream-100 py-20 sm:py-24" id="waarom">
      <div class="container-site">
        <SectionLabel>Waar je op kunt rekenen</SectionLabel>
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

    <!-- 7 · Ervaringen -->
    <section class="container-site scroll-mt-16 py-20 sm:py-28" id="ervaringen">
      <SectionLabel>Ervaringen</SectionLabel>
      <h2
        class="font-display text-3xl font-bold tracking-tight text-balance text-ink-900 sm:text-4xl"
      >
        Wat opdrachtgevers zeggen
      </h2>
      <div class="mt-10 grid gap-5 lg:grid-cols-3">
        <figure
          v-for="t in testimonials"
          :key="t.author"
          class="flex flex-col justify-between rounded-[4px] border border-line-200 bg-card p-7"
        >
          <blockquote class="font-serif text-[17px] leading-relaxed text-ink-900 italic">
            “{{ t.quote }}”
          </blockquote>
          <figcaption class="mt-5 text-sm">
            <span class="font-semibold text-ink-900">{{ t.author }}</span>
            <span class="text-ink-600/70"> · {{ t.location }}</span>
          </figcaption>
        </figure>
      </div>
      <p class="mt-6 text-sm text-ink-600/70">
        Ervaringen uit eerder werk van {{ site.owner.split(' ')[0] }} als zelfstandig timmerman.
      </p>
    </section>

    <!-- 8 · Over -->
    <section class="scroll-mt-16 border-y border-line-200 bg-cream-100/60 py-20 sm:py-24" id="over">
      <div class="container-site max-w-3xl">
        <SectionLabel>Over de maker</SectionLabel>
        <h2
          class="font-display text-3xl font-bold tracking-tight text-balance text-ink-900 sm:text-4xl"
        >
          Van podium naar werkplaats
        </h2>
        <p class="mt-5 text-lg leading-relaxed">
          In mijn carrière als musicus heb ik geleerd dat je pas ergens in uitblinkt als je je werk
          met passie doet. Tijdens de coronajaren ontdekte ik dat die passie ook ergens anders kan
          wonen: in hout, maat en constructie.
        </p>
        <p class="mt-4 leading-relaxed">
          Sindsdien ontwerp en bouw ik — met dezelfde precisie waarmee ik ooit repeteerde. Elk
          buitenverblijf is vakwerk waar ik mijn naam aan verbind. En zodra de nieuwe bedrijfsnaam
          er is, lees je hem hier als eerste.
        </p>
        <p class="mt-6 font-display text-sm font-semibold tracking-wide text-spruce-700">
          — {{ site.owner }}, timmerman in {{ site.location }}
        </p>
      </div>
    </section>

    <!-- 9 · CTA -->
    <div class="pt-20 sm:pt-28">
      <CtaBanner />
    </div>
  </div>
</template>
