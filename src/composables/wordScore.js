import { ref } from "vue";

const listOfWords = ref([]);
const totalScore = ref(0);
const threeWords = ref([]);

export function getAllWords() {
  return listOfWords;
}

export function storeWord(word) {
  const score = word.length;
  listOfWords.value.push({ word: word, score: score });

  calculateSum();
  calculateLastThreeWords();
}

export function getAllScore() {
  return totalScore;
}

export function getLastThreeWords() {
  return threeWords;
}

function calculateLastThreeWords() {
  threeWords.value.length = 0;
  if (listOfWords.value.length < 4) {
    for (var i = listOfWords.value.length; i > 0; i--) {
      threeWords.value.push(listOfWords.value[i - 1]);
    }
    return threeWords;
  }
  let last = listOfWords.value.length - 1;
  threeWords.value.push(listOfWords.value[last]);
  threeWords.value.push(listOfWords.value[last - 1]);
  threeWords.value.push(listOfWords.value[last - 2]);
  return threeWords;
}

function calculateSum() {
  let sum = 0;
  listOfWords.value.forEach((word) => (sum += word.score));
  totalScore.value = sum;
}
