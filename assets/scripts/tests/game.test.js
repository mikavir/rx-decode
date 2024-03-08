/**
 * @jest-environment jsdom
 */

const {
    startGame,
    gameCategories,
    isGuessedWordCorrect,
    cardiacDictionary,
    painDictionary,
    getRandomDrug,
    shuffleWord,
    hasUserWonTheGame,
} = require("../game");


// Test for start game: 
describe("Global Variables return the right content", () => {
    test("startGame is false", () => {
        expect(startGame).toBe(false);
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
})

// Test for get random drug fn
describe("is getRandomDrug function working", () => {
    test("is the drug removed in the array", () => {
        let randomDrug = getRandomDrug(cardiacDictionary);
        expect(cardiacDictionary.includes(randomDrug)).toBe(false);
    });
})

// Test for shuffle word
describe("is shuffle word function working", () => {
    let word = painDictionary[0].drugName;
    let shuffledWord = shuffleWord(word);
    test("word and shuffled word is not the same and should return false", () => {
        expect(word === shuffledWord).toBe(false);
    });
})

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
})