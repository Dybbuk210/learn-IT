<template>
    <div class="bottom-space">
        <div class="video-box" @click="toggleFullScreen">
            <video  ref="videoRef" src="../../../assets/Herovideo.mp4" autoplay muted loop playsinline controlslist="nodownload nofullscreen noremoteplayback"  disablepictureinpicture></video>
            <button class="video-button switch-btn">
                <span class="switch-text switch-current">
                    <img src="../../../assets/icons/ArrowUP.svg" alt="" class="video-btn-img">
                </span>
                <span class="switch-text switch-next">
                    <img src="../../../assets/icons/ArrowUP.svg" alt="" class="video-btn-img">
                </span>
            </button>
        </div>
        <div class="inner-container box-end">
            <a class="hero-link" @click="goToProjects">Show all projects</a>
        </div>
        <div class="inner-container">
            <h1 class="hero-title">
                <span class="title-up">Building Strong Brands with</span>
                <span class="title-down">Design, Development & Strategy</span>
            </h1>
            <div class="hero-down-box">
                <div class="text-box">
                    <p class="text-up">Introduction:</p>
                    <div class="text-down">
                        <p><span class="text-style-light">Helping</span> modern brands</p>
                        <span class="text-down-img"><img src="../../../assets/icons/SmallStar.svg" alt="Favorite icon"></span>
                        <p><span class="text-style-light">stand out with</span></p>
                        <p><span class="text-style-light"></span> smart design and strategy.</p>
                    </div>
                </div>
                <button class="hero-button main-style-button switch-btn" @click="goToContact">
                    <span class="switch-text switch-current">Get a quote //</span>
                    <span class="switch-text switch-next">Get a quote //</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const videoRef = ref(null)

const toggleFullScreen = () => {
  const videoEl = videoRef.value

  if (!document.fullscreenElement) {
    videoEl.requestFullscreen().catch(err => {
      console.error(`Error attempting to enable full-screen mode: ${err.message}`)
    })
  } else {
    document.exitFullscreen()
  }
}

import { useButtonsNav } from '../../../ButtonsNav'
const { goToContact } = useButtonsNav()
const { goToProjects} = useButtonsNav()
</script>

<style scoped>
    .video-box {
        position: relative;
        max-width: 1400px;
        width: 92%;
        margin: 0 auto;
        border-radius: 6px;
        overflow: hidden;
    }

    /* css video-box pre upravu rozmerov */
    .video-box {
        max-height: 550px;
        aspect-ratio: 16 / 9;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        cursor: pointer;
    }

    /* Video Button */

    .video-button {
        position: absolute;
        right: 5%;
        bottom: 8%;
        background: transparent;
        border: solid 2px #FFFFFFCC;
        padding: 35px;
        border-radius: 50%;
        transform: rotate(45deg);
    }

    .video-btn-img {
        width: 35px;
        height: 34px;
    }
    /* Video Button */


    video {
        width: 100%;
        height: auto;
    }

    .hero-link {
        cursor: pointer;
        font-size: 18px;
        font-weight: 300;
        color: var(--main-color-black);
        text-decoration: underline;
        padding-top: 10px;
        padding-bottom: 40px;
        transition: opacity 0.4s ease;
        opacity: 1;
    }

    .hero-link:hover {
        opacity: 0.6;
    }

    .box-end {
        display: flex;
        justify-content: end;
    }

    .hero-title {
        display: flex;
        flex-direction: column;
        margin-bottom: 45px;
    }

    .title-up, .title-down {
        font-size: 50px;
        font-weight: 300;
    }

    .title-up {
        color: var(--main-second-color);
    }

    .title-down {
        color: var(--main-color-black);
    }

    .text-box {
        row-gap: 6px;
    }

    .text-box p {
        font-weight: 400;
        font-size: 20px;
    }

    .text-up {
        color: var(--main-color-black);
    }

    .text-down {
        display: flex;
        align-items: center;
        column-gap: 8px;
    }
    
    .text-down-img {
        width: 34px;
        height: 34px;
    }

    .hero-down-box {
        display: flex;
        justify-content: space-between;
    }
    
    .bottom-space {
        padding-bottom: 170px;
        padding-top: 100px;
    }

    .hero-button {
        padding: 29px 87px;
    }

    @media (max-width: 1100px) {
        .hero-down-box {
            flex-direction: column;
            row-gap: 40px;
        }

        .hero-button {
            max-width: 174px;
        }
    }

    @media (max-width: 700px) {
        .text-down {
            flex-wrap: wrap;
        }

        .video-box {
            width: 100%;
            border-radius: 0;
        }
    }


    @media (max-width: 600px) {
        .bottom-space {
            padding-bottom: 100px;
        }
    }

    @media (max-width: 500px) {
    .title-up, .title-down {
            font-size: 28px;
        }

        .video-box {
            height: 400px;
        }

        .video-box video {
            width: auto;
            height: 100%;
        }

        .text-box p{
            font-size: 16px;
        }

        .hero-button {
            max-width: none;
        }
    }
</style>