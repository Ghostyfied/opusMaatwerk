import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import 'vite-ssg'

export default defineConfig({
  // '/' locally and on a custom domain; the deploy workflow sets
  // BASE_PATH=/opusMaatwerk/ for the github.io project URL.
  base: process.env.BASE_PATH ?? '/',
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssgOptions: {
    dirStyle: 'nested',
    formatting: 'minify',
  },
})
