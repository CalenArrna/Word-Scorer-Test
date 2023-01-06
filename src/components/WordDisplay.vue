<template>
    <div v-show="isVisible">
        <h1 class="display-title">Recently submitted three words:</h1>
        <div class="display-box">
            <span class="display-box__item" v-for="word in list" :key="word"> {{ word.word }}</span>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { getLastThreeWords } from "../composables/wordScore.js";

const list = getLastThreeWords();
const isVisible = computed(() => {
    return list.value.length > 0;
});
</script>

<style scoped>
.display-title {
    margin: 2rem 0;
    font-size: 2.1rem;
    font-weight: 800;
}

.display-box {
    margin: 0 auto;
    max-width: 80%;
    padding: 2rem;
    background-color: var(--color-grey);
}

.display-box__item {
    font-size: 1.8rem;
    font-weight: 400;
}

.display-box__item:not(:last-child) {
    margin-right: 1rem;
}
</style>