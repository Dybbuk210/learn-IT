<template>
    <div class="inner-container main-box">
        <div class="box-left">
            <h3 class="box-left-title">How we work - Oukline operates with a clear and structured process to deliver exceptional results, ensuring <span class="text-style-light">your vision becomes a reality.</span></h3>
        </div>
        <div class="box-right">
            <article class="box-card">
                <h3 class="card-title">Analyze</h3>
                <p class="card-text">We start by thoroughly understanding your needs and objectives. Our team conducts in-depth research to identify challenges, define goals, and gather all the necessary requirements to ensure a solid foundation for your project.</p>
            </article>
            <article class="box-card">
                <h3 class="card-title">Design</h3>
                <p class="card-text">Our creative team transforms ideas into visually appealing and functional designs. We focus on user experience, aesthetics, and practicality to create solutions that align with your brand and goals.</p>
            </article>
            <article class="box-card">
                <h3 class="card-title">Development</h3>
                <p class="card-text">With cutting-edge technologies and best practices, we bring your vision to life. Our developers build robust, scalable, and high-performing solutions while maintaining transparency and regular updates throughout the process.</p>
            </article>
            <article class="box-card">
                <h3 class="card-title">Support</h3>
                <p class="card-text">Our work doesn’t stop at delivery. We provide ongoing support, ensuring your solution runs smoothly and evolves with your needs. From maintenance to updates, we’re here to help you succeed.</p>
            </article>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .main-box {
        display: flex;
        column-gap: 170px;
        padding-top: 200px;
        padding-bottom: 200px;
    }

    .box-left-title {
        color: var(--main-color-black);
        font-size: clamp(30px, 3vw, 40px);
        font-weight: 300;
    }

    .box-right {
        display: flex;
        flex-direction: column;
        row-gap: 80px;
    }

    .box-card {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
    }

    .card-title {
        color: var(--main-color-black);
        font-size: 20px;
        font-weight: 500;
    }

    .card-text {
        color: var(--main-color-black);
        font-size: 18px;
        font-weight: 300;
    }

    @media (max-width: 1200px) {
        .main-box {
            column-gap: 100px;
        }

        
    }

    @media (max-width: 900px) {
        .main-box {
            flex-direction: column;
            row-gap: 80px;
        }

        .box-right{
            max-width: 80%;
        }
    }

    @media (max-width: 600px) {
        .box-right{
            max-width: 100%;
        }
    }
</style>