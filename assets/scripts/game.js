// start of game is false
let startGame = false;
const gameCategories = document.getElementsByClassName('game-categories');
const startModal = document.getElementById('start-menu');
const draggableLetters = document.querySelectorAll('.draggable');
const letterContainers = document.querySelectorAll('.letter-container');


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
                    let word = randomIndex(choice).drugName;
                    console.log(word);

                    startModal.style.display = 'none';
                    displayGuessButton();
                    addBox(word);
                    addGuessletterBox(word)
                    $('.draggableLetters').css({
                        'left': '0px',
                        'justify-content': 'center',
                    });
                    $('.draggableLetters').draggable({
                        revert: true,
                        
                    });

                    $(".letter-container").droppable({
                        accept: '.draggableLetters',
                        drop: function(event, ui) {
                            if(isEmpty(this)){
                                $(this).append($(ui.draggable)); 
                                $(this.children).removeClass('ui-draggable').removeClass('ui-draggable-handle');
                            }
                            
                        },
                        out: function(event, ui) {
                            $(".letter-box").droppable({
                                accept: '.draggableLetters',
                                drop: function(event, ui) {
                                    if(isEmpty(this)){
                                        $(this).append($(ui.draggable));
                                    }                                   
                                }
                            });
                        }
                    });
                    isLetterContainersFilled();
                    handleSubmitButton();
                };
            }
        });
    }
});

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

if (typeof module !== 'undefined') module.exports = {
    startGame,
    gameCategories,
    addBox,
    randomIndex,
    cardiacDictionary,
    painDictionary
}

function displayGuessButton () {
    let element = document.getElementById("guess-button");
    element.removeAttribute("hidden");

}

function isEmpty(parent) {
    return parent.children.length === 0;
}

function isLetterContainersFilled() {
    for (let letterContainer of letterContainers) {
        console.group(isEmpty(letterContainer));
        if (isEmpty(letterContainer)) {
            return false;
            
        }
        console.group(isEmpty(letterContainer));
    }
    return true;
}

function handleSubmitButton() {
    let canSubmit = false;
    if(isLetterContainersFilled) {
        let guessButton = document.getElementById('guess-button');
        guessButton.classList.add('enabled');
        canSubmit = true;
    }
}
