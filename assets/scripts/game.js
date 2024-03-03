// Variables from Dom
let startGame = false;
const gameCategories = document.getElementsByClassName('game-categories');
const startModal = document.getElementById('start-menu');
let draggableLetters = document.getElementsByClassName('draggableLetters');
let letterContainers = document.getElementsByClassName('letter-container');
let gameArea = document.getElementById('game-area');
let letterArea = document.getElementById('letter-area');
let playAgainButton = document.getElementById('play-again');
let gameOverModal = document.getElementById('game-over');
let lives = document.getElementById('lives');
let guessButton = document.getElementById('guess-button');
let wordsGuessedTally = document.getElementById('words-guessed');
let numberOfWordsSpan = document.getElementById('number-words-guessed');
let listofGuessedWord = document.getElementById('words-guessed-correctly');
let feedbackMessage = document.getElementById('feedback-message');
let buttonArea = document.getElementById('button-area');
// Global Variables for game.js
let word = "";
let correctGuessedWord = [];
let canSubmit = false;
let livesLeft = 5;
let livesTaken = 0;
let noOfCorrectWords = 0;

let cardiacDictionary = [{
        drugName: 'BISOPROLOL',
        hint: 'Beta-blocker to slow heart rate',
    },
    {
        drugName: 'POTASSIUM',
        hint: 'electrolyte'
    }
];

let painDictionary = [{
        drugName: 'OROMORPH',
        hint: 'painkiller',
    },
    {
        drugName: 'FENTANYL',
        hint: 'painkiller',
    },
    {
        drugName: 'MELATONIN',
        hint: 'sleep',
    }

];

document.addEventListener("DOMContentLoaded", (event) => {
    for (let category of gameCategories) {
        category.addEventListener("click", function () {
            {
                let gameType = this.getAttribute('data-type');
                console.log(gameType);
                let choice;
                if (gameType === 'cardiac') {
                    choice = cardiacDictionary;
                    startGame = true;

                } else if (gameType === 'pain') {
                    choice = painDictionary;
                    startGame = true;
                } else {
                    alert("No items chosen");
                };
                if (startGame) {
                    // let chosenDrug = randomIndex(choice);
                    // word = chosenDrug.drugName;
                    // hint = chosenDrug.hint;
                    displayWhenGameStart();
                    setUpGame(choice);
                    // checks to see if all the letter container is filled then will change class of button
                    setInterval(handleSubmitButton, 1000);
                    guessButton.addEventListener("click", (event) => {
                        if (canSubmit) {
                            guessedWord = makeGuessedWord();
                            console.log(makeGuessedWord());
                            console.log(word);
                            if (isGuessedWordCorrect(word, guessedWord) === true) {
                                $(".letter-container").addClass('correct');
                                setTimeout(function () {
                                    nextWord();
                                    addCorrectGuessedWords(word);
                                    setUpGame(choice);

                                }, 1000)
                            } else {
                                $(".letter-container").addClass('incorrect');
                                setTimeout(function () {
                                    $(".letter-container").removeClass('incorrect')
                                }, 1000)
                                mistakeMade(livesLeft);
                                isGameOver(correctGuessedWord);
                            }
                        }
                    });
                };
            }
        });
    }
});


function displayWhenGameStart() {
    startModal.style.display = 'none';
    displayLives();
    buttonArea.removeAttribute('hidden');
    wordsGuessedTally.removeAttribute('hidden');
    numberOfWordsSpan.innerText = noOfCorrectWords;
}

function setUpGame(choice) {
    let chosenDrug = randomIndex(choice);
    word = chosenDrug.drugName;
    hint = chosenDrug.hint;
    console.log(hint)
    addBox(word);
    addGuessletterBox(word);
    dragAndDrop();

}

// Add div per letter of word
function addBox(word) {

    for (letter of word) {
        let letterPerBox = document.createElement('div');
        letterPerBox.className = "letter-box col-1 letter-container";
        letterPerBox.dataset.letter = letter; // https://blog.webdevsimplified.com/2020-10/javascript-data-attributes/
        document.getElementById("game-area").appendChild(letterPerBox);
        console.log(letterPerBox);
    }
};

// https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
// function to generate a random index
function randomIndex(array) {
    // should return a random number between the array lenght
    return array[(Math.floor(Math.random() * array.length))];

}

// https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
function shuffleWord(word) {
    let shuffledWord = '';
    word = word.split('');
    while (word.length > 0) {
        shuffledWord += word.splice(word.length * Math.random() << 0, 1);
    }
    return shuffledWord;
}

function addGuessletterBox(word) {

    let shuffledWord = shuffleWord(word);

    console.log(shuffledWord);

    for (letter of shuffledWord) {
        let outerBoxContainer = document.createElement('div');
        outerBoxContainer.className = "letter-box col-2";
        let draggableletterBox = document.createElement('span');
        draggableletterBox.className = "draggableLetters text-center";
        draggableletterBox.dataset.letter = letter;
        draggableletterBox.setAttribute('draggable', true);
        draggableletterBox.innerText = letter;
        outerBoxContainer.appendChild(draggableletterBox);
        document.getElementById("letter-area").appendChild(outerBoxContainer);
        console.log(draggableletterBox);
    }
}


function displayLives() {
    lives.removeAttribute('hidden');
}

function dragAndDrop() {
    $('.draggableLetters').css({
        'left': '0px',
        'justify-content': 'center',
    });
    $('.draggableLetters').draggable({
        revert: true,

    });
    $(".letter-container").droppable({
        accept: '.draggableLetters',
        drop: function (event, ui) {
            if (isEmpty(this)) {
                $(this).append($(ui.draggable));
                $(this.children).removeClass('ui-draggable').removeClass('ui-draggable-handle');
            }
        },
        out: function (event, ui) {
            $(".letter-box").droppable({
                accept: '.draggableLetters',
                drop: function (event, ui) {
                    if (isEmpty(this)) {
                        $(this).append($(ui.draggable));
                    }
                }
            });
        }
    });

}

function isEmpty(parent) {
    return parent.children.length == 0;
}

function isLetterContainersFilled() {
    for (let letterContainer of letterContainers) {
        if (!(letterContainer.children.length > 0)) {
            return false;
        };
    }
    return true;
}

function handleSubmitButton() {
    let guessButton = document.getElementById('guess-button');
    if (isLetterContainersFilled()) {
        guessButton.classList.add('enabled');
        canSubmit = true;
    } else {
        guessButton.classList.remove('enabled');
        canSubmit = false;
    }
}

function makeGuessedWord() {
    let guessedWord = [];
    for (let letter of draggableLetters) {
        guessedWord.push(letter.innerText);
    }
    return guessedWord;
}

function isGuessedWordCorrect(chosenWord, guessedWord) {
    return chosenWord === guessedWord.join("");
}

function mistakeMade() {
    livesLeft--;
    livesTaken = 5 - livesLeft;
    $(`#life${livesTaken}`).fadeOut("slow");
}

function isGameOver() {
    if (livesLeft === 0) {
        hideGameWhenGameOver();
        isPlayAgain();
        writeCorrectGuessedWords(correctGuessedWord);
        addFeedbackMessage(noOfCorrectWords);
        return true;
    }
}

function hideGameWhenGameOver() {
    gameOverModal.style.display = "block";
    gameArea.style.display = "none";
    letterArea.style.display = "none";
    buttonArea.style.display ="none";
    wordsGuessedTally.style.display = "none";
}

function isPlayAgain() {
    playAgainButton.addEventListener("click", (event) => {
        window.location.reload();
    });
}

//https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
function nextWord() {
    while (gameArea.firstChild) {
        gameArea.firstChild.remove();
        letterArea.firstChild.remove();
    }
}

function addCorrectGuessedWords(guessedWord) {
    correctGuessedWord.push(guessedWord);
    noOfCorrectWords = correctGuessedWord.length;
    numberOfWordsSpan.innerText = noOfCorrectWords;
}

function writeCorrectGuessedWords(wordList) {
    for (word of wordList) {
        let guessedWord = document.createElement('li');
        guessedWord.innerText = word;
        listofGuessedWord.appendChild(guessedWord);
    }
}

function addFeedbackMessage(noOfWords) {
    let feedback = ""
    if (noOfWords === 0) {
        feedback = "Boohoo! You have guessed none of the drugs. Time to read the British National Formulary (BNF)"
    } else if (noOfWords === 1) {
        feedback = `Well done! You have guessed a drug. Read the British National Formulary (BNF) to learn more drugs`
    } else {
        feedback = `Well Done! You have guessed ${noOfWords} drugs. Call yourself a master of drugs`
    }
    feedbackMessage.innerText = feedback;

}


if (typeof module !== 'undefined') module.exports = {
    startGame,
    gameCategories,
    addBox,
    randomIndex,
    cardiacDictionary,
    painDictionary
}