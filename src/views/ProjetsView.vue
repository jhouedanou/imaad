<script setup>
import { ref, computed } from 'vue'
import site from '../content/site.json'
import PageHero from '../components/PageHero.vue'
import StatsBar from '../components/StatsBar.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { useSeo } from '../composables/useSeo'

const p = site.pages.projets
useSeo(p.meta)
const activeCat = ref('tous')
const filtered = computed(() =>
  activeCat.value === 'tous'
    ? p.items
    : p.items.filter((it) => it.cat === activeCat.value)
)
</script>

<template>
  <PageHero :label="p.hero.label" :title="p.hero.title" :desc="p.hero.desc" />

  <StatsBar :stats="p.stats" />

  <div class="filters-bar filters-bar--pills">
    <span class="filter-label">{{ p.filtersLabel }}</span>
    <button
      v-for="f in p.filters"
      :key="f.cat"
      type="button"
      class="filter-pill"
      :class="{ active: activeCat === f.cat }"
      @click="activeCat = f.cat"
    >{{ f.label }}</button>
  </div>

  <section class="section-projets-grid">
    <div class="grid-3" id="projects-grid">
      <ProjectCard
        v-for="(proj, i) in filtered"
        :key="i"
        :project="proj"
        zeplin
      />
    </div>
  </section>
</template>
