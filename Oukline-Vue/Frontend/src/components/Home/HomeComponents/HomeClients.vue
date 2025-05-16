<template>
    <div class="inner-container clients-container" id="clients">
        <div class="inner-box">
            <div class="box-up">
                <h2 class="box-up-title">
                    <span class="title-span">Clients & Partners speak:</span> 
                    <br>
                    Real stories, Real impact, True partnerships
                </h2>
                <p class="box-up-text">
                    <span class="text-style-light">See how</span> our collaborations have helped brands 
                    grow and succeed <span class="text-style-light">- in the words of those we've worked with.</span>
                </p>
            </div>

            <div class="box-slider">
                <div class="slider-up">
                    <div class="slider-img">
                        <img :src="getImageUrl(reviews[currentIndex].CardImg)" alt="">
                        <img v-if="reviews[currentIndex].CardImgB" :src="getImageUrl(reviews[currentIndex].CardImgB)" alt="">
                    </div>
                    <p class="slider-text" v-html="reviews[currentIndex].CardText"></p>
                    <h3 class="name-box">{{ reviews[currentIndex].CardName }}</h3>
                    </div>

                    <!-- KONTROLY -->
                    <div class="slider-down">
                    <button class="previos-btn" @click="prev">
                        <img src="../../../assets/icons/SliderArrow.svg" alt="" class="slider-btn-left"> Previous
                    </button>

                    <div class="pagginator-box">
                        <span
                        v-for="(item, index) in reviews"
                        :key="item.id"
                        class="dot"
                        :class="{ active: index === currentIndex }"
                        @click="goTo(index)"
                        ></span>
                    </div>

                    <button class="next-btn" @click="next">
                        Next <img src="../../../assets/icons/SliderArrow.svg" alt="" class="slider-btn-right">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import reviews from '../../../reviews.json' // uprav cestu podľa svojho projektu

const currentIndex = ref(0)
let interval = null

// Funkcia: spustí autoplay
const startAutoplay = () => {
  if (interval) return
  interval = setInterval(() => {
    next(false) // posunie bez ďalšieho resetu
  }, 5000)
}

// Funkcia: pozastaví autoplay a znova ho spustí po delay (napr. 5 sekúnd)
const resetAutoplay = (delay = 5000) => {
  clearInterval(interval)
  interval = null
  setTimeout(() => {
    startAutoplay()
  }, delay)
}

// Posun doprava
const next = (manual = true) => {
  currentIndex.value = (currentIndex.value + 1) % reviews.length
  if (manual) resetAutoplay()
}

// Posun doľava
const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + reviews.length) % reviews.length
  resetAutoplay()
}

// Klik na konkrétny bod
const goTo = (index) => {
  currentIndex.value = index
  resetAutoplay()
}

// Vygeneruje cestu k obrázku
const getImageUrl = (img) => {
  return new URL(`../../../assets/img/Reviews/${img}`, import.meta.url).href
}

// Spustenie po načítaní komponentu
onMounted(() => {
  startAutoplay()
})

// Zastavenie pri odchode
onUnmounted(() => {
  clearInterval(interval)
})
</script>


<style scoped>
    .clients-container {
        display: flex;
        justify-content: center;
        padding-top: 200px;
        padding-bottom: 200px; 
    }

    .inner-box {
        display: flex;
        flex-direction: column;
        width: 60%;
        row-gap: 100px;
    }

    .box-up {
        display: flex;
        flex-direction: column;
        row-gap: 45px;
    }

    .box-up-title {
        font-size: clamp(28px, 4vw, 50px);
        font-weight: 300;
    }

    .box-up-title, .box-up-text, .slider-tex, .name-box {
        color: var(--main-color-black);
    }

    .title-span {
        color: var(--main-second-color);
    }

    .box-up-text {
        font-size: clamp(16px, 2.5vw, 28px);
        font-weight: 400;
    }

    .box-slider {
        display: flex;
        flex-direction: column;
        row-gap: 40px;
    }

    .slider-img {
        display: flex;
        height: auto;
    }

     .slider-img img {
        width: 60px;
        height: auto;
        box-shadow: 0px 10px 7px -4px rgba(0, 0, 0, 0.15);
    }

    .slider-up {
        background-color: #F9FAFB;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 25px;
        border-radius: 3px;
        padding: 50px 60px;
    }

    .slider-text {
        font-size: clamp(16px, 2.5vw, 25px);
        font-weight: 400;
    }

    .name-box {
        font-size: clamp(16px, 2.5vw, 18px);
        font-weight: 400;
    }

    .slider-down {
        display: flex;
        border-top: solid 1px #EAECF0;
        justify-content: space-between;
        padding-top: 20px;
    }

    .previos-btn, .next-btn {
        display: flex;
        column-gap: 2px;
        align-items: center;
        color: var(--main-color-black);
        font-size: 20px;
        font-weight: 500;
        transition: opacity 0.4s ease;
        opacity: 1;
    }

    .slider-btn-left, .slider-btn-right {
        height: 40px;
        width: 30px;
    }

    .slider-btn-right {
        transform: rotate(180deg);
    }

    .pagginator-box {
        display: flex;
        align-items: center;
        gap: 11px;
    }

    .dot {
        background-color: var(--main-second-color);
        width: 8px;
        height: 8px;
        border-radius: 50%;
    }

    .active {
        background-color: var(--main-color-black);
        outline: 1px solid var(--main-color-black);
        outline-offset: 8px;
        margin: 0px 8px;
    }

    @media (max-width: 1100px) {
        .inner-box {
            width: 100%;
        }

        .slider-up {
            padding: 30px 10px;
        }
    }

    @media (max-width: 600px) {
        .clients-container {
            padding-top: 100px;
            padding-bottom: 100px;
        }

        .box-up {
            row-gap: 20px;
        }

        .inner-box {
            row-gap: 50px;
        }

        .previos-btn, .next-btn {
            display: none;
        }

        .slider-down {
            justify-content: center;
            padding-top: 30px;
        }
    }

    @media (max-width: 500px) {
        br {
            display: none;
        }

        .previos-btn, .next-btn {
            font-size: 14px;
            font-weight: 600;
            column-gap: 0px;
        }

        .slider-btn-left, .slider-btn-right {
            width: 20px;
            height: 30px;
        }
    }
</style>