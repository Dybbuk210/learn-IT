<template>
    <section class="footer-section">   
        <div class="inner-container">
            <div class="footer-up footer-flex">
                <div class="footer-up-left footer-flex">
                    <a href="">
                        <img src="../../assets/logo/Logo-W.svg" alt="" class="logo-box">
                    </a>
                    <div class="footer-break hide-on-mobile"></div>
                    <p>Based in Slovakia / Acting globally</p>
                </div>
                <div class="footer-up-right footer-flex">

                        <ul>
                            <li>
                                <a href="">
                                    <img src="../../assets/footersocials/X.svg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="../../assets/footersocials/instagram.svg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="../../assets/footersocials/linkedin.svg" alt="">
                                </a>
                            </li>
                        </ul>

                    <div class="footer-break"></div>
                    <button class="footer-button border-animate">Book a call</button>
                </div>
            </div>
            <div class="footer-down footer-flex">
                <p>© Oukline 2024. All rights reserved.</p>
                <a href="" class="footer-link">studio@oukline.com</a>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
    .footer-section {
        background-color: var(--main-color-black);
        width: 100%;
        padding-top: 36px;
        padding-bottom: 36px;
    }

    .footer-section p {
        color: #fff;
    }

    .footer-flex {
        display: flex;
    }


    .footer-up-left {
        column-gap: 15px;
        justify-content: start;
    }

    .footer-up-right {
        column-gap: 20px;
        justify-content: end;
    }

    .footer-down {
        justify-content: space-between;
    }

    /* link a button style + hover */
   .footer-link {
        color: #fff;
        opacity: 1;
   } 
   
   .footer-button {
        font-size: 16px;
        font-weight: 500; 
        background-color: #2B2B2B;
        padding: 14px 49px;
        border-radius: 3px;
        cursor: pointer;
        color: #fff;
        border: none;
    }

    .footer-link:hover,
    .footer-button:hover {
        opacity: 0.7;
    }

    .footer-link,
    .footer-button {
         opacity: 1;
         transition: opacity 0.3s ease;
    }

    .footer-up {
        align-items: center;
        border-bottom: solid 1px #292929;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }

    .footer-up p {
        align-self: center;
    }

    ul li {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ul li a {
        display: flex;
        justify-content: center;
    }

    .footer-up ul {
        display: flex;
        column-gap: 20px;
    }


    .footer-up, .footer-down {
        width: 100%;
    }

    .footer-up-left, .footer-up-right {
        width: 50%;
    }

    .footer-break {
        height: 22px;
        border-right: solid 2px #FFFFFF66;
        align-self: center;
    }

    @media (max-width: 800px) {
        .footer-up {
            row-gap: 30px;
            flex-direction: column;
        }

        .footer-up-left, .footer-up-right {
        justify-content: left;
        width: 100%;
       }

       .footer-down {
        row-gap: 10px;
        flex-direction: column-reverse;
       }
    }

    @media (max-width: 420px) {
        .hide-on-mobile{
            display: none;
        }

        .footer-up-left {
            flex-direction: column;
            row-gap: 15px;
        }

        .footer-up-left p {
            align-self: auto;
        }

        .logo-box {
            width: 40%;
        }
    }

    @media (max-width: 360px) {
            .footer-button {
                width: 50%;
                padding: 14px 31px;
            }
    }
</style>