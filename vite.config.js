import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// VITE_BASE=/ sur Vercel, /imaad/ sur GitHub Pages
export default defineConfig({
  base: process.env.VITE_BASE ?? '/imaad/',
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
