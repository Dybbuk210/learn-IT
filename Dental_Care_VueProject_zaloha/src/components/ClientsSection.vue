<template>
    <section class="clients">
        <article class="clients_container">

            <div class="clients_text">
                <h1 class="h1h2_style">&nbsp;naši <span class="highlighted_box">spokojný</span> <span class="highlighted_box">klienti</span> povedali</h1>
            </div>

            <p class="client_p_text">
                Prečítajte si osobné príbehy našich pacientov, ktorí zažili kvalitnú starostlivosť a teraz si užívajú život s úsmevom.
            </p>

            <section class="clients_cards">

                <div class="client_card">
                    <div class="card_container">
                        <header class="card_header">
                            <span class="card_img">
                                <img src="../assets/img/client_card_img.jpg" alt="" class="card_img">
                            </span>
                            <div class="header_text">
                                <h4>Meno Priezvisko</h4>
                                <span class="stars"><img src="../assets/img/starsimg.svg" alt=""></span>
                            </div>
                        </header>
                        <p>
                            Úchvatný prístup a odborné služby! Náša rodina navštevuje túto kliniku už roky a vždy sme odchádzali s pocitom, že sme v tých najlepších rukách. Tím doktora je nekompromisne detailne orientovaný a empatický.
                        </p>
                    </div>
                </div>

                <div class="client_card card_2">
                    <div class="card_container">
                        <header class="card_header">
                            <span class="card_img">
                                <img src="../assets/img/client_card_img.jpg" alt="" class="card_img">
                            </span>
                            <div class="header_text">
                                <h4>Meno Priezvisko</h4>
                                <span class="stars"><img src="../assets/img/starsimg.svg" alt=""></span>
                            </div>
                        </header>
                        <p>
                            Úchvatný prístup a odborné služby! Náša rodina navštevuje túto kliniku už roky a vždy sme odchádzali s pocitom, že sme v tých najlepších rukách. Tím doktora je nekompromisne detailne orientovaný a empatický.
                        </p>
                    </div>
                </div>

                <div class="client_card card_3">
                    <div class="card_container">
                        <header class="card_header">
                            <span class="card_img">
                                <img src="../assets/img/client_card_img.jpg" alt="" class="card_img">
                            </span>
                            <div class="header_text">
                                <h4>Meno Priezvisko</h4>
                                <span class="stars"><img src="../assets/img/starsimg.svg" alt=""></span>
                            </div>
                        </header>
                        <p>
                            Úchvatný prístup a odborné služby! Náša rodina navštevuje túto kliniku už roky a vždy sme odchádzali s pocitom, že sme v tých najlepších rukách. Tím doktora je nekompromisne detailne orientovaný a empatický.
                        </p>
                    </div>
                </div>

            </section>
        </article>
        <div class="buttons_container">
            <button class="left"><img src="../assets/img/sipka_button.svg" alt=""></button>
            <button class="right"><img src="../assets/img/sipka_button.svg" alt=""></button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ClientsSection',
}
</script>

<style scoped>

.clients {
    max-width: 1440px;
    width: 100%;
    padding: 60px 0;
    background-color: #ffffff;
    color: #0F172A;
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

.client_p_text {
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
    background-color: #8CD3FF; /* Farba podčiarknutia */
    border-radius: 8px; /* Zaoblenie rohov */
    z-index: -1; /* Ak chceš, aby bolo podčiarknutie pod textom */
}

.clients_cards {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 1rem;
}

.client_card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 334px;
    min-height: 330px;
    border-radius: 16px;
    box-shadow: 0 10px 40px -22px;
}

.card_header {
    max-width: 277px;
    display: flex;
    text-align: center;
    justify-content: space-between;
}

.header_text {
    text-align: start;
    align-items: start;
}

.card_header h4 {
    font-size: 24px;
    font-weight: 600;
    line-height: 28.8px;
    color: #132B58;
    margin-bottom: 9px;
}

.client_card p {
    width: 289px;
    height: 175px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24.8px;
    color: #3C4959;
    margin: 15px auto;
    text-align: start;
}


.card_img {
    display: inline-block;
    justify-content: center;
    text-align: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
    width: 70px;
    height: 70px;
}

.card_img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.buttons_container {   
    width: 192px;
    height: 64px;
    display: flex;
    justify-content: space-between;
    margin: 1rem auto 0 auto;
    align-items: center;
}

button {
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #132B58;
}

.right img {
    transform: rotate(180deg);
}

.card_2, .card_3 {
    display: none;
}

@media (min-width: 800px) {
    
    article {
        align-items: center;
    }

    .cliens_text {
        width: 100%;
    }

    .h1h2_style {
        text-align: center;
    }

    .client_p_text {
        width: 100%;
        text-align: center;
        min-width: none;
        max-width: none;
    }

    .client_card {
        width: 413px;
        height: 290px;
    }

    .card_2 {
        display: flex;
    }
}

@media (min-width: 1200px) {
    .card_3 {
        display: flex;
    }
}

@media (min-width: 1280px) {
    article {
        padding: 0;
    }
}
</style>