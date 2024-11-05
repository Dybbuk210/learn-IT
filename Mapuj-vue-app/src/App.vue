<template>
  <div>
 <Contactform/>
 <ProductCard/>
 <ProductCard02/>
 <AboutSection01/>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Contactform from './components/Contactform.vue';
import ProductCard from './components/ProductCard.vue';
import ProductCard02 from './components/ProductCard02.vue';
import AboutSection01 from './components/AboutSection01.vue';

export default {
  components: {
    Contactform,
    ProductCard,
    ProductCard02,
    AboutSection01
  }
}
</script>

<style lang="scss" scoped>

</style>