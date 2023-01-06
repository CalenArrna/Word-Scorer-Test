<template>
    <div class="word">
        <label class="word__label" for="wordField">Word</label>
        <input class="word__input" v-model="word" id="wordField" placeholder="Write a word to submit">
        <BaseButton class="word__button" @click="submit()" text="add" />
        <WordDisplay />
    </div>
</template>

<script setup>
import BaseButton from "@/components/BaseButton.vue";
import { ref } from "vue";
import WordDisplay from "@/components/WordDisplay.vue";
import { storeWord } from "../composables/wordScore.js";


const word = ref("");

const submit = () => {
    //TODO: implement validation
    storeWord(word.value);
    word.value = "";
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

.word__button {
    margin: 0 auto;
    margin-top: 2rem;
    display: block;
}
</style>