<template>
    <HeaderComponent />
    <router-view />
    <InterviewsGalery />
    <Interwiew01 />
    <ProjectsGalery />
    <FooterComponent />
</template>

<script setup>
import InterviewsGalery from './components/Interviews/InterviewsGalery.vue';
import Interwiew01 from './components/Interviews/InterviewsComponents/Interwiew01.vue';
import ProjectsGalery from './components/Projects/ProjectsGalery.vue';
    import HeaderComponent from './components/GlobalComponents/HeaderComponent.vue';
    import FooterComponent from './components/GlobalComponents/FooterComponent.vue';
</script>

<style scoped>
</style>