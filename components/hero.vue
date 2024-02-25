<script>
//import searchBar from '~/components/home/hero/search.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'hero',
  components: {
    //searchBar
  },
  setup() {
    const windowWidth = ref(0)

    const getImage = () => {
      windowWidth.value = window.innerWidth
      if (windowWidth.value <= 720) {
        return require("@/assets/img/hero-bg@480x334.png");
      } else if (windowWidth.value > 720 && windowWidth.value <= 1080) {
        return require("@/assets/img/hero-bg@1680x748.png");
      } else {
        return require("@/assets/img/hero-bg.png");
      }
    }

    const _getImage = () => {
      return getImage()
    }

    onMounted(() => {
      window.addEventListener("resize", _getImage);
    })

    onBeforeUnmount(() => {
      window.removeEventListener("resize", _getImage);
    })

    return {
      windowWidth,
      getImage
    }
  }
}
</script>
<template>
    <section class="container-fluid my-5 pt-5 pb-lg-4 px-xxl-4">
      <!--
      <div 
        class="jarallax card align-items-center justify-content-center border-0 p-md-5 p-4 bg-secondary overflow-hidden mt-n3" 
        style="min-height: 65vh; 
        background-image: url(https://www.difalcoimmobiliare.it/img/hero-bg.png);" 
        data-jarallax data-speed="0.5"
      >
      -->
      <div 
        class="jarallax card align-items-center justify-content-center border-0 p-md-5 p-4 bg-secondary overflow-hidden mt-n3" 
        :style="{ 'background-image': `url(${getImage})`, 'min-height': '65vh' }" 
        data-jarallax data-speed="0.5"
      >
        <span class="img-overlay opacity-40"></span>
        <div class="content-overlay" style="max-width: 856px;">
          <h1 class="display-5 mb-5 pb-md-3 px-md-3 text-white text-center">Immobiliare di Falco</h1>      
          <!--<searchBar />-->
        </div>
      </div>
    </section>
    </template>