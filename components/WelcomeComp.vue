<script setup>
import { useHomeStore } from '~/store/home'

const homeStore = useHomeStore()
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