<template>
    <div class="inner-container">
        <div class="contact-container">
            <div class="title-text">
                <h2 class="contact-title"><span class="text-style-light">Simple, Transparent Pricing:</span> Customize your Project to
                    match your needs</h2>
                <p class="contact-text">
                    Select your services, set your budget, <span class="text-style-light">and get
                    a solution</span> tailored to your goals <img src="../../../assets/icons/TextArrayLarge.svg" alt="Arrow icon" class="text-array-icon"> no surprises.
                </p>
            </div>
            <ContactFormTest id="contactform"></ContactFormTest>
        </div>
    </div>
</template>

<script setup>
    import ContactFormTest from '../../GlobalComponents/ContactFormTest.vue';
</script>

<style scoped>
    .contact-container {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 0 auto;
        row-gap: 70px;
    }

    .title-text {
        display: flex;
        flex-direction: column;
        row-gap: 45px;
    }

    .contact-title {
        font-size: clamp(28px, 4vw, 50px);
        font-weight: 300;
        color: var(--main-color-black);
    }

    .contact-text {
        font-size: clamp(16px, 2vw, 25px);
        font-weight: 400;
        color: var(--main-color-black);
    }

    .text-array-icon {
        width: 25px;
        height: 25px;   
        vertical-align: middle;
    }

    @media (max-width: 980px) {
        .contact-container {
            width: 80%;
        }
    }

    @media (max-width: 800px) {
        .text-array-icon {
        width: 15px;
        height: 15px;   
    }
    }

    @media (max-width: 420px) {
        .contact-container {
            width: 100%;
        }

        .title-text {
            row-gap: 20px;
        }

        .contact-container {
            row-gap: 45px;
        }
    }
</style>