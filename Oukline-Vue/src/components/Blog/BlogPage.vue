<template>
    <div class="inner-container">

        <div class="main-box"> <!-- Main-box obsahuje dáta ktore sa ťahaju a dinamicky dopĺňajú -->
            <div class="box-up">
                <h2 class="main-title">How do you recognize a quality and creative marketing company?</h2>
                <p class="main-text">In today’s competitive business landscape, marketing is no longer just about spreading awareness. It’s about creating memorable, meaningful, and impactful connections with your audience.</p>
                <ul class="main-points">
                    <li class="main-point">creativity</li>
                    <li class="main-point">marketing</li>
                    <li class="main-point">business</li>
                    <li class="main-point">services</li>
                </ul>
                <div class="main-img">
                    <img src="../../assets/img/Blog/BlogPage01/MainImg.png" alt="">
                </div>
            </div>
            <div class="box-down">
                <div class="blog-import-data">
                    <h3 class="blog-title">Title01</h3>
                    <img src="../../assets/img/Blog/BlogPage01/SecondImg.png" alt="" class="blog-img">
                    <ol class="blog-list">
                        <li>
                            <h3 class="list-title">Small and Medium Businesses (SMBs)</h3>
                            <p class="list-text">For SMBs, a professional website is essential for competing against larger companies. It serves as a platform to showcase your products or services and build customer trust.</p>
                        </li>
                        <li>
                            <h3 class="list-title">Small and Medium Businesses (SMBs)</h3>
                            <p class="list-text">For SMBs, a professional website is essential for competing against larger companies. It serves as a platform to showcase your products or services and build customer trust.</p>
                        </li>
                        <li>
                            <h3 class="list-title">Small and Medium Businesses (SMBs)</h3>
                            <p class="list-text">For SMBs, a professional website is essential for competing against larger companies. It serves as a platform to showcase your products or services and build customer trust.</p>
                        </li>
                    </ol>
                    <p class="blog-text-second">Choosing the right marketing company can make or break your brand's growth trajectory. But with countless options available, how do you separate the exceptional from the mediocre? Here are key indicators to help you recognize a quality and creative marketing company.</p>
                    <p class="blog-text">Choosing the right marketing company can make or break your brand's growth trajectory. But with countless options available, how do you separate the exceptional from the mediocre? Here are key indicators to help you recognize a quality and creative marketing company.</p>
                </div>

                <!-- Blog-Socials toto su jedine statické prvky  -->
                <p class="blog-socials-title">Share post:</p> 
                <ul class="blog-socials">
                    <li><a href=""></a><img src="../../assets/icons/BlogSocials/Xicon.svg" alt=""></li>
                    <li><a href=""></a><img src="../../assets/icons/BlogSocials/Instagram.svg" alt=""></li>
                    <li><a href=""></a><img src="../../assets/icons/BlogSocials/linkedin.svg" alt=""></li>
                    <li><a href=""></a><img src="../../assets/icons/BlogSocials/Facebook.svg" alt=""></li>
                </ul>
            </div>
        </div>

        <div class="recommended-blog-posts">
            <div class="posts-up">
                <h3 class="posts-title">Recommended blog posts</h3>
                <button class="second-btn-style switch-btn posts-button">
                    <span class="button-text switch-text switch-current">
                        Case studies
                        <img src="../../assets/icons/RightArrowWhite.svg" alt="" class="button-icon">
                    </span>
                    <span class="button-text switch-text switch-next">
                        Case studies
                        <img src="../../assets/icons/RightArrowWhite.svg" alt="" class="button-icon">
                    </span>
                </button> 
            </div>
            <div class="break"></div> <!-- prázdny div služi len na effekt -->
            <div class="posts-down">

            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .main-box {
        width: 60%;
        margin: 0 auto;
        padding-top: 54px;
    }

    .box-up {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
    }

    .main-title {
        color: var(--main-color-black);
        font-size: clamp(28px, 4vw, 50px);
        font-weight: 300;
    }

    .main-text {
        color: var(--main-color-black);
        font-size: clamp(16px, 4vw, 20px);
        font-weight: 300;
        max-width: 70%;
    }

    .main-points {
        display: flex;
        column-gap: 10px;
    }

    .main-point {
        border: solid 1px #15151566;
        border-radius: 20px;
        padding: 10px;
        font-size: 12px;
        font-weight: 300;
        color: var(--main-color-black);
    }

    .box-down {
        padding-top: 50px;
        padding-bottom: 200px;
    }

    /* Bloh štíli pre dáta */
    .blog-title {
        color: var(--main-color-black);
        font-size: clamp(20px, 4vw, 25px);
        font-weight: 500;
        padding-bottom: 20px;
    }

    .blog-text {
        color: var(--main-color-black);
        font-size: clamp(16px, 4vw, 18px);
        font-weight: 300;
        padding-bottom: 70px;
    }

    .blog-text-second {
        color: var(--main-color-black);
        font-size: clamp(16px, 4vw, 18px);
        font-weight: 400;
        padding-bottom: 70px;
    }

    .blog-img {
        object-fit: cover;
        padding-bottom: 70px;
    }

    .blog-list {
        list-style: decimal;
        padding-left: 1.5rem;
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        padding-bottom: 70px;
    }

    .list-title {
        color: var(--main-color-black);
        font-size: clamp(16px, 4vw, 18px);
        font-weight: 500;
    }

    .list-text {
        color: var(--main-color-black);
        font-size: clamp(16px, 4vw, 18px);
        font-weight: 300;
    }
    /* dáta koniec */

    .blog-socials-title {
        color: var(--main-color-black);
        font-size: 20px;
        font-weight: 400;
        padding-bottom: 15px;
    }

    .blog-socials {
        display: flex;
        column-gap: 20px;
    }

    .recommended-blog-posts {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
    }

    .posts-up {
        display: flex;
        column-gap: 20px;
        justify-content: space-between;
    }

    .posts-title {
        color: var(--main-color-black);
        font-size: 25px;
        font-weight: 400;
        align-self: flex-end;
    }

    .posts-button {
        padding: 25px 84px;
    }

    .break {
        border-bottom: 1px solid #EAECF0;
    }

</style>