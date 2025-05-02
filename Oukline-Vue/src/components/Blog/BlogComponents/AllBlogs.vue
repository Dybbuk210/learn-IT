<template>
    <div class="inner-container main-box">
        <h2 class="main-title">All blog posts</h2>
        <div class="break"></div>  <!-- prázdny div služi len na effekt -->
        <div class="blog-gallery">
            <BlogCard v-for="(blog, index) in blogData" :key="blog.id" :blog="blog" />
        </div>
        <div class="break break-padding"></div> <!-- prázdny div služi len na effekt -->
      <!--
        Zatiaĺ nebude vužité
        <div class="galery-function">
            <button></button>
            <div class="pagginator"></div>
            <button></button>  
        </div>
        -->
    </div>
</template>

<script setup>
import blogData from '../../../blogdata.json'
import BlogCard from '../../GlobalComponents/BlogCard.vue';
</script>

<style scoped>
    .main-box {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
        padding-top: 50px;
        padding-bottom: 200px;
    }

    .main-title {
        color: var(--main-color-black);
        font-size: 25px;
        font-weight: 400;
    }

    .break {
        border-bottom: 1px solid #EAECF0;
    }

    .break-padding {
        padding-top: 20px;
    }

    .blog-gallery {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 35px;
        row-gap: 40px;
    }

    ul {
        display: flex;
        column-gap: 10px;
    }

    ul li {
        border: solid 1px #EAECF0;
        border-radius: 20px;
        padding: 10px;
        font-size: 12px;
        font-weight: 300;
        color: var(--main-color-black);
    }

    ul li a {
        color: var(--main-color-black);
        font-size: 12px;
        font-weight: 300;
    }

    @media (max-width: 1200px) {
        .blog-gallery {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 800px) {
        .blog-gallery {
            column-gap: 20px;
        }
    }

    @media (max-width: 720px) {
        .blog-gallery   {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    @media (max-width: 600px) {
        .main-box {
            padding-bottom: 100px;
        }

    }
</style>