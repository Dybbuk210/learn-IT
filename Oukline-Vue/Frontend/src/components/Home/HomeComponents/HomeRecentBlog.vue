<template>
    <div class="recent-blogs">

        <div class="inner-container box-padding-gap">
            <div class="box-up">
                <h2 class="title">Recent blog post</h2>
                <div class="img-box">
                    <img :src="imageUrl" alt="" v-if="latestBlog" class="main-img" />
                </div>
            </div>
            <div class="box-down">
                <div class="box-down-flex">
                    <div class="box-down-left" v-if="latestBlog">
                        <h3 class="blog-name">{{ latestBlog.MainTitle }}</h3>
                        <p class="blog-text">{{ latestBlog.CardText }}</p>
                        <div class="box-down-ul">
                            <ul v-if="latestBlog">
                              <li v-for="(tag, index) in latestBlog.tags" :key="index">{{ tag }}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="box-down-right">
                        <button class="main-style-button switch-btn blog-button ">
                            <span class="button-text switch-text switch-current">
                                Read post               
                                <img src="../../../assets/icons/RightArrowWhite.svg" alt="" class="button-icon">
                            </span>
                            <span class="button-text switch-text switch-next">
                                Read post
                                <img src="../../../assets/icons/RightArrowWhite.svg" alt="" class="button-icon">
                            </span>
                        </button> 
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import blogs from '../../../blogdata.json';

const latestBlog = ref(null);

onMounted(() => {
  latestBlog.value = blogs[blogs.length - 1];
});

const imageUrl = computed(() => {
  if (!latestBlog.value) return '';
  return new URL(`../../../assets/img/Blog/${latestBlog.value.MainImage}`, import.meta.url).href;
});
</script>

<style scoped>
    .box-padding-gap {
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        padding-bottom: 200px;
    }

    .box-up {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
    }

    .title, .blog-name {
        color: var(--main-color-black);
    }

    .title {
        font-size: 25px;
        font-weight: 300;
    }

    .box-down-left, .box-down-right {
        width: 50%;
    }

    .box-down-left {
        display: flex;
        flex-direction: column;
        row-gap: 25px;
    }

    .box-down-right {
        display: flex;
        justify-content: flex-end;
    }

    .box-down-flex {
        display: flex;
    }

    .box-down-ul ul {
        display: flex;
        column-gap: 5px;
    }

    .blog-name {
        font-size: 25px;
        font-weight: 400;
    }

    .blog-text {
        font-size: 16px;
        font-weight: 300;
        color: var(--main-second-color);
    }

    .img-box {
        width: 100%;
        height: 400px;
        overflow: hidden;
    }

    .main-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        display: block;
    }


    .blog-button {
        align-self: flex-end;
        padding: 28px 90px;
    }

    ul li {
        border: solid 1px #EAECF0;
        border-radius: 20px;
        padding: 10px;
        font-size: 12px;
        font-weight: 300;
        color: var(--main-color-black);
    }

    @media (max-width: 600px) {
        .box-down-flex {
            flex-direction: column;
            row-gap: 25px;
        }

        .box-down-right {
            justify-content: start;
        }

        .box-down-left, .box-down-right {
            width: 100%;
        }

        .box-padding-gap {
            padding-bottom: 100px;
        }
    }
</style>