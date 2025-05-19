<template>
    <div class="inner-container main-box">
        <div class="contact-container">
            <div class="text-box">
                <div class="titles">
                    <h2 class="title-01">Interested in creating a</h2>
                    <h2 class="title-02">project like this with us?</h2>
                </div>
                <p class="text">Let’s talk! - tell us what you’re building, and we’ll jump in.</p>
            </div>
            <ContactForm />
        </div>
    </div>
</template>

<script setup>
    import ContactForm from '../../GlobalComponents/ContactFormTest.vue';
</script>

<style scoped>
    .main-box {
        padding-bottom: 200px;
    }

    .contact-container {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 0 auto;
        row-gap: 70px;
    }

    .text-box {
        display: flex;
        flex-direction: column;
        row-gap: 45px;
    }

    .title-01, .title-02 {
        font-size: 50px;
        font-weight: 300;
    }

    .text {
        color: var(--main-color-black);
        font-size: 22px;
        font-weight: 400;
    }

    .title-01 {
        color: var(--main-second-color);
    }

    .title-02 {
        color: var(--main-color-black);
    }

    @media (max-width: 980px) {
        .contact-container {
            width: 80%;
        }
    }

     @media (max-width: 800px) {
         .main-box {
            padding-bottom: 100px;
        }
     }

    @media (max-width: 420px) {
        .contact-container {
            width: 100%;
        }
    }
</style>