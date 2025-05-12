<template>
    <div class="inner-container main-box">
        <h2 class="main-title">Gallery → Other creative projects</h2>
        <div class="break break-padding"></div> <!-- prázdny div služi len na effekt -->
        <div class="cards">
            <article class="card">
                <div class="img-box">
                    <img src="../../../assets/img/ProjectsCards/WegRent.png" alt="">
                </div>
                <div class="card-info">
                    <p>WegRent  /  Car rental logo  /  2023</p>
                </div>
            </article>

            <article class="card">
                <div class="img-box">
                    <img src="../../../assets/img/ProjectsCards/SlovenskéGranule.png" alt="">
                </div>
                <div class="card-info">
                    <p>Slovenské Granule  /  e-commerce  /  2020</p>
                </div>
            </article>

             <article class="card">
                <div class="img-box">
                    <img src="../../../assets/img/ProjectsCards/Worqel.png" alt="">
                </div>
                <div class="card-info">
                    <p>Worqel  /  job founder  /  SaaS  /  2020</p>
                </div>
            </article>

             <article class="card">
                <div class="img-box">
                    <img src="../../../assets/img/ProjectsCards/Sweetland.png" alt="">
                </div>
                <div class="card-info">
                    <p>Sweetland  /  Patisserie socials  /  2023</p>
                </div>
            </article>

            <article class="card">
                <div class="img-box">
                    <img src="../../../assets/img/ProjectsCards/WegTrans01.png" alt="">
                </div>
                <div class="card-info">
                    <p>WegTrans  /  Freight forwarding  /  2023</p>
                </div>
            </article>

            <article class="card">
                <div class="img-box">
                    <img src="../../../assets/img/ProjectsCards/YOGAYNbyPetra01.png" alt="">
                </div>
                <div class="card-info">
                    <p>YOGAYN by Petra  /  Yoga studio  /  Logo  /  2024</p>
                </div>
            </article>

            <article class="card">
                <div class="img-box">
                    <img src="../../../assets/img/ProjectsCards/Galaxys.png" alt="">
                </div>
                <div class="card-info">
                    <p>Galaxys  /  Game development  /  2022</p>
                </div>
            </article>

            <article class="card">
                <div class="img-box">
                    <img src="../../../assets/img/ProjectsCards/Nuvo.png" alt="">
                </div>
                <div class="card-info">
                    <p>Nuvo  /  All for mobile  /  2023</p>
                </div>
            </article>

            <article class="card">
                <div class="img-box">
                    <img src="../../../assets/img/ProjectsCards/ÚspornéKlímy.png" alt="">
                </div>
                <div class="card-info">
                    <p>Úsporné Klímy  /  Air conditioning shop  /  2023</p>
                </div>
            </article>

            <article class="card">
                <div class="img-box">
                    <img src="../../../assets/img/ProjectsCards/STAVBY KK.png" alt="">
                </div>
                <div class="card-info">
                    <p>STAVBY KK  /  Construction company  /  App icon  /  2024</p>
                </div>
            </article>

            <article class="card">
                <div class="img-box">
                    <img src="../../../assets/img/ProjectsCards/3deCreative.png" alt="">
                </div>
                <div class="card-info">
                    <p>3de creative  /  Bespoke kitchens and interiors  /  2022</p>
                </div>
            </article>

            <article class="card">
                <div class="img-box">
                    <img src="../../../assets/img/ProjectsCards/YOGAYNbyPetra02.png" alt="">
                </div>
                <div class="card-info">
                    <p>YOGAYN by Petra  /  Yoga studio  /  Social Media  /  2024</p>
                </div>
            </article>

            <article class="card">
                <div class="img-box">
                    <img src="../../../assets/img/ProjectsCards/WegTrans02.png" alt="">
                </div>
                <div class="card-info">
                    <p>WegTrans  /  Freight forwarding  /  2023</p>
                </div>
            </article>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .main-box {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
        padding-bottom: 200px;
    }

    .main-title {
        color: var(--main-color-black);
        font-size: 50px;
        font-weight: 300;
    }

    .break {
        border-bottom: 1px solid #EAECF0;
    }

    /* Test girdu */
.cards {
  column-count: 3;
  column-gap: 30px;
}

.card {
  display: inline-block;
  background: white;
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  width: 100%;
}

.card img {
  width: 100%;
  display: block;
}

.card p {
  padding: 15px;
  font-size: 14px;
}

</style>