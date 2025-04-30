<template>
    <div class="inner-container clients-container">
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
                        <img src="../../../assets/img/client.png" alt="">
                    </div>
                    <p class="slider-text">
                        Oukline is a no-brainer for businesses and brands who are looking for high-quality design and development work. 
                        Not only that, they offer you a wide range of services like UI/UX & branding. Amazing quality and speed!
                    </p>
                    <h3 class="name-box">Miguel Queirós <span class="text-style-light">Oblivion dope</span></h3>
                </div>
                <div class="slider-down">
                    <button class="previos-btn"><img src="../../../assets/icons/SliderArrow.svg" alt="" class="slider-btn-left"> Previous</button>
                    <div class="pagginator-box">
                        <span class="dot active"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                    <button class="next-btn">Next <img src="../../../assets/icons/SliderArrow.svg" alt="" class="slider-btn-right"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
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
        width: 60px;
        height: auto;
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

    .previos-btn:hover, .next-btn:hover {
        opacity: 0.6;
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
        margin-right: 8px;
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