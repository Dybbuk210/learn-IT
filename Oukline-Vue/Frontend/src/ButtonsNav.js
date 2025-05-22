// src/composables/ButtonsNav.js
import { useRouter } from 'vue-router'

export function useButtonsNav() {
  const router = useRouter()

  const goToContact = () => {
    router.push({ path: '/intro' })
  }

   const goToProjects = () => {
    router.push({ path: '/projects', hash: '' })
  }

    const goToBlogs = () => {
    router.push({ path: '/blogs', hash: '' })
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