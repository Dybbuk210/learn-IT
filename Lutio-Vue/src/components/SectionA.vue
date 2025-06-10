<template>
    <div class="main.container">
        <div class="main-img">
                <img src="../assets/poskitovatel/section-a-main.webp" alt=""> <!-- main-img -->
        </div>
        <div class="inner-container">

            <div class="galery-container box-width">
                <h2 class="galery-title">S nami je to jednoduchšie</h2> <!-- galery-title -->
                <div class="galery">
                    <div class="galery-left">
                        <article class="galery-card galery-card1">
                            <img src="../assets/poskitovatel/galery01.webp" alt=""> <!-- galery-img-01 -->
                            <h3 class="galery-card-text">Premeňte<br> odbornosť na zisk</h3> <!-- galery-img-01-title -->
                        </article>
                        <article class="galery-card galery-card2">
                            <img src="../assets/poskitovatel/galery02.webp" alt=""> <!-- galery-img-02 -->
                            <h3 class="galery-card-text">Rozšírte<br> svoju klientelu</h3> <!-- galery-img-02-title -->
                            <p class="galery-card-text">Lutio Vám pomáha získavať zákazníkov</p> <!-- galery-img-02-text -->
                        </article>
                    </div>

                    <div class="galery-right">
                        <article class="galery-card galery-card3">
                            <img src="../assets/poskitovatel/galery03.webp" alt=""> <!-- galery-img-03 -->
                            <h3 class="galery-card-text">Budujte si meno</h3> <!-- galery-img-03-title -->
                            <p class="galery-card-text">Pozitívne recenzie hovoria za vás</p> <!-- galery-img-03-text -->
                        </article>
                        <article class="galery-card galery-card1">
                            <img src="../assets/poskitovatel/galery04.webp" alt=""> <!-- galery-img-04 -->
                            <h3 class="galery-card-text">Žiadny šéf,<br> pracujte pre seba</h3> <!-- galery-img-04-title -->
                        </article>
                    </div>
                </div>
            </div>

            <div class="down-container box-width">
                <div class="down-title-box">
                    <div class="down-title-a-box">
                        <h2 class="down-title-a">3 jednoduché</h2>
                    </div>
                    <h2 class="down-title-b">kroky</h2>
                </div>
                <div class="down-cards">
                    <article class="down-card">
                        <img class="down-card-img" src="../assets/poskitovatel/card01.webp" alt=""> <!-- step-01-img -->
                        <div class="down-card-box">
                            <div class="card-subtitle">
                                <div class="subtitle-img">
                                    <img src="../assets/time.svg" alt=""> <!-- step-01-icon -->
                                </div>
                                <p class="subtitle-text">Hotovo do 3 minút!</p> <!-- step-01-subtitle -->
                            </div>
                            <h3 class="down-card-title">Vytvorte si účet</h3>
                            <p class="down-card-text">Registrácia je rýchla a jednoduchá. Vďaka vyplneniu siedmych krokov si zabezpečíte neprehliadnuteľný a zaujímavý profil.</p> <!-- step-01-text -->
                            <button class="down-card-button">Mám záujem</button>
                        </div>
                    </article>

                    <article class="down-card down-card-second">
                        <img class="down-card-img" src="../assets/poskitovatel/card02.webp" alt=""> <!-- step-02-img -->
                        <div class="down-card-box">
                            <div class="card-subtitle">
                                <div class="subtitle-img">
                                    <img src="../assets/file.svg" alt=""> <!-- step-02-icon -->
                                </div>
                                <p class="subtitle-text">Rýchlo a prehľadne</p> <!-- step-02-subtitle -->
                            </div>
                            <h3 class="down-card-title">Vytvárajte objednávky</h3> <!-- step-02-title -->
                            <p class="down-card-text">Po dohode so zákazníkom vytvoríte objednávku cez<br> formulár vo svojom profile. Zaberie to len pár sekúnd.</p> <!-- step-02-text -->
                        </div>
                    </article>

                    <article class="down-card">
                        <img class="down-card-img" src="../assets/poskitovatel/card03.webp" alt=""> <!-- step-03-img -->
                        <div class="down-card-box">
                            <div class="card-subtitle">
                                <div class="subtitle-img">
                                    <img src="../assets/money.svg" alt=""> <!-- step-03-icon -->
                                </div>
                                <p class="subtitle-text">Stabilný príjem vďaka Lutio</p> <!-- step-03-subtitle -->
                            </div>
                            <h3 class="down-card-title">Prijímajte platby </h3> <!-- step-03-title -->
                            <p class="down-card-text">Pracujte po svojom a nechajte si za<br> prácu spravodlivo zaplatiť.</p> <!-- step-03-text -->
                        </div>
                    </article>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .galery-container {
        padding: 130px 0;
        display: flex;
        flex-direction: column;
        row-gap: 120px;
    }

    .box-width {
        width: 80%;
        margin: 0 auto;
    }

    .galery-title {
        color: #09001D;
        text-align: center;
        font-size: 55px;
        font-size: clamp(40px, 5vw, 55px);
        font-style: normal;
        font-weight: 800;
        line-height: 70px;
        letter-spacing: -0.275px;
    }

    .galery {
        display: flex;
        column-gap: 30px;
    }

    .galery-left, .galery-right {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
    }

    .galery-card {
        position: relative;
        overflow: hidden;
    }

    .galery-card img {
        display: block;
        width: 100%;
        height: auto;
    }

    .galery-card-text {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }

    .down-container {
        display: flex;
        flex-direction: column;
        row-gap: 100px;
        padding-bottom: 130px;
    }

    .down-title-box {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 12px;
    }

    .down-title-a-box {
        background-color: #4D3EE2;
        padding: 0 16px;
        transform: rotate(-0.7deg);
    }

    .down-title-a {
        color: #FFF;
        text-align: center;
        font-size: clamp(40px, 5vw, 55px);
        font-weight: 800;
        line-height: 70px;
        transform: rotate(0.7deg);
    }

    .down-title-b {
        color: #000;
        text-align: center;
        font-size: clamp(40px, 5vw, 55px);
        font-weight: 800;
        line-height: 70px;
    }

    .down-cards {
        display: flex;
        flex-direction: column;
        row-gap: 100px;
    }

    .down-card {
        display: flex;
        column-gap: 80px;
        align-items: center;
    }

    .down-card-second {
        flex-direction: row-reverse;
    }

    .down-card-img {
        max-width: 400px;
        max-height: 400px;
    }

    .card-subtitle {
        display: flex;
        column-gap: 8px;
        padding-bottom: 8px;
    }

    .subtitle-img {
        aspect-ratio: 1 / 1;
        display: flex;
    }

    .subtitle-text {
        color: #4D3EE2;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
    }

    .down-card-title {
        color: #09001D;
        font-size: clamp(35px, 5vw, 45px);
        font-weight: 700;
        line-height: 60px;
        letter-spacing: -0.9px;
        padding-bottom: 25px;
    }

    .down-card-text {
        color: rgba(9, 0, 29, 0.60);
        font-size: clamp(16px, 5vw, 18px);
        font-weight: 400;
        line-height: 28px;
    }

    .down-card-button {
        color: #FFF;
        text-align: right;
        font-size: 14px;
        font-weight: 600;
        line-height: 22px;
        margin-top: 45px;
        padding: 10px 20px;
        border-radius: 100px;
        background: linear-gradient(0deg, #09001D 0%, #302C38 100%);
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.30);
    }

    @media (max-width: 1200px) {
        .box-width {
            width: 100%;
        }
    }

    @media (max-width: 1000px) {
        .down-card {
            column-gap: 30px;
        }

        .down-card-img {
            max-width: 300px;
            max-height: 300px;
        }
    }

    @media (max-width: 800px) {
        .galery-container {
            padding: 50px 0;
            row-gap: 50px;
        }

        .galery {
            flex-wrap: wrap;
            row-gap: 20px;
        }

        .galery-left, .galery-right {
            row-gap: 20px;
        }

        .galery-right {
            flex-direction: column-reverse;
        }

        .down-card {
            flex-direction: column-reverse;
            row-gap: 30px;
        }

        .down-cards {
            row-gap: 50px;
        }

        .down-card-box {
            width: 100%;
        }

        .down-card-button {
            width: 100%;
            text-align: center;
        }

        .down-card-title {
            line-height: 45px;
            letter-spacing: -0.7px;
        }

        .down-card-img {
            max-width: none;
            max-height: none;
        }
    }

    @media (max-width: 600px) {
        .galery-title {
            line-height: normal;
            letter-spacing: -0.2px;
        }

        br {
            display: none;
        }

        .down-title-box {
            flex-wrap: wrap;
        }

        .down-container {
            row-gap: 60px;
            padding-bottom: 50px;
        }
    }
</style>