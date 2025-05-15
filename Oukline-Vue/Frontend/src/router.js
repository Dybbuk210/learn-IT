import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './components/Home/HomePage.vue'
import AboutPage from './components/About/AboutPage.vue'
import BlogGaleryPage from './components/Blog/BlogGaleryPage.vue'
import BlogPostPage from './components/Blog/BlogPage.vue'
import InterviewGalery from './components/Interviews/InterviewsGalery.vue'
import Interview01 from './components/Interviews/InterviewsComponents/Interwiew01.vue'
import ProjectsGalery from './components/Projects/ProjectsGalery.vue'
import Project01 from './components/Projects/ProjectsComponents/ProjectPage01.vue'


const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/bloggalery', component: BlogGaleryPage },
    { path: '/blog/:id', component: BlogPostPage },
    { path: '/interviewgalery', component: InterviewGalery },
    { path: '/interview01', component: Interview01 },
    { path: '/projectsgalery', component: ProjectsGalery },
    { path: '/project01', component: Project01 }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      // Štandardný posun
      let offset = 100

      // Výnimka pre konkrétne id
      if (to.hash === '#services') {
        offset = 0
      }
      if (to.hash === '#contactform') {
        offset = 140
      }
      if (to.hash === '#clients') {
        offset = -100
      }

      return {
        el: to.hash,
        top: offset,
        behavior: 'smooth'
      }
    }

    return { top: 0 }
  }
})

export default router