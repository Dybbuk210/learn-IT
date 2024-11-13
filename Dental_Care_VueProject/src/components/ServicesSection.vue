<template>
   <section class="services">
        <article class="container">
            <div class="services_text">
                <h1 class="h1h2_style">naše</h1>
                <h1 class="h1h2_style"><span class="highlighted_box">Služby</span></h1>
            </div>

            <p>
                Ponúkame širokú škálu zubných procedúr, od preventívnej starostlivosti po pokročilé rekonštrukčné zákroky. Objavte, ako vám môžeme pomôcť.
            </p>

            <section class="services_cards">

                <div class="services_card">
                    <span class="card_img">
                        <img src="../assets/img/services/card01.svg" alt="">
                    </span>
                    <h4>Preventívna kontrola</h4>
                    <p>Chcete žiarivý úsmev? Naše služby estetickej stomatológie, ako sú bielenie zubov, porcelánové fazety a bonding, vám pomôžu dosiahnuť túžený vzhľad.</p>
                    <button>
                        Zistiť viac 
                        <span class="card_button"><img src="..//assets/img/services/card_button.svg" alt=""></span>
                    </button>
                </div>

                <div class="services_card">
                    <span class="card_img">
                        <img src="../assets/img/services/card02.svg" alt="">
                    </span>
                    <h4>Estetická Stomatológia</h4>
                    <p>Chcete žiarivý úsmev? Naše služby estetickej stomatológie, ako sú bielenie zubov, porcelánové fazety a bonding, vám pomôžu dosiahnuť túžený vzhľad.</p>
                    <button>
                        Zistiť viac 
                        <span class="card_button"><img src="..//assets/img/services/card_button.svg" alt=""></span>
                    </button>
                </div>

                <div class="services_card">
                    <span class="card_img">
                        <img src="../assets/img/services/card03.svg" alt="">
                    </span>
                    <h4>Detská Stomatológia</h4>
                    <p>Špeciálne služby pre deti sú navrhnuté tak, aby boli zábavné a nebojácne, zatiaľ čo zároveň poskytujú komplexnú starostlivosť o zuby a ďasná v tých najkrehkejších rokoch.</p>
                    <button>
                        Zistiť viac 
                        <span class="card_button"><img src="..//assets/img/services/card_button.svg" alt=""></span>
                    </button>

                </div>
            </section>

        </article>
   </section>
</template>

<script>
export default {
    name: 'ServicesSection',
}
</script>

<style scoped>

.services {
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

p {
    min-width: 328px;
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    line-height: 27.9px; 
    text-align: start;
    margin: 2rem 0;
    letter-spacing: 1px;
}

.services_text {
    display: flex;
    width: 261px;
    height: 53px;
    justify-content: space-between;
}

.h1h2_style {
    font-size: 42px;
    font-weight: 500;
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

.services_cards {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 3rem;
}

.services_card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    min-width: 343px;
    max-width: 387px;
    height: 430px;
    background-color: #EEF8FF;
    border: solid 2px #BBE3FF;
    border-radius: 16px;
    opacity: 90%;
    padding: 2px;
}

.services_card h4 {
    font-size: 24px;
    font-weight: 600;
    color: #132B58;
}

.services_card p {
    text-align: center;
    justify-content: center;
    color: #334155;
    letter-spacing: 1px;
    line-height: 24.8px;
    margin: 0;
}
 
.card_img {
    display: flex;
    width: 123px;
    height: 122px;
    border-radius: 8px;
    background-color: #56B8FF;
    box-shadow: 0 12px 41.8px -14px #2F98FF;
    justify-content: center;
    align-items: center;
}

.card_img img {
    height: 80px;
    width: 80px;
}

.services_card button {
    width: 121px;
    height: 33.88px;
    padding: 0;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: transparent;
}

.services_card button span {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (min-width: 1120px) {

.services_cards {
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;
}

}
</style>