<template>
    <div class="inner-container main-box">
        <div class="title-box">
            <div class="title-box-img">
                <img src="../../../assets/PROJECTS.svg" alt="">
            </div>
            <div class="title-box-right">
                <p class="title-box-text">
                    Explore our recent work <span class="text-style-light">and the</span> results we’ve delivered <span class="text-style-light">for</span> clients <span class="text-style-light">across industries.</span>
                </p>
                <button class=".main-style-button switch-btn light-btn-style">
                    <span class="switch-text switch-current">Start your project</span>
                    <span class="switch-text switch-next">Start your project</span>
                </button>
            </div>
        </div>
        <div class="projects-cards">
            <article class="projects-card">
                <div class="img-box">
                    <img src="../../../assets/img/test.png" alt="">
                    <button class="card-button switch-btn">
                        <span class="switch-text switch-current">
                            <img src="../../../assets/icons/ArrowUP.svg" alt="" class="card-btn-img">
                        </span>
                        <span class="switch-text switch-next">
                            <img src="../../../assets/icons/ArrowUP.svg" alt="" class="card-btn-img">
                        </span>
                    </button>
                </div>
                <div class="card-info">
                    <div class="card-info-left">
                        <h3>Weg Trans</h3>
                        <p>Internatinal Transport</p>
                    </div>
                    <p class="card-info-text">Brand identity, website, social media content, and office wallpapers.</p>
                    <p class="card-info-date">2023</p>
                </div>
            </article>

            <article class="projects-card">
                <div class="img-box">
                    <img src="../../../assets/img/test.png" alt="">
                    <button class="card-button switch-btn">
                        <span class="switch-text switch-current">
                            <img src="../../../assets/icons/ArrowUP.svg" alt="" class="card-btn-img">
                        </span>
                        <span class="switch-text switch-next">
                            <img src="../../../assets/icons/ArrowUP.svg" alt="" class="card-btn-img">
                        </span>
                    </button>
                </div>
                <div class="card-info">
                    <div class="card-info-left">
                        <h3>Weg Trans</h3>
                        <p>Internatinal Transport</p>
                    </div>
                    <p class="card-info-text">Brand identity, website, social media content, and office wallpapers.</p>
                    <p class="card-info-date">2023</p>
                </div>
            </article>

            <article class="projects-card">
                <div class="img-box">
                    <img src="../../../assets/img/test.png" alt="">
                    <button class="card-button switch-btn">
                        <span class="switch-text switch-current">
                            <img src="../../../assets/icons/ArrowUP.svg" alt="" class="card-btn-img">
                        </span>
                        <span class="switch-text switch-next">
                            <img src="../../../assets/icons/ArrowUP.svg" alt="" class="card-btn-img">
                        </span>
                    </button>
                </div>
                <div class="card-info">
                    <div class="card-info-left">
                        <h3>Weg Trans</h3>
                        <p>Internatinal Transport</p>
                    </div>
                    <p class="card-info-text">Brand identity, website, social media content, and office wallpapers.</p>
                    <p class="card-info-date">2023</p>
                </div>
            </article>

            <article class="projects-card">
                <div class="img-box">
                    <img src="../../../assets/img/test.png" alt="">
                    <button class="card-button switch-btn">
                        <span class="switch-text switch-current">
                            <img src="../../../assets/icons/ArrowUP.svg" alt="" class="card-btn-img">
                        </span>
                        <span class="switch-text switch-next">
                            <img src="../../../assets/icons/ArrowUP.svg" alt="" class="card-btn-img">
                        </span>
                    </button>
                </div>
                <div class="card-info">
                    <div class="card-info-left">
                        <h3>Weg Trans</h3>
                        <p>Internatinal Transport</p>
                    </div>
                    <p class="card-info-text">Brand identity, website, social media content, and office wallpapers.</p>
                    <p class="card-info-date">2023</p>
                </div>
            </article>
        </div>
        <div class="box-down">
            <p class="box-down-text">
                How can your project look like? 
                <img src="../../../assets/icons/RightArrow.svg" alt="" class="box-down-icon">
            </p>
            <button class="second-btn-style box-down-btn switch-btn">
                <span class="switch-text switch-current">See recent work</span>
                <span class="switch-text switch-next">See recent work</span>
            </button>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .main-box {
        padding-bottom: 200px;
    }

    .title-box {
        display: flex;
        justify-content: space-between;
        margin-bottom: 100px;
    }

    .title-box-img {
        width: 60%;
    }

    .title-box-right {
        display: flex;
        flex-direction: column;
        width: 30%;
        height: 100%;
        row-gap: 50px;
        align-self: flex-end;
    }

    .title-box-text {
    color: var(--main-color-black);
    font-size: 18px;
    font-weight: 400;
    }

    .title-box-right button {
        padding: 26px 87px;
        align-self: flex-start;
    }

    .projects-cards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 60px;
        column-gap: 20px;
        padding-bottom: 80px;
    }

    .projects-card {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
    }

    .img-box {
        position: relative;
    }

    .card-button {
        position: absolute;
        right: 5%;
        bottom: 8%;
        background: transparent;
        border: solid 2px #FFFFFFCC;
        padding: 35px;
        border-radius: 50%;
        transform: rotate(45deg);
    }

    .card-btn-img {
        width: 35px;
        height: 34px;
    }

    .card-info {
        display: flex;
        justify-content: space-between;
        gap: 15px;
    }

    .card-info-date {
        display: flex;
        flex: 1 1 auto;
        order: 3;
        justify-content: end;
        align-self: start;
    }

    .card-info-left {
        flex: 1 1 auto;
        order: 1;
    }

    .card-info-text {
        flex: 1 1 auto;
        order: 2;
    }

    .card-info-date {
        flex: 1 1 auto;
        order: 3;
        display: flex;
        justify-content: flex-end;
    }

    .card-info-left p, .card-info-left h3 {
        font-size: 16px;
    }

    .card-info-left p {
        color: var(--main-second-color);
        font-weight: 300;
    }

    .card-info-left h3 {
        color: var(--main-color-black);
        font-weight: 500;
    }

    .card-info-text, .card-info-date {
        font-size: 14px;
        font-weight: 300;
        color: var(--main-color-black);
    }

    .box-down {
        display: flex;
        justify-content: center;
        background-color: #F9FAFB;
        padding: 28px;
        column-gap: 20px;
    }

    .box-down-text {
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: 400;
        column-gap: 20px;
    }

    .box-down-icon {
        width: 24px;
        height: auto;
    }

    @media (max-width: 1420px) {
        .card-info {
            flex-wrap: wrap;
        }

        .card-info-left {
            order: 1;
            flex: 1 1 40%;
        }

        .card-info-date {
            order: 2;
            flex: 1 1 20%;
            justify-content: flex-end;
        }

        .card-info-text {
            order: 3;
            flex-basis: 100%;
        }
        
    }

    @media (max-width: 900px) {
        .title-box {
            flex-direction: column;
            row-gap: 35px;
        }

        .title-box-right {
            align-self: flex-start;
            row-gap: 35px;
        }

        .title-box-img, .title-box-right {
            width: 100%;
        }
    }

    @media (max-width: 800px) {
        .projects-cards {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    @media (max-width: 600px) {
        .title-box-right button {
            width: 100%;
        }
        
        .box-down, .box-down-text {
            flex-direction: column;
            row-gap: 10px;
        }

        .box-down-text {
            font-size: 16px;
        }

        .box-down-icon {
          transform: rotate(90deg);
        }

        .box-down-btn {
            padding: 16px 31px;
        }

        .main-box {
            padding-bottom: 100px;
        }
    }
</style>