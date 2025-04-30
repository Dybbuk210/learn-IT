<template>
    <div class="recent-blogs">

        <div class="inner-container box-padding-gap">
            <div class="box-up">
                <h2 class="title">Recent blog post</h2>
                <div class="img-box">
                    <img src="../../../assets/img/blog.png" alt="">
                </div>
            </div>
            <div class="box-down">
                <div class="box-down-flex">
                    <div class="box-down-left">
                        <h3 class="blog-name">WCAG a guide to web accessibility standards</h3>
                        <p class="blog-text">Learn about the WCAG their importance, and how they ensure a more inclusive and accessible digital experience.</p>
                        <div class="box-down-ul">
                            <ul>
                                <li>webdesgin</li>
                                <li>framer</li>
                                <li>digitalcreativity</li>
                            </ul>
                        </div>
                    </div>
                    <div class="box-down-right">
                        <button class="main-style-button switch-btn blog-button ">
                            <span class="button-text switch-text switch-current">
                                Read post               
                                <img src="../../../assets/icons/RightArrowWhite.svg" alt="" class="button-icon">
                            </span>
                            <span class="button-text switch-text switch-next">
                                Read post
                                <img src="../../../assets/icons/RightArrowWhite.svg" alt="" class="button-icon">
                            </span>
                        </button> 
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
</script>

<style scoped>
    .box-padding-gap {
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        padding-bottom: 200px;
    }

    .box-up {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
    }

    .title, .blog-name {
        color: var(--main-color-black);
    }

    .title {
        font-size: 25px;
        font-weight: 300;
    }

    .box-down-left, .box-down-right {
        width: 50%;
    }

    .box-down-left {
        display: flex;
        flex-direction: column;
        row-gap: 25px;
    }

    .box-down-right {
        display: flex;
        justify-content: flex-end;
    }

    .box-down-flex {
        display: flex;
    }

    .box-down-ul ul {
        display: flex;
        column-gap: 5px;
    }

    .blog-name {
        font-size: 25px;
        font-weight: 400;
    }

    .blog-text {
        font-size: 16px;
        font-weight: 300;
        color: var(--main-second-color);
    }

    .blog-button {
        align-self: flex-end;
        padding: 28px 90px;
    }

    ul li {
        border: solid 1px #EAECF0;
        border-radius: 20px;
        padding: 10px;
        font-size: 12px;
        font-weight: 300;
        color: var(--main-color-black);
    }

    @media (max-width: 600px) {
        .box-down-flex {
            flex-direction: column;
            row-gap: 25px;
        }

        .box-down-right {
            justify-content: start;
        }

        .box-down-left, .box-down-right {
            width: 100%;
        }

        .box-padding-gap {
            padding-bottom: 100px;
        }
    }
</style>