/* jshint esversion: 11, jquery: true */
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
let gameIsExited = false;

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
        hint: "Hint: This antibiotic is a second-generation cephalosporin commonly used to treat a variety of bacterial infections, including respiratory tract infections, skin infections, and urinary tract infections. It shares structural similarities with other cephalosporins but possesses enhanced activity against some Gram-negative bacteria."
    },
    {
        drugName: "MEROPENEM",
        hint: "Hint: This broad-spectrum antibiotic is a carbapenem often used for severe bacterial infections, including intra-abdominal infections, pneumonia, and complicated urinary tract infections. Its spectrum of activity includes both Gram-positive and Gram-negative bacteria, making it a potent choice for serious infections where other antibiotics may be ineffective."
    },
    {
        drugName: "VANCOMYCIN",
        hint: `Hint: This antibiotic is often referred to as a "last resort" medication due to its potency against multidrug-resistant bacteria, particularly Gram-positive organisms such as MRSA (Methicillin-resistant Staphylococcus aureus). It's commonly used to treat serious infections like bloodstream infections, pneumonia, and infections caused by Clostridium difficile.`
    },
    {
        drugName: "GENTAMICIN",
        hint: "Hint: This antibiotic belongs to the aminoglycoside class and is commonly used to treat severe bacterial infections, particularly those caused by Gram-negative bacteria such as Escherichia coli and Pseudomonas aeruginosa. It's often administered parenterally and is known for its efficacy against a wide range of bacteria, but it's also associated with potential side effects such as nephrotoxicity and ototoxicity."
    },
    {
        drugName: "PENICILLIN",
        hint: "Hint: This widely used antibiotic was the first discovered member of the beta-lactam class of antibiotics. It's effective against a broad range of bacterial infections, especially those caused by Gram-positive bacteria such as Streptococcus and Staphylococcus species. Despite its effectiveness, some strains of bacteria have developed resistance to it over time."
    },
    {
        drugName: "TAZOCIN",
        hint: "Hint: This antibiotic combination is known for its broad spectrum of activity against both Gram-positive and Gram-negative bacteria, including many strains that are resistant to other antibiotics. It's commonly used in hospital settings for serious infections where a potent antibiotic is required."
    },
];
let noOfDrugs = 0;


// MAIN FUNCTION:
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
                    noOfDrugs = cardiacDictionary.length;
                    startGame = true;

                } else if (gameType === 'pain') {
                    choice = painDictionary;
                    noOfDrugs = painDictionary.length;
                    startGame = true;
                } else if (gameType == 'antibiotics') {
                    choice = antibioticsDictionary;
                    noOfDrugs = antibioticsDictionary.length;
                    startGame = true;
                } else {
                    alert("No items chosen");
                };
                if (startGame) {
                    displayWhenGameStart(gameType, noOfDrugs);
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
                                    addCorrectGuessedWords(gameType, noOfDrugs, word);
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

/** Display the game area */
function displayWhenGameStart(gameType, noOfDrugs) {
    startModal.style.display = 'none';
    displayLives();
    buttonArea.removeAttribute('hidden');
    wordsGuessedTally.removeAttribute('hidden');
    numberOfWordsSpan.innerText = `${gameType} drug: ${noOfCorrectWords+1}/${noOfDrugs}`;
    quitGameArea.removeAttribute('hidden');
    handleInfoButtonIngame();
}

/** Set up the game as long as user has not won */
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

/** Add a div to the game area per letter of the chosen word*/
function addBox(word) {
    for (letter of word) {
        let letterPerBox = document.createElement('div');
        letterPerBox.className = "letter-box letter-container";
        letterPerBox.dataset.letter = letter; // https://blog.webdevsimplified.com/2020-10/javascript-data-attributes/
        document.getElementById("game-area").appendChild(letterPerBox);
    }
}

// https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
/** Removes a random drug from the array and returns it to be used */
function getRandomDrug(array) {
    // should return a random number between the array lenght
    let randomNumber = Math.floor(Math.random() * array.length)
    let randomDrug = array.splice(randomNumber, 1)[0];
    return randomDrug;
}

// https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
/** Shuffle the word array */
function shuffleWord(word) {
    let shuffledWord = '';
    word = word.split('');
    while (word.length > 0) {
        shuffledWord += word.splice(word.length * Math.random() << 0, 1);
    }
    return shuffledWord;
}

/** Add a div and a span per letter of the word to the letter-area of the game container */
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

/** Display lives by removing hidden attribute */
function displayLives() {
    lives.removeAttribute('hidden');
}

/** Drag and Drop functionality */
function dragAndDrop() {
    $('.draggableLetters').css({
        'left': '0px',

    });
    $('.draggableLetters').draggable({
        revert: true,
        zIndex: 100,
        start: function (event, ui) {
            $(this).addClass("dragging");
        },
        stop: function (event, ui) {
            $(this).removeClass("dragging");
        }

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

/** Bool to check if parent div has no children */
function isEmpty(parent) {
    return parent.children.length == 0;
}

/** Checks if all the letter containers are filled */
function isLetterContainersFilled() {
    for (let letterContainer of letterContainers) {
        if (!(letterContainer.children.length > 0)) {
            return false;
        };
    }
    return true;
}

/** Enable submit button only when the containers are filled otherwise it is diabled */
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

/** Make an array of the user guess */
function makeGuessedWord() {
    let guessedWord = [];
    for (let letter of draggableLetters) {
        guessedWord.push(letter.innerText);
    }
    return guessedWord;
}

/** Check to see if the user guessed word is equal to the chosen word */
function isGuessedWordCorrect(chosenWord, guessedWord) {
    return chosenWord === guessedWord.join("");
}

/** Removes a life when when mistake have been made and add jquery animation */
function mistakeMade() {
    livesLeft--;
    livesTaken = 5 - livesLeft;
    $(`#life${livesTaken}`).fadeOut("slow");
}

/** Handle a game over event and add animation */
function isGameOver() {
    if (livesLeft === 0) {
        hideGameWhenGameOver();
        isPlayAgain();
        writeCorrectGuessedWords(correctGuessedWord);
        addFeedbackMessage(noOfCorrectWords);
        ignoreLine();
        startGame = false;
        return true;
    }
}

/** Shows game over modal and hides game area when game is over */
function hideGameWhenGameOver() {
    gameOverModal.style.display = "block";
    gameContainer.style.display = "none";
    buttonArea.style.display = "none";
    hintArea.style.display = "none";
    wordsGuessedTally.style.display = "none";
    quitGameArea.style.display = "none";
    gameIsOver = true;
}

/** Event listener for play again and reloads the page */
function isPlayAgain() {
    for (let btn of playAgainButton) {
        btn.addEventListener("click", (event) => {
            window.location.reload();
        });
    }
}

/** Removes old word divs to proceed to the next word */
//https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
function nextWord() {
    while (gameArea.firstChild) {
        gameArea.firstChild.remove();
        letterArea.firstChild.remove();
    }
    hintArea.style.display = "none";
}

/** Display and add correct guessed words to the array*/
function addCorrectGuessedWords(gameType, guessedWord) {
    correctGuessedWord.push(guessedWord);
    noOfCorrectWords = correctGuessedWord.length;
    numberOfWordsSpan.innerText = `${gameType} drug: ${noOfCorrectWords+1}/${noOfDrugs}`;
}

/** Display the number of guessed words to game over modal */
function writeCorrectGuessedWords(wordList) {
    for (word of wordList) {
        let guessedWord = document.createElement('li');
        guessedWord.innerText = word;
        listofGuessedWord.appendChild(guessedWord);
    }
}

/** Add a feedback message to game over modal */
function addFeedbackMessage(noOfWords) {
    let feedback = ""
    if (noOfWords === 0) {
        feedback = `Boohoo! You have guessed none of the drugs. Time to read the <a target="_blank" href="https://bnf.nice.org.uk/" rel="nofollow noreferrer">British National Formulary (BNF)</a>`;
    } else if (noOfWords === 1) {
        feedback = `Well done! You have guessed a drug. Read the <a target="_blank" href="https://bnf.nice.org.uk/" rel="nofollow noreferrer">British National Formulary (BNF)</a> to learn more drugs`;
    } else {
        feedback = `Well Done! You have guessed ${noOfWords} drugs. Call yourself a master of drugs`;
    }
    feedbackMessage.innerHTML = feedback;
}

/** Display the hint and handle hint button */
function showHint(hint) {
    hintMessage.innerText = hint;
    $("#hint-button").click(function () {
        $("#hint-area").css('display', 'block');
        $(this).addClass("disabled");
    });
}

/** Handles the quit game button removes display of game area and add game over modal */
function quitGame() {
    quitGameButton.addEventListener("click", (event) => {
        hideGameWhenGameOver();
        isPlayAgain();
        writeCorrectGuessedWords(correctGuessedWord);
        addFeedbackMessage(noOfCorrectWords);
        lives.style.display = "none";
        gameIsExited = true;
        ignoreLine();
        startGame = false;


    });
}

/** Handles display of contact modal both in game and out of game */
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

/** Handles when close contact button in game or out of game */
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

/** Checks if user has won by returning true when the array's length is 0 */
function hasUserWonTheGame(guessedWordList) {
    if (guessedWordList.length === 0) {
        return true;
    }
    return false;
}

/** Handles won game vent by adding confetti and displaying won game modal*/
function wonGame() {
    wonGameModal.style.display = "block";
    gameContainer.style.display = "none";
    buttonArea.style.display = "none";
    wordsGuessedTally.style.display = "none";
    quitGameArea.style.display = "none";
    lives.style.display = "none";
    ignoreLine();
    isPlayAgain();
}

/** Handles show and close instructions buttons to show instructions in game and out game */
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

/** Removes the disabled class to hint button */
function resetHintButton() {
    $("#hint-button").removeClass("disabled");
}

/** Handles instructions button in game */
function handleInfoButtonIngame() {
    $("#instruction-btn-ingame").click(function () {
        $("#instructions").css("display", "block").addClass("modal");
    });
}

// Add confetti based on events, Named Ignore line for jest to ignore;
// https://www.npmjs.com/package/js-confetti
// https://codewithhugo.com/jest-exclude-coverage/
function ignoreLine(){
    const jsConfetti = new JSConfetti();
    if (gameIsWon) {
        jsConfetti.addConfetti({
            emojis: ['💊'],
        })
    } else if (gameIsExited) {
        jsConfetti.addConfetti({
            emojis: ['😭'],
        });
    } else if (gameIsOver) {
        jsConfetti.addConfetti({
            emojis: ['☠️'],
        });
    } else {
        return;
    }
}


// Module exports for jest testing
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
    gameIsExited,
    noOfDrugs,
}