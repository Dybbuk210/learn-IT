<template>
    <HeaderComponent />
    <router-view />
    <FooterComponent />
</template>

<script setup>
    import HeaderComponent from './components/GlobalComponents/HeaderComponent.vue';
    import FooterComponent from './components/GlobalComponents/FooterComponent.vue';
    import { useHead } from '@vueuse/head'

    
    useHead({
    script: [
        {
        type: 'application/ld+json',
        children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Oukline",
            "url": "https://oukline.com",
            "logo": "https://oukline.com/assets/og-image-default.png",
            "sameAs": [
            "https://x.com/Ouklinestudio",
            "https://www.linkedin.com/company/ouklinestudio",
            "https://www.instagram.com/ouklinestudio"
            ]
        })
        }
    ]
    })
</script>

<style scoped>
</style>