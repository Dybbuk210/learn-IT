import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './components/Home/HomePage.vue'
import AboutPage from './components/About/AboutPage.vue'
import BlogGaleryPage from './components/Blog/BlogGaleryPage.vue'
import BlogPostPage from './components/Blog/BlogPage.vue'


const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/bloggalery', component: BlogGaleryPage },
    { path: '/blog/:id', component: BlogPostPage }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router