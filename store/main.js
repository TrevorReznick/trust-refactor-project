import { defineStore } from 'pinia';

export const useHomeStore = defineStore('home', {
  state: () => ({
    title: 'Benvenuto su Nuxt.js con Tailwind CSS',
    text: 'Benvenuto su Nuxt.js con Tailwind CSS'
  }),
});

