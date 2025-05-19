<template>
    <ProjectsGaleryUp />
    <ProjectsGaleryCards />
    <ProjectsForm />
</template>

<script setup>
    import ProjectsGaleryUp from './ProjectsComponents/ProjectsGaleryUp.vue';
    import ProjectsGaleryCards from './ProjectsComponents/ProjectsGaleryCards.vue';
    import ProjectsForm from './ProjectsComponents/ProjectsForm.vue';

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
      content: 'Oukline | Design, Branding & Web Development Studio'
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
      content: 'https://oukline.com/projects'
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
      content: 'Oukline | Design, Branding & Web Development Studio'
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