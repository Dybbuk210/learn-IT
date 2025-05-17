<template>
    <div class="inner-container main-padding-top">
  
      <div class="main-box">
        <div class="box-up">
          <!-- Hlavný nadpis ako HTML -->
          <h2 class="main-title" v-if="blog" v-html="blog.MainTitle"></h2>
  
          <!-- Úvodný text ako HTML -->
          <p class="main-text" v-if="blog" v-html="blog.MainText"></p>
  
          <!-- Tagy ostávajú ako plain text -->
          <ul class="main-points" v-if="blog">
            <li class="main-point" v-for="(tag, index) in blog.tags" :key="index">{{ tag }}</li>
          </ul>
  
          <div class="main-img">
            <img :src="getImageUrl(blog.MainImage)" alt="" v-if="blog" class="main-img" />
          </div>
        </div>
  
        <div class="box-down">
          <div class="blog-import-data">
            <div class="blog-import-data" v-if="blog">
              <template v-for="(block, index) in blog.content" :key="index">
                <!-- Nadpis -->
                <h3 v-if="block.type === 'title'" class="blog-title" v-html="block.text"></h3>
  
                <!-- Normálny text -->
                <p v-if="block.type === 'text' && block.class !== 'blog-text-second'" class="blog-text" v-html="block.text"></p>
  
                <!-- Sekundárny text -->
                <p v-if="block.type === 'text' && block.class === 'blog-text-second'" class="blog-text-second" v-html="block.text"></p>
  
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
                    <h3 class="list-title" v-html="item.title"></h3>
                    <p class="list-text" v-html="item.text"></p>
                  </li>
                </ol>
              </template>
            </div>
          </div>
  
          <!-- Statické Socials -->
          <div class="socials-none">
            <p class="blog-socials-title">Share post:</p> 
            <ul class="blog-socials">
              <li><a href=""></a><img src="../../assets/icons/BlogSocials/Xicon.svg" alt=""></li>
              <li><a href=""></a><img src="../../assets/icons/BlogSocials/Instagram.svg" alt=""></li>
              <li><a href=""></a><img src="../../assets/icons/BlogSocials/linkedin.svg" alt=""></li>
          </ul>
          </div>
        </div>
      </div>
  
      <div class="recommended-blog-posts">
        <div class="posts-up">
          <h3 class="posts-title">Recommended blog posts</h3>
          <button class="second-btn-style switch-btn posts-button" @click="goToBlogs">
            <span class="button-text switch-text switch-current">
              View all posts
              <img src="../../assets/icons/RightArrowWhite.svg" alt="" class="button-icon">
            </span>
            <span class="button-text switch-text switch-next">
              View all posts
              <img src="../../assets/icons/RightArrowWhite.svg" alt="" class="button-icon">
            </span>
          </button> 
        </div>
        <div class="break"></div>
        <div class="posts-down">
          <BlogCard v-for="(item, index) in recommendedBlogs" :key="item.id" :blog="item" />
        </div>
      </div>
    </div>
  </template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useButtonsNav } from '../../ButtonsNav'
import blogData from '../../blogdata.json'
import BlogCard from '../GlobalComponents/BlogCard.vue'

const route = useRoute()
const blog = computed(() => blogData.find(item => item.id === route.params.id))

const getImageUrl = (path) => {
  return new URL(`../../assets/img/Blog/${path}`, import.meta.url).href
}

const { goToBlogs} = useButtonsNav()

const showMobileMenu = ref(false)

const toggleMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const closeMenu = () => {
  showMobileMenu.value = false
}

// Zakáž scrollovanie tela pri otvorenom menu
watch(showMobileMenu, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : 'auto'
})

// Resetni menu pri zmene veľkosti okna
const handleResize = () => {
  if (window.innerWidth > 980 && showMobileMenu.value) {
    showMobileMenu.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)

  document.querySelectorAll('.drop-down-li').forEach(item => {
    let timeout
    const dropdown = item.querySelector('.drop-down')

    item.addEventListener('mouseenter', () => {
      clearTimeout(timeout)
      dropdown.classList.add('show')
    })

    item.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        dropdown.classList.remove('show')
      }, 300)
    })
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

const recommendedBlogs = computed(() => {
  // Vyfiltruj blogy okrem aktuálneho
  const otherBlogs = blogData.filter(item => item.id !== route.params.id)

  // Zamiešaj poradie – Fisher–Yates shuffle
  for (let i = otherBlogs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[otherBlogs[i], otherBlogs[j]] = [otherBlogs[j], otherBlogs[i]]
  }

  // Vráť prvé 3
  return otherBlogs.slice(0, 3)
})
</script>


<style scoped>
  .main-padding-top {
    padding-top: 100px;
  }

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
        font-family: "Literata", serif;
        color: var(--main-color-black);
        font-size: clamp(16px, 3vw, 18px);
        font-weight: 300;
        padding-bottom: 70px;
    }

    .blog-text-second {
        font-family: "Literata", serif;
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
        font-family: "Literata", serif;
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

    .socials-none {
      display: none;
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

        .main-box {
          padding-top: 0px;
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