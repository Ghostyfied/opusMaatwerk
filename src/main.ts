import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'

import '@fontsource/archivo/500.css'
import '@fontsource/archivo/600.css'
import '@fontsource/archivo/700.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/lora/400-italic.css'
import './assets/main.css'

export const createApp = ViteSSG(App, {
  routes,
  base: import.meta.env.BASE_URL,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})
