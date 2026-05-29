<script setup>
import { asset } from '../utils/asset'

defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true }
})
</script>

<template>
  <div class="value-card">
    <div class="value-icon">
      <img :src="asset(icon)" alt="">
    </div>
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
  </div>
</template>
