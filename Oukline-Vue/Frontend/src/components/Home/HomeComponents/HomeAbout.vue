<template>
    <div class="inner-container about-container">
        <div class="about-box">
            <div class="box-up">
                <h3 class="about-title">About studio - Oukline </h3>
                <div class="box-up-text">
                    <p>
                        <span class="text-style-light">We transforms</span> ideas 
                        <span class="icon-box"><img src="../../../assets/icons/AboutOukline.svg" alt="Oukline logo icon – OUK" class="text-icon"></span> 
                        into powerful visual experiences <span class="text-style-light">with precision and creativity.</span>
                    </p>
                    <ul class="about-socials">
                        <li><a href="https://x.com/Ouklinestudio" target="_blank"  rel="noopener noreferrer" class="social-link">twitter</a></li>
                        <li><a href="https://www.instagram.com/ouklinestudio/" target="_blank"  rel="noopener noreferrer" class="social-link">instagram</a></li>
                        <li><a href="https://www.linkedin.com/company/ouklinestudio/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BvvjQ9%2BuCQL6eKyRb4CYKVA%3D%3D" target="_blank"  rel="noopener noreferrer" class="social-link">linkedin</a></li>
                    </ul>
                </div>
            </div>
            <p class="about-text">
                We’re a focused, experienced team delivering meaningful results<br class="text-break"> through <img src="../../../assets/icons/TextArrayLarge.svg" alt="" class="text-array-icon"> UX/UI design, branding, and development. 
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

    .social-link:hover {
        border-bottom: solid 1px var(--main-color-black);
    }

    .about-text {
        font-size: clamp(30px, 5vw, 40px);
        font-weight: 300;
        color: var(--main-color-black);
    }

     .text-array-icon {
        width: 40px;
        height: 40px;   
        vertical-align: middle;
        transform: translateY(-2px);
    }
    
    @media (max-width: 600px) {
        .about-container {
            padding-top: 100px;
            padding-bottom: 55px;
        }

        .about-box {
            row-gap: 55px;
        }

        .text-break {
            display: none;
        }

        .text-array-icon {
        width: 22px;
        height: 22px;   
    }
    }

     @media (max-width: 420px) {
        .box-up {
            row-gap: 15px;
        }

        .box-up-text {
            row-gap: 25px;
        }
     }
</style>