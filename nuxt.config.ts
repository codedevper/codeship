// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  content: {
    experimental: {
      search: true
    }
  },
  css: [
    './assets/css/main.css',
    './assets/css/fortawesome.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "nuxt-icon",
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],
})