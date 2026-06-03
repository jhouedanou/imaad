<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import site from "../content/site.json";
import { asset } from "../utils/asset";

const route = useRoute();
const isActive = (to) =>
  to === "/" ? route.path === "/" : route.path.startsWith(to);

const scrolled = ref(false);
const menuOpen = ref(false);

const onScroll = () => {
  scrolled.value = window.scrollY > 40;
};

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
onUnmounted(() => window.removeEventListener("scroll", onScroll));

// ferme le drawer à chaque changement de page
watch(() => route.path, () => (menuOpen.value = false));
</script>

<template>
  <nav
    class="navbar container-fluid pt-6 pb-6"
    :class="{ 'navbar--scrolled': scrolled, 'navbar--open': menuOpen }"
  >
    <div class="row">
      <div class="col-md-8 col-lg-8 col-sm-12 d-flex align-items-center p-0">
        <router-link id="logo" to="/" class="navbar-logo">
          <img
            class="imaad-logo-svg Groupe-99"
            :src="asset('assets/logo-imaad.svg')"
            :alt="site.brand"
          />
        </router-link>
        <nav class="navbar-nav">
          <router-link
            v-for="item in site.nav"
            :key="item.to"
            :to="item.to"
            :class="{ active: isActive(item.to) }"
            >{{ item.label }}</router-link
          >
        </nav>
      </div>
      <div class="col-md-4 col-lg-4 col-sm-12 d-flex justify-content-end align-items-end p-0">
        <router-link id="ctnBtn" :to="site.navCta.to" class="btn-contact-nav">{{
          site.navCta.label
        }}</router-link>
      </div>

      <!-- Bouton hamburger (mobile) -->
      <button
        type="button"
        class="navbar-burger"
        :class="{ 'is-open': menuOpen }"
        aria-label="Menu"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- Drawer mobile -->
  <div
    class="nav-drawer-overlay"
    :class="{ open: menuOpen }"
    @click="menuOpen = false"
  ></div>
  <aside class="nav-drawer" :class="{ open: menuOpen }">
    <nav class="nav-drawer-links">
      <router-link
        v-for="item in site.nav"
        :key="item.to"
        :to="item.to"
        :class="{ active: isActive(item.to) }"
        >{{ item.label }}</router-link
      >
    </nav>
    <router-link :to="site.navCta.to" class="btn-contact-nav nav-drawer-cta">{{
      site.navCta.label
    }}</router-link>
  </aside>
</template>

<style lang="scss" scoped>
#ctnBtn {
  border-radius: 6px;
  padding: 14px 21px;
}
#logo {
  width: 109.7px;
  height: 122.4px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.navbar-nav {
  display: flex;
  gap: 40px;
  margin-left: 60px;
  a {
    text-transform: uppercase;
    font-family: var(--font-heading);
    font-size: 18px;
    font-weight: 600;
    color: white;
    &.active {
      color: #c1a258;
    }
  }
}
.navbar {
  padding-top: 40px;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: height 0.3s ease, padding 0.3s ease, background 0.3s ease;
}

/* État sticky compacté au scroll */
.navbar--scrolled {
  height: auto !important;
  padding-top: 12px;
  padding-bottom: 12px;
  background: var(--navy) !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);

  #logo {
    width: 64px;
    height: 72px;
  }
}

/* Hamburger */
.navbar-burger {
  display: none;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  padding: 0;

  span {
    display: block;
    width: 26px;
    height: 2px;
    background: var(--gold);
    transition: transform 0.25s ease, opacity 0.25s ease;
  }

  &.is-open span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  &.is-open span:nth-child(2) {
    opacity: 0;
  }
  &.is-open span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}

/* Drawer */
.nav-drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
  z-index: 200;

  &.open {
    opacity: 1;
    visibility: visible;
  }
}

.nav-drawer {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 280px;
  max-width: 82vw;
  background: var(--navy);
  z-index: 201;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  padding: 100px 32px 32px;
  gap: 8px;

  &.open {
    transform: translateX(0);
  }

  .nav-drawer-links {
    display: flex;
    flex-direction: column;
    gap: 4px;

    a {
      font-family: var(--font-heading);
      font-size: 16px;
      font-weight: 400;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.9);
      padding: 14px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);

      &.active {
        color: var(--gold);
      }
    }
  }

  .nav-drawer-cta {
    margin-top: 24px;
    text-align: center;
  }
}

/* Responsive */
@media (max-width: 991px) {
  .navbar-nav,
  #ctnBtn {
    display: none;
  }
  .navbar-burger {
    display: flex;
  }
  #logo {
    width: 72px;
    height: 80px;
  }
  .navbar {
    padding-top: 16px;
    padding-bottom: 16px;
    height: auto !important;
  }
}
</style>
