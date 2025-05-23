<template>
  <div class="inner-container main-box" id="allprojects">
    <h2 class="main-title">Gallery <img src="../../../assets/icons/TextArrayLarge.svg" alt="" class="text-array-icon"> Other creative projects</h2>
    <div class="break break-padding"></div>

    <div class="cards">
      <article class="card">
        <div class="img-box">
          <img src="../../../assets/img/ProjectsCards/WegRent.webp" alt="">
        </div>
        <div class="card-info">
          <p>WegRent / Car rental logo / 2023</p>
        </div>
      </article>

      <article class="card">
        <div class="img-box">
          <img src="../../../assets/img/ProjectsCards/SlovenskeGranule.webp" alt="">
        </div>
        <div class="card-info">
          <p>Slovenské Granule / e-commerce / 2020</p>
        </div>
      </article>

      <article class="card">
        <div class="img-box">
          <img src="../../../assets/img/ProjectsCards/Worqel.webp" alt="">
        </div>
        <div class="card-info">
          <p>Worqel / job founder / SaaS / 2020</p>
        </div>
      </article>

      <article class="card offset-up">
        <div class="img-box">
          <img src="../../../assets/img/ProjectsCards/Sweetland.webp" alt="">
        </div>
        <div class="card-info">
          <p>Sweetland / Patisserie socials / 2023</p>
        </div>
      </article>

      <article class="card card-wide">
        <div class="img-box">
          <img src="../../../assets/img/ProjectsCards/WegTrans01.webp" alt="">
        </div>
        <div class="card-info">
          <p>WegTrans / Freight forwarding / 2023</p>
        </div>
      </article>

      <article class="card offset-up">
        <div class="img-box">
          <img src="../../../assets/img/ProjectsCards/YOGAYNbyPetra01.webp" alt="">
        </div>
        <div class="card-info">
          <p>YOGAYN by Petra / Yoga studio / Logo / 2024</p>
        </div>
      </article>

      <article class="card offset-up-2">
        <div class="img-box">
          <img src="../../../assets/img/ProjectsCards/Galaxys.webp" alt="">
        </div>
        <div class="card-info">
          <p>Galaxys / Game development / 2022</p>
        </div>
      </article>

      <article class="card offset-up-2">
        <div class="img-box">
          <img src="../../../assets/img/ProjectsCards/Nuvo.webp" alt="">
        </div>
        <div class="card-info">
          <p>Nuvo / All for mobile / 2023</p>
        </div>
      </article>

      <article class="card card-tall offset-up-3">
        <div class="img-box">
          <img src="../../../assets/img/ProjectsCards/UsporneKlimy.webp" alt="">
        </div>
        <div class="card-info">
          <p>Úsporné Klímy / Air conditioning shop / 2023</p>
        </div>
      </article>

      <article class="card offset-up-2">
        <div class="img-box">
          <img src="../../../assets/img/ProjectsCards/STAVBY-KK.webp" alt="">
        </div>
        <div class="card-info">
          <p>STAVBY KK / Construction company / App icon / 2024</p>
        </div>
      </article>

      <article class="card offset-up-2">
        <div class="img-box">
          <img src="../../../assets/img/ProjectsCards/3deCreative.webp" alt="">
        </div>
        <div class="card-info">
          <p>3de creative / Bespoke kitchens and interiors / 2022</p>
        </div>
      </article>

      <article class="card offset-up-2">
        <div class="img-box">
          <img src="../../../assets/img/ProjectsCards/YOGAYNbyPetra02.webp" alt="">
        </div>
        <div class="card-info">
          <p>YOGAYN by Petra / Yoga studio / Social Media / 2024</p>
        </div>
      </article>

      <article class="card offset-up-4">
        <div class="img-box">
          <img src="../../../assets/img/ProjectsCards/WegTrans02.webp" alt="">
        </div>
        <div class="card-info">
          <p>WegTrans / Freight forwarding / 2023</p>
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
}

.main-title {
  color: var(--main-color-black);
  font-size: 50px;
  font-weight: 300;
}

.break {
  border-bottom: 1px solid #EAECF0;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.img-box img {
   width: 100%;
  height: auto;
  object-fit: cover;
}

.card-info {
    color: var(--main-color-black);
  font-size: 14px;
  font-weight: 300;
}

.card.offset-up {
  transform: translateY(-200px);
}

.card.offset-up-2 {
  transform: translateY(-180px);
}

.card.offset-up-3 {
  transform: translateY(-270px);
}

.card.offset-up-4 {
  transform: translateY(-280px);
}

/* Špeciálne veľkosti kariet */
.card-wide {
  grid-column: span 2;
}

.card-tall {
  grid-row: span 2;
}

.card-banner {
  grid-column: span 3;
}

.text-array-icon {
    width: 40px;
    height: 40px;
    vertical-align: middle;
    transform: translateY(-2px);
}

/* Responzivita - všetky karty sa zmenšia na mobile */
@media (max-width: 768px) {
  .cards {
    grid-template-columns: 1fr;
  }

  .card-wide,
  .card-tall,
  .card-banner {
    grid-column: span 1;
    grid-row: span 1;
  }

  .card.offset-up,
  .card.offset-up-2,
  .card.offset-up-3,
  .card.offset-up-4 {
      transform: translateY(0px);
  }

  .main-box {
    padding-bottom: 100px;
  }
}
</style>