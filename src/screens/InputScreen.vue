<template>
    <div class="word">
        <label class="word__label" for="wordField">Word</label>
        <input class="word__input" v-model="word" id="wordField" placeholder="Write a word to submit">
        <div v-show="isVisible" class="feedback">
            <ul class="feedback__errors">
                <li v-for="error in errors" :key="error"> {{ error }} </li>
            </ul>
        </div>
        <BaseButton class="word__button" @click="submit()" text="add" />
        <WordDisplay />
    </div>
</template>

<script setup>
import BaseButton from "@/components/BaseButton.vue";
import { ref, computed } from "vue";
import WordDisplay from "@/components/WordDisplay.vue";
import { storeWord } from "../composables/wordScore.js";
import { validate } from "../composables/validation.js";


const word = ref("");
const errors = ref([]);

const isVisible = computed(() => {
    return errors.value.length > 0;
});

const submit = () => {
    errors.value = validate(word.value);
    const isValid = errors.value.length < 1;

    console.log(errors.value);
    if (isValid) {
        storeWord(word.value);
        word.value = "";
        alert("Word saved succesfully!");
    }
}

</script>

<style scoped>
.word {
    height: 80rem;
}

.word__label {
    display: block;
    font-size: 1.4rem;
    font-weight: 400;
}

.word__input {
    height: 3rem;
    width: 50rem;
}

.feedback {
    color: var(--color-red);
    font-size: 1rem;
}

.word__button {
    margin: 0 auto;
    margin-top: 2rem;
    display: block;
}
</style>