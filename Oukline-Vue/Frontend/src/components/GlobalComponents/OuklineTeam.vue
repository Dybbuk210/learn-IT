!<template>
    <div class="inner-container">
        <div class="cards">
            <article class="card">
                <div class="img-box">
                    <img class="card-img" src="../../assets/img/teamcards/Alex.webp" alt="Alex Varga – Founding Partner, Director & UX/UI Designer">
                </div>
                <div class="card-info">
                    <h3 class="card-title">Alex Varga - Founding Partner</h3>
                    <p class="card-text">Director & UX/UI Designer</p>
                </div>
            </article>

            <article class="card">
                <div class="img-box">
                    <img class="card-img" src="../../assets/img/teamcards/Ado.webp" alt="Adrián Gombala – Founding Partner, UX/UI Designer and Brand Designe">
                </div>
                <div class="card-info">
                    <h3 class="card-title">Adrián Gombala - Founding Partner</h3>
                    <p class="card-text">UX/UI Designer, Brand Designer</p>
                </div>
            </article>

            <article class="card">
                <div class="img-box">
                    <img class="card-img" src="../../assets/img/teamcards/Filip.webp" alt="Filip Moniš – Full-stack Developer">
                </div>
                <div class="card-info">
                    <h3 class="card-title">Filip Moniš - Development</h3>
                    <p class="card-text">Full-stack Developer</p>
                </div>
            </article>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 20px;
    }

    .card {
        display: flex;
        flex-direction: column;
        row-gap: 17px;
    }

    .card-img {
        border-radius: 6px;
    }

    .card-info {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
    }

    .card-text {
        font-size: 16px;
        font-weight: 300;
        color: var(--main-color-black);
    }

    .card-title {
        font-weight: 400;
        font-size: 17px;
        color: var(--main-color-black);
    }

    .card-text {
        font-weight: 300;
    }

    @media (max-width: 980px) {
        .cards {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 50px;
        }
    }

    @media (max-width: 500px) {
        .cards {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>