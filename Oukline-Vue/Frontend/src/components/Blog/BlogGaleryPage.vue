<template>
    <BlogGaleryTop />
    <AllBlogs />
</template>

<script setup>
    import BlogGaleryTop from './BlogComponents/BlogGaleryTop.vue';
    import AllBlogs from './BlogComponents/AllBlogs.vue';

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
      content: 'Oukline Blogs'
    },
    {
      property: 'og:description',
      content: 'Read expert insights on digital design, UX/UI, branding and strategy.'
    },
    {
      property: 'og:image',
      content: 'https://oukline.com/assets/og-image-default.png'
    },
    {
      property: 'og:url',
      content: 'https://oukline.com/blogs'
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
      content: 'Oukline Blogs'
    },
    {
      name: 'twitter:description',
      content: 'Read expert insights on digital design, UX/UI, branding and strategy.'
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