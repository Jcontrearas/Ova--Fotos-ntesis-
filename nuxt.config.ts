// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: [
    'vuetify/styles', // Estilos globales de Vuetify
    '@mdi/font/css/materialdesignicons.css' // Iconos Material Design
  ],
  build: {
    transpile: ['vuetify'], // Asegúrate de transpilarlos
  },
  vite: {
    define: {
      'process.env.DEBUG': false, // Solución de problemas de Vuetify con Vite
    },
  },
})
