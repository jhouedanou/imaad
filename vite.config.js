import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Vercel (VERCEL=1 auto) -> base '/', GitHub Pages -> '/imaad/'
const base = process.env.VERCEL ? '/' : (process.env.VITE_BASE || '/imaad/')

export default defineConfig({
  base,
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
