import { useHead } from '@unhead/vue'
import site from '../content/site.json'

// SEO par route — injecté dans le HTML prérendu (vite-ssg) : title, description,
// canonical, Open Graph, Twitter Card. SSR-safe.
export function useSeo(meta) {
  const url = site.baseUrl + (meta.path || '')
  useHead({
    title: meta.title,
    link: [{ rel: 'canonical', href: url }],
    meta: [
      { name: 'description', content: meta.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: meta.title },
      { property: 'og:description', content: meta.description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: site.ogImage },
      { property: 'og:locale', content: 'fr_FR' },
      { property: 'og:site_name', content: site.brand },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: meta.title },
      { name: 'twitter:description', content: meta.description },
      { name: 'twitter:image', content: site.ogImage }
    ]
  })
}
