<template>
  <header>

    <nav>
        <a href="/" class="logo">
            <img src="../assets/img/logo_nav.svg" alt="logo of the website">
        </a>

        <!-- Hlavná navigácia -->
        <div class="nav_button_box">
        <ul class="test">
            <li>
              <div class="dropdown_li" @click="toggle_dropdown">
                <a href="javascript:void(0)">Kurzy</a>
                <i><img src="../assets/img/dropdown_icon.svg" alt=""></i>
              </div>
                <ul class="nav_dropdown" v-show="dropdown_open">
                  <li><a href="#">Kurz 1</a></li>
                  <li><a href="#">Kurz 2</a></li>
                  <li><a href="#">Kurz 3</a></li>
                  <li><a href="#">Kurz 4</a></li>
                </ul>
            </li>

            <li>
                <a href="">O nás</a>
            </li>

            <li>
                <a href="">Blog</a>
            </li>

            <li>
                <a href="">Kontakt</a>
            </li>
        </ul>
        <button class="nav_button">Kontaktujte nás</button>
      </div>

      <!-- Mobilná navigácia -->
      <div class="mobile_nav">
        <div v-if="mobile_menu_open" class="mobile_nav_box">
          <ul>
              <li>
                <div class="dropdown_li" @click="toggle_dropdown_mobile">
                  <a href="javascript:void(0)">Kurzy</a>
                  <i><img src="../assets/img/dropdown_icon.svg" alt=""></i>
                </div>
                  <ul class="nav_dropdown" v-show="dropdown_open_mobile">
                    <li><a href="#">Kurz 1</a></li>
                    <li><a href="#">Kurz 2</a></li>
                    <li><a href="#">Kurz 3</a></li>
                    <li><a href="#">Kurz 4</a></li>
                  </ul>
              </li>

              <li>
                  <a href="">O nás</a>
              </li>

              <li>
                  <a href="">Blog</a>
              </li>

              <li>
                  <a href="">Kontakt</a>
              </li>
          </ul>
          <button class="nav_button">Kontaktujte nás</button>
        </div>

        <div class="burger_icon" @click="toggle_mobile_menu">
          <img v-if="!mobile_menu_open" src="../assets/img/svg-nav-open.svg" alt="open">
          <img v-else src="../assets/img/svg_nav_close.svg" alt="close">
        </div>

      </div>    
    </nav>

    <div class="header-container">
      
      <section class="text-container">
        <h2>Staňte sa expertom v stomatológii!</h2>
        <p>Vitajte na našich kurzoch pre zubných lekárov, fyzioterapeutov a študentov zubného lekárstva. Špecializujeme sa na orofaciálnu bolesť, dysfunkciu, opotrebovanie zubov a spánkovú medicínu. Naším cieľom je poskytovať vedecky podložené vzdelávanie, ktoré vám pomôže poskytovať pacientom komplexnú a kvalitnú starostlivosť.</p>
        <button type="button">Všetky naše kurzy</button>
      </section>
      
      <section class="images-container">
        <figure>
          <img src="../assets/img/hero_03.png" alt="Popis obrázku 1">
          <figcaption>Popis obrázku 1</figcaption>
        </figure>
        <figure>
          <img src="../assets/img/hero_02.png" alt="Popis obrázku 2">
          <figcaption>Popis obrázku 2</figcaption>
        </figure>
        <figure>
          <img src="../assets/img/hero_01.png" alt="Popis obrázku 3">
          <figcaption>Popis obrázku 3</figcaption>
        </figure>
      </section>
      
    </div>
  </header>
</template>

<script setup>
  import { ref } from 'vue';

  const dropdown_open = ref(false);
  const dropdown_open_mobile = ref(false);

  const toggle_dropdown = () => {
    dropdown_open.value = !dropdown_open.value;
  };

  const mobile_menu_open = ref(false);

const toggle_mobile_menu = () => {
  mobile_menu_open.value = !mobile_menu_open.value;
};

const toggle_dropdown_mobile = () => {
  dropdown_open_mobile.value = !dropdown_open_mobile.value;
};
</script>

<style scoped>
header {
  margin: 0 1rem;
}
nav {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: solid 1px #586A31;
}

.logo {
  margin-right: 70px;
}

.nav_button_box {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.nav_button_box ul {
  display: flex;
}

.nav_button_box ul li {
 display: flex;
 justify-content: center;
 align-items: center;
 position: relative;
}

ul li a {
  font-family: inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
  color: #212121;
}

ul li a:hover {
  color: #586A31;
}

ul li i {
  padding-left: 2px;
  display: flex;
  align-items: center;
}

.dropdown_li {
  display: flex;
  cursor: pointer;
}

ul li:not(:first-child) {
  margin-left: 26px;
}

.nav_dropdown li:not(:first-child) {
  margin: 0;
}

.nav_button {
  width: 130px;
  height: 48px;
  border-radius: 4px;
  background-color: #414F22;
  font-family: Inter;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 19.6px;
  padding: 0;
}

.nav_button:hover {
  background-color: #586A31;
}

 .nav_dropdown {  /* 🟠 Vylepšený štýl dropdownu */
   position: absolute;
   top: 100%;
   left: -16px;
   background-color: #fff;
   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
   border-radius: 4px;
   z-index: 10;
   padding: 16px;
   gap: 10px;
   display: flex;
   flex-direction: column;
   min-width: 200px;
   align-items: start;
   text-align: start;
 }

 .nav_dropdown li a {
  font-family: Inter;
  font-weight: 500;
  font-size: 16px;
  line-height: 22.4px;
  letter-spacing: -0.5px;
  color: #8B8986;
 }

 .mobile_nav_box {
  position: absolute;
  right: 2rem;
  top: 60px;
  width: 300px;
  overflow: hidden;
  background-color: #F3F3F1;
  padding: 1rem;
 }

 .mobile_nav_box > ul > li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
 }

 .mobile_nav {
  display: none;
 }

@media (max-width: 900px) {

  .mobile_nav_box .nav_dropdown {
    position: static;
    width: 100%;
    align-items: center;
    background-color: transparent;
    box-shadow: none;
    padding: 0;
    gap: 0;
  }

  nav {
    justify-content: space-between;
  }

  .nav_button_box {
    display: none;
  }

  .mobile_nav {
    display: block;
    align-self: center;
  }

  ul li:not(:first-child) {
  margin-left: 0;
  }
}

@media (max-width: 500px) {
.mobile_nav_box {
  right: 0;
  width: 100%;
}

}
</style>