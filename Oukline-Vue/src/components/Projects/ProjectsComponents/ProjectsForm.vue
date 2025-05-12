<template>
    <div class="inner-container">
        <div class="contact-container">
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