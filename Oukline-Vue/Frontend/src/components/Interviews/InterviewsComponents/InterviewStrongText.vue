<template>
   <strong class="strong-style">
    <slot></slot>
   </strong>
</template>

<script setup>
</script>

<style scoped>
    .strong-style {
        font-size: clamp(14px, 5vw, 18px);
        font-weight: 500;
    }
</style>