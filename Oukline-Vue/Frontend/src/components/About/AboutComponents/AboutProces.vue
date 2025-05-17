<template>
    <div class="inner-container main-box">
        <h2 class="title"><span class="text-style-light">We believe that</span> working with us should be Simple, Enjoyable, and Effective.</h2>
        <article class="card">
            <h3 class="card-title">Here’s how it works <img src="../../../assets/icons/TextArrayLarge.svg" alt="" class="text-array-icon"></h3>
            <div class="card-text-box">
                <p class="card-text">We kick things off with an introductory meeting to understand your ideas, needs, and goals. If you don’t have a project brief yet, no problem — we’ll help you create one. Once everything is clear, we prepare a cost estimate, and with your approval, the project begins.</p>
                <p class="card-text">Our process is fast, client-focused, and easy to follow, even for those who aren’t familiar with the digital world. We’ll guide you through every step, so there’s no need to worry. Typically, we work with two rounds of feedback to finetune the project, and we require a 50% deposit upfront to get started.</p>
            </div>
        </article>
        <h2 class="title"><span class="text-style-light">When we deliver the project</span>, it’s Not Goodbye.</h2>
        <article class="card">
            <h3 class="card-title">Long-term partnerships <img src="../../../assets/icons/TextArrayLarge.svg" alt="" class="text-array-icon"></h3>
            <div class="card-text-box">
                <p class="card-text">We aim for building long-term partnerships, taking care of the project as it grows and evolves. That said, we’re just as happy to work on one time projects, giving them the same level of care and attention.</p>
            </div>
        </article>
        <article class="card">
            <h3 class="card-title">Studio close up <img src="../../../assets/icons/TextArrayLarge.svg" alt="" class="text-array-icon"></h3>
            <div class="card-text-box">
                <p class="card-text">Our team is made up of talented designers and developers, and thanks to our trusted partnerships, we collaborate with external experts like copywriters, analysts, and photographers whenever needed.</p>
                <p class="card-text">While we’re based in Slovakia, we’re not tied to one place — we work globally, delivering exceptional results to clients around the world.</p>
            </div>
        </article>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .main-box {
        display: flex;
        flex-direction: column;
        row-gap: 200px;
        padding-bottom: 200px;
    }

    .title {
        color: var(--main-color-black);
        font-size: clamp(35px, 5vw, 50px);
        font-weight: 300; 
    }

    .card {
        display: flex;
        column-gap: 25px;
        justify-content: space-between;
    }

    .card-text-box {
        max-width: 70%;
        display: flex;
        flex-direction: column;
        row-gap: 60px;
    }

    .card-title {
        display: flex;
        column-gap: 5px;
        color: var(--main-color-black);
        font-size: 20px;
        font-weight: 300;
    }

    .card-text {
        color: var(--main-color-black);
        font-size: clamp(28px, 5vw, 40px);
        font-weight: 300;
    }

       .text-array-icon {
        width: 20px;
        height: 20px;   
        vertical-align: middle;
         transform: translateY(2px);
    }

    @media (max-width: 1200px) {
        .card {
            flex-direction: column;
            row-gap: 60px;
        }

        .card-text-box {
            max-width: none;
        }

        .title-icon {
            transform: rotate(270deg);
        }
    }

    @media (max-width: 600px) {
        .main-box {
            padding-bottom: 100px;
            row-gap: 60px;
        }
    }
</style>