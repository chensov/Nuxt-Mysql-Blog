// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  css: ['~/assets/main.css'],
  runtimeConfig: {
    public: {
      dbHost: process.env.DB_HOST,
      dbUser: process.env.DB_USER,
      dbPassword: process.env.DB_PASSWORD,
      dbDatabase: process.env.DB_DATABASE,
    }},
})
