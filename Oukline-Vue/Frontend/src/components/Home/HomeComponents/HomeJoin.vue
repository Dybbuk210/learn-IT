<template>
    <div class="inner-container">
        <div class="main-box">
            <div class="main-box-up">
                <div class="img-box">
                    <img src="../../../assets/img/Mainrecense.png" alt="Company member and Logo - Atheros">
                </div>
                <p class="up-text">
                    <span class="text-style-light">Working with team was</span> such an amazing experience. <span class="text-style-light">They are</span> incredibly skilled & reliable. <span class="text-style-light">We received a</span> smooth, usable design prototype <span class="text-style-light">even</span> before the deadline. <span class="text-style-light">I can</span> highly recommend hiring them.
                </p>
                <a href="" class="up-link">David Mráz - Atheros</a>
            </div>
            <button class="main-style-button switch-btn services-button" @click="goToContact">
                    <span class="button-text switch-text switch-current">
                        Join our satisfied partners
                        <img src="../../../assets/icons/RightArrowWhite.svg" alt="Arrow icon" class="button-icon">
                    </span>
                    <span class="button-text switch-text switch-next">
                        Join our satisfied partners
                        <img src="../../../assets/icons/RightArrowWhite.svg" alt="Arrow icon" class="button-icon">
                    </span>
            </button> 
        </div>
    </div>
</template>

<script setup>
import { useButtonsNav } from '../../../ButtonsNav'
const { goToContact } = useButtonsNav()
</script>

<style scoped>
    .main-box {
        max-width: 50%;
        margin: 0 auto;
        row-gap: 70px;
        padding-bottom: 200px;
    }

    .main-box, .main-box-up {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .main-box-up {
        row-gap: 25px;
    }

    .up-text {
        font-size: 25px;
        font-weight: 400;
        text-align: center;
    }

    .up-link {
        font-size: 18px;
        font-weight: 400;
        color: var(--main-color-black);
    }

    button {
        padding: 26px 131px;
        width: auto;
    }

    @media (max-width: 1400px) {
        .main-box {
            max-width: 70%;
        }
    }

    @media (max-width: 800px) {
        .up-text {
            font-size: 18px;
        }
    }

    @media (max-width: 600px) {
        .main-box {
            padding-bottom: 100px;
        }
    }

    @media (max-width: 500px) {
        .main-box {
            max-width: none;
        }

        button {
            width: 100%;
        }
    }
</style>