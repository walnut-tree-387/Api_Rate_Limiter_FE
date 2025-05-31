import { resolve } from "path"
export default defineNuxtConfig({
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