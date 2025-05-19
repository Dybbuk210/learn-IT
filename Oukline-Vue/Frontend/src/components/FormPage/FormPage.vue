<template>
    <div class="form-container">
        <div class="inner-container">
            <div class="box-up">
                <div class="main-img-box">
                    <img src="../../assets/img/OuklineFormImg.png" alt="" class="form-img">
                </div>
                <div class="titles">
                    <h2 class="main-title">Ready for</h2>
                    <h2 class="main-title-second">new collaborations</h2>
                </div>
                <p class="main-text">Let’s talk! - tell us what you’re building, and we’ll jump in.</p>
                <ContactForm />
            </div>
        </div>
        <div class="box-down">
            <section>
                <div class="inner-container container">
                    <p class="text-up">Trusted by Industry Leaders</p>
                    <p class="text-down"><span class="text-style-light">Celebrating the</span> success <span class="text-style-light">of our</span> collaborations</p>
                    <div class="partners-galery">
                        <div class="galery-row1">
                            <img src="../../assets/Partners/WegTrans.svg" alt="">
                            <img src="../../assets/Partners/UsporneKlimy.svg" alt="">
                            <img src="../../assets/Partners/Wegrent.svg" alt="">
                            <img src="../../assets/Partners/Levels.svg" alt="">
                            <img src="../../assets/Partners/SharksFX.svg" alt="">
                            <img src="../../assets/Partners/DeviraReality.svg" alt="">
                        </div>
                        <div class="galery-row2">
                            <img src="../../assets/Partners/FlyVista.svg" alt="">
                            <img src="../../assets/Partners/TechEssence.svg" alt="">
                            <img src="../../assets/Partners/Willcheck.svg" alt="">
                            <img src="../../assets/Partners/LisovanyZaStudena.svg" alt="">
                            <img src="../../assets/Partners/SlovenskeGranule.svg" alt="">
                            <img src="../../assets/Partners/GreyTCarWasch.svg" alt="">
                        </div>
                        <div class="galery-row3">
                            <img src="../../assets/Partners/BBRS.svg" alt="">
                            <div class="img-box">
                                <img src="../../assets/Partners/Smfirst.svg" alt="" class="img-width">
                            </div>
                            <img src="../../assets/Partners/Stavbykk.svg" alt="">
                            <div class="img-box">
                                <img src="../../assets/Partners/PuschOnline.svg" alt="" class="img-width-2">
                            </div>
                            <img src="../../assets/Partners/Yogayn.svg" alt="">
                            <div class="img-box">
                                <img src="../../assets/Partners/TuningStory.svg" alt="" class="img-width">
                            </div>
                            <img src="../../assets/Partners/OakGroup.svg" alt="" class="last-item">
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
    import ContactForm from '../GlobalComponents/ContactFormTest.vue'

    import { useHead } from '@vueuse/head'
    import { useRoute } from 'vue-router'

    const route = useRoute()

    useHead({
    title: route.meta.title,
    meta: [
        {
        name: 'description',
        content: route.meta.description
        },

    {
      property: 'og:title',
      content: 'Redy for new collaborations'
    },
    {
      property: 'og:description',
      content: 'Let’s talk! - tell us what you’re building, and we’ll jump in.'
    },
    {
      property: 'og:image',
      content: 'https://oukline.com/assets/og-image-default.png'
    },
    {
      property: 'og:url',
      content: 'https://oukline.com/form'
    },
    {
      property: 'og:type',
      content: 'website'
    },

    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Redy for new collaborations'
    },
    {
      name: 'twitter:description',
      content: 'Let’s talk! - tell us what you’re building, and we’ll jump in.'
    },
    {
      name: 'twitter:image',
      content: 'https://oukline.com/assets/og-image-default.png'
    }
    ],
    link: [
        {
        rel: 'canonical',
        href: route.meta.canonical
        }
    ]
    })
</script>

<style scoped>
    .form-container {
        padding-top: 100px;
    }

    .box-up {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
        width: 50%;
        margin: 0 auto;
        padding-bottom: 100px;
    }

    .box-down {
        padding-bottom: 100px;
    }

    .main-img-box {
        max-width: 100px;
        border-radius: 3px;
        padding: 4px 4px 0 4px;
        box-shadow: 0px 11px 34.6px rgba(0, 0, 0, 0.2);
    }

    .form-img {
        border-radius: 3px;
    }

    .main-title, .main-title-second {
         font-size: clamp(32px, 5vw, 50px);
        font-weight: 300
    }

    .main-title {
        color: var(--main-second-color);
    }

    .main-title-second {
        color: var(--main-color-black);
    }

    .main-text {
        color: var(--main-color-black);
        font-size: clamp(18px, 5vw, 22px);
        font-weight: 400;
        padding-bottom: 20px;
    }

    section {
        width: 100%;
        background-color: #F9FAFB;
        padding: 55px 0px;
    }

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.text-up {
    font-size: 18px;
    font-weight: 400;
    color: var(--main-color-black);
    margin-bottom: 10px;
}

.text-down {
    font-size: 18px;
    font-weight: 400;
    color: var(--main-color-black);
    margin-bottom: 70px;
}

.partners-galery {
    display: flex;
    flex-direction: column;
    row-gap: 25px;
    margin-bottom: 50px;
}

.galery-row1,
.galery-row2 {
    display: grid;
    column-gap: 80px;
    grid-template-columns: repeat(6, 1fr);
}

.galery-row3 {
    display: grid;
    column-gap: 80px;
    grid-template-columns: repeat(7, 1fr);
    width: 92%;
    margin: 0 auto;
}

.galery-row1 {
    width: 95%;
    margin: 0 auto;
}

.img-box {
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-width {
    width: 50%;
    height: 50%;
}

.img-width-2 {
    width: 70%;
}

@media (max-width: 1200px) {
    .galery-row1,
    .galery-row2,
    .galery-row3 {
        column-gap: 70px;
    }
}

@media (max-width: 1000px) {
    .galery-row1,
    .galery-row2,
    .galery-row3 {
        column-gap: 50px;
    }

    .box-up {
        width: 80%;
    }
}

@media (max-width: 800px) {
    .galery-row1,
    .galery-row2,
    .galery-row3 {
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 25px;
        column-gap: 30px;
        justify-items: center;
    }

    .galery-row3 .last-item {
        grid-column: 2 / 3;
    }

    .img-width,
    .img-width-2 {
        width: 100%;
        height: 100%;
    }

      .box-up {
        width: 100%;
    }
}

@media (max-width: 600px) {
    .text-up {
        font-size: 16px;
    }

    .text-down {
        font-size: 14px;
    }

    section {
        padding-bottom: 0;
    }
}
</style>