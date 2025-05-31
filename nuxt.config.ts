import { resolve } from "path"
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'netlify',
  },
  // Optional: ensure SSG is used
  routeRules: {
    '/**': { static: true },
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  alias:{
    "@" : resolve(__dirname, ".")
  },
  css: [
    '@/assets/main.scss',    
  ]  // Incase of customized tailwind css then can add postcss config below
})