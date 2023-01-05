<template>
    <div class="scores">
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
const listOfWords = [
    { word: "cica", score: 4 },
    { word: "kugya", score: 5 },
    { word: "gígyó", score: 5 },
    { word: "kugadsadaya", score: 5 },
    { word: "gígyóasdasdasdad", score: 5 },
    { word: "kugya", score: 5 },
    { word: "gíasdadasdagyó", score: 5 },
    { word: "kugya", score: 5 },
    { word: "gíasdasdagyó", score: 5 }
];
</script>

<style scoped>
.scores {
    width: 100%;
    font-size: 2rem;
    display: flex;
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