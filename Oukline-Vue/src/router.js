import { createRouter, createWebHistory } from 'vue-router'

// Tvoje stránky (komponenty)
import HomePage from './components/Home/HomePage.vue'
import AboutPage from './components/About/AboutPage.vue'
import BlogGaleryPage from './components/Blog/BlogGaleryPage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/bloggalery', component: BlogGaleryPage },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router