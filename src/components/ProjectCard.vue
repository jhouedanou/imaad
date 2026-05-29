<script setup>
import { asset } from '../utils/asset'

defineProps({
  project: { type: Object, required: true },
  zeplin: { type: Boolean, default: false }
})
</script>

<template>
  <div class="card-project" :class="{ 'card-project--zeplin': zeplin }">
    <div class="card-project-img">
      <img :src="asset(project.image)" :alt="project.alt">
      <div class="card-project-badge">
        <div class="badge-country">{{ project.country }}</div>
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
