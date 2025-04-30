<template>
    <div class="inner-container">
        <div class="main-box">
            <div class="main-box-up">
                <div class="img-box">
                    <img src="../../../assets/icons/Joinicon.svg" alt="">
                </div>
                <p class="up-text">
                    Oukline is a no-brainer for businesses <span class="text-style-light">and brands</span> who are looking for high-quality
                    design and development work. <span class="text-style-light">Not only that, they offer you a</span> wide range of services <span class="text-style-light">like UI/UX & branding.</span> Amazing quality and speed!
                </p>
                <a href="" class="up-link">Appky.sk  <span class="text-style-light">Software solutions</span></a>
            </div>
            <button class="main-style-button switch-btn services-button ">
                    <span class="button-text switch-text switch-current">
                        Join our satisfied partners
                        <img src="../../../assets/icons/RightArrowWhite.svg" alt="" class="button-icon">
                    </span>
                    <span class="button-text switch-text switch-next">
                        Join our satisfied partners
                        <img src="../../../assets/icons/RightArrowWhite.svg" alt="" class="button-icon">
                    </span>
            </button> 
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .main-box {
        max-width: 50%;
        margin: 0 auto;
        row-gap: 70px;
        padding-top: 30px;
        padding-bottom: 200px;
    }

    .main-box, .main-box-up {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .main-box-up {
        row-gap: 25px;
    }

    .up-text {
        font-size: 25px;
        font-weight: 400;
        text-align: center;
    }

    .up-link {
        font-size: 18px;
        font-weight: 400;
        color: var(--main-color-black);
    }

    .img-box {
        width: 60px;
        height: 60px;
    }

    button {
        padding: 26px 131px;
        width: auto;
    }

    @media (max-width: 1400px) {
        .main-box {
            max-width: 70%;
        }
    }

    @media (max-width: 800px) {
        .up-text {
            font-size: 18px;
        }
    }

    @media (max-width: 600px) {
        .main-box {
            padding-bottom: 100px;
        }
    }

    @media (max-width: 500px) {
        .main-box {
            max-width: none;
        }

        button {
            width: 100%;
        }
    }
</style>