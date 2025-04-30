!<template>
    <div class="inner-container">
        <div class="cards">
            <article class="card">
                <div class="img-box">
                    <img src="../../assets/img/teamcards/Ado.png" alt="">
                </div>
                <div class="card-info">
                    <h3 class="card-title">Adrián Gombala - Founding Partner</h3>
                    <p class="card-text">UX/UI Designer, Brand Designer</p>
                </div>
            </article>

            <article class="card">
                <div class="img-box">
                    <img src="../../assets/img/teamcards/Ado.png" alt="">
                </div>
                <div class="card-info">
                    <h3 class="card-title">Adrián Gombala - Founding Partner</h3>
                    <p class="card-text">UX/UI Designer, Brand Designer</p>
                </div>
            </article>

            <article class="card">
                <div class="img-box">
                    <img src="../../assets/img/teamcards/Ado.png" alt="">
                </div>
                <div class="card-info">
                    <h3 class="card-title">Adrián Gombala - Founding Partner</h3>
                    <p class="card-text">UX/UI Designer, Brand Designer</p>
                </div>
            </article>

            <article class="card">
                <div class="img-box">
                    <img src="../../assets/img/teamcards/Ado.png" alt="">
                </div>
                <div class="card-info">
                    <h3 class="card-title">Adrián Gombala - Founding Partner</h3>
                    <p class="card-text">UX/UI Designer, Brand Designer</p>
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
        grid-template-columns: repeat(4, 1fr);
        column-gap: 20px;
    }

    .card {
        display: flex;
        flex-direction: column;
        row-gap: 17px;
    }

    .card-info {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
    }

    .card-title .card-text {
        font-size: 16px;
        color: var(--main-color-black);
    }

    .card-title {
        font-weight: 400;
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