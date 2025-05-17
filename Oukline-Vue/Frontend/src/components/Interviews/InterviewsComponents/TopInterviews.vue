<template>
    <div class="inner-container">
        <div class="main-box">
            <div class="img-box">
                <img src="../../../assets/img/Interviews/Miguel Queirós.jpg" alt="">
            </div>
            <div class="info-box">
                <div class="info-up">
                    <div class="info-up-textbox">
                        <h2 class="info-up-title">Miguel <br class="up-break">Queirós</h2>
                        <p class="info-up-text"><img src="../../../assets/icons/TextArraySmall.svg" alt="" class="text-array-icon"> Designer & Framer Creator</p>
                    </div>
                    <div class="card-button-box">
                         <div class="img-box-mobile">
                            <img src="../../../assets/img/Interviews/Miguel Queirós.jpg" alt="">
                        </div>
                       <button class="card-button switch-btn">
                            <span class="switch-text switch-current"><img src="../../../assets/icons/ArrowUpBlack.svg" alt=""></span>
                            <span class="switch-text switch-next"><img src="../../../assets/icons/ArrowUpBlack.svg" alt=""></span>
                        </button>
                    </div>
                        <button class="card-button switch-btn desktop-button">
                            <span class="switch-text switch-current"><img src="../../../assets/icons/ArrowUpBlack.svg" alt=""></span>
                            <span class="switch-text switch-next"><img src="../../../assets/icons/ArrowUpBlack.svg" alt=""></span>
                        </button>
                    </div>
                <div class="info-down">
                    <h2 class="info-down-title"><span class="text-style-light">The secret is building</span> <br class="down-break">a personal brand.</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .main-box {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 26px;
        background-color: #F9FAFB;
        border: solid 1px #EDEDED;
        column-gap: 50px;
        row-gap: 25px;
        border-radius: 3px;
    }

    .img-box {
        max-width: 450px;
        height: auto;
        border-radius: 3px;
    }

    .info-box {
        display: flex;
        flex-direction: column;
        row-gap: 92px;
        flex: 1;
        min-width: 0;
    }

    .info-box-up {
        display: flex;
        justify-content: space-between;
    }

    .info-up-textbox {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
    }

    .info-up {
        display: flex;
        justify-content: space-between;
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

  @media (max-width: 1110px) {
        .down-break {
            display: none;
        }
  }

  @media (max-width: 950px) {
        .img-box {
            display: none;
        }

        .info-up {
            flex-direction: column-reverse;
            row-gap: 20px;
        }

        .up-break {
            display: none;
        }

        .desktop-button {
            display: none;
        }

        .card-button-box {
            display: flex;
        }
  }

  @media (max-width: 500px) {
         .img-box-mobile {
            max-width: 74px;
        }

        .info-box {
            row-gap: 40px;
        }

        .info-up-title {
            font-size: 25px;
        }

        .info-up-text {
            font-size: 16px;
        }

        .info-down-title {
            font-size: 28px;
        }
  }
</style>