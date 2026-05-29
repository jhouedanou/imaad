<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'

const route = useRoute()
// class dynamique selon la page : page-home, page-projets, page-equipe, page-contact
const pageClass = computed(() => `page-${route.name || 'home'}`)
</script>

<template>
  <div :class="pageClass">
    <TheNavbar />
    <main>
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>
