<template>
    <section class="section_heroes">
        <div class="section_container">
                <article class="section_hero">
                    <div class="hero_htext">
                        <h1 class="h1h2_style">naši špecialisti</h1>
                        <h1 class="h1h2_style">
                            <span class="highlighted_box">piliere</span> <span class="highlighted_box">vášho</span> <span class="highlighted_box special_width">úsmevu</span>
                        </h1>
                    </div>
                        <p>
                            Stretnite sa s naším tímom skúsených zubných lekárov, ktorí sú odhodlaní prinášať vám tú najlepšiu možnú starostlivosť. 
                            Naša prax je založená na dôvere, odbornosti a inováciách v oblasti dentálnej medicíny.
                        </p>
                    <div class="hero_buttons">
                        <button class="blue_button">Objednať elektronicky</button>
                        <button class="contact_button">
                            <span class="icon">
                                <img src="../assets/img/phone_icon.svg" alt="">
                            </span>
                            <div class="call_button">
                                <span class="phone_nuber">0900 000 000</span>
                                <span class="phone_text">Objednať telefonicky</span>
                            </div>
                        </button>
                    </div>
                </article>
                <figure class="hero_img">
                    <img src="../assets/img/heroimg.jpg" alt="">
                </figure>
            </div>
     </section>
</template>

<script>
 export default {
    name: 'HeroSection',
  };
</script>

<style scoped>
.section_heroes {
    background-color: #ffffff;
    max-width: 1440px;
    width: 100%;
}

.section_container {
    display: flex;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
}

article {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.h1h2_style {
    font-size: 62px;
    font-weight: 500;
    color: #132B58;
    text-transform: capitalize;
    text-align: start;
    line-height: 65.5px;
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
    bottom: 8px; /* Uprav vzdialenosť podčiarknutia od textu */
    width: 120%; /* Dávam  viac ako 100% width, tímto viem ovplivnovať ako sa rozťahuje effekt */
    height: 26px; /* Hrúbka podčiarknutia */
    background-color: #8CD3FF; /* Farba podčiarknutia */
    border-radius: 8px; /* Zaoblenie rohov */
    z-index: -1; /* Ak chceš, aby bolo podčiarknutie pod textom */
}

.special_width::after {
    width: 115%;
}

.hero_buttons {
    display: flex;
    gap: 10px;
}

.blue_button {
    width: 301px;
    height: 48px;
    border: none;
    border-radius: 8px;
    gap: 10px;
    background-color: #1376F8;
    color: #ffffff;
    padding: 10px 46px;
    margin: 16px;
    margin: 32px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
}

.hero_buttons .blue_button {
    margin: 32px 0;
}

.icon {
    margin: 0;
    width: 48px;
    height: 48px;
}

span.icon {
    margin: 0;
}

.contact_button {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0.6em 1.2em;
    background-color: transparent;
}

.call_button {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.phone_nuber {
    font-size: 24px;
    font-weight: 600;
    margin: 0;
}

.phone_text {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    color: #2F98FF;
}

.hero_img img {
    width: 100%;    
    max-width: 500px; 
    min-width: 350px; 
    height: auto;    
}

.hero_img {
    width: 545px;
    height: 525px;
    width: 100%;
}

p {
    margin: 24px 6px 24px 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 27.9px;
    text-align: start;
    color: #1E293B;
}

@media only screen and (max-width: 1100px) {
.section_container {
    display: block;
}

article {
    align-items: center;
}

p {
    max-width: 695px;
}
}

@media only screen and (max-width: 800px) {

.h1h2_style {
    font-size: 42px;
}

.highlighted_box::after {
    height: 17px;
}

.section_container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.hero_buttons {
    flex-direction: column;
    gap: 2px;
}

.hero_img {
    margin-top: 20px;
    width: 100%;
    max-width: none;
}

.contact_button {
    text-align: center;
    justify-content: center;
}

p {
    max-width: 469px;
}

}

@media only screen and (max-width: 500px) {
article {
    padding: 1rem;
}
}
</style>