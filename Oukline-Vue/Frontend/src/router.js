import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './components/Home/HomePage.vue'
import AboutPage from './components/About/AboutPage.vue'
import BlogGaleryPage from './components/Blog/BlogGaleryPage.vue'
import BlogPostPage from './components/Blog/BlogPage.vue'
import InterviewGalery from './components/Interviews/InterviewsGalery.vue'
import Interview01 from './components/Interviews/InterviewsComponents/Interwiew01.vue'
import ProjectsGalery from './components/Projects/ProjectsGalery.vue'
import Project01 from './components/Projects/ProjectsComponents/ProjectPage01.vue'
import FormPage from './components/FormPage/FormPage.vue'


const routes = [
    { path: '/',
    component: HomePage,
      meta: {
        title: 'Oukline | Design, Branding & Development Studio',
        description: 'We help brands grow through UX/UI design, development and creative strategy.',
        canonical: 'https://oukline.com/'
      }
    },
    { path: '/about',
      component: AboutPage,
        meta: {
          title: 'About Oukline',
          description: 'Meet the team behind Oukline.',
          canonical: 'https://oukline.com/about'
        }
    },
    { path: '/bloggalery',
       component: BlogGaleryPage,
        meta: {
          title: 'Oukline Blogs',
          description: 'Read expert insights on digital design, UX/UI, branding and strategy.',
          canonical: 'https://oukline.com/blogs'
        }
      },
    { path: '/blog/:id', component: BlogPostPage },
    { path: '/interviewgalery',
       component: InterviewGalery,
         meta: {
            title: 'Oukline interviews with Creatives & Founders',
            description: 'Insightful interviews with founders, designers and developers sharing their stories, challenges.',
            canonical: 'https://oukline.com/interviews'
          }
    },
    { path: '/interview01', component: Interview01 },
    { path: '/projectsgalery',
       component: ProjectsGalery,
        meta: {
            title: 'Oukline Projects',
            description: 'We help brands grow through UX/UI design, development and creative strategy.',
            canonical: 'https://oukline.com/projects'
          }
    },
    { path: '/project01', component: Project01 },
    { path: '/formpage',
       component: FormPage,
        meta: {
            title: 'Redy for new collaborations',
            description: 'Let’s talk! - tell us what you’re building, and we’ll jump in.',
            canonical: 'https://oukline.com/form'
          }
    }

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