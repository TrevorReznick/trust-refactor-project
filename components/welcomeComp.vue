<script>
import { defineComponent } from 'vue';
import { useHomeStore } from '~/store/main';

export default defineComponent({
  setup() {
    const homeStore = useHomeStore()
    return {
      homeStore,
    }
  }
})
</script>

  

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">
        {{ homeStore.title }}
      </h1>
      <p class="text-gray-600">{{ homeStore.text }}</p>
    </div>
  </div>
</template>
  
<style scoped>
</style>
  ~/store/main