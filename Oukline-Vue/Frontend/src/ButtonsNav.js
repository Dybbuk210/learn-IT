// src/composables/ButtonsNav.js
import { useRouter } from 'vue-router'

export function useButtonsNav() {
  const router = useRouter()

  const goToContact = () => {
    router.push({ path: '/formpage' })
  }

   const goToProjects = () => {
    router.push({ path: '/projectsgalery', hash: '' })
  }

    const goToBlogs = () => {
    router.push({ path: '/bloggalery', hash: '' })
  }

  /* vzor pre import 
        @click="goToContact"  
        import { useButtonsNav } from '../../ButtonsNav'
        const { goToContact } = useButtonsNav()
  */

  return {
    goToContact,
    goToProjects,
    goToBlogs
  }
}