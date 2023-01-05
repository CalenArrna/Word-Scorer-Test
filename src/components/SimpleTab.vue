<template>
    <div class="tab-content" v-show="title == selectedTitle">
        <slot />
    </div>
</template>

<script setup>
import { inject, defineProps } from "vue";

defineProps(['title']);

const selectedTitle = inject("selectedTitle");
</script>

<style scoped>
.tab-content {
    min-height: 40rem;
    padding: 2rem;
    border-radius: .5rem;
    box-shadow: 0 .5rem 1rem 2rem rgba(#000, 0.1);
}
</style>