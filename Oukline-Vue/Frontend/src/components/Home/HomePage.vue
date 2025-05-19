<template>
   <HomeHero />
   <HomePartners />
   <HomeServices />
   <HomeJoin />
   <HomeProjects /> 
   <HomeContact />
   <HomeAbout />
   <OuklineTeam />
   <HomeProces />
   <HomeClients />
   <HomeRecentBlogs />
</template>

<script setup>
    import HomeHero from './HomeComponents/HomeHero.vue'
    import HomePartners from './HomeComponents/HomePartners.vue'
    import HomeServices from './HomeComponents/HomeServices.vue'
    import HomeJoin from './HomeComponents/HomeJoin.vue'
    import HomeProjects from './HomeComponents/HomeProjects.vue'
    import HomeContact from './HomeComponents/HomeContact.vue'
    import HomeAbout from './HomeComponents/HomeAbout.vue'
    import OuklineTeam from '../GlobalComponents/OuklineTeam.vue'
    import HomeProces from './HomeComponents/HomeProces.vue'
    import HomeClients from './HomeComponents/HomeClients.vue'
    import HomeRecentBlogs from './HomeComponents/HomeRecentBlog.vue'

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
      content: 'Helping brands grow through design, development and strategy.'
    },
    {
      property: 'og:image',
      content: 'https://oukline.com/assets/og-image-default.png'
    },
    {
      property: 'og:url',
      content: 'https://oukline.com/'
    },
    {
      property: 'og:type',
      content: 'website'
    },

    // Twitter
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
      content: 'Helping brands grow through design, development and strategy.'
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