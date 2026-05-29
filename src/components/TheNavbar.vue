<script setup>
import { useRoute } from "vue-router";
import site from "../content/site.json";
import { asset } from "../utils/asset";

const route = useRoute();
const isActive = (to) =>
  to === "/" ? route.path === "/" : route.path.startsWith(to);
</script>

<template>
  <nav class="navbar container-fluid pt-6 pb-6">
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
    </div>
  </nav>
</template>
<style lang="scss" scoped>
#ctnBtn {
    border-radius: 5px;
  padding: 14px 21px;
  padding: 14px 21px;

}
#logo {
  width: 109.7px;
  height: 122.4px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.navbar-nav {
  display: flex;
  gap: 40px;
  margin-left: 60px;
  a{
    text-transform: uppercase;
  }
}
.navbar-nav {
  
  a {
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: white;
    &.active {
      color: #c1a258;
    }
  }
}
.navbar {
  padding-top: 40px;
  
}
</style>
