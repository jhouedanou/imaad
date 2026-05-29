<script setup>
defineProps({
  num: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, default: '' },
  items: { type: Array, required: true },
  active: { type: Boolean, default: false }
})
</script>

<template>
  <div class="domain-card" :class="{ 'domain-card--active': active }">
    <div class="domain-num">{{ num }}</div>
    <h3>{{ title }}</h3>
    <p v-if="desc" class="domain-desc">{{ desc }}</p>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>
