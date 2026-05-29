<script setup>
import { useRoute } from 'vue-router'
import { useSeo } from '../composables/useSeo'

const route = useRoute()
const pageTitle = route.query.t || 'Page en construction'
useSeo({
  title: 'En construction — IMAAD Financial Group',
  description: 'Cette page est en cours de construction. Revenez bientôt.',
  path: 'en-construction'
})
</script>

<template>
  <section class="construction">
    <div class="construction-inner">
      <div class="section-label">Bientôt disponible</div>
      <h1>{{ pageTitle }}</h1>
      <p>
        Cette section est en cours de construction. Nos équipes y travaillent —
        revenez très prochainement.
      </p>
      <router-link to="/" class="btn btn-gold">Retour à l'accueil</router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.construction {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 24px;
  background: var(--cream);
}

.construction-inner {
  text-align: center;
  max-width: 560px;

  .section-label {
    text-align: center !important;
    margin-bottom: 16px;
  }

  h1 {
    font-family: var(--font-heading);
    font-size: 40px;
    font-weight: 700;
    color: var(--navy);
    letter-spacing: -0.4px;
    margin-bottom: 18px;
  }

  p {
    font-size: 15px;
    color: var(--text-muted);
    line-height: 1.6;
    margin-bottom: 32px;
  }

  .btn-gold {
    color: var(--navy);
    border-radius: 6px;
  }
}
</style>
