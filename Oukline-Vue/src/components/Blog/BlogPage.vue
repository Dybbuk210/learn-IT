<template>
    <div class="inner-container">

        <div class="main-box">
            <div class="box-up">
                <h2 class="main-title" v-if="blog" v-html="blog.MainTitle"></h2>
                <p class="main-text" v-if="blog">{{ blog.MainText }}</p>
                <ul class="main-points" v-if="blog"> <!-- sem pôjdu tags -->
                    <li class="main-point" v-for="(tag, index) in blog.tags" :key="index">{{ tag }}</li>
                </ul>
                <div class="main-img">
                    <img :src="getImageUrl(blog.MainImage)" alt="" v-if="blog" class="main-img" />
                </div>
            </div>
            <div class="box-down">
                <div class="blog-import-data"> <!-- tu sa vitvoria data s clasami čo sme pripravovali pre title h3 pre texti p pre obrasky img pre  listi budu ol v nom li s h3 a p  -->
                    <div class="blog-import-data" v-if="blog">
                        <template v-for="(block, index) in blog.content" :key="index">
                            
                            <!-- Nadpis -->
                            <h3 v-if="block.type === 'title'" class="blog-title">{{ block.text }}</h3>

                            <!-- Normálny text -->
                            <p v-if="block.type === 'text' && block.class !== 'blog-text-second'" class="blog-text">
                            {{ block.text }}
                            </p>

                            <!-- Sekundárny text -->
                            <p v-if="block.type === 'text' && block.class === 'blog-text-second'" class="blog-text-second">
                            {{ block.text }}
                            </p>

                            <!-- Obrázok -->
                            <img
                            v-if="block.type === 'image'"
                            :src="getImageUrl(block.src || block.MainImage)"
                            :alt="block.alt || 'Blog image'"
                            class="blog-img"
                            />

                            <!-- Zoznam -->
                            <ol v-if="block.type === 'list'" class="blog-list">
                            <li v-for="(item, i) in block.items" :key="i">
                                <h3 class="list-title">{{ item.title }}</h3>
                                <p class="list-text">{{ item.text }}</p>
                            </li>
                            </ol>

                        </template>
                    </div>
                </div>

                <!-- Blog-Socials toto su jedine statické prvky  -->
                <p class="blog-socials-title">Share post:</p> 
                <ul class="blog-socials">
                    <li><a href=""></a><img src="../../assets/icons/BlogSocials/Xicon.svg" alt=""></li>
                    <li><a href=""></a><img src="../../assets/icons/BlogSocials/Instagram.svg" alt=""></li>
                    <li><a href=""></a><img src="../../assets/icons/BlogSocials/linkedin.svg" alt=""></li>
                    <li><a href=""></a><img src="../../assets/icons/BlogSocials/Facebook.svg" alt=""></li>
                </ul>
            </div>
        </div>

        <div class="recommended-blog-posts">
            <div class="posts-up">
                <h3 class="posts-title">Recommended blog posts</h3>
                <button class="second-btn-style switch-btn posts-button">
                    <span class="button-text switch-text switch-current">
                        Case studies
                        <img src="../../assets/icons/RightArrowWhite.svg" alt="" class="button-icon">
                    </span>
                    <span class="button-text switch-text switch-next">
                        Case studies
                        <img src="../../assets/icons/RightArrowWhite.svg" alt="" class="button-icon">
                    </span>
                </button> 
            </div>
            <div class="break"></div> <!-- prázdny div služi len na effekt -->
            <div class="posts-down"> <!-- sem pôjdu 3 náhodné blogy -->
                <BlogCard v-for="(item, index) in recommendedBlogs" :key="item.id" :blog="item" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import blogData from '../../blogdata.json'
import BlogCard from '../GlobalComponents/BlogCard.vue'

const route = useRoute()
const blog = ref(null)
const recommendedBlogs = ref([])

const getImageUrl = (imgPath) => {
    return new URL(`../../assets/img/Blog/${imgPath}`, import.meta.url).href
}

// Funkcia, ktorá načíta blog a odporúčané blogy
const loadBlog = () => {
    blog.value = blogData.find(item => item.id === route.params.id)
    const otherBlogs = blogData.filter(item => item.id !== route.params.id)
    const shuffled = otherBlogs.sort(() => 0.5 - Math.random())
    recommendedBlogs.value = shuffled.slice(0, 3)
}

onMounted(() => {
    loadBlog()
})

// Sleduj zmeny ID v URL a vždy znovu načítaj dáta
watch(() => route.params.id, () => {
    loadBlog()
})
</script>

<style scoped>
    .main-box {
        width: 60%;
        margin: 0 auto;
        padding-top: 54px;
    }

    .box-up {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
    }

    .main-title {
        color: var(--main-color-black);
        font-size: clamp(28px, 4vw, 50px);
        font-weight: 300;
    }

    .main-text {
        color: var(--main-color-black);
        font-size: clamp(16px, 4vw, 20px);
        font-weight: 300;
        max-width: 70%;
    }

    .main-points {
        display: flex;
        flex-wrap: wrap;
        column-gap: 10px;
        row-gap: 10px;
    }

    .main-point {
        border: solid 1px #15151566;
        border-radius: 20px;
        padding: 10px;
        font-size: 12px;
        font-weight: 300;
        color: var(--main-color-black);
    }

    .box-down {
        padding-top: 50px;
        padding-bottom: 200px;
    }

    /* Bloh štíli pre dáta */
    .blog-title {
        color: var(--main-color-black);
        font-size: clamp(20px, 4vw, 25px);
        font-weight: 500;
        padding-bottom: 20px;
    }

    .blog-text {
        color: var(--main-color-black);
        font-size: clamp(16px, 3vw, 18px);
        font-weight: 300;
        padding-bottom: 70px;
    }

    .blog-text-second {
        color: var(--main-color-black);
        font-size: clamp(16px, 3vw, 18px);
        font-weight: 400;
        padding-bottom: 70px;
    }

    .blog-img {
        object-fit: cover;
        padding-bottom: 70px;
    }

    .blog-list {
        list-style: decimal;
        padding-left: 1.5rem;
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        padding-bottom: 70px;
    }

    .list-title {
        color: var(--main-color-black);
        font-size: clamp(16px, 3vw, 18px);
        font-weight: 500;
    }

    .list-text {
        color: var(--main-color-black);
        font-size: clamp(16px, 3vw, 18px);
        font-weight: 300;
    }
    /* dáta koniec */

    .blog-socials-title {
        color: var(--main-color-black);
        font-size: 20px;
        font-weight: 400;
        padding-bottom: 15px;
    }

    .blog-socials {
        display: flex;
        column-gap: 20px;
    }

    .recommended-blog-posts {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
        padding-bottom: 200px;
    }

    .posts-up {
        display: flex;
        column-gap: 20px;
        justify-content: space-between;
    }

    .posts-title {
        color: var(--main-color-black);
        font-size: 25px;
        font-weight: 400;
        align-self: flex-end;
    }

    .posts-button {
        padding: 25px 84px;
    }

    .break {
        border-bottom: 1px solid #EAECF0;
    }

    .posts-down {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 20px;
        row-gap: 20px;
    }

    @media (max-width: 1240px) {
        .posts-down {
         grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 1200px) {
        .main-text {
            max-width: none;
        }
    }

    @media (max-width: 900px) {
        .main-box {
            width: 100%;
        }
    }

    @media (max-width: 840px) {
        .posts-down {
         grid-template-columns: repeat(1, 1fr);
        }
    }

    @media (max-width: 520px) {
        .posts-up {
            flex-direction: column;
            row-gap: 20px;
        }

        .posts-title {
            align-self: flex-start;
        }

        .recommended-blog-posts {
            padding-bottom: 100px;
        }
    }
</style>