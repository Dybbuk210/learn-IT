<template>
    <div class="inner-container main-container" id="services">
        <div class="box-up">
            <div class="box-up-left">
                <p class="box-up-text"><span class="text-style-light">We focus on</span> what we’re best at <span class="text-style-light">no fluff, just services that</span> move your brand forward.</p>
                <button class="main-style-button switch-btn services-button" @click="goToProjects">
                    <span class="button-text switch-text switch-current">
                        See projects
                        <img src="../../../assets/icons/RightArrowWhite.svg" alt="Arrow icon" class="button-icon">
                    </span>
                    <span class="button-text switch-text switch-next">
                        See projects
                        <img src="../../../assets/icons/RightArrowWhite.svg" alt="Arrow icon" class="button-icon">
                    </span>
                </button> 
             </div>
            <div class="box-up-title">
                <img src="../../../assets/SERVICES.svg" alt="Services heading">
            </div>
        </div>
        <div class="box-down">
            <article class="service-card">
                <div class="img-box">
                    <img src="../../../assets/icons/ServicesCard/Card 01.svg" alt="Create icon">
                </div>
                <h3>UX/UI Design</h3>
                <p>
                    <span class="text-style-light">We design high-converting</span> websites, mobile apps, desktop apps & internal systems - <span class="text-style-light">that enhance user experience and drive interaction.</span>
                </p>
            </article>

            <article class="service-card">
                <div class="img-box">
                    <img src="../../../assets/icons/ServicesCard/Card 02.svg" alt="Technology icon">
                </div>
                <h3>Development</h3>
                <p>
                    <span class="text-style-light">From</span> Custom code <span class="text-style-light">to</span> WordPress <span class="text-style-light">and</span> Framer or Webflow, <span class="text-style-light">we develop the right solution for your project - always</span> with a focus on what works best for you.
                </p>
            </article>

            <article class="service-card">
                <div class="img-box">
                    <img src="../../../assets/icons/ServicesCard/Card 03.svg" alt="Identity icon">
                </div>
                <h3>Brand Identity</h3>
                <p>
                    <span class="text-style-light">We design</span> powerful brand identities <span class="text-style-light">that resonate with your audience, delivering</span> everything you need to succeed <span class="text-style-light">and</span> grow <span class="text-style-light">- in</span> just 2 weeks.
                </p>
            </article>
        </div>
    </div>
</template>

<script setup>
import { useButtonsNav } from '../../../ButtonsNav'
const { goToProjects} = useButtonsNav()
</script>

<style scoped>
    .main-container {
        display: flex;
        flex-direction: column;
        row-gap: 100px;
        padding-top: 170px;
        padding-bottom: 170px;
    }

    .services-button {
        padding: 25px 90px;
    }

    .box-up {
        display: flex;
        justify-content: space-between;
    }

    .box-up-title {
        width: 60%;
    }

    .box-up-left {
        display: flex;
        flex-direction: column;
        width: 30%;
        height: 100%;
        row-gap: 50px;
        align-self: flex-end;
    }

    .box-up-left button {
        align-self: flex-start;
    }

    .box-down {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 20px;
    }

    .box-up-text {
        font-size: 18px;
        font-weight: 400;
        color: var(--main-color-black);
    }

    .service-card {
        background-color: #F9FAFB;
        padding: 50px 32px;
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        border: solid 1px #EDEDED;
        border-radius: 3px;
        transition: background-color 0.4s ease, transform 0.4s ease; 
    }

    .service-card:hover {
        background-color: #fff;
    }

    .img-box {
        height: 30px;
        height: 30px;
    }

    .img-box img {
        width: auto;
    }

    .service-card h3 {
        font-size: 18px;
        font-weight: 400;
        color: var(--main-color-black);
    }

    .service-card p {
        font-size: 16px;
        font-weight: 400;
        color: var(--main-color-black);
        line-height: 20px;
    }

    @media (max-width: 900px) {
        .box-up {
            flex-direction: column-reverse;
            row-gap: 35px;
        }

        .box-up-left {
            align-self: auto;
            width: 100%;
        }

        .box-up-title {
            width: 100%;
        }
    }

    @media (max-width: 850px) {
        .box-down {
            row-gap: 20px;
            grid-template-columns: repeat(1, 1fr);
        }

        .box-up-left {
            align-self: center;
        }

        .box-up-text {
            font-size: 16px;
        }
    }

    @media (max-width: 600px) {
        .box-down {
            grid-template-columns: repeat(1, 1fr);
        }

        .box-up {
            flex-direction: column-reverse;
            row-gap: 35px;
        }

        .box-up-left {
            align-self: flex-start;
        }

        .box-up-left, .box-up-title {
            width: 100%;
        }

        .main-container {
            padding-bottom: 100px;
            padding-top: 100px;
        }

        .services-button {
            width: 100%;
        }
    }
</style>