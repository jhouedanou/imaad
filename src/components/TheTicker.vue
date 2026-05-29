<script setup>
defineProps({
  text: { type: String, required: true },
  repeat: { type: Number, default: 8 }
})
</script>

<template>
  <div class="ticker">
    <div class="ticker-track">
      <span v-for="n in repeat" :key="n">{{ text }}</span>
    </div>
  </div>
</template>
