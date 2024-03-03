import { defineStore } from 'pinia';

export const useHomeStore = defineStore('home', {
  state: () => ({
    title: 'Benvenuto su Nuxt.js con Tailwind CSS',
    text: 'Benvenuto su Nuxt.js con Tailwind CSS',
    /* is test */
    bodyClass: '',
    application: {
      status: 'idle',
      code: 0,
      error: false,
      invoker: false,
    }
  }),
  actions: {
    SetClass(bodyClass) {
      this.bodyClass = bodyClass  
    }
  }
})

