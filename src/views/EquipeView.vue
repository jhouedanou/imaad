<script setup>
import site from '../content/site.json'
import PageHero from '../components/PageHero.vue'
import TeamCard from '../components/TeamCard.vue'
import { useSeo } from '../composables/useSeo'

const p = site.pages.equipe
useSeo(p.meta)
</script>

<template>
  <PageHero :label="p.hero.label" :title="p.hero.title" :desc="p.hero.desc" />

  <section class="section-team">
    <div
      v-for="(row, ri) in p.rows"
      :key="ri"
      class="team-grid"
      :class="{ 'team-grid--spaced': row.spaced }"
    >
      <TeamCard
        v-for="(m, mi) in row.members"
        :key="mi"
        :member="m"
        :compact="row.compact"
      />
    </div>
  </section>
</template>
