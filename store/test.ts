import { defineStore } from 'pinia'

export const useCityStore = defineStore('cityStore', () => {

    const city = ref(null)

    function setUpCity(cityData: any) {
        city.value = cityData
    }

    const isCity = computed(() => !!city.value)

    return { isCity, setUpCity, city }
})