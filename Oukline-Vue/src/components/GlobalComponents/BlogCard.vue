<template>
    <article class="card">
        <div class="card-up">
            <img src="../../assets/img/Blog/Blog01.png" alt="">
            <div class="overlay">
                <div class="inner-box">
                    <h3 class="card-title">Lorem ipsum dolor sit amet consectetur incididunt ut.</h3>
                    <p class="card-text">Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                </div>
            </div>    
        </div>
        <div class="card-down">
            <ul>
                <li><a href="">webdesgin</a></li>
                <li><a href="">framer</a></li>
                <li><a href="">digitalcreativity</a></li>
            </ul>
            <button class="card-button switch-btn">
                <span class="switch-text switch-current"><img src="../../assets/icons/ArrowUpBlack.svg" alt=""></span>
                <span class="switch-text switch-next"><img src="../../assets/icons/ArrowUpBlack.svg" alt=""></span>
            </button>
        </div>
    </article>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .card-up {
    height: 300px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    border-radius: 3px;
    overflow: hidden;
  }
  
  .card-up img {
    position: absolute;
    object-fit: cover;
  }
  
  .card-title, .card-text {
    position: relative;
    align-self: flex-end;
  }
  
  .card-title {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
  }
  
  .card-text {
    color: #FFFFFFE5;
    font-size: 16px;
    font-weight: 300;
  }
  
  .overlay {
    display: flex;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 0%);
  }
  
  .inner-box {
    width: 100%;
    align-self: flex-end;
    padding: 20px;
  }
  
  .card-down {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 20px;
    padding-top: 10px;
  }
  
  .card-button {
    aspect-ratio: 1 / 1;
    width: auto;
    height: 100%;
    border: 1px solid #EAECF0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 17px;
    box-sizing: border-box;
    transform: rotate(45deg);
  }
  
  .card-button img {
    height: auto;
    object-fit: contain;
  }
  
  ul {
    display: flex;
    column-gap: 10px;
  }
  
  ul li {
    border: solid 1px #EAECF0;
    border-radius: 20px;
    padding: 10px;
    font-size: 12px;
    font-weight: 300;
    color: var(--main-color-black);
  }
  
  ul li a {
    color: var(--main-color-black);
    font-size: 12px;
    font-weight: 300;
  }
  </style>