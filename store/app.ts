import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    status: 'idle',
    code: 0,
    error: false,
    invoker: false
  }),
  /*
  actions: {
    SetClass(bodyClass: any) {
      this.bodyClass = bodyClass  
    }
  }
  */
})