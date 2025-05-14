<template>
    <div class="main-box">
        <div class="inner-container">
            <h3 class="title">Meet our team</h3>
        </div>
        <OuklineTeam />
    </div>
</template>

<script setup>
    import OuklineTeam from '../../GlobalComponents/OuklineTeam.vue';
</script>

<style scoped>
    .main-box {
        display: flex;
        flex-direction: column;
        row-gap: 60px;
    }

    .title {
        color: var(--main-color-black);
        font-size: 20px;
        font-weight: 400;
    }

    @media (max-width: 600px) {
        .main-box {
            row-gap: 40px;
        }
    }
</style>