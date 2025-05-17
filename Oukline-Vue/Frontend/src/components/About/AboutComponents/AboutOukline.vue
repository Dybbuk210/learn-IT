<template>
    <div class="inner-container main-box">
        <h2 class="title">About studio - Oukline </h2>
        <div class="text-box">
            <p class="text-font">We are a dedicated, experienced team focused on delivering meaningful, high-impact results through <img src="../../../assets/icons/TextArrayLarge.svg" alt="" class="text-array-icon"> UX/UI design, Branding & Development.</p>
            <p class="text-font">By staying ahead of trends, we create modern, customized solutions tailored to our clients' needs that drive growth, build trust, and foster lasting relationships.</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .main-box {
        display: flex;
        flex-direction: column;
        row-gap: 60px;
        padding-top: 60px;
        padding-bottom: 200px;
    }

    .text-box {
        display: flex;
        flex-direction: column;
        row-gap: 60px;
    }

    .title {
        color: var(--main-color-black);
        font-size: 20px;
        font-weight: 400;
    }

    .text-font {
        color: var(--main-color-black);
        font-size: clamp(25px, 3vw, 40px);
        font-weight: 300;
    }

    .text-array-icon {
        width: 40px;
        height: 40px;
        vertical-align: middle;
        transform: translateY(2px);
    }

    @media (max-width: 600px) {
        .main-box {
            row-gap: 40px;
            padding-bottom: 100px;
        }

        .text-box {
            row-gap: 40px;
        }

        .title {
            font-size: 28px;
        }
    }
</style>