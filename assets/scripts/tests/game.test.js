/**
 * @jest-environment jsdom
 */
const { startGame } = require("../game");
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
});