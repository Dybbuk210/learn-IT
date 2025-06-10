<template>
    <div class="main-container">
        <img src="../assets/footerbackground.webp" alt="Maják" class="footer-image" />
        <div class="footer-content">
            <div class="up-box">
                <h2 class="title-left">Lutio – Najjednoduchší spôsob, ako<br> vyhľadávať alebo ponúkať služby.</h2>
                <div class="up-box-right">
                    <h2 class="title-right">Máte záujem získať<br> viac zákazníkov?</h2>
                    <button class="button-right">Mám záujem</button>
                </div>
            </div>
            <div class="down-box">
                <ul class="footer-socials">
                    <li><a class="footer-social" href="">Facebook</a></li>
                    <li><a class="footer-social" href="">Instagram</a></li>
                    <li><a class="footer-social" href="">LinkedIn</a></li>
                    <li class="mobile-hidden    "><a class="footer-social" href="">info@lutio.sk</a></li>
                </ul>
                <div class="break-line"></div>
                <p class="down-box-text">© Lutio 2025. All rights reserved.</p>
            </div>
        </div>
    </div>
</template>

<script setup>  
</script>

<style scoped>
    .main-container {
        position: relative;
        width: 100%;
    }

    .footer-image {
        width: 100%;
        height: auto;
        display: block;
    }

    .footer-content {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        z-index: 1;
        padding-top: 60px;
    }

    .up-box {
        display: flex;
        justify-content: space-between;
        padding-bottom: 55px;
    }

    .title-left, .title-right {
        color: #FFF;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 25px;
        font-weight: 700;
        letter-spacing: -0.5px;
    }

    .up-box-right {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }

    .button-right {
        align-self: flex-start;
        color: #09001D;
        font-size: 14px;
        font-weight: 600;
        line-height: 22px;
        padding: 12px 24px;
        border-radius: 100px;
        background: linear-gradient(0deg, #FFF 0%, #EBEBEB 100%);
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.30);
    }

    .down-box {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }

    .break-line {
        width: 100%;
        border-bottom: solid 1px rgba(255, 255, 255, 0.15);
    }

    .footer-socials {
        display: flex;
        column-gap: 37px;
    }

    .footer-social {
        color: #FFF;
        font-size: 16px;
        font-weight: 400;
    }

    .down-box-text {
        color: #FFF;
        font-size: 12px;
        font-weight: 400;
        opacity: 0.6;
    }

    @media (max-width: 900px) {
        .title-left {
            display: none;
        }
    }

    @media (max-width: 800px) {
        .main-container {
            height: 1080px;
        }

        .footer-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 86% center;
            z-index: 0;
        }
    }

    @media (max-width: 600px) {
        .up-box {
            justify-content: center;
        }

        .up-box-right {
            width: 100%;
            align-items: center;
        }

        .button-right {
            width: 100%;
        }

        .footer-content {
            width: 96%;
        }

        .mobile-hidden {
            display: none;
        }

        .footer-socials {
            justify-content: space-between;
            column-gap: 0;
        }

        .down-box-text {
            display: none;
        }
    }
</style>