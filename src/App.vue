<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
import { asset } from './utils/asset'

const route = useRoute()
// class dynamique selon la page : page-home, page-projets, page-equipe, page-contact
const pageClass = computed(() => `page-${route.name || 'home'}`)

// images de fond résolues avec le bon base (Vercel '/' ou GitHub Pages '/imaad/')
const bgVars = {
  '--bg-home': `url("${asset('assets/bgHome.svg')}")`,
  '--bg-projets': `url("${asset('assets/bgProjets.jpg')}")`,
  '--bg-equipe': `url("${asset('assets/bgEquipe.jpg')}")`
}
</script>

<template>
  <div :class="pageClass" :style="bgVars">
    <TheNavbar />
    <main>
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>
