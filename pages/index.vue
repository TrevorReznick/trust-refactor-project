<script setup>
/*
definePageMeta({
  middleware: defineNuxtRouteMiddleware((to, from) => {
    console.log('to', to)
    console.log('from', from)
  })
})
*/

</script>
<template>
  <main class="page-wrapper">
    <headerComponent />
    <hero />
    <footerComponent />
  </main>
  <!-- Footer-->
</template>

<script>


/* dummy */

export default {
  middleware: ['main']  
}
</script>

<style scoped>
.cards {
  display: flex;
  flex-direction: row;
}
</style>
    