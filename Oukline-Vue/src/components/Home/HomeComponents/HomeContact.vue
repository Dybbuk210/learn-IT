<template>
    <div class="inner-container">
        <div class="contact-container">
            <div class="title-text">
                <h2 class="contact-title"><span class="text-style-light">Simple, Transparent Pricing:</span> Customize your Project to fit your needs.</h2>
                <p class="contact-text">
                    <span class="text-style-light">Use our intuitive form</span> to select the services you need <span class="text-style-light">and</span> set a budget that 
                    aligns with your project’s scope <span class="text-style-light">ensuring a</span> tailored solution that fits your goals.
                </p>
            </div>
            <ContactForm />
        </div>
    </div>
</template>

<script setup>
    import ContactForm from '../../GlobalComponents/ContactForm.vue';
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

    @media (max-width: 980px) {
        .contact-container {
            width: 80%;
        }
    }

    @media (max-width: 420px) {
        .contact-container {
            width: 100%;
        }
    }
</style>