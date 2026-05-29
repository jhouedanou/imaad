<script setup>
defineProps({
  stats: { type: Array, required: true }
})
</script>

<template>
  <div class="stats-bar stats-bar--zeplin">
    <div class="stat-item" v-for="s in stats" :key="s.label">
      <div class="stat-value">{{ s.value }}</div>
      <div class="stat-label">{{ s.label }}</div>
    </div>
  </div>
</template>
