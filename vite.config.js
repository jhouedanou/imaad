import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base '/imaad/' = GitHub Pages projet (jhouedanou.github.io/imaad/)
export default defineConfig({
  base: '/imaad/',
  plugins: [vue()],
  css: {
    devSourcemap: true,
  },
  // vite-ssg : prérendu statique de chaque route pour le SEO
  ssgOptions: {
    dirStyle: 'nested', // /projets -> projets/index.html (URLs propres)
    formatting: 'minify'
  }
})
