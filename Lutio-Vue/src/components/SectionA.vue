<template>
    <div class="main.container">
        <div class="main-img">
                <img v-if="mainImg" :src="mainImg" alt="hlavný obrázok" />
        </div>
        <div class="inner-container">

            <div class="galery-container box-width">
                <h2 class="galery-title">{{ props.data['galery-title'] }}</h2>
                <div class="galery">
                    <div class="galery-left">
                        <article class="galery-card galery-card1">
                            <img v-if="galery01" :src="galery01" alt="">
                            <h3 class="galery-card-text">{{ props.data['galery-01-title'] }}</h3>
                        </article>
                        <article class="galery-card galery-card2">
                            <img v-if="galery02" :src="galery02" alt="">
                            <h3 class="galery-card-text">{{ props.data['galery-02-title'] }}</h3>
                            <p class="galery-card-text">{{ props.data['galery-02-text'] }}</p>
                        </article>
                    </div>

                    <div class="galery-right">
                        <article class="galery-card galery-card3">
                            <img v-if="galery03" :src="galery03" alt="">
                            <h3 class="galery-card-text">{{ props.data['galery-03-title'] }}</h3>
                            <p class="galery-card-text">{{ props.data['galery-03-text'] }}</p>
                        </article>
                        <article class="galery-card galery-card1">
                            <img v-if="galery04" :src="galery04" alt="">
                            <h3 class="galery-card-text">{{ props.data['galery-04-title'] }}</h3>
                        </article>
                    </div>
                </div>
            </div>

            <div class="down-container box-width">
                <div class="down-title-box">
                    <div class="down-title-a-box">
                        <h2 class="down-title-a">3 jednoduché</h2>
                    </div>
                    <h2 class="down-title-b">kroky</h2>
                </div>
                <div class="down-cards">
                    <article class="down-card">
                        <img v-if="stepImg1" class="down-card-img" :src="stepImg1" alt="">
                        <div class="down-card-box">
                            <div class="card-subtitle">
                                <div class="subtitle-img">
                                    <img v-if="stepIcon1" :src="stepIcon1" alt="">
                                </div>
                                <p class="subtitle-text">{{ props.data['step-01-subtitle'] }}</p>
                            </div>
                            <h3 class="down-card-title">Vytvorte si účet</h3>
                            <p class="down-card-text" v-html="props.data['step-01-text']"></p>
                            <button class="down-card-button">Mám záujem</button>
                        </div>
                    </article>

                    <article class="down-card down-card-second">
                        <img v-if="stepImg2" class="down-card-img" :src="stepImg2" alt="">
                        <div class="down-card-box">
                            <div class="card-subtitle">
                                <div class="subtitle-img">
                                    <img v-if="stepIcon2" :src="stepIcon2" alt="">
                                </div>
                                <p class="subtitle-text">{{ props.data['step-02-subtitle'] }}</p>
                            </div>
                            <h3 class="down-card-title" v-html="props.data['step-02-title']"></h3>
                            <p class="down-card-text" v-html="props.data['step-02-text']"></p>
                        </div>
                    </article>

                    <article class="down-card">
                        <img v-if="stepImg3" class="down-card-img" :src="stepImg3" alt="">
                        <div class="down-card-box">
                            <div class="card-subtitle">
                                <div class="subtitle-img">
                                    <img v-if="stepIcon3" :src="stepIcon3" alt="">
                                </div>
                                <p class="subtitle-text">{{ props.data['step-03-subtitle'] }}</p>
                            </div>
                                <h3 class="down-card-title" v-html="props.data['step-03-title']"></h3>
                                <p class="down-card-text" v-html="props.data['step-03-text']"></p>
                        </div>
                    </article>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps(['data'])

// Hlavný obrázok
const mainImg = ref('')

// Galéria obrázky
const galery01 = ref('')
const galery02 = ref('')
const galery03 = ref('')
const galery04 = ref('')

// Step obrázky
const stepImg1 = ref('')
const stepImg2 = ref('')
const stepImg3 = ref('')

// Step ikony
const stepIcon1 = ref('')
const stepIcon2 = ref('')
const stepIcon3 = ref('')

watchEffect(async () => {
  if (props.data) {
    // main
    const main = await import(/* @vite-ignore */ props.data['main-img'])
    mainImg.value = main.default

    // galery
    const g1 = await import(/* @vite-ignore */ props.data['galery-01-img'])
    galery01.value = g1.default

    const g2 = await import(/* @vite-ignore */ props.data['galery-02-img'])
    galery02.value = g2.default

    const g3 = await import(/* @vite-ignore */ props.data['galery-03-img'])
    galery03.value = g3.default

    const g4 = await import(/* @vite-ignore */ props.data['galery-04-img'])
    galery04.value = g4.default

    // steps images
    const s1 = await import(/* @vite-ignore */ props.data['step-01-img'])
    stepImg1.value = s1.default

    const s2 = await import(/* @vite-ignore */ props.data['step-02-img'])
    stepImg2.value = s2.default

    const s3 = await import(/* @vite-ignore */ props.data['step-03-img'])
    stepImg3.value = s3.default

    // steps icons
    const i1 = await import(/* @vite-ignore */ props.data['step-01-icon'])
    stepIcon1.value = i1.default

    const i2 = await import(/* @vite-ignore */ props.data['step-02-icon'])
    stepIcon2.value = i2.default

    const i3 = await import(/* @vite-ignore */ props.data['step-03-icon'])
    stepIcon3.value = i3.default
  }
})
</script>


<style scoped>
    .galery-container {
        padding: 130px 0;
        display: flex;
        flex-direction: column;
        row-gap: 120px;
    }

    .box-width {
        width: 80%;
        margin: 0 auto;
    }

    .galery-title {
        color: #09001D;
        text-align: center;
        font-size: 55px;
        font-size: clamp(40px, 5vw, 55px);
        font-style: normal;
        font-weight: 800;
        line-height: 70px;
        letter-spacing: -0.275px;
    }

    .galery {
        display: flex;
        column-gap: 30px;
    }

    .galery-left, .galery-right {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
    }

    .galery-card {
        position: relative;
        overflow: hidden;
    }

    .galery-card img {
        display: block;
        width: 100%;
        height: auto;
    }

    .galery-card-text {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }

    .down-container {
        display: flex;
        flex-direction: column;
        row-gap: 100px;
        padding-bottom: 130px;
    }

    .down-title-box {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 12px;
    }

    .down-title-a-box {
        background-color: #4D3EE2;
        padding: 0 16px;
        transform: rotate(-0.7deg);
    }

    .down-title-a {
        color: #FFF;
        text-align: center;
        font-size: clamp(40px, 5vw, 55px);
        font-weight: 800;
        line-height: 70px;
        transform: rotate(0.7deg);
    }

    .down-title-b {
        color: #000;
        text-align: center;
        font-size: clamp(40px, 5vw, 55px);
        font-weight: 800;
        line-height: 70px;
    }

    .down-cards {
        display: flex;
        flex-direction: column;
        row-gap: 100px;
    }

    .down-card {
        display: flex;
        column-gap: 80px;
        align-items: center;
    }

    .down-card-second {
        flex-direction: row-reverse;
    }

    .down-card-img {
        max-width: 400px;
        max-height: 400px;
    }

    .card-subtitle {
        display: flex;
        column-gap: 8px;
    }

    .subtitle-img {
        aspect-ratio: 1 / 1;
        display: flex;
    }

    .subtitle-text {
        color: #4D3EE2;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
    }

    .down-card-title {
        color: #09001D;
        font-size: clamp(35px, 5vw, 45px);
        font-weight: 700;
        line-height: 60px;
        letter-spacing: -0.9px;
        padding-bottom: 25px;
    }

    .down-card-text {
        color: rgba(9, 0, 29, 0.60);
        font-size: clamp(16px, 5vw, 18px);
        font-weight: 400;
        line-height: 28px;
    }

    .down-card-button {
        color: #FFF;
        text-align: right;
        font-size: 14px;
        font-weight: 600;
        line-height: 22px;
        margin-top: 25px;
        padding: 14px 24px;
        border-radius: 100px;
        background: linear-gradient(0deg, #09001D 0%, #302C38 100%);
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.30);
    }

    @media (max-width: 1200px) {
        .box-width {
            width: 100%;
        }
    }

    @media (max-width: 1000px) {
        .down-card {
            column-gap: 30px;
        }

        .down-card-img {
            max-width: 300px;
            max-height: 300px;
        }
    }

    @media (max-width: 800px) {
        .galery-container {
            padding: 50px 0;
            row-gap: 50px;
        }

        .galery {
            flex-wrap: wrap;
            row-gap: 20px;
        }

        .galery-left, .galery-right {
            row-gap: 20px;
        }

        .galery-right {
            flex-direction: column-reverse;
        }

        .down-card {
            flex-direction: column-reverse;
            row-gap: 30px;
        }

        .down-cards {
            row-gap: 50px;
        }

        .down-card-box {
            width: 100%;
        }

        .down-card-button {
            width: 100%;
            text-align: center;
        }

        .down-card-title {
            line-height: 45px;
            letter-spacing: -0.7px;
        }

        .down-card-img {
            max-width: none;
            max-height: none;
        }
    }

    @media (max-width: 600px) {
        .galery-title {
            line-height: normal;
            letter-spacing: -0.2px;
        }

        br {
            display: none;
        }

        .down-title-box {
            flex-wrap: wrap;
        }

        .down-container {
            row-gap: 55px;
            padding-bottom: 50px;
        }
    }
</style>