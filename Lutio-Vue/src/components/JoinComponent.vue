<template>
    <div class="main-box">
        <article class="card-box">
            <div class="img-box">
                <img src="../assets/fajka.svg" alt="">
            </div>
            <h3 class="title">Ďakujeme</h3>
            <div class="text-box">
                <p class="text">O novinkách a aktualizáciách Lutio Vás</p>
                <p class="text-strong">budeme informovať e‑mailom. 📥</p>
            </div>
            <Button class="close-button">Zavrieť</Button>
        </article>
    </div>
</template>

<script setup>

</script>

<style scoped>
.main-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9999;
}

.card-box {
    display: flex;
    width: 297px;
    padding: 24px;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    text-align: center;  
    border-radius: 18px;
    border: 1px solid rgba(9, 0, 29, 0.10);
    background: #FFF;
    box-shadow: 0px 34px 20px -30px rgba(9, 0, 29, 0.05);
}

.title {
    color: #148A11;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
}

.text {
  color: rgba(9, 0, 29, 0.60);
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
}

.text-strong {
  color: #09001D;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
}

.close-button {
display: flex;
padding: 10px 44px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 1000px;
border: 1px solid #09001D;
background: #09001D;
color: #FFF;
font-size: 14px;
font-weight: 500;
line-height: 24px;
box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}

</style>