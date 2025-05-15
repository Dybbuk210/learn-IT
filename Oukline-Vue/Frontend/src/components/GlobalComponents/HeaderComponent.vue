<template>
<div class="sticky-header">
    <header class="inner-container">
        <router-link to="/" class="logo-box">
            <img src="../../assets/logo/Logo-B.svg" alt="Logo">
        </router-link>
        <div class="main-nav">
            <ul class="nav-bar-desktop">
                <li><router-link to="/#services" class="header-text-size">Services</router-link></li>
                <li class="drop-down-li">
                    <router-link to="/projectsgalery" class="header-text-size">Projects</router-link>
                    <ul class="drop-down">
                        <li><router-link to="/projectsgalery/#allprojects" class="header-text-size">Gallery</router-link></li>
                    </ul>
                </li>
                <li><router-link to="/#contactform" class="header-text-size">Pricing</router-link></li>
                <li><router-link to="/about" class="header-text-size">About</router-link></li>
                <li><router-link to="/#clients" class="header-text-size">Testimonials</router-link></li>
                <li class="drop-down-li">
                    <router-link to="/bloggalery" class="header-text-size">Blog</router-link>
                    <ul class="drop-down">
                        <li><router-link to="/interviewgalery" class="header-text-size">Interviews</router-link></li>
                    </ul>
                </li>
            </ul>
            <div class="nav-break"></div>
<!--             <button class="eng-sk header-text-size">En</button>   Zatiaľ deaktivovane -->
            <button class="nav-button main-style-button header-text-size switch-btn" @click="goToContact">
                <span class="button-text switch-text switch-current">
                        Apply to collaborate
                    </span>
                    <span class="button-text switch-text switch-next">
                        Let's talk
                    </span>
            </button>

            <button class="burger-open" @click="toggleMenu">
                <img src="../../assets/icons/BurgerMenu.svg" alt="" class="open" v-if="!showMobileMenu">
                <img src="../../assets/icons/crossicon.svg" alt="" class="close" v-else>
            </button>
        </div>
    </header>
    <div class="mobile-menu"  :class="{ active: showMobileMenu }" v-show="showMobileMenu">
        <div class="mobile-nav-box">
            <div class="mobile-up">
                <ul class="mobile-nav">
                    <li><a href="" class="mobile-nav-font">Services</a></li>
                    <li><a href="" class="mobile-nav-font">Projects</a></li>
                    <li><a href="" class="mobile-nav-font">Project gallery</a></li>
                    <li><a href="" class="mobile-nav-font">Pricing</a></li>
                    <li><a href="" class="mobile-nav-font">About</a></li>
                    <li><a href="" class="mobile-nav-font">Testimonials</a></li>
                    <li><a href="" class="mobile-nav-font">Blog</a></li>
                    <li><a href="" class="mobile-nav-font">Interviews</a></li>
                </ul>
            </div>
            <div class="mobile-down">
                <button class="light-btn-style switch-btn mobile-nav-button">
                    <span class="switch-text switch-current">Get a quote</span>
                    <span class="switch-text switch-next">Get a quote</span>
                </button>
                <ul class="mobile-socials">
                    <li><a href=""><img src="../../assets/footersocials/X.svg" alt=""></a></li>
                    <li><a href=""><img src="../../assets/footersocials/instagram.svg" alt=""></a></li>
                    <li><a href=""><img src="../../assets/footersocials/linkedin.svg" alt=""></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const showMobileMenu = ref(false)
const toggleMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

// Sleduj resize okna a resetuj menu pri návrate na desktop
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

import { useButtonsNav } from '../../ButtonsNav'
const { goToContact } = useButtonsNav()
</script>

<style scoped>
    .sticky-header {
        width: 100%;
        position: sticky;
        top: 0;
        z-index: 9999;
        background-color: #fff;
    }

    header, .main-nav {
        display: flex;
        align-items: center;
    }

    header {
        position: relative;
        padding: 20px 0;
        justify-content: space-between;
        z-index: 10;
        background-color: #fff;
    }

    .header-text-size {
        font-size: 15px;
    }

    .main-nav {
        column-gap: 30px;
    }

    /* drop-down */
    .main-nav li {
        position: relative;
    }

    .drop-down {
        position: absolute;
        top: 100%;
        left: -20px;
        background-color: #fff;
        list-style: none;
        margin-top: 10px;
        padding: 0px 20px 20px 20px;
        border-radius: 3px;
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.3s ease, transform 0.3s ease;
        pointer-events: none;
        z-index: 10;
        display: none;
    }

    .drop-down.show {
        display: block;
        opacity: 1;
        pointer-events: auto;
    }
  
    .drop-down li {
        margin-bottom: 10px;
    }

    .drop-down li:last-child {
        margin-bottom: 0;
    }

    ul li:hover .drop-down {
        display: block;
    }
    /* drop-down end */

    .main-nav .nav-bar-desktop {
        display: flex;
        column-gap: 35px;
        align-self: center;
    }

    .nav-button {
        padding: 20px 84px;
    }

    .nav-button-icon-box {
        width: 19px;
        height: 19px;
    }

    ul li a {
        font-size: 15px;
        color: var(--main-color-black);
        font-weight: 300;
    }

    
    ul li {
    transition: border-bottom 0.4s ease;
    border-bottom: solid 1px transparent;
    }

    ul li:hover {
        border-bottom: solid 1px var(--main-color-black);
    }

    .logo-box {
        display: flex;
        justify-content: center;
    }

    .eng-sk {
        background-color: transparent;
        font-weight: 300;
    }

    .nav-break {
        height: 22px;
        border-right: solid 2px #D9D9D9;
        align-self: center;
    }

    .burger-open {
        display: none;
    }

/* test */
.mobile-menu {
  display: flex;
  justify-content: center;
  align-items: center;  
  flex-direction: column;
  position: fixed;
  top: 74px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 74px);
  background-color: var(--main-color-black);
  z-index: 999;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  pointer-events: none;
  opacity: 0;
  overflow-y: auto;
}

.mobile-menu.active {
  transform: translateX(0);
  pointer-events: auto;
  opacity: 1;
}

.mobile-nav-box {
    width: 92%;
    display: flex;
    flex-direction: column;
    row-gap: 60px;
}

.mobile-nav-font {
    font-size: 25px;
    font-weight: 300;
    color: #fff;
}

.mobile-nav {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}

.mobile-nav li{
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
}

.mobile-socials {
    display: flex;
    column-gap: 25px;
}

.mobile-down {
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 35px;
}

.mobile-nav-button {
    width: 100%;
}
/* end testu */

    @media (max-width: 980px) {
        .eng-sk, .nav-break, .nav-btn-img, .main-nav .nav-bar-desktop {
            display: none;
        }

        .burger-open {
            display: block;
        }
    }

    @media (max-width: 600px) {
        .main-nav {
            column-gap: 15px;
        }

        .nav-button {
            padding: 17px 62px;
        }

        .button-icon {
            display: none;
        }
    }

    @media (min-width: 981px) {
        .mobile-menu {
            display: none;
        }
    }
</style>