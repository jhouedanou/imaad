<script setup>
import site from '../content/site.json'

const f = site.footer
const isInternal = (to) => to && to !== '#' && !/^https?:\/\//.test(to)
</script>

<template>
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <p class="logo-name">{{ f.brandName }}</p>
        <p>{{ f.tagline }}</p>
        <div class="footer-sep"></div>
      </div>

      <div class="footer-col" v-for="col in f.cols" :key="col.title">
        <h4>{{ col.title }}</h4>
        <ul>
          <li v-for="link in col.links" :key="link.label">
            <router-link v-if="isInternal(link.to)" :to="link.to">{{ link.label }}</router-link>
            <a v-else :href="link.to">{{ link.label }}</a>
          </li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>{{ f.contactsTitle }}</h4>
        <p class="contact-email">{{ site.email }}</p>
        <div class="footer-bureaux">
          <h5>{{ f.bureauxTitle }}</h5>
          <div class="bureaux-flags">
            <span v-for="b in f.bureaux" :key="b">{{ b }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>{{ f.copyright }}</p>
      <div class="footer-social">
        <a href="#" aria-label="LinkedIn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="#" aria-label="Twitter">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
        </a>
      </div>
      <div class="footer-bottom-links">
        <a v-for="link in f.bottomLinks" :key="link.label" :href="link.to">{{ link.label }}</a>
      </div>
    </div>
  </footer>
</template>
