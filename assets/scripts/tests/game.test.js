/**
 * @jest-environment jsdom
 */

const { startGame , gameCategories, addBox, randomIndex , cardiacDictionary, painDictionary} = require("../game");
// creating a mock dom:

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close()
})

// Test for start game: 
describe("start game works",() =>{
    test("startGame is false", () => {
         expect(startGame).toBe(false);
    });
    test('gameCategories returns an array of buttons with with 2 game categories', () => {
        expect(gameCategories).toHaveLength(2);   
    });
});

// test for addBox function:
