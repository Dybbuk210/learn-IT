<template>
    <HeaderComponent />
    <router-view />
<!-- <BlogPage />  -->   
    <FooterComponent />
</template>

<script setup>
    import HeaderComponent from './components/GlobalComponents/HeaderComponent.vue';
    import FooterComponent from './components/GlobalComponents/FooterComponent.vue';
    import BlogPage from './components/Blog/BlogPage.vue';
</script>

<style scoped>
</style>