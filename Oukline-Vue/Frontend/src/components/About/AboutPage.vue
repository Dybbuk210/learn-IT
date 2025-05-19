<template>
    <AboutOukline />
    <AboutTeam />
    <AboutWork />
    <AboutProces />
    <AboutRedy />
</template>

<script setup>
    import AboutOukline from './AboutComponents/AboutOukline.vue';
    import AboutTeam from './AboutComponents/AboutTeam.vue';
    import AboutWork from './AboutComponents/AboutWork.vue';
    import AboutProces from './AboutComponents/AboutProces.vue';
    import AboutRedy from './AboutComponents/AboutRedy.vue';

    import { useHead } from '@vueuse/head'
    import { useRoute } from 'vue-router'

    const route = useRoute()

    useHead({
    title: route.meta.title,
    meta: [
        {
        name: 'description',
        content: route.meta.description
        },

    {
      property: 'og:title',
      content: 'About us – The Creative Minds Behind Oukline'
    },
    {
      property: 'og:description',
      content: 'We help brands grow through UX/UI design, development and creative strategy.'
    },
    {
      property: 'og:image',
      content: 'https://oukline.com/assets/og-image-default.png'
    },
    {
      property: 'og:url',
      content: 'https://oukline.com/about'
    },
    {
      property: 'og:type',
      content: 'website'
    },

    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'About us – The Creative Minds Behind Oukline'
    },
    {
      name: 'twitter:description',
      content: 'We help brands grow through UX/UI design, development and creative strategy.'
    },
    {
      name: 'twitter:image',
      content: 'https://oukline.com/assets/og-image-default.png'
    }
    ],
    link: [
        {
        rel: 'canonical',
        href: route.meta.canonical
        }
    ]
    })
</script>

<style scoped>
</style>