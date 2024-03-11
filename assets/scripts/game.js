
// Variables from Dom
let startGame = false;
const gameCategories = document.getElementsByClassName('game-categories');
const startModal = document.getElementById('start-menu');
let draggableLetters = document.getElementsByClassName('draggableLetters');
let letterContainers = document.getElementsByClassName('letter-container');
let gameArea = document.getElementById('game-area');
let letterArea = document.getElementById('letter-area');
let gameContainer = document.getElementById('game-container');
let playAgainButton = document.getElementsByClassName('play-again');
let gameOverModal = document.getElementById('game-over');
let lives = document.getElementById('lives');
let guessButton = document.getElementById('guess-button');
let wordsGuessedTally = document.getElementById('words-guessed');
let numberOfWordsSpan = document.getElementById('number-words-guessed');
let listofGuessedWord = document.getElementById('words-guessed-correctly');
let feedbackMessage = document.getElementById('feedback-message');
let buttonArea = document.getElementById('button-area');
let hintArea = document.getElementById('hint-area');
let hintMessage = document.getElementById('hint-message');
let quitGameArea = document.getElementById('quit-game');
let quitGameButton = document.getElementById('quit-game-btn');
let wonGameModal = document.getElementById('won-game');
let instructionButton = document.getElementById('instruction-btn');
let instructionSection = document.getElementById('instructions');
let closeInstructionButton = document.getElementById('close-instructions-btn');
let contactButton = document.getElementById('contact-us-btn');
let contactModal = document.getElementById('contact-modal');
let closeContactIngame = document.getElementById('close-contact-btn-ingame');
let closeContactOutgame = document.getElementById('close-contact-btn-outgame');


// Global Variables for game.js
let word = "";
let hint = "";
let correctGuessedWord = [];
let canSubmit = false;
let livesLeft = 5;
let livesTaken = 0;
let noOfCorrectWords = 0;
let gameIsOver = false;
let gameIsWon = false;
const jsConfetti = new JSConfetti();
let cardiacDictionary = [{
        drugName: 'BISOPROLOL',
        hint: 'Hint: Treatment for hypertension and heart failure. It works by selectively blocking certain receptors in the body, resulting in decreased heart rate and blood pressure.',
    },
    {
        drugName: 'POTASSIUM',
        hint: "Hint: It's commonly found in foods like bananas, oranges, and potatoes, and its deficiency can lead to symptoms like muscle weakness and irregular heartbeat.",
    },
    {
        drugName: 'AMLODIPINE',
        hint: 'Hint: This medication is widely prescribed to treat hypertension (high blood pressure) and certain cardiovascular conditions. It belongs to a class of drugs known as calcium channel blockers and works by relaxing blood vessels, thereby improving blood flow and lowering blood pressure.'
    },
    {
        drugName: 'RAMIPRIL',
        hint: 'Hint: This medication is often prescribed for the treatment of hypertension (high blood pressure) and heart failure. It belongs to a class of drugs known as angiotensin-converting enzyme (ACE) inhibitors, which work by relaxing blood vessels, reducing blood pressure, and improving heart function.'
    },
    {
        drugName: 'LISINOPRIL',
        hint: 'Hint: This medication is commonly prescribed to treat hypertension (high blood pressure) and heart failure. It belongs to a class of drugs known as angiotensin-converting enzyme (ACE) inhibitors, which work by relaxing blood vessels and reducing the workload on the heart.'
    },
    {
        drugName: 'AMIODARONE',
        hint: 'Hint: This medication is often prescribed to treat hypertension (high blood pressure) and certain cardiovascular conditions. It belongs to a class of drugs known as calcium channel blockers and works by relaxing blood vessels, thereby improving blood flow and lowering blood pressure.'
    },
    {
        drugName: 'MAGNESIUM',
        hint: "Hint: This essential mineral is crucial for muscle and nerve function, heart rhythm regulation, and overall health. It's commonly found in various foods and can be taken as a supplement."
    },
    {
        drugName: 'ASPIRIN',
        hint: 'Hint: This medication is commonly prescribed to reduce the risk of heart attacks and strokes by preventing blood clots. It achieves this by inhibiting the action of certain enzymes involved in the clotting process.'
    },

];

let painDictionary = [{
        drugName: 'ORAMORPH',
        hint: "Hint: This medication is a powerful opioid painkiller commonly used for the relief of severe pain, particularly in palliative care or end-of-life situations. It's often prescribed in liquid form for ease of administration, especially for patients who have difficulty swallowing tablets or capsules.",
    },
    {
        drugName: 'FENTANYL',
        hint: "Hint: This medication is a potent synthetic opioid analgesic used for the management of severe pain, particularly in cases such as surgery, cancer treatment, or chronic pain where other opioids may not provide sufficient relief. It's available in various formulations, including transdermal patches, lozenges, and injectable solutions.",
    },
    {
        drugName: 'TRAMADOL',
        hint: 'Hint: This medication is a synthetic opioid analgesic often prescribed for the management of moderate to moderately severe pain. It works by binding to opioid receptors in the brain, altering the perception of pain, and inhibiting the reuptake of certain neurotransmitters.',
    },
    {
        drugName: 'MORPHINE',
        hint: "Hint: This medication is a powerful opioid analgesic derived from the opium poppy plant. It's commonly used for the management of severe pain, such as that experienced after surgery or in cancer patients. It works by binding to opioid receptors in the brain and spinal cord, effectively reducing the perception of pain.",
    },
    {
        drugName: 'IBUPROFEN',
        hint: "Hint: This widely used medication is a nonsteroidal anti-inflammatory drug (NSAID) commonly found in many over-the-counter pain relievers. It's often used to reduce pain, inflammation, and fever, making it a versatile option for various conditions such as headaches, muscle aches, arthritis, and menstrual cramps."
    },
    {
        drugName: "GABAPENTIN",
        hint: "Hint: This medication is primarily used to treat seizures and nerve pain associated with conditions like shingles and diabetic neuropathy. Additionally, it's sometimes prescribed off-label for other conditions such as fibromyalgia and anxiety disorders. It works by altering the activity of certain neurotransmitters in the brain."
    },
    {
        drugName: "CODEINE",
        hint: "Hint: This medication is a narcotic pain reliever and cough suppressant derived from the opium poppy plant. It's often used to treat mild to moderately severe pain and as a cough suppressant."
    }

];

let antibioticsDictionary = [{
        drugName: "CEFUROXIME",
        hint: "abx"
    },
    {
        drugName: "MEROPENUM",
        hint: "abx"
    }
];


document.addEventListener("DOMContentLoaded", (event) => {
    showInstructions();
    displayContactModal();
    for (let category of gameCategories) {
        category.addEventListener("click", function () {
            {
                let gameType = this.getAttribute('data-type');
                let choice;
                if (gameType === 'cardiac') {
                    choice = cardiacDictionary;
                    startGame = true;

                } else if (gameType === 'pain') {
                    choice = painDictionary;
                    startGame = true;
                } else if (gameType == 'antibiotics') {
                    choice = antibioticsDictionary;
                    startGame = true;
                } else {
                    alert("No items chosen");
                };
                if (startGame) {
                    displayWhenGameStart();
                    setUpGame(choice);
                    // checks to see if all the letter container is filled then will change class of button
                    setInterval(handleSubmitButton, 1000);
                    guessButton.addEventListener("click", (event) => {
                        if (canSubmit) {
                            guessedWord = makeGuessedWord();
                            if (isGuessedWordCorrect(word, guessedWord) === true) {
                                $(".letter-container").addClass('correct');
                                setTimeout(function () {
                                    nextWord();
                                    addCorrectGuessedWords(word);
                                    setUpGame(choice);
                                    if (gameIsWon) {
                                        wonGame(correctGuessedWord);
                                    }

                                }, 300)
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
                    quitGame();

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
    quitGameArea.removeAttribute('hidden');
    handleInfoButtonIngame();
}

function setUpGame(choice) {
    if (!(hasUserWonTheGame(choice))) {
        let chosenDrug = getRandomDrug(choice);

        word = chosenDrug.drugName;
        hint = chosenDrug.hint;
        addBox(word);
        addGuessletterBox(word);
        dragAndDrop();
        resetHintButton();
        showHint(hint);
    } else {
        gameIsWon = true;
        startGame = false;
    }
}

// Add div per letter of word
function addBox(word) {
    for (letter of word) {
        let letterPerBox = document.createElement('div');
        letterPerBox.className = "letter-box letter-container";
        letterPerBox.dataset.letter = letter; // https://blog.webdevsimplified.com/2020-10/javascript-data-attributes/
        document.getElementById("game-area").appendChild(letterPerBox);
    }
};

// https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
// function to generate a random index
function getRandomDrug(array) {
    // should return a random number between the array lenght
    let randomNumber = Math.floor(Math.random() * array.length)
    let randomDrug = array.splice(randomNumber, 1)[0];
    return randomDrug;
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

    for (letter of shuffledWord) {
        let outerBoxContainer = document.createElement('div');
        outerBoxContainer.className = "letter-box";
        let draggableletterBox = document.createElement('span');
        draggableletterBox.className = "draggableLetters text-center";
        draggableletterBox.dataset.letter = letter;
        draggableletterBox.setAttribute('draggable', true);
        draggableletterBox.innerText = letter;
        outerBoxContainer.appendChild(draggableletterBox);
        document.getElementById("letter-area").appendChild(outerBoxContainer);

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
        guessButton.classList.remove('disabled');
        guessButton.classList.add('enabled');
        canSubmit = true;
    } else {
        guessButton.classList.add('disabled');
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
        startGame = false;
        return true;
    }
}

function hideGameWhenGameOver() {
    gameOverModal.style.display = "block";
    gameContainer.style.display = "none";
    buttonArea.style.display = "none";
    hintArea.style.display = "none";
    wordsGuessedTally.style.display = "none";
    quitGameArea.style.display = "none";
    gameIsOver = true;
}

function isPlayAgain() {
    for (let btn of playAgainButton) {
        btn.addEventListener("click", (event) => {
            window.location.reload();
        });
    }
}

//https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
function nextWord() {
    while (gameArea.firstChild) {
        gameArea.firstChild.remove();
        letterArea.firstChild.remove();
    }
    hintArea.style.display = "none";
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

function showHint(hint) {
    hintMessage.innerText = hint;
    $("#hint-button").click(function () {
        $("#hint-area").css('display', 'block');
        $(this).addClass("disabled");
    });
}

function quitGame() {
    quitGameButton.addEventListener("click", (event) => {
        hideGameWhenGameOver();
        isPlayAgain();
        writeCorrectGuessedWords(correctGuessedWord);
        addFeedbackMessage(noOfCorrectWords);
        lives.style.display = "none";
        startGame = false;

    });
}

function displayContactModal() {
    contactButton.addEventListener("click", (event) => {
        if (startGame) {
            gameContainer.style.display = "none";
            buttonArea.style.display = "none";
            wordsGuessedTally.style.display = "none";
            quitGameArea.style.display = "none";
            lives.style.display = "none";
            hintArea.style.display = "none";
            contactModal.style.display = "block";
            closeContactIngame.removeAttribute("hidden");
            closeContactIngame.addEventListener("click", (event) => {
                gameContainer.style.display = "block";
                buttonArea.style.display = "block";
                wordsGuessedTally.style.display = "block";
                quitGameArea.style.display = "block";
                lives.style.display = "block";
                closeContactIngame.setAttribute("hidden", true);
                contactModal.style.display = "none";
            });
        } else if (gameIsWon) {
            wonGameModal.style.display = "none";
            contactModal.style.display = "block";
            closeContactOutgame.removeAttribute("hidden");
            handleCloseContactBtn();
        } else if (gameIsOver) {
            gameOverModal.style.display = "none";
            contactModal.style.display = "block";
            closeContactOutgame.removeAttribute("hidden");
            handleCloseContactBtn();
        } else {
            instructionSection.style.display = "none";
            startModal.style.display = "none";
            contactModal.style.display = "block";
            closeContactOutgame.removeAttribute("hidden");
            handleCloseContactBtn();
        }

    })

}

function handleCloseContactBtn() {
    closeContactOutgame.addEventListener("click", (event) => {
        if (gameIsOver) {
            gameOverModal.style.display = "block";
            contactModal.style.display = "none";
            closeContactOutgame.setAttribute("hidden", true);

        } else if (gameIsWon) {
            wonGameModal.style.display = "block";
            contactModal.style.display = "none";
            closeContactOutgame.setAttribute("hidden", true);
        } else {
            contactModal.style.display = "none";
            startModal.style.display = "block";
            closeContactOutgame.setAttribute("hidden", true);
        }
    });
}

function hasUserWonTheGame(guessedWordList) {
    if (guessedWordList.length === 0) {
        return true;
    }
    return false;
}

function wonGame() {
    wonGameModal.style.display = "block";
    gameContainer.style.display = "none";
    buttonArea.style.display = "none";
    wordsGuessedTally.style.display = "none";
    quitGameArea.style.display = "none";
    lives.style.display = "none";
    // https://www.npmjs.com/package/js-confetti
    jsConfetti.addConfetti({
        emojis : ['💊'],
     })
    isPlayAgain();
}

function showInstructions() {
    instructionButton.addEventListener("click", (event) => {
        instructionSection.style.display = "block";
        startModal.style.display = 'none';
    });
    closeInstructionButton.addEventListener("click", (event) => {
        if (startGame) {
            instructionSection.style.display = "none";
        } else {
            instructionSection.style.display = "none";
            instructionSection.removeClass = "modal";
            startModal.style.display = 'block';
        }
    });
}

function resetHintButton() {
    $("#hint-button").removeClass("disabled");
}

function handleInfoButtonIngame() {
    $("#instruction-btn-ingame").click(function () {
        $("#instructions").css("display", "block").addClass("modal");
    });
}



if (typeof module !== 'undefined') module.exports = {
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
}