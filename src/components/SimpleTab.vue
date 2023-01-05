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
    box-shadow: var(--shadow);
}
</style>