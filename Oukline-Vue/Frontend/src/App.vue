<template>
    <HeaderComponent />
    <router-view />
    <FooterComponent />
</template>

<script setup>
    import HeaderComponent from './components/GlobalComponents/HeaderComponent.vue';
    import FooterComponent from './components/GlobalComponents/FooterComponent.vue';
</script>

<style scoped>
</style>