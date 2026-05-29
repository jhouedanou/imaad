<script setup>
import { asset } from '../utils/asset'

defineProps({
  member: { type: Object, required: true },
  compact: { type: Boolean, default: false }
});
</script>

<template>
  <div class="team-card">
    <div class="team-card-img white-bg">
      <img :src="asset(member.image)" :alt="member.name">
    </div>
    <div class="team-card-body" :class="{ 'team-card-body--compact': compact }">
      <div class="name">{{ member.name }}</div>
      <div class="title-fr">{{ member.titleFr }}</div>
      <div class="title-en" v-html="member.titleEn || '&nbsp;'"></div>
      <p v-if="member.text">{{ member.text }}</p>

      <a
        v-if="member.email && member.emailAsLink"
        :href="`mailto:${member.email}`"
        class="linkedin-email"
      >{{ member.email }}</a>
      <template v-else-if="member.email">
        <a :href="`mailto:${member.email}`" class="linkedin-link">LinkedIN</a>
        <span class="linkedin-email">{{ member.email }}</span>
      </template>

<!--       <a v-if="member.linkedin" :href="member.linkedin" class="linkedin-link">LinkedIn</a>
 -->      <span v-if="member.phone" class="phone-number">{{ member.phone }}</span>
    </div>
  </div>
</template>
