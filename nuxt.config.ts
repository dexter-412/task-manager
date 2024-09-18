// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    'nuxt-quasar-ui',
    '@pinia/nuxt'
  ],
  css: [
    '@/assets/scss/variables.scss',
    '@/assets/scss/global.scss',
    '@/assets/scss/vuedraggable.scss'
  ]
})
