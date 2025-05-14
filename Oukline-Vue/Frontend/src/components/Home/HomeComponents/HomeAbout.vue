<template>
    <div class="inner-container about-container">
        <div class="about-box">
            <div class="box-up">
                <h3 class="about-title">About studio - Oukline </h3>
                <div class="box-up-text">
                    <p>
                        <span class="text-style-light">We transforms</span> ideas 
                        <span class="icon-box"><img src="../../../assets/icons/AboutOukline.svg" alt="" class="text-icon"></span> 
                        into powerful visual experiences <span class="text-style-light">with precision and creativity.</span>
                    </p>
                    <ul class="about-socials">
                        <li><a href="" class="social-link">twitter</a></li>
                        <li><a href="" class="social-link">instagram</a></li>
                        <li><a href="" class="social-link">linkedin</a></li>
                    </ul>
                </div>
            </div>
            <p class="about-text">
                We’re a focused, experienced team delivering meaningful results through → UX/UI design, branding, and development. 
                Our work is built on clarity, function, and creativity — tailored to each brand’s 
                goals to drive growth, build trust, and create lasting impact.
            </p>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .about-container {
        padding: 200px 0 100px 0;
    }

    .about-box {
        display: flex;
        flex-direction: column;
        row-gap: 60px;
    }

    .about-title {
        font-size: 20px;
        font-weight: 400;
        color: var(--main-color-black);
    }

    .box-up {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }

    .box-up-text {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        column-gap: 15px;
        row-gap: 15px;
    }

    .box-up-text p {
        display: inline;
        align-items: center;
        font-size: 20px;
        font-weight: 400;
        color: var(--main-color-black);
    }

    .icon-box {
        padding: 0 8px;
        display: inline-block;
        vertical-align: middle;
        max-width: 100%;
    }

    .text-icon {
        height: 35px;
        vertical-align: middle;
    }

    .about-socials {
        display: flex;
        column-gap: 25px;
    }

    ul li {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .social-link {
        font-size: 16px;
        font-weight: 300;
        color: var(--main-color-black);
    }

    .about-text {
        font-size: clamp(30px, 5vw, 40px);
        font-weight: 300;
        color: var(--main-color-black);
    }
    
    @media (max-width: 600px) {
        .about-container {
            padding-top: 100px;
        }
    }
</style>