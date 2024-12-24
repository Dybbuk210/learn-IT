<template>
     <section class="blog">
        <article class="blog_container">

            <div class="blog_text">
                <h1 class="h1h2_style">blog a <span class="highlighted_box">novinky</span></h1>
            </div>

            <p class="blog_p_text">
                Zostaňte informovaní o najnovších trendoch v dentálnej starostlivosti a zdravom životnom štýle s pravidelnými aktualizáciami od našich odborníkov.
            </p>

            <section class="blog_cards tablet-card">

                <div class="blog_card">
                    <span class="blog_img"><img src="../assets/img/blog_card.jpg" alt=""></span>
                    <h4>Starostlivosť o zuby</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div class="blog_card">
                    <span class="blog_img"><img src="../assets/img/blog_card.jpg" alt=""></span>
                    <h4>Starostlivosť o zuby</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div class="blog_card">
                    <span class="blog_img"><img src="../assets/img/blog_card.jpg" alt=""></span>
                    <h4>Starostlivosť o zuby</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div class="blog_card card_none">
                    <span class="blog_img"><img src="../assets/img/blog_card.jpg" alt=""></span>
                    <h4>Starostlivosť o zuby</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

            </section>

            <section class="blog_cards cards_2">

                <div class="blog_card">
                    <span class="blog_img"><img src="../assets/img/blog_card.jpg" alt=""></span>
                    <h4>Starostlivosť o zuby</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div class="blog_card">
                    <span class="blog_img"><img src="../assets/img/blog_card.jpg" alt=""></span>
                    <h4>Starostlivosť o zuby</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div class="blog_card">
                    <span class="blog_img"><img src="../assets/img/blog_card.jpg" alt=""></span>
                    <h4>Starostlivosť o zuby</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div class="blog_card">
                    <span class="blog_img"><img src="../assets/img/blog_card.jpg" alt=""></span>
                    <h4>Starostlivosť o zuby</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

            </section>

            <div class="button_container">
                <button>Zobraziť všetky</button>
            </div>

        </article>
    </section>
</template>

<script>
export default {
    name: 'BlogSection',
}
</script>

<style scoped>
.blog {
    max-width: 1440px;
    width: 100%;
    padding: 60px 0;
    background-color: #EEF8FF;
}

article {
    max-width: 1280px;
    width: 100%;
    display: flex;
    padding: 1rem;
    margin: 0 auto;
    align-items: start;
    justify-content: center;
    flex-direction: column;
}

.h1h2_style {
    font-size: 42px;
    font-weight: 500;
    line-height: 52.5px;
    color: #132B58;
    text-transform: capitalize;
    text-align: start;
}

.highlighted_box {
    position: relative;
    max-width: 700px;
    font-weight: 700;
    z-index: 5;
}

.highlighted_box::after {
    content: '';
    position: absolute;
    left: -10px; /* Left mi posúva effekt s kombináciou s width% dokažem aby viac slov mali svoj vlastný spam ale neostala medzi nimi medzera */
    bottom: 6px; /* Uprav vzdialenosť podčiarknutia od textu */
    width: 112%; /* Dávam  viac ako 100% width, tímto viem ovplivnovať ako sa rozťahuje effekt */
    height: 18px; /* Hrúbka podčiarknutia */
    background-color: #56B8FF; /* Farba podčiarknutia */
    border-radius: 8px; /* Zaoblenie rohov */
    z-index: -1; /* Ak chceš, aby bolo podčiarknutie pod textom */
}

.blog_p_text {
    max-width: 1056px;
    min-width: 328px;
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    line-height: 27.9px; 
    text-align: start;
    margin: 2rem 0;
    color: #0F172A;
    letter-spacing: 1.5%;
}

.tablet-card {
    display: none;
}

.blog_cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 17px;
}

.blog_card {
    max-width: 308px;
    max-height: 388px;
    background-color: #D9EFFF;
    border: 2px solid #BBE3FF;
    border-radius: 16px;
    box-shadow: 0px 10px 40px 0px #1376F80D;
    padding: 20px;
}

.blog_img {
    display: inline-block;
    width: 267px;
    height: 232px;
}

.blog_card h4 {
    font-size: 18px;
    font-weight: 600;
    line-height: 27.9px;
    letter-spacing: 1.5%;
    color: #011632;
    text-align: start;
    margin: 20px 0 10px 0;
}

.blog_card p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24.8px;
    text-align: start;
    color: #3C4959;
}

.blog_img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
}

.button_container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 3rem;
}

.cards_2 {
    display: none;
    margin-top: 2rem;
}

button {
    display: inline-block;
    width: 183px;
    height: 48px;
    border-radius: 8px;
    background-color: #132B58;
    color: #EEF8FF;
}
@media (min-width: 650px) {

.tablet-card {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    flex: 1 1 calc(50% - 16px); /* Dve karty vedľa seba */
}

.blog_card {
    flex: 1 1 calc(50% - 16px); /* Každá karta zaberie 50% šírky kontajnera mínus medzera */
  }

}

@media (min-width: 990px) {
    .card_none {
    display: none;
}
}

@media (min-width: 1280px) {

    article {
        padding: 0;
    }

    .card_none {
        display: block;
    }

    .tablet-card {
        display: none;
    }

    .blog_cards {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }

}

</style>