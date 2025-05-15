<template>
    <div class="inner-container main-box">
        <h3 class="small-title">Ready to start?</h3>
        <div class="box">
            <h2 class="title"><span class="text-style-light">You can kick project off by filling out our</span><br> Contact form or Scheduling a call.</h2>
            <div class="box-buttons">
                <button class=".main-style-button switch-btn second-btn-style" @click="goToContact">
                    <span class="switch-text switch-current">Get a quote</span>
                    <span class="switch-text switch-next">Get a quote</span>
                </button>
                <a class=".main-style-button switch-btn light-btn-style" href="https://cal.com/ouklinestudio/15min"  target="_blank"  rel="noopener noreferrer">
                    <span class="switch-text switch-current">Schedule a call</span>
                    <span class="switch-text switch-next">Schedule a call</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useButtonsNav } from '../../../ButtonsNav'
const { goToContact } = useButtonsNav()
</script>

<style scoped>
    .main-box {
        display: flex;
        flex-direction: column;
        row-gap: 60px;
        padding-bottom: 200px;
    }

    .small-title {
        color: var(--main-color-black);
        font-size: 20px;
        font-weight: 300;
    }

    .box {
        display: flex;
        column-gap: 20px;
        justify-content: space-between;
    }

    .box-buttons {
        display: flex;
        column-gap: 15px;
    }

    .box-buttons button, .box-buttons a {
        align-self: flex-end;
    }

    .title {
        font-size: clamp(28px, 5vw, 40px);
        font-weight: 300;
    }

    @media (max-width: 1200px) {
        .box {
            flex-direction: column;
            row-gap: 40px;
        }
    }

    @media (max-width: 600px) {
        .main-box {
            padding-bottom: 100px;
        }
    }

    @media (max-width: 400px) {
        .box-buttons {
            flex-direction: column;
            row-gap: 20px;
        }

        .box-buttons button {
            width: 100%;
            align-self: flex-start;
        }
    }
</style>