import site from '../content/site.json'

const HomeView = () => import('../views/HomeView.vue')
const ProjetsView = () => import('../views/ProjetsView.vue')
const EquipeView = () => import('../views/EquipeView.vue')
const ContactView = () => import('../views/ContactView.vue')

// Routes consommées par vite-ssg (génération statique) + vue-router au runtime.
export const routes = [
  { path: '/', name: 'home', component: HomeView, meta: site.pages.home.meta },
  { path: '/projets', name: 'projets', component: ProjetsView, meta: site.pages.projets.meta },
  { path: '/equipe', name: 'equipe', component: EquipeView, meta: site.pages.equipe.meta },
  { path: '/contact', name: 'contact', component: ContactView, meta: site.pages.contact.meta },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]
