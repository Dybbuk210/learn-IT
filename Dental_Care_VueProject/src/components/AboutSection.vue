<template>
    <section class="about">
            <article class="about_section">
                <div class="mobile_container">
                    <div class="about_text">
                        <h1 class="h1h2_style">o našej ambulancii</h1>
                        <h1 class="h1h2_style">
                            <span class="highlighted_box">záväzok</span> <span class="highlighted_box">k</span> <span class="highlighted_box special_width">excelentnosti</span>
                        </h1>
                        <p>
                            Vítame vás v našej zubnej klinike, kde kombinujeme roky skúseností s modernou technológiou, aby sme vám zaistili nielen krásny, ale hlavne zdravý úsmev.
                        </p>
                        <button>Zistiť viac</button>
                    </div>
                    <figure class="about_img">
                            <img src="../assets/img/aboutimg.jpg" alt="image of about section" class="about_img">
                    </figure>
                </div>
            </article>
    </section>
</template>

<script>
export default {
    name: 'AboutSection',
};
</script>

<style scoped>
    .about {
        max-width: 1440px;
        width: 100%;
        padding: 60px 0;
        background-color: #EEF8FF;
        color: #132B58;
    }

    article {
        max-width: 1280px;
        width: 100%;
        display: flex;
        padding: 1rem;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

        p {
            max-width: 469px;
            font-size: 18px;
            font-weight: 400;
            line-height: 27.9px; 
            text-align: start;
            margin: 24px 0;
            letter-spacing: 1px;
        }
    
    button {
        display: inline-block;
        width: 183px;
        height: 48px;
        border-radius: 8px;
        background-color: #132B58;
        color: #EEF8FF;
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
    width: 135%; /* Dávam  viac ako 100% width, tímto viem ovplivnovať ako sa rozťahuje effekt */
    height: 16px; /* Hrúbka podčiarknutia */
    background-color: #56B8FF; /* Farba podčiarknutia */
    border-radius: 8px; /* Zaoblenie rohov */
    z-index: -1; /* Ak chceš, aby bolo podčiarknutie pod textom */
}

.special_width::after {
    width: 110%;
}

.about_img img {
    display: none;
    margin: 2rem auto;
    width: 100%;
    max-width: 615px;
    min-width: 350px;
    height: auto;
    border-radius: 8px;

}

@media only screen and (min-width: 570px) {
    .about_img img {
        display: block;
    }
}

@media only screen and (min-width: 1100px) {

    .about_text {
        margin: 0 1rem;
    }

   .mobile_container {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
   }

   button {
    display: flex;
    align-items: start;
    justify-content: center;
}

article {
    padding: 0;
}

.about_img img {
    margin: 0;
}

 }
</style>