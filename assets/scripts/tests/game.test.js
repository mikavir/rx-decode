/**
 * @jest-environment jsdom
 */

const {
    startGame,
    gameCategories,
    addBox,
    cardiacDictionary,
    painDictionary,
    displayGuessButton,
    isEmpty,
    isGuessedWordCorrect,
    getRandomDrug
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

describe("is getRandomDrug function working", () => {
    test("is the drug removed in the array", () => {
        let randomDrug = getRandomDrug(cardiacDictionary);
        expect(cardiacDictionary.includes(randomDrug)).toBe(false);
    });
})