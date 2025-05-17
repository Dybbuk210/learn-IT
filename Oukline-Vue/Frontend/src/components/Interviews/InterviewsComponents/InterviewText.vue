<template>
  <p class="text-style">
    <slot></slot>
  </p>
</template>

<script setup>
</script>

<style scoped>
    .text-style {
        font-family: "Literata", serif;
        color: var(--main-color-black);
        font-size: clamp(12px, 5vw, 17px);
        font-weight: 300;
    }
</style>