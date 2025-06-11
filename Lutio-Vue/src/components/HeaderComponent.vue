<template>
    <div class="main-container">

        <div class="fixed-header">
            <img class="vrana-a" src="../assets/vrana.svg" alt="">
            <div class="buttons-box">
                <div class="logo-box">
                    <img src="../assets/lutiologo.svg" alt="">
                </div>
                <div class="swich-buttons"> <!-- podla toho ktori je aktivny ten ma swich-button-active -->
                    <button id="poskitovatel" class="swich-button">Poskytovateľ</button> <!-- tento button po kliknuti zmeni .json na poskitovatel.json  -->
                    <button id="zakaznik" class="swich-button swich-button-active">Zákazník</button> <!-- tento button po kliknuti zmeni .json na zakaznik.json  -->
                </div>
            </div>
        </div>

        <div class="break-line"></div>
        <img class="vrana-b" src="../assets/vrana.svg" alt="">

        <div class="inner-container">    
            <div class="title-box">
                <h1>
                    <span class="main-title-up">Získajte</span> <!-- main-title-a -->
                    <div class="main-title-down-box">
                        <span class="main-title-down">viac zákazníkov</span> <!-- main-title-b -->
                    </div>
                </h1>
                <form class="email-form">
                    <div class="input-box">
                        <input type="email" placeholder="vaša emailová adresa" required>
                        <button type="submit">Mám záujem <span><img class="array-svg" src="../assets/header-array.svg" alt=""></span></button>
                    </div>
                </form>
            </div>

        </div>
        <div class="partners">
            <div class="grid-a-wrapper">
                <div class="slider-track scroll-left">
                    <div class="grid-a">
                        <img class="partner-logo" src="../assets/partneri/autokk.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/downhiletrue.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/Oukline.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/promotimo.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/sperkovnicka.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/stmoschky.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/tuning.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/usporneklimy.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/Vector.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/yogayn.svg" alt="">

                        <img class="partner-logo" src="../assets/partneri/autokk.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/downhiletrue.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/Oukline.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/promotimo.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/sperkovnicka.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/stmoschky.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/tuning.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/usporneklimy.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/Vector.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/yogayn.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="grid-b-wrapper"> 
                <div class="slider-track scroll-right">  
                    <div class="grid-b">
                        <img class="partner-logo" src="../assets/partneri/autokk.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/Vector.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/downhiletrue.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/yogayn.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/sperkovnicka.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/stmoschky.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/Oukline.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/tuning.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/promotimo.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/usporneklimy.svg" alt="">

                        <img class="partner-logo" src="../assets/partneri/autokk.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/Vector.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/downhiletrue.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/yogayn.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/sperkovnicka.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/stmoschky.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/Oukline.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/tuning.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/promotimo.svg" alt="">
                        <img class="partner-logo" src="../assets/partneri/usporneklimy.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .main-container {
        position: relative;
        padding: 220px 0 60px 0;
    }

    .fixed-header {
        width: 100%;
        position: fixed;
        padding-top: 50px;
        background-color: #fff;
        top: 0;
        left: 0;
        z-index: 1000;
    }

    .vrana-a {
        position: absolute;
        top: 100px;
        left: 100px;
        width: 120px;
        z-index: 10;
        pointer-events: none;
    }

    .vrana-b {
        position: absolute;
        top: 250px;
        right: 80px;
        width: 70px;
        z-index: 10;
        pointer-events: none;
    }

    .buttons-box {
        width: 25%;
        min-width: 254px;
        margin: 0 auto;
        align-items: center;
        display: flex;
        flex-direction: column;
        row-gap: 60px;
        padding-bottom: 30px;
    }

    .logo-box {
        width: 70px;
    }

    .swich-buttons {
        overflow: hidden;
        display: flex;
        padding: 2px;
        flex-shrink: 0;
        align-self: stretch;
        border-radius: 100px;
        background: #F7F8FA;
    }

    .swich-button {
        width: 100%;
        padding: 10px 15px 9px 16px;
        color: rgba(9, 0, 29, 0.60);
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        background: #F7F8FA;
    }

    .swich-button-active {
        color: #09001D;
        border-radius: 100px;
        border: 0.5px solid rgba(0, 0, 0, 0.04);
        background: #FFF;
        box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.12), 0px 3px 1px 0px rgba(0, 0, 0, 0.04);
    }

    .break-line {
        border-bottom: solid 1px rgba(9, 0, 29, 0.05);
    }

    .title-box {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 50px;
        padding-top: 50px;
    }

    .main-title-up {
        color: #09001D;
        font-size: clamp(40px, 5vw, 70px);
        font-weight: 800;
        line-height: 70px;
        letter-spacing: -0.35px;
        -webkit-text-stroke: 6px white;
        paint-order: stroke fill;
        position: relative;
        z-index: 2;
    }

    .main-title-down-box {
        background-color: #4D3EE2;
        padding: 0 16px;
        transform: rotate(-0.7deg);
        position: relative;
        z-index: 1;
    }

    .main-title-down {
        display: inline-block;
        color: #FFF;
        font-size: clamp(40px, 5vw, 70px);
        font-weight: 800;
        letter-spacing: -0.35px;
        transform: rotate(0.7deg);
    }

    .email-form {
        max-width: 500px;
    }

    .input-box {
        column-gap: 5px;
        box-sizing: border-box;
        min-width: 456px;
        display: flex;
        overflow: hidden;
        padding: 4px;
        justify-content: space-between;
        align-items: center;
        border-radius: 100px;
        border: 1px solid rgba(9, 0, 29, 0.10);
    }

    .input-box input {
        flex: 1;
        border: none;
        outline: none;
        background-color: transparent;
        color: #09001D;
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
        padding-left: 15px;
    }

    .input-box button {
        display: flex;
        padding: 16px 24px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
        border-radius: 100px;
        background: linear-gradient(0deg, #09001D 0%, #302C38 100%);
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.30);
        color: #FFF;
        text-align: right;
        font-size: 14px;
        font-weight: 600;
    }

    .array-svg {
        aspect-ratio: 1 / 1;
        display: flex;
    }

    .partners {
        display: flex;
        flex-direction: column;
        row-gap: 35px;
        padding-top: 65px;
    }

    .grid-a {
        max-height: 30px;
        display: flex;
        column-gap: 60px;
    }

    .grid-b {
        max-height: 55px;
        display: flex;
        column-gap: 60px;
    }

    .partner-logo {
        width: 100%;
        height: 100%;
    }

    


.grid-a-wrapper,
.grid-b-wrapper {
  overflow: hidden;
  width: 100%;
}

/* track = ten čo sa hýbe */
.slider-track {
  display: flex;
  width: max-content;
  will-change: transform;
}

/* animácia doľava (zľava → doprava) */
.scroll-left {
  animation: scroll-left 30s linear infinite;
}

/* animácia doprava (sprava → doľava) */
.scroll-right {
  animation: scroll-right 40s linear infinite;
}

.grid-a,
.grid-b {
  display: flex;
  column-gap: 60px;
  align-items: center;
}

/* KEYFRAMES */
@keyframes scroll-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}



    @media (max-width: 800px) {
        .vrana-a, .vrana-b {
            display: none;
        }
    }

    @media (max-width: 600px) {
        .buttons-box {
            row-gap: 40px;
        }
    }

    @media (max-width: 500px) {
        .email-form {
            max-width: none;
            width: 100%;
        }

        .input-box {
            width: 100%;
            min-width: 0;
        }

        .input-box input {
            flex: unset;
            width: 100%;
        }
    }

    @media (max-width: 420px) {
        .fixed-header {
            padding-top: 25px;
        }

        .buttons-box {
            row-gap: 20px;
        }

        .array-svg {
            display: none;
        }
    }
    
     @media (max-width: 340px) {
        .input-box button {
            padding: 14px 20px;
        }

        .input-box input {
            padding-left: 2px;
        }
     }
</style>