<template>
    <div class="inner-container main-box">
        <h2 class="main-title">All interviews</h2>
        <div class="break break-padding"></div> <!-- prázdny div služi len na effekt -->
        <div class="gallery">
            <router-link :to="`/interview01`">
                <article class="card">
                    <div class="card-body">
                        <div class="body-up">
                            <div class="img-button">
                                <div class="img-box">
                                    <img src="../../../assets/img/Interviews/Miguel Queirós.jpg" alt="">
                                </div>
                                <button class="card-button switch-btn">
                                    <span class="switch-text switch-current"><img src="../../../assets/icons/ArrowUpBlack.svg" alt=""></span>
                                    <span class="switch-text switch-next"><img src="../../../assets/icons/ArrowUpBlack.svg" alt=""></span>
                                </button>
                            </div>
                            <div class="name-box">
                                <h3 class="name">Miguel Queirós</h3>
                                <p class="skill">Designer & Framer Creator</p>
                            </div>
                        </div>
                        <div class="body-down">
                            <h3 class="body-down-title"><span class="secondcolor">The secret is building</span> a personal brand.</h3>
                        </div>
                    </div>
                    <div class="card-tags">
                        <ul>
                            <li>webdesgin</li>
                            <li>framer</li>
                            <li>digitalcreativity</li>
                        </ul>
                    </div>
                </article>
            </router-link>
        </div>

        <!--
        <div class="break break-padding"></div>
   
        Zatiaĺ nebude vužité

        <div class="galery-function">
            <button></button>
            <div class="pagginator"></div>
            <button></button>  
        </div>
        -->
    </div>
</template>

<script setup>
</script>

<style scoped>
    .main-box {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
        padding: 50px 0 200px 0;
    }

    .main-title {
        color: var(--main-color-black);
        font-size: 25px;
        font-weight: 400;
    }

    .gallery {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 35px;
        row-gap: 40px;
    }

    .name {
        font-weight: 400;
        color: var(--main-color-black);
    }

    .skill {
        color: var(--main-second-color);
    }

    ul {
        display: flex;
        column-gap: 10px;
        padding-top: 10px;
    }

    ul li {
        border: solid 1px #EAECF0;
        border-radius: 20px;
        padding: 10px;
        font-size: 12px;
        font-weight: 300;
        color: var(--main-color-black);
    }

    .break {
        border-bottom: 1px solid #EAECF0;
    }

    .break-padding {
        padding-top: 20px;
    }

    .card-body {
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        background-color: #F9FAFB;
        border: solid 1px #EDEDED;
        padding: 20px;
    }

    .body-up {
        display: flex;
        flex-direction: column;
        row-gap: 14px;
    }

    .img-button {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .img-box {
        width: 50px;
        border-radius: 3px;
    }

    .card-button {
        aspect-ratio: 1 / 1;
        width: auto;
        height: 100%;
        border: 1px solid #151515;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        padding: 20px;
        box-sizing: border-box;
        transform: rotate(45deg);
    }
  
    .card-button img {
        width: 25px;
        height: 24px;
        object-fit: contain;
    }

    .body-down-title {
        color: var(--main-color-black);
        font-size: 32px;
        font-weight: 400;
        line-height: 35px;
    }

    .secondcolor {
         color: var(--main-second-color);
    }

    @media (max-width: 900px) {
        .gallery {
            grid-template-columns: repeat(2, 1fr);
        }
    }


     @media (max-width: 600px) {
         .break-padding {
        padding-top: 0px;
    }

    .gallery {
        grid-template-columns: repeat(1, 1fr);
    }

    .main-box {
        padding-bottom: 100px;
    }
     }
</style>