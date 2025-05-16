<template>
    <section>
        <div class="inner-container container">
            <div>
                <img src="../../../assets/icons/OUKicon.svg" alt="">
            </div>
            <p class="text-up">Trusted by Industry Leaders</p>
            <p class="text-down"><span class="text-style-light">Celebrating the</span> success <span class="text-style-light">of our</span> collaborations</p>
            <div class="partners-galery">
                <div class="galery-row1">
                    <img src="../../../assets/Partners/WegTrans.svg" alt="">
                    <img src="../../../assets/Partners/UsporneKlimy.svg" alt="">
                    <img src="../../../assets/Partners/Wegrent.svg" alt="">
                    <img src="../../../assets/Partners/Levels.svg" alt="">
                    <img src="../../../assets/Partners/SharksFX.svg" alt="">
                    <img src="../../../assets/Partners/DeviraReality.svg" alt="">
                </div>
                <div class="galery-row2">
                    <img src="../../../assets/Partners/FlyVista.svg" alt="">
                    <img src="../../../assets/Partners/TechEssence.svg" alt="">
                    <img src="../../../assets/Partners/Willcheck.svg" alt="">
                    <img src="../../../assets/Partners/LisovanyZaStudena.svg" alt="">
                    <img src="../../../assets/Partners/SlovenskeGranule.svg" alt="">
                    <img src="../../../assets/Partners/GreyTCarWasch.svg" alt="">
                </div>
                <div class="galery-row3">
                    <img src="../../../assets/Partners/BBRS.svg" alt="">
                    <div class="img-box">
                        <img src="../../../assets/Partners/Smfirst.svg" alt="" class="img-width">
                    </div>
                    <img src="../../../assets/Partners/Stavbykk.svg" alt="">
                      <div class="img-box">
                        <img src="../../../assets/Partners/PuschOnline.svg" alt="" class="img-width-2">
                    </div>
                    <img src="../../../assets/Partners/Yogayn.svg" alt="">
                     <div class="img-box">
                        <img src="../../../assets/Partners/TuningStory.svg" alt="" class="img-width">
                    </div>
                    <img src="../../../assets/Partners/OakGroup.svg" alt="" class="last-item">
                </div>
            </div>
            <div class="btn-box">
                <div class="btn-box-left">
                <p>
                    Join our satisfied partners 
                    <span class="btn-icon"><img src="../../../assets/icons/RightArrow.svg" alt=""></span>
                </p>
                </div>
                <div class="btn-box-right">
                 <a href="mailto:studio@oukline.com" class="second-btn-style btn-width switch-btn">
                    <span class="button-text switch-text switch-current">
                        studio@oukline.com
                        <img src="../../../assets/icons/PartnersBTNicon.svg" alt="" class="button-icon">
                    </span>
                    <span class="button-text switch-text switch-next">
                        studio@oukline.com
                        <img src="../../../assets/icons/PartnersBTNicon.svg" alt="" class="button-icon">
                    </span>
                </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
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

    .text-down, .btn-box p {
        font-size: 18px;
        font-weight: 400;
    }

    .btn-box a {
        font-size: 17px;
        font-weight: 400;
    }

    .text-down {
        color: var(--main-color-black);
        margin-bottom: 70px;
    }

    .btn-box, .btn-box p {
        column-gap: 17px;
    }

    .btn-box {
        display: flex;
        width: 100%;
        align-items: center;
    }

    .btn-box p {
        display: flex;
    }

    .btn-box-left, .btn-box-right {
        width: 50%;
    }

    .btn-box-left {
        display: flex;
        justify-content: flex-end;
        align-items: center;  
    }

    .partners-galery {
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        margin-bottom: 50px;
    }

    .galery-row1, .galery-row2 {
        display: grid;
        column-gap: 80px;
        grid-template-columns: repeat(6, 1fr);
    }

    .galery-row3 {
        display: grid;
        column-gap: 80px;
        grid-template-columns: repeat(7, 1fr);
    }

    .galery-row1 {
        width: 95%;
        margin: 0 auto;
    }

    .galery-row3 {
        width: 92%;
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

    .btn-width{
        column-gap: 8px;
        padding: 10px 98px;
    }

    @media (max-width: 1200px) {
        .galery-row1, .galery-row2, .galery-row3 {
            column-gap: 70px;
        }
    }

    @media (max-width: 1000px) {
        .galery-row1, .galery-row2, .galery-row3 {
            column-gap: 50px;
        }
    }

    @media (max-width: 800px) {
        .galery-row1, .galery-row2, .galery-row3 {
            width: 100%;
            grid-template-columns: repeat(3, 1fr);
            row-gap: 25px;
            column-gap: 30px;
            justify-items: center;
        }

        .galery-row3 .last-item {
            grid-column: 2 / 3; /* Posunie ho do prostredného stĺpca */
        }

        .img-width, .img-width-2 {
            width: 100%;
            height: 100%;
        }
    }

    @media (max-width: 500px) {
        .text-up {
            font-size: 16px;
        }

        .text-down {
            font-size: 14px;
        }

        .btn-box, .btn-box-left p {
            flex-direction: column;
        }

        .btn-box-left, .btn-box-right {
            display: flex;
            justify-content: center;
            width: 100%;
        }

        .btn-box-left p {
            align-items: center;
            row-gap: 10px;
            margin-bottom: 10px;
        }

        .btn-icon {
            transform: rotate(90deg);
            width: 14%;
            height: 12%;
        }

        .btn-width {
            width: 100%;
            padding: 25px 98px;
            justify-content: center;
            align-items: center;
        }

        .studio-btn-icon {
            height: 100%;
            width: auto;
        }
    }
</style>