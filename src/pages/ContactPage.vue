<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useHead } from '@unhead/vue'
import SectionLabel from '@/components/ui/SectionLabel.vue'
import { site } from '@/data/site'

useHead({
  title: 'Contact & offerte · Houten buitenverblijven op maat',
  meta: [
    {
      name: 'description',
      content:
        'Vraag vrijblijvend advies of een offerte aan voor een houten tuinkamer, overkapping of tuinhuis in Culemborg en omstreken.',
    },
  ],
})

const projectTypes = [
  'Tuinkamer of buitenverblijf',
  'Overkapping of veranda',
  'Tuinhuis of schuur',
  'Maatwerk binnenshuis',
  'Iets anders',
]

const form = reactive({
  name: '',
  email: '',
  phone: '',
  type: '',
  message: '',
  /** Honeypot: mensen laten dit veld leeg. */
  website: '',
})

const status = ref<'idle' | 'sending' | 'sent' | 'mailto' | 'error'>('idle')

async function submit() {
  if (form.website) return // spam-bot vulde het honeypot-veld in

  if (site.contact.formEndpoint) {
    status.value = 'sending'
    try {
      const res = await fetch(site.contact.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          naam: form.name,
          email: form.email,
          telefoon: form.phone,
          type: form.type,
          omschrijving: form.message,
        }),
      })
      status.value = res.ok ? 'sent' : 'error'
    } catch {
      status.value = 'error'
    }
    return
  }

  // Zolang er geen formulier-dienst is gekoppeld (site.contact.formEndpoint):
  // open het eigen e-mailprogramma met een voorbereid bericht.
  const subject = encodeURIComponent(`Aanvraag via de website — ${form.type || 'algemeen'}`)
  const body = encodeURIComponent(
    `Naam: ${form.name}\nE-mail: ${form.email}\nTelefoon: ${form.phone || '—'}\nType project: ${form.type || '—'}\n\n${form.message}`,
  )
  window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`
  status.value = 'mailto'
}
</script>

<template>
  <div class="container-site py-16 sm:py-24">
    <div class="max-w-2xl">
      <SectionLabel>Contact & offerte</SectionLabel>
      <h1
        class="font-display text-4xl font-bold tracking-tight text-balance text-ink-900 sm:text-5xl"
      >
        Vertel me over je plannen
      </h1>
      <p class="mt-5 text-lg leading-relaxed">
        Een tuinkamer, overkapping of iets heel anders? Stuur je vraag met een korte omschrijving —
        je krijgt persoonlijk antwoord van mij, meestal binnen twee werkdagen.
      </p>
    </div>

    <div class="mt-12 grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
      <!-- Direct contact -->
      <div class="space-y-6">
        <div class="rounded-[4px] border border-line-200 bg-card p-6">
          <h2 class="font-semibold text-ink-900">Direct contact</h2>
          <ul class="mt-4 space-y-3 text-[15px]">
            <li>
              <span class="block text-xs font-semibold tracking-wide text-ink-600/60 uppercase">
                E-mail
              </span>
              <a
                class="font-medium text-spruce-700 underline decoration-oak-400/50 underline-offset-2 hover:text-spruce-900"
                :href="`mailto:${site.contact.email}`"
              >
                {{ site.contact.email }}
              </a>
            </li>
            <li>
              <span class="block text-xs font-semibold tracking-wide text-ink-600/60 uppercase">
                Telefoon & WhatsApp
              </span>
              <template v-if="site.contact.phone">
                <a class="font-medium text-spruce-700" :href="`tel:${site.contact.phone}`">
                  {{ site.contact.phone }}
                </a>
              </template>
              <span v-else class="text-ink-600/60">Volgt binnenkort</span>
            </li>
            <li>
              <span class="block text-xs font-semibold tracking-wide text-ink-600/60 uppercase">
                Werkgebied
              </span>
              {{ site.serviceArea }}
            </li>
          </ul>
        </div>
        <p class="text-sm leading-relaxed text-ink-600/80">
          <strong>Tip:</strong> foto's van de plek in je tuin (en eventueel een schets of
          voorbeelden) helpen enorm bij een eerste inschatting — stuur ze gerust mee per e-mail.
        </p>
      </div>

      <!-- Formulier -->
      <form
        class="rounded-[4px] border border-line-200 bg-card p-6 sm:p-8"
        novalidate
        @submit.prevent="submit"
      >
        <div v-if="status === 'sent'" class="rounded-[3px] bg-spruce-700/10 p-4 text-spruce-900">
          <p class="font-semibold">Dank voor je aanvraag!</p>
          <p class="mt-1 text-sm">Je hoort van me, meestal binnen twee werkdagen.</p>
        </div>

        <template v-else>
          <div class="grid gap-5 sm:grid-cols-2">
            <div>
              <label class="field-label" for="naam">Naam *</label>
              <input
                id="naam"
                v-model="form.name"
                class="field-input"
                type="text"
                name="naam"
                autocomplete="name"
                required
              />
            </div>
            <div>
              <label class="field-label" for="email">E-mailadres *</label>
              <input
                id="email"
                v-model="form.email"
                class="field-input"
                type="email"
                name="email"
                autocomplete="email"
                required
              />
            </div>
            <div>
              <label class="field-label" for="telefoon">Telefoon</label>
              <input
                id="telefoon"
                v-model="form.phone"
                class="field-input"
                type="tel"
                name="telefoon"
                autocomplete="tel"
              />
            </div>
            <div>
              <label class="field-label" for="type">Type project</label>
              <select id="type" v-model="form.type" class="field-input" name="type">
                <option value="" disabled>Maak een keuze</option>
                <option v-for="t in projectTypes" :key="t" :value="t">{{ t }}</option>
              </select>
            </div>
            <div class="sm:col-span-2">
              <label class="field-label" for="omschrijving">Omschrijving van je plannen *</label>
              <textarea
                id="omschrijving"
                v-model="form.message"
                class="field-input"
                name="omschrijving"
                rows="6"
                required
                placeholder="Bijvoorbeeld: gewenste afmetingen, de plek in de tuin, en wat je er wilt kunnen doen."
              />
            </div>
            <!-- Honeypot tegen spam: onzichtbaar voor mensen -->
            <div class="hidden" aria-hidden="true">
              <label for="website">Website</label>
              <input
                id="website"
                v-model="form.website"
                type="text"
                name="website"
                tabindex="-1"
                autocomplete="off"
              />
            </div>
          </div>

          <div class="mt-6 flex flex-col gap-4">
            <button type="submit" class="btn-primary self-start" :disabled="status === 'sending'">
              {{ status === 'sending' ? 'Versturen…' : 'Verstuur aanvraag' }}
            </button>
            <p v-if="status === 'mailto'" class="rounded-[3px] bg-cream-100 p-3 text-sm">
              Je e-mailprogramma is geopend met je aanvraag — verstuur het bericht daar om hem af te
              ronden.
            </p>
            <p v-if="status === 'error'" class="text-sm font-medium text-[#8f4e2e]">
              Versturen is niet gelukt. Probeer het nog eens, of mail direct naar
              <a class="underline" :href="`mailto:${site.contact.email}`">{{
                site.contact.email
              }}</a
              >.
            </p>
            <p
              v-if="!site.contact.formEndpoint && status === 'idle'"
              class="text-xs text-ink-600/60"
            >
              Verzenden opent je eigen e-mailprogramma met het bericht al ingevuld.
            </p>
            <p class="text-xs text-ink-600/60">
              Je gegevens worden alleen gebruikt om je aanvraag te beantwoorden.
            </p>
          </div>
        </template>
      </form>
    </div>
  </div>
</template>
