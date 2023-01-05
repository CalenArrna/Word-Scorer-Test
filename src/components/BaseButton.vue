<template>
    <button class="myButton">
        {{ text }}
    </button>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(['text']);
</script>

<style scoped>
.myButton {
    max-width: 8rem;
    box-shadow: var(--shadow);
    background: linear-gradient(to bottom, var(--color-accent-1) 5%, var(--color-accent-2) 100%);
    border-radius: .6rem;
    border: none;
    display: inline-block;
    cursor: pointer;
    color: var(--color-white);
    font-family: Arial;
    font-size: 1.5rem;
    font-weight: bold;
    padding: .6rem 2.4rem;
    text-decoration: none;
    text-transform: uppercase;
}

.myButton:hover {
    background: linear-gradient(to bottom, var(--color-accent-3) 5%, var(--color-accent-4) 100%);
}

.myButton:active {
    position: relative;
    top: 1px;
}
</style>