<script setup>
import site from '../content/site.json'
import TheTicker from '../components/TheTicker.vue'
import ValueCard from '../components/ValueCard.vue'
import DomainCard from '../components/DomainCard.vue'
import ProjectCard from '../components/ProjectCard.vue'
import TeamCard from '../components/TeamCard.vue'
import ContactForm from '../components/ContactForm.vue'
import { useSeo } from '../composables/useSeo'

const p = site.pages.home
useSeo(p.meta);
</script>

<template>
  <!--HERO-->
  <section class="hero container-fluid">
    <div class="hero-left">
      <div class="hero-eyebrow">{{ p.hero.eyebrow }}</div>
      <h1 v-html="p.hero.title"></h1>
      <p class="hero-desc">{{ p.hero.desc }}</p>
      <div class="hero-actions">
        <router-link v-for="a in p.hero.actions" :key="a.label" :to="a.to" :class="a.class">{{ a.label }}</router-link>
      </div>

      <div class="hero-stats-row">
        <div class="hero-stat" v-for="s in p.hero.stats" :key="s.label">
          <div class="hero-stat-value">{{ s.value }}</div>
          <div class="hero-stat-label">{{ s.label }}</div>
        </div>
      </div>
    </div>

    <ContactForm :form="site.pages.contact.form" variant="mini" />
  </section>

  <!-- TICKER -->
  <TheTicker :text="p.ticker" />

  <!-- VALEURS -->
  <section class="section-valeurs" id="valeurs">
    <div class="section-header">
      <div class="section-label">{{ p.valeurs.label }}</div>
      <h2 v-html="p.valeurs.title"></h2>
      <p class="subtitle">{{ p.valeurs.subtitle }}</p>
    </div>
    <div class="grid-3 gap-0">
      <ValueCard v-for="c in p.valeurs.cards" :key="c.title" v-bind="c" />
    </div>
  </section>

  <!-- EXPERTISE / DOMAINES -->
  <section class="section-expertise" id="domaines">
    <div class="expertise-grid-bg"></div>
    <div class="expertise-identity">
      <div class="section-label light">{{ p.expertise.label }}</div>
      <h2 v-html="p.expertise.identityTitle"></h2>
    </div>
    <div class="expertise-header">
      <div class="grid-2">
        <div id="blacknoir" class="col">
            <p v-for="(para, i) in p.expertise.identityParagraphs" :key="i">{{ para }}</p>
        </div>
        <div id="ridicule" class="col">
          
      <h2 class="expertise-title">{{ p.expertise.title }}</h2>
      <p class="domains-subtitle" v-html="p.expertise.subtitle"></p>
        </div>
      </div>
    </div>
    <div class="domains-cards">
      <DomainCard v-for="d in p.expertise.domains" :key="d.num" v-bind="d" />
    </div>
  </section>

  <!-- PROJETS PREVIEW -->
  <section class="section-projets">
    <div class="section-header">
      <div class="section-label">{{ p.projetsPreview.label }}</div>
      <h2>{{ p.projetsPreview.title }}</h2>
    </div>
    <div class="grid-3">
      <ProjectCard v-for="(proj, i) in p.projetsPreview.cards" :key="i" :project="proj" />
    </div>
    <div class="voir-tous">
      <router-link :to="p.projetsPreview.cta.to" class="btn btn-outline-gold">{{ p.projetsPreview.cta.label
        }}</router-link>
    </div>
  </section>

  <!-- TEAM PREVIEW — masquée temporairement (remettre v-if="true" pour réafficher) -->
  <section v-if="false" class="section-team-preview">
    <div class="section-header">
      <div class="section-label">{{ p.teamPreview.label }}</div>
      <h2>{{ p.teamPreview.title }}</h2>
    </div>
    <p class="subtitle">{{ p.teamPreview.subtitle }}</p>
    <div class="grid-4">
      <TeamCard v-for="(m, i) in p.teamPreview.members" :key="i" :member="m" />
    </div>
    <div class="voir-tous">
      <router-link :to="p.teamPreview.cta.to" class="btn btn-outline-gold btn-voir-tous">{{ p.teamPreview.cta.label
        }}</router-link>
    </div>
  </section>

  <!-- CONTACT PREVIEW -->
  <section class="section-contact-preview">
    <div class="contact-preview-grid">
      <div class="contact-preview-left">
        <div class="section-label">{{ p.contactPreview.label }}</div>
        <h2>{{ p.contactPreview.title }}</h2>
        <p>{{ p.contactPreview.text }}</p>
        <div class="contact-email-row">
          <div class="email-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
            </svg>
          </div>
          <div>
            <span class="email-label">{{ p.contactPreview.emailLabel }}</span>
            <a :href="`mailto:${site.email}`">{{ site.email }}</a>
          </div>
        </div>
      </div>
      <ContactForm :form="site.pages.contact.form" variant="card" />
    </div>
  </section>
</template>
