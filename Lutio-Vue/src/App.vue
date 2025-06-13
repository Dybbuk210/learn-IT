<template>
    <HeaderComponent :selectedType="selectedType" :data="activeData" @changeType="selectedType = $event" /> 
    <SectionA :data="activeData" />
    <SectionB :data="activeData" />
    <FooterComponent :data="activeData" />
</template>

<script setup>
import { ref, computed } from 'vue'
import data from './swich.json'

  import FooterComponent from './components/FooterComponent.vue';
  import HeaderComponent from './components/HeaderComponent.vue';
  import SectionA from './components/SectionA.vue';
  import SectionB from './components/SectionB.vue';  

  const selectedType = ref('poskytovatel')

  const activeData = computed(() => {
    return data[selectedType.value]
  })
</script>

<style scoped>
</style>
