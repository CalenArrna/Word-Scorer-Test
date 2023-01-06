<template>
    <div class="scores">
        <h1> Total score: {{ totalScore }}</h1>
        <table class="scores-table">
            <tr class="scores-table__heading">
                <th>Word</th>
                <th>Score</th>
            </tr>
            <tr class="scores-table__rows" v-for="word in listOfWords" :key="word.word">
                <td> {{ word.word }}</td>
                <td> {{ word.score }}</td>
            </tr>
        </table>
    </div>
</template>

<script setup>
import { getAllScore, getAllWords } from "../composables/wordScore.js";

const listOfWords = getAllWords();
const totalScore = getAllScore();
</script>

<style scoped>
.scores {
    width: 100%;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}



.scores-table {
    box-shadow: var(--shadow);
    padding: 3rem
}

.scores-table__heading {
    color: var(--color-accent-2);
}
</style>