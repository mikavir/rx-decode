
// start of game is false
const startGame = false;
const gameCategories = document.getElementsByClassName('game-categories');
const startModal = document.getElementById('myModal')
let cardiacDictionary = [
    { drugName: 'Bisoprolol',
        hint: 'Beta-blocker to slow heart rate',
    },
    {
        drugName: 'Potassium',
        hint: 'electrolyte'
    }
];

let painDictionary = [
    {
        drugName: 'oromorph',
        hint: 'painkiller',
    },
    {
        drugName: 'fentanyl',
        hint: 'painkiller',
    }
];

$(document).ready(function (){
    for(let category of gameCategories){
        category.addEventListener("click", function(){
             {  
                let gameType = this.getAttribute('data-type');
                console.log(gameType);
                let choice;
                if (gameType === 'cardiac') {
                    choice = cardiacDictionary;

                } else if (gameType === 'pain') {
                    choice = painDictionary;
                } else {
                    alert("No items chosen");
                }
                // modal to desapear
                startModal.style.display = 'none'; 
                addBox(choice);              
               
            }
        });
    }
})

// Add div per letter of word
function addBox (choice) {

    let word = randomIndex(choice).drugName;

    for (letter of word) {
        let letterPerBox = document.createElement('div');
        letterPerBox.className = "letter-box col-1";
        letterPerBox.dataset.letter = letter; // https://blog.webdevsimplified.com/2020-10/javascript-data-attributes/
        document.getElementById("game-area").appendChild(letterPerBox);
        console.log (letterPerBox);
    }
};

// https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
// function to generate a random index
function randomIndex (array) {
    // should return a random number between the array lenght
    return array[(Math.floor(Math.random() * array.length))];

}


module.exports = { startGame , gameCategories};