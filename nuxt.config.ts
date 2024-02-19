// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: true 
  },
  components: true,
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY || 'super-secret-key',
    // Warning: `public` is exposed on client and server
    public: {
      websiteURL: 'https://public-data.com'
    }
  },
  css: [
    '@/assets/css/main.css',
  ],
  modules: [    
    '@pinia/nuxt',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
