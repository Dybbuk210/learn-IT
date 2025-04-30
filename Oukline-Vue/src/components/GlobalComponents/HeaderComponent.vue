<template>
    <header class="inner-container">
        <a href="" class="logo-box"><img src="../../assets/logo/Logo-B.svg" alt=""></a>
        <div class="main-nav">
            <ul class="nav-bar-desktop">
                <li><a href="" class="header-text-size">Services</a></li>
                <li class="drop-down-li">
                    <a href="" class="header-text-size">Projects</a>
                    <ul class="drop-down">
                        <li><a href="" class="header-text-size">Studies</a></li>
                        <li><a href="" class="header-text-size">Gallery</a></li>
                    </ul>
                </li>
                <li><a href="" class="header-text-size">Pricing</a></li>
                <li><router-link to="/about" class="header-text-size">About</router-link></li>
                <li><a href="" class="header-text-size">Testimonials</a></li>
                <li class="drop-down-li">
                    <router-link to="/bloggalery" class="header-text-size">Blog</router-link>
                    <ul class="drop-down">
                        <li><a href="" class="header-text-size">Interviews</a></li>
                    </ul>
                </li>
            </ul>
            <div class="nav-break"></div>
            <button class="eng-sk header-text-size">En</button>

            <button class="nav-button header-text-size switch-btn">
                <span class="button-text switch-text switch-current">
                        Schedule a call
                        <img src="../../assets/icons/RightArrow.svg" alt="" class="button-icon">
                    </span>
                    <span class="button-text switch-text switch-next">
                        Schedule a call
                        <img src="../../assets/icons/RightArrow.svg" alt="" class="button-icon">
                    </span>
            </button>

            <button class="burger-open">
                <img src="../../assets/icons/BurgerMenu.svg" alt="">
            </button>
        </div>
    </header>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
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
</script>

<style scoped>
    header, .main-nav {
        display: flex;
        align-items: center;
    }

    header {
        padding: 32px 0;
        justify-content: space-between;
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

    ul li:hover > a,
    ul li:hover > router-link {
        font-weight: 400;
    }
    /* drop-down end */

    .main-nav .nav-bar-desktop {
        display: flex;
        column-gap: 35px;
        align-self: center;
    }

    .nav-button {
        display: flex;
        justify-content: center;
        color: var(--main-color-black);
        background-color: #F5F5F5;
        font-weight: 400;
        padding: 20px 79px;
        border-radius: 3px;
        column-gap: 10px;
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
    border-bottom: solid 2px transparent;
    }

    ul li:hover {
        border-bottom: solid 2px var(--main-color-black);
    }

    ul li a:hover {
        font-weight: 400;
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

    @media (max-width: 980px) {
        .eng-sk, .nav-break, .nav-btn-img, .main-nav .nav-bar-desktop {
            display: none;
        }

        .burger-open {
            display: block;
        }
    }
</style>