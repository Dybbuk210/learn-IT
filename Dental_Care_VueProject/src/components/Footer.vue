<template>
    <section class="footer_section">
        <div class="footer_box">
            <p>Všetky práva vyhradené | Platia zmluvné podmienky!</p>
            <ul>
                <li><a href=""><img src="../assets/img/social/facebook.svg" alt=""></a></li>
                <li><a href=""><img src="../assets/img/social/instagram.svg" alt=""></a></li>
                <li><a href=""><img src="../assets/img/social/youtube.svg" alt=""></a></li>
                <li><a href=""><img src="../assets/img/social/linkedin.svg" alt=""></a></li>
                <li><a href=""><img src="../assets/img/social/twitter.svg" alt=""></a></li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>

section {
    display: block;
    max-width: 1440px;
    width: 100%;
    padding: 60px 0;
}

.footer_box {
    min-width: 336px;
    max-width: 1280px;
    width: 100%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    flex-direction: column;
    gap: 34px;
    padding: 2rem;
}

p {
    font-size: 14px;
    font-weight: 400;
    line-height: 21.7px;
    color: #011632;
}

ul {
    max-width: 328px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
}

ul li a {
    width: 32px;
    height: 32px;
}

img {
    width: 100%;
    height: 100%
}


@media (min-width: 600px) {

    section {
     display: flex;
     justify-content: center;
     padding-bottom: 10rem;
    }

    .footer_box {
        flex-direction: row;
        justify-content: space-between;
        margin: 0;
        align-items: center;
        text-align: center;
    }

    ul {
        max-width: 240px;
        margin: 0;
    }
}

@media (min-width: 1280px) {
    .footer_box {
        padding: 0;
    }
}

</style>