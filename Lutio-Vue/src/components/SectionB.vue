<template>
    <div class="main-container">
        <div class="inner-container">

            <div class="text-box box-width">
                <h2 class="text-box-title" v-html="data['section-b-title']"></h2>
                <p class="text-box-text" v-html="data['section-b-text']"></p>
            </div>
        </div>    
        <div class="image-box">
            <img src="../assets/section-b.webp" alt="">
        </div>
        <div class="inner-container">

            <div class="questions box-width">
                <h2 class="questions-title">Najčastejšie otázky</h2>
                <div class="questions-cards">

                <article class="questions-card" v-for="(item, index) in data.questions" :key="index" :class="{ 'active-card': openIndex === index }" @click="toggleCard(index)">
                    <div class="card-box">
                        <div class="card-box-up">
                        <h3 class="card-title">{{ item.question }}</h3>
                        <div class="card-buttons">
                            <img
                            v-if="openIndex !== index"
                            class="card-open"
                            src="../assets/open.svg"
                            alt="Otvoriť"
                            />
                            <img
                            v-else
                            class="card-close"
                            src="../assets/close.svg"
                            alt="Zavrieť"
                            />
                        </div>
                        </div>

                        <Transition name="slide">
                        <p v-show="openIndex === index" class="card-text" v-html="item.answer"></p>
                        </Transition>
                    </div>
                </article>

                </div>
            </div>

            <div class="down-box box-width">
                <h2 class="down-box-title">Sme tu pre Vás</h2>
                <p class="down-box-text">V prípade, že máte <span class="second-color">akékoľvek otázky, nápady</span> alebo <span class="second-color">záujem o spoluprácu</span>, budeme radi, <span class="second-color">ak sa nám ozvete.</span></p>
                <div class="down-box-link-box">
                    <p class="linkbox-text">
                        Ozvite sa nám na <img class="array-icon" src="../assets/array-icon.svg" alt=""> <a class="linkbox-link" href="mailto:info@lutio.eu">info@lutio.eu</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps(['data'])
    import { ref } from 'vue'

    // Sleduje, ktorá otázka je otvorená (null = žiadna)
    const openIndex = ref(null)

    // Prepnúť otvorenú otázku
    function toggleCard(index) {
    openIndex.value = openIndex.value === index ? null : index
    }
</script>

<style scoped>
    .main-container {
        background: #09001D;
        padding: 90px 0 130px 0;
    }

    .box-width {
        width: 50%;
        margin: 0 auto;
    }

    .text-box {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
        padding-bottom: 95px;
    }

    .text-box-title {
        color: #F7F8FA;
        text-align: center;
        font-size: clamp(40px, 5vw, 55px);
        font-weight: 800;
        letter-spacing: -0.275px;
    }

    .text-box-text {
        color: #FFF;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
    }

    .image-box {
        width: 100%;
    }

    .questions {
        display: flex;
        flex-direction: column;
        row-gap: 60px;
        padding-top: 130px;
        padding-bottom: 130px;
    }

    .questions-title {
        color: #FFF;
        text-align: center;
        font-size: clamp(40px, 5vw, 45px);
        font-weight: 800;
        letter-spacing: -0.5px;
    }

    .questions-cards {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 13px;
    }

    .questions-card {
        cursor: pointer;
        background: transparent;
        display: flex;
        flex-direction: column;
        padding: 20px;
        border-radius: 13px;
        border: 1px solid rgba(255, 255, 255, 0.25);
    }

    .card-box {
        display: flex;
        flex-direction: column;
        row-gap: 13px;
    }

    .card-box-up {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card-title {
        color: #FFF;
        font-size: clamp(14px, 5vw, 16px);
        font-weight: 600;
    }

    .card-text {
        color: rgba(247, 248, 250, 0.80);
        font-size: clamp(14px, 5vw, 16px);
        font-weight: 400;
    }

    .card-close, .card-open {
        aspect-ratio: 1 / 1;
        display: flex;
    }

    .down-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 35px;
    }

    .down-box-title {
        color: #FFF;
        text-align: center;
        font-size: clamp(40px, 5vw, 46px);
        font-weight: 800;
    }

    .down-box-text {
        max-width: 470px;
        color: rgba(255, 255, 255, 0.50);
        text-align: center;
        font-size: clamp(16px, 5vw, 18px);
        font-weight: 400;
    }

    .second-color {
        color: #FFF;
    }

    .linkbox-text {
        display: flex;
        column-gap: 5px;
        color: rgba(255, 255, 255, 0.50);
        text-align: center;
        font-size: clamp(25px, 5vw, 36px);
        font-weight: 400;
    }

    .linkbox-link {
        display: flex;
        column-gap: 5px;
        color: #FFF;
        font-size: clamp(25px, 5vw, 36px);
        font-weight: 600;
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: auto;
        text-decoration-thickness: 5%;
        text-underline-offset: 25%;
        text-underline-position: from-font;
    }

    .mobile-break, .mobile-text {
        display: none;
    }

    .questions-card.active-card {
        background: rgba(247, 248, 250, 0.20);
        transition: background 0.3s ease;
    }

    .array-icon {
        width: 32px;
        transform: translateY(2px);
    }

    /* skúška efektu */
    .slide-enter-active, .slide-leave-active {
    transition: max-height 0.2s ease, opacity 0.2s ease;
    overflow: hidden;
    }
    .slide-enter-from, .slide-leave-to {
    max-height: 0;
    opacity: 0;
    padding-top: 0;
    padding-bottom: 0;
    }
    .slide-enter-to, .slide-leave-from {
    max-height: 300px; /* nastav podľa očakávanej výšky textu */
    opacity: 1;
    }
    
    @media (max-width: 1200px) {
        .box-width {
            width: 60%;
        }
    }

     @media (max-width: 1100px) {
        .desktop-break {
            display: none;
        }
     }

     @media (max-width: 1000px) {
        .box-width {
            width: 80%;
        }
     }

    @media (max-width: 800px) {
        .desktop-break {
            display: block;
        }
        
        .array-icon {
            display: none;
        }
    }

    @media (max-width: 665px) {
        .desktop-break {
            display: none;
        }
    }

    @media (max-width: 600px) {
        .main-container {
            padding: 50px 0 50px 0;
        }

        .box-width {
            width: 100%;
        }

        .text-box {
            padding-bottom: 50px;
        }

        .text-box-title {
            letter-spacing: -0.2px;
        }

        .questions {
            padding-top: 90px;
            padding-bottom: 50px;
        }

        .questions {
            row-gap: 30px;
        }

        .questions-title {
            letter-spacing: -0.2px;
        }

        .desktop-text {
            display: none;
        }

        .linkbox-text {
            flex-direction: column;
            align-items: center;
        }

        .mobile-break, .mobile-text {
            display: block;
        }
    }
    
</style>