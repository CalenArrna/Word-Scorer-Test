/*
import {
  storeWord,
  getAllScore,
  getAllWords,
  getLastThreeWords,
} from "./wordScore.js";

describe("Testing wordScore Logic", () => {
  it("Test store input", () => {
    storeWord("abc");
    const words = getAllWords();

    expect(1, words.value.length);
    expect("abc", words.value[0].word);
    expect(3, words.value[0].score);
  });

  it("Test store get all the words", () => {
    storeWord("abc");
    storeWord("def");
    const words = getAllWords();

    expect(2, words.value.length);
  });

  it("Test calculated sum score", () => {
    storeWord("abc");
    storeWord("def");
    const score = getAllScore();

    expect(6, score);
  });

  it("Test if last three words got back", () => {
    storeWord("abc");
    storeWord("def");
    storeWord("ghi");
    storeWord("jkl");
    const lastThree = getLastThreeWords();

    expect("jkl", lastThree.value[0].word);
    expect("ghi", lastThree.value[1].word);
    expect("def", lastThree.value[2].word);
  });
});
*/
