<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import site from '../content/site.json'
import PageHero from '../components/PageHero.vue'
import StatsBar from '../components/StatsBar.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { useSeo } from '../composables/useSeo'

const p = site.pages.projets
useSeo(p.meta)

// secteur -> filtres applicables (un projet peut relever de plusieurs filtres)
const SECTOR_CATS = {
  'infrastructure routière': ['infra', 'souverain', 'ppp'],
  'hydraulique': ['infra', 'souverain', 'ppp'],
  'santé': ['ppp'],
  'agriculture': ['souverain', 'corporate'],
  'immobilier': ['corporate'],
  'logistique': ['corporate'],
  'industrie': ['corporate'],
  'mines': ['corporate'],
  'énergie': ['energie']
}
const catsFor = (it) =>
  it.cats || (it.cat ? [it.cat] : SECTOR_CATS[(it.sector || '').toLowerCase()] || ['corporate'])

const route = useRoute()
const router = useRouter()
const validCats = p.filters.map((f) => f.cat)

// filtre initial depuis l'URL (?filtre=ppp), sinon "tous"
const initial = validCats.includes(route.query.filtre) ? route.query.filtre : 'tous'
const activeCat = ref(initial)

// sélection -> met à jour l'URL (partageable + bouton retour)
function setCat(cat) {
  activeCat.value = cat
  router.replace({ query: cat === 'tous' ? {} : { filtre: cat } })
}

// navigation arrière/avant -> resynchronise le filtre
watch(
  () => route.query.filtre,
  (f) => {
    activeCat.value = validCats.includes(f) ? f : 'tous'
  }
)

const filtered = computed(() =>
  activeCat.value === 'tous'
    ? p.items
    : p.items.filter((it) => catsFor(it).includes(activeCat.value))
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
      @click="setCat(f.cat)"
    >{{ f.label }}</button>
  </div>
  <div class="projets-section-header container-fluid">
    <div class="section-label">{{ p.hero.label }}</div>
    <h2>{{ p.hero.title }}</h2>
  </div>
  <section class="section-projets-grid container-fluid">
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
