<script setup>
import site from '../content/site.json'
import ContactForm from '../components/ContactForm.vue'
import { asset } from '../utils/asset'
import { useSeo } from '../composables/useSeo'

const p = site.pages.contact
useSeo(p.meta)
</script>

<template>
  <section class="contact-zeplin">
    <div class="contact-zeplin-grid">
      <div class="contact-zeplin-left">
        <div class="section-label">{{ p.label }}</div>
        <h1>{{ p.title }}</h1>
        <p class="lead">{{ p.lead }}</p>

        <div class="contact-info-card">
          <div class="icon-box">
            <img :src="asset('assets/icon-email.svg')" alt="">
          </div>
          <div>
            <div class="info-label">{{ p.infoLabel }}</div>
            <a :href="`mailto:${site.email}`" class="info-value">{{ site.email }}</a>
          </div>
        </div>
      </div>

      <ContactForm :form="p.form" variant="zeplin" />
    </div>
  </section>
</template>
