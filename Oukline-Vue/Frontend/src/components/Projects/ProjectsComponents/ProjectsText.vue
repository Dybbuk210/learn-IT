<template>
  <p class="text-style">
    <slot></slot>
  </p>
</template>

<script setup>
</script>

<style scoped>
    .text-style {
        color: var(--main-color-black);
        font-size: clamp(30px, 5vw, 40px);
        font-weight: 300;
    }
</style>