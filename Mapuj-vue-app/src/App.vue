<template>
  <div>
 <Contactform/>
 <ProductCard/>
 <ProductCard02/>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Contactform from './components/Contactform.vue';
import ProductCard from './components/ProductCard.vue';
import ProductCard02 from './components/ProductCard02.vue';

export default {
  components: {
    Contactform,
    ProductCard,
    ProductCard02
  }
}
</script>

<style lang="scss" scoped>

</style>