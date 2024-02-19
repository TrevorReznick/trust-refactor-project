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
  app: {
    head: {
      title: 'di-falco-immobiliare',
      htmlAttrs: {
        lang: 'it',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'stylesheet', href: '/css/theme.min.css'},
        { rel: 'stylesheet', href: '/vendor/nouislider/dist/nouislider.min.css'},
        { rel: 'stylesheet', href: '/vendor/simplebar/dist/simplebar.min.css'},
        { rel: 'stylesheet', href: '/vendor/tiny-slider/dist/tiny-slider.css'},      
        { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/x-icon', href: 'favicon-32x32.png' },
        { rel: 'icon', type: 'image/x-icon', href: 'favicon-16x16.png' },
        { rel: 'mask-icon', type: 'image/x-icon', href: 'safari-pinned-tab.svg' }
      ],
      script: [
        { src: '/vendor/smooth-scroll/dist/smooth-scroll.min.js', body: true},
        { src: '/js/theme.min.js', body: true},
        { src: '/vendor/bootstrap/dist/js/bootstrap.bundle.min.js', body: true},
        { src: '/vendor/nouislider/dist/nouislider.min.js', body: true},
        { src: '/vendor/simplebar/dist/simplebar.min.js', body: true},
        { src: '/vendor/jarallax/dist/jarallax.min.js', body: true},
        { src: '/vendor/tiny-slider/dist/min/tiny-slider.js', body: true},      
        { src: '/vendor/@lottiefiles/lottie-player/dist/lottie-player.js', body: true},
        { src: '/vendor/flatpickr/dist/flatpickr.min.js', body: true}
      ]
    },
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
