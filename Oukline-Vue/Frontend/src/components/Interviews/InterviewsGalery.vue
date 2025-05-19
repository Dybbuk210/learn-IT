<template>
    <div>
        <TopInterviews />
        <AllInterviews />
    </div>
</template>

<script setup>
    import TopInterviews from './InterviewsComponents/TopInterviews.vue';
    import AllInterviews from './InterviewsComponents/AllInterviews.vue';

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
      content: 'Oukline interviews with Creatives & Founders'
    },
    {
      property: 'og:description',
      content: 'Insightful interviews with founders, designers and developers sharing their stories, challenges.'
    },
    {
      property: 'og:image',
      content: 'https://oukline.com/assets/og-image-default.png'
    },
    {
      property: 'og:url',
      content: 'https://oukline.com/interviews'
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
      content: 'Oukline interviews with Creatives & Founders'
    },
    {
      name: 'twitter:description',
      content: 'Insightful interviews with founders, designers and developers sharing their stories, challenges.'
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