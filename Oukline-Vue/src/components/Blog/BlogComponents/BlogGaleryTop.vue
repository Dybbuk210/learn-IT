<template>
    <div class="inner-container main-box">
        <img src="../../../assets/img/Blog/TopBlog.png" alt="" class="top-img">
        <div class="overlay">
            <div class="inner-box">
                <h2 class="title">WCAG a guide to web accessibility standards</h2>
                <p class="text">Learn about the WCAG their importance, and how they ensure a more inclusive and accessible digital experience.</p>
                <div class="box-down">
                    <ul>
                        <li><a href="">webdesign</a></li>
                        <li><a href="">framer</a></li>
                        <li><a href="">digitalcreativity</a></li>
                        <li><a href="">inspiration</a></li>
                    </ul>
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
        flex-direction: column;
        position: relative;
        overflow: hidden;
        height: 480px;
        border-radius: 3px;
    }

    .top-img {
        position: absolute;
        object-fit: cover;
    }

    .title, .text, .box-down {
        position: relative;
        align-self: flex-end;
    }

    .overlay {
        display: flex;
        height: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0) 60%);
    }

    .inner-box {
        width: 100%;
        align-self: flex-end;
        padding: 42px;
    }

    .title {
        color: #fff;
        font-size: 25px;
        font-weight: 400;
        padding-bottom: 10px;
    }

    .text {
        color: #FFFFFFE5;
        font-size: 16px;
        font-weight: 300;
        padding-bottom: 25px;
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
        color: #fff;
        font-size: 14px;
        font-weight: 300;
    }

    @media (max-width: 500px) {
        .main-box {
            max-height: 340px;
        }

        .inner-box {
            padding: 0px 18px 25px 18px ;
        }
    }
</style>