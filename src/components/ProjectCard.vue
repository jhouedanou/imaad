<script setup>
import { computed } from 'vue'
import { asset } from '../utils/asset'

const props = defineProps({
  project: { type: Object, required: true },
  zeplin: { type: Boolean, default: false }
})

// nom pays (FR) -> code ISO 3166-1 alpha-2 (flagcdn)
const FLAGS = {
  "côte d'ivoire": 'ci',
  'guinée': 'gn',
  'djibouti': 'dj',
  'bénin': 'bj',
  'rwanda': 'rw',
  'sénégal': 'sn',
  'cameroun': 'cm'
}

// retire un éventuel emoji drapeau + espaces, garde le nom propre
const countryName = computed(() =>
  (props.project.country || '').replace(/[\u{1F1E6}-\u{1F1FF}]/gu, '').trim()
)
const flagCode = computed(() => FLAGS[countryName.value.toLowerCase()] || '')
const flagUrl = computed(() => flagCode.value ? `https://flagcdn.com/${flagCode.value}.svg` : '')
</script>

<template>
  <div class="card-project" :class="{ 'card-project--zeplin': zeplin }">
    <div class="card-project-img">
      <img :src="asset(project.image)" :alt="project.alt">
      <div class="card-project-badge">
        <div class="badge-country">
          <img v-if="flagUrl" class="badge-flag" :src="flagUrl" :alt="countryName" width="20" height="14">
          <span>{{ countryName }}</span>
        </div>
        <div class="badge-status" :class="project.statusClass">{{ project.status }}</div>
      </div>
    </div>
    <div class="card-project-body">
      <div class="sector">{{ project.sector }}</div>
      <div class="amount">{{ project.amount }}</div>
      <p>{{ project.text }}</p>
    </div>
  </div>
</template>
