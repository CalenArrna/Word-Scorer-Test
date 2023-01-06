import { getAllWords } from "@/composables/wordScore";
import { maxLengthWord } from "@/constants";

const errorList = [];
const regex = /^[a-zA-Z]+$/;
const maxLength = maxLengthWord.length;

export function validate(word) {
  runValidation(word);
  return errorList;
}

function runValidation(word) {
  errorList.length = 0;
  if (!word || word.length === 0) {
    errorList.push("Field must not empty!");
    return;
  }

  if (getAllWords().value.includes(word)) {
    errorList.push("Word already submitted! Please try another one!");
  }

  if (!regex.test(word)) {
    errorList.push(
      "Word can only contain english letters. No whitespace or other characters allowed."
    );
  }

  if (word.length > maxLength) {
    errorList.push("The word is to long!");
  }
}
