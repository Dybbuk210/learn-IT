<template>
  <div class="inner-container main-padding-top">
    <router-link :to="`/interview01`">
      <div class="main-box">
        <!-- SVG pozadie -->
        <div class="background-svg">
          <img src="../../../assets/BackgroundCards/TopCard.svg" alt="">
        </div>

        <!-- Obsah karty -->
        <div class="img-box">
          <img src="../../../assets/img/Interviews/Miguel Queirós.jpg" alt="">
        </div>

        <div class="info-box">
          <div class="info-up">
            <div class="info-up-textbox">
              <h2 class="info-up-title">Miguel <br class="up-break">Queirós</h2>
              <p class="info-up-text">
                <img src="../../../assets/icons/TextArraySmall.svg" alt="" class="text-array-icon">
                Designer & Framer Creator
              </p>
            </div>

            <div class="card-button-box">
              <div class="img-box-mobile">
                <img src="../../../assets/img/Interviews/Miguel Queirós.jpg" alt="">
              </div>
              <button class="card-button switch-btn">
                <span class="switch-text switch-current">
                  <img src="../../../assets/icons/ArrowUpBlack.svg" alt="">
                </span>
                <span class="switch-text switch-next">
                  <img src="../../../assets/icons/ArrowUpBlack.svg" alt="">
                </span>
              </button>
            </div>

            <button class="card-button switch-btn desktop-button">
              <span class="switch-text switch-current">
                <img src="../../../assets/icons/ArrowUpBlack.svg" alt="">
              </span>
              <span class="switch-text switch-next">
                <img src="../../../assets/icons/ArrowUpBlack.svg" alt="">
              </span>
            </button>
          </div>

          <div class="info-down">
            <h2 class="info-down-title">
              <span class="text-style-light">The secret is building</span>
              <br class="down-break">a personal brand.
            </h2>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.main-padding-top {
  padding-top: 100px;
}

.main-box {
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px 26px 26px 26px;
  background-color: #F9FAFB;
  border: solid 1px #EDEDED;
  column-gap: 50px;
  row-gap: 25px;
  border-radius: 3px;
  z-index: 1;
}

.background-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.background-svg img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.img-box {
  max-width: 450px;
  height: auto;
  border-radius: 3px;
  position: relative;
  z-index: 1;
}

.info-box {
  display: flex;
  flex-direction: column;
  row-gap: 92px;
  flex: 1;
  min-width: 0;
  position: relative;
  z-index: 1;
}

.info-up {
  display: flex;
  justify-content: space-between;
}

.info-up-textbox {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}

.info-up-title {
  color: var(--main-color-black);
  font-size: clamp(42px, 4vw, 64px);
  font-weight: 600;
  line-height: 1;
}

.info-up-text {
  color: #000;
  font-size: 20px;
  font-weight: 300;
}

.card-button {
  aspect-ratio: 1 / 1;
  width: auto;
  height: 100%;
  border: 2px solid #151515;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 25px;
  box-sizing: border-box;
  transform: rotate(45deg);
}

.card-button img {
  width: 29px;
  height: 28px;
  object-fit: contain;
}

.info-down-title {
  color: var(--main-color-black);
  font-size: clamp(38px, 4vw, 50px);
  font-weight: 300;
}

.img-box-mobile {
  max-width: 100px;
}

.card-button-box {
  justify-content: space-between;
  display: none;
}

.text-array-icon {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  transform: translateY(-1px);
}
</style>