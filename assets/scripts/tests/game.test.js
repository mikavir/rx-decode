
/**
 * @jest-environment jsdom
*/

/* jshint esversion: 11, jquery: true */
const {
    startGame,
    isGuessedWordCorrect,
    cardiacDictionary,
    painDictionary,
    getRandomDrug,
    shuffleWord,
    hasUserWonTheGame,
    word,
    hint,
    correctGuessedWord,
    canSubmit,
    livesLeft,
    livesTaken,
    noOfCorrectWords,
    gameIsOver,
    gameIsWon,
    gameIsExited,
    noOfDrugs,
} = require("../game");


// Test for global variables in game: 
describe("Global Variables return the right content", () => {
    test("startGame is false", () => {
        expect(startGame).toBe(false);
    });
    test("Word should be an empty array", () => {
        expect(word.length).toBe(0);
    });
    test("Hint should be an empty array", () => {
        expect(hint.length).toBe(0);
    });
    test("correctGuessedWord should be an empty array", () => {
        expect(correctGuessedWord.length).toBe(0);
    });
    test("canSubmit is false", () => {
        expect(canSubmit).toBe(false);
    });
    test("livesLeft is 5", () => {
        expect(livesLeft).toBe(5);
    });
    test("livesTaken is 0", () => {
        expect(livesTaken).toBe(0);
    });
    test("noOfCorrectGuessedWord should be 0", () => {
        expect(noOfCorrectWords).toBe(0);
    });
    test("gameIsOver is false", () => {
        expect(gameIsOver).toBe(false);
    });
    test("gameIsWon is false", () => {
        expect(gameIsWon).toBe(false);
    });
    test("gameIsExited is false", () => {
        expect(gameIsExited).toBe(false);
    });
    test("noOfDrugs is 0", () => {
        expect(noOfDrugs).toBe(0);
    });


});

// test for isGuessed Word and check word function:

describe("is Guessed Word and word the same", () => {
    let word = "MELATONIN";
    let wrongGuessedWord = ["M", "E", "L", "I", "T", "O", "N", "I", "N"];
    let correctGuessedWord = ["M", "E", "L", "A", "T", "O", "N", "I", "N"];
    test("guessed word and word is not the same", () => {
        expect(isGuessedWordCorrect(word, wrongGuessedWord)).toBe(false);
    });
    test("guessed word and word is the same", () => {
        expect(isGuessedWordCorrect(word, correctGuessedWord)).toBe(true);
    });
});

// Test for get random drug fn
describe("is getRandomDrug function working", () => {
    test("is the drug removed in the array", () => {
        let randomDrug = getRandomDrug(cardiacDictionary);
        expect(cardiacDictionary.includes(randomDrug)).toBe(false);
    });
});

// Test for shuffle word
describe("is shuffle word function working", () => {
    let word = painDictionary[0].drugName;
    let shuffledWord = shuffleWord(word);
    test("word and shuffled word is not the same and should return false", () => {
        expect(word === shuffledWord).toBe(false);
    });
});

// Test to check if user has won the game 
describe("is hasUserWonTheGame function working", () => {
    let emptyGuessedList = [];
    let guessedList = cardiacDictionary;
    test("hasUserWonTheGame should return false when guessedList is full", () => {
        expect(hasUserWonTheGame(guessedList)).toBe(false);
    });
    test("hasUserWonTheGame should return true with an empty list", () => {
        expect(hasUserWonTheGame(emptyGuessedList)).toBe(true);
    });
});