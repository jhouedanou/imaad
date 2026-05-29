<script setup>
defineProps({
  label: { type: String, default: '' },
  title: { type: String, required: true },
  desc: { type: String, default: '' }
})
</script>

<template>
  <section class="page-hero page-hero--team">
    <div class="page-hero-overlay"></div>
    <div class="page-hero-content page-hero-content--center">
      <div class="section-label light">{{ label }}</div>
      <h1 class="page-hero-title">{{ title }}</h1>
      <p class="page-hero-desc">{{ desc }}</p>
    </div>
  </section>
</template>
